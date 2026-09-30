import React from 'react';
import { Clock, Tag, TrendingDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CTANestedPill, DoubleBezelCard, Knockout } from '@/components/ui';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import { EXPRESS_TIERS, LOW_COST_TIERS } from '@/lib/pricing';
import { LOWCOST_CUTOFF_TIME, LOWCOST_DELIVERY_DEADLINE } from '@/lib/promises';

const ars = (value: number) => `$${value.toLocaleString('es-AR')}`;

const firstTier = LOW_COST_TIERS[0];

/**
 * Cuánto más barato es LowCost que Express en la base, en pesos.
 *
 * El sitio solía compararlo como "−30 % vs Express", pero $3.000 contra $3.700
 * es −19 %. El número en pesos sale de las dos tarifas: no hay forma de que se
 * desincronice si mañana cambian los precios.
 */
const DIFERENCIA_BASE = EXPRESS_TIERS[0].price - LOW_COST_TIERS[0].price;

/** La hora de corte y la de entrega son TODO el servicio: van en chips, no en prosa. */
const chips = [
  { icon: Clock, value: LOWCOST_CUTOFF_TIME, label: 'Corte de pedidos' },
  { icon: Clock, value: LOWCOST_DELIVERY_DEADLINE, label: 'Entrega el mismo día' },
  { icon: Tag, value: ars(firstTier.price), label: `Base ${firstTier.minKm}-${firstTier.maxKm} km` },
];

/**
 * Geometría de la barra de la jornada.
 *
 * El eje va de 8 a 20 h porque es la ventana en que el servicio opera: antes no
 * hay carga y después no hay reparto. Las posiciones se derivan de las horas que
 * ya viven en `@/lib/promises` en vez de escribirlas a mano, así que si Matías
 * mueve el corte o la entrega, la barra se mueve con el número.
 */
const HORA_APERTURA = 8;
const HORA_CIERRE = 20;

/** Lee la hora de una marca "HH:MM hs" y la devuelve como número decimal. */
const horaDe = (marca: string): number => {
  const [horas, minutos] = marca.split(':');
  return Number(horas) + Number(minutos) / 60;
};

const SPAN_HORAS = HORA_CIERRE - HORA_APERTURA;
const pctCorte = ((horaDe(LOWCOST_CUTOFF_TIME) - HORA_APERTURA) / SPAN_HORAS) * 100;
const pctEntrega = ((horaDe(LOWCOST_DELIVERY_DEADLINE) - HORA_APERTURA) / SPAN_HORAS) * 100;
/** Una marca cada dos horas, de 8 a 20. */
const marcas = Array.from({ length: 7 }, (_, i) => HORA_APERTURA + i * 2);

/** Hatched: la carga entra; sólido: el reparto sale. Se lee sin leyenda también. */
const TRAMA_CARGA =
  'bg-[repeating-linear-gradient(90deg,#0950F6_0_3px,transparent_3px_7px)]';

const HORA_REPARTOS = (horaDe(LOWCOST_DELIVERY_DEADLINE) - horaDe(LOWCOST_CUTOFF_TIME)).toFixed(
  0
);

/**
 * La barra de la jornada — el LowCost no se explica con una reloj de 12 h, sino
 * con las dos horas que importan: hasta cuándo cargás y desde cuándo salimos.
 *
 * Se dibuja con `left`/`width` en porcentaje del track, y el tramo de reparto
 * entra con `animate-grow-x` desde el origen izquierdo. Sin animación el tramo
 * ya está completo: es el estado final legible.
 */
