import React from 'react';
import { Metadata } from 'next';
import ExpressHero from '@/src/components/servicios/express/ExpressHero';
import ExpressFeatures from '@/src/components/servicios/express/ExpressFeatures';
import ExpressPricing from '@/src/components/servicios/express/ExpressPricing';
import ExpressUseCases from '@/src/components/servicios/express/ExpressUseCases';
import CarruselRedes from '@/src/components/layout/CarruselRedes';

export const metadata: Metadata = {
  title: 'Envíos Express Inmediatos | Envíos DosRuedas Mar del Plata',
  description: 'La solución premium para operaciones de alta criticidad horaria en Mar del Plata. Vos elegís el rango exacto de entrega con certeza absoluta en menos de 2 horas.',
};

export default function EnviosExpressPage() {
  return (
    <main className="min-h-screen bg-[#001035] text-white relative overflow-hidden">
      {/* 3D Ambient floating glow-orbs */}
      <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] bg-[#0636A5]/20 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-[#FFEC01]/5 rounded-full blur-[110px] pointer-events-none" style={{ animationDelay: '-3s' }} />

      {/* Hero Header Segment */}
      <div className="relative z-10">
        <ExpressHero />
      </div>

      {/* Value Propositions / Features */}
      <div className="relative z-10 font-sans">
        <ExpressFeatures />
      </div>

      {/* 2026 Zone Pricing Rates & Dynamic Cotizador Hook */}
      <div className="relative z-10">
        <ExpressPricing />
      </div>

      {/* Common Use Case Scenarios */}
      <div className="relative z-10 font-sans">
        <ExpressUseCases />
      </div>

      {/* Social Network Media Loop Banner */}
      <div className="relative z-10">
        <CarruselRedes />
      </div>
    </main>
  );
}

