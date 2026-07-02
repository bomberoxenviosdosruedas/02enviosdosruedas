'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Award, Star, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function AboutHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring' as const, 
        stiffness: 100, 
        damping: 15,
      } 
    },
  };

  return (
    <section 
      id="about-hero" 
      className="relative min-h-[75vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-950 text-white border-b border-brand-blue/20"
    >
      {/* Ambient background glows using brand colors */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(6,54,165,0.4),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(255,236,1,0.08),transparent_50%)] pointer-events-none" />

      {/* Background illustration overlay */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none">
        <Image
          src="https://i.postimg.cc/nLMx4vVc/delivery-background.jpg"
          alt="Fondo de reparto urbano"
          fill
          priority
          referrerPolicy="no-referrer"
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Copy Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-blue/30 text-brand-yellow border border-brand-yellow/30 flex items-center gap-1.5 shadow-sm">
                <Award className="h-4 w-4 text-brand-yellow animate-pulse shrink-0" />
                Nuestra Identidad
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none text-white"
            >
              Sobre <br />
              <span className="text-brand-yellow text-glow-yellow">Nosotros</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl font-sans text-slate-350 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Somos <span className="text-brand-yellow font-semibold">Envíos DosRuedas</span>, tu aliado de confianza en mensajería y delivery en Mar del Plata. Más de 7 años revolucionando la logística de última milla.
            </motion.p>

            {/* Special Callout Panel */}
            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 max-w-xl mx-auto lg:mx-0 shadow-inner space-y-3"
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Sparkles className="h-4 w-4 text-brand-yellow animate-spin-slow" />
                <h3 className="text-xs uppercase tracking-widest text-brand-yellow font-bold leading-none">
                  Nuestra Misión
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-sans text-center lg:text-left">
                Conectar personas y negocios en Mar del Plata a través de un servicio de mensajería rápido y accesible, contribuyendo al crecimiento de nuestra comunidad local en este 2026.
              </p>
            </motion.div>

          </div>

          {/* Right Column: Floating reviews widget card */}
          <div className="lg:col-span-5 relative hidden lg:block h-[400px]">
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] z-20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }}
              whileHover={{ scale: 1.025, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="rounded-3xl border border-white/10 bg-white p-8 text-slate-800 shadow-2xl relative overflow-hidden group hover:shadow-[0_0_35px_rgba(255,236,1,0.15)] transition-all duration-300">
                {/* Visual Accent Top Bar */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-blue to-brand-yellow" />
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="h-4.5 w-4.5 fill-current" />
                      <Star className="h-4.5 w-4.5 fill-current" />
                      <Star className="h-4.5 w-4.5 fill-current" />
                      <Star className="h-4.5 w-4.5 fill-current" />
                      <Star className="h-4.5 w-4.5 fill-current" />
                    </div>
                    <span className="text-xs font-bold font-mono text-slate-800">5.0 / 5</span>
                  </div>

                  <div>
                    <h4 className="text-base font-subheading uppercase font-bold text-slate-900 leading-none group-hover:text-brand-blue transition-colors">
                      Google Reviews
                    </h4>
                    <p className="text-[10px] text-slate-400 font-sans tracking-wider uppercase mt-1">Confianza Local Comprobada</p>
                  </div>

                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Basado en la confianza de cientos de clientes locales que eligen nuestra flota dedicada para máxima agilidad urbana y cero tercerización.
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                    <span className="font-mono text-brand-blue font-bold flex items-center gap-1">
                      <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                      Cero Tercerización
                    </span>
                    <span className="font-mono text-slate-550 flex items-center gap-1">
                      <Heart className="h-4 w-4 text-red-500 fill-current shrink-0" />
                      Soporte Local
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
