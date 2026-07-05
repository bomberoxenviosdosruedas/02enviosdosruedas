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
        damping: 15,
      }
    },
  };

  return (
    <section
      id="express-hero"
      className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-blue border-b border-blue-200/60 text-white"
    >
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,236,1,0.08),transparent_40%)]" />
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
              <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue flex items-center gap-1.5 shadow-accent-md">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Disponible en Mar del Plata
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none"
            >
              Envíos Express <br />
              <span className="text-brand-yellow">Inmediatos</span>
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
                className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellow/95 text-brand-blue font-subheading tracking-wider text-base uppercase px-8 py-4 rounded-xl shadow-accent-md hover:shadow-accent-lg transition-all duration-200 hover:scale-[1.03] flex items-center justify-center gap-2 font-semibold"
              >
                Cotizá tu Envío Express
                <ArrowRight className="h-5 w-5" />
              </Link>

              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="express-hero-cta-whatsapp"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-subheading tracking-wider text-base uppercase px-8 py-4 rounded-xl border border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5 text-brand-yellow" />
                Hablar por WhatsApp
              </a>
            </motion.div>

            {/* Feature stats summary line */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-8 border-t border-white/15 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-xl text-brand-yellow">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-200 leading-none mb-1">Entregas en</p>
                  <p className="text-sm font-subheading uppercase font-semibold">Menos de 2 Horas</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-xl text-brand-yellow">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-200 leading-none mb-1">Despacho con</p>
                  <p className="text-sm font-subheading uppercase font-semibold">Custodia Digital</p>
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
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-white p-3.5">
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-3.5 bg-slate-100">
                  <Image
                    src="/images/card-mapa.webp"
                    alt="Mapa de Cobertura de Mar del Plata"
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-brand-blue text-white px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-widest">
                    MAPA EN VIVO
                  </div>
                </div>
                <div className="flex items-center justify-between text-slate-800">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider block">Rango de Entrega</span>
                    <span className="text-[10px] text-slate-400 font-sans block mt-0.5">Asignación prioritaria directa</span>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-bold uppercase font-mono tracking-wider">
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
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-slate-900/95 backdrop-blur-md p-5 text-white">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-2.5 rounded-xl bg-brand-yellow text-brand-blue">
                    <Bike className="h-5.5 w-5.5 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-yellow">MOTO MENSAJERO</h4>
                    <p className="text-sm font-subheading uppercase font-semibold text-white leading-tight">Matias Cejas</p>
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
              <div className="px-4 py-2 bg-brand-yellow text-brand-blue font-bold rounded-full text-xs uppercase tracking-wider shadow-lg border border-white flex items-center gap-1.5">
                <Zap className="h-4.5 w-4.5 animate-bounce fill-current" />
                Entrega Inmediata
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
