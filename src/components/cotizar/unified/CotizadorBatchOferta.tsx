'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Layers, X } from 'lucide-react';
import BatchGrid from '@/src/components/cotizar/lowcost/BatchGrid';

interface CotizadorBatchOfertaProps {
  abierto: boolean;
  onClose: () => void;
  shouldReduceMotion: boolean;
}

/**
 * La planilla de lotes es una función exclusiva de LowCost, así que no se ofrece
 * junto con la comparación: se ofrece después de que haya un envío cotizado. Antes
 * de eso es ruido —el visitante todavía no sabe cuánto cuesta enviar.
 *
 * No envuelve a `BatchGrid` en otra tarjeta: `BatchGrid` ya trae su propio
 * DoubleBezelCard y anidarlos produce un bisel dentro de otro bisel.
 */
export default function CotizadorBatchOferta({
  abierto,
  onClose,
  shouldReduceMotion,
}: CotizadorBatchOfertaProps) {
  const [cerrado, setCerrado] = useState(false);
  const visible = abierto && !cerrado;

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          id="lotes"
          aria-label="Cotización por lotes LowCost"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={shouldReduceMotion ? { duration: 0.15 } : { duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="scroll-mt-24"
        >
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="flex items-start gap-3 min-w-0">
              <div className="p-2.5 rounded-xl bg-brand-yellow-500 text-brand-blue-900 shrink-0">
                <Layers className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
                  Ruteo por volumen
                </h2>
                <p className="font-sans text-sm text-white/80 mt-1 leading-relaxed max-w-2xl">
                  Para comercio y PyME: cargás todos los destinos, armamos un ruteo agrupado
                  LowCost y te pasamos el total del lote. Solo aplica a la modalidad programada —
                  pedido antes de las 13:00 hs, entrega el mismo día.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setCerrado(true);
                onClose();
              }}
              aria-label="Cerrar la cotización por lotes"
              className="p-2.5 min-w-11 min-h-11 flex items-center justify-center text-white hover:text-brand-yellow-500 rounded-lg transition-colors shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <BatchGrid />
        </motion.section>
      )}
    </AnimatePresence>
  );
}
