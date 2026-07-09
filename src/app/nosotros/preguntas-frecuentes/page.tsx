import React from 'react';
import { Metadata } from 'next';
import FaqHero from '@/src/components/nosotros/preguntas-frecuentes/FaqHero';
import FaqAccordion from '@/src/components/nosotros/preguntas-frecuentes/FaqAccordion';
import FaqCta from '@/src/components/nosotros/preguntas-frecuentes/FaqCta';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes (FAQ) | Envíos DosRuedas Mar del Plata',
  description: 'Todo lo que necesitás saber sobre nuestros servicios de mensajería, delivery, tarifas zonificadas, límites de bulto y logística en Mar del Plata.',
};

export default function PreguntasFrecuentesPage() {
  return (
    <main className="min-h-screen bg-[#001035] text-white relative overflow-hidden">
      {/* 3D Ambient floating glow-orbs */}
      <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] bg-[#0636A5]/20 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-[#FFEC01]/5 rounded-full blur-[110px] pointer-events-none" style={{ animationDelay: '-3s' }} />

      {/* Hero Header block */}
      <div className="relative z-10">
        <FaqHero />
      </div>

      {/* Interactive FAQ accordion block */}
      <div className="relative z-10 font-sans">
        <FaqAccordion />
      </div>

      {/* Dynamic contact and support CTA block */}
      <div className="relative z-10">
        <FaqCta />
      </div>
    </main>
  );
}

