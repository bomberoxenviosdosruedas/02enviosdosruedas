import React from 'react';
import { Metadata } from 'next';
import AboutHero from '@/src/components/nosotros/sobre-nosotros/AboutHero';
import AboutAdvantages from '@/src/components/nosotros/sobre-nosotros/AboutAdvantages';
import AboutValues from '@/src/components/nosotros/sobre-nosotros/AboutValues';
import AboutTimeline from '@/src/components/nosotros/sobre-nosotros/AboutTimeline';
import AboutTeam from '@/src/components/nosotros/sobre-nosotros/AboutTeam';
import AboutMissionVision from '@/src/components/nosotros/sobre-nosotros/AboutMissionVision';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Envíos DosRuedas Mar del Plata',
  description: 'Conocé la historia, valores y equipo detrás de Envíos DosRuedas. Más de 7 años liderando la logística urbana y la última milla de e-commerce en Mar del Plata.',
  alternates: {
    canonical: `${baseUrl}/nosotros/sobre-nosotros`,
  },
};

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 relative overflow-hidden">
      {/* 3D Ambient floating glow-orbs */}
      <div className="absolute top-[15%] left-[-10%] w-[40vw] h-[40vw] bg-brand-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-float-slow" />
      <div className="absolute top-[50%] right-[-10%] w-[35vw] h-[35vw] bg-brand-yellow-500/5 rounded-full blur-[100px] pointer-events-none" style={{ animationDelay: '-2s' }} />
      <div className="absolute bottom-[10%] left-[5%] w-[45vw] h-[45vw] bg-brand-blue-500/10 rounded-full blur-[130px] pointer-events-none" style={{ animationDelay: '-4s' }} />

      {/* Hero Header & Quiénes Somos */}
      <div className="relative z-10">
        <AboutHero />
      </div>

      {/* Corporate Advantages (Nuestra ventaja injusta) */}
      <div className="relative z-10">
        <AboutAdvantages />
      </div>

      {/* Core values block */}
      <div className="relative z-10">
        <AboutValues />
      </div>

      {/* Interactive historical milestones timeline */}
      <div className="relative z-10">
        <AboutTimeline />
      </div>

      {/* Stats and organizational workforce teams */}
      <div className="relative z-10">
        <AboutTeam />
      </div>

      {/* Comprehensive Mission, Vision, and Innovation pillars */}
      <div className="relative z-10 font-sans">
        <AboutMissionVision />
      </div>
    </main>
  );
}
