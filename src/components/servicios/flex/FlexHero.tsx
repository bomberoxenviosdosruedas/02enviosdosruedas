import Image from 'next/image';
import { BookOpen, PackageCheck, ShieldCheck, Tag, Timer } from 'lucide-react';
import { CTANestedPill, DoubleBezelCard, Knockout } from '@/src/components/ui';
import HeroProceduralBackground from '@/src/components/ui/HeroProceduralBackground';
import { LOW_COST_TIERS } from '@/src/lib/pricing';
import { FLEX_CUTOFF_TIME, FLEX_DELIVERY_DEADLINE } from '@/src/lib/promises';

const ars = (value: number) => `$${value.toLocaleString('es-AR')}`;

const firstTier = LOW_COST_TIERS[0];

/** Flex cobra las mismas zonas que LowCost; la tarifa base es la misma constante. */
const chips = [
  { icon: Timer, value: FLEX_CUTOFF_TIME, label: 'Corte de retiros' },
  { icon: PackageCheck, value: FLEX_DELIVERY_DEADLINE, label: 'Entrega garantizada' },
  { icon: Tag, value: ars(firstTier.price), label: `Base ${firstTier.minKm}-${firstTier.maxKm} km` },
];

/**
 * Hero Mercado Envíos Flex — concepto "el corredor de despacho".
 *
 * Flex no vende velocidad: vende un corredor. Lo que se retira antes de las
 * 15:00 tiene que estar entregado antes de las 20:00. La firma visual es ese
 * corredor, dibujado como un riel de acotado a acotado: compuerta de corte,
 * cuatro marcas horarias intermedias (los 5 tramos de la franja) y compuerta de
 * entrega, con un token que recorre la ventana de punta a punta (`shuttle`).
 *
 * El riel vive en el padding inferior del hero y su alto es exactamente ese
 * padding (`h-14 sm:h-20 lg:h-24` = `py-14 sm:py-20 lg:py-24`), así que jamás
 * puede pisar el texto ni la card. Por eso el token es un `div` real y no un
 * shape del SVG estirado: el `preserveAspectRatio="none"` no lo deforma.
 *
 * La diferencia con las otras firmas es el cierre: Home es un camino abierto e
 * infinito, Express una curva diagonal, LowCost un dial. Acá el recorrido tiene
 * dos extremos y cinco tramos contados — es una promesa con horario, no una
 * sensación de velocidad.
 *
 * El token arranca en la compuerta de corte y con `prefers-reduced-motion` queda
 * ahí: el corredor se sigue leyendo completo, sólo quieto.
 */
