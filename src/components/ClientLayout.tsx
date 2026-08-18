'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import OptimizedHeader from './layout/OptimizedHeader';
import OptimizedFooter from './layout/OptimizedFooter';

// CarruselRedes contains GSAP ScrollTrigger and is dynamically imported to avoid blocking FCP / TBT on initial paint
const CarruselRedes = dynamic(() => import('./layout/CarruselRedes'), {
  loading: () => <div className="w-full py-16 bg-brand-blue-700 min-h-[250px]" />,
  ssr: true,
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only fixed top-4 left-4 z-[9999] bg-brand-yellow text-brand-blue px-6 py-3 rounded-xl font-subheading border-2 border-brand-blue shadow-[3px_3px_0px_var(--color-brand-blue)] uppercase font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue"
      >
        Saltar al contenido
      </a>
      <OptimizedHeader />
      <main id="main-content" className="flex-grow pt-[72px]" tabIndex={-1}>
        {children}
      </main>
      <CarruselRedes />
      <OptimizedFooter />
    </>
  );
}
