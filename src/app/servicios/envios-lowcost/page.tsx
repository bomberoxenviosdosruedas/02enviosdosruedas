import React from 'react';
import { Metadata } from 'next';
import LowCostHero from '@/src/components/servicios/lowcost/LowCostHero';
import LowCostFeatures from '@/src/components/servicios/lowcost/LowCostFeatures';
import LowCostPricing from '@/src/components/servicios/lowcost/LowCostPricing';
import LowCostBenefits from '@/src/components/servicios/lowcost/LowCostBenefits';
import LowCostHowItWorks from '@/src/components/servicios/lowcost/LowCostHowItWorks';
import CarruselRedes from '@/src/components/layout/CarruselRedes';

export const metadata: Metadata = {
  title: 'Envíos LowCost Rentables | Envíos DosRuedas Mar del Plata',
  description: 'Optimizá tus ruteos urbanos diarios en Mar del Plata. Envíos LowCost económicos, con entrega garantizada en el día y tarifas altamente competitivas para PyMEs.',
};

export default function EnviosLowCostPage() {
  return (
    <main className="min-h-screen bg-[#F9F9FC] text-slate-900 relative overflow-hidden">
      {/* Ambient floating glow-orbs */}
      <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] bg-[#00277c]/5 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-[#FFEC01]/3 rounded-full blur-[110px] pointer-events-none" style={{ animationDelay: '-3s' }} />

      {/* Hero Header Block */}
      <div className="relative z-10">
        <LowCostHero />
      </div>

      {/* Ruteo masivo features */}
      <div className="relative z-10 font-sans">
        <LowCostFeatures />
      </div>

      {/* 2026 Zone Pricing rates table */}
      <div className="relative z-10">
        <LowCostPricing />
      </div>

      {/* Structured logistics benefits grid */}
      <div className="relative z-10 font-sans">
        <LowCostBenefits />
      </div>

      {/* Step by step operation diagram */}
      <div className="relative z-10 font-sans">
        <LowCostHowItWorks />
      </div>

      {/* Unified social network community channel loop */}
      <div className="relative z-10">
        <CarruselRedes />
      </div>
    </main>
  );
}

