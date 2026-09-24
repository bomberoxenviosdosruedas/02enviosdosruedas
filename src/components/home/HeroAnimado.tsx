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

  const springTransition = { type: 'spring' as const, stiffness: 100, damping: 20 };
  const snappySpring = { type: 'spring' as const, stiffness: 300, damping: 25 };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: reduceMotion ? { duration: 0.01 } : springTransition },
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ rotateX: (-y / (rect.height / 2)) * 7, rotateY: (x / (rect.width / 2)) * 7 });
  };

  const handleMouseLeave = () => setTilt({ rotateX: 0, rotateY: 0 });

  return (
    <section id="hero-animado" className="relative w-full overflow-hidden bg-[#0950F6] text-white" style={{ minHeight: '90dvh' }}>
      <HeroProceduralBackground variant="express" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display uppercase text-[15vw] leading-none text-white/[0.04] tracking-tighter whitespace-nowrap">
          ENVIOS DOS RUEDAS
        </span>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left 7 cols - Ajuste Max: prohibido centrado en desktop */}
          <motion.div className="lg:col-span-7 space-y-7 lg:space-y-9 text-center lg:text-left" initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div className="flex justify-center lg:justify-start" variants={itemVariants}>
              <motion.span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-[#FFEC01] text-[#0950F6] shadow-[0_0_28px_rgba(255,236,1,0.45)] border border-[#FFEC01] -rotate-1 cursor-default" whileHover={reduceMotion ? undefined : { scale: 1.03, transition: snappySpring }}>
                <Sparkles className="w-3.5 h-3.5 fill-[#0950F6] text-[#0950F6]" />
                Tu Solucion Confiable en Mar del Plata
              </motion.span>
            </motion.div>

            <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-[-0.05em] leading-[0.9] flex flex-col items-center lg:items-start gap-2 select-none" variants={itemVariants}>
              <span className="kinetic-font-stretch">Mensajeria y Logistica</span>
              <span className="relative inline-block bg-white/10 px-3.5 py-1 my-1 transform -rotate-1 rounded-xl border border-[#FFEC01]/40 shadow-xl">
                <span className="relative z-10 bg-[#FFEC01] text-[#0950F6] px-3 py-1 inline-block font-display font-black rounded-lg">E-Commerce</span>
              </span>
              <span className="kinetic-font-stretch text-white">en Mar del Plata</span>
            </motion.h1>

            <motion.p className="text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 font-sans leading-[1.625] text-white/90 font-light" variants={itemVariants}>
              Somos tu partner estrategico en mensajeria urbana, envios en el dia y delivery de ultima milla. Flota propia de motos, cero tercerizacion y respuesta inmediata.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-1" variants={itemVariants}>
              <CTANestedPill href="/cotizar/express" id="hero-cta-solicitar" variant="primary" size="large">Cotiza Express</CTANestedPill>
              <CTANestedPill href="/servicios/envios-express" id="hero-cta-servicios" variant="elevated" size="large">Mira los Servicios</CTANestedPill>
            </motion.div>

            <motion.div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 text-white/90" variants={itemVariants}>
              {[
                { icon: Package, text: 'Miles de Envios' },
                { icon: MapPin, text: 'Cobertura Total MDQ' },
                { icon: FastForward, text: 'Entregas en el Dia' },
              ].map((item, i) => (
                <motion.div key={i} className="flex items-center gap-2.5 font-subheading text-[13px] uppercase tracking-[0.08em] px-3 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md" whileHover={reduceMotion ? undefined : { scale: 1.03, transition: snappySpring }}>
                  <div className="w-7 h-7 rounded-lg bg-[#FFEC01]/15 border border-[#FFEC01]/30 flex items-center justify-center text-[#FFEC01]">
                    <item.icon className="h-3.5 w-3.5" />
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right 5 cols - FloatTiltCard con Double-Bezel Max #0950F6 */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0" style={{ perspective: '1200px' }}>
            <motion.div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-[#FFEC01]/20 rounded-full blur-[100px] pointer-events-none -z-10" animate={reduceMotion ? {} : { scale: [1, 1.06, 1], opacity: [0.2, 0.3, 0.2] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
            <div className="absolute w-60 sm:w-80 h-60 sm:h-80 bg-[#3570F8]/30 rounded-full blur-[90px] pointer-events-none -z-10" />

            <motion.div
              ref={cardRef}
              initial={{ opacity: 0, y: 30, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: reduceMotion ? 0 : tilt.rotateX, rotateY: reduceMotion ? 0 : tilt.rotateY }}
              transition={reduceMotion ? { duration: 0.01 } : { opacity: { duration: 0.6 }, scale: { duration: 0.6 }, rotateX: snappySpring, rotateY: snappySpring }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              whileHover={reduceMotion ? undefined : { y: -6, transition: snappySpring }}
              className="relative w-full max-w-[460px] transform-style-3d cursor-pointer"
            >
              <div className="p-3 sm:p-4 rounded-[32px] bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_25px_50px_-12px_rgba(9,80,246,0.35)] hover:shadow-[0_0_28px_rgba(255,236,1,0.45)] transition-shadow duration-300">
                <div className="relative rounded-[20px] overflow-hidden bg-[#0950F6] border border-white/15 p-4 sm:p-6 flex flex-col items-center">
                  <div className="w-full flex items-center justify-between gap-2 mb-4 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFEC01] opacity-75" /><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFEC01]" /></span>
                      <span className="font-subheading text-[11px] sm:text-xs uppercase tracking-widest text-[#FFEC01] font-bold">Ruteo Activo · MDQ</span>
                    </div>
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-white bg-white/15 px-2 py-0.5 rounded-md border border-white/20">Friuli 1972</span>
                  </div>

                  <div className="relative w-full aspect-square max-w-[340px] flex items-center justify-center my-1 drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
                    <Image src="/card_mapa.webp" alt="Envios DosRuedas Mapa" width={500} height={500} priority className="object-contain w-full h-full hover:scale-105 transition-transform duration-500" />
                  </div>

                  <div className="w-full grid grid-cols-2 gap-2.5 mt-3">
                    <motion.div className="bg-white/10 border border-white/15 p-2.5 rounded-xl flex items-center gap-2.5 backdrop-blur" whileHover={reduceMotion ? undefined : { scale: 1.03, transition: snappySpring }}>
                      <div className="p-1.5 rounded-lg bg-[#FFEC01] text-[#0950F6] shrink-0"><Zap className="h-4 w-4" /></div>
                      <div><p className="font-subheading text-xs font-bold uppercase text-white leading-tight">Envios Same-Day</p><p className="font-sans text-[10px] text-white/70">Entrega en el Dia</p></div>
                    </motion.div>
                    <motion.div className="bg-white/10 border border-white/15 p-2.5 rounded-xl flex items-center gap-2.5 backdrop-blur" whileHover={reduceMotion ? undefined : { scale: 1.03, transition: snappySpring }}>
                      <div className="p-1.5 rounded-lg bg-[#3570F8] text-white shrink-0"><ShieldCheck className="h-4 w-4" /></div>
                      <div><p className="font-subheading text-xs font-bold uppercase text-white leading-tight">Flota Propia</p><p className="font-sans text-[10px] text-white/70">Cero Tercerizacion</p></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#FFEC01] pointer-events-none" />
    </section>
  );
}
