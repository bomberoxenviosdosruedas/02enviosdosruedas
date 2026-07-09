'use client';

import React, { useState, useEffect } from 'react';
import OptimizedHeader from './layout/OptimizedHeader';
import OptimizedFooter from './layout/OptimizedFooter';
import { CinematicHero } from './ui/cinematic-hero';
import { CarruselRedes } from './layout/Carrusel-Redes';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Only show preloader once per user session
    try {
      const hasVisited = sessionStorage.getItem('visited-cinematic');
      if (!hasVisited) {
        setShowPreloader(true);
      }
    } catch (e) {
      console.warn('sessionStorage not available:', e);
    }
  }, []);

  const handleComplete = () => {
    try {
      sessionStorage.setItem('visited-cinematic', 'true');
    } catch (e) {
      console.warn('sessionStorage not available:', e);
    }
    setShowPreloader(false);
  };

  return (
    <>
      {showPreloader && (
        <CinematicHero onComplete={handleComplete} />
      )}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only fixed top-4 left-4 z-[9999] bg-[#FFCC00] text-[#003399] px-6 py-3 rounded-xl font-subheading border-2 border-[#003399] shadow-[3px_3px_0px_#003399] uppercase font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue"
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
