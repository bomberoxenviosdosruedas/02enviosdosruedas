import React from 'react';
import { Metadata } from 'next';
import LowCostHero from '@/src/components/servicios/lowcost/LowCostHero';
import LowCostFeatures from '@/src/components/servicios/lowcost/LowCostFeatures';
import LowCostPricing from '@/src/components/servicios/lowcost/LowCostPricing';
import LowCostBenefits from '@/src/components/servicios/lowcost/LowCostBenefits';
import LowCostHowItWorks from '@/src/components/servicios/lowcost/LowCostHowItWorks';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Envíos LowCost Rentables | Envíos DosRuedas Mar del Plata',
  description: 'Optimizá tus ruteos urbanos diarios en Mar del Plata. Envíos LowCost económicos, con entrega garantizada en el día y tarifas altamente competitivas para PyMEs.',
  alternates: {
    canonical: `${baseUrl}/servicios/envios-lowcost`,
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Envíos LowCost Rentables',
  description: 'Optimizá tus ruteos urbanos diarios en Mar del Plata. Envíos LowCost económicos, con entrega garantizada en el día y tarifas altamente competitivas para PyMEs.',
  url: `${baseUrl}/servicios/envios-lowcost`,
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#localbusiness`,
    name: 'Envíos DosRuedas',
  },
  areaServed: {
    '@type': 'City',
    name: 'Mar del Plata',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tarifas LowCost por Zona',
    itemListElement: [
      { '@type': 'Offer', name: 'LowCost 0-5 km', price: '2200', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'LowCost 5-10 km', price: '2800', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'LowCost 10-15 km', price: '3500', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'LowCost 15-20 km', price: '4200', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
    ],
  },
};

export default function EnviosLowCostPage() {
  return (
    <main className="min-h-screen gradient-surface text-brand-blue-700 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      {/* Ambient floating glow-orbs */}
      <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-brand-yellow/3 rounded-full blur-[110px] pointer-events-none" style={{ animationDelay: '-3s' }} />

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
    </main>
  );
}

