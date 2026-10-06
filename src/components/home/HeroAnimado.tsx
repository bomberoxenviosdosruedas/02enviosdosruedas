import Image from 'next/image';
import { ArrowRight, MapPin, Zap } from 'lucide-react';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { Knockout } from '@/components/ui/Knockout';
import Badge from '@/components/ui/Badge';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';

/**
 * Hero de inicio — concepto "mapa en vivo".
 *
 * La promesa de la casa es cobertura, así que la imagen principal no es una
 * foto de repartidor sino el mapa: un pin con anillos que salen hacia afuera y
 * dos fichas ancladas al barrio real. Los anillos se apagan con movimiento
 * reducido y arrancan invisibles hacia el final, así que sin animación el
 * bloque se ve limpio, no con tres círculos encima del pin.
 *
 * Abajo, el ticker repite los diferenciales. Va duplicado en el DOM y se
 * desplaza -50%: el bucle es invisible porque la segunda copia es idéntica.
 * Es `aria-hidden` y el texto real vive en un `sr-only`, para que un lector de
 * pantalla no lea la lista dos veces.
 */

/** Diferenciales del ticker. La lista se repite dos veces para que el bucle no se vea. */
const diferenciales = [
  'Envíos en el día',
  'Flota propia',
  'Cero tercerización',
  'Todo Mar del Plata',
  'Retiro en tu local',
];

/** Ficha sobre el mapa: dato duro arriba, barrio abajo. */
const fichas = [
  {
    id: 'base',
    posicion: 'left-[-4%] bottom-[14%]',
    tono: 'bg-white text-brand-blue-500',
    titulo: 'Base Friuli 1972',
    detalle: 'Mar del Plata',
  },
  {
    id: 'entrega',
    posicion: 'right-[-2%] top-[10%]',
    tono: 'bg-brand-yellow-500 text-brand-blue-500',
    titulo: 'Entrega en el día',
    detalle: 'en todo MDQ',
  },
] as const;

export default function HeroAnimado() {
  return (
    <section
      id="hero-animado"
      aria-label="Mensajería urbana y logística de última milla en todo Mar del Plata"
      className="relative isolate flex min-h-[90dvh] w-full flex-col overflow-hidden bg-brand-blue-500 text-white"
    >
      <HeroProceduralBackground variant="express" tone="blue" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-14 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* COPY 7 — nunca centrado en desktop. */}
          <div className="space-y-6 text-center sm:space-y-7 lg:col-span-7 lg:text-left">
            <Badge
              variant="accent"
              size="lg"
              className="-rotate-1"
              icon={<Zap className="h-4 w-4" aria-hidden="true" />}
            >
              Flota propia · Todo Mar del Plata
            </Badge>

            {/* Slogan del dueño (2026-09-29). El prototipo propone "Mensajería y
                logística e-commerce en Mar del Plata" como H1, pero eso es
                texto de diseño, no una frase del dueño: se queda como bajada.
                Las palabras del dueño no se reemplazan por las del mock. */}
            <h1 className="text-balance font-display text-4xl uppercase leading-[0.92] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">El motor de tu</span>
              <Knockout className="whitespace-nowrap">última milla</Knockout>
              <span className="block">Somos la solución a tus envíos</span>
            </h1>

            <p className="mx-auto max-w-[56ch] text-pretty font-sans text-base font-light leading-relaxed text-white/85 sm:text-lg lg:mx-0">
              Mensajería y logística e-commerce en Mar del Plata: envíos en el día con motos
              propias. Llegamos a toda la ciudad y los repartidores son nuestros, sin tercerizar.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-1 sm:flex-row sm:gap-6 lg:justify-start">
              <CTANestedPill
                href="/cotizar"
                id="hero-cta-cotizar"
                variant="primary"
                size="large"
                className="focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500"
              >
                Cotizá tu envío
              </CTANestedPill>
              <a
                href="/servicios"
                className="inline-flex min-h-11 items-center gap-2 rounded-md font-subheading text-sm uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 transition-colors hover:text-brand-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500 sm:text-base"
              >
                Ver servicios
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* MAPA 5 — pin + anillos + dos fichas ancladas. */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-115">
              {/* Anillos: el `--delay` escalona el arranque para que el pulso sea continuo. */}
              <span
                aria-hidden="true"
                className="animate-pulse-ring absolute left-1/2 top-[44%] aspect-square w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-yellow-500/60"
              />
              <span
                aria-hidden="true"
                className="animate-pulse-ring absolute left-1/2 top-[44%] aspect-square w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-yellow-500/60 [animation-delay:1.06s]"
              />
              <span
                aria-hidden="true"
                className="animate-pulse-ring absolute left-1/2 top-[44%] aspect-square w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-yellow-500/60 [animation-delay:2.13s]"
              />

              <Image
                src="/heroes/inicio-mapa.webp"
                alt="Pin de Envíos DosRuedas sobre un mapa isométrico de Mar del Plata con una ruta amarilla"
                width={560}
                height={560}
                priority
                sizes="(min-width: 1024px) 460px, 92vw"
                className="relative z-2 h-auto w-full drop-shadow-[0_24px_40px_rgba(255,255,255,0.12)]"
              />

              {fichas.map((ficha) => (
                <div
                  key={ficha.id}
                  className={`absolute z-3 inline-flex items-center gap-2 rounded-xl px-3 py-2.5 shadow-[0_12px_30px_rgba(9,80,246,0.25)] ${ficha.posicion} ${ficha.tono}`}
                >
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="font-mono text-2xs font-medium leading-tight">
                    <b className="block font-subheading text-xs uppercase tracking-wider">
                      {ficha.titulo}
                    </b>
                    {ficha.detalle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ticker de diferenciales. Duplicado y desplazado -50% para que el bucle no se note. */}
      <div className="relative z-10 border-t border-white/18 bg-white/6">
        <h2 className="sr-only">Diferenciales de Envíos DosRuedas</h2>
        <ul className="sr-only">
          {diferenciales.map((d) => (
            <li key={`sr-${d}`}>{d}</li>
          ))}
        </ul>
        <div
          aria-hidden="true"
          className="animate-marquee-left flex w-max items-center py-3.5"
        >
          {[0, 1].map((copia) => (
            <ul key={copia} className="flex shrink-0 items-center">
              {diferenciales.map((d) => (
                <li
                  key={`${copia}-${d}`}
                  className="flex items-center gap-9 whitespace-nowrap px-4.5 font-subheading text-base uppercase tracking-[0.08em] text-white sm:text-[17px]"
                >
                  {d}
                  <span className="h-1.75 w-1.75 rotate-45 rounded-xs bg-brand-yellow-500" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
