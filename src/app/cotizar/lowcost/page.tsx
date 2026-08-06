import React from 'react';
import type { Metadata } from 'next';
import { prisma } from '@/src/lib/prisma';
import { PriceRange } from '@/generated/prisma/client';
import CotizadorLowCostHero from '@/src/components/cotizar/lowcost/CotizadorLowCostHero';
import CotizadorLowCostForm from '@/src/components/cotizar/lowcost/CotizadorLowCostForm';
import CotizadorLowCostDetails from '@/src/components/cotizar/lowcost/CotizadorLowCostDetails';
import CotizadorLowCostHelp from '@/src/components/cotizar/lowcost/CotizadorLowCostHelp';

const baseUrl = 'https://www.enviosdosruedas.com';

const quoteSchema = {
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
      {
        '@type': 'Offer',
        name: 'LowCost 0-5 km',
        price: '2200',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'LowCost 5-10 km',
        price: '2800',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'LowCost 10-15 km',
        price: '3500',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'LowCost 15-20 km',
        price: '4200',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'LowCost 20-25 km',
        price: '5000',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
    ],
  },
};

export const metadata: Metadata = {
  title: 'Cotizador de Envíos LowCost en Mar del Plata | Envíos DosRuedas',
  description: 'Calculá tu envío con entrega garantizada en el dia si es solicitado antes de 13hs. Eficiencia y rentabilidad.',
  other: {
    'script:ld+json': JSON.stringify(quoteSchema),
  },
};

export default async function Page() {
  // Fetch price ranges from database (RSC)
  let priceRanges: PriceRange[] = [];
  try {
    priceRanges = await prisma.priceRange.findMany();
  } catch (error) {
    console.error('Error fetching price ranges from Prisma Postgres:', error);
  }

  return (
    <div id="cotizar-lowcost-page" className="w-full gradient-dark text-white min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <CotizadorLowCostHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-24 relative z-10">


        {/* 1. Main Quote Form */}
        <main className="w-full font-sans">
          <CotizadorLowCostForm priceRanges={priceRanges} />
        </main>

        {/* 2. Detail Guidelines */}
        <div className="font-sans">
          <CotizadorLowCostDetails />
        </div>

        {/* 4. Help Contact Banner */}
        <div className="font-sans">
          <CotizadorLowCostHelp />
        </div>

      </div>
    </div>
  );
}

