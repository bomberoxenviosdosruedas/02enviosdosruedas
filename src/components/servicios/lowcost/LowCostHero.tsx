'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowRight,
  Phone,
  TrendingDown,
  MapPin,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import CTANestedPill from '@/components/ui/CTANestedPill';

/* ─── Constantes ─────────────────────────────────────────── */
const MARQUEE_TEXT = Array(8).fill('LOWCOST').join('  ');

const FLOAT_CARDS = [
  {
    id: 'card-costo',
    rotation: -6,
    delay: '0s',
    top: '8%',
    left: '-8%',
    icon: <TrendingDown className="h-5 w-5 text-brand-blue-700" />,
    label: 'Costo Fijo',
    value: '$3.000',
    sub: 'Desde 0-3 km',
    accent: true,
  },
  {
    id: 'card-horario',
    rotation: 4,
    delay: '0.8s',
    top: '52%',
    right: '-10%',
    icon: <CheckCircle2 className="h-5 w-5 text-brand-blue-700" />,
    label: 'Entrega Hoy',
    value: '13–19 hs',
    sub: 'Misma jornada',
    accent: false,
  },
  {
    id: 'card-cobertura',
    rotation: 6,
    delay: '1.6s',
    bottom: '4%',
    left: '-4%',
    icon: <MapPin className="h-5 w-5 text-brand-blue-700" />,
    label: 'Cobertura Total',
    value: 'MDQ',
    sub: 'Todo Mar del Plata',
    accent: false,
  },
] as const;

const KPI_CHIPS = [
  { value: '$3.000', label: 'Base 0-3 km' },
  { value: '-30%', label: 'vs Express' },
  { value: '100%', label: 'MDQ' },
] as const;

/* ─── Subcomponentes ─────────────────────────────────────── */

/** Fondo procedural: base azul + 3 blobs + grid SVG + ghost wordmark */
function ProceduralBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
      {/* 3 blobs radiales */}
      <div
        className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute top-1/3 -right-32 w-[640px] h-[640px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,236,1,0.22) 0%, rgba(255,236,1,0.06) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute -bottom-48 left-1/4 w-[580px] h-[580px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(9,80,246,0.35) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Grid SVG */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="lc-hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.75"
              strokeDasharray="2,6"
            />
            <circle cx="0" cy="0" r="1.5" fill="#FFEC01" opacity="0.07" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lc-hero-grid)" opacity="0.07" />
      </svg>

      {/* Ghost wordmark */}
      <span className="absolute inset-0 flex items-center justify-center font-display text-[16vw] leading-none text-white/[0.035] uppercase tracking-tighter whitespace-nowrap pointer-events-none select-none z-0">
        PAQUETERÍA LOWCOST
      </span>
    </div>
  );
}

