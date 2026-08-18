import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { prisma } from '@/src/lib/prisma';
import { PriceRange } from '@/generated/prisma/client';
import CotizadorLowCostHero from '@/src/components/cotizar/lowcost/CotizadorLowCostHero';
import CotizadorLowCostForm from '@/src/components/cotizar/lowcost/CotizadorLowCostForm';
import CotizadorLowCostDetails from '@/src/components/cotizar/lowcost/CotizadorLowCostDetails';
import CotizadorLowCostHelp from '@/src/components/cotizar/lowcost/CotizadorLowCostHelp';

const baseUrl = 'https://www.enviosdosruedas.com';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Cotizador de Envíos LowCost en Moto | Mar del Plata | Envíos DosRuedas',
  description:
    'Calculá tu tarifa de envío económico programado con entrega en el día en Mar del Plata (pedidos antes de las 13 hs). Ruteo optimizado para comercios y PyMEs.',
  alternates: {
    canonical: `${baseUrl}/cotizar/lowcost`,
  },
  openGraph: {
    title: 'Cotizá tu Envío LowCost en Moto | Mar del Plata | Envíos DosRuedas',
    description:
      'Calculá tu envío programado con entrega en el día en Mar del Plata. Máxima rentabilidad y eficiencia logística.',
    url: `${baseUrl}/cotizar/lowcost`,
    type: 'website',
    locale: 'es_AR',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Cotizador de Envíos LowCost Envíos DosRuedas',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  url: `${baseUrl}/cotizar/lowcost`,
  description:
    'Herramienta de cálculo para envíos económicos consolidados y ruteos urbanos masivos en Mar del Plata.',
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
