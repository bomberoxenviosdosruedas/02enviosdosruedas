import React from 'react';
import Image from 'next/image';
import { Clock, Package, Tag, Zap } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CTANestedPill, DoubleBezelCard, Knockout } from '@/src/components/ui';
import HeroProceduralBackground from '@/src/components/ui/HeroProceduralBackground';
import { EXPRESS_TIERS } from '@/src/lib/pricing';
import { EXPRESS_WINDOW, EXPRESS_WINDOW_SHORT, MAX_WEIGHT_KG } from '@/src/lib/promises';

const ars = (value: number) => `$${value.toLocaleString('es-AR')}`;

/** Los tres números que un cliente de Express necesita antes de cotizar. */
const chips = [
  { icon: Clock, value: EXPRESS_WINDOW_SHORT, label: 'Entrega' },
  { icon: Tag, value: ars(EXPRESS_TIERS[0].price), label: 'Tarifa desde' },
  { icon: Package, value: `${MAX_WEIGHT_KG} kg`, label: 'Por bulto' },
];

/**
 * Hero Express — concepto "la traza directa".
 *
 * Idea: Express es el único servicio punto a punto sin agrupar, así que la
 * firma visual es UNA traza que se dibuja sola de origen a destino (keyframe
 * `draw`), rematada por un barrido de radar en el nodo de llegada. El
 * contraste con Home ("la calzada", líneas de carril horizontales) es
 * deliberado: acá la ruta es única, no una red.
 *
 * El trazo arranca en su estado final legible y la animación es `motion-safe:`,
 * así que con reduced-motion o sin JS se ve la ruta completa, sólo quieta.
 */
export default function ExpressHero() {
  return (
    <section
      id="express-hero"
      aria-label="Envíos Express en moto con entrega en 60 a 90 minutos en Mar del Plata"
      className="relative isolate flex min-h-[90dvh] w-full flex-col overflow-hidden bg-brand-blue-500 text-white"
    >
      <HeroProceduralBackground variant="express" tone="blue" />

      <div className="relative flex-1 flex items-center overflow-hidden">
        {/* Firma visual: la traza directa + radar de llegada. */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          {/* La traza va en un SVG estirado (`preserveAspectRatio="none"`): son
              curvas finas, la distorsión no se nota y nos deja barrer todo el
              ancho. El radar, en cambio, necesita círculos reales — por eso va
              aparte, en un SVG cuadrado con su propio aspect ratio. */}
          <svg
            className="absolute inset-0 h-full w-full"
            style={{ opacity: 0.32 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 620"
            preserveAspectRatio="none"
          >
            {/* Ruta origen → destino. --draw-len (1800) >= longitud real del
                path (1634) para que el trazo sea un único dash y se vea
                completo al terminar la animación. */}
            <path
              d="M -40 570 C 250 555, 430 300, 770 305 S 1190 130, 1500 78"
              fill="none"
              stroke="#FFEC01"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="1800"
              className="motion-safe:animate-draw"
              style={{ '--draw-len': '1800' } as React.CSSProperties}
            />
            {/* Guía estática bajo la traza: la ruta existe aunque no se anime. */}
            <path
              d="M -40 570 C 250 555, 430 300, 770 305 S 1190 130, 1500 78"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeDasharray="6 10"
              opacity="0.45"
            />
            {/* Nodo de origen. */}
            <circle cx="96" cy="540" r="7" fill="#FFFFFF" opacity="0.85" />
            <circle cx="96" cy="540" r="16" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 8" opacity="0.5" />
          </svg>

          {/* Nodo de destino: barrido de radar. */}
          <svg
            className="absolute right-[4%] top-[8%] w-[150px] h-[150px] sm:w-[240px] sm:h-[240px] lg:w-[300px] lg:h-[300px]"
            style={{ opacity: 0.34 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-150 -150 300 300"
          >
            <g className="motion-safe:animate-radar">
              <path d="M 0 0 L 86 0 A 86 86 0 0 0 60.8 -60.8 Z" fill="#FFEC01" opacity="0.4" />
            </g>
            <circle r="86" fill="none" stroke="#FFEC01" strokeWidth="1.5" strokeDasharray="6 10" opacity="0.7" />
            <circle r="132" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 12" opacity="0.4" />
            <circle r="6" fill="#FFEC01" />
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
                <span className="block">Retiro y entrego</span>
                <Knockout>en {EXPRESS_WINDOW_SHORT}</Knockout>
                <span className="block">sin paradas</span>
              </h1>

              <p className="text-base sm:text-lg font-sans text-white/85 max-w-[56ch] mx-auto lg:mx-0 leading-relaxed font-light">
                Retiramos tu paquete y lo entregamos en {EXPRESS_WINDOW} en todo Mar del Plata.
                Sin agrupar ni esperar: tarifa fija por distancia y coordinación directa por WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-1">
                <CTANestedPill
                  href="/cotizar/express"
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
                    <span className="block font-subheading text-[11px] sm:text-sm uppercase tracking-wider text-white mt-0.5">{chip.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT 5 — bezel doble con la pieza de marca del servicio. */}
            <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
              <DoubleBezelCard variant="dark" className="w-full max-w-md" innerClassName="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow-500 motion-safe:animate-pulse" aria-hidden="true" />
                  <span className="font-subheading text-sm tracking-widest text-brand-yellow-500 uppercase">
                    Retiro → entrega directa
                  </span>
                </div>

                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/20">
                  <Image
                    src="/elementos/icono_express.webp"
                    alt="Pieza de marca del servicio Express de Envíos DosRuedas para envíos en moto por Mar del Plata"
                    fill
                    priority
                    sizes="(min-width: 1024px) 420px, 90vw"
                    className="object-cover"
                  />
                </div>

                <div className="pt-3 border-t border-white/15 flex items-center justify-between gap-3 font-mono text-xs sm:text-sm text-white/85 tabular-nums">
                  <span className="truncate">Ventana {EXPRESS_WINDOW_SHORT}</span>
                  <span className="text-brand-yellow-500 shrink-0">Punto a punto</span>
                </div>
              </DoubleBezelCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
