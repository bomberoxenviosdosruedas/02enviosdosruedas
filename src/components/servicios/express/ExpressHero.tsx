'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Bike, Phone, Clock, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function ExpressHero() {
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
      id="express-hero"
      className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-blue border-b-4 border-brand-yellow text-white"
    >
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,204,0,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_50%)]" />

      {/* Background illustration overlay */}
      <div className="absolute inset-0 opacity-15 mix-blend-overlay">
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
          {/* Main Copy Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">

            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="px-4 py-1.5 rounded-full text-sm font-subheading uppercase tracking-widest bg-brand-yellow text-brand-blue border-2 border-brand-blue flex items-center gap-1.5 shadow-[2px_2px_0px_#003399] font-bold">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                Disponible en Mar del Plata
              </span>
            </motion.div>

            {/* Title with Inline Image Typography */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-3"
            >
              <span>ENVÍOS</span>
              <span className="relative inline-block w-16 h-10 sm:w-20 sm:h-12 rounded-full overflow-hidden border-2 border-brand-yellow align-middle shrink-0 shadow-[2px_2px_0px_#003399]">
                <Image
                  src="/express-hero-inline.png"
                  alt="Envíos Express"
                  fill
                  className="object-cover"
                />
              </span>
              <span className="text-brand-yellow font-bold">EXPRESS INMEDIATOS</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed text-blue-50"
            >
              La solución premium para operaciones de alta criticidad horaria. Vos tenés el control total: elegí el rango exacto de entrega con certeza absoluta en toda la ciudad.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/cotizar/express"
                id="express-hero-cta-cotizar"
                className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellow/95 text-brand-blue font-subheading tracking-wider text-base uppercase px-8 py-4 rounded-xl border-2 border-brand-blue shadow-[4px_4px_0px_#003399] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#003399] transition-all duration-200 flex items-center justify-center gap-2.5 font-bold cursor-pointer"
              >
                Cotizá tu Envío Express
                <ArrowRight className="h-5 w-5 shrink-0" />
              </Link>

              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="express-hero-cta-whatsapp"
                className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white font-subheading tracking-wider text-base uppercase px-8 py-4 rounded-xl border-2 border-white shadow-[4px_4px_0px_#FFCC00] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#FFCC00] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="h-5 w-5 text-brand-yellow shrink-0" />
                Hablar por WhatsApp
              </a>
            </motion.div>

            {/* Feature stats summary line */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-8 border-t-2 border-white/15 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-xl text-brand-yellow border border-white/10">
                  <Clock className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-200 leading-none mb-1">Entregas en</p>
                  <p className="text-sm font-subheading uppercase font-semibold text-slate-100">Menos de 2 Horas</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-xl text-brand-yellow border border-white/10">
                  <ShieldCheck className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-200 leading-none mb-1">Despacho con</p>
                  <p className="text-sm font-subheading uppercase font-semibold text-slate-100">Custodia Digital</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Graphics Column */}
          <div className="lg:col-span-5 relative hidden lg:block h-[450px]">
            {/* Card 1: Map/Tracking Card */}
            <motion.div
              className="absolute top-8 right-4 w-[80%] z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }}
              whileHover={{ scale: 1.02, zIndex: 40 }}
            >
              <div className="relative rounded-3xl border-2 border-brand-blue bg-white p-3.5 shadow-[6px_6px_0px_#FFCC00]">
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-3.5 bg-slate-100 border border-slate-200">
                  <Image
                    src="/card_mapa.webp"
                    alt="Mapa de Cobertura de Mar del Plata"
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-brand-blue text-brand-yellow border border-brand-yellow px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-widest font-mono">
                    MAPA EN VIVO
                  </div>
                </div>
                <div className="flex items-center justify-between text-brand-ink">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider block">Rango de Entrega</span>
                    <span className="text-[10px] text-slate-400 font-sans block mt-0.5">Asignación prioritaria directa</span>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold uppercase font-mono tracking-wider">
                    Activo
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Messenger On Road Card */}
            <motion.div
              className="absolute bottom-8 left-0 w-[75%] z-30"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.6 } }}
              whileHover={{ scale: 1.02, zIndex: 40 }}
            >
              <div className="relative rounded-3xl border-2 border-brand-yellow bg-slate-900 p-5 text-white shadow-[6px_6px_0px_#003399]">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-2.5 rounded-xl bg-brand-yellow text-brand-blue border border-brand-blue">
                    <Bike className="h-5.5 w-5.5 animate-pulse shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow leading-none mb-1">MOTO MENSAJERO</h4>
                    <p className="text-sm font-subheading uppercase font-semibold text-white leading-tight">MATIAS CEJAS</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-blue-200 font-sans">Velocidad Promedio</span>
                    <span className="font-semibold font-mono">Tránsito optimizado</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200 font-sans">Tiempo Estimado</span>
                    <span className="font-semibold text-brand-yellow font-mono">&lt; 120 Minutos</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Info Badge */}
            <motion.div
              className="absolute top-1/2 left-1/4 -translate-y-1/2 z-35"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.8 } }}
            >
              <div className="px-4 py-2 bg-brand-yellow text-brand-blue border-2 border-brand-blue font-bold rounded-full text-xs font-subheading tracking-wider uppercase shadow-[3px_3px_0px_#003399] flex items-center gap-1.5">
                <Zap className="h-4.5 w-4.5 animate-bounce fill-current shrink-0" />
                Entrega Inmediata
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
