'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import NumberFlow from '@number-flow/react';
import DoubleBezelCard from '@/components/ui/DoubleBezelCard';
import CTANestedPill from '@/components/ui/CTANestedPill';
import { DROPOFF_DISCOUNT_PERCENT, EMPRENDEDORES_PLANS } from '@/lib/promises';

/**
 * Calculadora de ahorro DropOFF — la isla interactiva del ticket.
 *
 * El descuento (%) y la tarifa base salen de `promises.ts`: el precio es el del
 * Plan Inicial DropOFF, el mismo que publica `<EmprendedoresPricing />` en esta
 * misma página, así que la calculadora no puede quedar desfasada del tarifario.
 * NO toca `src/lib/pricing.ts`, que gobierna solo los cotizadores
 * Express/LowCost. El resultado es una estimación visible y citable (GEO), y
 * cada caso se confirma por WhatsApp con el asesor.
 */
const BASE_DROPOFF_RATE = EMPRENDEDORES_PLANS[0].price;
const SAVINGS_PER_UNIT = Math.round((BASE_DROPOFF_RATE * DROPOFF_DISCOUNT_PERCENT) / 100);

const MIN_ENVIOS = 1;
const MAX_ENVIOS = 1000;
const PRESETS = [10, 30, 50, 100];

/** Barras del código de barras decorativo del ticket (claves únicas por barra). */
const BARS = [
  { w: 2, k: 'b01' }, { w: 4, k: 'b02' }, { w: 1, k: 'b03' }, { w: 3, k: 'b04' },
  { w: 5, k: 'b05' }, { w: 2, k: 'b06' }, { w: 1, k: 'b07' }, { w: 4, k: 'b08' },
  { w: 3, k: 'b09' }, { w: 2, k: 'b10' }, { w: 1, k: 'b11' }, { w: 5, k: 'b12' },
  { w: 2, k: 'b13' }, { w: 3, k: 'b14' }, { w: 4, k: 'b15' },
] as const;

const ars = (n: number) => `$${Math.round(n).toLocaleString('es-AR')}`;

