import React from 'react';
import { Metadata } from 'next';
import EmprendedoresHero from '@/src/components/servicios/emprendedores/EmprendedoresHero';
import EmprendedoresFeatures from '@/src/components/servicios/emprendedores/EmprendedoresFeatures';
import EmprendedoresBenefits from '@/src/components/servicios/emprendedores/EmprendedoresBenefits';
import EmprendedoresPricing from '@/src/components/servicios/emprendedores/EmprendedoresPricing';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Logística 3PL y Fulfillment para E-Commerce en Mar del Plata | Envíos DosRuedas',
  description:
    'Almacenamiento, preparación de pedidos (picking & packing) y distribución de última milla para PyMEs y marcas en Mar del Plata. Depósito en Friuli 1972.',
  alternates: {
    canonical: `${baseUrl}/servicios/plan-emprendedores`,
  },
  openGraph: {
    title: 'Logística 3PL y Fulfillment para E-Commerce | Envíos DosRuedas Mar del Plata',
    description:
      'Tercerizá tu depósito y logística en Mar del Plata. Almacenamos tu stock, preparamos tus órdenes y las entregamos en el día.',
    url: `${baseUrl}/servicios/plan-emprendedores`,
    type: 'website',
    locale: 'es_AR',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Logística 3PL, Fulfillment y Plan Emprendedores en Mar del Plata',
  description:
    'Solución integral de almacenamiento inteligente, picking, packing y distribución de última milla para PyMEs y e-commerce en Mar del Plata.',
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
    name: 'Planes 3PL y Fulfillment',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Plan Emprendedor',
        description: 'Hasta 100 órdenes/mes - almacenamiento + picking + packing',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Plan PyME',
        description: 'Hasta 500 órdenes/mes - almacenamiento + packing + gestión de cambios/devoluciones',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Plan Enterprise',
        description: 'Volumen ilimitado - integración ERP/API + ejecutiva de cuentas dedicada',
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
