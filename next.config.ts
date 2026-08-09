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
    // Optimización de formatos modernos
    formats: ['image/avif', 'image/webp'],
    // Tamaños de dispositivo para imagenes responsive
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Calidad por defecto
    quality: 75,
  },

  output: 'standalone',
  transpilePackages: ['motion'],

  // SOLUCIÓN TURBOPACK: Declaramos un objeto vacío para silenciar el error.
  // Nota: Al usar Turbopack por defecto en Next.js 16, tu función 'webpack' de abajo
  // será ignorada en desarrollo. Si notas que los archivos no se actualizan solos en Windows,
  // puedes ejecutar 'pnpm dev --webpack' para forzar el motor antiguo.
  turbopack: {},

  // Optimización: Target modernos navegadores para evitar polyfills legacy
  compiler: {
    // No necesario, Next.js 15+ usa SWC y target moderno por defecto
  },

  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      };
    }
    // Optimización: evita polyfills innecesarios en producción
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // Evita polyfills de core-js para features ya soportadas
      };
    }
    return config;
  },
};

export default nextConfig;
