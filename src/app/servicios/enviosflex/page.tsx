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
  title: 'Envíos Flex, Reparto MercadoLibre y Logística Flex Mar del Plata | Envíos DosRuedas',
  description:
    'Socio logístico especialista en envíos flex y reparto MercadoLibre en Mar del Plata. SLA 100% entregas en el día para proteger tu reputación MercadoLíder. Horario de corte 15:00 hs, entregas antes de las 20:00 hs, sin mínimo de paquetes.',
  keywords: [
    'envios flex',
    'reparto mercadolibre',
    'logistica flex',
    'envios flex mar del plata',
    'mercado envios flex mar del plata',
  ],
  alternates: {
    canonical: `${baseUrl}/servicios/enviosflex`,
  },
  openGraph: {
    title: 'Envíos Flex, Reparto MercadoLibre y Logística Flex | Envíos DosRuedas',
    description:
      'Logística flex y reparto MercadoLibre Same-Day en Mar del Plata. SLA 100% entregas garantizadas en el día, corte 15:00 hs y múltiples retiros sin mínimos.',
    url: `${baseUrl}/servicios/enviosflex`,
    type: 'website',
    locale: 'es_AR',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Envíos Flex, Reparto MercadoLibre y Logística Flex en Mar del Plata',
  description:
    'Solución integral en envíos flex, reparto MercadoLibre y logística flex en Mar del Plata. SLA de 100% entregas en el día para proteger reputación MercadoLíder. Horario de corte 15:00 hs, entregas antes de las 20:00 hs, múltiples retiros diarios sin mínimo de envíos.',
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
    <main className="min-h-screen bg-[#F8FAFC] text-brand-blue-700 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Hero Header Block — Electric Speed Blue (#0950F6) */}
      <section className="relative z-10 bg-[#0950F6]">
        <FlexHero />
      </section>

      {/* MercadoLibre expert key features — Slate Canvas (#F8FAFC) */}
      <section className="relative z-10 bg-[#F8FAFC] font-sans">
        <FlexFeatures />
      </section>

      {/* Seller value-added benefits grid — Deep Midnight Navy (#052C87) */}
      <section className="relative z-10 bg-[#052C87] font-sans">
        <FlexBenefits />
      </section>

      {/* Pricing levels and weather discounts — Electric Speed Blue (#0950F6) */}
      <section className="relative z-10 bg-[#0950F6]">
        <FlexPricing />
      </section>

      {/* Step by step streamlined workflow — Slate Canvas (#F8FAFC) */}
      <section className="relative z-10 bg-[#F8FAFC] font-sans">
        <FlexHowItWorks />
      </section>

      {/* Active prerequisites for starting — Slate Canvas (#F8FAFC) */}
      <section className="relative z-10 bg-[#F8FAFC] font-sans">
        <FlexRequirements />
      </section>
    </main>
  );
}
