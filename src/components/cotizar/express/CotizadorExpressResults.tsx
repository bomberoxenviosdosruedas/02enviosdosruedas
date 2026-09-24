'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '@/src/lib/whatsapp';
import { trackAnalytics } from '@/src/lib/analytics';
import type { UseCotizadorExpressReturn } from './hooks/useCotizadorExpress';

interface CotizadorExpressResultsProps {
  form: Pick<UseCotizadorExpressReturn, 
    'calculated' | 'result' | 'quoteId' | 'getWhatsAppLink' | 'origen' | 'destino' | 'nombre' | 'telefono' | 'producto' | 'shouldReduceMotion'
  >;
  error: string | null;
}

export default function CotizadorExpressResults({ form, error }: CotizadorExpressResultsProps) {
  const { calculated, result, quoteId, getWhatsAppLink, origen, destino, nombre, telefono, producto, shouldReduceMotion } = form;

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
            className="rounded-[20px] bg-white/10 backdrop-blur-md border border-white/20 p-2 shadow-xl w-full"
          >
            <span className="sr-only">
              {result.precio === 'consultar'
                ? `Distancia calculada: ${result.distancia} km. Excede el radio estándar de 20 km, solicitar cotización personalizada.`
                : `Tarifa calculada: ${result.precio} pesos para una distancia de ${result.distancia} kilómetros.`}
            </span>
            <div className="bg-brand-blue-900 p-5 rounded-xl border border-white/10 space-y-4 text-white">
              {quoteId && (
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                  <span className="font-mono text-[11px] text-white/70">ID de Seguimiento:</span>
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-brand-yellow-500/20 text-brand-yellow-400 font-bold border border-brand-yellow-500/30 tabular-nums">
                    #{quoteId}
                  </span>
                </div>
              )}
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/15 flex items-center justify-between">
                <span className="text-xs font-subheading font-bold text-brand-yellow-500 uppercase tracking-wider">
                  DISTANCIA REAL
                </span>
                <span className="text-xl font-mono text-white font-bold tabular-nums">
                  {result.distancia} km
                </span>
              </div>

              <div className="border-t border-white/15 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <span className="block text-[10px] font-subheading font-bold text-brand-yellow-500 uppercase tracking-wider">
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
                        <span className="text-xs text-brand-yellow-500 font-mono font-bold tabular-nums">ARS</span>
                      </>
                    )}
                  </div>
                </div>

                {result.precio === 'consultar' ? (
                  <motion.a
                    href="/contacto"
                    className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-between bg-white/10 hover:bg-white/20 text-white font-subheading text-sm tracking-wider uppercase px-5 py-3 rounded-full border border-white/20 shadow transition-all active:scale-[0.98]"
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  >
                    <span>Pedir Cotización Especial</span>
                    <ArrowRight className="h-4 w-4 ml-3" />
                  </motion.a>
                ) : (
                  <motion.a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAnalytics.whatsappClick('cotizador_express_resultado')}
                    className="group w-full sm:w-auto min-h-[52px] inline-flex items-center justify-between bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 font-subheading font-bold text-sm tracking-wider uppercase px-5 py-3 rounded-full shadow-cta-glow transition-all active:scale-[0.98]"
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  >
                    <span>Pedí por WhatsApp</span>
                    <span className="w-7 h-7 rounded-full bg-brand-blue-900/10 text-brand-blue-900 flex items-center justify-center shrink-0 ml-3 group-hover:translate-x-1 transition-transform">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}