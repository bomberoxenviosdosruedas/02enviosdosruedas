import React from 'react';
import Image from 'next/image';
import { ChevronDown, MapPin, MessageCircle } from 'lucide-react';
import { CTANestedPill, DoubleBezelCard, Knockout } from '@/src/components/ui';
import HeroProceduralBackground from '@/src/components/ui/HeroProceduralBackground';
import CopyPhone from '@/src/components/contacto/CopyPhone';
import { WHATSAPP_PHONE } from '@/src/lib/whatsapp';
import { OPERATING_HOURS } from '@/src/lib/promises';

/**
 * Dirección de la base central. No está en `promises.ts` porque no es una
 * promesa ni un umbral: es el domicilio, que ya vive en el JSON-LD de esta
 * página y en `ContactInfo`. Se replica acá para que el hero no dependa de
 * un bloque que está 600px más abajo.
 */
const BASE_ADDRESS = 'Friuli 1972 · MDQ';

/**
 * Geometría de la banda. El SVG tiene 96 de alto y el riel va en y=30, o sea
 * 31%: en el DOM los tres elementos que se apoyan en él usan `top-[31%]`, y los
 * rótulos viven en `bottom-0`, con más de 25px de aire entre ambos.
 */
const RAIL_W = 1200;
const RAIL_Y = 30;

/**
 * Hero Contacto — concepto "el ida y vuelta".
 *
 * Una página de contacto no vende velocidad ni precio: vende respuesta. La firma
 * visual es el único movimiento bidireccional de los nueve heroes: un token sale
 * de tu lado, llega a la base y vuelve. Todo lo demás se apoya en datos reales
 * (`OPERATING_HOURS`, `SUPPORT_PHONE`, `WHATSAPP_PHONE`) y deja de inventar lo
 * que estaba: el chip "15:00 hs / Corte Diario" (no hay corte en una página de
 * contacto), el "100% / Mismo Día" sin servicio, el "Sin Mínimos / Retiros
 * Libres" sin fuente y el "Online ahora", que era un estado falso. El "Lun a
 * Sáb · 2026" también era ruido: ahora la banda anuncia a dónde va el mensaje y
 * la tarjeta de la derecha publica los horarios reales de la base.
 *
 * La banda vive en el padding inferior del hero y su alto es exactamente ese
 * padding (`h-14 sm:h-20 lg:h-24` = `py-14 sm:py-20 lg:py-24`), así que jamás
 * puede pisar el texto ni la card. El riel es un trazo fino dentro de un SVG
 * estirado y el token es un `div` real, para que el `preserveAspectRatio="none"`
 * no lo deforme y su `transform` no compita con ningún `-translate`.
 */
