'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Zap,
  Clock,
  Navigation,
  ShieldCheck,
  Calculator,
} from 'lucide-react';
import HeroProceduralBackground from '@/src/components/ui/HeroProceduralBackground';
import CTANestedPill from '@/src/components/ui/CTANestedPill';

const SIMULATED_EXPRESS_TRIPS = [
  {
    origen: 'Terminal Ferroautomotora',
    destino: 'B° Stella Maris',
    distancia: '3.7 km',
    tarifa: '$4.600 ARS',
  },
  {
    origen: 'Centro de Distribución (Av. Colón 1200)',
    destino: 'Zona Güemes (Centro)',
    distancia: '2.8 km',
    tarifa: '$3.700 ARS',
  },
  {
    origen: 'Av. Constitución 5500',
    destino: 'Plaza Mitre',
    distancia: '5.8 km',
    tarifa: '$6.100 ARS',
  },
  {
    origen: 'Puerto Mar del Plata',
    destino: 'Punta Mogotes',
    distancia: '7.4 km',
    tarifa: '$8.200 ARS',
  },
];

export default function CotizadorExpressHero() {
  const [tripIndex, setTripIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTripIndex((prev) => (prev + 1) % SIMULATED_EXPRESS_TRIPS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentTrip = SIMULATED_EXPRESS_TRIPS[tripIndex];

  return (
    <section
      id="cotizador-express-hero"
      className="relative w-full overflow-hidden bg-brand-blue-700 text-white min-h-auto lg:min-h-[58vh] flex items-center pt-20 pb-6 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-14 border-b border-white/10"
    >
      {/* Dynamic Procedural Background */}
      <HeroProceduralBackground variant="express" />

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
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-subheading font-bold uppercase tracking-wider bg-[#0950F6]/90 text-[#FFEC01] border-2 border-[#FFEC01]/50 -rotate-1 shadow-glow-yellow backdrop-blur-md">
              <Zap className="h-4 w-4 text-[#FFEC01] shrink-0 fill-[#FFEC01]" />
              <span>SERVICIO EXPRESS PRIORITARIO</span>
            </div>

            {/* Monumental Headline with Knockout Capsule */}
            <h1 className="text-5xl sm:text-6xl lg:text-[4.75rem] xl:text-[5.5rem] font-display uppercase tracking-tight leading-[0.92] text-white">
              <span>COTIZÁ TU </span>
              <span className="inline-block bg-[#FFEC01] text-[#0950F6] px-3 py-1 rounded-lg transform -rotate-1 shadow-glow-yellow mx-1">
                ENVÍO
              </span>
              <span className="block sm:inline"> EXPRESS</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl font-sans text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Calculá el costo de tu envío prioritario al instante. Obtené la tarifa de entrega según la distancia y coordiná en el acto con nosotros por WhatsApp.
            </p>

            {/* Feature Pills & CTA Row */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-wide bg-[#0950F6]/80 border border-white/20 text-white backdrop-blur-sm">
                  <Clock className="h-4 w-4 text-[#FFEC01] shrink-0" />
                  <span>Entrega en &lt; 2 Horas</span>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-wide bg-[#0950F6]/80 border border-white/20 text-white backdrop-blur-sm">
                  <Navigation className="h-4 w-4 text-[#FFEC01] shrink-0" />
                  <span>Ruta Optimizada</span>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-wide bg-[#0950F6]/80 border border-white/20 text-white backdrop-blur-sm">
                  <ShieldCheck className="h-4 w-4 text-[#FFEC01] shrink-0" />
                  <span>Tarifa 100% Precisa</span>
                </div>
              </div>

              <div className="pt-2 sm:pt-0 w-full sm:w-auto">
                <CTANestedPill
                  href="#cotizador-express-form"
                  variant="outline"
                  className="w-full sm:w-auto border border-[#D6E4FE]"
                >
                  Calcular Ahora
                </CTANestedPill>
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
            <div className="p-2.5 sm:p-3 rounded-[28px] sm:rounded-[30px] bg-[#E6EEFE]/20 border border-[#D6E4FE]/40 shadow-2xl backdrop-blur-md">
              {/* Inner Midnight Card */}
              <div className="bg-[#0950F6] rounded-[20px] p-6 sm:p-8 text-white border border-white/20 shadow-lg space-y-6">
                
                {/* Header */}
                <div className="flex items-start justify-between border-b border-white/15 pb-4">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white leading-none">
                      CÁLCULO AUTOMÁTICO
                    </h3>
                    <p className="font-subheading text-[11px] sm:text-xs uppercase tracking-widest text-[#FFEC01] mt-1 font-bold">
                      SISTEMA EXPRESS MAPS
                    </p>
                  </div>
                  <div className="p-2 rounded-xl bg-white/10 border border-white/20 text-[#FFEC01] shrink-0">
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
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4"
                  >
                    {/* ORIGEN */}
                    <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                      <span className="font-subheading text-xs uppercase tracking-wider font-bold text-[#FFEC01]">
                        ORIGEN
                      </span>
                      <span className="font-sans text-xs sm:text-sm font-semibold text-white text-right truncate max-w-52.5">
                        {currentTrip.origen}
                      </span>
                    </div>

                    {/* DESTINO */}
                    <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                      <span className="font-subheading text-xs uppercase tracking-wider font-bold text-[#FFEC01]">
                        DESTINO
                      </span>
                      <span className="font-sans text-xs sm:text-sm font-semibold text-white text-right truncate max-w-52.5">
                        {currentTrip.destino}
                      </span>
                    </div>

                    {/* DISTANCIA */}
                    <div className="flex items-center justify-between py-1.5 border-b border-white/15">
                      <span className="font-subheading text-xs uppercase tracking-wider font-bold text-[#FFEC01]">
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
                      <span className="font-mono text-xl sm:text-2xl font-bold text-[#FFEC01] tabular-nums">
                        {currentTrip.tarifa}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Centered Yellow Badge */}
                <div className="pt-3 flex justify-center">
                  <span className="px-4 py-1.5 rounded-full border border-[#FFEC01]/40 bg-[#FFEC01]/10 text-[#FFEC01] font-subheading text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    SIN REGISTRO OBLIGATORIO
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