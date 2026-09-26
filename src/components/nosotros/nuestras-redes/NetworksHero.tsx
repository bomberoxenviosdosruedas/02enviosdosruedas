import React from 'react';
import Image from 'next/image';
import { ChevronDown, Share2 } from 'lucide-react';
import { CTANestedPill, DoubleBezelCard, Knockout } from '@/src/components/ui';
import HeroProceduralBackground from '@/src/components/ui/HeroProceduralBackground';

/** Los tres canales que el hero anuncia; el detalle vive en #redes-oficiales. */
const CHANNELS = ['Instagram', 'Facebook', 'WhatsApp'] as const;
const HANDLE = '@enviosdosruedas';

/* Geometría de la constelación, en unidades del viewBox del SVG de la banda. */
const MESH_W = 1200;
const MESH_H = 96;
const CONVERGE = { x: 1136, y: 48 };

/**
 * Puntos de partida. Empiezan en x=300 a propósito: a 390px de ancho el rótulo
 * "3 canales" de la izquierda llega al 22% y las curvas no pueden pisarlo.
 */
const ORIGINS = [
  { x: 300, y: 22 },
  { x: 372, y: 74 },
  { x: 448, y: 46 },
  { x: 524, y: 14 },
  { x: 596, y: 82 },
  { x: 668, y: 58 },
];

/**
 * Hero Nuestras Redes — concepto "la constelación".
 *
 * Idea: una comunidad son muchos puntos mirando al mismo lado. La firma visual
 * son seis nodos que convergen por trazos punteados en un único nodo amarillo —
 * el canal. El movimiento es convergente (de izquierda a derecha), al revés del
 * abanico radial de "el nodo" en Sobre Nosotros: allá irradia una base, acá se
 * reúne una gente.
 *
 * El hero NO repite las tarjetas de canal de #redes-oficiales (WhatsApp,
 * Instagram y Facebook ya están completos, con contadores, descripciones y
 * CTAs), ni los "3.000 seguidores" de esa sección: acá sólo se anuncia el canal
 * y se rutea. El contador que se inventaba en este hero (4.850 → 5.200 contando
 * en vivo) no existe en ninguna fuente y se fue.
 */
export default function NetworksHero() {
  return (
    <section
      id="networks-hero"
      aria-label={`Canales oficiales de Envíos DosRuedas en redes sociales: ${CHANNELS.join(', ')} para seguir las rutas y la operativa en Mar del Plata`}
      className="relative isolate flex min-h-[90dvh] w-full flex-col overflow-hidden bg-brand-blue-500 text-white"
    >
      <HeroProceduralBackground variant="community" tone="blue" />

      <div className="relative flex-1 flex items-center overflow-hidden">
        {/* Firma visual: la constelación. */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-14 sm:h-20 lg:h-24 pointer-events-none">
          <div className="relative mx-auto h-full w-full max-w-[1280px] px-6 lg:px-8">
            {/* Sólo trazos finos en el SVG estirado: la convergencia se lee
                igual deformada y nos barre todo el ancho. Los nodos van en DOM
                para que `animate-pulse` no compita con ningún `translate`. */}
            <svg
              className="absolute inset-0 h-full w-full"
              style={{ opacity: 0.4 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox={`0 0 ${MESH_W} ${MESH_H}`}
              preserveAspectRatio="none"
            >
              <line
                x1="280"
                y1={CONVERGE.y}
                x2={CONVERGE.x}
                y2={CONVERGE.y}
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeDasharray="4 10"
              />
              {ORIGINS.map((origin) => (
                <path
                  key={`${origin.x}-${origin.y}`}
                  d={`M ${origin.x} ${origin.y} C ${origin.x + 150} ${origin.y}, 980 ${CONVERGE.y}, ${CONVERGE.x} ${CONVERGE.y}`}
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                  strokeDasharray="5 9"
                />
              ))}
            </svg>

            {ORIGINS.map((origin, i) => (
              <span
                key={`${origin.x}-${origin.y}`}
                className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 motion-safe:animate-pulse"
                style={{
                  left: `${(origin.x / MESH_W) * 100}%`,
                  top: `${(origin.y / MESH_H) * 100}%`,
                  animationDelay: `${i * 0.14}s`,
                }}
              />
            ))}

            {/* Nodo de convergencia: anillo `ping` y punto, en wrapper + hijo
                porque `animate-ping` anima `transform` y el wrapper ya trae su
                propio `-translate` para centrarlo. */}
            <span
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${(CONVERGE.x / MESH_W) * 100}%`, top: `${(CONVERGE.y / MESH_H) * 100}%` }}
            >
              <span className="absolute -inset-2.5 rounded-full border border-brand-yellow-500/60 motion-safe:animate-ping" />
              <span className="relative block h-3 w-3 rounded-full bg-brand-yellow-500" />
            </span>

            <span className="absolute left-6 top-1/2 -translate-y-1/2 font-subheading text-[11px] uppercase tracking-[0.18em] text-brand-yellow-500 lg:left-8">
              {CHANNELS.length} canales
            </span>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-24 pb-14 sm:pb-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT 7 — copy + CTA. Nunca centrado en desktop. */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest bg-brand-yellow-500 text-brand-blue-500 shadow-accent-sm -rotate-1">
                <Share2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                Social media · Comunidad MDQ
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-[-0.03em] leading-[0.92] text-white text-balance">
                <span className="block">Comunidad en</span>
                <Knockout>línea</Knockout>
              </h1>

              <p className="text-base sm:text-lg font-sans text-white/85 max-w-[56ch] mx-auto lg:mx-0 leading-relaxed font-light">
                Rutas en vivo, entregas de la flota y novedades de la operativa diaria, publicadas en
                nuestros canales oficiales de Mar del Plata.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-1">
                <CTANestedPill
                  href="https://instagram.com/enviosdosruedas"
                  id="networks-hero-cta-instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="large"
                  className="focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500"
                >
                  Seguinos en Instagram
                </CTANestedPill>
                <a
                  href="#redes-oficiales"
                  className="inline-flex min-h-[44px] items-center gap-2 font-subheading text-sm sm:text-base uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 hover:text-brand-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500 rounded-md"
                >
                  <ChevronDown className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Ver los {CHANNELS.length} canales
                </a>
              </div>
            </div>

            {/* RIGHT 5 — bezel doble con la pieza de marca de la comunidad. */}
            <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
              <DoubleBezelCard variant="dark" className="w-full max-w-md" innerClassName="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow-500 motion-safe:animate-pulse" aria-hidden="true" />
                  <span className="font-subheading text-sm tracking-widest text-brand-yellow-500 uppercase">
                    Canales oficiales
                  </span>
                </div>

                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/20">
                  <Image
                    src="/elementos/seguinos_transparent.webp"
                    alt="Pieza de marca de Envíos DosRuedas con la consigna de seguir sus canales oficiales en redes sociales"
                    fill
                    priority
                    sizes="(min-width: 1024px) 420px, 90vw"
                    className="object-contain"
                  />
                </div>

                <div className="pt-3 border-t border-white/15 flex items-center justify-between gap-3 font-mono text-xs sm:text-sm text-white/85 tabular-nums">
                  <span className="truncate">{HANDLE}</span>
                  <span className="text-brand-yellow-500 shrink-0">MDQ</span>
                </div>
              </DoubleBezelCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
