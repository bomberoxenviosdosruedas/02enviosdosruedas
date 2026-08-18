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
  title: 'Mercado Envíos Flex en Mar del Plata | Reparto Same-Day Oficial | Envíos DosRuedas',
  description:
    'Socio logístico especializado en Mercado Envíos Flex en Mar del Plata. Retiramos y entregamos tus ventas en el mismo día. Protegé tu reputación y medalla de vendedor.',
  alternates: {
    canonical: `${baseUrl}/servicios/enviosflex`,
  },
  openGraph: {
    title: 'Mercado Envíos Flex en Mar del Plata | Envíos DosRuedas',
    description:
      'Entregas en el día (Same-Day) para MercadoLibre en Mar del Plata. Retiro en tu local y entrega garantizada con flota propia.',
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
    'Entregas en el día para vendedores de MercadoLibre en Mar del Plata. Retiro programado, cumplimiento estricto de horarios y medalla de reputación garantizada.',
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
        name: 'Flex Emprendedor',
        description: 'Retiro diario y entregas Same-Day en toda la ciudad para tiendas en crecimiento',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Flex Alto Volumen',
        description: 'Logística masiva diaria para MercadoLíderes con soporte prioritario vía WhatsApp',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
    ],
  },
};

export default function EnviosFlexPage() {
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
