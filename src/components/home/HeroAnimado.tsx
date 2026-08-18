'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Package, MapPin, FastForward, ShieldCheck, Zap, Sparkles, MessageCircle } from 'lucide-react';
import { CTANestedPill } from '@/src/components/ui';
import HeroProceduralBackground from '@/src/components/ui/HeroProceduralBackground';

export default function HeroAnimado() {
  return (
    <section
      id="hero-animado"
      className="relative w-full overflow-hidden bg-brand-blue-700 text-white"
      style={{ minHeight: '90dvh' }}
    >
      {/* Pure Vector & Dynamic Procedural Background */}
      <HeroProceduralBackground variant="express" />

      {/* Ghost Wordmark Monumental de Fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display uppercase text-[15vw] leading-none text-white/[0.035] tracking-tighter whitespace-nowrap">
          ENVÍOS DOS RUEDAS
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Actions (7 Cols on desktop) */}
          <div className="lg:col-span-7 space-y-7 lg:space-y-9 text-center lg:text-left">
            {/* Top Badge */}
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow-500 text-brand-blue-900 shadow-[0_0_24px_rgba(255,236,1,0.35)] border border-brand-yellow-400">
                <Sparkles className="w-3.5 h-3.5 fill-brand-blue-900" />
                Tu Solución Confiable en Mar del Plata
              </span>
            </div>

            {/* Title with Signature Kinetic Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-tight leading-[1.0] sm:leading-[0.95] flex flex-col items-center lg:items-start gap-2 select-none">
              <span className="kinetic-font-stretch">
                Mensajería y Logística
              </span>
              <span className="relative inline-block bg-brand-blue-900/60 px-3 py-1 my-1 transform -rotate-1 rounded-lg border border-brand-yellow-500/40 shadow-md">
                <span className="relative z-10 bg-brand-yellow-500 text-brand-blue-900 px-3 py-1 inline-block font-display font-black rounded">
                  E-Commerce
                </span>
              </span>
              <span className="kinetic-font-stretch text-brand-blue-50">
                en Mar del Plata
              </span>
            </h1>

            {/* Body Text in Rioplatense voice */}
            <p className="text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed text-brand-blue-100/90 font-light">
              Somos tu partner estratégico en mensajería urbana, envíos en el día y delivery de última milla. Flota propia de motos, cero tercerización y respuesta inmediata.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-1">
              <CTANestedPill
                href="/cotizar/express"
                variant="primary"
                size="large"
                id="hero-cta-solicitar"
                className="w-full sm:w-auto text-base"
              >
                Cotizá Express
              </CTANestedPill>
              <CTANestedPill
                href="/servicios/envios-express"
                variant="elevated"
                size="large"
                id="hero-cta-servicios"
                className="w-full sm:w-auto text-base"
              >
                Mirá los Servicios
              </CTANestedPill>
            </div>

            {/* Features / Trust Badges list */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-5 sm:gap-8 text-brand-blue-100/80">
              <div className="flex items-center gap-2.5 font-subheading text-sm uppercase tracking-wider">
                <div className="w-8 h-8 rounded-lg bg-brand-yellow-500/15 border border-brand-yellow-500/30 flex items-center justify-center text-brand-yellow-500">
                  <Package className="h-4 w-4" />
                </div>
                <span>+50k Envíos</span>
              </div>
              <div className="flex items-center gap-2.5 font-subheading text-sm uppercase tracking-wider">
                <div className="w-8 h-8 rounded-lg bg-brand-yellow-500/15 border border-brand-yellow-500/30 flex items-center justify-center text-brand-yellow-500">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Cobertura Total MDQ</span>
              </div>
              <div className="flex items-center gap-2.5 font-subheading text-sm uppercase tracking-wider">
                <div className="w-8 h-8 rounded-lg bg-brand-yellow-500/15 border border-brand-yellow-500/30 flex items-center justify-center text-brand-yellow-500">
                  <FastForward className="h-4 w-4" />
                </div>
                <span>Entregas en el Día</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with card_mapa.webp (5 Cols on desktop) */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0">
            {/* Ambient Backlight Glow behind 3D image */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-brand-yellow-500/20 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="absolute w-60 sm:w-80 h-60 sm:h-80 bg-brand-blue-500/30 rounded-full blur-[90px] pointer-events-none -z-10" />

            {/* Interactive Floating 3D Graphic Container */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative w-full max-w-[460px]"
            >
              {/* Outer Double Bezel Frame for Hero Asset */}
              <div className="double-bezel-outer bg-brand-blue-900/50 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <div className="double-bezel-inner relative rounded-2xl overflow-hidden bg-gradient-to-b from-brand-blue-800/80 to-brand-blue-950/90 border border-white/10 p-4 sm:p-6 flex flex-col items-center">
                  
                  {/* Top HUD Telemetry Pill */}
                  <div className="w-full flex items-center justify-between gap-2 mb-4 bg-brand-blue-900/70 border border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-yellow-500" />
                      </span>
                      <span className="font-subheading text-[11px] sm:text-xs uppercase tracking-widest text-brand-yellow-500 font-bold">
                        Ruteo Activo · MDQ
                      </span>
                    </div>
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-white/90 bg-white/10 px-2 py-0.5 rounded-md border border-white/15">
                      Friuli 1972
                    </span>
                  </div>

                  {/* Main 3D Card Image Asset */}
                  <div className="relative w-full aspect-square max-w-[340px] flex items-center justify-center my-1 drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
                    <Image
                      src="/card_mapa.webp"
                      alt="Envíos DosRuedas - Mapa y Cobertura Logística en Mar del Plata"
                      width={500}
                      height={500}
                      priority
                      className="object-contain w-full h-full transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Bottom Feature Badges Overlay */}
                  <div className="w-full grid grid-cols-2 gap-2.5 mt-3">
                    <div className="bg-brand-blue-900/80 border border-white/15 p-2.5 rounded-xl flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-brand-yellow-500 text-brand-blue-900 shrink-0">
                        <Zap className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-subheading text-xs font-bold uppercase text-white leading-tight">
                          Envíos Same-Day
                        </p>
                        <p className="font-sans text-[10px] text-brand-blue-200">Entrega en el Día</p>
                      </div>
                    </div>

                    <div className="bg-brand-blue-900/80 border border-white/15 p-2.5 rounded-xl flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-brand-blue-500 text-white shrink-0">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-subheading text-xs font-bold uppercase text-white leading-tight">
                          Flota Propia
                        </p>
                        <p className="font-sans text-[10px] text-brand-blue-200">Cero Tercerización</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom gradient border fade */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-yellow-500 pointer-events-none" />
    </section>
  );
}