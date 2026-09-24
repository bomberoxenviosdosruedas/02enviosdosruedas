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
    // No pre-bundlear motion/framer-motion: cuando Vitest los transforma, el
    // proxy dinámico de `motion` (que soporta cualquier tag HTML, p. ej.
    // `motion.article`, usado en SocialProofSection/PrivacyContent/
    // TermsContent/timeline-animation) se colapsa a un objeto estático sin
    // `article`. Externalizarlos deja que Node resuelva el ESM real.
    deps: {
      optimizer: {
        ssr: {
          exclude: ['motion', 'framer-motion'],
        },
      },
    },
    server: {
      deps: {
        external: ['motion', 'framer-motion'],
      },
    },
    // Cobertura de código
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/lib/**', 'src/hooks/**'],
    },
  },
  resolve: {
    alias: {
      '@/src': resolve(__dirname, './src'),
      '@': resolve(__dirname, './src'),
    },
  },
});