export default function FlexHero() {
  return (
    <section
      id="flex-hero"
      aria-label="Mercado Envíos Flex en Mar del Plata: retiro antes de las 15:00 y entrega garantizada antes de las 20:00"
      className="relative isolate flex min-h-[90dvh] w-full flex-col overflow-hidden bg-brand-blue-500 text-white"
    >
      <HeroProceduralBackground variant="flex" tone="blue" />

      <div className="relative flex-1 flex items-center overflow-hidden">
        {/* Firma visual: el corredor de despacho 15:00 → 20:00.
            Vive en el padding inferior del hero (alto = py del contenedor), así
            nunca puede pisar texto ni la card, y corre de borde a borde. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-14 sm:h-20 lg:h-24 pointer-events-none"
        >
          <svg
            className="absolute inset-0 h-full w-full"
            style={{ opacity: 0.32 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 96"
            preserveAspectRatio="none"
          >
            {/* Riel del corredor. */}
            <line x1="0" y1="66" x2="1200" y2="66" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="6 10" opacity="0.7" />
            {/* Compuerta de corte: sólida. */}
            <line x1="72" y1="32" x2="72" y2="92" stroke="#FFEC01" strokeWidth="4" strokeLinecap="round" />
            {/* Compuerta de entrega: punteada, es el plazo que se cumple. */}
            <line x1="1128" y1="32" x2="1128" y2="92" stroke="#FFEC01" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 10" />
            {/* Las 4 marcas horarias internas: 5 tramos iguales = 5 horas. */}
            {[283, 494, 706, 917].map((x) => (
              <line
                key={x}
                x1={x}
                y1="56"
                x2={x}
                y2="76"
                stroke="#FFEC01"
                strokeWidth="2"
                strokeDasharray="3 6"
                opacity="0.7"
              />
            ))}
          </svg>

          <span className="absolute left-[6%] top-0 font-mono text-[10px] uppercase tracking-[0.18em] text-white/85 tabular-nums">
            Corte {FLEX_CUTOFF_TIME}
          </span>
          <span className="absolute right-[6%] top-0 font-mono text-[10px] uppercase tracking-[0.18em] text-white/85 tabular-nums">
            Entrega {FLEX_DELIVERY_DEADLINE}
          </span>

          {/* El token es un div real, no un shape del SVG estirado: así el
              `preserveAspectRatio="none"` no lo deforma. El wrapper mide todo el
              recorrido (6% → 94%) para que `translateX(100%)` sea el 100% real. */}
          <div className="absolute left-[6%] top-[66%] h-0 w-[88%] motion-safe:animate-shuttle">
            <div className="absolute left-0 -translate-y-1/2 h-[16px] w-[32px] rounded-md bg-brand-yellow-500 shadow-[0_0_18px_rgba(255,236,1,0.45)]">
              <span className="block mx-auto mt-[6px] h-[3px] w-[16px] rounded-full bg-brand-blue-500" />
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT 7 — copy + CTA. Nunca centrado en desktop. */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest bg-brand-yellow-500 text-brand-blue-500 shadow-accent-sm -rotate-1">
                <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                Integración oficial Mercado Envíos · MDQ
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-[-0.03em] leading-[0.92] text-white text-balance">
                <span className="block">Entregamos tu venta Flex</span>
                <Knockout>antes de las {FLEX_DELIVERY_DEADLINE}</Knockout>
                <span className="block">en Mar del Plata</span>
              </h1>

              <p className="text-base sm:text-lg font-sans text-white/85 max-w-[56ch] mx-auto lg:mx-0 leading-relaxed font-light">
                Retiramos en tu depósito o domicilio antes de las {FLEX_CUTOFF_TIME} y entregamos
                en toda la ciudad antes de las {FLEX_DELIVERY_DEADLINE}. Así tu publicación llega
                Same-Day y cumplís la promesa de Mercado Envíos.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-1">
                <CTANestedPill
                  href="https://wa.me/542236602699?text=Hola!%20Quiero%20activar%20Mercado%20Env%C3%ADos%20Flex"
                  id="flex-hero-cta-activar"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="large"
                  className="focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500"
                >
                  Activá Mercado Envíos Flex
                </CTANestedPill>
                <a
                  href="/guias/envios-flex-mar-del-plata"
                  className="inline-flex min-h-[44px] items-center gap-2 font-subheading text-sm sm:text-base uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 hover:text-brand-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500 rounded-md"
                >
                  <BookOpen className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Guía para vendedores
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

            {/* RIGHT 5 — bezel claro con la pieza del servicio. */}
            <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
              <DoubleBezelCard className="w-full max-w-md" innerClassName="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-blue-500 motion-safe:animate-pulse" aria-hidden="true" />
                  <span className="font-subheading text-sm tracking-widest text-brand-blue-500 uppercase">
                    Despacho verificado
                  </span>
                </div>

                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-brand-blue-500/15">
                  <Image
                    src="/elementos/envios_flex.webp"
                    alt="Pieza de marca del servicio Mercado Envíos Flex de Envíos DosRuedas para vendedores de Mar del Plata"
                    fill
                    priority
                    sizes="(min-width: 1024px) 420px, 90vw"
                    className="object-cover"
                  />
                </div>

                <div className="pt-3 border-t border-brand-blue-500/15 flex items-center justify-between gap-3 font-mono text-xs sm:text-sm text-brand-blue-500 tabular-nums">
                  <span className="truncate">
                    {FLEX_CUTOFF_TIME} → {FLEX_DELIVERY_DEADLINE}
                  </span>
                  <span className="shrink-0">Toda la ciudad</span>
                </div>
              </DoubleBezelCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
