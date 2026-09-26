'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  MapPin,
  Clock,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Building2,
  Navigation,
} from 'lucide-react';
import HeroProceduralBackground from '@/src/components/ui/HeroProceduralBackground';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';

const METRICS = [
  { value: '+7', label: 'Años Operando' },
  { value: '100%', label: 'Flota Propia' },
  { value: '+10k', label: 'Envíos Exitosos' },
];

const HUB_CHIPS = [
  {
    icon: Building2,
    text: 'Friuli 1972 · Base Física',
    position: 'top-2 -left-6',
    delay: '0s',
  },
  {
    icon: Navigation,
    text: 'Flota Propia Activa',
    position: 'bottom-8 -right-6',
    delay: '0.4s',
  },
  {
    icon: Phone,
    text: '223 660-2699 · WApp Directo',
    position: 'top-1/2 -left-10 transform -translate-y-1/2',
    delay: '0.8s',
  },
];

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about-hero"
      aria-label="Presentación institucional Envíos DosRuedas"
      className="relative w-full overflow-hidden bg-brand-blue-700 text-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 border-b border-white/10"
    >
      {/* Dynamic Procedural Background */}
      <HeroProceduralBackground variant="default" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Grid: 7 cols (text) + 5 cols (visual card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Pill + Title + Paragraph + Metrics (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Glowing Pill Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-wider bg-brand-blue-700 text-brand-yellow-500 border border-brand-yellow-500/40 -rotate-1 shadow-glow-yellow backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-brand-yellow-500 shrink-0" />
              <span>NUESTRA IDENTIDAD · MAR DEL PLATA 2026</span>
            </div>

            {/* Title with Knockout Badge */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-tight text-white leading-[0.92]">
              <span>MÁS QUE CADETERÍA, </span>
              <span className="inline-block bg-brand-yellow-500 text-brand-blue-900 px-3 py-1 rounded-lg transform -rotate-1 shadow-glow-yellow mx-1">
                SOMOS LOGÍSTICA
              </span>
              <span className="block sm:inline"> DE CONFIANZA</span>
            </h1>

            {/* Description box */}
            <div className="space-y-3 max-w-2xl mx-auto lg:mx-0">
              <p className="text-lg sm:text-xl font-subheading uppercase tracking-wide text-brand-yellow-500">
                MÁS DE 7 AÑOS RECORRIENDO MAR DEL PLATA CON FLOTA PROPIA Y COMPROMISO REAL.
              </p>
              <div className="p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                <p className="text-sm sm:text-base font-sans text-white/90 leading-relaxed font-light text-center lg:text-left">
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
                  <span className="block font-subheading text-2xs sm:text-xs uppercase tracking-wider text-white/90 mt-0.5">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Hub Logístico FRIULI 1972 (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <DoubleBezelCard variant="dark">
                <div className="text-white p-6 sm:p-8 rounded-xl border border-white/20 relative overflow-hidden space-y-4">
                  <div className="flex items-center gap-2 relative">
                    <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-yellow-500" />
                    </span>
                    <span className="font-subheading text-xs uppercase tracking-widest text-brand-yellow-500">
                      HUB LOGÍSTICO
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-4xl sm:text-5xl uppercase tracking-tight text-white leading-none">
                    FRIULI <span className="text-brand-yellow-500">1972</span>
                  </h3>
                  <p className="font-subheading text-sm sm:text-base tracking-wider text-white/80 uppercase">
                    BASE CENTRAL · MAR DEL PLATA
                  </p>

                  <div className="pt-4 border-t border-white/15 flex items-center justify-between text-2xs font-mono text-white/70 uppercase tracking-wider tabular-nums relative">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-brand-yellow-500" />
                      MDQ · GRAL. PUEYRREDÓN
                    </span>
                    <span className="text-brand-yellow-500">2026</span>
                  </div>
                </div>
              </DoubleBezelCard>

              {/* Floating chips (desktop) */}
              {HUB_CHIPS.map((chip) => (
                <div
                  key={chip.text}
                  className={`absolute ${chip.position} hidden lg:flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 shadow-lg z-20`}
                >
                  <chip.icon className="h-3.5 w-3.5 text-brand-yellow-500 shrink-0" />
                  <span className="font-subheading text-2xs sm:text-xs uppercase tracking-wider text-white">
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
                  className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 justify-center"
                >
                  <chip.icon className="h-3.5 w-3.5 text-brand-yellow-500 shrink-0" />
                  <span className="font-subheading text-2xs sm:text-xs uppercase tracking-wider text-white">
                    {chip.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Kinetic Banner */}
        <div className="mt-16 lg:mt-24 border-y border-white/15 bg-white/[0.03] py-8 sm:py-10 text-center">
          <p className="font-mono text-2xs sm:text-xs text-brand-yellow-500 uppercase tracking-[0.35em] mb-3">
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
          <DoubleBezelCard>
            <div className="flex items-center justify-between gap-3">
              <span className="w-9 h-9 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/30 flex items-center justify-center shrink-0">
                <Clock className="h-4 w-4 text-brand-yellow-500" />
              </span>
              <span className="font-subheading text-2xs uppercase tracking-widest text-brand-blue-700">
                CORTE DIARIO
              </span>
            </div>
            <div className="mt-3 font-mono text-4xl sm:text-5xl font-bold text-brand-blue-700 tabular-nums">
              13:00
            </div>
            <p className="mt-2 text-xs sm:text-sm text-brand-blue-700/80 font-sans leading-relaxed">
              Enviá antes de las 13 y tu pedido sale el mismo día desde nuestro Hub en Friuli 1972.
            </p>
          </DoubleBezelCard>

          <DoubleBezelCard>
            <div className="flex items-center justify-between gap-3">
              <span className="w-9 h-9 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/30 flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-4 w-4 text-brand-yellow-500" />
              </span>
              <span className="font-subheading text-2xs uppercase tracking-widest text-brand-blue-700">
                ÚLTIMA ENTREGA
              </span>
            </div>
            <div className="mt-3 font-mono text-4xl sm:text-5xl font-bold text-brand-blue-700 tabular-nums">
              19:00
            </div>
            <p className="mt-2 text-xs sm:text-sm text-brand-blue-700/80 font-sans leading-relaxed">
              Confirmamos cada reparto con seguimiento en tiempo real hasta la puerta de destino.
            </p>
          </DoubleBezelCard>
        </div>

        {/* Mono footer */}
        <p className="mt-8 text-center font-mono text-2xs sm:text-xs text-white/70 uppercase tracking-wider tabular-nums">
          Nodo · Friuli 1972 · MDQ · 2026 · Operativa verificada
        </p>
      </div>
    </section>
  );
}