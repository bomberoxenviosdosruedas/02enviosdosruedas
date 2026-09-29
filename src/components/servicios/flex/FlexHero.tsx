import { BookOpen, PackageCheck, ShieldCheck, Tag, Timer } from 'lucide-react';
import { CTANestedPill, Knockout } from '@/components/ui';
import Badge from '@/components/ui/Badge';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import { LOW_COST_TIERS } from '@/lib/pricing';
import { FLEX_CUTOFF_TIME, FLEX_DELIVERY_DEADLINE } from '@/lib/promises';

const ars = (value: number) => `$${value.toLocaleString('es-AR')}`;

const firstTier = LOW_COST_TIERS[0];

/** Flex cobra las mismas zonas que LowCost; la tarifa base es la misma constante. */
const chips = [
  { icon: Timer, value: FLEX_CUTOFF_TIME, label: 'Corte de retiros' },
  { icon: PackageCheck, value: FLEX_DELIVERY_DEADLINE, label: 'Entrega garantizada' },
  { icon: Tag, value: ars(firstTier.price), label: `Base ${firstTier.minKm}-${firstTier.maxKm} km` },
];

/** El circuito completo en tres pasos: es lo único que hay que recordar del canal. */
const pasos = [
  { n: '1', texto: 'Vendés' },
  { n: '2', texto: 'Retiramos' },
  { n: '3', texto: 'Entregamos' },
];

/**
 * Filas de la etiqueta. Cada valor sale de `@/lib/promises` o `@/lib/pricing`.
 *
 * Deliberadamente NO están "Mínimo de envíos: sin mínimos" ni "Retiros:
 * múltiples": son las dos filas que el prototipo pedía y que hoy no están
 * respaldadas por el dueño. Publicarlas sin su OK sería justo el tipo de
 * promesa que después hay que retirar.
 */
const filas: ReadonlyArray<{ k: string; v: string }> = [
  { k: 'Corte de retiro', v: FLEX_CUTOFF_TIME },
  { k: 'Base tarifa', v: `${ars(firstTier.price)} · ${firstTier.minKm}-${firstTier.maxKm} km` },
  { k: 'Retiro', v: 'Depósito o domicilio' },
  { k: 'Destino', v: 'Todo Mar del Plata' },
];

/**
 * La etiqueta de envío.
 *
 * Es el objeto que el vendedor de Flex ya tiene en la cabeza: la etiqueta que
 * imprime todas las mañanas. Poner las condiciones ahí, en lugar de en tres
 * chips sueltos, hace que se lean como una etiqueta y no como una lista de
 * funciones.
 *
 * No usa `DoubleBezelCard`: un marco blanco conteniendo otra tarjeta blanca deja
 * de leerse como objeto. La etiqueta trae su propio borde — línea de puntos y
 * los dos orificios del lateral — que es lo que la identifica.
 */
function EtiquetaFlex() {
  return (
    <div className="relative w-full max-w-sm -rotate-2">
      {/* Los dos orificios: son los que hacen que el rectángulo se lea etiqueta. */}
      <span
        aria-hidden="true"
        className="absolute left-[-11px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 rounded-full bg-brand-blue-500"
      />
      <span
        aria-hidden="true"
        className="absolute right-[-11px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 rounded-full bg-brand-blue-500"
      />

      <div className="rounded-2xl border-2 border-dashed border-brand-blue-200 bg-white px-5 py-4 text-left shadow-[0_24px_48px_-16px_rgba(255,255,255,0.18)]">
        <div className="flex items-center justify-between gap-3 border-b-2 border-brand-blue-500 pb-2.5">
          <span className="font-display text-3xl uppercase leading-none tracking-[-0.01em] text-brand-blue-500">
            Entrega hoy
          </span>
          <span className="shrink-0 rounded-md bg-brand-yellow-500 px-2 py-1.5 font-subheading text-xs uppercase tracking-[0.1em] text-brand-blue-500">
            Same-day
          </span>
        </div>

        <dl>
          {filas.map(({ k, v }) => (
            <div
              key={k}
              className="flex items-baseline justify-between gap-3 border-b border-dashed border-brand-blue-100 py-2 last:border-b-0"
            >
              <dt className="font-subheading text-sm uppercase tracking-[0.1em] text-brand-blue-400">
                {k}
              </dt>
              <dd className="text-right font-mono text-sm font-bold tabular-nums text-brand-blue-500">
                {v}
              </dd>
            </div>
          ))}
        </dl>

        {/* Barcode decorativo: cierra el objeto. No codifica nada real. */}
        <div
          aria-hidden="true"
          className="mt-2.5 h-10 w-full rounded bg-[repeating-linear-gradient(90deg,#0950F6_0_2px,transparent_2px_4px,#0950F6_4px_7px,transparent_7px_9px,#0950F6_9px_10px,transparent_10px_13px)]"
        />
      </div>
    </div>
  );
}

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
              <Badge
                variant="accent"
                size="lg"
                className="-rotate-1"
                icon={<ShieldCheck className="h-4 w-4" aria-hidden="true" />}
              >
                Integración oficial Mercado Envíos
              </Badge>

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

              {/* El circuito completo: vender, retirar, entregar. */}
              <ol
                aria-label="Cómo funciona Mercado Envíos Flex"
                className="flex flex-wrap items-center justify-center gap-2 lg:justify-start"
              >
                {pasos.map((paso) => (
                  <li
                    key={paso.n}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 font-subheading text-base uppercase tracking-[0.07em] text-white"
                  >
                    <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-yellow-500 font-mono text-[12px] font-bold text-brand-blue-500">
                      {paso.n}
                    </span>
                    {paso.texto}
                  </li>
                ))}
              </ol>

              <ul className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-3 max-w-xl mx-auto lg:mx-0">
                {chips.map((chip) => (
                  <li key={chip.label} className="p-3 rounded-xl bg-white/10 border border-white/20 text-center">
                    <chip.icon className="w-4 h-4 mx-auto text-brand-yellow-500" aria-hidden="true" />
                    <span className="block font-mono text-lg sm:text-2xl text-brand-yellow-500 tabular-nums mt-1.5">{chip.value}</span>
                    <span className="block font-subheading text-[11px] sm:text-sm uppercase tracking-wider text-white mt-0.5">{chip.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT 5 — la etiqueta: el objeto que el vendedor ya conoce. */}
            <div className="relative flex w-full flex-col items-center justify-center lg:col-span-5">
              <EtiquetaFlex />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
