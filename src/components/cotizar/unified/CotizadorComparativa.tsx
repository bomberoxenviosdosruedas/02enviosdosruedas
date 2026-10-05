'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, Zap, Package, Check, ArrowRight, CloudRain } from 'lucide-react';
import { trackAnalytics } from '@/lib/analytics';
import DoubleBezelCard from '@/components/ui/DoubleBezelCard';
import CTANestedPill from '@/components/ui/CTANestedPill';
import RadioCardGroup from '@/components/ui/RadioCardGroup';
import type { ServiceKey, UseCotizadorUnificadoReturn } from '@/hooks/cotizador/useCotizadorUnified';
import {
  EXPRESS_CUTOFF_TIME,
  EXPRESS_LEAD_TIME,
  LOWCOST_CUTOFF_TIME,
  LOWCOST_DELIVERY_DEADLINE,
  STANDARD_WEIGHT_KG,
} from '@/lib/promises';

interface CotizadorComparativaProps {
  form: Pick<
    UseCotizadorUnificadoReturn,
    'resultado' | 'quoteId' | 'getWhatsAppLink' | 'shouldReduceMotion'
  >;
  error: string | null;
}

/**
 * Reglas de entrega de cada servicio. No son decoración: son el compromiso real
 * que el negocio publica y lo que el visitante está eligiendo entre servicios.
 *
 * Ninguno de los dos promete una duración. Express vende una franja de 3 hs que
 * elige el cliente; LowCost, una entrega en el día sin elección de horario. Por eso
 * la comparación de tiempo es una línea del día, no una cuenta regresiva.
 */
const REGLAS: Record<
  ServiceKey,
  {
    nombre: string;
    entrega: string;
    detalle: string;
    /** Horas del día (24 h) que pinta la línea del día. */
    banda: { desde: number; hasta: number; rotulo: string };
    corte: number;
  }
> = {
  express: {
    nombre: 'Express',
    entrega: 'Elegís una franja de 3 hs',
    detalle: `Pedido con ${EXPRESS_LEAD_TIME} y hasta las ${EXPRESS_CUTOFF_TIME}. La franja la elegís vos, por ejemplo de 10 a 13 hs.`,
    banda: { desde: 10, hasta: 13, rotulo: 'Tu franja' },
    corte: 15,
  },
  lowcost: {
    nombre: 'LowCost',
    entrega: `En el día, antes de las ${LOWCOST_DELIVERY_DEADLINE}`,
    detalle: `Sin elección de horario. Pedido antes de las ${LOWCOST_CUTOFF_TIME}, se entrega en el transcurso del día antes de las ${LOWCOST_DELIVERY_DEADLINE}.`,
    banda: { desde: 9, hasta: 19, rotulo: 'En algún momento del día' },
    corte: 13,
  },
};

/** Escala de la línea del día, compartida por los dos servicios: 9 → 19 hs. */
const DIA_DESDE = 9;
const DIA_HASTA = 19;
const MARCAS = [9, 11, 13, 15, 17, 19];
const posicion = (hora: number) => ((hora - DIA_DESDE) / (DIA_HASTA - DIA_DESDE)) * 100;

function precioTexto(precio: number | 'consultar'): string {
  return precio === 'consultar' ? 'A consultar' : `$${precio.toLocaleString('es-AR')}`;
}