function BarraJornada() {
  return (
    <div className="w-full space-y-4">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-subheading text-sm uppercase tracking-widest text-brand-blue-500">
          Tu jornada LowCost
        </h3>
        <span className="font-mono text-xs tabular-nums text-brand-blue-500/70">
          8 a 20 hs
        </span>
      </div>

      {/* Barra + marcas. `min-w` porque en móvil las 7 marcas no entran en 300 px. */}
      <div className="-mx-1 overflow-x-auto px-1 pb-1">
        <div className="min-w-[340px]">
          <div className="relative h-11 overflow-hidden rounded-lg bg-brand-blue-50">
            {/* Carga: desde la apertura hasta el corte. */}
            <div
              className={`absolute inset-y-0 left-0 ${TRAMA_CARGA}`}
              style={{ width: `${pctCorte}%` }}
              aria-hidden="true"
            />
            {/* Reparto: desde el corte hasta la entrega. */}
            <div
              className="animate-grow-x absolute inset-y-0 bg-brand-blue-500"
              style={{ left: `${pctCorte}%`, width: `${pctEntrega - pctCorte}%` }}
              aria-hidden="true"
            />
            {/* Bandera del corte. */}
            <div
              className="absolute inset-y-0 w-0.5 bg-brand-blue-500"
              style={{ left: `${pctCorte}%` }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-y-0 w-0.5 bg-brand-blue-500"
              style={{ left: `${pctEntrega}%` }}
              aria-hidden="true"
            />
          </div>

          <div className="relative mt-2 h-4">
            {marcas.map((hora) => (
              <span
                key={hora}
                className="absolute -translate-x-1/2 font-mono text-[11px] tabular-nums text-brand-blue-500/70"
                style={{ left: `${((hora - HORA_APERTURA) / SPAN_HORAS) * 100}%` }}
              >
                {String(hora).padStart(2, '0')}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Los dos hitos, en la misma fila que la leyenda para que la barra no crezca. */}
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-xs text-brand-blue-500">
        <li className="inline-flex items-center gap-2">
          <span className="h-[3px] w-6 bg-brand-blue-500" aria-hidden="true" />
          <span className="font-mono tabular-nums">{LOWCOST_CUTOFF_TIME}</span> cortás
        </li>
        <li className="inline-flex items-center gap-2">
          <span className="h-3 w-6 rounded-sm bg-brand-blue-500" aria-hidden="true" />
          <span className="font-mono tabular-nums">{LOWCOST_DELIVERY_DEADLINE}</span> entregamos
        </li>
        <li className="inline-flex items-center gap-2 text-brand-blue-500/70">
          {HORA_REPARTOS} hs en la calle
        </li>
      </ul>
    </div>
  );
}

/**
 * Hero LowCost — concepto "el reloj de la ventana".
 *
 * LowCost no compite por velocidad sino por una franja: lo que se corta a las
 * 13:00 se entrega antes de las 19:00. La firma visual es un reloj de 12 horas
 * donde el arco azul marca EXACTAMENTE esas 6 horas de ventana y el resto del
 * dial queda punteado. El reloj va en un SVG cuadrado (círculos reales) y
 * recortado contra el borde inferior derecho, así no compite con la card.
 *
 * Fondo amarillo: es el único hero con `tone="yellow"`, así que el CTA primary
 * se reemplaza por el `variant="blue"` (azul de marca sobre amarillo vial).
 */
export default function LowCostHero() {
  return (
    <section
      id="lowcost-hero"
      aria-label="LowCost: paquetería y cadetería con entrega el mismo día en Mar del Plata"
      className="relative isolate flex min-h-[90dvh] w-full flex-col overflow-hidden bg-brand-yellow-500 text-brand-blue-500"
    >
      <HeroProceduralBackground variant="lowcost" tone="yellow" />

      <div className="relative flex-1 flex items-center overflow-hidden">
        {/* Firma visual: el reloj de la ventana 13:00 → 19:00. */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute -right-[10%] -bottom-[14%] w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] lg:w-[560px] lg:h-[560px] opacity-[0.28]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-150 -150 300 300"
          >
            {/* Dial: 6 de 12 horas en azul sólido (la ventana), las otras 6 punteadas. */}
            <path
              d="M 50 -86.6 A 100 100 0 1 1 -50 86.6"
              fill="none"
              stroke="#0950F6"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <path
              d="M -50 86.6 A 100 100 0 0 1 50 -86.6"
              fill="none"
              stroke="#0950F6"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray="4 14"
              opacity="0.4"
            />
            {/* Marcas horarias. */}
            {Array.from({ length: 12 }, (_, i) => {
              const rad = (i * 30 * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={120 * Math.cos(rad)}
                  y1={120 * Math.sin(rad)}
                  x2={132 * Math.cos(rad)}
                  y2={132 * Math.sin(rad)}
                  stroke="#0950F6"
                  strokeWidth={i % 3 === 0 ? 3 : 1.5}
                  strokeLinecap="round"
                  opacity={i % 3 === 0 ? 0.9 : 0.45}
                />
              );
            })}
            {/* Manija clavada en el corte (13:00 ≈ 1 del reloj). */}
            <line
              x1="0"
              y1="0"
              x2="50"
              y2="-86.6"
              stroke="#0950F6"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle r="7" fill="#0950F6" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT 7 — copy + CTA. Nunca centrado en desktop. */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest bg-brand-blue-500 text-white -rotate-1">
                <TrendingDown className="h-4 w-4 shrink-0" aria-hidden="true" />
                Paquetería y cadetería · MDQ 2026
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-[-0.03em] leading-[0.92] text-brand-blue-500 text-balance">
                <span className="block">Cortás el pedido</span>
                <Knockout tone="blue">y lo recibís hoy</Knockout>
                <span className="block">en Mar del Plata</span>
              </h1>

              <p className="text-base sm:text-lg font-sans text-brand-blue-500 max-w-[56ch] mx-auto lg:mx-0 leading-relaxed font-light">
                Paquetería e-commerce, cadetería y encomiendas programadas. Lo que cargás
                antes de las {LOWCOST_CUTOFF_TIME} se entrega en el día, antes de las{' '}
                {LOWCOST_DELIVERY_DEADLINE}.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-1">
                <CTANestedPill
                  href="/cotizar"
                  id="lowcost-hero-cta-cotizar"
                  variant="blue"
                  size="large"
                  className="focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-yellow-500"
                >
                  Cotizá tu envío LowCost
                </CTANestedPill>
                <a
                  href="https://wa.me/542236602699?text=Hola!%20Quiero%20hacer%20un%20env%C3%ADo%20LowCost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 font-subheading text-sm sm:text-base uppercase tracking-wider text-brand-blue-500 underline decoration-brand-blue-500 decoration-2 underline-offset-4 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-yellow-500 rounded-md"
                >
                  <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" />
                  O escribinos por WhatsApp
                </a>
              </div>

              <ul className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-3 max-w-xl mx-auto lg:mx-0">
                {chips.map((chip) => (
                  <li key={chip.label} className="p-3 rounded-xl bg-white/45 border border-brand-blue-500/30 text-center">
                    <chip.icon className="w-4 h-4 mx-auto text-brand-blue-500" aria-hidden="true" />
                    <span className="block font-mono text-lg sm:text-2xl text-brand-blue-500 tabular-nums mt-1.5">{chip.value}</span>
                    <span className="block font-subheading text-[11px] sm:text-sm uppercase tracking-wider text-brand-blue-500 mt-0.5">{chip.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT 5 — bezel claro con la pieza del servicio. */}
            <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
              <DoubleBezelCard className="w-full max-w-md" innerClassName="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-blue-500 motion-safe:animate-pulse" aria-hidden="true" />
                    <span className="font-subheading text-sm tracking-widest text-brand-blue-500 uppercase">
                      Mismo día, sin agrupar
                    </span>
                  </span>
                  {/* La diferencia va en pesos, no en porcentaje: sobre la tarifa
                      base un porcentaje se distorsiona al redondear y deja de
                      decir la verdad. */}
                  <span className="shrink-0 rounded-md bg-brand-blue-500 px-2 py-1 font-mono text-[11px] tabular-nums text-white">
                    −{ars(DIFERENCIA_BASE)}
                  </span>
                </div>

                <BarraJornada />

                <div className="border-t border-brand-blue-500/15 pt-3 flex items-center justify-between gap-3 font-mono text-xs sm:text-sm text-brand-blue-500 tabular-nums">
                  <span className="truncate">
                    {LOWCOST_CUTOFF_TIME} → {LOWCOST_DELIVERY_DEADLINE}
                  </span>
                  <span className="shrink-0">Todo Mar del Plata</span>
                </div>
              </DoubleBezelCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
