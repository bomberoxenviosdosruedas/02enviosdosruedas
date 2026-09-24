'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Phone, Mail, ArrowRight, MapPin, Clock } from 'lucide-react';
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
      transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      id="contact-hero"
      aria-label="Contacto y Asesoramiento"
      className="relative w-full overflow-hidden bg-brand-blue-700 text-white py-[clamp(3.5rem,8vw,7rem)] min-h-[90dvh] flex items-center"
    >
      {/* Background - MAX #0950F6 - Canonical classes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-brand-blue-700" />
        {/* White glow 14% - was w-[680px] h-[680px] -> w-170 h-170 */}
        <div
          className="absolute top-[45%] left-[12%] -translate-y-1/2 w-170 h-170 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 38%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Yellow bloom - was w-[520px] h-[520px] -> w-130 h-130 */}
        <div
          className="absolute top-[20%] -right-20 w-130 h-130 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,236,1,0.18) 0%, rgba(255,236,1,0.06) 45%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />
        {/* Yellow bloom lower - was w-[480px] h-[480px] -> w-120 h-120 */}
        <div
          className="absolute bottom-[5%] left-[25%] w-120 h-120 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,236,1,0.12) 0%, transparent 60%)',
            filter: 'blur(110px)',
          }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid-canonical" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M 44 0 L 0 0 0 44" fill="none" stroke="#BACEFD" strokeDasharray="2,6" strokeWidth="0.8" />
              <circle cx="0" cy="0" r="1.4" fill="#FFEC01" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid-canonical)" />
        </svg>
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path d="M -100 520 Q 420 260 900 420 T 1600 180" fill="none" stroke="#FFEC01" strokeWidth="2.5" strokeDasharray="12 16" />
          <path d="M -100 380 Q 500 560 1000 320 T 1600 420" fill="none" stroke="#628FF9" strokeWidth="1.5" strokeDasharray="8 12" />
          <circle cx="440" cy="310" r="4" fill="#FFEC01" />
          <circle cx="960" cy="410" r="5" fill="#FFEC01" />
        </svg>
        {/* was h-[6px] -> h-1.5 */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-yellow-500" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="font-display uppercase text-[18vw] lg:text-[14vw] leading-none text-white/[0.035] tracking-tighter whitespace-nowrap">
            ENVÍOS DOS RUEDAS
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* LEFT 7 COLS */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:col-span-7 flex flex-col gap-7 sm:gap-8 text-center lg:text-left order-1">
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              {/* was bg-white/[0.06] -> bg-white/6 */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/6 border border-white/15 backdrop-blur-md -rotate-1 shadow-[0_0_28px_rgba(255,236,1,0.45)]">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow-500 shadow-[0_0_10px_#FFEC01]" />
                </span>
                <span className="font-subheading text-xs sm:text-[13px] font-bold uppercase tracking-[0.08em] text-brand-yellow-500">
                  Conexión Directa · Mar del Plata 2026
                </span>
              </div>
            </motion.div>

            {/* was tracking-[-0.05em] -> tracking-tighter */}
            <motion.h1 variants={itemVariants} className="font-display uppercase tracking-tighter leading-[0.9] text-balance text-4xl sm:text-[2.9rem] lg:text-6xl xl:text-[4.8rem]">
              <span className="block text-white">CONTACTO</span>
              <span className="block text-white">ASESORAMIENTO</span>
              {/* was rounded-[16px] -> rounded-xl per IntelliSense */}
              <span className="inline-block bg-brand-yellow-500 text-brand-blue-700 px-4 py-1.5 -rotate-1 rounded-xl shadow-[0_0_28px_rgba(255,236,1,0.45)] mt-3 text-[0.55em] sm:text-[0.48em] leading-none">
                ENVIOS DOSRUEDAS
              </span>
              <span className="block text-white/90 mt-3 text-[0.26em] sm:text-[0.22em] font-sans font-bold tracking-normal">MAR DEL PLATA</span>
            </motion.h1>

            {/* was leading-[1.625] -> leading-relaxed */}
            <motion.p variants={itemVariants} className="font-sans leading-relaxed text-white/90 text-[17px] sm:text-lg lg:text-xl max-w-[60ch] mx-auto lg:mx-0">
              Sin formularios complejos ni esperas. Elegí el canal que mejor se adapte al ritmo de tu e-commerce. Flota propia de motos,{' '}
              <span className="text-brand-yellow-500 font-semibold">cero tercerización</span> y respuesta inmediata.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0 pt-2">
              {/* was bg-white/[0.06] -> bg-white/6 and border-white/[0.12] -> border-white/12 and text-[10px] -> text-2xs */}
              <div className="p-3.5 rounded-3xl bg-white/6 border border-white/12 backdrop-blur-md text-center shadow-[0_16px_40px_rgba(9,80,246,0.12)]">
                <span className="block font-mono font-bold text-[15px] sm:text-[18px] text-brand-yellow-500 tabular-nums">15:00 hs</span>
                <span className="block font-subheading text-2xs sm:text-[11px] uppercase tracking-[0.08em] text-white/80 mt-1 leading-tight">Corte Diario</span>
              </div>
              <div className="p-3.5 rounded-3xl bg-white/6 border border-white/12 backdrop-blur-md text-center shadow-[0_16px_40px_rgba(9,80,246,0.12)]">
                <span className="block font-mono font-bold text-[15px] sm:text-[18px] text-brand-yellow-500 tabular-nums">100%</span>
                <span className="block font-subheading text-2xs sm:text-[11px] uppercase tracking-[0.08em] text-white/80 mt-1 leading-tight">Mismo Día</span>
              </div>
              <div className="p-3.5 rounded-3xl bg-white/6 border border-white/12 backdrop-blur-md text-center shadow-[0_16px_40px_rgba(9,80,246,0.12)]">
                <span className="block font-mono font-bold text-[11px] sm:text-[13px] text-brand-yellow-500 tabular-nums leading-tight">Sin Mínimos</span>
                <span className="block font-subheading text-2xs sm:text-[11px] uppercase tracking-[0.08em] text-white/80 mt-1 leading-tight">Retiros Libres</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-6 border-t border-white/15">
              <div className="grid gap-1 text-center lg:text-left">
                <span className="font-subheading text-[11px] uppercase tracking-wider text-brand-yellow-500 font-bold">Oficina Central</span>
                <span className="font-mono text-[13px] sm:text-sm font-bold text-white tabular-nums flex items-center gap-1.5 justify-center lg:justify-start"><MapPin className="w-3.5 h-3.5 text-brand-yellow-500" />Friuli 1972, MDQ</span>
              </div>
              <div className="grid gap-1 text-center lg:text-left">
                <span className="font-subheading text-[11px] uppercase tracking-wider text-brand-yellow-500 font-bold">Operación</span>
                <span className="font-mono text-[13px] sm:text-sm font-bold text-white tabular-nums flex items-center gap-1.5 justify-center lg:justify-start"><Clock className="w-3.5 h-3.5 text-brand-yellow-500" />Lun a Sáb · 2026</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT 5 COLS - was max-w-[520px] -> max-w-130 and rounded-[16px]->rounded-xl etc */}
          <div className="lg:col-span-5 flex flex-col items-center order-2 w-full">
            <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="relative w-full max-w-130">
              <div className="absolute -inset-8 bg-radial from-brand-yellow-500/20 via-white/5 to-transparent rounded-full blur-[50px] pointer-events-none" aria-hidden="true" />

              {/* was rounded-[16px] -> rounded-xl and rounded-[12px] -> rounded-lg and max-h-[340px] -> max-h-85 */}
              <div className="relative z-10 mb-5 rounded-xl bg-white border-2 border-brand-blue-100 p-3 shadow-[0_24px_64px_rgba(9,80,246,0.18)]">
                <div className="bg-brand-blue-50/60 rounded-lg p-2">
                  <Image src="/elementos/hero_contacto.webp" alt="Envíos DosRuedas 3D" width={400} height={340} className="w-full h-auto max-h-85 object-contain drop-shadow-[0_16px_32px_rgba(9,80,246,0.15)] mx-auto" priority />
                </div>
                {/* was text-[10px] -> text-2xs */}
                <div className="mt-3 flex items-center justify-between font-mono text-2xs uppercase tracking-wider text-brand-blue-700/60">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-brand-yellow-500 animate-pulse" />Friuli 1972 · MDQ</span>
                  <span>Online ahora</span>
                </div>
              </div>

              <div className="relative z-10 w-full flex flex-col gap-3">
                {/* was rounded-[16px] -> rounded-xl */}
                <a href="https://wa.me/542236602699?text=Hola!%20Quiero%20cotizar%20mis%20envíos" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 p-5 rounded-xl bg-brand-yellow-500 text-brand-blue-700 border border-brand-yellow-500 shadow-[0_0_28px_rgba(255,236,1,0.45)] hover:bg-brand-yellow-400 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <span className="flex items-center gap-4 min-w-0 flex-1">
                    <span className="w-12 h-12 rounded-xl bg-brand-blue-700/10 group-hover:bg-brand-blue-700 group-hover:text-brand-yellow-500 flex items-center justify-center transition-all shrink-0"><FaWhatsapp className="w-6 h-6" /></span>
                    <span className="min-w-0 flex-1 text-left"><span className="block font-display uppercase text-[18px] leading-none tracking-tight">WhatsApp Comercial</span><span className="block font-sans text-[12px] leading-snug mt-1 opacity-90">Respuestas en tiempo real. Online ahora.</span></span>
                  </span>
                  <span className="w-9 h-9 rounded-full bg-brand-blue-700/10 group-hover:bg-brand-blue-700 group-hover:text-brand-yellow-500 flex items-center justify-center group-hover:translate-x-1 transition-all shrink-0"><ArrowRight className="w-4 h-4" /></span>
                </a>
                <div className="grid grid-cols-2 gap-3">
                  {/* was bg-white/[0.06] -> bg-white/6, border-white/[0.12] -> border-white/12, hover:bg-white/[0.08] -> hover:bg-white/8 */}
                  <a href="tel:+542236602699" className="group flex items-center gap-3 p-4 rounded-3xl bg-white/6 border border-white/12 backdrop-blur-md hover:bg-white/8 transition-all"><span className="w-10 h-10 rounded-xl bg-white/10 text-brand-yellow-500 group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-700 flex items-center justify-center transition-all shrink-0"><Phone className="w-5 h-5" /></span><span className="text-left min-w-0"><span className="block font-display uppercase text-[14px] text-white leading-none">Llamada</span><span className="block font-mono text-[11px] text-white/60 tabular-nums">223 660-2699</span></span></a>
                  <a href="mailto:hola@enviosdosruedas.com" className="group flex items-center gap-3 p-4 rounded-3xl bg-white/6 border border-white/12 backdrop-blur-md hover:bg-white/8 transition-all"><span className="w-10 h-10 rounded-xl bg-white/10 text-brand-yellow-500 group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-700 flex items-center justify-center transition-all shrink-0"><Mail className="w-5 h-5" /></span><span className="text-left min-w-0"><span className="block font-display uppercase text-[14px] text-white leading-none">B2B</span><span className="block font-mono text-2xs text-brand-yellow-500/80 tabular-nums">Cotizá hoy</span></span></a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
