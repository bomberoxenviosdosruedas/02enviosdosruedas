// Builds the Envíos DosRuedas design-system package consumed by /design-sync.
// Output: .ds-pkg/ (gitignored) = package.json + dist/index.js (ESM, react external)
// + types/ (tsc declarations) + dist/styles.css (Tailwind v4 compiled from the real
// globals.css) + dist/fonts/ (brand woff2).
// Run from the repo root: node .design-sync/build/build-ds.mjs
// Needs .ds-sync/node_modules (esbuild) - see .design-sync/NOTES.md.
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const OUT = join(ROOT, '.ds-pkg');
const BUILD = join(ROOT, '.design-sync/build');
const syncRequire = createRequire(join(ROOT, '.ds-sync/package.json'));
const repoRequire = createRequire(join(ROOT, 'package.json'));
const { build } = syncRequire('esbuild');

rmSync(OUT, { recursive: true, force: true });
mkdirSync(join(OUT, 'dist/fonts'), { recursive: true });

// 1. JS: bundle the real components; react stays external for the converter's shims.
const shim = (name) => join(BUILD, 'shims', `${name}.tsx`);
// public/ files referenced by the components (root-relative src), embedded as data URIs
// because /public doesn't exist outside the app. Keep in sync with `grep -rn "src=\"/" src/components/ui`.
const PUBLIC_ASSETS = ['/logo-envios-simplified.webp'];
const MIME = { '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg' };
const publicAssetsModule = `export default ${JSON.stringify(Object.fromEntries(PUBLIC_ASSETS.map((url) => [
  url, `data:${MIME[url.slice(url.lastIndexOf('.'))]};base64,${readFileSync(join(ROOT, 'public', url)).toString('base64')}`,
])))};`;
const nextShims = {
  name: 'next-shims',
  setup(b) {
    b.onResolve({ filter: /^ds:public-assets$/ }, () => ({ path: 'public-assets', namespace: 'ds' }));
    b.onLoad({ filter: /.*/, namespace: 'ds' }, () => ({ contents: publicAssetsModule, loader: 'js' }));
    b.onResolve({ filter: /^next\/link$/ }, () => ({ path: shim('next-link') }));
    b.onResolve({ filter: /^next\/image$/ }, () => ({ path: shim('next-image') }));
  },
};
await build({
  entryPoints: { index: join(BUILD, 'entry.ts') },
  outdir: join(OUT, 'dist'),
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'es2020',
  jsx: 'automatic',
  tsconfig: join(ROOT, 'tsconfig.json'),
  external: ['react', 'react-dom', 'react/jsx-runtime', 'react-dom/client'],
  define: { 'process.env.NODE_ENV': '"production"' },
  loader: { '.png': 'dataurl', '.svg': 'dataurl', '.webp': 'dataurl' },
  plugins: [nextShims],
  logLevel: 'warning',
});

// 2. Types: tsc declarations + a root index.d.ts mirroring entry.ts.
const tsc = join(ROOT, 'node_modules/typescript/bin/tsc');
try {
  execFileSync(process.execPath, [tsc, '-p', join(BUILD, 'tsconfig.dts.json')], { stdio: 'pipe' });
} catch (e) {
  // Declarations are still emitted on type errors; surface them without failing.
  console.warn('[build-ds] tsc reported errors (declarations still emitted):\n' + String(e.stdout ?? '').slice(0, 2000));
}
const entryTs = readFileSync(join(BUILD, 'entry.ts'), 'utf8');
writeFileSync(join(OUT, 'types/index.d.ts'), entryTs.replaceAll("'../../src/", "'./src/"));

// 3. CSS: Tailwind v4 over the real globals.css, scanning the repo like the app build.
const postcss = repoRequire('postcss');
const tailwind = repoRequire('@tailwindcss/postcss');
const cssIn = join(BUILD, 'ds.css');
const compiled = await postcss([tailwind({ base: ROOT, optimize: false })]).process(readFileSync(cssIn, 'utf8'), { from: cssIn });
const componentCss = existsSync(join(OUT, 'dist/index.css')) ? readFileSync(join(OUT, 'dist/index.css'), 'utf8') : '';
// The app gets --font-* from next/font classes on <html>; globals.css's @theme defines
// them self-referentially (var(--font-sans), "Outfit", ...), which is a cycle without
// next/font. Resolve the cycle to the same families the app loads.
const fontVars = `
/* next/font stand-in: the app sets these on <html> via next/font/google */
:root, :host {
  --font-sans: "Outfit", "IBM Plex Sans", sans-serif;
  --font-display: "Anton", sans-serif;
  --font-headline: "Anton", sans-serif;
  --font-subheading: "Bebas Neue", sans-serif;
  --font-mono: "Geist Mono", monospace;
  --font-body: "Outfit", "IBM Plex Sans", sans-serif;
}
`;
writeFileSync(join(OUT, 'dist/styles.css'), `${compiled.css}\n/* bundled component CSS (leaflet) */\n${componentCss}\n${fontVars}`);

// 4. Fonts.
cpSync(join(ROOT, '.design-sync/fonts'), join(OUT, 'dist/fonts'), { recursive: true });

writeFileSync(join(OUT, 'package.json'), JSON.stringify({
  name: '@enviosdosruedas/ui',
  version: '2026.9.0',
  private: true,
  type: 'module',
  module: 'dist/index.js',
  types: 'types/index.d.ts',
}, null, 2));

console.log(`[build-ds] ok -> ${OUT}`);
