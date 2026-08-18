'use client';

import React from 'react';
import Link from 'next/link';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Phone,
  Zap,
} from 'lucide-react';

export default function ExpressHero() {

  return (
    <section
      id="express-hero"
      className="relative w-full overflow-hidden bg-brand-blue-700 text-white min-h-[80vh] flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-brand-blue-500/20"
    >
      {/* Pure Vector & Dynamic Procedural Background */}
      <HeroProceduralBackground variant="express" />

      {/* Ghost Wordmark Monumental de Fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display uppercase text-[16vw] leading-none text-white/[0.03] tracking-tighter whitespace-nowrap">
          MENSAJERÍA EN MOTO
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Kinetic Copy & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-subheading font-bold uppercase tracking-widest bg-brand-blue-900/80 backdrop-blur-md border border-brand-yellow-500/30 text-brand-yellow-500 shadow-md"
            >
              <Zap className="h-4 w-4 text-brand-yellow-500 shrink-0" />
              <span>MENSAJERÍA EN MOTO Y ENTREGAS INMEDIATAS · MDQ 2026</span>
            </motion.div>

            {/* Monumental Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-display uppercase tracking-tight leading-[0.9] text-white">
              <span className="block">MENSAJERÍA EN MOTO Y</span>
              <span className="block text-brand-yellow-500 drop-shadow-[0_2px_16px_rgba(255,236,1,0.35)]">
                ENVÍOS EXPRESS
              </span>
              <span className="block text-2xl sm:text-4xl lg:text-5xl text-brand-blue-100 mt-1">
                ENTREGAS INMEDIATAS EN MAR DEL PLATA
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl font-sans text-brand-blue-50 max-w-2xl mx-auto lg:mx-0 leading-relaxed pl-4 border-l-2 border-brand-yellow-500 font-light">
              Especialistas en mensajería en moto y envíos express prioritarios. Asignación de rango horario de entrega de 3 horas (solicitud con 2 hs de anticipación antes de las 15:00 hs). Todo lo que entre en moto (hasta 5 kg y 40x30 cm).
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                href="/cotizar/express"
                id="express-hero-cta-cotizar"
                className="cta-nested-pill bg-brand-yellow-500 text-brand-blue-900 hover:bg-brand-yellow-400 font-bold px-8 py-3.5 cursor-pointer transition-all flex items-center justify-center gap-3 w-full sm:w-auto shadow-accent-sm hover:shadow-cta-glow rounded-full text-sm font-subheading uppercase tracking-wider min-h-[48px]"
              >
                <span>Cotizá tu envío Express</span>
                <span className="cta-nested-icon bg-brand-blue-900/10 text-brand-blue-900 rounded-full w-8 h-8 flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </span>
              </Link>

              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="express-hero-cta-whatsapp"
                className="cta-nested-pill border-2 border-white/60 text-white hover:bg-white/10 font-bold px-8 py-3.5 cursor-pointer transition-all flex items-center justify-center gap-3 w-full sm:w-auto rounded-full text-sm font-subheading uppercase tracking-wider min-h-[48px]"
              >
                <span>Hablar por WhatsApp</span>
                <span className="cta-nested-icon bg-white/10 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <Phone className="h-4 w-4 shrink-0" />
                </span>
              </a>
            </div>

            {/* Quick KPI Chips */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-3 max-w-xl mx-auto lg:mx-0">
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <span className="block font-display text-xl sm:text-2xl text-brand-yellow-500 tabular-nums">
                  3 Horas
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-blue-100">
                  Rango de Entrega
                </span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <span className="block font-display text-xl sm:text-2xl text-brand-yellow-500 tabular-nums">
                  15:00 hs
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-blue-100">
                  Corte Solicitud
                </span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <span className="block font-display text-xl sm:text-2xl text-brand-yellow-500 tabular-nums">
                  Hasta 5 kg
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-blue-100">
                  40x30 cm Límite
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Kinetic Dispatch HUD Animation (5 cols) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-yellow-500/20 via-brand-blue-500/30 to-brand-yellow-500/10 rounded-3xl blur-2xl pointer-events-none" />

            <div className="w-full max-w-md double-bezel-outer bg-brand-blue-50/95 border border-brand-blue-100 p-2.5 rounded-3xl shadow-2xl relative z-10">
              <div className="double-bezel-inner bg-brand-blue-900 text-white p-6 sm:p-7 rounded-2xl border border-brand-blue-500/30 relative overflow-hidden space-y-6">
                {/* Background Radar Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#628FF9_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

                {/* Top Status Header */}
                <div className="flex items-center justify-between border-b border-brand-blue-700/60 pb-3 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow-500" />
                    </span>
                    <span className="font-subheading text-xs uppercase tracking-widest font-bold text-brand-yellow-500">
                      TELEMETRÍA EN VIVO · MDQ
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-bold bg-brand-yellow-500 text-brand-blue-900 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    PRIORIDAD 1
                  </span>
                </div>

                {/* Animated Route & Beacon Visual */}
                <div className="relative py-2 z-10 flex flex-col items-center justify-center">
                  <div className="w-full h-32 relative flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 320 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Background Route Path */}
                      <path
                        d="M 25 50 C 85 15, 140 85, 215 40 L 295 50"
                        stroke="#0950F6"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        opacity="0.35"
                      />
                      {/* Active Route Pulse Stroke */}
                      <path
                        d="M 25 50 C 85 15, 140 85, 215 40 L 295 50"
                        stroke="#FFEC01"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeDasharray="8 8"
                        className="animate-pulse"
                      />

                      {/* Origin Beacon */}
                      <circle cx="25" cy="50" r="9" fill="#0636A5" stroke="#FFFFFF" strokeWidth="2" />
                      <circle cx="25" cy="50" r="3.5" fill="#FFEC01" />

                      {/* Moving Rider Beacon */}
                      <motion.circle
                        r="6"
                        fill="#FFEC01"
                        animate={{
                          cx: [25, 75, 140, 215, 295],
                          cy: [50, 25, 75, 40, 50],
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />

                      {/* Destination Beacon */}
                      <circle cx="295" cy="50" r="9" fill="#0636A5" stroke="#FFFFFF" strokeWidth="2" />
                      <circle cx="295" cy="50" r="3.5" fill="#FFEC01" />
                    </svg>

                    {/* Telemetry Labels */}
                    <div className="absolute left-1 top-1 bg-brand-blue-800/90 border border-brand-blue-500/30 px-2 py-0.5 rounded text-[10px] font-mono text-brand-blue-200">
                      RETIRO EN ORIGEN
                    </div>
                    <div className="absolute right-1 bottom-1 bg-brand-blue-800/90 border border-brand-blue-500/30 px-2 py-0.5 rounded text-[10px] font-mono text-brand-yellow-400 font-bold">
                      ENTREGA DESTINO
                    </div>
                  </div>

                  {/* Kinetic ETA Counter Display */}
                  <div className="text-center mt-3">
                    <span className="text-xs font-subheading uppercase tracking-widest text-brand-blue-200 block">
                      RANGO HORARIO PROGRAMADO
                    </span>
                    <div className="flex items-baseline justify-center gap-2 mt-1">
                      <span className="font-display text-4xl sm:text-5xl text-brand-yellow-500 tracking-tight leading-none drop-shadow-[0_0_20px_rgba(255,236,1,0.35)]">
                        3 HS
                      </span>
                      <span className="font-subheading text-xl text-white tracking-wider uppercase font-bold">
                        RANGO
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3 Metric Chips */}
                <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-brand-blue-700/60 relative z-10 text-center">
                  <div className="bg-brand-blue-800/60 border border-brand-blue-500/30 p-2 rounded-xl">
                    <span className="block text-[9px] font-subheading uppercase tracking-wider text-brand-blue-200">
                      RUTEO
                    </span>
                    <span className="block font-display text-sm sm:text-base text-white mt-0.5">
                      DIRECTO
                    </span>
                  </div>
                  <div className="bg-brand-blue-800/60 border border-brand-blue-500/30 p-2 rounded-xl">
                    <span className="block text-[9px] font-subheading uppercase tracking-wider text-brand-blue-200">
                      CUSTODIA
                    </span>
                    <span className="block font-display text-sm sm:text-base text-brand-yellow-500 mt-0.5">
                      100% EXCLUSIVA
                    </span>
                  </div>
                  <div className="bg-brand-blue-800/60 border border-brand-blue-500/30 p-2 rounded-xl">
                    <span className="block text-[9px] font-subheading uppercase tracking-wider text-brand-blue-200">
                      CONFIRMACIÓN
                    </span>
                    <span className="block font-display text-sm sm:text-base text-white mt-0.5">
                      AL INSTANTE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
