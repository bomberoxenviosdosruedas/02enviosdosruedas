'use client';

import React from 'react';
import {
  Rocket,
  ShieldCheck,
  MapPin,
  Phone,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import HeroProceduralBackground from '@/src/components/ui/HeroProceduralBackground';
import CTANestedPill from '@/src/components/ui/CTANestedPill';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';

export default function EmprendedoresHero() {
  return (
    <section
      id="plan-emprendedores-hero"
      aria-label="Presentación Plan Emprendedores y Soluciones 3PL"
      className="relative w-full overflow-hidden bg-[#0950F6] text-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 border-b border-white/10"
    >
      <HeroProceduralBackground variant="default" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-subheading font-bold uppercase tracking-wider bg-[#0950F6] text-[#FFEC01] border border-[#FFEC01]/40 -rotate-1 shadow-glow-yellow backdrop-blur-md">
              <Rocket className="h-4 w-4 text-[#FFEC01] shrink-0" />
              <span>PLAN EMPRENDEDORES & FULFILLMENT 3PL</span>
            </div>

            {/* Title with Knockout Badge */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-tight text-white leading-[0.92]">
              <span>IMPULSÁ TU </span>
              <span className="inline-block bg-[#FFEC01] text-[#0950F6] px-3 py-1 rounded-lg transform -rotate-1 shadow-glow-yellow mx-1">
                E-COMMERCE
              </span>
              <span className="block sm:inline"> EN MAR DEL PLATA</span>
            </h1>

            <div className="space-y-3 max-w-2xl mx-auto lg:mx-0">
              <p className="text-lg sm:text-xl font-subheading uppercase tracking-wide text-[#FFEC01] font-bold">
                LOGÍSTICA INTEGRAL 3PL: ALMACENAMIENTO, PICKING Y REPARTO SAME-DAY.
              </p>
              <div className="p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                <p className="text-sm sm:text-base font-sans text-white/90 leading-relaxed font-light text-center lg:text-left">
                  Liberate de preparar paquetes y gestionar envíos. Almacená tu stock en nuestro Hub de Friuli 1972, nosotros preparamos tus pedidos y los entregamos en el día a tus clientes.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <CTANestedPill
                href="/contacto"
                variant="primary"
              >
                Solicitar Plan Corporativo
              </CTANestedPill>

              <CTANestedPill
                href="https://wa.me/542236602699"
                variant="outline"
              >
                Agendar Asesoría 3PL
              </CTANestedPill>
            </div>

            {/* Quick KPI Chips */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-3 max-w-xl mx-auto lg:mx-0">
              <div className="p-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <span className="block font-mono font-bold text-xl sm:text-2xl text-[#FFEC01] tabular-nums">
                  Same Day
                </span>
                <span className="block font-subheading text-2xs sm:text-xs uppercase tracking-wider text-white/90 mt-0.5">
                  Stock Friuli 1972
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <span className="block font-mono font-bold text-xl sm:text-2xl text-[#FFEC01] tabular-nums">
                  -20% OFF
                </span>
                <span className="block font-subheading text-2xs sm:text-xs uppercase tracking-wider text-white/90 mt-0.5">
                  Opción DropOFF
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <span className="block font-mono font-bold text-xl sm:text-2xl text-[#FFEC01] tabular-nums">
                  $0 Comis.
                </span>
                <span className="block font-subheading text-2xs sm:text-xs uppercase tracking-wider text-white/90 mt-0.5">
                  Contrareembolso Gratis
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
                    HUB LOGÍSTICO FRIULI 1972 · MDQ
                  </span>
                </div>

                <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden border border-white/20 my-2">
                  <Image
                    src="/elementos/envios_emprendedores.webp"
                    alt="Logística 3PL y Fulfillment - Envíos DosRuedas"
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