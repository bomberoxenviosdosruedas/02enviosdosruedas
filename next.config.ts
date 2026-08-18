import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,

  typescript: {
    ignoreBuildErrors: false,
  },

  // Configuración de imágenes remotas y formatos modernos
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
    // Optimización de formatos modernos prioritarios
    formats: ['image/avif', 'image/webp'],
    // Caché extendido de 30 días para optimización de imágenes en Vercel Edge
    minimumCacheTTL: 2592000,
    // Tamaños de dispositivo para imagenes responsive
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  poweredByHeader: false,
  compress: true,
  transpilePackages: ['motion'],

  // Optimización de importación de paquetes para reducir drásticamente el tamaño del bundle
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'react-icons',
      'gsap',
      'leaflet',
      '@radix-ui/react-icons',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-navigation-menu',
      '@number-flow/react',
      'motion',
      'clsx',
      'tailwind-merge',
      'zod',
    ],
  },

  // Encabezados de seguridad y rendimiento para Vercel Edge Network
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/(.*)\\.(webp|jpg|jpeg|png|svg|ico|woff2)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // SOLUCIÓN TURBOPACK: Declaramos un objeto vacío para silenciar el error.
  turbopack: {},

  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      };
    }
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
      };
    }
    return config;
  },
};

export default nextConfig;
