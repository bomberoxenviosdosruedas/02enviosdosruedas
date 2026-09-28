import React from 'react';
import { Clock, MapPin, Route, ShieldCheck, Star, Zap } from 'lucide-react';
import { Badge, CTANestedPill } from '@/components/ui';
import { cn } from '@/lib/utils';
import { calculateExpressPrice, EXPRESS_PRICE_PER_KM, EXPRESS_TIERS } from '@/src/lib/pricing';
import {
  CONSULT_THRESHOLD_KM,
  EXPRESS_WINDOW_SHORT,
  MAX_WEIGHT_KG,
} from '@/src/lib/promises';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

/**
 * Copy de cada tramo. `badge` sólo se renderiza en la tarjeta destacada.
 *
 * NOTA: la etiqueta del badge es **descriptiva**, no una afirmación de
 * popularidad. Si más adelante hay datos reales de pedidos por zona, reemplazarla
 * por el dato verificado (ej. "X% de los envíos") — no publicar superlativos
 * sin respaldo. Ver AGENTS.md: no asumas nada.
 */
const TIER_METADATA = [
  {
    tag: 'Zona 1 · Microcentro',
    badge: null,
    note: 'Mandados rápidos dentro del barrio o a zonas aledañas.',
  },
  {
    tag: 'Zona 2 · Interbarrial',
    badge: null,
    note: 'Cruces cortos entre zonas y barrios consolidados.',
  },
  {
    tag: 'Zona 3 · Trayecto medio',
    badge: 'Tarifa intermedia',
    note: 'De una punta a la otra de la ciudad sin demoras.',
  },
  {
    tag: 'Zona 4 · Perímetro urbano',
    badge: null,
    note: 'Recorridos extensos dentro del ejido urbano de MDQ.',
  },
];

/** Índice del tramo destacado visualmente dentro de la grilla. */
const FEATURED_TIER_INDEX = 2;

