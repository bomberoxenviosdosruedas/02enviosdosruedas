'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Phone,
  Zap,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  QrCode,
  Award,
} from 'lucide-react';

export default function FlexHero() {
  const [activeTab, setActiveTab] = useState<'ventajas' | 'integracion'>('ventajas');

  return (
    <section
      id="flex-hero"
      className="relative w-full overflow-hidden bg-brand-blue-700 text-white min-h-[80vh] flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-brand-blue-500/20"
    >
      {/* Pure Vector & Dynamic Procedural Background */}
      <HeroProceduralBackground variant="flex" />

      {/* Ghost Wordmark Monumental de Fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display uppercase text-[16vw] leading-none text-white/[0.03] tracking-tighter whitespace-nowrap">
          LOGÍSTICA FLEX
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
              <Award className="h-4 w-4 text-brand-yellow-500 shrink-0" />
              <span>ENVÍOS FLEX Y REPARTO MERCADOLIBRE · MDQ 2026</span>
            </motion.div>

            {/* Monumental Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-display uppercase tracking-tight leading-[0.9] text-white">
              <span className="block">ENVÍOS FLEX Y</span>
              <span className="block text-brand-yellow-500 drop-shadow-[0_2px_16px_rgba(255,236,1,0.35)]">
                REPARTO MERCADOLIBRE
              </span>
              <span className="block text-2xl sm:text-4xl lg:text-5xl text-brand-blue-100 mt-1">
                LOGÍSTICA FLEX CON 100% CUMPLIMIENTO
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl font-sans text-brand-blue-50 max-w-2xl mx-auto lg:mx-0 leading-relaxed pl-4 border-l-2 border-brand-yellow-500 font-light">
              Líderes en envíos flex, reparto MercadoLibre y logística flex en Mar del Plata. SLA real con 100% de entregas en el día antes de las 20:00 hs para proteger la reputación de MercadoLíder. Horario de corte 15:00 hs y múltiples retiros diarios sin mínimos de paquetes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                href="/cotizar/lowcost"
                id="flex-hero-cta-activar"
                className="cta-nested-pill bg-brand-yellow-500 text-brand-blue-900 hover:bg-brand-yellow-400 font-bold px-8 py-3.5 cursor-pointer transition-all flex items-center justify-center gap-3 w-full sm:w-auto shadow-accent-sm hover:shadow-cta-glow rounded-full text-sm font-subheading uppercase tracking-wider min-h-[48px]"
              >
                <span>Activar Envíos Flex</span>
                <span className="cta-nested-icon bg-brand-blue-900/10 text-brand-blue-900 rounded-full w-8 h-8 flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </span>
              </Link>

              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="flex-hero-cta-whatsapp"
                className="cta-nested-pill border-2 border-white/60 text-white hover:bg-white/10 font-bold px-8 py-3.5 cursor-pointer transition-all flex items-center justify-center gap-3 w-full sm:w-auto rounded-full text-sm font-subheading uppercase tracking-wider min-h-[48px]"
              >
                <span>Contactar Asesor Flex</span>
                <span className="cta-nested-icon bg-white/10 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <Phone className="h-4 w-4 shrink-0" />
                </span>
              </a>
            </div>

            {/* Quick KPI Chips */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-3 max-w-xl mx-auto lg:mx-0">
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <span className="block font-display text-xl sm:text-2xl text-brand-yellow-500 tabular-nums">
                  15:00 hs
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-blue-100">
                  Horario de Corte
                </span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <span className="block font-display text-xl sm:text-2xl text-brand-yellow-500 tabular-nums">
                  100%
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-blue-100">
                  Entregas en el Día
                </span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <span className="block font-display text-xl sm:text-2xl text-brand-yellow-500 tabular-nums">
                  Sin Mínimos
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-blue-100">
                  Retiros Múltiples
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Double Bezel Mini-Comparador Card (5 cols) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="double-bezel-outer bg-brand-blue-50/95 border border-brand-blue-100 p-2 rounded-2xl shadow-2xl">
              <div className="double-bezel-inner bg-white p-5 sm:p-7 rounded-xl border border-brand-blue-50/50 shadow-sm text-brand-blue-700 space-y-5 relative overflow-hidden">
                {/* Header with status badge */}
                <div className="flex items-center justify-between border-b border-brand-blue-100/80 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow-500" />
                    </span>
                    <span className="font-subheading text-xs uppercase tracking-wider font-bold text-brand-blue-700">
                      INTEGRACIÓN LOGÍSTICA FLEX
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold bg-brand-blue-50 text-brand-blue-700 px-2.5 py-1 rounded-lg border border-brand-blue-100">
                    SLA 100%
                  </span>
                </div>

                {/* Interactive Segmented Toggle */}
                <div className="grid grid-cols-2 p-1 bg-brand-blue-50 rounded-xl border border-brand-blue-100">
                  <button
                    type="button"
                    onClick={() => setActiveTab('ventajas')}
                    className={`py-2 px-3 rounded-lg text-xs font-subheading uppercase tracking-wider font-bold transition-all min-h-[44px] cursor-pointer flex items-center justify-center gap-1.5 ${
                      activeTab === 'ventajas'
                        ? 'bg-brand-blue-700 text-brand-yellow-500 shadow-sm'
                        : 'text-brand-blue-700 hover:bg-white/60'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>Ventajas MercadoLíder</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('integracion')}
                    className={`py-2 px-3 rounded-lg text-xs font-subheading uppercase tracking-wider font-bold transition-all min-h-[44px] cursor-pointer flex items-center justify-center gap-1.5 ${
                      activeTab === 'integracion'
                        ? 'bg-brand-blue-700 text-brand-yellow-500 shadow-sm'
                        : 'text-brand-blue-700 hover:bg-white/60'
                    }`}
                  >
                    <QrCode className="w-3.5 h-3.5 shrink-0" />
                    <span>Proceso QR</span>
                  </button>
                </div>

                {/* Tab Content Display */}
                <div className="min-h-[190px]">
                  <AnimatePresence mode="wait">
                    {activeTab === 'ventajas' ? (
                      <motion.div
                        key="ventajas"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-3"
                      >
                        <div className="flex items-start gap-3 p-2.5 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100">
                          <CheckCircle2 className="w-4 h-4 text-brand-yellow-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-bold font-subheading uppercase tracking-wide text-brand-blue-700">
                              Corte a las 15:00 hs
                            </p>
                            <p className="text-[11px] text-brand-ink/80 font-sans leading-snug">
                              Procesamos tus envíos flex recibidos hasta las 15:00 hs con entregas aseguradas antes de las 20:00 hs.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-2.5 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100">
                          <ShieldCheck className="w-4 h-4 text-brand-yellow-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-bold font-subheading uppercase tracking-wide text-brand-blue-700">
                              Protección de Reputación
                            </p>
                            <p className="text-[11px] text-brand-ink/80 font-sans leading-snug">
                              100% de entregas en el día para mantener tu reputación y medalla de MercadoLíder impecable.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-2.5 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100">
                          <Zap className="w-4 h-4 text-brand-yellow-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-bold font-subheading uppercase tracking-wide text-brand-blue-700">
                              Sin Mínimos y Múltiples Retiros
                            </p>
                            <p className="text-[11px] text-brand-ink/80 font-sans leading-snug">
                              Retiramos en tu local cuantas veces sea necesario en el día sin mínimo de paquetes.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="integracion"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-3"
                      >
                        <div className="p-3 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-1">
                          <div className="flex justify-between items-center text-xs font-subheading uppercase font-bold text-brand-blue-700">
                            <span>1. Imprimís tus etiquetas Flex</span>
                            <span className="text-brand-blue-500 font-mono">Paso 1</span>
                          </div>
                          <p className="text-[11px] text-brand-ink/75 font-sans">
                            Generás las etiquetas de MercadoLibre con código QR habitual.
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-1">
                          <div className="flex justify-between items-center text-xs font-subheading uppercase font-bold text-brand-blue-700">
                            <span>2. Escaneo en mano</span>
                            <span className="text-brand-blue-500 font-mono">Paso 2</span>
                          </div>
                          <p className="text-[11px] text-brand-ink/75 font-sans">
                            Nuestro cadete escanea el paquete con la app oficial al retirar en tu dirección.
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-1">
                          <div className="flex justify-between items-center text-xs font-subheading uppercase font-bold text-brand-blue-700">
                            <span>3. Entrega Same-Day</span>
                            <span className="text-brand-blue-500 font-mono">Paso 3</span>
                          </div>
                          <p className="text-[11px] text-brand-ink/75 font-sans">
                            Entrega final antes de las 20:00 hs asegurando tu reputación.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer trust strip */}
                <div className="pt-3 border-t border-brand-blue-100 flex items-center justify-between text-[11px] font-subheading uppercase tracking-wider text-brand-blue-600 font-bold">
                  <span>Reparto MercadoLibre MDQ</span>
                  <span className="text-brand-blue-700 font-mono text-xs">Corte 15:00 hs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
