'use client';

import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import CotizadorForm from './CotizadorForm';
import CotizadorComparativa from './CotizadorComparativa';
import CotizadorMapa from './CotizadorMapa';
import CotizadorGuia from './CotizadorGuia';
import CotizadorBatchOferta from './CotizadorBatchOferta';
import { useCotizadorUnificado } from './hooks/useCotizadorUnified';

/**
 * Isla única del cotizador. Todo el estado vive acá: el formulario, la
 * comparación y el desvío al lote se mueven juntos.
 */
export default function CotizadorUnificado() {
  const form = useCotizadorUnificado();
  const [lotesAbiertos, setLotesAbiertos] = useState(false);

  const abrirLotes = () => {
    setLotesAbiertos(true);
    // El foco viaja al panel para que quien activa el control no pierda el lugar.
    // Scop opcional: en JSDOM `scrollIntoView` no existe y el click tiraría.
    requestAnimationFrame(() => {
      document
        .getElementById('lotes')
        ?.scrollIntoView?.({ behavior: form.shouldReduceMotion ? 'auto' : 'smooth', block: 'start' });
    });
  };

  return (
    <div className="space-y-8 lg:space-y-10">
      <CotizadorGuia />

      <section
        id="cotizador-form"
        aria-label="Cotizador de envíos"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch scroll-mt-20"
      >
        <article className="lg:col-span-7 flex flex-col rounded-[28px] sm:rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-xl">
          <div className="bg-brand-blue-700 p-6 sm:p-8 rounded-[20px] border border-white/10 flex flex-col h-full text-white relative overflow-hidden">
            <Calculator
              className="absolute -bottom-10 -right-10 w-64 h-64 text-white/[0.04] pointer-events-none"
              aria-hidden="true"
            />

            <header className="relative z-10 mb-6">
              <span className="px-3.5 py-1 bg-brand-yellow-500/10 text-brand-yellow-500 rounded-full text-xs font-subheading font-bold tracking-wider uppercase border border-brand-yellow-500/40 -rotate-1 shadow-[var(--shadow-glow-yellow)] inline-block">
                Mar del Plata · Sin registro
              </span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white mt-3">
                Contanos del envío
              </h2>
              <p className="text-white/90 text-sm font-sans mt-1 leading-relaxed">
                Con el origen y el destino alcanzamos el precio de los dos servicios.
              </p>
            </header>

            <CotizadorForm form={form} />

            <CotizadorComparativa form={form} error={form.error} onAskBatch={abrirLotes} />
          </div>
        </article>

        <CotizadorMapa form={form} />
      </section>

      <CotizadorBatchOferta
        abierto={lotesAbiertos}
        onClose={() => setLotesAbiertos(false)}
        shouldReduceMotion={form.shouldReduceMotion}
      />
    </div>
  );
}
