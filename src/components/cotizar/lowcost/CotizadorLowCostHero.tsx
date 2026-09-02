'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShoppingBag,
  Percent,
  Truck,
  ShieldCheck,
  Calculator,
} from 'lucide-react';
import HeroProceduralBackground from '@/src/components/ui/HeroProceduralBackground';

const SIMULATED_LOWCOST_TRIPS = [
  {
    origen: 'Av. Constitución 5500',
    destino: 'Plaza Mitre',
    distancia: '5.8 km',
    tarifa: '$5.300 ARS',
  },
  {
    origen: 'Centro de Distribución (Av. Colón 1200)',
    destino: 'Zona Güemes (Centro)',
    distancia: '2.8 km',
    tarifa: '$3.000 ARS',
  },
  {
    origen: 'Terminal Ferroautomotora',
    destino: 'B° Stella Maris',
    distancia: '3.7 km',
    tarifa: '$4.000 ARS',
  },
  {
    origen: 'Puerto Mar del Plata',
    destino: 'Punta Mogotes',
    distancia: '7.4 km',
    tarifa: '$7.000 ARS',
  },
];

export default function CotizadorLowCostHero() {
  const [tripIndex, setTripIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTripIndex((prev) => (prev + 1) % SIMULATED_LOWCOST_TRIPS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentTrip = SIMULATED_LOWCOST_TRIPS[tripIndex];

  return (
    <section
      id="cotizador-lowcost-hero"
      className="relative w-full overflow-hidden bg-[#0950F6] text-white min-h-[72vh] flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10"
    >
      {/* Dynamic Procedural Background */}
      <HeroProceduralBackground variant="lowcost" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Headline & Value Proposition (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Glowing Pill Badge with velocity tilt */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-subheading font-bold uppercase tracking-wider bg-[#052C87]/90 text-[#FFF12E] border-2 border-[#FFF12E]/50 -rotate-1 shadow-glow-yellow backdrop-blur-md">
              <ShoppingBag className="h-4 w-4 text-[#FFF12E] shrink-0" />
              <span>SERVICIO ECONÓMICO Y PROGRAMADO</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[4.75rem] xl:text-[5.5rem] font-display uppercase tracking-tight leading-[0.92] text-white">
              <span>COTIZÁ TU </span>
              <span className="text-[#FFF12E] drop-shadow-[0_2px_16px_rgba(255,241,46,0.4)]">
                ENVÍO{' '}
              </span>
              <span className="block sm:inline">LOWCOST</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl font-sans text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Eficiencia y rentabilidad. Calculá tu envío con entrega garantizada en el día si es solicitado antes de 13hs.
            </p>

            {/* Feature Pills Row */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center lg:justify-start pt-2">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-wide bg-[#052C87]/80 border border-white/20 text-white backdrop-blur-sm">
                <Percent className="h-4 w-4 text-[#FFF12E] shrink-0" />
                <span>Hasta 40% de Ahorro</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-wide bg-[#052C87]/80 border border-white/20 text-white backdrop-blur-sm">
                <Truck className="h-4 w-4 text-[#FFF12E] shrink-0" />
                <span>Entrega Same-Day</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-wide bg-[#052C87]/80 border border-white/20 text-white backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4 text-[#FFF12E] shrink-0" />
                <span>Tarifa Plana PyME</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Double Bezel Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full max-w-lg mx-auto"
          >
            {/* Double Bezel Outer Frame */}
            <div className="p-2.5 sm:p-3 rounded-[28px] sm:rounded-[30px] bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md">
              {/* Inner Midnight Card */}
              <div className="bg-[#052C87] rounded-[20px] p-6 sm:p-8 text-white border border-white/10 shadow-lg space-y-6">
                
                {/* Header */}
                <div className="flex items-start justify-between border-b border-white/15 pb-4">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white leading-none">
                      CÁLCULO AUTOMÁTICO
                    </h3>
                    <p className="font-subheading text-[11px] sm:text-xs uppercase tracking-widest text-[#FFF12E] mt-1 font-bold">
                      SISTEMA LOWCOST BATCH
                    </p>
                  </div>
                  <div className="p-2 rounded-xl bg-white/10 border border-white/20 text-[#FFF12E] shrink-0">
                    <Calculator className="h-5 w-5" />
                  </div>
                </div>

                {/* Simulated Values with Animated Transitions */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tripIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    {/* ORIGEN */}
                    <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                      <span className="font-subheading text-xs uppercase tracking-wider font-bold text-[#FFF12E]">
                        ORIGEN
                      </span>
                      <span className="font-sans text-xs sm:text-sm font-semibold text-white text-right truncate max-w-[210px]">
                        {currentTrip.origen}
                      </span>
                    </div>

                    {/* DESTINO */}
                    <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                      <span className="font-subheading text-xs uppercase tracking-wider font-bold text-[#FFF12E]">
                        DESTINO
                      </span>
                      <span className="font-sans text-xs sm:text-sm font-semibold text-white text-right truncate max-w-[210px]">
                        {currentTrip.destino}
                      </span>
                    </div>

                    {/* DISTANCIA */}
                    <div className="flex items-center justify-between py-1.5 border-b border-white/15">
                      <span className="font-subheading text-xs uppercase tracking-wider font-bold text-[#FFF12E]">
                        DISTANCIA
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-white tabular-nums">
                        {currentTrip.distancia}
                      </span>
                    </div>

                    {/* TARIFA FINAL */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-subheading text-sm uppercase tracking-wider font-bold text-white">
                        TARIFA FINAL
                      </span>
                      <span className="font-mono text-xl sm:text-2xl font-bold text-[#FFF12E] tabular-nums">
                        {currentTrip.tarifa}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Centered Yellow Badge */}
                <div className="pt-3 flex justify-center">
                  <span className="px-4 py-1.5 rounded-full border border-[#FFF12E]/40 bg-[#FFF12E]/10 text-[#FFF12E] font-subheading text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    ENTREGA INCLUIDA EN EL DÍA
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
