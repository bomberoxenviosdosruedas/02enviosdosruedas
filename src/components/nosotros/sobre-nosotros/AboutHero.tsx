import { Bike, CalendarClock, MapPin, Navigation, ShieldCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { Knockout } from '@/components/ui/Knockout';
import Badge from '@/components/ui/Badge';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import {
  CONSULT_THRESHOLD_KM,
  LOWCOST_CUTOFF_TIME,
  LOWCOST_DELIVERY_DEADLINE,
  OPERATING_HOURS,
  SUPPORT_PHONE,
} from '@/lib/promises';

/**
 * El nodo: un único origen y siete direcciones.
 *
 * Lafan vive en un cuadrado `h-full aspect-square` anclado en la esquina
 * inferior izquierda de la banda, así un 1% de ancho mide lo mismo que un 1% de
 * alto: la geometría es isotrópica en cualquier breakpoint y ninguna cresta
 * puede exceder el alto de la banda. Sobre la línea de base, siete radios de
 * igual longitud (las puntas caen sobre un arco de cuarto de círculo) con un
 * punto amarillo en cada punta que se enciende en cascada.
 *
 * Los puntos usan `transform` para pulsar, así que van en un wrapper aparte del
 * que centra: la animación pisa cualquier `translate` de clase.
 */
const SPOKE_COUNT = 7;
const SPOKE_FIRST_ANGLE = 10;
const SPOKE_STEP = 10;
const SPOKE_LENGTH = 84; // % del lado del cuadrado = % del alto de la banda

const spokes = Array.from({ length: SPOKE_COUNT }, (_, i) => ({
  angle: SPOKE_FIRST_ANGLE + i * SPOKE_STEP,
  delay: i * 0.13,
}));

/**
 * Cifras de identidad. "+7 años" y "flota 100% propia" no viven en pricing.ts
 * porque no son tarifas: son claims institucionales ya publicados en el
 * metadata y el JSON-LD de esta misma página.
 */
const chips = [
  { icon: CalendarClock, value: '+7', label: 'Años en ruta' },
  { icon: Bike, value: '100%', label: 'Flota propia' },
  { icon: Navigation, value: `${CONSULT_THRESHOLD_KM} km`, label: 'Cálculo automático' },
];

/** Horarios de la base central, tal cual están en promesas.ts. */
const hours = [
  { label: 'Lun a Vie', value: OPERATING_HOURS.weekdays },
  { label: 'Sáb', value: OPERATING_HOURS.saturdays },
  { label: 'Dom', value: OPERATING_HOURS.sundays },
];

/**
 * Credenciales de la empresa, para la ficha lateral.
 *
 * "Operando +7 años" y "flota 100 % propia" son claims de identidad: ya están
 * en el metadata y el JSON-LD de esta página, así que repetirlos no inventa.
 * El corte y la última entrega sí salen de `promises.ts` — son los del servicio
 * LowCost, que es el que define la jornada.
 */
const credenciales = [
  { dt: 'Operando', dd: '+7 años' },
  { dt: 'Flota propia', dd: '100%' },
  { dt: 'Corte diario', dd: LOWCOST_CUTOFF_TIME },
  { dt: 'Última entrega', dd: LOWCOST_DELIVERY_DEADLINE },
];

/**
 * Hero Sobre Nosotros — concepto "el nodo".
 *
 * Esta página no vende un servicio: vende una empresa. La firma visual es una
 * base física con una sola dirección de origen y muchas de salida — el hub de
 * Friuli 1972 despacha en todas direcciones. Por eso el nodo va en el padding
 * inferior del hero y su alto es exactamente ese padding (`h-28 sm:h-36 lg:h-44`
 * = `pb-28 sm:pb-36 lg:pb-44`): no puede pisar texto ni card.
 *
 * La diferencia con las otras firmas: ninguna es radial. Home es un camino
 * abierto, Express una curva, LowCost un dial, Flex un riel con dos compuertas,
 * Emprendedores un estante. Acá no hay recorrido ni horario: hay origen.
 *
 * Todo el contenido sale de promesas.ts, salvo las dos cifras de identidad, que
 * son claims de la propia página.
 */
export default function AboutHero() {
  return (
    <section
      id="about-hero"
      aria-label="Sobre Envíos DosRuedas: base central en Friuli 1972, Mar del Plata, con flota propia y más de 7 años de trayectoria en logística urbana"
      className="relative isolate flex min-h-[90dvh] w-full flex-col overflow-hidden bg-brand-blue-500 text-white"
    >
      <HeroProceduralBackground variant="default" tone="blue" />

      {/* Palabra fantasma. Es lo único del hero que no es información: da la
          escala de un muro pintado y evita que el azul se lea como un bloque
          vacío. Va en z-0 y `aria-hidden` — el texto real es el H1. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-8%] left-[-1%] z-0 whitespace-nowrap font-display text-[clamp(90px,17vw,230px)] uppercase leading-hero text-white/6"
      >
        Dos Ruedas
      </span>

      <div className="relative flex-1 flex items-center overflow-hidden">
        {/* Firma visual: el nodo. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-28 sm:h-36 lg:h-44 overflow-hidden pointer-events-none"
        >
          {/* Línea de base: el piso desde el que sale todo. */}
          <div className="absolute inset-x-0 bottom-0 border-t border-dashed border-white/30" />

          <span className="absolute bottom-2 right-6 sm:right-8 font-mono text-2xs uppercase tracking-[0.18em] text-white/85 tabular-nums">
            Base central · Friuli 1972 · MDQ
          </span>

          {/* El cuadrado del nodo: isotrópico a propósito (ver nota arriba). */}
          <div className="absolute bottom-0 left-0 h-full aspect-square">
            {spokes.map(({ angle, delay }) => (
              <div
                key={angle}
                className="absolute bottom-0 left-0 h-px w-[84%] origin-left"
                style={{ transform: `rotate(${-angle}deg)` }}
              >
                <span className="block h-px w-full bg-white/40" />
                <span className="absolute right-0 top-0 -translate-y-1/2">
                  <span
                    className="block h-2 w-2 rounded-full bg-brand-yellow-500 motion-safe:animate-pulse"
                    style={{ animationDelay: `${delay}s` }}
                  />
                </span>
              </div>
            ))}

            {/* El nodo: un anillo que emite y el punto de la base. */}
            <span className="absolute bottom-0 left-0 h-0 w-0">
              <span className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
                <span
                  className="block h-7 w-7 rounded-full border border-brand-yellow-500/60 motion-safe:animate-ping [animation-duration:3.6s]"
                />
              </span>
              <span className="absolute left-0 top-0 block h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-white-50" />
            </span>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-24 pb-28 sm:pb-36 lg:pb-44">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT 7 — copy + CTA. Nunca centrado en desktop. */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <Badge
                variant="outline"
                size="lg"
                className="-rotate-1 border-brand-yellow-500/60 text-brand-yellow-500"
                icon={<ShieldCheck className="h-4 w-4" aria-hidden="true" />}
              >
                Identidad · Mar del Plata
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-[-0.03em] leading-[0.92] text-white text-balance">
                <span className="block">Más que cadetería,</span>
                <Knockout>somos logística</Knockout>
                <span className="block">de confianza</span>
              </h1>

              <p className="text-base sm:text-lg font-sans text-white/85 max-w-[56ch] mx-auto lg:mx-0 leading-relaxed font-light">
                Una base física en Friuli 1972 y flota motorizada 100% propia. Conectamos
                tiendas online, PyMEs y emprendedores de todo Mar del Plata con soporte en
                tiempo real y cumplimiento estricto de horarios.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-1">
                <CTANestedPill
                  href="/contacto"
                  id="about-hero-cta-contacto"
                  variant="primary"
                  size="large"
                  className="focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500"
                >
                  Trabajemos juntos
                </CTANestedPill>
                <a
                  href="https://wa.me/542236602699?text=Hola!%20Quiero%20conocer%20la%20operativa%20de%20DosRuedas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 font-subheading text-sm sm:text-base uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 hover:text-brand-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500 rounded-md"
                >
                  <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Escribinos
                </a>
              </div>

              <ul className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-3 max-w-xl mx-auto lg:mx-0">
                {chips.map((chip) => (
                  <li key={chip.label} className="p-3 rounded-xl bg-white/10 border border-white/20 text-center">
                    <chip.icon className="w-4 h-4 mx-auto text-brand-yellow-500" aria-hidden="true" />
                    <span className="block font-mono text-lg sm:text-2xl text-brand-yellow-500 tabular-nums mt-1.5">{chip.value}</span>
                    <span className="block font-subheading text-2xs sm:text-xs uppercase tracking-wider text-white mt-0.5">{chip.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT 5 — ficha de la empresa: sello de la base + credenciales.
                El marco blanco hace de bisel y el panel azul interior repite el
                color del hero, así el bloque se apoya en la página en vez de
                flotar como un recorte. */}
            <div className="relative flex w-full flex-col items-center justify-center lg:col-span-5">
              <div className="w-full max-w-md rounded-[20px] border border-brand-blue-100 bg-white p-2.5 shadow-[0_25px_50px_-12px_rgba(9,80,246,0.18)]">
                <div className="flex flex-col gap-4 rounded-[14px] bg-brand-blue-500 p-5">
                  {/* Sello de la base. El ladeo de 1,5° es lo que lo hace leer
                      como sello y no como un encabezado más. */}
                  <div className="rotate-[-1.5deg] self-start rounded-xl border-2 border-brand-yellow-500 px-3.5 py-3">
                    <span className="block font-display text-3xl uppercase leading-none tracking-[-0.01em] text-brand-yellow-500">
                      Friuli 1972
                    </span>
                    <span className="mt-1 block font-mono text-xs font-medium leading-snug text-brand-blue-50">
                      Base central
                    </span>
                  </div>

                  <dl className="grid gap-2.5">
                    {credenciales.map(({ dt, dd }) => (
                      <div
                        key={dt}
                        className="flex items-baseline justify-between gap-3 border-t border-white/18 pt-2.5"
                      >
                        <dt className="font-subheading text-base uppercase tracking-[0.08em] text-brand-blue-50">
                          {dt}
                        </dt>
                        <dd className="font-mono text-xl font-bold tabular-nums text-white">
                          {dd}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <dl className="grid gap-1.5 border-t border-white/18 pt-3 font-mono text-xs tabular-nums text-brand-blue-50">
                    {hours.map((row) => (
                      <div key={row.label} className="flex items-baseline justify-between gap-3">
                        <dt className="font-subheading text-xs uppercase tracking-wider">
                          {row.label}
                        </dt>
                        <dd className="truncate text-right text-white">{row.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="flex items-center justify-between gap-3 border-t border-white/18 pt-3 font-mono text-xs tabular-nums text-brand-blue-50">
                    <span className="flex items-center gap-1.5 truncate">
                      <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      Mar del Plata
                    </span>
                    <span className="shrink-0 text-white">{SUPPORT_PHONE}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
