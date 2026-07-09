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
    // Excluir archivos de build de Next.js
    exclude: ['node_modules', '.next', 'src/app/api/**/*.test.ts'],
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
      // Mapeo de los paths de tsconfig.json
      '@': resolve(__dirname, '.'),
    },
  },
});
