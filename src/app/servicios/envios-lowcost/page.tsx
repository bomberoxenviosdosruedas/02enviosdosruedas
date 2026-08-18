import React from 'react';
import { Metadata } from 'next';
import LowCostHero from '@/src/components/servicios/lowcost/LowCostHero';
import LowCostFeatures from '@/src/components/servicios/lowcost/LowCostFeatures';
import LowCostPricing from '@/src/components/servicios/lowcost/LowCostPricing';
import LowCostBenefits from '@/src/components/servicios/lowcost/LowCostBenefits';
import LowCostHowItWorks from '@/src/components/servicios/lowcost/LowCostHowItWorks';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Paquetería E-Commerce, Servicio de Cadetería y Encomiendas LowCost | Envíos DosRuedas',
  description:
    'Paquetería e-commerce, servicio de cadetería y servicio de encomiendas más rentable en Mar del Plata. Pedidos solicitados antes de las 13:00 hs se entregan en el día antes de las 19:00 hs. Tarifas 2026.',
  keywords: [
    'paqueteria ecommerce',
    'servicio de cadeteria',
    'servicio de encomiendas',
    'envios lowcost mar del plata',
    'cadeteria economica mar del plata',
  ],
  alternates: {
    canonical: `${baseUrl}/servicios/envios-lowcost`,
  },
  openGraph: {
    title: 'Paquetería E-Commerce y Servicio de Encomiendas LowCost | Envíos DosRuedas',
    description:
      'El servicio de cadetería y encomiendas más económico de Mar del Plata. Pedidos antes de las 13:00 hs se entregan antes de las 19:00 hs.',
    url: `${baseUrl}/servicios/envios-lowcost`,
    type: 'website',
    locale: 'es_AR',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Paquetería E-Commerce, Servicio de Cadetería y Encomiendas LowCost en Mar del Plata',
  description:
    'Servicio de paquetería e-commerce, cadetería y encomiendas programadas de máxima rentabilidad en Mar del Plata. Pedidos ingresados antes de las 13:00 hs con entrega garantizada antes de las 19:00 hs.',
  url: `${baseUrl}/servicios/envios-lowcost`,
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#localbusiness`,
    name: 'Envíos DosRuedas',
    telephone: '+54-223-660-2699',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Friuli 1972',
      addressLocality: 'Mar del Plata',
      addressRegion: 'Buenos Aires',
      postalCode: '7600',
      addressCountry: 'AR',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Mar del Plata',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tarifas LowCost Vigentes 2026',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'LowCost 0 a 3 km',
        price: '3000',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'LowCost 3 a 5 km',
        price: '4000',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'LowCost 5 a 7 km',
        price: '5300',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'LowCost 7 a 10 km',
        price: '7000',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'LowCost +10 km',
        price: '7000',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
        description: '$7.000 base más $700 por kilómetro adicional entero',
      },
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
      <div
        className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-brand-yellow/3 rounded-full blur-[110px] pointer-events-none"
        style={{ animationDelay: '-3s' }}
      />

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
