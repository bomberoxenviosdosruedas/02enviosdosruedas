'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, MapPin, Zap } from 'lucide-react';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { Knockout } from '@/components/ui/Knockout';
import Badge from '@/components/ui/Badge';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';

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
    posicion: 'left-2 bottom-2 sm:left-[-4%] sm:bottom-[14%]',
    titulo: 'Base Friuli 1972',
    detalle: 'Mar del Plata',
  },
  {
    id: 'entrega',
    posicion: 'right-2 top-2 sm:right-[-2%] sm:top-[10%]',
    titulo: 'Entrega en el día',
    detalle: 'en todo MDQ',
  },
] as const;

// Spring tokens desde globals.css: --ease-out, --duration-feedback
const spring = { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const };
const fastSpring = { duration: 0.2, ease: [0.23, 1, 0.32, 1] as const };

export default function HeroAnimado() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero-animado"
      aria-label="Mensajería urbana y logística de última milla en todo Mar del Plata"
      className="relative isolate flex min-h-[90dvh] w-full flex-col overflow-hidden bg-brand-blue-500 text-white"
    >
      <HeroProceduralBackground variant="express" tone="blue" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-start px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid w-full grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* COPY 7 — LEFT-ALIGNED ALWAYS, never centered */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={shouldReduceMotion ? { duration: 0 } : spring}
            className="space-y-6 lg:col-span-7"
          >
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02, transition: fastSpring }}
              className="inline-flex"
            >
              <Badge
                variant="accent"
                size="lg"
                icon={<Zap className="h-4 w-4" aria-hidden="true" />}
              >
                Flota propia · Todo Mar del Plata
              </Badge>
            </motion.div>

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { ...spring, delay: 0.1 }}
              className="text-balance font-display text-4xl uppercase leading-[0.92] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-7xl max-w-[32ch]"
            >
              <span className="sr-only">Mensajería en moto en Mar del Plata: </span>
              <span className="block">El motor de tu</span>
              <Knockout className="whitespace-nowrap">última milla</Knockout>
              <span className="sr-only">. </span>
              <span className="block">Somos la solución a tus envíos</span>
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { ...spring, delay: 0.15 }}
              className="font-sans text-base font-light leading-relaxed text-white/85 sm:text-lg max-w-[56ch]"
            >
              Mensajería y logística e-commerce en Mar del Plata: envíos en el día con motos
              propias. Llegamos a toda la ciudad y los repartidores son nuestros, sin tercerizar.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { ...spring, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <CTANestedPill
                href="/cotizar"
                id="hero-cta-cotizar"
                variant="primary"
                size="large"
                className="w-full sm:w-auto justify-center focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500"
              >
                Cotizá tu envío
              </CTANestedPill>
              <Link
                href="/servicios"
                className="inline-flex min-h-11 w-full sm:w-auto justify-center items-center gap-2 rounded-md font-subheading text-sm uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 transition-colors hover:text-brand-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500 sm:text-base"
              >
                Ver servicios
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>

          {/* MAPA 5 — pin + anillos + dos fichas ancladas. CLEAN SPATIAL SEPARATION */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={shouldReduceMotion ? { duration: 0 } : { ...spring, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto aspect-square w-full max-w-115">
              {/* Anillos: perpetual micro-loop pulse ring */}
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
                fetchPriority="high"
                loading="eager"
                sizes="(min-width: 1024px) 460px, 92vw"
                className="relative z-2 h-auto w-full drop-shadow-[0_24px_40px_rgba(9,80,246,0.15)]"
              />

              {fichas.map((ficha) => (
                <motion.div
                  key={ficha.id}
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.03, transition: fastSpring }}
                  className={`absolute z-3 inline-flex items-center gap-2 rounded-xl px-3 py-2.5 shadow-[0_12px_30px_rgba(9,80,246,0.25)] ${ficha.posicion} bg-white text-brand-blue-500 ring-1 ring-brand-blue-100`}
                >
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="font-mono text-2xs font-medium leading-tight">
                    <b className="block font-subheading text-xs uppercase tracking-wider">
                      {ficha.titulo}
                    </b>
                    {ficha.detalle}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
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