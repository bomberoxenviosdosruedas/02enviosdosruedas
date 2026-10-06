import Image from 'next/image';
import { Boxes, Warehouse } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { Knockout } from '@/components/ui/Knockout';
import Badge from '@/components/ui/Badge';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import {
  CONTRAREEMBOLSO_COMMISSION_PERCENT,
  DROPOFF_DISCOUNT_PERCENT,
  OPERATING_HOURS,
} from '@/lib/promises';

/** 7 celdas del rack. La del medio es la que se está "picking". */
const BINS = 7;
const PICKED = 3;

/**
 * El circuito del hub, en tres pasos.
 *
 * Antes iban tres chips con las condiciones comerciales. Se reemplazaron por el
 * flujo porque el cliente de depósito no compra un descuento: compra entender
 * qué pasa con su caja desde que la deja hasta que llega. Las condiciones
 * comerciales bajaron a los dos sellos sobre la foto, que es donde un número
 * grande se lee sin esfuerzo.
 */
const pasos = [
  { n: '01', titulo: 'Almacenamos', texto: 'Tu stock en Friuli 1972.' },
  { n: '02', titulo: 'Preparamos', texto: 'Picking y embalaje por pedido.' },
  { n: '03', titulo: 'Entregamos', texto: 'En el día, en todo Mar del Plata.' },
];

/** Los dos números comerciales, como sellos sobre la foto del local. */
const ofertas = [
  {
    id: 'dropoff',
    valor: `-${DROPOFF_DISCOUNT_PERCENT}%`,
    texto: 'Con DropOFF',
    posicion: 'left-[-2%] top-[8%] -rotate-3',
  },
  {
    id: 'comision',
    valor: `$${CONTRAREEMBOLSO_COMMISSION_PERCENT}`,
    texto: 'Comisión contrarreembolso',
    posicion: 'right-[-2%] bottom-[10%] rotate-2',
  },
] as const;

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
                      <span className="block mx-auto mt-1.5 h-0.75 w-5 rounded-full bg-brand-yellow-500" />
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

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT 7 — copy + CTA. Nunca centrado en desktop. */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <Badge
                variant="primary"
                size="lg"
                className="-rotate-1"
                icon={<Boxes className="h-4 w-4" aria-hidden="true" />}
              >
                Fulfillment 3PL e-commerce
              </Badge>

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
                  className="inline-flex min-h-11 items-center gap-2 font-subheading text-sm sm:text-base uppercase tracking-wider text-brand-blue-500 underline decoration-brand-blue-500 decoration-2 underline-offset-4 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-yellow-500 rounded-md"
                >
                  <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" />
                  O escribinos por WhatsApp
                </a>
              </div>

              {/* El circuito del hub. En móvil las tres celdas se apilan: leídas
                  en columna el orden 01→02→03 es explícito. */}
              <ol
                aria-label="Cómo funciona el depósito y fulfillment"
                className="grid max-w-xl gap-0 overflow-hidden rounded-2xl border border-brand-blue-200 bg-white shadow-[0_20px_40px_-16px_rgba(9,80,246,0.3)] mx-auto lg:mx-0 sm:grid-cols-3"
              >
                {pasos.map((paso, i) => (
                  <li
                    key={paso.n}
                    className={`flex flex-col gap-1.5 p-4 ${
                      i > 0 ? 'border-t border-dashed border-brand-blue-100 sm:border-t-0 sm:border-l' : ''
                    }`}
                  >
                    <span className="font-mono text-xs font-bold tabular-nums text-brand-blue-400">
                      {paso.n}
                    </span>
                    <span className="font-subheading text-xl uppercase leading-none tracking-wider text-brand-blue-500">
                      {paso.titulo}
                    </span>
                    <span className="text-[13.5px] leading-snug text-brand-blue-400">
                      {paso.texto}
                    </span>
                  </li>
                ))}
              </ol>

              <p className="text-center font-mono text-xs tabular-nums text-brand-blue-500 lg:text-left">
                <Warehouse className="mr-1.5 inline h-3.5 w-3.5 -translate-y-px" aria-hidden="true" />
                Atención en el hub: {OPERATING_HOURS.weekdays}
              </p>
            </div>

            {/* RIGHT 5 — el local con los dos sellos comerciales encima. */}
            <div className="relative flex w-full flex-col items-center justify-center lg:col-span-5">
              <div className="relative w-full max-w-105">
                {/* Panel blanco ladeado detrás de la foto: da la separación que
                    en azul plano no existe, porque la imagen es de la misma
                    paleta que el fondo. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-[6%] bottom-[4%] top-[8%] -z-10 rotate-3 rounded-3xl bg-white opacity-55"
                />

                <Image
                  src="/heroes/deposito-local.webp"
                  alt="Local de Envíos DosRuedas en Mar del Plata con toldo azul y mercadería preparada para despacho"
                  width={520}
                  height={520}
                  priority
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="relative h-auto w-full"
                />

                {ofertas.map((oferta) => (
                  <div
                    key={oferta.id}
                    className={`absolute z-2 flex flex-col gap-0.5 rounded-xl bg-brand-blue-500 px-3.5 py-2.5 shadow-[0_14px_30px_rgba(9,80,246,0.3)] ${oferta.posicion}`}
                  >
                    <span className="font-mono text-xl font-bold leading-none tabular-nums text-brand-yellow-500">
                      {oferta.valor}
                    </span>
                    <span className="font-subheading text-sm uppercase leading-none tracking-[0.07em] text-white">
                      {oferta.texto}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 flex w-full max-w-105 items-center justify-between gap-3 border-t border-brand-blue-500/20 pt-3 font-mono text-xs tabular-nums text-brand-blue-500">
                <span className="truncate">Hub Friuli 1972</span>
                <span className="shrink-0">Stock + Same Day</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