/** Dos filas de marquee detrás del título */
function MarqueeStrip({ isPaused }: { isPaused: boolean }) {
  return (
    <div
      className="absolute left-0 right-0 z-0 pointer-events-none select-none overflow-hidden"
      style={{
        top: '50%',
        transform: 'translateY(-50%)',
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
      aria-hidden="true"
    >
      {/* Fila 1 → izquierda */}
      <div
        className={cn(
          'flex whitespace-nowrap font-display text-[8vw] uppercase text-white/[0.04] leading-none mb-1',
          isPaused ? 'is-paused' : 'animate-marquee-left',
        )}
      >
        <span>{MARQUEE_TEXT}&nbsp;&nbsp;</span>
        <span aria-hidden="true">{MARQUEE_TEXT}&nbsp;&nbsp;</span>
      </div>
      {/* Fila 2 → derecha */}
      <div
        className={cn(
          'flex whitespace-nowrap font-display text-[8vw] uppercase text-white/[0.04] leading-none',
          isPaused ? 'is-paused' : 'animate-marquee-right',
        )}
      >
        <span>{MARQUEE_TEXT}&nbsp;&nbsp;</span>
        <span aria-hidden="true">{MARQUEE_TEXT}&nbsp;&nbsp;</span>
      </div>
    </div>
  );
}

/** Tarjeta flotante angulada tipo Pinterest */
function FloatingCard({
  card,
  isPaused,
  reduceMotion,
}: {
  card: (typeof FLOAT_CARDS)[number];
  isPaused: boolean;
  reduceMotion: boolean;
}) {
  const posStyle: React.CSSProperties = {
    rotate: `${card.rotation}deg`,
    animationDelay: card.delay,
    willChange: 'transform',
    ...('top' in card ? { top: card.top } : {}),
    ...('bottom' in card ? { bottom: card.bottom } : {}),
    ...('left' in card ? { left: card.left } : {}),
    ...('right' in card ? { right: card.right } : {}),
  };

  return (
    <div
      className={cn(
        'absolute w-[220px] sm:w-[260px] select-none z-20',
        !reduceMotion && !isPaused && 'animate-float-slow',
        isPaused && !reduceMotion && 'is-paused',
      )}
      style={posStyle}
    >
      {/* Outer bezel glass */}
      <div className="p-[10px] rounded-[28px] backdrop-blur-md border bg-white/10 border-white/15 shadow-[var(--shadow-ambient-elevation)] will-change-transform">
        {/* Inner card */}
        <div className="p-4 rounded-[20px] bg-white text-brand-blue-700">
          <div className="flex items-center gap-2 mb-2">
            {card.icon}
            <span className="font-subheading text-[11px] uppercase tracking-widest text-brand-blue-700/70">
              {card.label}
            </span>
          </div>
          <div className={cn(
            'font-mono font-bold text-2xl tabular-nums leading-none',
            card.accent ? 'text-brand-blue-700' : 'text-brand-blue-700',
          )}>
            {card.value}
          </div>
          {card.accent && (
            <div className="mt-1.5 inline-block bg-brand-yellow-500 text-brand-blue-700 font-subheading text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full">
              {card.sub}
            </div>
          )}
          {!card.accent && (
            <div className="mt-1 font-sans text-[11px] text-brand-blue-700/60">
              {card.sub}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Componente principal ───────────────────────────────── */
export default function LowCostHero() {
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="lowcost-hero"
      aria-labelledby="lowcost-hero-heading"
      className="relative w-full min-h-[85vh] bg-brand-blue-700 text-white border-b border-white/10 overflow-hidden pt-24 pb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Fondo procedural ── */}
      <ProceduralBg />

      {/* ── Marquee strip (detrás del contenido) ── */}
      {!reduceMotion && <MarqueeStrip isPaused={isPaused} />}

      {/* ── Contenido principal ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ── LEFT COLUMN (7 cols) ── */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rotate-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-subheading font-bold uppercase tracking-widest bg-white/10 border border-brand-yellow-500/40 text-brand-yellow-500 shadow-[var(--shadow-glow-yellow)] backdrop-blur-md"
            >
              <TrendingDown className="h-4 w-4 text-brand-yellow-500 shrink-0" />
              <span>PAQUETERÍA E-COMMERCE Y CADETERÍA ECONÓMICA · MDQ 2026</span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              id="lowcost-hero-heading"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-display text-[3.2rem] sm:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] uppercase tracking-tight leading-[0.92] text-white"
            >
              <span className="block">LOWCOST</span>
              <span className="block">
                <span className="inline-block bg-brand-yellow-500 text-brand-blue-700 px-3 -rotate-1 shadow-[var(--shadow-accent-sm)] leading-none py-1">
                  QUE RINDE
                </span>
              </span>
              <span className="block">E-COMMERCE MDQ</span>
            </motion.h1>

            {/* Descripción */}
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-lg font-sans text-white/85 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Paquetería e-commerce, cadetería y encomiendas programadas en Mar del Plata.
              Pedidos antes de las{' '}
              <strong className="text-brand-yellow-500 font-bold">13:00 hs</strong>{' '}
              se entregan en el día antes de las{' '}
              <strong className="text-brand-yellow-500 font-bold">19:00 hs</strong>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-1"
            >
              <CTANestedPill
                href="/cotizar/lowcost"
                id="lowcost-hero-cta-cotizar"
                variant="primary"
                size="large"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Cotizá tu lote LowCost
              </CTANestedPill>

              <CTANestedPill
                href="https://wa.me/542236602699"
                id="lowcost-hero-cta-whatsapp"
                variant="elevated"
                size="large"
                icon={<Phone className="h-4 w-4" />}
              >
                Hablar por WhatsApp
              </CTANestedPill>
            </motion.div>

            {/* KPI chips — double-bezel */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.32 }}
              className="grid grid-cols-3 gap-2 pt-2 max-w-md mx-auto lg:mx-0"
            >
              {KPI_CHIPS.map((kpi) => (
                <div
                  key={kpi.label}
                  className="double-bezel-outer p-2 rounded-2xl !bg-white/10 !border-white/15 !shadow-none"
                >
                  <div className="double-bezel-inner p-3 rounded-xl !bg-white/5 !border-white/10 text-center">
                    <span className="block font-mono font-bold text-xl sm:text-2xl text-brand-yellow-500 tabular-nums leading-none">
                      {kpi.value}
                    </span>
                    <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-white/60 mt-1">
                      {kpi.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN (5 cols) — visual con cards flotantes ── */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px]"
          >
            {/* Ambient glow detrás de la imagen */}
            <div
              className="absolute inset-8 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255,236,1,0.18) 0%, rgba(9,80,246,0.25) 50%, transparent 75%)',
                filter: 'blur(40px)',
              }}
              aria-hidden="true"
            />

            {/* Imagen central */}
            <div className="relative group z-10 w-[280px] h-[280px] sm:w-[336px] sm:h-[336px] shrink-0">
              <Image
                src="/elementos/envios_lowcost.webp"
                alt="Paquetería LowCost — Envíos DosRuedas Mar del Plata"
                width={336}
                height={336}
                className="w-full h-full object-cover rounded-2xl shadow-[var(--shadow-float)] transition-transform duration-500 group-hover:scale-105"
                priority
              />

              {/* Badge: MISMA JORNADA (top-right) */}
              <div className="absolute -top-3 -right-3 flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 border-brand-yellow-500/40 px-3 py-1.5 rounded-xl shadow-[var(--shadow-glow-yellow)] z-30">
                <Sparkles className="w-3.5 h-3.5 text-brand-yellow-500" />
                <span className="font-subheading text-[11px] uppercase tracking-wider text-white font-bold">
                  MISMA JORNADA
                </span>
              </div>

              {/* Badge: TODO MAR DEL PLATA (bottom-left) */}
              <div className="absolute -bottom-3 -left-3 flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-xl z-30">
                <MapPin className="w-3.5 h-3.5 text-brand-yellow-500" />
                <span className="font-subheading text-[11px] uppercase tracking-wider text-white/85 font-bold">
                  TODO MAR DEL PLATA
                </span>
              </div>
            </div>

            {/* Tarjetas flotantes anguladas */}
            {FLOAT_CARDS.map((card) => (
              <FloatingCard
                key={card.id}
                card={card}
                isPaused={isPaused}
                reduceMotion={reduceMotion}
              />
            ))}

            {/* Micro-card horario — double-bezel */}
            <div className="absolute bottom-0 right-0 z-30 sm:bottom-2 sm:right-2">
              <div className="double-bezel-outer rounded-[20px] !bg-white/10 !border-white/15 !shadow-none p-2 w-[190px]">
                <div className="rounded-[16px] bg-brand-blue-700 border border-white/10 p-3 space-y-2">
                  {/* Header */}
                  <div className="flex items-center gap-1.5 border-b border-white/10 pb-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow-500" />
                    </span>
                    <span className="font-subheading text-[10px] uppercase tracking-widest text-brand-yellow-500 font-bold">
                      HORARIO ACTIVO
                    </span>
                  </div>
                  {/* Datos */}
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-2">
                      <div className="font-subheading text-[9px] uppercase tracking-wider text-white/50 mb-0.5">
                        CORTE
                      </div>
                      <div className="font-display text-base text-brand-yellow-500 leading-none">
                        13:00
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-2">
                      <div className="font-subheading text-[9px] uppercase tracking-wider text-white/50 mb-0.5">
                        ENTREGA
                      </div>
                      <div className="font-display text-base text-brand-yellow-500 leading-none">
                        19:00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}