import Image from 'next/image';
import { Zap, MapPin, Package, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CTANestedPill, FloatTiltCard, Knockout } from '@/src/components/ui';
import HeroProceduralBackground from '@/src/components/ui/HeroProceduralBackground';
import { EXPRESS_TIERS, LOW_COST_TIERS } from '@/src/lib/pricing';
import {
  EXPRESS_WINDOW,
  EXPRESS_WINDOW_SHORT,
  LOWCOST_CUTOFF_TIME,
  LOWCOST_DELIVERY_DEADLINE,
  FLEX_CUTOFF_TIME,
  MAX_WEIGHT_KG,
} from '@/src/lib/promises';

const ars = (value: number) => `$${value.toLocaleString('es-AR')}`;

/** Chips factuales: los tres números que un cliente de MDQ necesita antes de cotizar. */
const chips = [
  { icon: Clock, value: EXPRESS_WINDOW_SHORT, label: 'Entrega Express' },
  { icon: Zap, value: ars(EXPRESS_TIERS[0].price), label: 'Tarifa desde' },
  { icon: Package, value: `${MAX_WEIGHT_KG} kg`, label: 'Por bulto' },
];

/** Barra inferior: reemplaza la franja #E6EEFE que estaba entre el hero y SegmentosHome. */
const bar = [
  { icon: Zap, text: `Express · ${EXPRESS_WINDOW_SHORT}` },
  { icon: Zap, text: `LowCost · desde ${ars(LOW_COST_TIERS[0].price)}` },
  { icon: Clock, text: `Corte LowCost ${LOWCOST_CUTOFF_TIME}` },
  { icon: Clock, text: `Entrega antes de las ${LOWCOST_DELIVERY_DEADLINE}` },
  { icon: Clock, text: `Flex · corte ${FLEX_CUTOFF_TIME}` },
  { icon: Package, text: `Hasta ${MAX_WEIGHT_KG} kg por bulto` },
  { icon: MapPin, text: 'Flota propia · Cero tercerización' },
];

export default function HeroAnimado() {
  return (
    <section
      id="hero-animado"
      aria-label="Mensajería urbana y logística de última milla en Mar del Plata"
      className="relative isolate flex min-h-[90dvh] w-full flex-col overflow-hidden bg-brand-blue-500 text-white"
    >
      <HeroProceduralBackground variant="express" tone="blue" />

      <div className="relative flex-1 flex items-center overflow-hidden">
        {/* Firma visual: la calzada. Dos líneas de carril que corren hacia la derecha. */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[26%] pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 h-full w-full" style={{ opacity: 0.24 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 100" preserveAspectRatio="none">
            <g
              className="motion-safe:animate-road"
              style={{ transformBox: 'fill-box' }}
            >
              <line x1="0" y1="34" x2="2000" y2="34" stroke="#FFEC01" strokeWidth="3" strokeDasharray="30 34" />
              <line x1="2000" y1="34" x2="4000" y2="34" stroke="#FFEC01" strokeWidth="3" strokeDasharray="30 34" />
            </g>
            <line x1="0" y1="70" x2="2000" y2="70" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="10 18" opacity="0.5" />
            <line x1="2000" y1="70" x2="4000" y2="70" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="10 18" opacity="0.5" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT 7 — copy + CTA. Nunca centrado en desktop. */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest bg-brand-yellow-500 text-brand-blue-500 shadow-accent-sm -rotate-1">
              <Zap className="h-4 w-4 shrink-0" aria-hidden="true" />
              Mar del Plata · Flota propia de motos
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-[-0.03em] leading-[0.92] text-white text-balance">
              <span className="block">Mensajería en moto</span>
              <Knockout>E-commerce</Knockout>
              <span className="block">que llega hoy</span>
            </h1>

            <p className="text-base sm:text-lg font-sans text-white/85 max-w-[56ch] mx-auto lg:mx-0 leading-relaxed font-light">
              Somos tu partner de mensajería urbana y última milla en Mar del Plata.
              Cotizás por distancia, retiramos el paquete y lo entregamos en {EXPRESS_WINDOW}.
              Sin tercerizar: los repartidores son nuestros.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-1">
              <CTANestedPill
                href="/cotizar/express"
                id="hero-cta-cotizar"
                variant="primary"
                size="large"
                className="focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500"
              >
                Cotizá tu envío
              </CTANestedPill>
              <a
                href="https://wa.me/542236602699?text=Hola!%20Quiero%20hacer%20un%20env%C3%ADo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 font-subheading text-sm sm:text-base uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 hover:text-brand-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500 rounded-md"
              >
                <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" />
                O escribinos por WhatsApp
              </a>
            </div>

            <ul className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-3 max-w-xl mx-auto lg:mx-0">
              {chips.map((chip) => (
                <li key={chip.label} className="p-3 rounded-xl bg-white/10 border border-white/20 text-center">
                  <chip.icon className="w-4 h-4 mx-auto text-brand-yellow-500" aria-hidden="true" />
                  <span className="block font-mono text-lg sm:text-2xl text-brand-yellow-500 tabular-nums mt-1.5">{chip.value}</span>
                  <span className="block font-subheading text-[11px] sm:text-sm uppercase tracking-wider text-white/85 mt-0.5">{chip.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT 5 — FloatTiltCard con fotografía del repartidor. */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
            <FloatTiltCard className="w-full max-w-md">
              <div className="rounded-[28px] bg-brand-blue-500/40 backdrop-blur-md border border-white/20 p-2.5 shadow-elevated">
                <div className="relative w-full aspect-[4/3] rounded-[18px] overflow-hidden border border-white/15">
                  <Image
                    src="/img/generales/repartidor.webp"
                    alt="Repartidor de Envíos DosRuedas con moto de reparto listo para salir en Mar del Plata"
                    fill
                    priority
                    sizes="(min-width: 1024px) 448px, 92vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 px-3 py-3 font-mono text-xs sm:text-sm text-white/90">
                  <span className="flex items-center gap-1.5 min-w-0">
                    <MapPin className="w-4 h-4 text-brand-yellow-500 shrink-0" aria-hidden="true" />
                    <span className="truncate">Base central Friuli 1972</span>
                  </span>
                  <span className="text-brand-yellow-500 shrink-0">Punto a punto</span>
                </div>
              </div>
            </FloatTiltCard>
          </div>
          </div>
        </div>
      </div>

      {/* Barra de datos reales — sustituye la franja #E6EEFE eliminada de page.tsx */}
      <div className="relative z-10 border-t border-white/15 bg-brand-blue-500/60">
        <ul className="max-w-[1280px] mx-auto px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2">
          {bar.map((item) => (
            <li key={item.text} className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.1em] tabular-nums text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow-500 shrink-0" aria-hidden="true" />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
