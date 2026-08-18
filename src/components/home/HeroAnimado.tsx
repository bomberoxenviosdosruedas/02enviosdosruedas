'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Package, MapPin, FastForward } from 'lucide-react';
import { CTANestedPill } from '@/components/ui';

export default function HeroAnimado() {
  return (
    <section
      id="hero-animado"
      className="relative w-full overflow-hidden bg-brand-blue-700 text-white"
      style={{ minHeight: '90dvh' }}
    >
      {/* Background glow orb - matches design spec */}
      <div
        className="absolute top-[-400px] right-[-400px] w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'var(--brand-yellow)',
          filter: 'blur(120px)',
          opacity: 0.1,
        }}
        aria-hidden="true"
      />

      {/* Ghost Wordmark Monumental de Fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display uppercase text-[15vw] leading-none text-white/[0.035] tracking-tighter whitespace-nowrap">
          ENVÍOS DOS RUEDAS
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy */}
          <div className="space-y-8 lg:space-y-10 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow-500 text-brand-blue-900 border border-brand-yellow-500 shadow-[0_0_20px_rgba(255,236,1,0.3)]">
                Tu Solución Confiable
              </span>
            </motion.div>

            {/* Title with Signature Knockout Treatment - matches design spec */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-tight leading-[1.0] sm:leading-[0.95] flex flex-col items-center lg:items-start gap-2 select-none"
            >
              <span className="kinetic-font-stretch">
                Mensajería y Logística
              </span>
              <span className="relative inline-block bg-brand-blue-700 px-3 py-1 my-1.5 transform -rotate-1 rounded-sm shadow-sm">
                <span className="relative z-10 bg-brand-yellow-500 text-brand-blue-900 px-3 py-1 inline-block">
                  E-Commerce
                </span>
              </span>
              <span className="kinetic-font-stretch">
                en Mar del Plata
              </span>
            </motion.h1>

            {/* Body Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed text-brand-blue-50 font-light"
            >
              Somos tu partner estratégico en mensajería, envíos en el día y delivery de última milla. Soluciones ágiles, seguras y competitivas para potenciar tu marca.
            </motion.p>

            {/* CTA Buttons - matches design spec: size="large" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <CTANestedPill
                href="/cotizar/express"
                variant="primary"
                size="large"
                id="hero-cta-solicitar"
                className="w-full sm:w-auto"
              >
                Cotizá Express
              </CTANestedPill>
              <CTANestedPill
                href="/servicios/envios-express"
                variant="elevated"
                size="large"
                id="hero-cta-servicios"
                className="w-full sm:w-auto"
              >
                Mirá los Servicios
              </CTANestedPill>
            </motion.div>

            {/* Features list - matches design spec */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 opacity-70"
              style={{ filter: 'grayscale(1)' }}
            >
              <span className="flex items-center gap-3 font-subheading text-sm uppercase tracking-wide">
                <Package className="h-5 w-5 shrink-0" />
                +1M Envíos
              </span>
              <span className="flex items-center gap-3 font-subheading text-sm uppercase tracking-wide">
                <MapPin className="h-5 w-5 shrink-0" />
                Cobertura Total
              </span>
              <span className="flex items-center gap-3 font-subheading text-sm uppercase tracking-wide">
                <FastForward className="h-5 w-5 shrink-0" />
                Express 24h
              </span>
            </motion.div>
          </div>

          {/* Right Column: Map Card with Badge - matches design spec */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/card_mapa.webp"
                alt="Mapa de cobertura Mar del Plata"
                fill={true}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Blue multiply overlay */}
              <div className="absolute inset-0" style={{ background: 'rgba(6,54,165,0.10)', mixBlendMode: 'multiply' }} />
              {/* Badge overlay - "Menos de 60m" */}
              <div className="absolute bottom-8 left-8 z-10">
                <div
                  style={{
                    background: 'var(--brand-yellow)',
                    color: 'var(--brand-blue)',
                    padding: 'var(--space-4) var(--space-6)',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-xl)',
                    borderLeft: '8px solid var(--brand-blue)',
                  }}
                >
                  <p style={{ margin: 0, fontFamily: 'var(--font-headline)', fontSize: 'var(--text-3xl)', lineHeight: 1, textTransform: 'uppercase' }}>
                    Entregas en<br />
                    <span style={{ background: 'var(--brand-blue)', color: '#fff', padding: '0 4px' }}>
                      Menos de 60m
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-brand-white-50 pointer-events-none" />
    </section>
  );
}