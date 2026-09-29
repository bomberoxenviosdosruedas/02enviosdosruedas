'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, Zap, Layers, Check, ArrowRight } from 'lucide-react';
import { trackAnalytics } from '@/lib/analytics';
import DoubleBezelCard from '@/components/ui/DoubleBezelCard';
import CTANestedPill from '@/components/ui/CTANestedPill';
import type { ServiceKey, UseCotizadorUnificadoReturn } from '@/hooks/cotizador/useCotizadorUnified';

interface CotizadorComparativaProps {
  form: Pick<
    UseCotizadorUnificadoReturn,
    'resultado' | 'quoteId' | 'getWhatsAppLink' | 'shouldReduceMotion'
  >;
  error: string | null;
  onAskBatch: () => void;
}

/**
 * Reglas de entrega de cada servicio. No son decoración: son el compromiso real
 * que el negocio publica y lo que el visitante está eligiendo entre servicios.
 */
const REGLAS: Record<
  ServiceKey,
  { nombre: string; entrega: string; horasTexto: string; horasValor: number; detalle: string }
> = {
  express: {
    nombre: 'Express',
    entrega: 'En el día, franja a coordinar',
    horasTexto: 'menos de 2 h',
    horasValor: 2,
    detalle: 'Franja de 3 hs a coordinar. Corte 15:00 hs con 2 h de anticipación.',
  },
  lowcost: {
    nombre: 'LowCost',
    entrega: 'Hoy, antes de las 19 hs',
    horasTexto: 'hasta 6 h',
    horasValor: 6,
    detalle: 'Pedido antes de las 13:00 hs, entrega el mismo día antes de las 19:00 hs.',
  },
};

/** Escala de horas compartida por las dos filas de tiempo: 0 → 8 h. */
const HORAS_MAX = 8;

function precioTexto(precio: number | 'consultar'): string {
  return precio === 'consultar' ? 'A consultar' : `$${precio.toLocaleString('es-AR')}`;
}

