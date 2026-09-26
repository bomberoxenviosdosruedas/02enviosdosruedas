'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Mail, Phone, Clock, MapPin, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import HeroProceduralBackground from '@/src/components/ui/HeroProceduralBackground';
import CTANestedPill from '@/src/components/ui/CTANestedPill';

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ContactHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact-hero"
      aria-label="Encabezado de contacto y asesoramiento"
      className="relative w-full overflow-hidden bg-brand-blue-700 text-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 border-b border-white/10"
    >
      <HeroProceduralBackground variant="contact" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md -rotate-1 shadow-glow-yellow">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow-500" />
              </span>
              <span className="font-subheading text-xs sm:text-xs uppercase tracking-[0.08em] text-brand-yellow-500">
                Conexión Directa · Mar del Plata 2026
              </span>
            </div>

            {/* Title with Knockout Badge */}
            <h1 className="font-display uppercase tracking-tight leading-[0.9] text-balance text-4xl sm:text-[2.9rem] lg:text-6xl xl:text-[4.8rem]">
              <span className="block text-white">CONTACTO &</span>
              <span className="inline-block bg-brand-yellow-500 text-brand-blue-900 px-4 py-1.5 -rotate-1 rounded-xl shadow-glow-yellow my-2">
                ASESORAMIENTO
              </span>
              <span className="block text-white/90 text-[0.45em] sm:text-[0.4em] font-sans tracking-normal">
                MAR DEL PLATA
              </span>
            </h1>

            <p className="font-sans leading-relaxed text-white/90 text-[17px] sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 font-light">
              Sin formularios complejos ni esperas. Elegí el canal que mejor se adapte al ritmo de tu e-commerce. Flota propia de motos,{' '}
              <span className="text-brand-yellow-500 font-semibold">cero tercerización</span> y respuesta inmediata.
            </p>

            <div className="grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0 pt-2">
              <div className="p-3.5 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <span className="block font-mono font-bold text-[15px] sm:text-[18px] text-brand-yellow-500 tabular-nums">15:00 hs</span>
                <span className="block font-subheading text-2xs sm:text-xs uppercase tracking-wider text-white/80 mt-1 leading-tight">Corte Diario</span>
              </div>
              <div className="p-3.5 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <span className="block font-mono font-bold text-[15px] sm:text-[18px] text-brand-yellow-500 tabular-nums">100%</span>
                <span className="block font-subheading text-2xs sm:text-xs uppercase tracking-wider text-white/80 mt-1 leading-tight">Mismo Día</span>
              </div>
              <div className="p-3.5 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <span className="block font-mono font-bold text-[11px] sm:text-[13px] text-brand-yellow-500 tabular-nums leading-tight">Sin Mínimos</span>
                <span className="block font-subheading text-2xs sm:text-xs uppercase tracking-wider text-white/80 mt-1 leading-tight">Retiros Libres</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-6 border-t border-white/15">
              <div className="grid gap-1 text-center lg:text-left">
                <span className="font-subheading text-2xs uppercase tracking-wider text-brand-yellow-500">Oficina Central</span>
                <span className="font-mono text-[13px] sm:text-sm font-bold text-white tabular-nums flex items-center gap-1.5 justify-center lg:justify-start"><MapPin className="w-3.5 h-3.5 text-brand-yellow-500" />Friuli 1972, MDQ</span>
              </div>
              <div className="grid gap-1 text-center lg:text-left">
                <span className="font-subheading text-2xs uppercase tracking-wider text-brand-yellow-500">Operación</span>
                <span className="font-mono text-[13px] sm:text-sm font-bold text-white tabular-nums flex items-center gap-1.5 justify-center lg:justify-start"><Clock className="w-3.5 h-3.5 text-brand-yellow-500" />Lun a Sáb · 2026</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center w-full">
            <div className="relative w-full max-w-lg space-y-4">
              <div className="relative z-10 rounded-xl bg-white border-2 border-brand-blue-100 p-3 shadow-2xl">
                <div className="bg-brand-blue-50/60 rounded-lg p-2">
                  <Image src="/elementos/hero_contacto.webp" alt="Envíos DosRuedas 3D" width={400} height={340} className="w-full h-auto max-h-80 object-contain mx-auto" priority />
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-2xs uppercase tracking-wider text-brand-blue-700/80 tabular-nums">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-brand-blue-700 animate-pulse" />Friuli 1972 · MDQ</span>
                  <span>Online ahora</span>
                </div>
              </div>

              <div className="relative z-10 w-full flex flex-col gap-3">
                <CTANestedPill
                  href="https://wa.me/542236602699?text=Hola!%20Quiero%20cotizar%20mis%20env%C3%ADos"
                  variant="primary"
                  className="w-full justify-center"
                >
                  WhatsApp Comercial
                </CTANestedPill>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}