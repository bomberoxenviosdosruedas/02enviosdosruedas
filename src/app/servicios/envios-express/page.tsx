import React from 'react';
import { Metadata } from 'next';
import ExpressHero from '@/src/components/servicios/express/ExpressHero';
import ExpressFeatures from '@/src/components/servicios/express/ExpressFeatures';
import ExpressPricing from '@/src/components/servicios/express/ExpressPricing';
import ExpressUseCases from '@/src/components/servicios/express/ExpressUseCases';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Mensajería en Moto y Envíos Express | Entregas Inmediatas Mar del Plata | Envíos DosRuedas',
  description:
    'Servicio prioritario de mensajería en moto y envíos express en Mar del Plata. Entregas inmediatas con rango de 3 horas (solicitud con 2 hs de anticipación antes de las 15:00 hs). Bultos hasta 5 kg y 40x30 cm.',
  keywords: [
    'mensajeria en moto',
    'envios express',
    'entregas inmediatas',
    'cadeteria express mar del plata',
    'mensajeria urbana mar del plata',
  ],
  alternates: {
    canonical: `${baseUrl}/servicios/envios-express`,
  },
  openGraph: {
    title: 'Mensajería en Moto y Envíos Express en Mar del Plata | Envíos DosRuedas',
    description:
      'Cadetería prioritarias y entregas inmediatas en Mar del Plata. Rango de entrega de 3 horas, solicitud antes de las 15:00 hs. Hasta 5 kg y 40x30 cm.',
    url: `${baseUrl}/servicios/envios-express`,
    type: 'website',
    locale: 'es_AR',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mensajería en Moto y Envíos Express con Entregas Inmediatas en Mar del Plata',
  description:
    'Servicio prioritario de mensajería en moto y envíos express con entregas inmediatas en rango de 3 horas en Mar del Plata. Solicita con 2 hs de anticipación antes de las 15:00 hs. Bultos de hasta 5 kg y 40x30 cm.',
  url: `${baseUrl}/servicios/envios-express`,
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
    name: 'Tarifas Express Vigentes 2026',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Express Zona 1 (0 a 3 km)',
        price: '3700',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Express Zona 2 (3 a 5 km)',
        price: '4600',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Express Zona 3 (5 a 7 km)',
        price: '6100',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Express Zona 4 (7 a 10 km)',
        price: '8200',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Express Zona 5 (+10 km)',
        price: '8200',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
        description: '$8.200 base más $1.000 por kilómetro adicional entero',
      },
    ],
  },
};

export default function EnviosExpressPage() {
  return (
    <main className="min-h-screen bg-brand-white-50 text-brand-blue-700 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      {/* 1. Hero Presentation — Dark Brand Blue */}
      <section className="relative z-10">
        <ExpressHero />
      </section>

      {/* 2. Value Propositions & Key Features — Pure White Surface */}
      <section className="relative z-10 font-sans">
        <ExpressFeatures />
      </section>

      {/* 3. 2026 Zone Pricing Rates & Dynamic Quote Hook — Dark Blue 700 with Double Bezel */}
      <section className="relative z-10">
        <ExpressPricing />
      </section>

      {/* 4. Common Use Cases & Scenarios — Alternating Light Surface */}
      <section className="relative z-10 font-sans">
        <ExpressUseCases />
      </section>
    </main>
  );
}
