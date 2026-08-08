'use client';

import React from 'react';
import OptimizedHeader from './layout/OptimizedHeader';
import OptimizedFooter from './layout/OptimizedFooter';
import CarruselRedes from './layout/CarruselRedes';
import { Bike } from 'lucide-react';

function SectionSeparator() {
  return (
    <div className="w-full flex items-center justify-center relative h-16 bg-transparent pointer-events-auto z-20 perspective-1000">
      {/* Línea horizontal de fondo con degradado sutil sin brillos intensos */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent h-px" />
      {/* Línea central sutil de acento */}
      <div className="absolute top-1/2 -translate-y-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent w-48 sm:w-80" />

      {/* Isotipo flotante y Glassmorphic en el centro */}
      <div className="absolute top-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ease-out hover-float hover:scale-105 active:scale-95 group">
        {/* Cuerpo del botón/badge principal con glassmorphism premium sutil */}
        <div className="relative bg-brand-blue/80 backdrop-blur-md border border-white/15 rounded-xl p-3 shadow-md group-hover:border-brand-yellow/50 flex items-center justify-center transition-all duration-300">
          <Bike className="h-5 w-5 text-brand-yellow group-hover:rotate-6 transition-transform duration-300 ease-out shrink-0" />
        </div>
      </div>
    </div>
  );
}

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
      <SectionSeparator />
      <CarruselRedes />
      <OptimizedFooter />
    </>
  );
}
