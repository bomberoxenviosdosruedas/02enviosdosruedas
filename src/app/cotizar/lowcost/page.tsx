import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { prisma } from '@/src/lib/prisma';
import { PriceRange } from '@/generated/prisma/client';
import CotizadorLowCostHero from '@/src/components/cotizar/lowcost/CotizadorLowCostHero';
import CotizadorLowCostForm from '@/src/components/cotizar/lowcost/CotizadorLowCostForm';
import CotizadorLowCostDetails from '@/src/components/cotizar/lowcost/CotizadorLowCostDetails';
import CotizadorLowCostHelp from '@/src/components/cotizar/lowcost/CotizadorLowCostHelp';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Cotizador de Envíos LowCost en Mar del Plata | Envíos DosRuedas',
  description: 'Calculá tu envío con entrega garantizada en el dia si es solicitado antes de 13hs. Eficiencia y rentabilidad.',
  alternates: {
    canonical: `${baseUrl}/cotizar/lowcost`,
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cotizador de Envíos LowCost',
  description: 'Calculá tu envío con entrega garantizada en el dia si es solicitado antes de 13hs. Eficiencia y rentabilidad.',
  url: `${baseUrl}/cotizar/lowcost`,
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
    name: 'Tarifas LowCost por Distancia',
    itemListElement: [
      { '@type': 'Offer', name: 'LowCost 0-3 km', price: '3000', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'LowCost 3-5 km', price: '4000', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'LowCost 5-7 km', price: '5300', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'LowCost 7-10 km', price: '7000', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'LowCost +10 km', price: '7000', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
    ],
  },
};

async function LowCostFormAsync() {
  let priceRanges: PriceRange[] = [];
  try {
    priceRanges = await prisma.priceRange.findMany();
  } catch (error) {
    console.error('Error fetching price ranges from Prisma Postgres:', error);
  }
  return <CotizadorLowCostForm priceRanges={priceRanges} />;
}

function FormSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-pulse">
      <div className="lg:col-span-7 h-[540px] bg-brand-blue-50/40 rounded-2xl border border-brand-blue-100/50" />
      <div className="lg:col-span-5 h-[540px] bg-brand-blue-700/40 rounded-2xl border border-white/10" />
    </div>
  );
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <div id="cotizar-lowcost-page" className="w-full gradient-dark text-white min-h-screen relative overflow-hidden">
        {/* Hero Section — Rendered and Streamed Immediately */}
        <CotizadorLowCostHero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-24 relative z-10">
          {/* 1. Main Quote Form Streamed with Suspense */}
          <main className="w-full font-sans">
            <Suspense fallback={<FormSkeleton />}>
              <LowCostFormAsync />
            </Suspense>
          </main>

          {/* 2. Detail Guidelines */}
          <div className="font-sans">
            <CotizadorLowCostDetails />
          </div>

          {/* 3. Help Contact Banner */}
          <div className="font-sans">
            <CotizadorLowCostHelp />
          </div>
        </div>
      </div>
    </>
  );
}
