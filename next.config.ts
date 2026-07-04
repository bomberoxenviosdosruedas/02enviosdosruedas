import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,

  // SE ELIMINÓ: La propiedad 'eslint' que causaba el error de compilación.

  typescript: {
    ignoreBuildErrors: false,
  },

  // Configuración de imágenes remotas permitidas
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**',
      },
    ],
  },

  output: 'standalone',
  transpilePackages: ['motion'],

  // SOLUCIÓN TURBOPACK: Declaramos un objeto vacío para silenciar el error.
  // Nota: Al usar Turbopack por defecto en Next.js 16, tu función 'webpack' de abajo 
  // será ignorada en desarrollo. Si notas que los archivos no se actualizan solos en Windows,
  // puedes ejecutar 'pnpm dev --webpack' para forzar el motor antiguo.
  turbopack: {},

  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      };
    }
    return config;
  },
};

export default nextConfig;
