import React from 'react';
import Image from 'next/image';
import { Clock, Tag, TrendingDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CTANestedPill, DoubleBezelCard, Knockout } from '@/src/components/ui';
import HeroProceduralBackground from '@/src/components/ui/HeroProceduralBackground';
import { LOW_COST_TIERS } from '@/src/lib/pricing';
import { LOWCOST_CUTOFF_TIME, LOWCOST_DELIVERY_DEADLINE } from '@/src/lib/promises';

const ars = (value: number) => `$${value.toLocaleString('es-AR')}`;

const firstTier = LOW_COST_TIERS[0];

/** La hora de corte y la de entrega son TODO el servicio: van en chips, no en prosa. */
const chips = [
  { icon: Clock, value: LOWCOST_CUTOFF_TIME, label: 'Corte de pedidos' },
  { icon: Clock, value: LOWCOST_DELIVERY_DEADLINE, label: 'Entrega el mismo día' },
  { icon: Tag, value: ars(firstTier.price), label: `Base ${firstTier.minKm}-${firstTier.maxKm} km` },
];

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
            className="absolute -right-[10%] -bottom-[14%] w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] lg:w-[560px] lg:h-[560px]"
            style={{ opacity: 0.28 }}
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
                  href="/cotizar/lowcost"
                  id="lowcost-hero-cta-cotizar"
                  variant="blue"
                  size="large"
                  className="focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-yellow-500"
                >
                  Cotizá tu lote LowCost
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
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-blue-500 motion-safe:animate-pulse" aria-hidden="true" />
                  <span className="font-subheading text-sm tracking-widest text-brand-blue-500 uppercase">
                    Mismo día, sin agrupar
                  </span>
                </div>

                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-brand-blue-500/15">
                  <Image
                    src="/elementos/envios_lowcost.webp"
                    alt="Pieza de marca del servicio LowCost de Envíos DosRuedas para paquetería y cadetería en Mar del Plata"
                    fill
                    priority
                    sizes="(min-width: 1024px) 420px, 90vw"
                    className="object-cover"
                  />
                </div>

                <div className="pt-3 border-t border-brand-blue-500/15 flex items-center justify-between gap-3 font-mono text-xs sm:text-sm text-brand-blue-500 tabular-nums">
                  <span className="truncate">
                    {LOWCOST_CUTOFF_TIME} → {LOWCOST_DELIVERY_DEADLINE}
                  </span>
                  <span className="shrink-0">Todo MDQ</span>
                </div>
              </DoubleBezelCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
