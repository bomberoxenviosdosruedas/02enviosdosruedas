import React from 'react';
import { Zap } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { Knockout } from '@/components/ui/Knockout';
import Badge from '@/components/ui/Badge';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import { EXPRESS_WINDOW } from '@/lib/promises';
import ExpressHeroCollage from './ExpressHeroCollage';

/**
 * Hero Express — propuesta "figma": tarjeta de texto sobre collage.
 *
 * Referencia: docs/propuestas/html_adaptados/figma/secciones/hero-envios-express.html.
 * Fondo: HeroProceduralBackground variant="express" (gradiente canónico Max + halos + gráficos vectoriales).
 * A la izquierda, la tarjeta (del mismo azul que el fondo) con badge, titular con knockout, promesa y CTAs;
 * a la derecha, el collage de teselas que se mete por detrás de la tarjeta en desktop. En mobile el collage
 * va debajo del texto.
 */
export default function ExpressHero() {
  return (
    <section
      id="express-hero"
      aria-label="Envíos Express en moto con entrega en franja horaria de 3 horas a elección en Mar del Plata"
      className="relative isolate flex min-h-[90dvh] w-full items-center overflow-hidden bg-brand-blue-500 text-white"
    >
      <HeroProceduralBackground variant="express" tone="blue" />
      <div className="mx-auto w-full max-w-[1280px] px-4 pb-12 pt-8 md:px-8 lg:py-14">
        <div className="grid items-center gap-6 lg:min-h-140 lg:grid-cols-12">
          <div className="relative z-2 max-w-160 rounded-xl bg-brand-blue-500 p-6 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:p-10">
            <Badge
              variant="accent"
              size="lg"
              className="mb-5 -rotate-1"
              icon={<Zap className="h-4 w-4" aria-hidden="true" />}
            >
              Mensajería en moto · Flota propia
            </Badge>

            <h1 className="font-display text-[clamp(2.75rem,11vw,3.5rem)] uppercase leading-[1.08] tracking-[-0.02em] text-white lg:text-[clamp(3.75rem,5.4vw,4.75rem)]">
              <span className="block">Envíos Express,</span>{' '}
              <Knockout className="whitespace-nowrap">puerta a puerta</Knockout>
            </h1>

            {/* La versión anterior cerraba con "Sin agrupar ni esperar". Las dos
               clausas son insostenibles: "sin agrupar" promete un bulto por viaje
               —la moto carga varios— y "ni esperar" choca contra el recargo de
                espera publicado ($2.100 c/10 min). Queda la promesa que sí
                sostiene: franja a elección, tarifa por distancia, WhatsApp. */}
            <p className="mt-4 max-w-[46ch] font-sans text-lg font-light leading-[1.55] text-white/85">
              Retiramos tu paquete y lo entregamos en {EXPRESS_WINDOW} a elección en toda la ciudad.
              Tarifa fija por distancia y coordinación directa por WhatsApp.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
              <CTANestedPill
                href="/cotizar"
                id="express-hero-cta-cotizar"
                variant="primary"
                size="large"
                className="focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500"
              >
                Cotizá tu envío Express
              </CTANestedPill>
              <a
                href="https://wa.me/542236602699?text=Hola!%20Quiero%20hacer%20un%20env%C3%ADo%20Express"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-sm font-subheading text-base uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 transition-colors hover:text-brand-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500"
              >
                <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" />
                O escribinos por WhatsApp
                <span className="sr-only"> (abre en otra pestaña)</span>
              </a>
            </div>
          </div>

          <ExpressHeroCollage className="z-1 h-95 md:h-115 lg:col-span-8 lg:col-start-5 lg:row-start-1 lg:h-150" />
        </div>
      </div>
    </section>
  );
}
