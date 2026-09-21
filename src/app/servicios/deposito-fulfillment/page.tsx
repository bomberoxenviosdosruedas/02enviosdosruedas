import React from 'react';
import { Metadata } from 'next';
import EmprendedoresHero from '@/src/components/servicios/emprendedores/EmprendedoresHero';
import EmprendedoresFeatures from '@/src/components/servicios/emprendedores/EmprendedoresFeatures';
import EmprendedoresBenefits from '@/src/components/servicios/emprendedores/EmprendedoresBenefits';
import EmprendedoresPricing from '@/src/components/servicios/emprendedores/EmprendedoresPricing';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Depósito, Fulfillment y Envíos PyME en Mar del Plata',
  description:
    'Almacenamiento en Friuli 1972 con picking, preparación de pedidos, opción DropOFF y contrareembolso en Mar del Plata.',
  alternates: {
    canonical: `${baseUrl}/servicios/deposito-fulfillment`,
  },
  openGraph: {
    title: 'Depósito, Fulfillment y Envíos PyME | Envíos DosRuedas',
    description:
      'Soluciones integrales de logística para e-commerce en Mar del Plata. Depósito en Friuli 1972, preparación y despacho directo.',
    url: `${baseUrl}/servicios/deposito-fulfillment`,
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Depósito, Fulfillment y Envíos PyME | Envíos DosRuedas',
    description: 'Soluciones integrales de logística para e-commerce en Mar del Plata. Depósito en Friuli 1972, preparación y despacho directo.',
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@enviosdosruedas',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Depósito, Fulfillment y Logística E-Commerce en Mar del Plata',
  description:
    'Servicio integral de almacenamiento y logística e-commerce en Mar del Plata. Incluye E-Commerce Same Day desde Friuli 1972 con picking QR, E-Commerce Next Day 24hs, opción DropOFF con 20% de descuento y cobro contrareembolso sin cargo extra.',
  url: `${baseUrl}/servicios/deposito-fulfillment`,
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
    name: 'Planes de Depósito, Fulfillment y Paquetería E-Commerce',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${baseUrl}/#servicios` },
    { '@type': 'ListItem', position: 3, name: 'Depósito & Fulfillment', item: `${baseUrl}/servicios/deposito-fulfillment` },
  ],
};

export default function DepositoFulfillmentPage() {
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

      {/* Hero Header block — Electric Speed Blue (brand-blue-500) */}
      <section className="relative z-10 bg-brand-blue-500">
        <EmprendedoresHero />
      </section>

      {/* Corporate logistics features — White Canvas (brand-white-50) */}
      <section className="relative z-10 bg-brand-white-50 font-sans">
        <EmprendedoresFeatures />
      </section>

      {/* Strategic business benefits grid — Deep Midnight Navy (brand-blue-900) */}
      <section className="relative z-10 bg-brand-blue-900 font-sans">
        <EmprendedoresBenefits />
      </section>

      {/* Premium custom e-commerce plans and warehousing prices — Electric Speed Blue (brand-blue-500) */}
      <section className="relative z-10 bg-brand-blue-500">
        <EmprendedoresPricing />
      </section>
    </main>
  );
}