export default function DropoffCalculator() {
  const [raw, setRaw] = useState('30');
  const parsed = Number.parseInt(raw, 10);
  const envios = Number.isNaN(parsed) ? MIN_ENVIOS : Math.min(MAX_ENVIOS, Math.max(MIN_ENVIOS, parsed));
  const monthly = envios * SAVINGS_PER_UNIT;

  const apply = (n: number) => {
    const value = Math.min(MAX_ENVIOS, Math.max(MIN_ENVIOS, Math.round(n)));
    setRaw(String(value));
  };

  const onBlur = () => setRaw(String(envios));

  const waUrl = `https://wa.me/542236602699?text=${encodeURIComponent(
    `Hola! Manejo aprox. ${envios} envíos por mes y quiero activar la modalidad DropOFF (${DROPOFF_DISCOUNT_PERCENT}% off) en Mar del Plata.`,
  )}`;

  return (
    <DoubleBezelCard className="w-full" hoverEffect={false}>
      {/* Banda del ticket */}
      <div className="flex items-center justify-between gap-3 rounded-lg bg-brand-yellow-500 px-4 py-2.5 text-brand-blue-900">
        <span className="font-mono text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] truncate">
          Ticket DropOFF · Ahorro estimado
        </span>
        <span className="shrink-0 font-mono text-sm font-bold tabular-nums">
          -{DROPOFF_DISCOUNT_PERCENT}%
        </span>
      </div>

      {/* Perforación del ticket */}
      <div aria-hidden="true" className="my-5 border-t-2 border-dashed border-brand-blue-100" />

      <div className="space-y-6">
        {/* Control: envíos por mes */}
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <span className="font-subheading text-sm uppercase tracking-wider font-bold text-brand-blue-900">
              Envíos por mes
            </span>
            <span className="font-mono text-2xs text-brand-blue-500 tabular-nums">
              {MIN_ENVIOS}-{MAX_ENVIOS}
            </span>
          </div>

          <div className="flex items-stretch rounded-xl border-2 border-brand-blue-300 bg-white overflow-hidden focus-within:border-brand-blue-700 focus-within:ring-2 focus-within:ring-brand-blue-500/20">
            <button
              type="button"
              onClick={() => apply(envios - 1)}
              aria-label="Restar un envío"
              className="shrink-0 w-12 min-h-11 flex items-center justify-center text-brand-blue-700 hover:bg-brand-blue-50 active:bg-brand-blue-100 transition-colors cursor-pointer"
            >
              <Minus className="h-4 w-4" aria-hidden="true" />
            </button>
            <input
              type="number"
              inputMode="numeric"
              min={MIN_ENVIOS}
              max={MAX_ENVIOS}
              value={raw}
              onChange={(e) => setRaw(e.target.value)}
              onBlur={onBlur}
              aria-label="Cantidad de envíos por mes"
              className="w-full min-w-0 text-center font-mono text-2xl tabular-nums text-brand-blue-900 bg-transparent focus:outline-none"
            />
            <button
              type="button"
              onClick={() => apply(envios + 1)}
              aria-label="Sumar un envío"
              className="shrink-0 w-12 min-h-11 flex items-center justify-center text-brand-blue-700 hover:bg-brand-blue-50 active:bg-brand-blue-100 transition-colors cursor-pointer"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {PRESETS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => apply(n)}
                aria-pressed={envios === n}
                className={`min-h-11 px-4 rounded-full font-mono text-sm tabular-nums border-2 transition-colors cursor-pointer ${
                  envios === n
                    ? 'bg-brand-blue-700 text-brand-yellow-500 border-brand-blue-700'
                    : 'bg-white text-brand-blue-700 border-brand-blue-300 hover:border-brand-blue-700'
                }`}
              >
                {n}/mes
              </button>
            ))}
          </div>
        </div>

        {/* Líneas del ticket */}
        <dl className="space-y-2.5 font-mono text-sm tabular-nums text-brand-blue-900">
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-brand-blue-700">Tarifa base / envío (MDQ)</dt>
            <dd className="font-bold">{ars(BASE_DROPOFF_RATE)}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-brand-blue-700">Descuento DropOFF (-{DROPOFF_DISCOUNT_PERCENT}%)</dt>
            <dd className="font-bold">- {ars(SAVINGS_PER_UNIT)}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-brand-blue-700">Copias de envío / mes</dt>
            <dd>{envios}</dd>
          </div>
        </dl>

        {/* Total del ticket */}
        <div
          aria-live="polite"
          className="rounded-xl bg-brand-blue-700 text-white px-4 py-4 flex items-center justify-between gap-3"
        >
          <span className="font-subheading text-sm uppercase tracking-wider text-brand-blue-50">
            Ahorrás por mes
          </span>
          <span className="font-mono text-2xl sm:text-3xl font-bold tabular-nums text-brand-yellow-500">
            - $
            <NumberFlow
              value={monthly}
              format={{ minimumFractionDigits: 0 }}
              className="inline-block font-mono tabular-nums"
            />
          </span>
        </div>

        {/* Código de barras decorativo */}
        <div aria-hidden="true" className="flex items-end gap-0.75 h-9">
          {BARS.map((b) => (
            <span
              key={b.k}
              style={{ width: b.w }}
              className="h-full bg-brand-blue-900/50 rounded-[1px]"
            />
          ))}
        </div>

        <CTANestedPill
          href={waUrl}
          variant="primary"
          target="_blank"
          rel="noopener noreferrer"
          icon={<FaWhatsapp className="h-5 w-5" />}
          iconPosition="left"
          className="w-full justify-center"
        >
          Quiero activar este plan
        </CTANestedPill>
      </div>
    </DoubleBezelCard>
  );
}