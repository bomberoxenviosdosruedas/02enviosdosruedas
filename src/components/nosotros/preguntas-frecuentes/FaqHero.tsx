'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { HelpCircle, Sparkles, MessageSquare, ShieldCheck, Clock } from 'lucide-react';

export default function FaqHero() {
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
      id="faq-hero" 
      className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-950 text-white border-b-4 border-brand-blue"
    >
      {/* Ambient background glows */}
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
                <HelpCircle className="h-4.5 w-4.5 text-brand-yellow animate-pulse shrink-0" />
                CENTRO DE SOPORTE
              </span>
            </motion.div>

            {/* Title with Inline Image Typography */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-none text-white flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2"
            >
              <span>PREGUNTAS</span>
              <span className="relative inline-block w-16 h-10 sm:w-20 sm:h-12 rounded-full overflow-hidden border-2 border-brand-yellow align-middle shrink-0 shadow-[2px_2px_0px_#0636A5]">
                <Image
                  src="https://picsum.photos/id/1070/200/100" 
                  alt="Preguntas Soporte"
                  fill
                  className="object-cover"
                />
              </span>
              <span className="text-brand-yellow text-glow-yellow">FRECUENTES</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl font-sans text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Todo lo que necesitás saber sobre nuestra operativa en Mar del Plata, tarifas zonificadas y SLAs de entrega garantizada para este 2026.
            </motion.p>

            {/* Special Callout Panel (Neo-Brutalist) */}
            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-3xl bg-slate-900 border-2 border-brand-blue max-w-xl mx-auto lg:mx-0 shadow-[4px_4px_0px_#FFEC01] space-y-3 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#FFEC01] transition-all duration-200"
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Sparkles className="h-4.5 w-4.5 text-brand-yellow animate-spin-slow" />
                <h3 className="text-sm font-subheading uppercase tracking-wider text-brand-yellow font-bold leading-none">
                  Límites de Carga y Seguridad
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-sans text-center lg:text-left">
                Transportamos paquetes ligeros de hasta 5 kg con medidas de 40x40x30 cm. Esto garantiza la agilidad del tránsito urbano y resguarda la seguridad vial de nuestros repartidores.
              </p>
            </motion.div>

          </div>

          {/* Right Column: Floating FAQ Widget Card (Neo-Brutalist) */}
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
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-brand-blue text-brand-yellow border-2 border-brand-blue rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-display uppercase font-bold text-brand-blue leading-none">
                        HORARIO OPERATIVO
                      </h4>
                      <p className="text-xs text-slate-500 font-subheading tracking-wider uppercase mt-1">ATENCIÓN EN CALLE</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-650 font-sans leading-relaxed">
                    Lunes a Viernes de 9:00 a 18:00 hs y Sábados de 10:00 a 15:00 hs. Escribinos para coordinar tus despachos directamente.
                  </p>

                  <div className="pt-4 border-t-2 border-slate-100 flex justify-between items-center text-xs">
                    <span className="font-subheading text-brand-blue font-bold flex items-center gap-1 text-sm tracking-wider">
                      <ShieldCheck className="h-4.5 w-4.5 text-brand-blue shrink-0 fill-brand-yellow" />
                      SOPORTE EN VIVO
                    </span>
                    <a 
                      href="https://wa.me/542236602699"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-subheading text-slate-600 hover:text-brand-blue flex items-center gap-1 text-sm tracking-wider transition-colors duration-200"
                    >
                      <MessageSquare className="h-4.5 w-4.5 text-brand-blue shrink-0" />
                      WHATSAPP
                    </a>
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

