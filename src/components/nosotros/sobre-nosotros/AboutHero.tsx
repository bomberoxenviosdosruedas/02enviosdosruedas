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
        damping: 20,
      } 
    },
  };

  return (
    <section 
      id="about-hero" 
      className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-950 text-white border-b-4 border-brand-blue"
    >
      {/* Ambient background glows using brand colors */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(6,54,165,0.45),transparent_50%)] pointer-events-none" />
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
            
            {/* Badge in Bebas Neue */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="px-4 py-1.5 rounded-full text-sm font-subheading uppercase tracking-widest bg-brand-blue border-2 border-brand-yellow text-brand-yellow flex items-center gap-1.5 shadow-[2px_2px_0px_rgba(255,236,1,0.3)]">
                <Award className="h-4.5 w-4.5 text-brand-yellow animate-pulse shrink-0" />
                NUESTRA IDENTIDAD
              </span>
            </motion.div>

            {/* Title with Inline Image Typography */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-none text-white flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2"
            >
              <span>SOBRE</span>
              <span className="relative inline-block w-16 h-10 sm:w-20 sm:h-12 rounded-full overflow-hidden border-2 border-brand-yellow align-middle shrink-0 shadow-[2px_2px_0px_#0636A5]">
                <Image
                  src="https://picsum.photos/id/350/200/100" 
                  alt="Reparto Mar del Plata"
                  fill
                  className="object-cover"
                />
              </span>
              <span className="text-brand-yellow text-glow-yellow">NOSOTROS</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl font-sans text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Somos <span className="text-brand-yellow font-bold">Envíos DosRuedas</span>, tu aliado estratégico en mensajería y delivery en Mar del Plata. Conocé cómo revolucionamos la logística de última milla.
            </motion.p>

            {/* Special Callout Panel (Neo-Brutalist Card) */}
            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-3xl bg-slate-900 border-2 border-brand-blue max-w-xl mx-auto lg:mx-0 shadow-[4px_4px_0px_#FFEC01] space-y-3 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#FFEC01] transition-all duration-200"
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Sparkles className="h-4.5 w-4.5 text-brand-yellow animate-spin-slow" />
                <h3 className="text-sm font-subheading uppercase tracking-wider text-brand-yellow font-bold leading-none">
                  Nuestra Misión 2026
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-sans text-center lg:text-left">
                Conectamos personas y negocios en Mar del Plata mediante un servicio motorizado rápido, seguro y 100% propio. Impulsamos tu crecimiento local reduciendo tus costos operativos.
              </p>
            </motion.div>

          </div>

          {/* Right Column: Floating reviews widget card (Neo-Brutalist) */}
          <div className="lg:col-span-5 relative hidden lg:block h-[400px]">
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] z-20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }}
              whileHover={{ scale: 1.025, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="rounded-3xl border-2 border-brand-blue bg-white p-8 text-slate-900 shadow-[8px_8px_0px_#FFEC01] relative overflow-hidden group transition-all duration-300">
                {/* Visual Accent Top Bar */}
                <div className="absolute top-0 inset-x-0 h-2 bg-brand-blue" />
                
                <div className="space-y-6 relative z-10 pt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-brand-yellow">
                      <Star className="h-5 w-5 fill-current stroke-brand-blue stroke-2" />
                      <Star className="h-5 w-5 fill-current stroke-brand-blue stroke-2" />
                      <Star className="h-5 w-5 fill-current stroke-brand-blue stroke-2" />
                      <Star className="h-5 w-5 fill-current stroke-brand-blue stroke-2" />
                      <Star className="h-5 w-5 fill-current stroke-brand-blue stroke-2" />
                    </div>
                    <span className="text-sm font-subheading font-bold bg-brand-blue text-brand-yellow px-2.5 py-0.5 rounded-full">5.0 / 5</span>
                  </div>

                  <div>
                    <h4 className="text-2xl font-display uppercase font-bold text-brand-blue leading-none">
                      GOOGLE REVIEWS
                    </h4>
                    <p className="text-xs text-slate-500 font-subheading tracking-wider uppercase mt-1">CONFIANZA LOCAL COMPROBADA</p>
                  </div>

                  <p className="text-sm text-slate-650 font-sans leading-relaxed">
                    Nuestros clientes avalan la excelencia operativa. Flota propia y coordinada con base operativa central en Mar del Plata.
                  </p>

                  <div className="pt-4 border-t-2 border-slate-100 flex justify-between items-center text-xs">
                    <span className="font-subheading text-brand-blue font-bold flex items-center gap-1 text-sm tracking-wider">
                      <ShieldCheck className="h-4.5 w-4.5 text-brand-blue shrink-0 fill-brand-yellow" />
                      FLOTA PROPIA
                    </span>
                    <span className="font-subheading text-slate-600 flex items-center gap-1 text-sm tracking-wider">
                      <Heart className="h-4.5 w-4.5 text-red-500 fill-current shrink-0" />
                      MAR DEL PLATA
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
