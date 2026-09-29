'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { GitCompareArrows, MapPin, MessageCircle } from 'lucide-react';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import CTANestedPill from '@/components/ui/CTANestedPill';
import Badge from '@/components/ui/Badge';

/**
 * Hero de la guía, no de un servicio. No vende Express ni LowCost: explica que
 * cargás un envío una vez y recibís las dos tarifas. La promesa es la del flujo.
 */
export default function CotizadorHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="cotizador-hero"
      className="relative w-full overflow-hidden bg-brand-blue-700 text-white min-h-auto lg:min-h-[52vh] flex items-center pt-20 pb-8 sm:pt-24 lg:pt-28 lg:pb-12 border-b border-white/10"
    >
      <HeroProceduralBackground variant="express" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <Badge
              variant="accent"
              size="lg"
              className="-rotate-1"
              icon={<GitCompareArrows className="h-4 w-4" />}
            >
              Dos servicios · Una sola carga
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] font-display uppercase tracking-tight leading-[0.92] text-white">
              <span>COTIZÁ TU </span>
              <span className="inline-block bg-brand-yellow-500 text-brand-blue-900 px-3 py-1 rounded-lg transform -rotate-1 shadow-glow-yellow mx-1">
                ENVÍO
              </span>
              <span className="block">Y COMPARÁ</span>
            </h1>

            <p className="text-base sm:text-lg font-sans text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Cargá el retiro y la entrega una sola vez. Te mostramos la tarifa Express y la
              LowCost para esa distancia exacta, y vos elegís cuál querés. Sin registro, sin
              llamadas, sin letra chica.
            </p>

            <div className="flex justify-center lg:justify-start pt-2">
              <CTANestedPill
                href="#cotizador-form"
                variant="primary"
                size="large"
                className="w-full sm:w-auto"
              >
                Cargar mi envío
              </CTANestedPill>
            </div>
          </motion.div>

          {/* El flujo en tres líneas: es la guía completa de la página, en miniatura. */}
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full max-w-lg mx-auto"
          >
            <div className="p-2.5 rounded-2xl bg-brand-blue-50/20 border border-brand-blue-100/40 shadow-2xl backdrop-blur-md">
              <div className="bg-brand-blue-700 rounded-xl border border-white/20 overflow-hidden divide-y divide-white/10">
                {[
                  { n: '01', icon: MapPin, t: 'Cargás retiro y entrega', s: 'Medimos la distancia real por calle' },
                  { n: '02', icon: GitCompareArrows, t: 'Ves las dos tarifas', s: 'Express y LowCost sobre la misma escala' },
                  { n: '03', icon: MessageCircle, t: 'Elegís y confirmás', s: 'Te llevamos el pedido por WhatsApp' },
                ].map((paso) => (
                  <div key={paso.n} className="flex items-center gap-4 p-4 sm:p-5">
                    <span className="font-mono text-xs text-brand-yellow-500 tabular-nums shrink-0">
                      {paso.n}
                    </span>
                    <paso.icon className="h-4 w-4 text-white/60 shrink-0" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block font-subheading text-sm uppercase tracking-wider text-white">
                        {paso.t}
                      </span>
                      <span className="block font-sans text-xs text-white/85 mt-0.5">{paso.s}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
