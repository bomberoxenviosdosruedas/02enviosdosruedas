'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { MailOpen, Sparkles, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function ContactHero() {
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
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        duration: 0.8,
      }
    },
  };

  return (
    <section
      id="contacto-hero"
      className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#00277c] to-[#0636A5] text-white border-b border-white/10"
    >
      {/* Ambient background glows using brand colors */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(0,32,104,0.45),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(255,236,1,0.08),transparent_50%)] pointer-events-none" />

      {/* Background image overlay */}
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
              <span className="px-4 py-1.5 rounded-full text-sm font-subheading uppercase tracking-widest bg-white/10 border-2 border-brand-yellow text-brand-yellow flex items-center gap-1.5 shadow-[2px_2px_0px_rgba(255,236,1,0.35)]">
                <MailOpen className="h-4.5 w-4.5 text-brand-yellow animate-pulse shrink-0" />
                ASISTENCIA COMERCIAL
              </span>
            </motion.div>

            {/* Title with Inline Image Typography */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-none text-white flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2"
            >
              <span>CONTACTO</span>
              <span className="relative inline-block w-16 h-10 sm:w-20 sm:h-12 rounded-full overflow-hidden border-2 border-brand-yellow align-middle shrink-0 shadow-[2px_2px_0px_var(--color-brand-blue)]">
                <Image
                  src="https://picsum.photos/id/1071/200/100"
                  alt="Asesoría Comercial"
                  fill
                  className="object-cover"
                />
              </span>
              <span className="text-brand-yellow text-glow-yellow">COMERCIAL</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl font-sans text-brand-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              ¿Listo para escalar la logística de tu negocio en Mar del Plata? Hablá con un asesor comercial y diseñemos un esquema tarifario a tu medida para este 2026.
            </motion.p>

            {/* Special Callout Panel (Neo-Brutalist) */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-xl mx-auto lg:mx-0 shadow-lg space-y-3 backdrop-blur-sm transition-all duration-200 hover:border-brand-yellow/30"
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Sparkles className="h-4.5 w-4.5 text-brand-yellow animate-spin-slow" />
                <h3 className="text-sm font-subheading uppercase tracking-wider text-brand-yellow font-bold leading-none">
                  PROPUESTA PERSONALIZADA
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-brand-blue-200 leading-relaxed font-sans text-center lg:text-left">
                Analizamos tu volumen de envíos para diseñar un plan e-commerce, 3PL o de ruteo masivo con tarifas preferenciales y facturación mensual consolidada.
              </p>
            </motion.div>

          </div>

          {/* Right Column: Floating Contact Widget Card (Neo-Brutalist) */}
          <div className="lg:col-span-5 relative hidden lg:block h-[400px]">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] z-20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.025, y: -4 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8, delay: 0.3 }}
            >
              <div className="double-bezel-outer bg-[#E6EEFE]/80 hover:shadow-[0_0_20px_rgba(6,54,165,0.15)] border border-[#BACEFD] p-2 rounded-2xl group transition-all duration-300 relative">
                <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm text-brand-blue-700 space-y-6 relative overflow-hidden">
                  {/* Visual Accent Top Bar */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-brand-blue" />

                  <div className="space-y-6 relative z-10 pt-2">
                    <div>
                      <h4 className="text-2xl font-display uppercase font-bold text-brand-blue leading-none">
                        DATOS OFICIALES
                      </h4>
                      <p className="text-xs text-brand-blue-400 font-subheading tracking-wider uppercase mt-1">RESPUESTAS EN EL DÍA</p>
                    </div>

                    <div className="space-y-4 text-sm text-brand-blue-500 font-sans">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-brand-blue shrink-0 group-hover:scale-105 transition-transform" />
                        <span className="font-mono font-bold text-brand-blue-700">+54 223 660-2699</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-brand-blue shrink-0" />
                        <span className="break-all font-mono font-bold text-brand-blue-700">contacto@enviosdosruedas.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-brand-blue shrink-0" />
                        <span className="font-semibold text-brand-blue-700">Friuli 1972, Mar del Plata</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t-2 border-brand-blue-50 flex justify-between items-center text-xs">
                      <span className="font-subheading text-brand-blue font-bold flex items-center gap-1 text-sm tracking-wider">
                        <ShieldCheck className="h-4.5 w-4.5 text-brand-blue shrink-0 fill-brand-yellow" />
                        ATENCIÓN COMERCIAL
                      </span>
                      <span className="text-brand-blue-500 font-subheading text-sm tracking-wider font-bold uppercase animate-pulse">DISPONIBLE</span>
                    </div>
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
