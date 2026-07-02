import React from 'react';
import { Metadata } from 'next';
import AboutHero from '@/src/components/nosotros/sobre-nosotros/AboutHero';
import AboutAdvantages from '@/src/components/nosotros/sobre-nosotros/AboutAdvantages';
import AboutValues from '@/src/components/nosotros/sobre-nosotros/AboutValues';
import AboutTimeline from '@/src/components/nosotros/sobre-nosotros/AboutTimeline';
import AboutTeam from '@/src/components/nosotros/sobre-nosotros/AboutTeam';
import AboutMissionVision from '@/src/components/nosotros/sobre-nosotros/AboutMissionVision';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Envíos DosRuedas Mar del Plata',
  description: 'Conocé la historia, valores y equipo detrás de Envíos DosRuedas. Más de 7 años liderando la logística urbana y la última milla de e-commerce en Mar del Plata.',
};

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Header & Quiénes Somos */}
      <AboutHero />

      {/* Corporate Advantages (Nuestra ventaja injusta) */}
      <AboutAdvantages />

      {/* Core values block */}
      <AboutValues />

      {/* Interactive historical milestones timeline */}
      <AboutTimeline />

      {/* Stats and organizational workforce teams */}
      <AboutTeam />

      {/* Comprehensive Mission, Vision, and Innovation pillars */}
      <AboutMissionVision />
    </main>
  );
}
