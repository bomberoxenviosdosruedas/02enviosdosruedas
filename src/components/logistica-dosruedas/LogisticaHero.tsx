'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import {
  Search,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  ArrowDown,
  Layers,
} from 'lucide-react';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { trackAnalytics } from '@/lib/analytics';

export function LogisticaHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-brand-blue-500 text-white pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-white/10">
      {/* Glows de fondo */}
      <div
        className="absolute top-0 right-0 w-120 h-120 bg-brand-yellow-500/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue-400/20 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-brand-yellow-500/30 text-brand-yellow-500 text-xs font-subheading uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>SISTEMA LOGÍSTICO DIGITAL · MAR DEL PLATA</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[0.94]"
          >
            Seguí tu paquete en tiempo real e ingresá a tu{' '}
            <span className="text-brand-blue-500 bg-brand-yellow-500 px-3 py-0.5 rounded-xl inline-block shadow-lg">
              panel operativo
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-base sm:text-xl text-brand-blue-50 font-normal leading-relaxed max-w-3xl mx-auto"
          >
            Conectamos la última milla de Mar del Plata con trazabilidad total. Consultá el
            estado de tu envío con el código <strong className="font-bold text-brand-yellow-500">EDR</strong> o
            gestioná las operaciones de tu negocio desde nuestros portales dedicados.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <CTANestedPill
              href="#rastreo"
              variant="primary"
              size="large"
              icon={<ArrowDown className="w-4 h-4" />}
              className="w-full sm:w-auto"
              onClick={() => trackAnalytics.ctaClick('logistica_hero_rastreo', 'Rastrear con Código EDR')}
            >
              <span>Rastrear con Código EDR</span>
            </CTANestedPill>

            <CTANestedPill
              href="#portales"
              variant="outline"
              size="large"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
              onClick={() => trackAnalytics.ctaClick('logistica_hero_portales', 'Ver Portales Operativos')}
            >
              <span>Ver Portales Operativos</span>
            </CTANestedPill>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-brand-blue-50/90"
          >
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
              <ShieldCheck className="w-4 h-4 text-brand-yellow-500" />
              Base Central Friuli 1972
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
              <MapPin className="w-4 h-4 text-brand-yellow-500" />
              Cobertura en los 5 radios de MDQ
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
              <Clock className="w-4 h-4 text-brand-yellow-500" />
              Trazabilidad en tiempo real
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
