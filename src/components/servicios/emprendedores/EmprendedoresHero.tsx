'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Phone,
  PackageCheck,
  Warehouse,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Boxes,
  MapPin,
} from 'lucide-react';

export default function EmprendedoresHero() {
  const [activeTab, setActiveTab] = useState<'solucion' | 'proceso'>('solucion');

  return (
    <section
      id="emprendedores-hero"
      className="relative w-full overflow-hidden bg-brand-blue-700 text-white min-h-[80vh] flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-brand-blue-500/20"
    >
      {/* Pure Vector & Dynamic Procedural Background */}
      <HeroProceduralBackground variant="3pl" />

      {/* Ghost Wordmark Monumental de Fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display uppercase text-[16vw] leading-none text-white/[0.03] tracking-tighter whitespace-nowrap">
          LOGÍSTICA 3PL MDQ
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
              <Warehouse className="h-4 w-4 text-brand-yellow-500 shrink-0" />
              <span>PAQUETERÍA E-COMMERCE Y LOGÍSTICA 3PL · FRIULI 1972 MDQ</span>
            </motion.div>

            {/* Monumental Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-display uppercase tracking-tight leading-[0.9] text-white">
              <span className="block">PAQUETERÍA Y</span>
              <span className="block text-brand-yellow-500 drop-shadow-[0_2px_16px_rgba(255,236,1,0.35)]">
                ENVÍOS E-COMMERCE
              </span>
              <span className="block text-2xl sm:text-4xl lg:text-5xl text-brand-blue-100 mt-1">
                LOGÍSTICA 3PL EN MAR DEL PLATA
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl font-sans text-brand-blue-50 max-w-2xl mx-auto lg:mx-0 leading-relaxed pl-4 border-l-2 border-brand-yellow-500 font-light">
              Solución en paquetería e-commerce, envíos e-commerce y logística 3PL en Mar del Plata. Ofrecemos E-Commerce Same Day desde nuestro depósito en Friuli 1972 con picking QR, E-Commerce Next Day (24hs), Opción DropOFF (-20% OFF) y Contrareembolso sin cargo extra.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                href="/contacto"
                id="emprendedores-hero-cta-plan"
                className="cta-nested-pill bg-brand-yellow-500 text-brand-blue-900 hover:bg-brand-yellow-400 font-bold px-8 py-3.5 cursor-pointer transition-all flex items-center justify-center gap-3 w-full sm:w-auto shadow-accent-sm hover:shadow-cta-glow rounded-full text-sm font-subheading uppercase tracking-wider min-h-[48px]"
              >
                <span>Solicitar Plan Corporativo</span>
                <span className="cta-nested-icon bg-brand-blue-900/10 text-brand-blue-900 rounded-full w-8 h-8 flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </span>
              </Link>

              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="emprendedores-hero-cta-whatsapp"
                className="cta-nested-pill border-2 border-white/60 text-white hover:bg-white/10 font-bold px-8 py-3.5 cursor-pointer transition-all flex items-center justify-center gap-3 w-full sm:w-auto rounded-full text-sm font-subheading uppercase tracking-wider min-h-[48px]"
              >
                <span>Agendar Asesoría 3PL</span>
                <span className="cta-nested-icon bg-white/10 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <Phone className="h-4 w-4 shrink-0" />
                </span>
              </a>
            </div>

            {/* Quick KPI Chips */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-3 max-w-xl mx-auto lg:mx-0">
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <span className="block font-display text-xl sm:text-2xl text-brand-yellow-500 tabular-nums">
                  Same Day
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-blue-100">
                  Stock Friuli 1972
                </span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <span className="block font-display text-xl sm:text-2xl text-brand-yellow-500 tabular-nums">
                  -20% OFF
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-blue-100">
                  Opción DropOFF
                </span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <span className="block font-display text-xl sm:text-2xl text-brand-yellow-500 tabular-nums">
                  $0 Comis.
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-blue-100">
                  Contrareembolso Gratis
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
                      HUB LOGÍSTICO FRIULI 1972
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold bg-brand-blue-50 text-brand-blue-700 px-2.5 py-1 rounded-lg border border-brand-blue-100">
                    3PL ACTIVO
                  </span>
                </div>

                {/* Interactive Segmented Toggle */}
                <div className="grid grid-cols-2 p-1 bg-brand-blue-50 rounded-xl border border-brand-blue-100">
                  <button
                    type="button"
                    onClick={() => setActiveTab('solucion')}
                    className={`py-2 px-3 rounded-lg text-xs font-subheading uppercase tracking-wider font-bold transition-all min-h-[44px] cursor-pointer flex items-center justify-center gap-1.5 ${
                      activeTab === 'solucion'
                        ? 'bg-brand-blue-700 text-brand-yellow-500 shadow-sm'
                        : 'text-brand-blue-700 hover:bg-white/60'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>Modalidades</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('proceso')}
                    className={`py-2 px-3 rounded-lg text-xs font-subheading uppercase tracking-wider font-bold transition-all min-h-[44px] cursor-pointer flex items-center justify-center gap-1.5 ${
                      activeTab === 'proceso'
                        ? 'bg-brand-blue-700 text-brand-yellow-500 shadow-sm'
                        : 'text-brand-blue-700 hover:bg-white/60'
                    }`}
                  >
                    <Boxes className="w-3.5 h-3.5 shrink-0" />
                    <span>Flujo Operativo</span>
                  </button>
                </div>

                {/* Tab Content Display */}
                <div className="min-h-[190px]">
                  <AnimatePresence mode="wait">
                    {activeTab === 'solucion' ? (
                      <motion.div
                        key="solucion"
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
                              E-Commerce Same Day
                            </p>
                            <p className="text-[11px] text-brand-ink/80 font-sans leading-snug">
                              Stock guardado en Friuli 1972; al vender, sale empaquetado inmediatamente con picking QR.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-2.5 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100">
                          <PackageCheck className="w-4 h-4 text-brand-yellow-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-bold font-subheading uppercase tracking-wide text-brand-blue-700">
                              Opción DropOFF (-20% OFF)
                            </p>
                            <p className="text-[11px] text-brand-ink/80 font-sans leading-snug">
                              Traé tus envíos a Friuli 1972 y obtené un 20% de descuento en la tarifa.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-2.5 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100">
                          <ShieldCheck className="w-4 h-4 text-brand-yellow-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-bold font-subheading uppercase tracking-wide text-brand-blue-700">
                              Contrareembolso Sin Cargo Extra
                            </p>
                            <p className="text-[11px] text-brand-ink/80 font-sans leading-snug">
                              Cobramos a tu cliente en destino sin comisiones extra sobre la venta.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="proceso"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-3"
                      >
                        <div className="p-3 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-1">
                          <div className="flex justify-between items-center text-xs font-subheading uppercase font-bold text-brand-blue-700">
                            <span>1. Recepción en Friuli 1972</span>
                            <span className="text-brand-blue-500 font-mono">Ingreso</span>
                          </div>
                          <p className="text-[11px] text-brand-ink/75 font-sans">
                            Recibimos tu stock en nuestro depósito central o via DropOFF con 20% OFF.
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-1">
                          <div className="flex justify-between items-center text-xs font-subheading uppercase font-bold text-brand-blue-700">
                            <span>2. Picking por QR & Packing</span>
                            <span className="text-brand-blue-500 font-mono">Picking</span>
                          </div>
                          <p className="text-[11px] text-brand-ink/75 font-sans">
                            Armado y etiquetado inmediato al registrarse la venta en tu e-commerce.
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-1">
                          <div className="flex justify-between items-center text-xs font-subheading uppercase font-bold text-brand-blue-700">
                            <span>3. Entrega Same Day / 24hs</span>
                            <span className="text-brand-blue-500 font-mono">Despacho</span>
                          </div>
                          <p className="text-[11px] text-brand-ink/75 font-sans">
                            Distribución en Mar del Plata con cobro contrareembolso opcional sin cargo.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer trust strip */}
                <div className="pt-3 border-t border-brand-blue-100 flex items-center justify-between text-[11px] font-subheading uppercase tracking-wider text-brand-blue-600 font-bold">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-yellow-500" />
                    Depósito Friuli 1972 MDQ
                  </span>
                  <span className="text-brand-blue-700 font-mono text-xs">Atención B2B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