export default function CotizadorComparativa({ form, error }: CotizadorComparativaProps) {
  const { resultado, quoteId, getWhatsAppLink, shouldReduceMotion } = form;
  const [elegido, setElegido] = useState<string>('');

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

  // Opciones para RadioCardGroup
  const serviceOptions = React.useMemo(() => [
    {
      id: 'express',
      label: 'Express',
      description: 'Elegís una franja de 3 hs a elección, en el día.',
      price: resultado?.express.precio ? precioTexto(resultado.express.precio) : '—',
      badge: 'MÁS RÁPIDO',
      serviceType: 'EXPRESS',
      icon: <Zap className="h-6 w-6" aria-hidden="true" />,
      disabled: !resultado || resultado.express.precio === 'consultar',
    },
    {
      id: 'lowcost',
      label: 'LowCost',
      description: `Entrega programada en el día antes de las ${LOWCOST_DELIVERY_DEADLINE}.`,
      price: resultado?.lowcost.precio ? precioTexto(resultado.lowcost.precio) : '—',
      badge: 'MÁS ECONÓMICO',
      serviceType: 'LOW_COST',
      icon: <Package className="h-6 w-6" aria-hidden="true" />,
      disabled: !resultado || resultado.lowcost.precio === 'consultar',
    },
  ], [resultado]);

  const handleServiceChange = (service: string) => {
    const svc = service as ServiceKey;
    setElegido(service);
    trackAnalytics.whatsappClick(`cotizador_unificado_${svc}`);
    // Open WhatsApp link
    if (resultado) {
      const link = getWhatsAppLink(svc);
      if (link !== '#') {
        window.open(link, '_blank', 'noopener,noreferrer');
      }
    }
  };

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
                        FILA 2 — CUÁNDO LLEGA. Una línea del día (9 → 19 hs) para
                        los dos: Express ocupa la franja que elegís; LowCost, el día
                        entero. No hay duración que prometer, y no se muestra una.
                        ───────────────────────────────────────────────────────────── */}
                    <section aria-labelledby="fila-tiempo" className="pt-4 border-t border-brand-blue-100">
                      <h3
                        id="fila-tiempo"
                        className="font-subheading text-xs uppercase tracking-widest font-bold text-brand-blue-500 mb-3"
                      >
                        Cuándo llega
                      </h3>

                      <div className="space-y-4">
                        {(['express', 'lowcost'] as const).map((key) => {
                          const regla = REGLAS[key];
                          const esExpress = key === 'express';
                          const izquierda = posicion(regla.banda.desde);
                          const ancho = posicion(regla.banda.hasta) - izquierda;

                          return (
                            <div key={key} className="space-y-1.5">
                              <div className="flex items-baseline justify-between gap-3">
                                <span className="font-sans text-xs text-brand-blue-500">{regla.nombre}</span>
                                <span className="font-sans text-sm font-bold text-brand-blue-700 text-right">
                                  {regla.entrega}
                                </span>
                              </div>

                              {/* Resumen visual del texto de abajo: el lector de
                                  pantalla ya tiene la regla en palabras. */}
                              <div aria-hidden="true" className="relative h-6 rounded-md bg-brand-blue-50">
                                <div
                                  className={`absolute inset-y-0 rounded-md flex items-center px-2 overflow-hidden ${
                                    esExpress
                                      ? 'bg-brand-yellow-500 text-brand-blue-900'
                                      : 'bg-[repeating-linear-gradient(135deg,var(--color-brand-blue-500)_0_6px,var(--color-brand-blue-400)_6px_12px)] text-white'
                                  }`}
                                  style={{ left: `${izquierda}%`, width: `${ancho}%` }}
                                >
                                  <span className="font-subheading text-2xs uppercase tracking-wider font-bold whitespace-nowrap">
                                    {regla.banda.rotulo}
                                  </span>
                                </div>
                                <div
                                  className="absolute -inset-y-1 w-0.5 -translate-x-1/2 bg-brand-blue-700 ring-2 ring-white"
                                  style={{ left: `${posicion(regla.corte)}%` }}
                                />
                              </div>

                              <p className="font-sans text-2xs text-brand-blue-400 leading-snug">
                                {regla.detalle}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      <div aria-hidden="true" className="relative h-4 font-mono text-2xs text-brand-blue-400 tabular-nums">
                        {MARCAS.map((hora) => (
                          <span
                            key={hora}
                            className="absolute -translate-x-1/2 first:translate-x-0 last:-translate-x-full whitespace-nowrap"
                            style={{ left: `${posicion(hora)}%` }}
                          >
                            {hora} hs
                          </span>
                        ))}
                      </div>
                      <p className="font-sans text-2xs text-brand-blue-400 flex items-center gap-1.5">
                        <span aria-hidden="true" className="inline-block h-3 w-0.5 bg-brand-blue-700" />
                        Horario de corte para pedir en el día.
                      </p>
                    </section>

                    {/* ─────────────────────────────────────────────────────────────
                        LA DECISIÓN. RadioCardGroup para elegir servicio.
                        ───────────────────────────────────────────────────────────── */}
                    <div className="pt-5 border-t border-brand-blue-100">
                      <h3 className="font-subheading text-xs uppercase tracking-widest font-bold text-brand-blue-500 mb-3">
                        Elegí cómo lo querés
                      </h3>

                      <RadioCardGroup
                        name="cotizador-service-selector"
                        value={elegido}
                        onChange={handleServiceChange}
                        options={serviceOptions}
                        gridCols="grid-cols-1 sm:grid-cols-2"
                      />
                    </div>

                    {/* El precio de arriba es por distancia. Lo que pasa en el viaje
                        (lluvia, espera, paradas, bulto grande) suma aparte, y se avisa
                        antes de confirmar, no después. */}
                    <div className="flex items-start gap-3 rounded-xl border border-brand-blue-100 bg-brand-blue-50/60 px-4 py-3.5">
                      <CloudRain className="h-4 w-4 shrink-0 mt-0.5 text-brand-blue-500" aria-hidden="true" />
                      <p className="font-sans text-xs text-brand-blue-700 leading-relaxed">
                        El precio es por distancia, con bulto de hasta {STANDARD_WEIGHT_KG} kg. Lluvia,
                        espera en puerta, paradas extra o un bulto más grande suman recargo.{' '}
                        <a
                          href="#recargos"
                          className="font-bold underline underline-offset-2 decoration-brand-blue-300 hover:decoration-brand-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 rounded-sm"
                        >
                          Ver cuáles y cuánto
                        </a>
                      </p>
                    </div>
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