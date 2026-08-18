import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { prisma } from '@/src/lib/prisma';
import { PriceRange } from '@/generated/prisma/client';
import CotizadorExpressHero from '@/src/components/cotizar/express/CotizadorExpressHero';
import CotizadorExpressForm from '@/src/components/cotizar/express/CotizadorExpressForm';
import CotizadorExpressDetails from '@/src/components/cotizar/express/CotizadorExpressDetails';
import CotizadorExpressHelp from '@/src/components/cotizar/express/CotizadorExpressHelp';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Cotizador de Envíos Express en Mar del Plata | Envíos DosRuedas',
  description: 'Calculá el costo y tiempo estimado de tu envío prioritario al instante. Alta precisión de tarifa y entrega en el día en Mar del Plata.',
  alternates: {
    canonical: `${baseUrl}/cotizar/express`,
  },
};

const jsonLdSchema = {
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
      { '@type': 'Offer', name: 'Express 0-3 km', price: '3700', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Express 3-5 km', price: '4600', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Express 5-7 km', price: '6100', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Express 7-10 km', price: '8200', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Express +10 km', price: '8200', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
    ],
  },
};

async function ExpressFormAsync() {
  let priceRanges: PriceRange[] = [];
  try {
    priceRanges = await prisma.priceRange.findMany();
  } catch (error) {
    console.error('Error fetching price ranges from Prisma Postgres:', error);
  }
  return <CotizadorExpressForm priceRanges={priceRanges} />;
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
      <div id="cotizar-express-page" className="w-full gradient-dark text-white min-h-screen relative overflow-hidden">
        {/* Hero Section — Rendered and Streamed Immediately */}
        <CotizadorExpressHero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16 relative z-10">
          {/* 1. Main Quote Form Streamed with Suspense */}
          <main className="w-full font-sans">
            <Suspense fallback={<FormSkeleton />}>
              <ExpressFormAsync />
            </Suspense>
          </main>

          {/* 2. Detail Guidelines */}
          <div className="font-sans">
            <CotizadorExpressDetails />
          </div>

          {/* 3. Help Contact Banner */}
          <div className="font-sans">
            <CotizadorExpressHelp />
          </div>
        </div>
      </div>
    </>
  );
}
