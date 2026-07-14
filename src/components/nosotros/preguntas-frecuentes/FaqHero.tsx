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
      className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#0636A5] to-[#0742CA] text-white border-b border-brand-blue-100/10"
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
              <span className="px-4 py-1.5 rounded-full text-base font-subheading uppercase tracking-widest bg-brand-blue-700/60 border border-brand-yellow-500/30 text-brand-yellow-500 flex items-center gap-1.5 shadow-sm backdrop-blur-sm">
                <HelpCircle className="h-4 w-4 text-brand-yellow-500 animate-pulse shrink-0" />
                CENTRO DE SOPORTE
              </span>
            </motion.div>
 
            {/* Title with Inline Image Typography */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-[0.02em] leading-[1.1] text-white flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2"
            >
              <span>CENTRO DE</span>
              <span className="relative inline-block w-16 h-10 sm:w-20 sm:h-12 rounded-full overflow-hidden border-2 border-brand-yellow-500 align-middle shrink-0 shadow-md">
                <Image
                  src="https://picsum.photos/id/1070/200/100" 
                  alt="Preguntas Soporte"
                  fill
                  className="object-cover"
                />
              </span>
              <span className="text-brand-yellow-500 drop-shadow-[0_2px_10px_rgba(255,236,1,0.25)]">RESPUESTAS</span>
            </motion.h1>
 
            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl font-sans text-brand-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Despejá tus dudas sobre los envíos, coberturas, métodos de pago y dudas frecuentes.
            </motion.p>
 
            {/* Special Callout Panel (Double-Bezel on Blue Background) */}
            <motion.div 
              variants={itemVariants}
              className="double-bezel-outer bg-[#E6EEFE]/90 border border-[#BACEFD] p-2 rounded-2xl max-w-xl mx-auto lg:mx-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="double-bezel-inner bg-white p-5 rounded-xl border border-brand-blue-50/50 shadow-sm text-brand-blue-700 space-y-2">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Sparkles className="h-4 w-4 text-brand-yellow-500 animate-spin-slow" />
                  <h3 className="text-xs font-sans font-bold uppercase tracking-wider text-brand-blue-700 leading-none">
                    Límites de Carga y Seguridad
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-brand-blue-600/90 leading-relaxed font-sans text-center lg:text-left">
                  Transportamos paquetes ligeros de hasta 5 kg con medidas de 40x40x30 cm. Esto garantiza la agilidad del tránsito urbano y resguarda la seguridad vial de nuestros repartidores.
                </p>
              </div>
            </motion.div>
 
          </div>
 
          {/* Right Column: Floating FAQ Widget Card (Double-Bezel on Blue Background) */}
          <div className="lg:col-span-5 relative hidden lg:block h-[400px]">
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] z-20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }}
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="double-bezel-outer bg-[#E6EEFE]/90 border border-[#BACEFD] p-2 rounded-2xl shadow-[0_20px_50px_rgba(0,39,124,0.15)] group transition-all duration-300">
                <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm text-brand-blue space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-brand-blue-50 text-brand-blue border border-brand-blue-100 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-brand-blue-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-sans font-bold uppercase tracking-wider text-brand-blue-700 leading-none">
                        HORARIO OPERATIVO
                      </h4>
                      <p className="text-xs text-brand-blue-400 font-sans font-bold tracking-widest uppercase mt-1">ATENCIÓN EN CALLE</p>
                    </div>
                  </div>
 
                  <p className="text-sm text-brand-blue-600 font-sans leading-relaxed">
                    Lunes a Viernes de 9:00 a 18:00 hs y Sábados de 10:00 a 15:00 hs. Escribinos para coordinar tus despachos directamente.
                  </p>
 
                  <div className="pt-4 border-t border-brand-blue-50 flex justify-between items-center text-xs">
                    <span className="font-sans font-bold text-brand-blue-700 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                      <ShieldCheck className="h-4.5 w-4.5 text-brand-blue shrink-0 fill-brand-yellow-500/25" />
                      SOPORTE EN VIVO
                    </span>
                    <a 
                      href="https://wa.me/542236602699"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-subheading text-brand-blue hover:text-brand-blue-600 flex items-center gap-1 text-base tracking-wider transition-colors duration-200"
                    >
                      <MessageSquare className="h-4 w-4 text-brand-blue shrink-0" />
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
