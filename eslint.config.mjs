import eslintConfigNext from 'eslint-config-next';

const config = [
  {
    ignores: [
      // Agentes IA y tooling local
      '.agent/**',
      '.agents/**',
      '.claude/**',
      '.hermes/**',
      '.impeccable/**',
      '.opencode/**',
      // Builds y caches
      '.next/**',
      'generated/**',
      'node_modules/**',
      'coverage/**',
      'test-results/**',
      'tsconfig.tsbuildinfo',
      // Artefactos de diseño y prototipado (no son código del producto)
      '.design-sync/**',
      '.scratch/**',
      '.stitch/**',
      // Docs: se validan por markdown, no por el linter de React
      'docs/**',
    ],
  },
  ...eslintConfigNext,
];

export default config;
