import React from 'react';
import { Calculator, Clock, MapPin, Route, ShieldCheck } from 'lucide-react';
import { CTANestedPill, Card, DoubleBezelCard } from '@/components/ui';
import { calculateExpressPrice, EXPRESS_PRICE_PER_KM, EXPRESS_TIERS } from '@/src/lib/pricing';
import { CONSULT_THRESHOLD_KM } from '@/src/lib/promises';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

const TIER_METADATA = [
  {
    tag: 'Zona 1 · Microcentro',
    note: 'Mandados rápidos dentro del barrio o zonas aledañas.',
  },
  {
    tag: 'Zona 2 · Interbarrial',
    note: 'Cruces cortos entre zonas y barrios consolidados.',
  },
  {
    tag: 'Zona 3 · Trayecto medio',
    note: 'De una punta a la otra de la ciudad sin demoras.',
  },
  {
    tag: 'Zona 4 · Perímetro urbano',
    note: 'Recorridos extensos dentro del ejido urbano de MDQ.',
  },
];

const PRICING_FACTS = [
  {
    icon: Route,
    title: 'Distancia real por calle',
    body: 'Medimos el recorrido en el mapa, punto a punto entre retiro y entrega.',
  },
  {
    icon: Clock,
    title: 'Entrega en 60 a 90 minutos',
    body: 'Cadetería prioritaria con entrega asegurada dentro de esa ventana.',
  },
  {
    icon: ShieldCheck,
    title: 'Tarifa fija, sin dinámica',
    body: 'El precio no cambia por clima ni por demanda. Lo sabés antes de confirmar.',
  },
];

const EXAMPLE_KM = 12;
const examplePrice = calculateExpressPrice(EXAMPLE_KM, []);
const lastTier = EXPRESS_TIERS[EXPRESS_TIERS.length - 1];
const SCALE_MAX_KM = lastTier.maxKm;

export default function ExpressPricing() {
  return (
    <section
      id="express-pricing"
      className="py-20 lg:py-28 bg-white relative z-10 overflow-hidden text-brand-blue-900"
    >
      {/* Trama de puntos de fondo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(var(--color-brand-blue-700)_1px,transparent_1px)] bg-size-[24px_24px] opacity-[0.03] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-16">
        {/* Cabecera de Sección */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-blue-50 border border-brand-blue-100 rounded-full">
            <span className="w-2 h-2 rounded-full bg-brand-blue-500 motion-safe:animate-pulse" />
            <span className="font-mono text-xs font-semibold text-brand-blue-700 uppercase tracking-wider">
              Tarifario transparente 2026 · Mar del Plata
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-blue-900">
            Pagás por distancia, no por apuro
          </h2>

          <p className="text-brand-blue-900 font-sans text-base sm:text-lg max-w-xl mx-auto leading-relaxed text-pretty">
            Tarifa fija según los kilómetros exactos entre retiro y entrega.
            Sabés el precio final antes de confirmar el pedido, sin sorpresas ni recargos.
          </p>
        </div>

        {/* Layout principal: tarjetas de cálculo + tarjetas de tramos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Columna izquierda: cómo se calcula */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="font-subheading text-lg text-brand-blue-700">Cómo calculamos tu envío</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 flex-1">
              {PRICING_FACTS.map(({ icon: Icon, title, body }) => (
                <li key={title} className="h-full">
                  <Card className="h-full rounded-2xl p-5 flex gap-4 items-start">
                    <span className="w-11 h-11 shrink-0 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-blue-700" aria-hidden="true" />
                    </span>
                    <div className="space-y-1">
                      <p className="font-subheading text-lg leading-tight text-brand-blue-900">{title}</p>
                      <p className="text-sm font-sans text-brand-blue-900 leading-relaxed">{body}</p>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna derecha: tramos de tarifa */}
          <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {EXPRESS_TIERS.map((tier, idx) => {
              const meta = TIER_METADATA[idx] || {
                tag: `Rango ${idx + 1}`,
                note: '',
              };
              const segmentStart = (tier.minKm / SCALE_MAX_KM) * 100;
              const segmentWidth = ((tier.maxKm - tier.minKm) / SCALE_MAX_KM) * 100;

              return (
                <li key={tier.maxKm} className="h-full">
                  <DoubleBezelCard
                    className="h-full hover:-translate-y-0.5"
                    innerClassName="h-full flex flex-col justify-between gap-5 p-6"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center gap-3">
                        <span className="font-subheading text-sm text-brand-blue-700 bg-brand-blue-50 px-2.5 py-0.5 rounded-full">
                          {meta.tag}
                        </span>
                        <span className="font-mono text-xs font-semibold text-brand-blue-900 whitespace-nowrap">
                          {tier.minKm}–{tier.maxKm} km
                        </span>
                      </div>

                      <p className="font-mono text-4xl sm:text-5xl font-bold tracking-tight text-brand-blue-900 tabular-nums">
                        {formatArs(tier.price)}
                      </p>
                    </div>

                    {/* Barra de recorrido: ubica el tramo dentro de los 0 a 10 km urbanos */}
                    <div aria-hidden="true" className="space-y-1.5">
                      <div className="relative h-2 rounded-full bg-brand-blue-50 border border-brand-blue-100">
                        <span
                          className="absolute inset-y-0 rounded-full bg-brand-blue-700"
                          style={{ left: `${segmentStart}%`, width: `${segmentWidth}%` }}
                        />
                      </div>
                      <div className="flex justify-between font-mono text-[11px] text-brand-blue-900">
                        <span>0 km</span>
                        <span>{SCALE_MAX_KM} km</span>
                      </div>
                    </div>

                    <p className="text-sm font-sans text-brand-blue-900 leading-relaxed">
                      {meta.note}
                    </p>
                  </DoubleBezelCard>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Banner inferior: Batán, Sierra de los Padres y larga distancia */}
        <div className="bg-brand-blue-700 rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden shadow-lg">
          <Calculator
            className="absolute -bottom-8 -right-8 h-64 w-64 text-white/10 pointer-events-none select-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-sm font-subheading">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Periferia y largas distancias (&gt; {lastTier.maxKm} km)</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                <span className="font-mono text-brand-yellow-500 tabular-nums">
                  {formatArs(EXPRESS_PRICE_PER_KM)}
                </span>{' '}
                por km extra en trayectos largos
              </h3>

              <p className="text-base text-white/90 leading-relaxed font-sans max-w-2xl">
                Para Batán, Camet, Sierra de los Padres o la periferia de General Pueyrredón hasta{' '}
                <strong className="text-white font-mono">{CONSULT_THRESHOLD_KM} km</strong>. Ejemplo:{' '}
                <span className="underline decoration-brand-yellow-500 underline-offset-4">
                  {EXAMPLE_KM} km ={' '}
                  <span className="font-mono font-bold text-brand-yellow-500 tabular-nums">
                    {typeof examplePrice === 'number' ? formatArs(examplePrice) : 'a consultar'}
                  </span>
                </span>
                . Superando los {CONSULT_THRESHOLD_KM} km, cotizamos el viaje especial en el acto.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <CTANestedPill href="/cotizar/express" variant="primary" size="large">
                Cotizá tu envío exacto
              </CTANestedPill>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