/** Hechos verificados: se movieron desde la columna lateral a la franja inferior. */
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-12 lg:space-y-14">
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

        {/* Matriz de tramos: 4 tarjetas en una sola fila en desktop */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {EXPRESS_TIERS.map((tier, idx) => {
            const meta = TIER_METADATA[idx] ?? { tag: `Rango ${idx + 1}`, badge: null, note: '' };
            const isFeatured = idx === FEATURED_TIER_INDEX && Boolean(meta.badge);

            return (
              <li key={tier.maxKm} className="h-full">
                <article
                  className={cn(
                    'relative flex h-full flex-col justify-between gap-5 rounded-2xl p-5 sm:p-6',
                    'transition-[box-shadow,transform,background-color] duration-200',
                    isFeatured
                      ? 'bg-brand-blue-50 shadow-lg ring-1 ring-brand-blue-200'
                      : 'bg-white shadow-sm ring-1 ring-brand-blue-100 hover:shadow-lg hover:ring-brand-blue-300 motion-safe:hover:-translate-y-0.5'
                  )}
                >
                  {isFeatured && (
                    <Badge
                      variant="accent"
                      size="sm"
                      className="absolute -top-3 left-1/2 -translate-x-1/2 shadow-md whitespace-nowrap"
                      icon={<Star className="h-3 w-3 fill-current" aria-hidden="true" />}
                    >
                      {meta.badge}
                    </Badge>
                  )}

                  {/* Cuerpo: identidad del tramo + precio + ventana + uso */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-2 pt-1">
                      <h3 className="font-subheading text-sm sm:text-base uppercase tracking-[0.08em] text-brand-blue-900 leading-tight">
                        {meta.tag}
                      </h3>
                      <span className="shrink-0 rounded-md bg-brand-blue-50 px-2 py-0.5 font-mono text-xs font-medium text-brand-blue-900 tabular-nums">
                        {tier.minKm}–{tier.maxKm} km
                      </span>
                    </div>

                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-brand-blue-700">
                        Tarifa fija
                      </p>
                      <p className="mt-1 flex items-baseline gap-1.5">
                        <span className="font-mono text-[40px] sm:text-[44px] font-bold leading-none tracking-tight text-brand-blue-900 tabular-nums">
                          {formatArs(tier.price)}
                        </span>
                        <span className="font-mono text-xs text-brand-blue-700">ARS</span>
                      </p>
                    </div>

                    {/* Ventana operativa: mismo SLA para todos los tramos urbanos */}
                    <dl className="flex items-center justify-between gap-2 rounded-lg bg-brand-blue-50 px-3 py-2 ring-1 ring-brand-blue-100">
                      <dt className="font-mono text-[11px] uppercase tracking-wider text-brand-blue-700">
                        Ventana
                      </dt>
                      <dd className="font-mono text-xs font-semibold text-brand-blue-900 tabular-nums">
                        {EXPRESS_WINDOW_SHORT}
                      </dd>
                    </dl>

                    <p className="min-h-[3.75rem] text-sm font-sans leading-relaxed text-brand-blue-900">
                      {meta.note}
                    </p>
                  </div>

                  <CTANestedPill
                    href="/cotizar/express"
                    variant={isFeatured ? 'primary' : 'outline'}
                    size={isFeatured ? 'large' : 'default'}
                    className="w-full"
                    icon={isFeatured ? <Zap className="h-4 w-4" aria-hidden="true" /> : undefined}
                  >
                    {isFeatured ? 'Cotizar ahora' : `Cotizar zona ${idx + 1}`}
                  </CTANestedPill>
                </article>
              </li>
            );
          })}
        </ul>

        {/* Periferia y largas distancias: narrativa + coeficiente + acción */}
        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-brand-blue-100 flex flex-col lg:flex-row items-stretch justify-between gap-8">
          <div className="flex items-start gap-5 flex-1">
            <span
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50 ring-1 ring-brand-blue-100"
              aria-hidden="true"
            >
              <MapPin className="h-7 w-7 text-brand-blue-500" />
            </span>

            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-subheading text-2xl sm:text-3xl uppercase tracking-[0.05em] text-brand-blue-900 leading-tight">
                  Periferia y largas distancias (&gt; {lastTier.maxKm} km)
                </h3>
                <span className="rounded-md bg-brand-blue-50 px-2.5 py-0.5 font-mono text-xs font-semibold uppercase text-brand-blue-700">
                  Recorridos extra
                </span>
              </div>

              <p className="text-base font-sans leading-relaxed text-brand-blue-900 max-w-2xl">
                Para Batán, Camet, Sierra de los Padres o la periferia de General Pueyrredón
                hasta <strong className="font-mono tabular-nums">{CONSULT_THRESHOLD_KM} km</strong>.
                Ejemplo:{' '}
                <span className="underline decoration-brand-yellow-500 decoration-2 underline-offset-4">
                  {EXAMPLE_KM} km ={' '}
                  <span className="font-mono font-bold text-brand-blue-900 tabular-nums">
                    {typeof examplePrice === 'number' ? formatArs(examplePrice) : 'a consultar'}
                  </span>
                </span>
                . Superando los {CONSULT_THRESHOLD_KM} km, cotizamos el viaje especial en el acto.
              </p>

              <p className="mt-1 inline-flex w-fit items-center gap-2 rounded-lg bg-brand-blue-50 px-3.5 py-2 ring-1 ring-brand-blue-100">
                <span className="font-mono text-xs font-semibold text-brand-blue-900">
                  Fórmula: {formatArs(EXPRESS_PRICE_PER_KM)} × km total, redondeado hacia arriba
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between items-start lg:items-end gap-5 lg:pl-8 lg:border-l lg:border-brand-blue-100">
            <div className="flex flex-col lg:items-end">
              <span className="font-mono text-[11px] uppercase tracking-wider text-brand-blue-700">
                Coeficiente kilométrico
              </span>
              <p className="flex items-baseline gap-1.5">
                <span className="font-mono text-[38px] font-bold leading-none text-brand-blue-900 tabular-nums">
                  {formatArs(EXPRESS_PRICE_PER_KM)}
                </span>
                <span className="font-mono text-xs text-brand-blue-700">ARS / km</span>
              </p>
              <span className="mt-1 font-mono text-xs text-brand-blue-700">
                Cálculo automático hasta {CONSULT_THRESHOLD_KM} km · bultos hasta {MAX_WEIGHT_KG} kg
              </span>
            </div>

            <CTANestedPill href="/cotizar/express" variant="primary" className="w-full sm:w-auto">
              Cotizar trayecto extendido
            </CTANestedPill>
          </div>
        </div>

        {/* Hechos de cálculo: 3 tarjetas deinstrumento */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {PRICING_FACTS.map(({ icon: Icon, title, body }) => (
            <li key={title}>
              <div className="flex h-full items-start gap-4 rounded-2xl bg-brand-blue-50 p-5 ring-1 ring-brand-blue-100">
                <Icon className="h-6 w-6 shrink-0 text-brand-blue-500" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <p className="font-subheading text-base uppercase tracking-[0.05em] text-brand-blue-900 leading-tight">
                    {title}
                  </p>
                  <p className="text-sm font-sans leading-relaxed text-brand-blue-900">{body}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
