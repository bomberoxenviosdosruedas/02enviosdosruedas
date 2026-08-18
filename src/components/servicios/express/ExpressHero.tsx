'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Badge } from 'lucide-react';

export default function ExpressHero() {
  return (
    <section
      id="express-hero"
      className="relative w-full overflow-hidden bg-brand-blue-700 text-white"
      style={{ minHeight: '42dvh' }}
    >
      {/* Background image - matches design spec: hero_express.webp at 35% opacity */}
      <Image
        src="/hero_express.webp"
        alt=""
        fill={true}
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover pointer-events-none"
        style={{ opacity: 0.35 }}
      />
      {/* Gradient overlay - matches design spec */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(6,54,165,0.95),rgba(6,54,165,0.35))' }} />

      {/* Ghost Wordmark Monumental de Fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display uppercase text-[15vw] leading-none text-white/[0.035] tracking-tighter whitespace-nowrap">
          ENVÍOS EXPRESS
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-16">
        <div className="space-y-6">
          {/* Badge - matches design spec: "Servicios · Mar del Plata" with glass variant and dot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-white/10 backdrop-blur-sm border border-white/20 text-white"
          >
            <span className="w-2 h-2 rounded-full bg-brand-yellow-500" />
            Servicios · Mar del Plata
          </motion.div>

          {/* Title - matches design spec: "Envíos Express" with yellow highlight */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display uppercase tracking-tighter leading-[0.85]"
          >
            Envíos <span className="text-brand-yellow-500">Express</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl max-w-2xl font-sans leading-relaxed text-white/80 font-light"
          >
            Retiramos en minutos y entregamos en menos de dos horas. Rastreo activo, seguro de cumplimiento y coordinación por WhatsApp.
          </motion.p>

          {/* CTA Buttons - matches design spec: size="xl" variant secondary and ghost */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/cotizar/express"
              id="express-hero-cta-cotizar"
              className="cta-nested-pill bg-brand-yellow-500 text-brand-blue-900 hover:bg-brand-yellow-400 font-bold px-8 py-3.5 cursor-pointer transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
              style={{ height: 'var(--control-h-xl)' }}
            >
              <span>Cotizar Ahora</span>
              <span className="cta-nested-icon bg-blue-900/10 text-brand-blue-900">
                <ArrowRight className="h-5 w-5 shrink-0" />
              </span>
            </Link>

            <a
              href="https://wa.me/542236602699"
              target="_blank"
              rel="noopener noreferrer"
              id="express-hero-cta-whatsapp"
              className="cta-nested-pill border-2 border-white/60 text-white hover:bg-white/10 font-bold px-8 py-3.5 cursor-pointer transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
              style={{ height: 'var(--control-h-xl)' }}
            >
              <span>Hablar con ventas</span>
              <span className="cta-nested-icon bg-white/10 text-white">
                <Phone className="h-4 w-4 shrink-0" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}