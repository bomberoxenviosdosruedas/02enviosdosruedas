'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { trackAnalytics } from '@/src/lib/analytics';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';
import CTANestedPill from '@/src/components/ui/CTANestedPill';
import type { UseCotizadorExpressReturn } from './hooks/useCotizadorExpress';

interface CotizadorExpressResultsProps {
  form: Pick<UseCotizadorExpressReturn, 
    'calculated' | 'result' | 'quoteId' | 'getWhatsAppLink' | 'origen' | 'destino' | 'nombre' | 'telefono' | 'producto' | 'shouldReduceMotion'
  >;
  error: string | null;
}

export default function CotizadorExpressResults({ form, error }: CotizadorExpressResultsProps) {
  const { calculated, result, quoteId, getWhatsAppLink, shouldReduceMotion } = form;

  return (
    <div className="mt-6 relative z-10 space-y-4">
      <AnimatePresence>
        {/* Error Message with role alert */}
        {error && (
          <motion.div
            role="alert"
            aria-live="assertive"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="p-3 bg-red-500/20 border border-red-500/40 rounded-xl flex items-center gap-2 text-red-200 text-xs font-sans"
          >
            <AlertTriangle className="h-4 w-4 shrink-0 text-red-400" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Price Result with Accessible Live Region */}
      <AnimatePresence>
        {calculated && result && (
          <motion.div
            role="region"
            aria-live="polite"
            aria-atomic="true"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={shouldReduceMotion ? { duration: 0.15 } : { type: 'spring', stiffness: 100, damping: 20 }}
            className="w-full"
          >
            <span className="sr-only">
              {result.precio === 'consultar'
                ? `Distancia calculada: ${result.distancia} km. Excede el radio estándar de 20 km, solicitar cotización personalizada.`
                : `Tarifa calculada: ${result.precio} pesos para una distancia de ${result.distancia} kilómetros.`}
            </span>
            <DoubleBezelCard className="p-2 sm:p-3">
              <div className="bg-[#0950F6] p-5 sm:p-6 rounded-[20px] border border-white/20 space-y-4 text-white">
                {quoteId && (
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                    <span className="font-mono text-[11px] text-white/80">ID de Seguimiento:</span>
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[#FFEC01]/20 text-[#FFEC01] font-bold border border-[#FFEC01]/40 tabular-nums">
                      #{quoteId}
                    </span>
                  </div>
                )}
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/20 flex items-center justify-between">
                  <span className="text-xs font-subheading font-bold text-[#FFEC01] uppercase tracking-wider">
                    DISTANCIA REAL
                  </span>
                  <span className="text-xl font-mono text-white font-bold tabular-nums">
                    {result.distancia} km
                  </span>
                </div>

                <div className="border-t border-white/15 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div>
                    <span className="block text-2xs font-subheading font-bold text-[#FFEC01] uppercase tracking-wider">
                      TARIFA EXACTA EXPRESS 2026
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      {result.precio === 'consultar' ? (
                        <span className="text-lg font-subheading text-white uppercase tracking-wider">
                          A Consultar ({'>'} 20 km)
                        </span>
                      ) : (
                        <>
                          <span className="font-mono font-bold tracking-tight text-4xl sm:text-5xl text-white tabular-nums">
                            ${result.precio.toLocaleString('es-AR')}
                          </span>
                          <span className="text-xs text-[#FFEC01] font-mono font-bold tabular-nums">ARS</span>
                        </>
                      )}
                    </div>
                  </div>

                  {result.precio === 'consultar' ? (
                    <CTANestedPill
                      href="/contacto"
                      variant="outline"
                    >
                      Pedir Cotización Especial
                    </CTANestedPill>
                  ) : (
                    <CTANestedPill
                      href={getWhatsAppLink()}
                      variant="primary"
                      onClick={() => trackAnalytics.whatsappClick('cotizador_express_resultado')}
                    >
                      Pedí por WhatsApp
                    </CTANestedPill>
                  )}
                </div>
              </div>
            </DoubleBezelCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}