'use client';

import React from 'react';
import { Calculator } from 'lucide-react';
import CotizadorForm from './CotizadorForm';
import CotizadorComparativa from './CotizadorComparativa';
import CotizadorMapa from './CotizadorMapa';
import CotizadorGuia from './CotizadorGuia';
import Badge from '@/components/ui/Badge';
import { useCotizadorUnificado } from '@/hooks/cotizador/useCotizadorUnified';

/**
 * Isla única del cotizador. Todo el estado vive acá: el formulario y la
 * comparación se mueven juntos.
 *
 * No hay cotización por lotes: LowCost es un reparto programado en el día, no un
 * precio por agrupar envíos de un mismo cliente (decisión del dueño 2026-09-29).
 */
export default function CotizadorUnificado() {
  const form = useCotizadorUnificado();

  return (
    <div className="space-y-8 lg:space-y-10">
      <CotizadorGuia />

      <section
        id="cotizador-form"
        aria-label="Cotizador de envíos"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch scroll-mt-20"
      >
        <article className="lg:col-span-7 flex flex-col rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-xl">
          <div className="bg-brand-blue-500 p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col h-full text-white relative overflow-hidden">
            <Calculator
              className="absolute -bottom-10 -right-10 w-64 h-64 text-white/4 pointer-events-none"
              aria-hidden="true"
            />

            <header className="relative z-10 mb-6">
              <Badge
                variant="outline"
                size="sm"
                className="border-brand-yellow-500/40 text-brand-yellow-500 -rotate-1"
              >
                Mar del Plata · Sin registro
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white mt-3">
                Contanos del envío
              </h2>
              <p className="text-white/90 text-sm font-sans mt-1 leading-relaxed">
                Con el origen y el destino alcanzamos el precio de los dos servicios.
              </p>
            </header>

            <CotizadorForm form={form} />

            <CotizadorComparativa form={form} error={form.error} />
          </div>
        </article>

        <CotizadorMapa form={form} />
      </section>

    </div>
  );
}
