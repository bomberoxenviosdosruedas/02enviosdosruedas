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
  title: 'Cotizá tu Envío Express en Moto',
  description:
    'Calculá el costo exacto de tu envío prioritario en Mar del Plata. Tarifas transparentes por kilómetro, entrega en el día y coordinación en el acto.',
  alternates: {
    canonical: `${baseUrl}/cotizar/express`,
  },
  openGraph: {
    title: 'Cotizá tu Envío Express en Moto | Envíos DosRuedas',
    description:
      'Calculá al instante el valor de tu envío express en Mar del Plata. Tarifas transparentes 2026.',
    url: `${baseUrl}/cotizar/express`,
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cotizá tu Envío Express en Moto | Envíos DosRuedas',
    description: 'Calculá al instante el valor de tu envío express en Mar del Plata. Tarifas transparentes 2026.',
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@enviosdosruedas',
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
      <div className="lg:col-span-7 h-[540px] bg-white/10 rounded-[28px] border border-white/20" />
      <div className="lg:col-span-5 h-[540px] bg-brand-blue-900 rounded-[28px] border border-white/10" />
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
      {/* Main outer container */}
      <div id="cotizar-express-page" className="w-full bg-brand-blue-500 text-white min-h-[100dvh] relative overflow-hidden font-sans">
        {/* Hero Section — Rendered and Streamed Immediately */}
        <CotizadorExpressHero />

        {/* Descriptive Content Section — SEO & User Context */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[28px] shadow-float">
            <div className="bg-brand-blue-900 text-white p-6 sm:p-8 rounded-[20px] border border-white/10 shadow-sm space-y-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-yellow-500/10 border border-brand-yellow-500/30 text-brand-yellow-500 font-subheading text-xs uppercase tracking-widest w-fit">
                <span>CÓMO FUNCIONA</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
                CALCULÁ TU ENVÍO EXPRESS EN 3 PASOS
              </h2>
              <p className="text-white/80 font-sans leading-relaxed text-base sm:text-lg max-w-3xl">
                Nuestro cotizador Express te da el precio exacto al instante según la distancia real en kilómetros.
                Sin sorpresas, sin cargos ocultos. Tarifas 2026 oficiales publicadas y auditables.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/15">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-8 h-8 rounded-full bg-brand-yellow-500 text-brand-blue-900 flex items-center justify-center shrink-0 font-display text-lg font-bold">1</span>
                  <div>
                    <h3 className="font-subheading text-sm uppercase font-bold text-white">Ingresá Direcciones</h3>
                    <p className="text-xs text-white/70 font-sans">Origen y destino en Mar del Plata. El sistema calcula la distancia óptima.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-8 h-8 rounded-full bg-brand-yellow-500 text-brand-blue-900 flex items-center justify-center shrink-0 font-display text-lg font-bold">2</span>
                  <div>
                    <h3 className="font-subheading text-sm uppercase font-bold text-white">Obtené Tarifa Exacta</h3>
                    <p className="text-xs text-white/70 font-sans">Precio por zona (0-3km, 3-5km, 5-7km, 7-10km, +10km) sin redondeos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-8 h-8 rounded-full bg-brand-yellow-500 text-brand-blue-900 flex items-center justify-center shrink-0 font-display text-lg font-bold">3</span>
                  <div>
                    <h3 className="font-subheading text-sm uppercase font-bold text-white">Confirmá por WhatsApp</h3>
                    <p className="text-xs text-white/70 font-sans">Un click y coordinás el retiro. Sin registro obligatorio, atención inmediata.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/15 flex flex-wrap gap-3">
                <span className="font-subheading text-xs uppercase tracking-wider text-brand-yellow-500 font-bold">COBERTURA:</span>
                <span className="text-sm text-white/80 font-sans">Centro, Güemes, Puerto, Playa Grande, Punta Mogotes, Constitución, Chauvín, Batán y hasta 20 km (Sierra de los Padres).</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="font-subheading text-xs uppercase tracking-wider text-brand-yellow-500 font-bold">LÍMITES:</span>
                <span className="text-sm text-white/80 font-sans">Hasta 5 kg y 40x30 cm por bulto. Franja horaria de 3 hs (ej. 10 a 13 hs). Corte 15:00 hs con 2h anticipación.</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 sm:mt-0 pt-2 lg:pt-8 space-y-10 pb-16 relative z-10">
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
