'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import {
  UtensilsCrossed,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  QrCode,
  Bike,
  ArrowDown,
} from 'lucide-react';
import { SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';

const WHATSAPP_NUMBER = SUPPORT_PHONE.replace(/\D/g, '');

export function MarDeliveryHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-[#031811] text-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-16 border-b border-[#2ECC85]/15 font-sans">
      {/* Glows ambientales esmeralda y ámbar con escala responsiva */}
      <div
        className="absolute top-1/4 right-0 w-80 sm:w-130 h-80 sm:h-130 bg-[#2ECC85]/12 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-0 w-72 sm:w-110 h-72 sm:h-110 bg-[#F5B938]/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      {/* Hairline grid pattern marítimo */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#2ECC85_1px,transparent_1px),linear-gradient(to_bottom,#2ECC85_1px,transparent_1px)] bg-size-[28px_28px] sm:bg-size-[36px_36px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center my-auto">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#2ECC85]/10 border border-[#2ECC85]/30 text-[#2ECC85] text-xs font-subheading font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(46,204,133,0.15)]"
          >
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#2ECC85]" />
            <span>DELIVERY & CARTA DIGITAL MDQ</span>
          </motion.div>

          {/* Title - escala fluida de viewport */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-tight text-white leading-[0.95] sm:leading-[0.92]"
          >
            Potenciá tu local comercial y gastronómico con{' '}
            <span className="text-[#031811] bg-[#2ECC85] px-3 sm:px-4 py-0.5 rounded-xl sm:rounded-2xl inline-block shadow-[0_0_24px_rgba(46,204,133,0.35)]">
              MarDelivery
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-sm sm:text-lg lg:text-xl text-[#FAFCFB]/80 font-normal leading-relaxed max-w-2xl sm:max-w-3xl mx-auto"
          >
            Organizá tus pedidos, automatizá tu carta online y elegí la modalidad de
            cadetería que mejor se adapte al flujo de trabajo de tu comercio en Mar del Plata.
          </motion.p>

          {/* CTAs adaptativos */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full"
          >
            <a
              href="#carta-digital"
              onClick={() => trackAnalytics.ctaClick('mardelivery_hero_carta', 'Conocer Carta Digital')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 bg-[#2ECC85] hover:bg-[#27b374] text-[#031811] font-subheading font-bold uppercase tracking-wider text-xs sm:text-sm rounded-full shadow-[0_0_20px_rgba(46,204,133,0.35)] hover:shadow-[0_0_28px_rgba(46,204,133,0.5)] transition-all duration-200 active:scale-95"
            >
              <span>Conocer Soluciones MarDelivery</span>
              <ArrowDown className="w-4 h-4 text-[#031811]" />
            </a>

            <a
              href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=Hola%20MarDelivery!%20Quiero%20solicitar%20una%20demostraci%C3%B3n%20para%20mi%20local%20gastron%C3%B3mico%20en%20Mar%20del%20Plata`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalytics.whatsappClick('mardelivery_hero_demo', 'Solicitar Demostración')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 bg-[#031811] hover:bg-[#111B17] text-white border border-[#2ECC85]/30 hover:border-[#2ECC85] font-subheading font-bold uppercase tracking-wider text-xs sm:text-sm rounded-full transition-all duration-200"
            >
              <span>Solicitar Demostración para mi Local</span>
              <ArrowRight className="w-4 h-4 text-[#2ECC85]" />
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4 sm:pt-6 lg:pt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 text-2xs sm:text-xs font-mono text-[#FAFCFB]/80"
          >
            <span className="flex items-center gap-2 px-3 py-1.5 bg-[#111B17]/90 rounded-full border border-[#2ECC85]/20">
              <QrCode className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#2ECC85]" />
              Menú QR y WhatsApp
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 bg-[#111B17]/90 rounded-full border border-[#2ECC85]/20">
              <Bike className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#2ECC85]" />
              Cadetes por turno o propios
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 bg-[#111B17]/90 rounded-full border border-[#F5B938]/30">
              <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#F5B938]" />
              Flota en Mar del Plata
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
