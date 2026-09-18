import React from 'react';
import { Metadata } from 'next';
import EmprendedoresHero from '@/src/components/servicios/emprendedores/EmprendedoresHero';
import EmprendedoresFeatures from '@/src/components/servicios/emprendedores/EmprendedoresFeatures';
import EmprendedoresBenefits from '@/src/components/servicios/emprendedores/EmprendedoresBenefits';
import EmprendedoresPricing from '@/src/components/servicios/emprendedores/EmprendedoresPricing';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Depósito, Fulfillment y Envíos PyME',
  description:
    'Almacenamiento en Friuli 1972 con picking, preparación de pedidos, opción DropOFF y contrareembolso en Mar del Plata.',
  alternates: {
    canonical: `${baseUrl}/servicios/plan-emprendedores`,
  },
  openGraph: {
    title: 'Depósito, Fulfillment y Envíos PyME | Envíos DosRuedas',
    description:
      'Soluciones integrales de logística para e-commerce en Mar del Plata. Depósito en Friuli 1972, preparación y despacho directo.',
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
    <main className="min-h-screen bg-brand-white-50 text-brand-blue-700 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Hero Header block — Electric Speed Blue (brand-blue-500) */}
      <section className="relative z-10 bg-brand-blue-500">
        <EmprendedoresHero />
      </section>

      {/* Corporate 3PL logistics features — White Canvas (brand-white-50) */}
      <section className="relative z-10 bg-brand-white-50 font-sans">
        <EmprendedoresFeatures />
      </section>

      {/* Strategic business benefits grid — Deep Midnight Navy (brand-blue-900) */}
      <section className="relative z-10 bg-brand-blue-900 font-sans">
        <EmprendedoresBenefits />
      </section>

      {/* Premium custom e-commerce plans and 3PL warehousing prices — Electric Speed Blue (brand-blue-500) */}
      <section className="relative z-10 bg-brand-blue-500">
        <EmprendedoresPricing />
      </section>
    </main>
  );
}
