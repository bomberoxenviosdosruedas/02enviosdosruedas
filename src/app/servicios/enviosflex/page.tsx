import React from 'react';
import { Metadata } from 'next';
import FlexHero from '@/src/components/servicios/flex/FlexHero';
import FlexFeatures from '@/src/components/servicios/flex/FlexFeatures';
import FlexBenefits from '@/src/components/servicios/flex/FlexBenefits';
import FlexPricing from '@/src/components/servicios/flex/FlexPricing';
import FlexHowItWorks from '@/src/components/servicios/flex/FlexHowItWorks';
import FlexRequirements from '@/src/components/servicios/flex/FlexRequirements';

const baseUrl = 'https://www.enviosdosruedas.com';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Envíos Flex MercadoLibre',
  description: 'Optimizá tus entregas Same-Day en Mar del Plata. Socios logísticos certificados para Mercado Envíos Flex. Medidor de reputación siempre en verde y envíos rápidos.',
  url: `${baseUrl}/servicios/enviosflex`,
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
    name: 'Planes Flex para Vendedores',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Flex Estándar',
        description: 'Hasta 50 envíos/día - ideal para vendedores en crecimiento',
        price: '0',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Flex Pro',
        description: 'Hasta 200 envíos/día - para vendedores establecidos',
        price: '0',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Flex Enterprise',
        description: 'Volumen ilimitado - integración API + gestor dedicado',
        price: '0',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
    ],
  },
};

export const metadata: Metadata = {
  title: 'Envíos Flex MercadoLibre | Envíos DosRuedas Mar del Plata',
  description: 'Optimizá tus entregas Same-Day en Mar del Plata. Socios logísticos certificados para Mercado Envíos Flex. Medidor de reputación siempre en verde y envíos rápidos.',
  other: {
    'script:ld+json': JSON.stringify(serviceSchema),
  },
};

export default function EnviosFlexPage() {
  return (
    <main className="min-h-screen gradient-surface text-brand-blue-700 relative overflow-hidden">
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
    </main>
  );
}

