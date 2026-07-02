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
    <main className="min-h-screen bg-slate-50">
      {/* Hero Header block */}
      <FaqHero />

      {/* Interactive FAQ accordion block */}
      <FaqAccordion />

      {/* Dynamic contact and support CTA block */}
      <FaqCta />
    </main>
  );
}
