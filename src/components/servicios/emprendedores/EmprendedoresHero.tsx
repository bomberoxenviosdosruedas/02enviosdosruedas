import Image from 'next/image';
import { Boxes, Receipt, Tag, Warehouse } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CTANestedPill, DoubleBezelCard, Knockout } from '@/src/components/ui';
import HeroProceduralBackground from '@/src/components/ui/HeroProceduralBackground';
import {
  CONTRAREEMBOLSO_COMMISSION_PERCENT,
  DROPOFF_DISCOUNT_PERCENT,
  OPERATING_HOURS,
} from '@/src/lib/promises';

/** 7 celdas del rack. La del medio es la que se está "picking". */
const BINS = 7;
const PICKED = 3;

/** Las dos condiciones comerciales del plan + el horario del hub, todo desde promesas.ts. */
const chips = [
  { icon: Tag, value: `-${DROPOFF_DISCOUNT_PERCENT}%`, label: 'Si lo traés vos' },
  { icon: Receipt, value: `$${CONTRAREEMBOLSO_COMMISSION_PERCENT}`, label: 'Cobro en entrega' },
  { icon: Warehouse, value: OPERATING_HOURS.weekdays, label: 'Atención en el hub' },
];

/**
 * Hero Plan Emprendedores / 3PL — concepto "el picking".
 *
 * El servicio no es un envío: es un depósito con picking por código QR. La firma
 * visual es el rack — una fila de celdas de estante sobre la viga, con una de
 * ellas abierta y un bulto saliendo de ella (`floaty`). No hay ruta, ni reloj,
 * ni riel: hay inventario, que es exactamente lo que se compra acá.
 *
 * El rack vive en el padding inferior del hero y su alto es ese padding
 * (`h-14 sm:h-20 lg:h-24` = `py-14 sm:py-20 lg:py-24`), así que no puede pisar
 * texto ni card. Como el bulto usa `transform` para flotar, va en un wrapper
 * aparte del que centrea: la animación pisa cualquier `translate` de clase.
 *
 * Fondo amarillo (el segundo hero `tone="yellow"`): el CTA primary se reemplaza
 * por el `variant="blue"` y todo el texto va en azul de marca, nunca en un azul
 * más claro que rompería el contraste AA.
 */
export default function EmprendedoresHero() {
  return (
    <section
      id="plan-emprendedores-hero"
      aria-label="Plan Emprendedores y Fulfillment 3PL: almacenamiento en Friuli 1972, picking por QR y entregas Same-Day en Mar del Plata"
      className="relative isolate flex min-h-[90dvh] w-full flex-col overflow-hidden bg-brand-yellow-500 text-brand-blue-500"
    >
      <HeroProceduralBackground variant="3pl" tone="yellow" />

      <div className="relative flex-1 flex items-center overflow-hidden">
        {/* Firma visual: el rack de picking. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-14 sm:h-20 lg:h-24 pointer-events-none"
        >
          {/* Viga del rack, de borde a borde. */}
          <div className="absolute inset-x-0 bottom-0 border-t border-dashed border-brand-blue-500/50" />

          <div className="absolute inset-x-0 bottom-0 flex h-full max-w-2xl mx-auto items-end justify-between gap-2 px-6 sm:gap-4">
            {Array.from({ length: BINS }, (_, i) =>
              i === PICKED ? (
                <div key={i} className="relative h-8 sm:h-12 lg:h-14 w-8 sm:w-12 lg:w-14">
                  {/* Celda en picking: abierta, con la puerta de fondo. */}
                  <div className="absolute inset-0 rounded-md border-2 border-brand-blue-500 bg-brand-blue-500/10 motion-safe:animate-pulse" />
                  {/* Bulto saliendo de la celda. El offset es exactamente el alto
                      del bulto: en reposo apoya sobre el borde de la celda y los
                      10px de `floaty` lo suben dentro de la banda, nunca sobre
                      el contenido (el hueco libre sobre la celda es de 24px a
                      390 y de 32/40px desde sm, contra 14/16px de bulto). */}
                  <div className="absolute -top-3.5 sm:-top-4 left-0 right-0 flex justify-center">
                    <div className="motion-safe:animate-floaty h-3.5 sm:h-4 w-6 sm:w-7 rounded-[4px] bg-brand-blue-500 shadow-[0_0_18px_rgba(9,80,246,0.28)]">
                      <span className="block mx-auto mt-1.5 h-[3px] w-5 rounded-full bg-brand-yellow-500" />
                    </div>
                  </div>
                </div>
              ) : (
                // Celdas con stock: la altura del relleno sugiere el nivel.
                <div
                  key={i}
                  className="relative h-8 sm:h-12 lg:h-14 w-8 sm:w-12 lg:w-14 rounded-md border border-dashed border-brand-blue-500/50"
                >
                  <span
                    className="absolute inset-x-1 bottom-1 rounded-sm bg-brand-blue-500/20"
                    style={{ height: `${25 + ((i * 3) % 4) * 18}%` }}
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT 7 — copy + CTA. Nunca centrado en desktop. */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest bg-brand-blue-500 text-white -rotate-1">
                <Boxes className="h-4 w-4 shrink-0" aria-hidden="true" />
                Fulfillment 3PL e-commerce · MDQ
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-[-0.03em] leading-[0.92] text-brand-blue-500 text-balance">
                <span className="block">Vos vendés, nosotros</span>
                <Knockout tone="blue">lo entregamos hoy</Knockout>
                <span className="block">en Mar del Plata</span>
              </h1>

              <p className="text-base sm:text-lg font-sans text-brand-blue-500 max-w-[56ch] mx-auto lg:mx-0 leading-relaxed font-light">
                Guardamos tu stock en Friuli 1972, armamos cada pedido con picking por código QR
                y lo entregamos en el día. Si preferís traerlo vos, el DropOFF te bonifica un{' '}
                {DROPOFF_DISCOUNT_PERCENT}% sobre la tarifa final.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-1">
                <CTANestedPill
                  href="/contacto"
                  id="emprendedores-hero-cta-contacto"
                  variant="blue"
                  size="large"
                  className="focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-yellow-500"
                >
                  Activá Plan Emprendedores
                </CTANestedPill>
                <a
                  href="https://wa.me/542236602699?text=Hola!%20Quiero%20armar%20un%20Plan%20Emprendedores"
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
                  <li key={chip.label} className="p-3 rounded-xl bg-brand-blue-500/10 border border-brand-blue-500/20 text-center">
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
                    Picking por código QR
                  </span>
                </div>

                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-brand-blue-500/15">
                  <Image
                    src="/elementos/envios_emprendedores.webp"
                    alt="Pieza de marca del Plan Emprendedores y Fulfillment 3PL de Envíos DosRuedas en Friuli 1972, Mar del Plata"
                    fill
                    priority
                    sizes="(min-width: 1024px) 420px, 90vw"
                    className="object-cover"
                  />
                </div>

                <div className="pt-3 border-t border-brand-blue-500/15 flex items-center justify-between gap-3 font-mono text-xs sm:text-sm text-brand-blue-500 tabular-nums">
                  <span className="truncate">Hub Friuli 1972</span>
                  <span className="shrink-0">Stock + Same Day</span>
                </div>
              </DoubleBezelCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
