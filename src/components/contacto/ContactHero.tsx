'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactHero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="contact-hero"
      aria-label="Contacto y Base Logística"
      className="relative w-full overflow-hidden bg-brand-blue-700 text-white py-[clamp(3.5rem,8vw,7rem)] min-h-[90dvh] flex items-center"
    >
      {/* Background Lighting & Atmospheric Geometry (Pure MAX #0950F6 & Signal Yellow) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-brand-blue-700" />

        {/* White Radial Core Glow 14% */}
        <div
          className="absolute top-[45%] left-[12%] -translate-y-1/2 w-[680px] h-[680px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 38%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Signal Yellow Bloom Upper Right 18% */}
        <div
          className="absolute top-[20%] -right-20 w-[520px] h-[520px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255,236,1,0.18) 0%, rgba(255,236,1,0.06) 45%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />

        {/* Signal Yellow Bloom Lower Center 12% */}
        <div
          className="absolute bottom-[5%] left-[25%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255,236,1,0.12) 0%, transparent 60%)',
            filter: 'blur(110px)',
          }}
        />

        {/* Technical Blueprint Grid SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-blueprint-grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M 44 0 L 0 0 0 44" fill="none" stroke="#BACEFD" strokeDasharray="2,6" strokeWidth="0.8" />
              <circle cx="0" cy="0" r="1.4" fill="#FFEC01" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-blueprint-grid)" />
        </svg>

        {/* Procedural Trajectory Lines (Signal Yellow #FFEC01 & Sky Blueprint #628FF9) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <path
            d="M -100 520 Q 420 260 900 420 T 1600 180"
            fill="none"
            stroke="#FFEC01"
            strokeWidth="2.5"
            strokeDasharray="12 16"
          />
          <path
            d="M -100 380 Q 500 560 1000 320 T 1600 420"
            fill="none"
            stroke="#628FF9"
            strokeWidth="1.5"
            strokeDasharray="8 12"
          />
          <circle cx="440" cy="310" r="4" fill="#FFEC01" />
          <circle cx="960" cy="410" r="5" fill="#FFEC01" />
        </svg>

        {/* Mandatory 6px Grounding Accent Rule */}
        <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-brand-yellow-500" />
      </div>

      {/* Monumental Ghost Wordmark (Texture Behind Hero) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="font-display uppercase text-[18vw] lg:text-[14vw] leading-none text-white/[0.035] tracking-tighter whitespace-nowrap">
            ENVÍOS DOS RUEDAS
          </span>
        </div>
      </div>

      {/* Primary Container Matrix (Max-w-7xl Canonical) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* LEFT COLUMN: 7 COLS — Headline, Promise, Glass KPIs & Dispatch Telemetry */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-7 sm:gap-8 text-center lg:text-left order-1"
          >
            {/* Live Badge Pill (-1deg Velocity Tilt + Amber Halo) */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md -rotate-1 shadow-[0_0_28px_rgba(255,236,1,0.45)]">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow-500 shadow-[0_0_10px_#FFEC01]" />
                </span>
                <span className="font-subheading text-xs sm:text-[13px] font-bold uppercase tracking-[0.08em] text-brand-yellow-500">
                  Conexión Directa · Mar del Plata 2026
                </span>
              </div>
            </motion.div>

            {/* Monumental Anton Title + Knockout Rotated Slab (-1deg) */}
            <motion.h1
              variants={itemVariants}
              className="font-display uppercase tracking-[-0.05em] leading-[0.88] text-balance text-4xl sm:text-[2.9rem] lg:text-6xl xl:text-[4.8rem]"
            >
              <span className="block text-white">CONTACTO &</span>
              <span className="block text-white">BASE LOGÍSTICA</span>
              <span className="inline-block bg-brand-yellow-500 text-brand-blue-700 px-4 py-1.5 -rotate-1 rounded-xl shadow-[0_0_28px_rgba(255,236,1,0.45)] mt-3 text-[0.38em] sm:text-[0.32em] leading-none">
                MAR DEL PLATA · FRIULI 1972
              </span>
            </motion.h1>

            {/* Brand Promise & Consequence in Strict Rioplatense Voseo */}
            <motion.p
              variants={itemVariants}
              className="font-sans leading-[1.625] text-white/90 text-[17px] sm:text-lg lg:text-xl max-w-[60ch] mx-auto lg:mx-0"
            >
              Sin formularios complejos ni esperas. Elegí el canal que mejor se adapte al ritmo de tu e-commerce. Flota
              propia de motos,{' '}
              <span className="text-brand-yellow-500 font-semibold">cero tercerización</span> y respuesta inmediata.
            </motion.p>

            {/* 3-Column Glass KPI Metrics (Geist Mono Tabular) */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0 pt-2"
            >
              <div className="p-3.5 rounded-3xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-md text-center shadow-[0_16px_40px_rgba(9,80,246,0.12)]">
                <span className="block font-mono font-bold text-[15px] sm:text-[18px] text-brand-yellow-500 tabular-nums">
                  15:00 hs
                </span>
                <span className="block font-subheading text-[10px] sm:text-[11px] uppercase tracking-[0.08em] text-white/80 mt-1 leading-tight">
                  Corte Diario
                </span>
              </div>
              <div className="p-3.5 rounded-3xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-md text-center shadow-[0_16px_40px_rgba(9,80,246,0.12)]">
                <span className="block font-mono font-bold text-[15px] sm:text-[18px] text-brand-yellow-500 tabular-nums">
                  100%
                </span>
                <span className="block font-subheading text-[10px] sm:text-[11px] uppercase tracking-[0.08em] text-white/80 mt-1 leading-tight">
                  Mismo Día
                </span>
              </div>
              <div className="p-3.5 rounded-3xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-md text-center shadow-[0_16px_40px_rgba(9,80,246,0.12)]">
                <span className="block font-mono font-bold text-[11px] sm:text-[13px] text-brand-yellow-500 tabular-nums leading-tight">
                  Sin Mínimos
                </span>
                <span className="block font-subheading text-[10px] sm:text-[11px] uppercase tracking-[0.08em] text-white/80 mt-1 leading-tight">
                  Retiros Libres
                </span>
              </div>
            </motion.div>

            {/* Verified Operational Metadata Footer Strip */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-6 border-t border-white/15"
            >
              <div className="grid gap-1 text-center lg:text-left">
                <span className="font-subheading text-[11px] uppercase tracking-wider text-brand-yellow-500 font-bold">
                  Oficina Central
                </span>
                <span className="font-mono text-[13px] sm:text-sm font-bold text-white tabular-nums">
                  Friuli 1972, Mar del Plata
                </span>
              </div>
              <div className="grid gap-1 text-center lg:text-left">
                <span className="font-subheading text-[11px] uppercase tracking-wider text-brand-yellow-500 font-bold">
                  Operación
                </span>
                <span className="font-mono text-[13px] sm:text-sm font-bold text-white tabular-nums">
                  Lun a Sáb · Turnos 2026
                </span>
              </div>
              <div className="grid gap-1 text-center lg:text-left">
                <span className="font-subheading text-[11px] uppercase tracking-wider text-brand-yellow-500 font-bold">
                  Directo
                </span>
                <a
                  href="tel:2236602699"
                  className="font-mono text-[13px] sm:text-sm font-bold text-brand-yellow-500 tabular-nums hover:underline"
                >
                  223 660-2699
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: 5 COLS — Channel Cards Stack with Double Bezel & Gravitational Hover */}
          <div className="lg:col-span-5 flex flex-col items-center order-2 w-full">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[480px]"
            >
              {/* Subtle Glow Halo Behind Cards */}
              <div
                className="absolute -inset-8 bg-radial from-brand-yellow-500/20 via-white/5 to-transparent rounded-full blur-[50px] pointer-events-none"
                aria-hidden="true"
              />

              {/* Top Telemetry Pill Docked */}
              <div className="self-end mr-6 sm:mr-8 mb-[-14px] relative z-20 flex justify-end w-full">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-brand-blue-700 border border-brand-blue-100 shadow-[0_16px_40px_rgba(9,80,246,0.12)] font-subheading text-[11px] uppercase tracking-wider font-bold">
                  <span className="w-2 h-2 rounded-full bg-brand-yellow-500 animate-pulse" />
                  RESPUESTA INMEDIATA
                </div>
              </div>

              {/* Channel Action Stack */}
              <div className="w-full flex flex-col gap-4">
                {/* Channel 1: WhatsApp Comercial — Primary CTA Signal Yellow #FFEC01 */}
                <a
                  href="https://wa.me/542236602699?text=Hola!%20Quiero%20cotizar%20mis%20env%C3%ADos"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp Comercial"
                  className="group relative flex items-center justify-between gap-4 p-5 sm:p-6 rounded-[16px] bg-brand-yellow-500 text-brand-blue-700 border border-brand-yellow-500 shadow-[0_0_28px_rgba(255,236,1,0.45)] hover:bg-brand-yellow-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <span className="flex items-center gap-4 min-w-0 flex-1">
                    <span className="w-12 h-12 rounded-xl bg-brand-blue-700/10 group-hover:bg-brand-blue-700 group-hover:text-brand-yellow-500 flex items-center justify-center transition-all shrink-0">
                      <FaWhatsapp className="w-6 h-6" />
                    </span>
                    <span className="min-w-0 flex-1 text-left">
                      <span className="block font-display uppercase text-[18px] sm:text-[20px] leading-none tracking-tight">
                        WhatsApp Comercial
                      </span>
                      <span className="block font-sans text-[12px] sm:text-[13px] leading-snug mt-1 opacity-90 font-medium">
                        Respuestas y cotizaciones en tiempo real. Online ahora.
                      </span>
                    </span>
                  </span>
                  <span className="w-9 h-9 rounded-full bg-brand-blue-700/10 group-hover:bg-brand-blue-700 group-hover:text-brand-yellow-500 flex items-center justify-center group-hover:translate-x-1 transition-all shrink-0 font-bold">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>

                {/* Channel 2: Llamada Directa — Glass on Blue Container */}
                <a
                  href="tel:+542236602699"
                  aria-label="Llamar a Coordinación Logística"
                  className="group flex items-center justify-between gap-4 p-5 sm:p-6 rounded-3xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-md shadow-[0_16px_40px_rgba(9,80,246,0.12)] hover:shadow-[0_24px_64px_rgba(9,80,246,0.18)] hover:border-white/20 hover:bg-white/[0.08] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
                >
                  <span className="flex items-center gap-4 min-w-0 flex-1">
                    <span className="w-12 h-12 rounded-xl bg-white/10 text-brand-yellow-500 group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-700 flex items-center justify-center transition-all shrink-0">
                      <Phone className="w-5 h-5" />
                    </span>
                    <span className="min-w-0 flex-1 text-left">
                      <span className="block font-display uppercase text-[18px] sm:text-[20px] leading-none text-white tracking-tight">
                        Llamada Directa
                      </span>
                      <span className="block font-sans text-[12px] sm:text-[13px] text-white/70 leading-snug mt-1">
                        Coordinador logístico en línea para urgencias.
                      </span>
                    </span>
                  </span>
                  <span className="w-9 h-9 rounded-full bg-white/10 text-white/60 group-hover:bg-white group-hover:text-brand-blue-700 group-hover:translate-x-1 flex items-center justify-center transition-all shrink-0 font-bold">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>

                {/* Channel 3: Cotización B2B — Glass with Monospaced Telemetry */}
                <a
                  href="mailto:hola@enviosdosruedas.com"
                  aria-label="Enviar correo para cotización B2B"
                  className="group flex items-center justify-between gap-4 p-5 sm:p-6 rounded-3xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-md shadow-[0_16px_40px_rgba(9,80,246,0.12)] hover:shadow-[0_24px_64px_rgba(9,80,246,0.18)] hover:border-white/20 hover:bg-white/[0.08] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
                >
                  <span className="flex items-center gap-4 min-w-0 flex-1">
                    <span className="w-12 h-12 rounded-xl bg-white/10 text-brand-yellow-500 group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-700 flex items-center justify-center transition-all shrink-0">
                      <Mail className="w-5 h-5" />
                    </span>
                    <span className="min-w-0 flex-1 text-left">
                      <span className="block font-display uppercase text-[18px] sm:text-[20px] leading-none text-white tracking-tight">
                        Cotización B2B
                      </span>
                      <span className="block font-mono text-[11px] sm:text-[12px] text-brand-yellow-500 mt-1 tabular-nums">
                        hola@enviosdosruedas.com · Plan a medida
                      </span>
                    </span>
                  </span>
                  <span className="w-9 h-9 rounded-full bg-white/10 text-white/60 group-hover:bg-white group-hover:text-brand-blue-700 group-hover:translate-x-1 flex items-center justify-center transition-all shrink-0 font-bold">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </div>

              {/* Bottom Telemetry Docked Footnote */}
              <div className="self-start ml-6 sm:ml-8 mt-[-14px] relative z-20 flex justify-start w-full">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] backdrop-blur-md text-white/80 font-mono text-[10px] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-brand-yellow-500 animate-pulse" />
                  Friuli 1972 · Zona Güemes · MDQ
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
