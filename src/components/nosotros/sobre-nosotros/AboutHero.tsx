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
      className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-brand-blue-700 to-brand-blue-600 text-white border-b border-brand-blue-100/10"
    >
      {/* Ambient background glows using brand colors */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,var(--color-brand-blue-700),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,var(--color-brand-yellow-500),transparent_50%)] pointer-events-none" />

      {/* Background illustration overlay */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none">
        <Image
          src="/delivery-background.jpg"
          alt="Fondo de reparto urbano"
          fill={true}
          priority
          sizes="100vw"
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
              <span className="px-4 py-1.5 rounded-full text-base font-subheading uppercase tracking-widest bg-brand-blue-700/60 border border-brand-yellow-500/30 text-brand-yellow-500 flex items-center gap-1.5 shadow-sm backdrop-blur-sm">
                <Award className="h-4.5 w-4.5 text-brand-yellow-500 animate-pulse shrink-0" />
                NUESTRA IDENTIDAD
              </span>
            </motion.div>
 
            {/* Title with Inline Image Typography */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-[0.02em] leading-[1.1] text-white flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2"
            >
              <span>LÍDERES EN</span>
              <span className="relative inline-block w-16 h-10 sm:w-20 sm:h-12 rounded-full overflow-hidden border-2 border-brand-yellow-500 align-middle shrink-0 shadow-md">
                <Image
                  src="/img/generales/envios_express.webp"
                  alt="Reparto Mar del Plata"
                  fill={true}
                  sizes="(max-width: 768px) 64px, 80px"
                  className="object-cover"
                />
              </span>
              <span className="text-brand-yellow-500 drop-shadow-[0_2px_10px_var(--color-brand-yellow-500)]">ÚLTIMA MILLA</span>
            </motion.h1>
 
            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl font-sans text-brand-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed accent-line-left pl-6"
            >
              Nuestra historia comenzó con una simple meta: hacer los envíos locales más eficientes, rápidos y confiables en Mar del Plata.
            </motion.p>
 
            {/* Special Callout Panel (Double-Bezel on Blue Background) */}
            <motion.div 
              variants={itemVariants}
              className="double-bezel-outer bg-brand-blue-50/90 border border-brand-blue-100 p-2 rounded-2xl max-w-xl mx-auto lg:mx-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="double-bezel-inner bg-white p-5 rounded-xl border border-brand-blue-50/50 shadow-sm text-brand-blue-700 space-y-2">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Sparkles className="h-4.5 w-4.5 text-brand-yellow-500 animate-spin-slow" />
                  <h3 className="text-xs font-sans font-bold uppercase tracking-wider text-brand-blue-700 leading-none">
                    Nuestra Misión 2026
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-brand-blue-600/90 leading-relaxed font-sans text-center lg:text-left">
                  Conectamos personas y negocios en Mar del Plata mediante un servicio motorizado rápido, seguro y 100% propio. Impulsamos tu crecimiento local reduciendo tus costos operativos.
                </p>
              </div>
            </motion.div>
 
          </div>
 
          {/* Right Column: Floating reviews widget card (Double-Bezel on Blue Background) */}
          <div className="lg:col-span-5 relative hidden lg:block h-[400px]">
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] z-20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }}
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="double-bezel-outer bg-brand-blue-50/90 border border-brand-blue-100 p-2 rounded-2xl shadow-[0_20px_50px_var(--color-brand-blue-700)] group transition-all duration-300">
                <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm text-brand-blue space-y-6">
                  {/* Visual Accent Top Bar */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-brand-blue" />
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1 text-brand-yellow-500">
                      <Star className="h-5 w-5 fill-current stroke-brand-blue stroke-2" />
                      <Star className="h-5 w-5 fill-current stroke-brand-blue stroke-2" />
                      <Star className="h-5 w-5 fill-current stroke-brand-blue stroke-2" />
                      <Star className="h-5 w-5 fill-current stroke-brand-blue stroke-2" />
                      <Star className="h-5 w-5 fill-current stroke-brand-blue stroke-2" />
                    </div>
                    <span className="text-xs font-subheading font-bold bg-brand-blue text-brand-yellow px-2.5 py-0.5 rounded-full tracking-wider">5.0 / 5</span>
                  </div>
 
                  <div>
                    <h4 className="text-3xl font-subheading uppercase font-bold text-brand-blue leading-none tracking-wider">
                      GOOGLE REVIEWS
                    </h4>
                    <p className="text-xs text-brand-blue-400 font-sans font-bold tracking-wider uppercase mt-1">CONFIANZA LOCAL COMPROBADA</p>
                  </div>
 
                  <p className="text-sm text-brand-blue-600 font-sans leading-relaxed">
                    Nuestros clientes avalan la excelencia operativa. Flota propia y coordinada con base operativa central en Mar del Plata.
                  </p>
 
                  <div className="pt-4 border-t border-brand-blue-100 flex justify-between items-center text-xs">
                    <span className="font-subheading text-brand-blue font-bold flex items-center gap-1 text-sm tracking-wider">
                      <ShieldCheck className="h-4.5 w-4.5 text-brand-blue shrink-0 fill-brand-yellow-500/25" />
                      FLOTA PROPIA
                    </span>
                    <span className="font-subheading text-brand-blue-600 flex items-center gap-1 text-sm tracking-wider">
                      <Heart className="h-4.5 w-4.5 text-brand-yellow-500 fill-current shrink-0" />
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
