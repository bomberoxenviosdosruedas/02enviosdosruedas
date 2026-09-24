'use client';

import React from 'react';
import { Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import CotizadorExpressFormFields from './CotizadorExpressFormFields';
import CotizadorExpressResults from './CotizadorExpressResults';
import CotizadorExpressMap from './CotizadorExpressMap';
import { useCotizadorExpress } from './hooks/useCotizadorExpress';
import { useQuoteAnalytics } from './hooks/useQuoteAnalytics';
import type { PriceRangeProp } from '@/src/lib/pricing';

export default function CotizadorExpressForm({ priceRanges = [] }: { priceRanges?: PriceRangeProp[] }) {
  const form = useCotizadorExpress({ priceRanges });
  const analytics = useQuoteAnalytics();

  // Track quote start when any input gets focus (delegated to form fields)
  const handleInputFocus = form.handleInputFocus;

  // Track WhatsApp click from results
  const handleWhatsAppClick = () => {
    analytics.trackWhatsAppClick('cotizador_express_resultado');
  };

  return (
    <section id="cotizador-express-form" aria-labelledby="cotizador-title" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Form Input & Results Panel (7 cols) */}
      <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-xl transition-all duration-300">
        <div className="bg-brand-blue-900 p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between h-full text-white relative overflow-hidden">
          {/* Visual Watermark in bottom right */}
          <Calculator
            className="absolute -bottom-10 -right-10 w-64 h-64 text-white/[0.04] pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-6 relative z-10">
            <div>
              <span className="px-3.5 py-1 bg-white/10 text-brand-yellow-500 rounded-full text-xs font-subheading font-bold tracking-wider uppercase border border-white/20 -rotate-1 shadow-glow-yellow inline-block">
                Cotización Al Instante · Mar del Plata
              </span>
              <h2 id="cotizador-title" className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white mt-3">
                Calculá tu Envío Express
              </h2>
              <p className="text-white/80 text-sm font-sans mt-1 leading-relaxed">
                Ingresá las direcciones de origen y destino en Mar del Plata para obtener tarifa exacta y ruta OSRM en tiempo real.
              </p>
            </div>

            <CotizadorExpressFormFields
              form={form}
              error={form.error}
              isCalculating={form.isCalculating}
              shouldReduceMotion={form.shouldReduceMotion}
            />

            <CotizadorExpressResults
              form={form}
              error={form.error}
            />
          </div>
        </div>
      </div>

      {/* Real Interactive Map Panel (5 cols) */}
      <CotizadorExpressMap form={form} />
    </section>
  );
}