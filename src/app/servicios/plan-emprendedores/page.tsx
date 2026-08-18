import React from 'react';
import { Metadata } from 'next';
import EmprendedoresHero from '@/src/components/servicios/emprendedores/EmprendedoresHero';
import EmprendedoresFeatures from '@/src/components/servicios/emprendedores/EmprendedoresFeatures';
import EmprendedoresBenefits from '@/src/components/servicios/emprendedores/EmprendedoresBenefits';
import EmprendedoresPricing from '@/src/components/servicios/emprendedores/EmprendedoresPricing';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Paquetería E-Commerce, Envíos E-Commerce y Logística 3PL Mar del Plata | Envíos DosRuedas',
  description:
    'Especialistas en paquetería e-commerce, envíos e-commerce y logística 3PL en Mar del Plata. Almacenamiento en Friuli 1972 con picking QR Same Day, E-Commerce Next Day (24hs), opción DropOFF (-20% OFF) y contrareembolso sin cargo extra.',
  keywords: [
    'paqueteria ecommerce',
    'envios ecommerce',
    'logistica 3pl mar del plata',
    'fulfillment mar del plata',
    'dropoff envios mar del plata',
  ],
  alternates: {
    canonical: `${baseUrl}/servicios/plan-emprendedores`,
  },
  openGraph: {
    title: 'Paquetería E-Commerce, Envíos E-Commerce y Logística 3PL | Envíos DosRuedas',
    description:
      'Soluciones integrales de paquetería e-commerce y logística 3PL en Mar del Plata. Depósito en Friuli 1972, picking QR Same Day, Next Day 24hs, DropOFF 20% OFF y cobro contrareembolso gratis.',
    url: `${baseUrl}/servicios/plan-emprendedores`,
    type: 'website',
    locale: 'es_AR',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Paquetería E-Commerce, Envíos E-Commerce y Logística 3PL en Mar del Plata',
  description:
    'Servicio integral de paquetería e-commerce y logística 3PL en Mar del Plata. Incluye E-Commerce Same Day desde Friuli 1972 con picking QR, E-Commerce Next Day 24hs, opción DropOFF con 20% de descuento y cobro contrareembolso sin cargo extra.',
  url: `${baseUrl}/servicios/plan-emprendedores`,
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
    name: 'Planes 3PL y Paquetería E-Commerce',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'E-Commerce Same Day',
        description: 'Stock almacenado en Friuli 1972, despachado inmediatamente con picking QR y empaquetado',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'E-Commerce Next Day (24hs)',
        description: 'Retiro programado para entrega al día siguiente. Recolección gratis para más de 10 envíos',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Opción DropOFF (-20% OFF)',
        description: 'Despacho directo en Friuli 1972 con un 20% de descuento en la tarifa final',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
    ],
  },
};

export default function PlanEmprendedoresPage() {
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

      {/* Hero Header block */}
      <div className="relative z-10">
        <EmprendedoresHero />
      </div>

      {/* Corporate 3PL logistics features */}
      <div className="relative z-10 font-sans">
        <EmprendedoresFeatures />
      </div>

      {/* Strategic business benefits grid */}
      <div className="relative z-10 font-sans">
        <EmprendedoresBenefits />
      </div>

      {/* Premium custom e-commerce plans and 3PL warehousing prices */}
      <div className="relative z-10">
        <EmprendedoresPricing />
      </div>
    </main>
  );
}
