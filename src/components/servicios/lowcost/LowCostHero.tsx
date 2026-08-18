'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Phone,
  TrendingDown,
  Clock,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Layers,
  Sparkles,
} from 'lucide-react';

export default function LowCostHero() {
  const [activeTab, setActiveTab] = useState<'ahorro' | 'franjas'>('ahorro');

  return (
    <section
      id="lowcost-hero"
      className="relative w-full overflow-hidden bg-brand-blue-700 text-white min-h-[80vh] flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-brand-blue-500/20"
    >
      {/* Pure Vector & Dynamic Procedural Background */}
      <HeroProceduralBackground variant="lowcost" />

      {/* Ghost Wordmark Monumental de Fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display uppercase text-[16vw] leading-none text-white/[0.03] tracking-tighter whitespace-nowrap">
          PAQUETERÍA LOWCOST
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
              <TrendingDown className="h-4 w-4 text-brand-yellow-500 shrink-0" />
              <span>PAQUETERÍA E-COMMERCE Y CADETERÍA ECONÓMICA · MDQ 2026</span>
            </motion.div>

            {/* Monumental Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-display uppercase tracking-tight leading-[0.9] text-white">
              <span className="block">PAQUETERÍA E-COMMERCE Y</span>
              <span className="block text-brand-yellow-500 drop-shadow-[0_2px_16px_rgba(255,236,1,0.35)]">
                ENCOMIENDAS LOWCOST
              </span>
              <span className="block text-2xl sm:text-4xl lg:text-5xl text-brand-blue-100 mt-1">
                EL SERVICIO DE CADETERÍA MÁS RENTABLE
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl font-sans text-brand-blue-50 max-w-2xl mx-auto lg:mx-0 leading-relaxed pl-4 border-l-2 border-brand-yellow-500 font-light">
              Solución en paquetería e-commerce, servicio de cadetería y servicio de encomiendas programadas en Mar del Plata. Pedidos solicitados antes de las 13:00 hs se entregan en el día antes de las 19:00 hs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                href="/cotizar/lowcost"
                id="lowcost-hero-cta-cotizar"
                className="cta-nested-pill bg-brand-yellow-500 text-brand-blue-900 hover:bg-brand-yellow-400 font-bold px-8 py-3.5 cursor-pointer transition-all flex items-center justify-center gap-3 w-full sm:w-auto shadow-accent-sm hover:shadow-cta-glow rounded-full text-sm font-subheading uppercase tracking-wider min-h-[48px]"
              >
                <span>Cotizá tu lote LowCost</span>
                <span className="cta-nested-icon bg-brand-blue-900/10 text-brand-blue-900 rounded-full w-8 h-8 flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </span>
              </Link>

              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="lowcost-hero-cta-whatsapp"
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
                <span className="block font-display text-xl sm:text-2xl text-brand-yellow-500 tabular-nums font-mono">
                  $3.000
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-blue-100">
                  Base 0-3 km 2026
                </span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <span className="block font-display text-xl sm:text-2xl text-brand-yellow-500 tabular-nums">
                  13:00 hs
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-blue-100">
                  Horario de Corte
                </span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <span className="block font-display text-xl sm:text-2xl text-brand-yellow-500 tabular-nums">
                  Antes 19:00 hs
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-blue-100">
                  Entrega Misma Jornada
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
                      CIRCUITOS ACTIVOS MDQ
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold bg-brand-blue-50 text-brand-blue-700 px-2.5 py-1 rounded-lg border border-brand-blue-100">
                    CONSOLIDADO
                  </span>
                </div>

                {/* Interactive Segmented Toggle */}
                <div className="grid grid-cols-2 p-1 bg-brand-blue-50 rounded-xl border border-brand-blue-100">
                  <button
                    type="button"
                    onClick={() => setActiveTab('ahorro')}
                    className={`py-2 px-3 rounded-lg text-xs font-subheading uppercase tracking-wider font-bold transition-all min-h-[44px] cursor-pointer flex items-center justify-center gap-1.5 ${
                      activeTab === 'ahorro'
                        ? 'bg-brand-blue-700 text-brand-yellow-500 shadow-sm'
                        : 'text-brand-blue-700 hover:bg-white/60'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>Ventajas Ahorro</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('franjas')}
                    className={`py-2 px-3 rounded-lg text-xs font-subheading uppercase tracking-wider font-bold transition-all min-h-[44px] cursor-pointer flex items-center justify-center gap-1.5 ${
                      activeTab === 'franjas'
                        ? 'bg-brand-blue-700 text-brand-yellow-500 shadow-sm'
                        : 'text-brand-blue-700 hover:bg-white/60'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>Horario y Corte</span>
                  </button>
                </div>

                {/* Tab Content Display */}
                <div className="min-h-[190px]">
                  <AnimatePresence mode="wait">
                    {activeTab === 'ahorro' ? (
                      <motion.div
                        key="ahorro"
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
                              Paquetería E-Commerce Rentable
                            </p>
                            <p className="text-[11px] text-brand-ink/80 font-sans leading-snug">
                              Optimización en paquetería e-commerce y encomiendas para bajar costos de envío significativamente.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-2.5 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100">
                          <Layers className="w-4 h-4 text-brand-yellow-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-bold font-subheading uppercase tracking-wide text-brand-blue-700">
                              Servicio de Cadetería Flexible
                            </p>
                            <p className="text-[11px] text-brand-ink/80 font-sans leading-snug">
                              Ideal para emprendedores con envíos esporádicos o volúmenes diarios ruteados.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-2.5 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100">
                          <ShieldCheck className="w-4 h-4 text-brand-yellow-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-bold font-subheading uppercase tracking-wide text-brand-blue-700">
                              Seguimiento y Notificaciones
                            </p>
                            <p className="text-[11px] text-brand-ink/80 font-sans leading-snug">
                              Notificaciones directas vía WhatsApp para cada despacho en Mar del Plata.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="franjas"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-3"
                      >
                        <div className="p-3 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-1">
                          <div className="flex justify-between items-center text-xs font-subheading uppercase font-bold text-brand-blue-700">
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-brand-yellow-500" />
                              Corte Solicitud
                            </span>
                            <span className="font-mono text-brand-blue-500 font-bold">13:00 hs Límite</span>
                          </div>
                          <p className="text-[11px] text-brand-ink/75 font-sans">
                            Pedí tu servicio de encomiendas o cadetería antes de las 13:00 hs para entrega el mismo día.
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-1">
                          <div className="flex justify-between items-center text-xs font-subheading uppercase font-bold text-brand-blue-700">
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-brand-yellow-500" />
                              Horario de Entrega
                            </span>
                            <span className="font-mono text-brand-blue-500 font-bold">Antes de 19:00 hs</span>
                          </div>
                          <p className="text-[11px] text-brand-ink/75 font-sans">
                            Entregas continuas ruteadas en el transcurso del día sin elección de hora puntual.
                          </p>
                        </div>

                        <div className="p-2.5 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 flex items-center justify-between text-xs font-subheading uppercase font-bold text-brand-blue-700">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-brand-yellow-500" />
                            Todo Mar del Plata
                          </span>
                          <span className="text-brand-blue-500">100% Cobertura</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer trust strip */}
                <div className="pt-3 border-t border-brand-blue-100 flex items-center justify-between text-[11px] font-subheading uppercase tracking-wider text-brand-blue-600 font-bold">
                  <span>Tarifa Vigente 2026</span>
                  <span className="text-brand-blue-700 font-mono text-xs">Excedente $700/km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
