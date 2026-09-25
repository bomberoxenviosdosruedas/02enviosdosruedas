import React from 'react';
import Image from 'next/image';
import { MapPin, Zap } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CTANestedPill, DoubleBezelCard, HeroProceduralBackground } from '@/components/ui';
import { EXPRESS_TIERS } from '@/src/lib/pricing';
import { EXPRESS_WINDOW, EXPRESS_WINDOW_SHORT, MAX_WEIGHT_KG } from '@/src/lib/promises';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

const chips = [
  { value: EXPRESS_WINDOW_SHORT.replace('-', '–'), label: 'Entrega' },
  { value: formatArs(EXPRESS_TIERS[0].price), label: 'Tarifa desde' },
  { value: `${MAX_WEIGHT_KG} kg`, label: 'Por bulto' },
];

export default function ExpressHero() {
  return (
    <section
      id="express-hero"
      aria-label="Envíos Express en moto en Mar del Plata"
      className="relative isolate w-full overflow-hidden bg-brand-blue-700 text-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20"
    >
      <HeroProceduralBackground variant="express" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <span className="-rotate-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest bg-brand-yellow-500 text-brand-blue-900 shadow-accent-sm">
              <Zap className="h-4 w-4 shrink-0" aria-hidden="true" />
              Mar del Plata · +7 años · 2026
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-tight leading-[0.98] text-white">
              <span className="block">Mensajería en moto</span>
              <span className="inline-block bg-brand-yellow-500 text-brand-blue-900 px-3 py-1 rounded-lg -rotate-1 shadow-glow-yellow my-1">
                Envíos Express
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl">
                Entregados en {EXPRESS_WINDOW}
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl font-sans text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Retiramos tu paquete y lo entregamos en {EXPRESS_WINDOW} en todo Mar del Plata. Flota propia de motos,
              tarifa fija por distancia y coordinación directa por WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-2">
              <CTANestedPill href="/cotizar/express" variant="primary" size="large">
                Cotizá tu envío Express
              </CTANestedPill>

              <a
                href="https://wa.me/542236602699?text=Hola!%20Quiero%20hacer%20un%20env%C3%ADo%20Express"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 font-subheading text-base uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 hover:text-brand-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-700 rounded-md"
              >
                <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" />
                O escribinos por WhatsApp
              </a>
            </div>

            <ul className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-3 max-w-xl mx-auto lg:mx-0">
              {chips.map((chip) => (
                <li
                  key={chip.label}
                  className="p-3 rounded-xl bg-white/10 border border-white/20 text-center"
                >
                  <span className="block font-mono text-xl sm:text-2xl text-brand-yellow-500 tabular-nums">
                    {chip.value}
                  </span>
                  <span className="block font-subheading text-xs sm:text-sm uppercase tracking-wider text-white/90 mt-0.5">
                    {chip.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
            <DoubleBezelCard variant="dark" className="w-full max-w-md" innerClassName="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow-500 animate-pulse-subtle" aria-hidden="true" />
                <span className="font-subheading text-sm tracking-widest text-brand-yellow-500 uppercase">
                  Retiro → entrega directa
                </span>
              </div>

              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/20">
                <Image
                  src="/elementos/icono_express.webp"
                  alt="Moto de Envíos DosRuedas haciendo un envío Express directo en Mar del Plata"
                  fill
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="pt-2 border-t border-white/15 flex items-center justify-between text-sm font-mono text-white/90">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-yellow-500" aria-hidden="true" />
                  Todo Mar del Plata
                </span>
                <span className="text-brand-yellow-500">Punto a punto</span>
              </div>
            </DoubleBezelCard>
          </div>
        </div>
      </div>
    </section>
  );
}
