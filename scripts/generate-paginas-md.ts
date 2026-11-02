import fs from 'node:fs';
import path from 'node:path';

// Directorio raíz del proyecto
const PROJECT_ROOT = process.cwd();
const APP_DIR = path.join(PROJECT_ROOT, 'src', 'app');
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'source', 'paginas-md');

const CODE_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.cjs'];
const DATA_EXTENSIONS = ['.json'];
const ASSET_EXTENSIONS = [
  '.css',
  '.scss',
  '.sass',
  '.less',
  '.svg',
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.avif',
  '.gif',
  '.ico',
  '.woff',
  '.woff2',
  '.ttf',
  '.otf',
  '.mp4',
  '.webm',
  '.txt',
  '.md',
];

interface FileBlock {
  filePath: string;
  relativePath: string;
  role: string;
  content: string;
  extension: string;
}

function stripComments(code: string): string {
  // Elimina comentarios de bloque y de línea manteniendo cadenas de texto básicas
  return code
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/.*/g, '$1');
}

function extractSpecifiers(code: string): string[] {
  const cleanCode = stripComments(code);
  const specifiers: string[] = [];

  const patterns = [
    /\bfrom\s*['"]([^'"]+)['"]/g,
    /\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/g,
    /\bimport\s+['"]([^'"]+)['"]/g,
    /\brequire\s*\(\s*['"]([^'"]+)['"]\s*\)/g,
    /\bexport\s+[^;]*?\bfrom\s*['"]([^'"]+)['"]/g,
  ];

  for (const pattern of patterns) {
    let match: RegExpExecArray | null;
    while ((match = pattern.exec(cleanCode)) !== null) {
      if (match[1]) {
        specifiers.push(match[1]);
      }
    }
  }

  return specifiers;
}

function resolveSpecifier(specifier: string, fromFile: string): string | null {
  // Ignorar librerías externas o dependencias que no empiezan con @/ ni con ./ ni ../
  let targetPath: string;

  if (specifier.startsWith('@/')) {
    targetPath = path.join(PROJECT_ROOT, 'src', specifier.slice(2));
  } else if (specifier.startsWith('.')) {
    targetPath = path.resolve(path.dirname(fromFile), specifier);
  } else {
    return null;
  }

  const ext = path.extname(targetPath).toLowerCase();
  if (ext) {
    if (ASSET_EXTENSIONS.includes(ext)) return null;
    if (fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) {
      return targetPath;
    }
  }

  // Probar extensiones de código y datos
  for (const candidateExt of [...CODE_EXTENSIONS, ...DATA_EXTENSIONS]) {
    const candidate = targetPath + candidateExt;
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }

  // Probar como directorio con index
  if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()) {
    for (const candidateExt of CODE_EXTENSIONS) {
      const candidateIndex = path.join(targetPath, `index${candidateExt}`);
      if (fs.existsSync(candidateIndex) && fs.statSync(candidateIndex).isFile()) {
        return candidateIndex;
      }
    }
  }

  return null;
}

function determineRole(relativePath: string, isPage: boolean): string {
  const norm = relativePath.replace(/\\/g, '/');
  if (isPage) return 'Página Principal (page.tsx)';
  if (norm.endsWith('layout.tsx')) return 'Shell del App Router (layout.tsx)';
  if (norm.includes('components/layout/')) return 'Componente de Layout';
  if (norm.includes('ClientLayout.tsx')) return 'Layout de Cliente (ClientLayout)';
  if (norm.includes('components/ui/')) return 'Componente Primitivo UI';
  if (norm.includes('components/home/')) return 'Componente de Home';
  if (norm.includes('components/')) return 'Componente de Sección';
  if (norm.includes('hooks/')) return 'Hook React';
  if (norm.includes('lib/')) return 'Librería / Utilidad Local';
  return 'Módulo Local';
}

function getSlugForPage(pagePath: string): { slug: string; route: string; title: string } {
  const relDir = path.relative(APP_DIR, path.dirname(pagePath)).replace(/\\/g, '/');
  if (!relDir || relDir === '.') {
    return {
      slug: 'home',
      route: '/',
      title: 'Home (Inicio)',
    };
  }

  const segments = relDir.split('/').filter(Boolean);
  const slug = segments.join('-');
  const route = '/' + segments.join('/');

  // Título legible
  const lastSegment = segments[segments.length - 1];
  const title = lastSegment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return { slug, route, title };
}

function collectShellFiles(pagePath: string): string[] {
  const shells: string[] = [];
  let currentDir = path.dirname(pagePath);

  while (true) {
    const layoutPath = path.join(currentDir, 'layout.tsx');
    if (fs.existsSync(layoutPath) && fs.statSync(layoutPath).isFile()) {
      shells.push(layoutPath);
    }
    if (currentDir === APP_DIR || path.dirname(currentDir) === currentDir) {
      break;
    }
    currentDir = path.dirname(currentDir);
  }

  // Invertir para que vaya desde src/app/layout.tsx hacia los layouts más profundos
  return shells.reverse();
}

