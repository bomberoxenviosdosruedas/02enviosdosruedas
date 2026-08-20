import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { prisma } from '@/src/lib/prisma';
import { PriceRange } from '@/generated/prisma/client';
import CotizadorExpressHero from '@/src/components/cotizar/express/CotizadorExpressHero';
import CotizadorExpressForm from '@/src/components/cotizar/express/CotizadorExpressForm';
import CotizadorExpressDetails from '@/src/components/cotizar/express/CotizadorExpressDetails';
import CotizadorExpressHelp from '@/src/components/cotizar/express/CotizadorExpressHelp';

const baseUrl = 'https://www.enviosdosruedas.com';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Cotizador de Envíos Express en Moto | Mar del Plata | Envíos DosRuedas',
  description:
    'Calculá el costo exacto de tu envío prioritario en Mar del Plata. Tarifas transparentes por kilómetro, entrega en el día y coordinación en el acto.',
  alternates: {
    canonical: `${baseUrl}/cotizar/express`,
  },
  openGraph: {
    title: 'Cotizá tu Envío Express en Moto | Mar del Plata | Envíos DosRuedas',
    description:
      'Calculá al instante el valor de tu envío express en Mar del Plata. Tarifas transparentes 2026.',
    url: `${baseUrl}/cotizar/express`,
    type: 'website',
    locale: 'es_AR',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Cotizador de Envíos Express Envíos DosRuedas',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  url: `${baseUrl}/cotizar/express`,
  description:
    'Herramienta interactiva para calcular tarifas y distancias de envíos express en moto en Mar del Plata.',
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
