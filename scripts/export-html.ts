import fs from 'node:fs';
import path from 'node:path';

/**
 * Script: export-html.ts
 * Genera archivos HTML autónomos y 100% fieles a partir de las páginas y componentes de src/.
 * Inyecta el CSS compilado de Tailwind v4 y resuelve enlaces y assets para visualización estática offline.
 *
 * Uso:
 *   pnpm exec tsx scripts/export-html.ts                (exporta todas las páginas a source/html-clonados/)
 *   pnpm exec tsx scripts/export-html.ts --page inicio   (exporta solo inicio)
 *   pnpm exec tsx scripts/export-html.ts --out ruta/dir  (especifica carpeta destino)
 */

const PROJECT_ROOT = process.cwd();
const NEXT_APP_DIR = path.join(PROJECT_ROOT, '.next', 'server', 'app');

// Parámetros de CLI
const args = process.argv.slice(2);
let outputDir = path.join(PROJECT_ROOT, 'source', 'html-clonados');
let targetFilter: string | null = null;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--out' && args[i + 1]) {
    outputDir = path.resolve(PROJECT_ROOT, args[i + 1]);
    i++;
  } else if ((args[i] === '--page' || args[i] === '--route') && args[i + 1]) {
    targetFilter = args[i + 1].toLowerCase();
    i++;
  }
}

const ROUTE_MAP: Record<string, string> = {
  'index.html': 'inicio.html',
  'servicios.html': 'servicios.html',
  'servicios/envios-express.html': 'servicios-envios-express.html',
  'servicios/envios-lowcost.html': 'servicios-envios-lowcost.html',
  'servicios/enviosflex.html': 'servicios-enviosflex.html',
  'servicios/deposito-fulfillment.html': 'servicios-deposito-fulfillment.html',
  'servicios/empresas-cuenta-corriente.html': 'servicios-empresas-cuenta-corriente.html',
  'servicios/plan-emprendedores.html': 'servicios-plan-emprendedores.html',
  'cobertura.html': 'cobertura.html',
  'contacto.html': 'contacto.html',
  'nosotros.html': 'nosotros.html',
  'nosotros/sobre-nosotros.html': 'nosotros-sobre-nosotros.html',
  'nosotros/preguntas-frecuentes.html': 'nosotros-preguntas-frecuentes.html',
  'nosotros/nuestras-redes.html': 'nosotros-nuestras-redes.html',
  'logistica-dosruedas.html': 'logistica-dosruedas.html',
  'mardelivery.html': 'mardelivery.html',
  'politica-de-privacidad.html': 'politica-de-privacidad.html',
  'terminos-y-condiciones.html': 'terminos-y-condiciones.html',
  'guias/envios-flex-mar-del-plata.html': 'guias-envios-flex-mar-del-plata.html',
};

function ensureDir(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function processHtmlFile(srcFile: string, destFileName: string) {
  if (!fs.existsSync(srcFile)) {
    console.warn(`[WARN] No se encontró el build para: ${srcFile}`);
    return;
  }

  let html = fs.readFileSync(srcFile, 'utf-8');

  // 1. Inyectar estilos CSS compilados de Tailwind v4 de Next.js
  const cssMatches = Array.from(html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="(\/_next\/static\/chunks\/[^"]+\.css)"[^>]*\/?>/g));
  let inlinedStyles = '';

  for (const match of cssMatches) {
    const fullTag = match[0];
    const cssRel = match[1].replace('/_next/', '.next/');
    const cssPath = path.join(PROJECT_ROOT, cssRel);

    if (fs.existsSync(cssPath)) {
      const cssContent = fs.readFileSync(cssPath, 'utf-8');
      inlinedStyles += `\n/* Inlined: ${match[1]} */\n${cssContent}\n`;
      html = html.replace(fullTag, '');
    }
  }

  if (inlinedStyles) {
    const styleTag = `<style id="inlined-tailwind-v4">\n${inlinedStyles}\n</style>`;
    html = html.replace('</head>', `${styleTag}\n</head>`);
  }

  // 2. Limpiar scripts dinámicos de hidratación de Turbopack/Next.js
  html = html.replace(/<script[^>]+src="\/_next\/static\/chunks\/[^"]+\.js"[^>]*><\/script>/g, '');
  html = html.replace(/<link[^>]+rel="preload"[^>]+as="script"[^>]*\/?>/g, '');

  // 3. Normalizar hipervínculos para navegación estática
  html = html.replace(/href="\/([^"#]+)"/g, 'href="$1.html"');
  html = html.replace(/href="inicio\.html"/g, 'href="inicio.html"');

  const destPath = path.join(outputDir, destFileName);
  fs.writeFileSync(destPath, html, 'utf-8');
  console.log(`[OK] Clonado -> ${path.relative(PROJECT_ROOT, destPath)} (${Math.round(html.length / 1024)} KB)`);
}

function main() {
  console.log('=== Generador de HTML Autónomo desde src/ ===');
  console.log(`Carpeta destino: ${path.relative(PROJECT_ROOT, outputDir)}\n`);

  if (!fs.existsSync(NEXT_APP_DIR)) {
    console.error(`[ERROR] No se encontró ${NEXT_APP_DIR}. Ejecutá 'pnpm build' primero.`);
    process.exit(1);
  }

  ensureDir(outputDir);

  for (const [relPath, outName] of Object.entries(ROUTE_MAP)) {
    if (targetFilter) {
      const matchesFilter = relPath.toLowerCase().includes(targetFilter) || outName.toLowerCase().includes(targetFilter);
      if (!matchesFilter) continue;
    }

    const fullPath = path.join(NEXT_APP_DIR, relPath);
    processHtmlFile(fullPath, outName);
  }

  console.log('\n¡Proceso de clonado finalizado con éxito!');
}

main();