function buildPageBundle(pagePath: string): FileBlock[] {
  const visited = new Set<string>();
  const blocks: FileBlock[] = [];

  const queue: Array<{ file: string; isPage: boolean }> = [];

  // 1. Agregar layouts
  const shellFiles = collectShellFiles(pagePath);
  for (const shell of shellFiles) {
    queue.push({ file: shell, isPage: false });
  }

  // 2. Agregar página
  queue.push({ file: pagePath, isPage: true });

  while (queue.length > 0) {
    const current = queue.shift()!;
    const normPath = path.normalize(current.file);

    if (visited.has(normPath)) continue;
    visited.add(normPath);

    if (!fs.existsSync(normPath)) continue;

    const relPath = path.relative(PROJECT_ROOT, normPath).replace(/\\/g, '/');
    const content = fs.readFileSync(normPath, 'utf-8');
    const role = determineRole(relPath, current.isPage);
    const ext = path.extname(normPath).slice(1) || 'tsx';

    blocks.push({
      filePath: normPath,
      relativePath: relPath,
      role,
      content,
      extension: ext === 'ts' || ext === 'tsx' ? 'tsx' : ext,
    });

    // Extraer imports para seguir recorriendo en profundidad
    const specifiers = extractSpecifiers(content);
    for (const spec of specifiers) {
      const resolved = resolveSpecifier(spec, normPath);
      if (resolved && !visited.has(path.normalize(resolved))) {
        // Solo incluir archivos dentro de src/ (evitar scripts u otras carpetas ajenas)
        const relToSrc = path.relative(path.join(PROJECT_ROOT, 'src'), resolved);
        if (!relToSrc.startsWith('..') && !path.isAbsolute(relToSrc)) {
          queue.push({ file: resolved, isPage: false });
        }
      }
    }
  }

  return blocks;
}

function findPublicPages(dir: string): string[] {
  const pages: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Excluir rutas internas y admin
      if (['admin', 'revisar', 'api'].includes(entry.name)) {
        continue;
      }
      pages.push(...findPublicPages(fullPath));
    } else if (entry.isFile() && entry.name === 'page.tsx') {
      pages.push(fullPath);
    }
  }

  return pages;
}

function generateMarkdown(
  pagePath: string,
  slugInfo: { slug: string; route: string; title: string },
  blocks: FileBlock[]
): string {
  const lines: string[] = [];

  lines.push(`# Contexto Consolidado: ${slugInfo.title} (\`${slugInfo.route}\`)`);
  lines.push('');
  lines.push('> Documento generado automáticamente para referencia e integración completa.');
  lines.push('> Incluye el código de `layout.tsx`, los componentes de layout (`Header`, `Footer`, `CarruselRedes`, etc.), `page.tsx` y todos los componentes y dependencias resueltos en profundidad.');
  lines.push('');
  lines.push(`* **Ruta de la página:** \`${slugInfo.route}\``);
  lines.push(`* **Punto de entrada:** [\`${path.relative(PROJECT_ROOT, pagePath).replace(/\\/g, '/')}\`](file:///${pagePath.replace(/\\/g, '/')})`);
  lines.push(`* **Cantidad total de archivos incluidos:** ${blocks.length}`);
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Tabla de Contenidos');
  lines.push('');

  blocks.forEach((block, index) => {
    const num = index + 1;
    const anchor = block.relativePath.toLowerCase().replace(/[^a-z0-9]/g, '');
    lines.push(`${num}. [${block.relativePath}](#${anchor}) — *${block.role}*`);
  });

  lines.push('');
  lines.push('---');
  lines.push('');

  blocks.forEach((block, index) => {
    const num = index + 1;
    const anchor = block.relativePath.toLowerCase().replace(/[^a-z0-9]/g, '');
    lines.push(`<a id="${anchor}"></a>`);
    lines.push(`## ${num}. \`${block.relativePath}\``);
    lines.push(`* **Rol:** ${block.role}`);
    lines.push(`* **Archivo:** [\`${block.relativePath}\`](file:///${block.filePath.replace(/\\/g, '/')})`);
    lines.push('');
    lines.push('```' + block.extension);
    lines.push(block.content.trimEnd());
    lines.push('```');
    lines.push('');
    lines.push('---');
    lines.push('');
  });

  return lines.join('\n');
}

async function main() {
  console.log('Iniciando generador de archivos consolidados Markdown...');

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Directorio creado: ${OUTPUT_DIR}`);
  }

  const pages = findPublicPages(APP_DIR).sort();
  console.log(`Se detectaron ${pages.length} páginas públicas en el App Router:`);

  for (const page of pages) {
    const slugInfo = getSlugForPage(page);
    console.log(`- Procesando [${slugInfo.route}] -> ${slugInfo.slug}.md...`);

    const blocks = buildPageBundle(page);
    const mdContent = generateMarkdown(page, slugInfo, blocks);

    const outPath = path.join(OUTPUT_DIR, `${slugInfo.slug}.md`);
    fs.writeFileSync(outPath, mdContent, 'utf-8');
    console.log(`  ✓ Guardado: ${outPath} (${blocks.length} archivos incluidos)`);
  }

  console.log('\n✓ ¡Generación completa con éxito!');
}

main().catch((err) => {
  console.error('Error fatal durante la generación:', err);
  process.exit(1);
});
