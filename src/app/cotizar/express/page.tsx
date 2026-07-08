import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { prisma } from '@/src/lib/prisma';
import { PriceRange } from '@/generated/prisma/client';
import CotizadorExpressForm from '@/src/components/cotizar/express/CotizadorExpressForm';
import CotizadorExpressDetails from '@/src/components/cotizar/express/CotizadorExpressDetails';
import CotizadorExpressHelp from '@/src/components/cotizar/express/CotizadorExpressHelp';
import CarruselRedes from '@/src/components/layout/CarruselRedes';

export const metadata: Metadata = {
  title: 'Cotizador de Envíos Express en Mar del Plata | Envíos DosRuedas',
  description: 'Calculá el costo y tiempo estimado de tu envío prioritario al instante. Alta precisión de tarifa y entrega en el día en Mar del Plata.',
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
    <div id="cotizar-express-page" className="w-full bg-slate-50/50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero Section */}
        <header className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <span className="px-3 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-accent-sm">
            <Zap className="h-4 w-4 shrink-0 animate-bounce" />
            Servicio Express Prioritario
          </span>
          <h1 className="text-4xl sm:text-5xl font-display uppercase tracking-tight text-brand-blue leading-none">
            Cotizador de Envíos Express
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            Calculá el costo de tu envío prioritario al instante. Obtené la tarifa de entrega según la distancia y coordiná en el acto con nosotros por WhatsApp.
          </p>
          <div className="flex justify-center pt-2">
            <Link
              href="/servicios/envios-express"
              className="text-xs font-semibold uppercase tracking-wider text-brand-blue hover:text-brand-blue/80 flex items-center gap-1 group font-sans underline decoration-brand-blue/30"
            >
              Más sobre Envíos Express
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </header>

        {/* 1. Main Quote Form */}
        <main className="w-full">
          <CotizadorExpressForm priceRanges={priceRanges} />
        </main>

        {/* 2. Detail Guidelines */}
        <CotizadorExpressDetails />

        {/* 4. Help Contact Banner */}
        <CotizadorExpressHelp />

      </div>

      {/* 5. Social networks community ticker */}
      <div className="mt-16">
        <CarruselRedes />
      </div>
    </div>
  );
}
