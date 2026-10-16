'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import OptimizedHeader from './layout/OptimizedHeader';
import OptimizedFooter from './layout/OptimizedFooter';
import { captureAndPersistUtms } from '@/lib/analytics';

// CarruselRedes se importa dinámicamente para no retrasar el First Contentful Paint (FCP)
const CarruselRedes = dynamic(() => import('./layout/CarruselRedes'), {
  loading: () => <div className="w-full py-16 bg-brand-blue-500 min-h-62.5" />,
  ssr: true,
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    captureAndPersistUtms();
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-5 focus:py-3 focus:rounded-full focus:bg-brand-yellow-500 focus:text-brand-blue-500 focus:font-subheading focus:font-bold focus:uppercase focus:tracking-wider focus:shadow-cta-glow focus:outline-none focus:ring-2 focus:ring-white"
      >
        Saltar al contenido principal
      </a>
      <OptimizedHeader />
      <main id="main-content" className="grow pt-18 scroll-mt-20">
        {children}
      </main>
      <CarruselRedes />
      <OptimizedFooter />
    </>
  );
}