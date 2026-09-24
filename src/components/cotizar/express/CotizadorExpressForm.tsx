'use client';

import React from 'react';
import { Calculator } from 'lucide-react';
import CotizadorExpressFormFields from './CotizadorExpressFormFields';
import CotizadorExpressResults from './CotizadorExpressResults';
import CotizadorExpressMap from './CotizadorExpressMap';
import { useCotizadorExpress } from './hooks/useCotizadorExpress';
import { useQuoteAnalytics } from './hooks/useQuoteAnalytics';
import type { PriceRangeProp } from '@/lib/pricing';

export default function CotizadorExpressForm({ priceRanges = [] }: { priceRanges?: PriceRangeProp[] }) {
  const form = useCotizadorExpress({ priceRanges });
  const analytics = useQuoteAnalytics();

  // Track WhatsApp click from results (analytics delegado)
  void analytics;

  return (
    <section
      id="cotizador-express-form"
      aria-label="Cotizador Express"
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
    >
      {/* Panel formulario + resultados (7 cols) */}
      <article className="lg:col-span-7 flex flex-col rounded-[28px] sm:rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-xl transition-all duration-300">
        <div className="bg-brand-blue-700 p-6 sm:p-8 rounded-[20px] border border-white/10 flex flex-col h-full text-white relative overflow-hidden">
          {/* Watermark de fondo */}
          <Calculator
            className="absolute -bottom-10 -right-10 w-64 h-64 text-white/[0.04] pointer-events-none"
            aria-hidden="true"
          />

          {/* Header */}
          <div className="relative z-10 mb-6">
            <span className="px-3.5 py-1 bg-white/10 text-brand-yellow-500 rounded-full text-xs font-subheading font-bold tracking-wider uppercase border border-white/20 -rotate-1 shadow-[var(--shadow-glow-yellow)] inline-block">
              Cotización Al Instante · Mar del Plata
            </span>
            <h2
              id="cotizador-title"
              className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white mt-3"
            >
              Calculá tu Envío Express
            </h2>
            <p className="text-white/80 text-sm font-sans mt-1 leading-relaxed">
              Ingresá las direcciones de origen y destino en Mar del Plata para obtener tarifa exacta
              y ruta OSRM en tiempo real.
            </p>
          </div>

          {/* Campos del formulario */}
          <CotizadorExpressFormFields
            form={form}
            error={form.error}
            isCalculating={form.isCalculating}
            shouldReduceMotion={form.shouldReduceMotion}
          />

          {/* Resultados */}
          <CotizadorExpressResults
            form={form}
            error={form.error}
          />
        </div>
      </article>

      {/* Panel mapa interactivo (5 cols) */}
      <CotizadorExpressMap form={form} />
    </section>
  );
}