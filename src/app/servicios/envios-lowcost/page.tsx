import React from 'react';
import { Metadata } from 'next';
import LowCostHero from '@/src/components/servicios/lowcost/LowCostHero';
import LowCostFeatures from '@/src/components/servicios/lowcost/LowCostFeatures';
import LowCostPricing from '@/src/components/servicios/lowcost/LowCostPricing';
import LowCostBenefits from '@/src/components/servicios/lowcost/LowCostBenefits';
import LowCostHowItWorks from '@/src/components/servicios/lowcost/LowCostHowItWorks';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Envíos LowCost y Cadetería en el Día',
  description:
    'Paquetería e-commerce y cadetería programada con entrega en el día en Mar del Plata. Pedidos antes de las 13:00 hs se entregan antes de las 19:00 hs. Tarifas 2026.',
  alternates: {
    canonical: `${baseUrl}/servicios/envios-lowcost`,
  },
  openGraph: {
    title: 'Envíos LowCost y Cadetería en el Día | Envíos DosRuedas',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${baseUrl}/#servicios` },
    { '@type': 'ListItem', position: 3, name: 'Envíos LowCost', item: `${baseUrl}/servicios/envios-lowcost` },
  ],
};

export default function EnviosLowCostPage() {
  return (
    <main className="min-h-[100dvh] bg-brand-white-50 text-brand-blue-700 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Header Block — Electric Speed Blue (brand-blue-500) */}
      <section className="relative z-10 bg-brand-blue-500">
        <LowCostHero />
      </section>

      {/* Ruteo masivo features — White Canvas (brand-white-50) */}
      <section className="relative z-10 bg-brand-white-50 font-sans">
        <LowCostFeatures />
      </section>

      {/* 2026 Zone Pricing rates table — Electric Speed Blue (brand-blue-500) */}
      <section className="relative z-10 bg-brand-blue-500">
        <LowCostPricing />
      </section>

      {/* Structured logistics benefits grid — Deep Midnight Navy (brand-blue-900) */}
      <section className="relative z-10 bg-brand-blue-900 font-sans">
        <LowCostBenefits />
      </section>

      {/* Step by step operation diagram — White Canvas (brand-white-50) */}
      <section className="relative z-10 bg-brand-white-50 font-sans">
        <LowCostHowItWorks />
      </section>
    </main>
  );
}
