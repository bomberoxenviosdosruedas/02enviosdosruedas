'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { Package, MapPin, FastForward, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { CTANestedPill } from '@/src/components/ui';
import HeroProceduralBackground from '@/src/components/ui/HeroProceduralBackground';

export default function HeroAnimado() {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  // Spring configurations following HyperFrames & Framer Motion skill standard
  const springTransition = { type: 'spring' as const, stiffness: 100, damping: 20 };
  const snappySpring = { type: 'spring' as const, stiffness: 300, damping: 25 };

  // Orchestrated entrance animation variants for left column
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0.01 } : springTransition,
    },
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Smooth 3D tilt calculation (±8deg)
    setTilt({
      rotateX: (-y / (rect.height / 2)) * 7,
      rotateY: (x / (rect.width / 2)) * 7,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section
      id="hero-animado"
      className="relative w-full overflow-hidden bg-[#0950F6] text-white shadow-ambient-elevation"
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
          <motion.div
            className="lg:col-span-7 space-y-7 lg:space-y-9 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Top Badge */}
            <motion.div className="flex justify-center lg:justify-start" variants={itemVariants}>
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-[#FFF12E] text-[#0950F6] shadow-glow-yellow border border-[#FFF12E] cursor-default"
                whileHover={reduceMotion ? undefined : { scale: 1.03, transition: snappySpring }}
              >
                <Sparkles className="w-3.5 h-3.5 fill-[#0950F6]" />
                Tu Solución Confiable en Mar del Plata
              </motion.span>
            </motion.div>

            {/* Title with Signature Kinetic Typography */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-tight leading-[0.98] flex flex-col items-center lg:items-start gap-2 select-none"
              variants={itemVariants}
            >
              <span className="kinetic-font-stretch">
                Mensajería y Logística
              </span>
              <span className="relative inline-block bg-[#052C87]/80 px-3.5 py-1 my-1 transform -rotate-1 rounded-xl border border-[#FFF12E]/40 shadow-xl">
                <span className="relative z-10 bg-[#FFF12E] text-[#0950F6] px-3 py-1 inline-block font-display font-black rounded-lg">
                  E-Commerce
                </span>
              </span>
              <span className="kinetic-font-stretch text-white">
                en Mar del Plata
              </span>
            </motion.h1>

            {/* Body Text in Rioplatense voice */}
            <motion.p
              className="text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed text-brand-blue-100/90 font-light"
              variants={itemVariants}
            >
              Somos tu partner estratégico en mensajería urbana, envíos en el día y delivery de última milla. Flota propia de motos, cero tercerización y respuesta inmediata.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-1"
              variants={itemVariants}
            >
              <a
                href="/cotizar/express"
                id="hero-cta-solicitar"
                className="group inline-flex items-center justify-between rounded-full min-h-[52px] px-8 py-3.5 bg-[#FFF12E] hover:bg-[#FFF44A] text-[#0950F6] font-subheading text-lg font-bold uppercase tracking-wider shadow-glow-yellow transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <span>Cotizá Express</span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0950F6]/15 text-[#0950F6] ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/servicios/envios-express"
                id="hero-cta-servicios"
                className="group inline-flex items-center justify-between rounded-full min-h-[52px] px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white font-subheading text-lg font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <span>Mirá los Servicios</span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/15 text-white ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>

            {/* Features / Trust Badges list */}
            <motion.div
              className="pt-2 flex flex-wrap justify-center lg:justify-start gap-5 sm:gap-8 text-brand-blue-100/80"
              variants={itemVariants}
            >
              <motion.div
                className="flex items-center gap-2.5 font-subheading text-sm uppercase tracking-wider cursor-default"
                whileHover={reduceMotion ? undefined : { x: 3, transition: snappySpring }}
              >
                <div className="w-8 h-8 rounded-lg bg-brand-yellow-500/15 border border-brand-yellow-500/30 flex items-center justify-center text-brand-yellow-500">
                  <Package className="h-4 w-4" />
                </div>
                <span>+50k Envíos</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2.5 font-subheading text-sm uppercase tracking-wider cursor-default"
                whileHover={reduceMotion ? undefined : { x: 3, transition: snappySpring }}
              >
                <div className="w-8 h-8 rounded-lg bg-brand-yellow-500/15 border border-brand-yellow-500/30 flex items-center justify-center text-brand-yellow-500">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Cobertura Total MDQ</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2.5 font-subheading text-sm uppercase tracking-wider cursor-default"
                whileHover={reduceMotion ? undefined : { x: 3, transition: snappySpring }}
              >
                <div className="w-8 h-8 rounded-lg bg-brand-yellow-500/15 border border-brand-yellow-500/30 flex items-center justify-center text-brand-yellow-500">
                  <FastForward className="h-4 w-4" />
                </div>
                <span>Entregas en el Día</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual Card with 3D Tilt & Lighting */}
          <div
            className="lg:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0"
            style={{ perspective: '1200px' }}
          >
            {/* Ambient Backlight Glow behind 3D image */}
            <motion.div
              className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-brand-yellow-500/20 rounded-full blur-[100px] pointer-events-none -z-10"
              animate={reduceMotion ? {} : { scale: [1, 1.06, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute w-60 sm:w-80 h-60 sm:h-80 bg-brand-blue-500/30 rounded-full blur-[90px] pointer-events-none -z-10" />

            {/* Interactive Floating 3D Graphic Container */}
            <motion.div
              ref={cardRef}
              initial={{ opacity: 0, y: 30, scale: 0.94 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: reduceMotion ? 0 : tilt.rotateX,
                rotateY: reduceMotion ? 0 : tilt.rotateY,
              }}
              transition={
                reduceMotion
                  ? { duration: 0.01 }
                  : {
                      opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                      scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                      rotateX: snappySpring,
                      rotateY: snappySpring,
                    }
              }
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              whileHover={reduceMotion ? undefined : { y: -6, transition: snappySpring }}
              className="relative w-full max-w-[460px] transform-style-3d cursor-pointer"
            >
              {/* Outer Double Bezel Frame for Hero Asset */}
              <div className="p-3 sm:p-4 rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-glow-yellow transition-shadow duration-300">
                <div className="relative rounded-[20px] overflow-hidden bg-[#052C87] border border-white/15 p-4 sm:p-6 flex flex-col items-center">
                  
                  {/* Top HUD Telemetry Pill */}
                  <div className="w-full flex items-center justify-between gap-2 mb-4 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-xs">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFF12E] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFF12E]" />
                      </span>
                      <span className="font-subheading text-[11px] sm:text-xs uppercase tracking-widest text-[#FFF12E] font-bold">
                        Ruteo Activo · MDQ
                      </span>
                    </div>
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-white bg-white/15 px-2 py-0.5 rounded-md border border-white/20">
                      Friuli 1972
                    </span>
                  </div>

                  {/* Main 3D Card Image Asset with depth */}
                  <div className="relative w-full aspect-square max-w-[340px] flex items-center justify-center my-1 drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)] transform-style-3d">
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
                    <motion.div
                      className="bg-brand-blue-900/80 border border-white/15 p-2.5 rounded-xl flex items-center gap-2.5"
                      whileHover={reduceMotion ? undefined : { scale: 1.03, transition: snappySpring }}
                    >
                      <div className="p-1.5 rounded-lg bg-brand-yellow-500 text-brand-blue-900 shrink-0">
                        <Zap className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-subheading text-xs font-bold uppercase text-white leading-tight">
                          Envíos Same-Day
                        </p>
                        <p className="font-sans text-[10px] text-brand-blue-200">Entrega en el Día</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-brand-blue-900/80 border border-white/15 p-2.5 rounded-xl flex items-center gap-2.5"
                      whileHover={reduceMotion ? undefined : { scale: 1.03, transition: snappySpring }}
                    >
                      <div className="p-1.5 rounded-lg bg-brand-blue-500 text-white shrink-0">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-subheading text-xs font-bold uppercase text-white leading-tight">
                          Flota Propia
                        </p>
                        <p className="font-sans text-[10px] text-brand-blue-200">Cero Tercerización</p>
                      </div>
                    </motion.div>
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