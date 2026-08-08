import React from 'react';
import { Metadata } from 'next';
import EmprendedoresHero from '@/src/components/servicios/emprendedores/EmprendedoresHero';
import EmprendedoresFeatures from '@/src/components/servicios/emprendedores/EmprendedoresFeatures';
import EmprendedoresBenefits from '@/src/components/servicios/emprendedores/EmprendedoresBenefits';
import EmprendedoresPricing from '@/src/components/servicios/emprendedores/EmprendedoresPricing';

const baseUrl = 'https://www.enviosdosruedas.com';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Logística 3PL y Plan Emprendedores',
  description: 'Solución integral de almacenamiento, picking, packing y fulfillment para PyMEs y e-commerce en Mar del Plata. Alquilá espacio en nuestro depósito 3PL propio.',
  url: `${baseUrl}/servicios/plan-emprendedores`,
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#localbusiness`,
    name: 'Envíos DosRuedas',
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
        price: '0',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Plan PyME',
        description: 'Hasta 500 órdenes/mes - todo lo anterior + gestión devoluciones',
        price: '0',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Plan Enterprise',
        description: 'Volumen ilimitado - integración ERP + KPIs dedicados',
        price: '0',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
    ],
  },
};

export const metadata: Metadata = {
  title: 'Logística 3PL y Plan Emprendedores | Envíos DosRuedas Mar del Plata',
  description: 'Solución integral de almacenamiento, picking, packing y fulfillment para PyMEs y e-commerce en Mar del Plata. Alquilá espacio en nuestro depósito 3PL propio.',
  alternates: {
    canonical: `${baseUrl}/servicios/plan-emprendedores`,
  },
  other: {
    'script:ld+json': JSON.stringify(serviceSchema),
  },
};

export default function PlanEmprendedoresPage() {
  return (
    <main className="min-h-screen gradient-surface text-brand-blue-700 relative overflow-hidden">
      {/* Ambient floating glow-orbs */}
      <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-brand-yellow/3 rounded-full blur-[110px] pointer-events-none" style={{ animationDelay: '-3s' }} />

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

