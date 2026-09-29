import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    // Simular el DOM del navegador (requerido para hooks de React y testing-library)
    environment: 'jsdom',
    // Archivos de setup global (jest-dom matchers, etc.)
    setupFiles: ['./src/test/setup.ts'],
    // Patrón de archivos de test
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    // Excluir directorios pesados y permitir archivos específicos si es necesario
    exclude: ['node_modules', '.next'],
    // Globals para no tener que importar describe/it/expect en cada archivo
    globals: true,
    // Cobertura de código
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/lib/**', 'src/hooks/**'],
    },
  },
  resolve: {
    alias: {
      // Debe espejar exactamente `compilerOptions.paths` de tsconfig.json.
      // `@generated/*` cubre el Prisma Client generado (fuera de `src/`).
      // `import.meta.dirname` y no `__dirname`: el loader nativo de Vite (que
      // será el default en la próxima major) no expone `__dirname`.
      '@': resolve(import.meta.dirname, './src'),
      '@generated': resolve(import.meta.dirname, './generated'),
    },
  },
});
