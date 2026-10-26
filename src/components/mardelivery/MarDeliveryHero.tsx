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
  Clock,
  ArrowDown,
} from 'lucide-react';
import { SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';

const WHATSAPP_NUMBER = SUPPORT_PHONE.replace(/\D/g, '');

export function MarDeliveryHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#031811] text-white pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-[#2ECC85]/15 font-sans">
      {/* Glows ambientales esmeralda y ámbar */}
      <div
        className="absolute top-0 right-0 w-130 h-130 bg-[#2ECC85]/12 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-100 h-100 bg-[#F5B938]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      {/* Hairline grid pattern sutil */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#2ECC85_1px,transparent_1px),linear-gradient(to_bottom,#2ECC85_1px,transparent_1px)] bg-size-[36px_36px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2ECC85]/10 border border-[#2ECC85]/30 text-[#2ECC85] text-xs font-subheading font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(46,204,133,0.15)]"
          >
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#2ECC85]" />
            <span>DELIVERY & CARTA DIGITAL MDQ</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[0.94]"
          >
            Potenciá tu local comercial y gastronómico con{' '}
            <span className="text-[#031811] bg-[#2ECC85] px-3.5 py-0.5 rounded-xl inline-block shadow-[0_0_24px_rgba(46,204,133,0.35)]">
              MarDelivery
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-base sm:text-xl text-[#FAFCFB]/80 font-normal leading-relaxed max-w-3xl mx-auto"
          >
            Organizá tus pedidos, automatizá tu carta online y elegí la modalidad de
            cadetería que mejor se adapte al flujo de trabajo de tu comercio en Mar del Plata.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#carta-digital"
              onClick={() => trackAnalytics.ctaClick('mardelivery_hero_carta', 'Conocer Carta Digital')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#2ECC85] hover:bg-[#27b374] text-[#031811] font-subheading font-bold uppercase tracking-wider text-sm rounded-full shadow-[0_0_20px_rgba(46,204,133,0.35)] hover:shadow-[0_0_28px_rgba(46,204,133,0.5)] transition-all duration-200 active:scale-95"
            >
              <span>Conocer Soluciones MarDelivery</span>
              <ArrowDown className="w-4 h-4 text-[#031811]" />
            </a>

            <a
              href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=Hola%20MarDelivery!%20Quiero%20solicitar%20una%20demostraci%C3%B3n%20para%20mi%20local%20gastron%C3%B3mico%20en%20Mar%20del%20Plata`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalytics.whatsappClick('mardelivery_hero_demo', 'Solicitar Demostración')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#031811] hover:bg-[#111B17] text-white border border-[#2ECC85]/30 hover:border-[#2ECC85] font-subheading font-bold uppercase tracking-wider text-sm rounded-full transition-all duration-200"
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
            className="pt-8 flex flex-wrap items-center justify-center gap-3.5 text-xs font-mono text-[#FAFCFB]/80"
          >
            <span className="flex items-center gap-2 px-3.5 py-1.5 bg-[#111B17]/90 rounded-full border border-[#2ECC85]/20">
              <QrCode className="w-4 h-4 text-[#2ECC85]" />
              Menú QR y Pedidos WhatsApp
            </span>
            <span className="flex items-center gap-2 px-3.5 py-1.5 bg-[#111B17]/90 rounded-full border border-[#2ECC85]/20">
              <Bike className="w-4 h-4 text-[#2ECC85]" />
              Repartidores por turno o cadetes propios
            </span>
            <span className="flex items-center gap-2 px-3.5 py-1.5 bg-[#111B17]/90 rounded-full border border-[#F5B938]/30">
              <ShieldCheck className="w-4 h-4 text-[#F5B938]" />
              Logística Marina y Urbana en MDQ
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