export default function CotizadorComparativa({ form, error, onAskBatch }: CotizadorComparativaProps) {
  const { resultado, quoteId, getWhatsAppLink, shouldReduceMotion } = form;
  const [elegido, setElegido] = useState<ServiceKey | null>(null);

  // Sin resultado no hay escala posible: 0 evita NaN en el ancho de las barras.
  const precioExpress = resultado?.express.precio;
  const precioLowCost = resultado?.lowcost.precio;
  const ambosNumericos = typeof precioExpress === 'number' && typeof precioLowCost === 'number';
  const referenciaPrecio = ambosNumericos ? Math.max(precioExpress!, precioLowCost!) : 0;
  const diferenciaPrecio = ambosNumericos ? precioExpress! - precioLowCost! : 0;

  const ambosConsultar =
    resultado !== null &&
    resultado.express.precio === 'consultar' &&
    resultado.lowcost.precio === 'consultar';

  return (
    <div className="mt-6 relative z-10 space-y-4">
      <AnimatePresence>
        {error && (
          <motion.div
            role="alert"
            aria-live="assertive"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="p-3 bg-red-500/20 border border-red-500/40 rounded-xl flex items-start gap-2 text-red-100 text-xs font-sans"
          >
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-red-300" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {resultado && (
          <motion.div
            role="region"
            aria-live="polite"
            aria-atomic="true"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={shouldReduceMotion ? { duration: 0.15 } : { type: 'spring', stiffness: 100, damping: 20 }}
            className="w-full"
          >
            <span className="sr-only">
              {ambosConsultar
                ? `Distancia calculada: ${resultado.distancia} kilómetros. Supera el radio estándar de 20 kilómetros, necesita una cotización personalizada.`
                : `Distancia: ${resultado.distancia} kilómetros. Tarifa Express: ${precioTexto(resultado.express.precio)}. Tarifa LowCost: ${precioTexto(resultado.lowcost.precio)}.`}
            </span>

            <DoubleBezelCard>
              <div className="space-y-5">
                {/* Cabecera: la distancia medida, una sola vez */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-brand-blue-100">
                  <div>
                    <span className="block text-2xs font-subheading font-bold uppercase tracking-wider text-brand-blue-400">
                      Distancia medida
                    </span>
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-brand-blue-700 tabular-nums tracking-tight">
                      {resultado.distancia} km
                    </span>
                  </div>
                  {quoteId && (
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-100 tabular-nums">
                      #{quoteId}
                    </span>
                  )}
                </div>

                {ambosConsultar ? (
                  <div className="space-y-4">
                    <p className="font-sans text-sm text-brand-blue-700 leading-relaxed">
                      Tu envío supera el radio estándar de 20 km. Las tarifas por zona no alcanzan:
                      pasanos el caso y te pasamos el valor.
                    </p>
                    <CTANestedPill href="/contacto" variant="primary" className="w-full sm:w-auto">
                      Pedir Cotización Personalizada
                    </CTANestedPill>
                  </div>
                ) : (
                  <>
                    {/* ─────────────────────────────────────────────────────────────
                        FILA 1 — LO QUE PAGÁS. Las dos barras salen casi iguales:
                        ese es el dato, no un defecto de la gráfica.
                        ───────────────────────────────────────────────────────────── */}
                    <section aria-labelledby="fila-precio">
                      <h3
                        id="fila-precio"
                        className="font-subheading text-xs uppercase tracking-widest font-bold text-brand-blue-500 mb-3"
                      >
                        Lo que pagás
                      </h3>

                      <div className="space-y-3">
                        {(['express', 'lowcost'] as const).map((key) => {
                          const regla = REGLAS[key];
                          const precio = resultado[key].precio;
                          const ancho =
                            typeof precio === 'number' && referenciaPrecio > 0
                              ? (precio / referenciaPrecio) * 100
                              : 0;

                          return (
                            <div key={key} className="space-y-1.5">
                              <div className="flex items-baseline justify-between gap-3">
                                <span
                                  className={`font-subheading text-xs font-bold uppercase tracking-wider ${
                                    key === 'express' ? 'text-brand-yellow-600' : 'text-brand-blue-500'
                                  }`}
                                >
                                  {regla.nombre}
                                </span>
                                <span className="font-mono text-2xl sm:text-3xl font-bold text-brand-blue-700 tabular-nums">
                                  {precioTexto(precio)}
                                  {typeof precio === 'number' && (
                                    <span className="text-xs font-bold text-brand-blue-400 ml-1">ARS</span>
                                  )}
                                </span>
                              </div>
                              <div
                                role="presentation"
                                className="h-2.5 w-full rounded-full bg-brand-blue-50 overflow-hidden"
                              >
                                <div
                                  className={`h-full rounded-full ${
                                    key === 'express' ? 'bg-brand-yellow-500' : 'bg-brand-blue-500'
                                  }`}
                                  style={{ width: `${ancho}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {diferenciaPrecio > 0 && (
                        <p className="mt-3 pt-3 border-t border-brand-blue-100 font-sans text-xs text-brand-blue-500">
                          La diferencia entre uno y otro es de{' '}
                          <span className="font-mono font-bold text-brand-blue-700 tabular-nums">
                            ${diferenciaPrecio.toLocaleString('es-AR')}
                          </span>
                          . Lo demás que cambia es cuándo lo recibís.
                        </p>
                      )}
                    </section>

                    {/* ─────────────────────────────────────────────────────────────
                        FILA 2 — LO QUE ESPERÁS. Escala 0 → 8 h compartida por los
                        dos servicios: acá la diferencia se ve de verdad.
                        ───────────────────────────────────────────────────────────── */}
                    <section aria-labelledby="fila-tiempo" className="pt-4 border-t border-brand-blue-100">
                      <h3
                        id="fila-tiempo"
                        className="font-subheading text-xs uppercase tracking-widest font-bold text-brand-blue-500 mb-3"
                      >
                        Lo que esperás
                      </h3>

                      <div className="space-y-3">
                        {(['express', 'lowcost'] as const).map((key) => {
                          const regla = REGLAS[key];
                          return (
                            <div key={key} className="space-y-1.5">
                              <div className="flex items-baseline justify-between gap-3">
                                <span className="font-sans text-xs text-brand-blue-500">{regla.nombre}</span>
                                <span className="font-mono text-sm font-bold text-brand-blue-700 tabular-nums">
                                  {regla.horasTexto}
                                </span>
                              </div>
                              <div role="presentation" className="h-2.5 w-full rounded-full bg-brand-blue-50 overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${
                                    key === 'express' ? 'bg-brand-yellow-500' : 'bg-brand-blue-500'
                                  }`}
                                  style={{ width: `${(regla.horasValor / HORAS_MAX) * 100}%` }}
                                />
                              </div>
                              <p className="font-sans text-2xs text-brand-blue-400 leading-snug">
                                {regla.detalle}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      {/* Cierre de la fila: dice en palabras lo que las dos barras
                          ya mostraron en la pantalla. Sin esto el lector tiene que
                          deducir solo que acá está la diferencia real. */}
                      <p className="mt-3 pt-3 border-t border-brand-blue-100 font-sans text-xs text-brand-blue-500">
                        El precio casi no se mueve. El tiempo, sí:{' '}
                        <span className="font-mono font-bold text-brand-blue-700 tabular-nums">
                          {REGLAS.express.horasTexto} contra {REGLAS.lowcost.horasTexto}
                        </span>
                        . Esa es toda la decisión.
                      </p>
                    </section>

                    {/* ─────────────────────────────────────────────────────────────
                        LA DECISIÓN. Dos botones, una sola acción posible: elegir.
                        ───────────────────────────────────────────────────────────── */}
                    <div className="pt-5 border-t border-brand-blue-100">
                      <h3 className="font-subheading text-xs uppercase tracking-widest font-bold text-brand-blue-500 mb-3">
                        Elegí cómo lo querés
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {(['express', 'lowcost'] as const).map((key) => {
                          const regla = REGLAS[key];
                          const activo = elegido === key;
                          const esExpress = key === 'express';
                          const precio = resultado[key].precio;

                          return (
                            <a
                              key={key}
                              href={getWhatsAppLink(key)}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => {
                                setElegido(key);
                                trackAnalytics.whatsappClick(`cotizador_unificado_${key}`);
                              }}
                              aria-label={`Elegir ${regla.nombre} y confirmar por WhatsApp: ${precioTexto(precio)}`}
                              className={`group flex flex-col gap-3 rounded-xl border-2 p-4 min-h-[44px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 ${
                            esExpress
                              ? 'border-brand-yellow-500 bg-brand-yellow-500 hover:bg-brand-yellow-400 hover:shadow-cta-glow'
                              : 'border-brand-blue-100 bg-white hover:border-brand-blue-500 hover:bg-brand-blue-50'
                          }`}
                            >
                              <span className="flex items-center justify-between gap-2">
                                <span
                                  className={`font-subheading text-sm uppercase font-bold tracking-wider ${
                                    esExpress ? 'text-brand-blue-900' : 'text-brand-blue-700'
                                  }`}
                                >
                                  {regla.nombre}
                                </span>
                                {esExpress ? (
                                  <Zap className="h-4 w-4 text-brand-blue-900" aria-hidden="true" />
                                ) : (
                                  <Layers className="h-4 w-4 text-brand-blue-500" aria-hidden="true" />
                                )}
                              </span>

                              <span
                                className={`font-sans text-xs leading-snug ${
                                  esExpress ? 'text-brand-blue-900/80' : 'text-brand-blue-500'
                                }`}
                              >
                                {regla.entrega}
                              </span>

                              <span
                                className={`inline-flex items-center gap-1.5 font-subheading text-2xs uppercase font-bold tracking-wider ${
                                  esExpress ? 'text-brand-blue-900' : 'text-brand-blue-500'
                                }`}
                              >
                                {activo ? (
                                  <>
                                    <Check className="h-3.5 w-3.5" aria-hidden="true" /> Llevando tu pedido
                                  </>
                                ) : (
                                  <>
                                    Elegir por WhatsApp
                                    <ArrowRight
                                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                                      aria-hidden="true"
                                    />
                                  </>
                                )}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </div>

                    {/* Volume: only offered once there's a single quote on the table. */}
                    <button
                      type="button"
                      onClick={onAskBatch}
                      className="w-full flex items-center justify-between gap-3 rounded-xl border border-dashed border-brand-blue-200 bg-brand-blue-50/50 px-4 py-3.5 min-h-[44px] text-left transition-colors duration-200 hover:border-brand-blue-400 hover:bg-brand-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 cursor-pointer"
                    >
                      <span className="flex items-center gap-3 min-w-0">
                        <Layers className="h-4 w-4 shrink-0 text-brand-blue-500" aria-hidden="true" />
                        <span className="min-w-0">
                          <span className="block font-subheading text-xs uppercase font-bold tracking-wider text-brand-blue-700">
                            ¿Tenés más envíos para cotizar?
                          </span>
                          <span className="block font-sans text-xs text-brand-blue-500">
                            Cargá tu planilla y armamos un ruteo LowCost por volumen.
                          </span>
                        </span>
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-brand-blue-500" aria-hidden="true" />
                    </button>
                  </>
                )}
              </div>
            </DoubleBezelCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
