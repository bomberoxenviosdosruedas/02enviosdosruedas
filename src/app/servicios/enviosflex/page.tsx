import React from 'react';
import { Metadata } from 'next';
import FlexHero from '@/src/components/servicios/flex/FlexHero';
import FlexFeatures from '@/src/components/servicios/flex/FlexFeatures';
import FlexBenefits from '@/src/components/servicios/flex/FlexBenefits';
import FlexPricing from '@/src/components/servicios/flex/FlexPricing';
import FlexHowItWorks from '@/src/components/servicios/flex/FlexHowItWorks';
import FlexRequirements from '@/src/components/servicios/flex/FlexRequirements';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Mercado Envíos Flex Same-Day',
  description:
    'Servicio logístico para Mercado Envíos Flex en Mar del Plata. Entregas en el día para proteger tu reputación MercadoLíder. Horario de corte 15:00 hs, entregas antes de las 20:00 hs.',
  alternates: {
    canonical: `${baseUrl}/servicios/enviosflex`,
  },
  openGraph: {
    title: 'Mercado Envíos Flex Same-Day | Envíos DosRuedas',
    description:
      'Logística Same-Day para Mercado Envíos Flex en Mar del Plata. Corte 15:00 hs, entregas antes de las 20:00 hs y múltiples retiros.',
    url: `${baseUrl}/servicios/enviosflex`,
    type: 'website',
    locale: 'es_AR',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mercado Envíos Flex Same-Day en Mar del Plata',
  description:
    'Servicio logístico adaptado a Mercado Envíos Flex en Mar del Plata. Entregas en el día para cuidar la reputación de tu cuenta. Corte 15:00 hs y entregas antes de las 20:00 hs.',
  url: `${baseUrl}/servicios/enviosflex`,
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
    name: 'Servicios Flex para Vendedores ML',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Logística Flex Emprendedor',
        description: 'Retiros diarios sin mínimos y 100% de entregas Same-Day antes de las 20:00 hs',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Reparto MercadoLibre Alto Volumen',
        description: 'Múltiples retiros diarios y soporte dedicado vía WhatsApp para MercadoLíderes',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
    ],
  },
};

export default function EnviosFlexPage() {
  return (
    <main className="min-h-screen bg-brand-white-50 text-brand-blue-700 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Hero Header Block — Electric Speed Blue (brand-blue-500) */}
      <section className="relative z-10 bg-brand-blue-500">
        <FlexHero />
      </section>

      {/* MercadoLibre expert key features — White Canvas (brand-white-50) */}
      <section className="relative z-10 bg-brand-white-50 font-sans">
        <FlexFeatures />
      </section>

      {/* Seller value-added benefits grid — Deep Midnight Navy (brand-blue-900) */}
      <section className="relative z-10 bg-brand-blue-900 font-sans">
        <FlexBenefits />
      </section>

      {/* Pricing levels and weather discounts — Electric Speed Blue (brand-blue-500) */}
      <section className="relative z-10 bg-brand-blue-500">
        <FlexPricing />
      </section>

      {/* Step by step streamlined workflow — White Canvas (brand-white-50) */}
      <section className="relative z-10 bg-brand-white-50 font-sans">
        <FlexHowItWorks />
      </section>

      {/* Active prerequisites for starting — White Canvas (brand-white-50) */}
      <section className="relative z-10 bg-brand-white-50 font-sans">
        <FlexRequirements />
      </section>
    </main>
  );
}
