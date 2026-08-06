import React from 'react';
import type { Metadata } from 'next';
import { prisma } from '@/src/lib/prisma';
import { PriceRange } from '@/generated/prisma/client';
import CotizadorExpressHero from '@/src/components/cotizar/express/CotizadorExpressHero';
import CotizadorExpressForm from '@/src/components/cotizar/express/CotizadorExpressForm';
import CotizadorExpressDetails from '@/src/components/cotizar/express/CotizadorExpressDetails';
import CotizadorExpressHelp from '@/src/components/cotizar/express/CotizadorExpressHelp';
import CarruselRedes from '@/src/components/layout/CarruselRedes';

const baseUrl = 'https://www.enviosdosruedas.com';

const quoteSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cotizador de Envíos Express',
  description: 'Calculá el costo y tiempo estimado de tu envío prioritario al instante. Alta precisión de tarifa y entrega en el día en Mar del Plata.',
  url: `${baseUrl}/cotizar/express`,
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
    name: 'Tarifas Express por Distancia',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Express 0-3 km',
        price: '3700',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Express 3-6 km',
        price: '4200',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Express 6-10 km',
        price: '5200',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Express 10-15 km',
        price: '6800',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Express 15-20 km',
        price: '8500',
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      },
    ],
  },
};

export const metadata: Metadata = {
  title: 'Cotizador de Envíos Express en Mar del Plata | Envíos DosRuedas',
  description: 'Calculá el costo y tiempo estimado de tu envío prioritario al instante. Alta precisión de tarifa y entrega en el día en Mar del Plata.',
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
    <div id="cotizar-express-page" className="w-full gradient-dark text-white min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <CotizadorExpressHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16 relative z-10">

        {/* 1. Main Quote Form */}
        <main className="w-full font-sans">
          <CotizadorExpressForm priceRanges={priceRanges} />
        </main>

        {/* 2. Detail Guidelines */}
        <div className="font-sans">
          <CotizadorExpressDetails />
        </div>

        {/* 4. Help Contact Banner */}
        <div className="font-sans">
          <CotizadorExpressHelp />
        </div>

      </div>

    </div>
  );
}

