import React from 'react';
import Image from 'next/image';
import { ChevronDown, MapPin, MessageCircle } from 'lucide-react';
import { CTANestedPill, DoubleBezelCard, Knockout } from '@/components/ui';
import Badge from '@/components/ui/Badge';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import CopyPhone from '@/components/contacto/CopyPhone';
import { WHATSAPP_PHONE } from '@/lib/whatsapp';
import { OPERATING_HOURS } from '@/lib/promises';

/**
 * Dirección de la base central. No está en `promises.ts` porque no es una
 * promesa ni un umbral: es el domicilio, que ya vive en el JSON-LD de esta
 * página y en `ContactInfo`. Se replica acá para que el hero no dependa de
 * un bloque que está 600px más abajo.
 */
const BASE_ADDRESS = 'Friuli 1972 · Mar del Plata';

/**
 * Los dos canales, tal como los ofrece el prototipo: el conmutador.
 *
 * No es una lista de datos: es la decisión que la persona tiene que tomar
 * ("¿escribo o voy?"). Por eso cada fila es un objeto con glifo, título y
 * acción, y no una línea de texto.
 *
 * DELIBERADO: el prototipo sube un formulario de tres campos al hero. No se
 * hizo. `ContactForm`, justo debajo, ya pide nombre, empresa y volumen y abre
 * WhatsApp con eso precargado; dos formularios idénticos en la misma pantalla
 * obligan a la persona a decidir cuál está activo, y el que no lo está no hace
 * nada. El hero mantiene el enlace al formulario de abajo y en cambio presenta
 * los canales, que es lo que no estaba.
 */

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
              <Badge
                variant="accent"
                size="lg"
                className="-rotate-1"
                icon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
              >
                Conexión directa
              </Badge>

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

              {/* El conmutador: dos canales, y cada uno con su acción. En móvil
                  la acción baja a una segunda fila porque 44px de glifo + número
                  + botón no entran en 320px. */}
              <ul className="grid gap-2.5 border-t border-white/15 pt-6">
                <li className="grid grid-cols-[44px_1fr] items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.08] p-3 sm:grid-cols-[44px_1fr_auto] sm:pr-4">
                  {/* Amarillo de fondo con el glifo verde: la única excepción
                      cromática que autoriza `tokens-colores.md` §7.6. El verde
                      va en el `fill` del SVG y no en una clase, porque las
                      clases con hex están prohibidas (§7.3). */}
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow-500">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Z" />
                    </svg>
                  </span>
                  <span className="font-subheading text-lg uppercase leading-none tracking-[0.06em] text-white">
                    WhatsApp comercial
                  </span>
                  <CopyPhone className="col-start-2 justify-self-start sm:col-start-3 sm:justify-self-end" />
                </li>

                <li className="grid grid-cols-[44px_1fr] items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.08] p-3 sm:grid-cols-[44px_1fr_auto] sm:pr-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                    <MapPin className="h-5 w-5 text-brand-blue-500" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-subheading text-lg uppercase leading-none tracking-[0.06em] text-white">
                      Hub central
                    </span>
                    <span className="mt-1 block font-mono text-sm tabular-nums text-white/85">
                      {BASE_ADDRESS}
                    </span>
                  </span>
                  <span className="col-start-2 justify-self-start rounded-md bg-brand-yellow-500 px-2 py-1.5 font-subheading text-xs uppercase tracking-[0.08em] text-brand-blue-500 sm:col-start-3 sm:justify-self-end">
                    Lun a sáb
                  </span>
                </li>
              </ul>
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
                    src="/heroes/contacto-mensaje.webp"
                    alt="Teléfono y sobre con el mensaje Escribinos hoy, de Envíos DosRuedas en Mar del Plata"
                    fill
                    priority
                    sizes="(min-width: 1024px) 420px, 90vw"
                    className="object-cover"
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
