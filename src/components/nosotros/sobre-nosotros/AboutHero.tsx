'use client';

import React from 'react';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import CTANestedPill from '@/components/ui/CTANestedPill';
import { motion, useReducedMotion } from 'motion/react';
import { Sparkles, Clock, CheckCircle2, LocateFixed, Bike, MapPin } from 'lucide-react';

const METRICS = [
  { value: '+7', label: 'Años en MDQ' },
  { value: '100%', label: 'Flota propia' },
  { value: '19:00', label: 'Última entrega' },
];

const HUB_CHIPS = [
  { icon: Clock, text: 'Corte 13:00', position: '-top-5 -left-6 -rotate-2', delay: '0s' },
  { icon: CheckCircle2, text: 'Entrega 19:00', position: '-top-4 -right-4 rotate-2', delay: '1.2s' },
  { icon: LocateFixed, text: 'Rastreo en vivo', position: '-bottom-6 -left-8 -rotate-1', delay: '2.4s' },
  { icon: Bike, text: 'Flota propia', position: '-bottom-5 -right-6 rotate-1', delay: '3.6s' },
];

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about-hero"
      className="relative min-h-[90dvh] flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-brand-blue-500 text-white border-b border-white/10"
    >
      {/* Dynamic procedural background */}
      <HeroProceduralBackground variant="default" />

      {/* Watermark: LOGÍSTICA SOBERANA */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-display text-[18vw] leading-none text-white/[0.035] uppercase -rotate-6 whitespace-nowrap">
          LOGÍSTICA SOBERANA
        </span>
      </div>

      {/* Halo glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-yellow-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30vw] h-[30vw] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Copy Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8"
          >
            {/* Status Badge with pulsing yellow dot */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/10 text-white text-xs sm:text-sm font-subheading uppercase tracking-widest backdrop-blur-md shadow-elevated transform -rotate-1">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span
                  className={
                    shouldReduceMotion
                      ? 'absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-40'
                      : 'animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75'
                  }
                  style={{ animationDuration: '2s' }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow-500" />
              </span>
              <span>LOGÍSTICA SOBERANA · MAR DEL PLATA 2026</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.2rem] font-display uppercase tracking-tight leading-[0.98] text-white">
              <span className="block">LÍDERES EN</span>
              <span className="block">LOGÍSTICA DE</span>
              <span className="inline-block bg-brand-yellow-500 text-brand-blue-900 px-3 py-1 rounded-md transform -rotate-1 mt-1 font-display tracking-tight shadow-glow-yellow">
                ÚLTIMA MILLA
              </span>
            </h1>

            {/* Description matching official profile */}
            <p className="text-base sm:text-lg lg:text-xl font-sans text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Con más de 7 años de trayectoria en Mar del Plata, transformamos el despacho de tus productos en un motor de crecimiento para emprendedores, PyMEs y comercios locales con flota propia y compromiso humano.
            </p>

            {/* Conversion Primary CTA + dispatch line */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-2 justify-center lg:justify-start">
              <CTANestedPill
                href="/cotizar/express"
                size="large"
                iconClassName="bg-brand-blue-700 text-brand-yellow-500 group-hover:bg-brand-blue-900 group-hover:rotate-12 group-hover:translate-x-1"
              >
                Cotizá tu envío en vivo
              </CTANestedPill>
              <p className="font-mono text-xs sm:text-sm text-white/80 uppercase tracking-wider tabular-nums flex items-center justify-center gap-2">
                <span className="hidden sm:inline w-6 h-px bg-brand-yellow-500/50" aria-hidden="true" />
                Corte 13:00 · Entrega mismo día
              </p>
            </div>

            {/* Propósito Operativo 2026 (nested glass over brand-blue-900) */}
            <div className="rounded-[28px] bg-white/10 backdrop-blur-md border border-white/20 p-2 shadow-elevated max-w-xl mx-auto lg:mx-0">
              <div className="rounded-[20px] bg-brand-blue-900 p-5 sm:p-6 border border-white/10 text-white space-y-2 relative overflow-hidden">
                <Sparkles className="absolute -right-4 -bottom-4 w-24 h-24 text-white/[0.04] pointer-events-none" />
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Sparkles className="h-4 w-4 text-brand-yellow-500 shrink-0" />
                  <h3 className="text-xs font-subheading uppercase tracking-wider text-brand-yellow-500 font-bold">
                    PROPÓSITO OPERATIVO 2026
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-sans text-center lg:text-left">
                  Conectamos tiendas online, PyMEs y emprendedores de General Pueyrredón mediante una flota motorizada 100% propia, soporte en tiempo real y cumplimiento estricto de horarios desde nuestro Hub Central en Friuli 1972.
                </p>
              </div>
            </div>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="p-3.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center"
                >
                  <span className="block font-mono text-2xl sm:text-3xl font-bold text-brand-yellow-500 tabular-nums">
                    {metric.value}
                  </span>
                  <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-white/90 mt-0.5">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Hub Logístico FRIULI 1972 con anillos y chips (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Ambient Backlight Glow */}
              <div className="absolute -inset-10 bg-gradient-to-r from-brand-yellow-500/15 via-brand-blue-500/30 to-brand-yellow-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

              {/* Dotted Orbit Rings */}
              <svg
                className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <circle cx="50" cy="50" r="42" fill="none" stroke="#FFEC01" strokeWidth="0.35" strokeDasharray="1.5 2.5" />
                <circle cx="50" cy="50" r="33" fill="none" stroke="#FFFFFF" strokeWidth="0.25" strokeDasharray="1 2" opacity="0.7" />
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="#FFEC01"
                  strokeWidth="0.4"
                  className={shouldReduceMotion ? '' : 'animate-ping'}
                  style={{ animationDuration: '3s' }}
                />
              </svg>

              {/* Hub Card: FRIULI 1972 */}
              <div className="relative rounded-[28px] bg-white/10 backdrop-blur-md border border-white/20 p-2 shadow-elevated">
                <div className="rounded-[20px] bg-brand-blue-900 text-white p-6 sm:p-8 border border-white/10 relative overflow-hidden">
                  {/* Watermark glyph */}
                  <span
                    className="absolute -right-6 -bottom-8 font-display text-[8rem] leading-none text-white/[0.04] uppercase select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    HUB
                  </span>

                  <div className="flex items-center gap-2 relative">
                    <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                      <span
                        className={
                          shouldReduceMotion
                            ? 'absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-40'
                            : 'animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75'
                        }
                        style={{ animationDuration: '2s' }}
                      />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-yellow-500" />
                    </span>
                    <span className="font-subheading text-xs uppercase tracking-widest text-brand-yellow-500 font-bold">
                      HUB LOGÍSTICO
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-4xl sm:text-5xl uppercase tracking-tight text-white leading-none">
                    FRIULI <span className="text-brand-yellow-500">1972</span>
                  </h3>
                  <p className="mt-2 font-subheading text-sm sm:text-base tracking-wider text-white/80 uppercase font-bold">
                    BASE CENTRAL · MAR DEL PLATA
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-white/70 uppercase tracking-wider tabular-nums relative">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-brand-yellow-500" />
                      MDQ · GRAL. PUEYRREDÓN
                    </span>
                    <span className="text-brand-yellow-500 font-bold">2026</span>
                  </div>
                </div>
              </div>

              {/* Floating chips (desktop) */}
              {HUB_CHIPS.map((chip) => (
                <div
                  key={chip.text}
                  className={`absolute ${chip.position} hidden lg:flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 shadow-elevated z-20 animate-float-slow`}
                  style={{ animationDelay: chip.delay }}
                >
                  <chip.icon className="h-3.5 w-3.5 text-brand-yellow-500 shrink-0" />
                  <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-white font-bold">
                    {chip.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Floating chips (mobile stack) */}
            <div className="mt-6 grid grid-cols-2 gap-3 lg:hidden">
              {HUB_CHIPS.map((chip) => (
                <div
                  key={chip.text}
                  className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 shadow-elevated justify-center"
                >
                  <chip.icon className="h-3.5 w-3.5 text-brand-yellow-500 shrink-0" />
                  <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-white font-bold">
                    {chip.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Kinetic Banner: DOS RUEDAS LOGÍSTICA SOBERANA */}
        <div className="mt-16 lg:mt-24 border-y border-white/15 bg-white/[0.03] py-8 sm:py-10 text-center">
          <p className="font-mono text-[10px] sm:text-xs text-brand-yellow-500 uppercase tracking-[0.35em] mb-3">
            NODO OPERATIVO · FRIULI 1972
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
            DOS RUEDAS{' '}
            <span className="text-brand-yellow-500 drop-shadow-[0_0_18px_rgba(255,236,1,0.5)]">
              LOGÍSTICA SOBERANA
            </span>
          </h2>
        </div>

        {/* Corte / Entrega Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/15 p-5 sm:p-6 shadow-elevated">
            <div className="flex items-center justify-between gap-3">
              <span className="w-9 h-9 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/30 flex items-center justify-center shrink-0">
                <Clock className="h-4 w-4 text-brand-yellow-500" />
              </span>
              <span className="font-subheading text-[10px] uppercase tracking-widest text-white/60 font-bold">
                CORTE DIARIO
              </span>
            </div>
            <div className="mt-3 font-mono text-4xl sm:text-5xl font-bold text-brand-yellow-500 tabular-nums">
              13:00
            </div>
            <p className="mt-2 text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
              Enviá antes de la 13 y tu pedido sale el mismo día desde nuestro Hub en Friuli 1972.
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/15 p-5 sm:p-6 shadow-elevated">
            <div className="flex items-center justify-between gap-3">
              <span className="w-9 h-9 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/30 flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-4 w-4 text-brand-yellow-500" />
              </span>
              <span className="font-subheading text-[10px] uppercase tracking-widest text-white/60 font-bold">
                ÚLTIMA ENTREGA
              </span>
            </div>
            <div className="mt-3 font-mono text-4xl sm:text-5xl font-bold text-brand-yellow-500 tabular-nums">
              19:00
            </div>
            <p className="mt-2 text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
              Confirmamos cada reparto con seguimiento en tiempo real hasta la puerta de destino.
            </p>
          </div>
        </div>

        {/* Mono footer */}
        <p className="mt-8 text-center font-mono text-[11px] sm:text-xs text-white/70 uppercase tracking-wider tabular-nums">
          Nodo · Friuli 1972 · MDQ · 2026 · Operativa verificada
        </p>
      </div>

      {/* Yellow hairline bottom */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-brand-yellow-500/40" aria-hidden="true" />
    </section>
  );
}