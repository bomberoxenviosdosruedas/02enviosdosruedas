import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { prisma } from '@/src/lib/prisma';
import { PriceRange } from '@/generated/prisma/client';
import CotizadorLowCostForm from '@/src/components/cotizar/lowcost/CotizadorLowCostForm';
import CotizadorLowCostDetails from '@/src/components/cotizar/lowcost/CotizadorLowCostDetails';
import CotizadorLowCostHelp from '@/src/components/cotizar/lowcost/CotizadorLowCostHelp';
import CarruselRedes from '@/src/components/layout/CarruselRedes';

export const metadata: Metadata = {
  title: 'Cotizador de Envíos LowCost en Mar del Plata | Envíos DosRuedas',
  description: 'Calculá tu envío de ruteo diario masivo con entrega garantizada en el día en Mar del Plata. Eficiencia y rentabilidad.',
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
    <div id="cotizar-lowcost-page" className="w-full bg-slate-50/50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero Section */}
        <header className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <span className="px-3 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-accent-sm">
            <ShoppingBag className="h-4 w-4 shrink-0 animate-bounce" />
            Servicio Económico y Programado
          </span>
          <h1 className="text-4xl sm:text-5xl font-display uppercase tracking-tight text-brand-blue leading-none">
            Cotizador de Envíos LowCost
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            Eficiencia y rentabilidad. Calculá tu envío con entrega garantizada en el día si es solicitado antes de las 13hs.
          </p>
          <div className="flex justify-center pt-2">
            <Link
              href="/servicios/envios-lowcost"
              className="text-xs font-semibold uppercase tracking-wider text-brand-blue hover:text-brand-blue/80 flex items-center gap-1 group font-sans underline decoration-brand-blue/30"
            >
              Más sobre Envíos LowCost
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </header>

        {/* 1. Main Quote Form */}
        <main className="w-full">
          <CotizadorLowCostForm priceRanges={priceRanges} />
        </main>

        {/* 2. Detail Guidelines */}
        <CotizadorLowCostDetails />

        {/* 4. Help Contact Banner */}
        <CotizadorLowCostHelp />

      </div>

      {/* 5. Social networks community ticker */}
      <div className="mt-16">
        <CarruselRedes />
      </div>
    </div>
  );
}
