'use client';

import React, { useState } from 'react';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import CTANestedPill from '@/components/ui/CTANestedPill';
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
  return (
    <section
      id="lowcost-hero"
      className="relative w-full overflow-hidden bg-brand-blue-700 text-white min-h-[85vh] flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10"
    >
      {/* Procedural Vignette & Radial Light */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0" style="background:linear-gradient(135deg, #021440 0%, #04236B 35%, #0636A5 75%, #00277C 100%)"></div>
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none" style="background:radial-gradient(circle, rgba(9,80,246,0.35) 0%, rgba(6,54,165,0.15) 50%, transparent 70%);filter:blur(80px)"></div>
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none" style="background:radial-gradient(circle, rgba(255,236,1,0.22) 0%, rgba(255,236,1,0.06) 45%, transparent 70%);filter:blur(90px)"></div>
        <div className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] rounded-full pointer-events-none" style="background:radial-gradient(circle, rgba(6,54,165,0.4) 0%, transparent 70%);filter:blur(100px)"></div>
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="hero-procedural-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M 48 0 L 0 0 0 48" fill="none" stroke="#FFFFFF" stroke-width="0.75" stroke-dasharray="2,6"></path><circle cx="0" cy="0" r="1.5" fill="#FFEC01"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#hero-procedural-grid)"></rect></svg>
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 600" preserveAspectRatio="none"><circle cx="1100" cy="300" r="160" fill="none" stroke="#FFEC01" stroke-width="1" stroke-dasharray="4 8"></circle><circle cx="1100" cy="300" r="280" fill="none" stroke="#628FF9" stroke-width="1" stroke-dasharray="6 12"></circle><circle cx="1100" cy="300" r="400" fill="none" stroke="#FFFFFF" stroke-width="0.75" stroke-dasharray="4 16"></circle><line x1="200" y1="300" x2="1100" y2="300" stroke="#FFEC01" stroke-width="1.5" stroke-dasharray="8 8"></line></svg>
      </div>

      {/* Ghost Wordmark Monumental de Fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display uppercase text-[16vw] leading-none text-white/[0.035] tracking-tighter whitespace-nowrap">
          PAQUETERÍA LOWCOST
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Kinetic Copy & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Speed Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rotate-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-subheading font-bold uppercase tracking-widest bg-brand-blue-900/90 border border-brand-yellow-500/40 text-brand-yellow-500 shadow-glow-yellow backdrop-blur-md"
            >
              <TrendingDown className="h-4 w-4 text-brand-yellow-500 shrink-0" />
              <span>PAQUETERÍA E-COMMERCE Y CADETERÍA ECONÓMICA · MDQ 2026</span>
            </motion.div>

            {/* Monumental Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-display uppercase tracking-tight leading-[0.98] text-white">
              <span className="block">PAQUETERÍA E-COMMERCE Y</span>
              <span className="block text-brand-yellow-500 drop-shadow-[0_2px_16px_rgba(255,236,1,0.35)]">
                ENCOMIENDAS LOWCOST
              </span>
              <span className="block text-2xl sm:text-4xl lg:text-5xl text-blue-100 mt-1">
                EL SERVICIO DE CADETERÍA MÁS RENTABLE
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl font-sans text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Solución en paquetería e-commerce, servicio de cadetería y servicio de encomiendas programadas en Mar del Plata. Pedidos solicitados antes de las 13:00 hs se entregan en el día antes de las 19:00 hs.
            </p>

            {/* CTAs using canonical CTANestedPill */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
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
            </div>

            {/* Quick KPI Chips */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-3 max-w-xl mx-auto lg:mx-0">
              <div className="p-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <span className="block font-mono font-bold text-xl sm:text-2xl text-brand-yellow-500 tabular-nums">
                  $3.000
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-blue-100 mt-0.5">
                  Base 0-3 km 2026
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <span className="block font-mono font-bold text-xl sm:text-2xl text-brand-yellow-500 tabular-nums">
                  13:00 hs
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-blue-100 mt-0.5">
                  Horario de Corte
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <span className="block font-mono font-bold text-xl sm:text-2xl text-brand-yellow-500 tabular-nums">
                  Antes 19:00 hs
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-blue-100 mt-0.5">
                  Entrega Misma Jornada
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Kinetic Brand HUD & Logo (5 cols) */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-brand-yellow-500/20 via-brand-blue-500/35 to-brand-yellow-500/15 rounded-full blur-3xl pointer-events-none"></div>

            {/* Top Status Flag: Flota Activa & Tarifa Consolidada */}
            <div className="flex items-center gap-2 mb-3 z-20">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full flex items-center gap-2 border border-brand-yellow-500/30 shadow-sm px-4 py-1.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-yellow-500"></span>
                </span>
                <span className="font-subheading text-xs tracking-widest text-brand-yellow-400 font-bold uppercase">
                  CIRCUITOS CONSOLIDADOS · MDQ
                </span>
              </div>
              <span className="font-mono text-[11px] font-bold bg-brand-yellow-500 text-brand-blue-900 px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                TARIFA LOWCOST
              </span>
            </div>

            {/* Central Visual: Logo Dos Ruedas con Órbitas Cinemáticas */}
            <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center animate-float-slow z-10">
              <div className="absolute inset-0 rounded-full bg-brand-blue-500/20 blur-2xl pointer-events-none"></div>
              <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center group">
                <img
                  src="/logo-envios-simplified.webp"
                  alt="Envíos DosRuedas - Paquetería LowCost Encomiendas y Cadetería MDQ"
                  className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,16,53,0.7)] filter group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-3 right-0 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl border border-brand-yellow-500/40 shadow-lg flex items-center gap-1.5 z-20 px-3 py-1.5">
                <svg className="w-3.5 h-3.5 text-brand-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <span className="font-subheading text-xs tracking-wider text-white uppercase font-bold">MISMA JORNADA</span>
              </div>
              <div className="absolute -bottom-2 -left-3 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl border border-white/20 shadow-lg flex items-center gap-1.5 z-20 px-3 py-1.5">
                <svg className="w-3.5 h-3.5 text-brand-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="font-subheading text-xs tracking-wider text-blue-100 uppercase font-bold">TODO MAR DEL PLATA</span>
              </div>
            </div>

            {/* Kinetic Typography Banner Bajo el Logo */}
            <div className="text-center mt-6 z-10 space-y-1">
              <div className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] uppercase tracking-tight text-white leading-none drop-shadow-md">
                DOS RUEDAS <span className="text-brand-yellow-500 drop-shadow-[0_0_18px_rgba(255,236,1,0.5)]">LOWCOST</span>
              </div>
              <div className="font-subheading text-base sm:text-lg tracking-widest text-brand-yellow-400 uppercase font-bold flex items-center justify-center gap-2">
                <span>MÁXIMA RENTABILIDAD</span>
                <span className="text-white/40">·</span>
                <span>E-COMMERCE MDQ</span>
              </span>
            </div>
          </div>

            {/* Bottom Micro-Card: Horario y Tarifa Vigente */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 w-full max-w-xs bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[20px] shadow-float z-10"
            >
              <div className="bg-brand-blue-900 text-white p-4 rounded-[16px] border border-white/10 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-yellow-500"></span>
                    </span>
                    <span className="font-subheading text-xs uppercase tracking-wider font-bold text-brand-yellow-500">
                      HORARIO OPERATIVO
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-bold bg-brand-yellow-500 text-brand-blue-900 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    2026
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                    <div className="font-subheading text-[10px] uppercase tracking-wider text-brand-blue-400 mb-1">CORTE</div>
                    <div className="font-display text-xl text-brand-yellow-500">13:00 HS</div>
                    <div className="font-sans text-[10px] text-white/60">SOLICITUD</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                    <div className="font-subheading text-[10px] uppercase tracking-wider text-brand-blue-400 mb-1">ENTREGA</div>
                    <div className="font-display text-xl text-brand-yellow-500">19:00 HS</div>
                    <div className="font-sans text-[10px] text-white/60">MISMA JORNADA</div>
                  </div>
                </div>
                <div className="pt-2 border-t border-white/15 flex items-center justify-center gap-2 text-[10px] font-subheading uppercase tracking-wider text-brand-blue-400 font-bold">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-brand-yellow-500" />
                    TODO MAR DEL PLATA
                  </span>
                  <span className="text-brand-blue-500 font-mono text-xs">+20 KM</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}