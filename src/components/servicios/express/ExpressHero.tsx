'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Zap, Phone, ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import HeroProceduralBackground from '@/src/components/ui/HeroProceduralBackground';
import CTANestedPill from '@/src/components/ui/CTANestedPill';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';

export default function ExpressHero() {
  return (
    <section
      id="express-hero"
      aria-label="Presentación Servicio Express y Mensajería Inmediata"
      className="relative w-full overflow-hidden bg-[#0950F6] text-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 border-b border-white/10"
    >
      <HeroProceduralBackground variant="express" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="-rotate-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-subheading font-bold uppercase tracking-widest bg-[#0950F6] border border-[#FFEC01]/40 text-[#FFEC01] shadow-glow-yellow backdrop-blur-md">
              <Zap className="h-4 w-4 text-[#FFEC01] shrink-0 fill-[#FFEC01]" />
              <span>MENSAJERÍA EN MOTO Y ENTREGAS INMEDIATAS · MDQ 2026</span>
            </div>

            {/* Title with Knockout Badge */}
            <h1 className="text-4xl sm:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-display uppercase tracking-tight leading-[0.98] text-white">
              <span className="block">MENSAJERÍA EN MOTO</span>
              <span className="inline-block bg-[#FFEC01] text-[#0950F6] px-3 py-1 rounded-lg transform -rotate-1 shadow-glow-yellow my-1">
                ENVÍOS EXPRESS
              </span>
              <span className="block text-2xl sm:text-4xl lg:text-5xl text-white/90">
                ENTREGAS INMEDIATAS EN MAR DEL PLATA
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl font-sans text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Especialistas en mensajería en moto y envíos express prioritarios. Asignación de rango horario de entrega de 3 horas (solicitud con 2 hs de anticipación antes de las 15:00 hs). Todo lo que entre en moto (hasta 5 kg y 40x30 cm).
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <CTANestedPill
                href="/cotizar/express"
                text="Cotizá tu envío Express"
                variant="primary"
              />

              <CTANestedPill
                href="https://wa.me/542236602699"
                text="Hablar por WhatsApp"
                variant="secondary"
              />
            </div>

            {/* Quick KPI Chips */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-3 max-w-xl mx-auto lg:mx-0">
              <div className="p-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <span className="block font-mono font-bold text-xl sm:text-2xl text-[#FFEC01] tabular-nums">
                  3 Horas
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-white/90 mt-0.5">
                  Rango de Entrega
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <span className="block font-mono font-bold text-xl sm:text-2xl text-[#FFEC01] tabular-nums">
                  15:00 hs
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-white/90 mt-0.5">
                  Corte Solicitud
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <span className="block font-mono font-bold text-xl sm:text-2xl text-[#FFEC01] tabular-nums">
                  Hasta 5 kg
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-white/90 mt-0.5">
                  40x30 cm Límite
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols) */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
            <DoubleBezelCard>
              <div className="bg-[#0950F6] text-white p-6 sm:p-8 rounded-[20px] border border-white/20 relative overflow-hidden space-y-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFEC01] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFEC01]"></span>
                  </span>
                  <span className="font-subheading text-xs tracking-widest text-[#FFEC01] font-bold uppercase">
                    TELEMETRÍA EN VIVO · MDQ
                  </span>
                </div>

                <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden border border-white/20 my-2">
                  <Image
                    src="/elementos/icono_express.webp"
                    alt="Envíos Express - Envíos DosRuedas"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs font-mono text-white/80">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FFEC01]" />
                    TODO MAR DEL PLATA
                  </span>
                  <span className="text-[#FFEC01] font-bold tabular-nums">2026</span>
                </div>
              </div>
            </DoubleBezelCard>
          </div>
        </div>
      </div>
    </section>
  );
}
