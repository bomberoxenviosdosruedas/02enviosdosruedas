import React from 'react';
import { Metadata } from 'next';
import ExpressHero from '@/src/components/servicios/express/ExpressHero';
import ExpressFeatures from '@/src/components/servicios/express/ExpressFeatures';
import ExpressPricing from '@/src/components/servicios/express/ExpressPricing';
import ExpressUseCases from '@/src/components/servicios/express/ExpressUseCases';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Envíos Express en Moto (60-90 min)',
  description:
    'Servicio prioritario de mensajería en moto y envíos express en Mar del Plata. Entregas en franja de 60 a 90 minutos con tarifa fija por distancia.',
  alternates: {
    canonical: `${baseUrl}/servicios/envios-express`,
  },
  openGraph: {
    title: 'Envíos Express en Moto en Mar del Plata | Envíos DosRuedas',
    description:
      'Cadetería prioritaria y entregas inmediatas en 60-90 min en Mar del Plata. Tarifas transparentes 2026.',
    url: `${baseUrl}/servicios/envios-express`,
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Envíos Express en Moto en Mar del Plata | Envíos DosRuedas',
    description: 'Cadetería prioritaria y entregas inmediatas en 60-90 min en Mar del Plata. Tarifas transparentes 2026.',
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@enviosdosruedas',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mensajería en Moto y Envíos Express en Mar del Plata',
  description:
    'Servicio prioritario de mensajería en moto y envíos express con entregas en franja de 60 a 90 minutos en Mar del Plata. Bultos de hasta 15 kg.',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${baseUrl}/#servicios` },
    { '@type': 'ListItem', position: 3, name: 'Envíos Express', item: `${baseUrl}/servicios/envios-express` },
  ],
};

export default function EnviosExpressPage() {
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
      {/* 1. Hero Presentation — Electric Speed Blue (brand-blue-500) */}
      <section className="relative z-10 bg-brand-blue-500">
        <ExpressHero />
      </section>

      {/* 2. Value Propositions & Key Features — White Canvas (brand-white-50) */}
      <section className="relative z-10 bg-brand-white-50 font-sans">
        <ExpressFeatures />
      </section>

      {/* 3. 2026 Zone Pricing Rates & Dynamic Quote Hook — Electric Speed Blue (brand-blue-500) */}
      <section className="relative z-10 bg-brand-blue-500">
        <ExpressPricing />
      </section>

      {/* 4. Common Use Cases & Scenarios — White Canvas (brand-white-50) */}
      <section className="relative z-10 bg-brand-white-50 font-sans">
        <ExpressUseCases />
      </section>
    </main>
  );
}
