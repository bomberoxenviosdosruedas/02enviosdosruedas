import React from 'react';
import { Metadata } from 'next';
import FlexHero from '@/src/components/servicios/flex/FlexHero';
import FlexFeatures from '@/src/components/servicios/flex/FlexFeatures';
import FlexBenefits from '@/src/components/servicios/flex/FlexBenefits';
import FlexPricing from '@/src/components/servicios/flex/FlexPricing';
import FlexHowItWorks from '@/src/components/servicios/flex/FlexHowItWorks';
import FlexRequirements from '@/src/components/servicios/flex/FlexRequirements';
import CarruselRedes from '@/src/components/layout/CarruselRedes';

export const metadata: Metadata = {
  title: 'Envíos Flex MercadoLibre | Envíos DosRuedas Mar del Plata',
  description: 'Optimizá tus entregas Same-Day en Mar del Plata. Socios logísticos certificados para Mercado Envíos Flex. Medidor de reputación siempre en verde y envíos rápidos.',
};

export default function EnviosFlexPage() {
  return (
    <main className="min-h-screen bg-brand-white-50 text-brand-blue-700 relative overflow-hidden">
      {/* Ambient floating glow-orbs */}
      <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-brand-yellow/3 rounded-full blur-[110px] pointer-events-none" style={{ animationDelay: '-3s' }} />

      {/* Hero Header Block */}
      <div className="relative z-10">
        <FlexHero />
      </div>

      {/* MercadoLibre expert key features */}
      <div className="relative z-10 font-sans">
        <FlexFeatures />
      </div>

      {/* Seller value-added benefits grid */}
      <div className="relative z-10 font-sans">
        <FlexBenefits />
      </div>

      {/* Pricing levels and weather discounts */}
      <div className="relative z-10">
        <FlexPricing />
      </div>

      {/* Step by step streamlined workflow */}
      <div className="relative z-10 font-sans">
        <FlexHowItWorks />
      </div>

      {/* Active prerequisites for starting */}
      <div className="relative z-10 font-sans">
        <FlexRequirements />
      </div>

      {/* Unified social community channel loop */}
      <div className="relative z-10">
        <CarruselRedes />
      </div>
    </main>
  );
}

