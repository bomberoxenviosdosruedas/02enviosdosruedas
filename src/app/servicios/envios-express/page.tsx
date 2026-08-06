import React from 'react';
import { Metadata } from 'next';
import ExpressHero from '@/src/components/servicios/express/ExpressHero';
import ExpressFeatures from '@/src/components/servicios/express/ExpressFeatures';
import ExpressPricing from '@/src/components/servicios/express/ExpressPricing';
import ExpressUseCases from '@/src/components/servicios/express/ExpressUseCases';

const baseUrl = 'https://www.enviosdosruedas.com';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Envíos Express Inmediatos',
  description: 'La solución premium para operaciones de alta criticidad horaria en Mar del Plata. Vos elegís el rango exacto de entrega con certeza absoluta en menos de 2 horas.',
  url: `${baseUrl}/servicios/envios-express`,
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
    name: 'Tarifas Express por Zona',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Express 0-3 km',
        price: '3700',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Express 3-6 km',
        price: '4200',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Express 6-10 km',
        price: '5200',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Express 10-15 km',
        price: '6800',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
    ],
  },
};

export const metadata: Metadata = {
  title: 'Envíos Express Inmediatos | Envíos DosRuedas Mar del Plata',
  description: 'La solución premium para operaciones de alta criticidad horaria en Mar del Plata. Vos elegís el rango exacto de entrega con certeza absoluta en menos de 2 horas.',
  other: {
    'script:ld+json': JSON.stringify(serviceSchema),
  },
};

export default function EnviosExpressPage() {
  return (
    <main className="min-h-screen gradient-surface text-brand-blue-700 relative overflow-hidden">
      {/* Ambient floating glow-orbs */}
      <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-brand-yellow/3 rounded-full blur-[110px] pointer-events-none" style={{ animationDelay: '-3s' }} />

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
    </main>
  );
}