export default function ContactHero() {
  return (
    <section
      id="contact-hero"
      aria-label="Contacto directo con la base central de Envíos DosRuedas en Friuli 1972, Mar del Plata: WhatsApp, formulario y horarios de atención"
      className="relative isolate flex min-h-[90dvh] w-full flex-col overflow-hidden bg-brand-blue-500 text-white"
    >
      <HeroProceduralBackground variant="contact" tone="blue" />

      <div className="relative flex-1 flex items-center overflow-hidden">
        {/* Firma visual: el ida y vuelta. Riel de tu mensaje a la base, token que
            sale, se entrega y vuelve. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-14 sm:h-20 lg:h-24 pointer-events-none"
        >
          <div className="relative mx-auto h-full w-full max-w-[1280px] px-6 lg:px-8">
            {/* Sólo el riel en el SVG estirado: una recta se lee igual deformada.
                Los terminales y el token van en DOM (ver nota del keyframe). */}
            <svg
              className="absolute inset-0 h-full w-full"
              style={{ opacity: 0.34 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox={`0 0 ${RAIL_W} 96`}
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1={RAIL_Y}
                x2={RAIL_W}
                y2={RAIL_Y}
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeDasharray="6 10"
              />
            </svg>

            {/* Terminal de partida: vos escribís. Anillo hueco, sin animación. */}
            <span className="absolute left-0 top-[31%] -translate-x-1/2 -translate-y-1/2 block h-3 w-3 rounded-full border-2 border-brand-yellow-500" />

            {/* Terminal de llegada: la base responde. Wrapper + hijos porque
                `animate-ping` anima `transform` y el wrapper ya trae su
                propio `translate` para centrarlo. */}
            <span className="absolute right-0 top-[31%] translate-x-1/2 -translate-y-1/2">
              <span className="absolute -inset-1 rounded-full border border-brand-yellow-500/60 motion-safe:animate-ping" />
              <span className="relative block h-3 w-3 rounded-full bg-brand-yellow-500" />
            </span>

            {/* El token es un div real: mide todo el recorrido, así
                `translateX(100%)` es el 100% real y no el ancho del token. El
                `-left-[7px]` compensa la mitad de su propio ancho para que
                arranque y termine centrado sobre cada terminal. */}
            <div className="absolute left-0 top-[31%] h-0 w-full motion-safe:animate-roundtrip">
              <span className="absolute -left-[7px] -translate-y-1/2 block h-3.5 w-3.5 rounded-full bg-brand-yellow-500 shadow-[0_0_18px_rgba(255,236,1,0.45)]" />
            </div>

            <span className="absolute left-0 bottom-0 font-subheading text-[11px] uppercase tracking-[0.18em] text-white/85">
              Escribís
            </span>
            <span className="absolute right-0 bottom-0 font-mono text-[11px] tracking-[0.14em] text-brand-yellow-500 tabular-nums">
              {BASE_ADDRESS}
            </span>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT 7 — copy + CTA. Nunca centrado en desktop. */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest bg-brand-yellow-500 text-brand-blue-500 shadow-accent-sm -rotate-1">
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                Conexión directa · Mar del Plata
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-[-0.03em] leading-[0.92] text-white text-balance">
                <span className="block">Escribinos</span>
                <Knockout>te respondemos</Knockout>
              </h1>

              <p className="text-base sm:text-lg font-sans text-white/85 max-w-[56ch] mx-auto lg:mx-0 leading-relaxed font-light">
                Contanos qué necesitás mover y te cotizamos al toque. Atendemos desde la base
                central de Friuli 1972, en Mar del Plata, con flota propia de motos y cero
                tercerización.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-1">
                <CTANestedPill
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=Hola!%20Quiero%20cotizar%20mis%20env%C3%ADos`}
                  id="contact-hero-cta-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="large"
                  className="focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500"
                >
                  Escribinos por WhatsApp
                </CTANestedPill>
                <a
                  href="#contact-form"
                  className="inline-flex min-h-[44px] items-center gap-2 font-subheading text-sm sm:text-base uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 hover:text-brand-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500 rounded-md"
                >
                  <ChevronDown className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Completá el formulario
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-7 gap-y-1 pt-6 border-t border-white/15">
                <span className="inline-flex items-center gap-2 font-mono text-sm sm:text-base text-white/85 tabular-nums">
                  <MapPin className="h-4 w-4 shrink-0 text-brand-yellow-500" aria-hidden="true" />
                  {BASE_ADDRESS}
                </span>
                <CopyPhone />
              </div>
            </div>

            {/* RIGHT 5 — bezel doble con la pieza de la base central. */}
            <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
              <DoubleBezelCard variant="dark" className="w-full max-w-md" innerClassName="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow-500 motion-safe:animate-pulse" aria-hidden="true" />
                  <span className="font-subheading text-sm tracking-widest text-brand-yellow-500 uppercase">
                    Base central
                  </span>
                </div>

                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/20">
                  <Image
                    src="/elementos/hero_contacto.webp"
                    alt="Pieza de marca de Envíos DosRuedas para la base central de contacto en Mar del Plata"
                    fill
                    priority
                    sizes="(min-width: 1024px) 420px, 90vw"
                    className="object-contain"
                  />
                </div>

                <div className="pt-3 border-t border-white/15 grid grid-cols-2 gap-3 font-mono text-[11px] sm:text-xs text-white/85 tabular-nums">
                  <div>
                    <span className="block font-subheading text-[10px] uppercase tracking-widest text-brand-yellow-500">
                      Lun a Vie
                    </span>
                    <span className="block mt-1">{OPERATING_HOURS.weekdays}</span>
                  </div>
                  <div>
                    <span className="block font-subheading text-[10px] uppercase tracking-widest text-brand-yellow-500">
                      Sábado
                    </span>
                    <span className="block mt-1">{OPERATING_HOURS.saturdays}</span>
                  </div>
                </div>
              </DoubleBezelCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
