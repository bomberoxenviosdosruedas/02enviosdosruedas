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
      className="relative w-full min-h-dvh pt-32 pb-16 lg:py-0 flex items-center justify-center overflow-hidden bg-brand-blue-700 text-white"
    >
      {/* Background atmospheric depth & blooms */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(6,54,165,0.15)_0%,transparent_70%)]" />
      <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-brand-yellow-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-brand-blue-500/20 blur-[120px] pointer-events-none" />

      {/* Ghost Wordmark Monumental de Fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display uppercase text-[15vw] leading-none text-white/[0.035] tracking-tighter whitespace-nowrap">
          ENVÍOS EXPRESS
        </span>
      </div>

      {/* Background illustration overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.05] mix-blend-overlay pointer-events-none">
        <Image
          src="/delivery-background.jpg"
          alt="Fondo de reparto urbano"
          fill={true}
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-8 my-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Copy Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">

            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow-500 text-brand-blue-900 border border-brand-yellow-500 flex items-center gap-2 shadow-accent-sm">
                <span className="h-2 w-2 rounded-full bg-brand-blue-700 animate-ping shrink-0" />
                Entrega Inmediata en Mar del Plata
              </span>
            </motion.div>

            {/* Title with Signature Knockout Treatment */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.0] sm:leading-[0.95] flex flex-col items-center lg:items-start select-none"
            >
              <span>ENVÍOS URBANOS</span>
              <span className="bg-brand-yellow-500 text-brand-blue-900 px-3 py-1 my-1.5 inline-block transform -rotate-1 rounded-sm shadow-sm">
                EXPRESS INMEDIATOS
              </span>
              <span className="text-white text-3xl sm:text-4xl lg:text-5xl">
                MENSAJERÍA EN MENOS DE 2 HORAS
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed text-brand-blue-50 font-normal"
            >
              Prioridad absoluta y cadetería dedicada. Tu paquete entregado en el día con seguimiento digital y confirmación por WhatsApp en todo el ejido de Mar del Plata.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/cotizar/express"
                id="express-hero-cta-cotizar"
                className="w-full sm:w-auto cta-nested-pill bg-brand-yellow-500 text-brand-blue-900 hover:bg-brand-yellow-400 font-bold px-8 py-3.5 shadow-accent-md hover:shadow-cta-glow cursor-pointer transition-all flex items-center justify-between gap-3"
              >
                <span>Cotizá tu Envío Express</span>
                <span className="cta-nested-icon bg-brand-blue-700/10 text-brand-blue-900">
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </span>
              </Link>

              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="express-hero-cta-whatsapp"
                className="w-full sm:w-auto cta-nested-pill bg-brand-yellow-500 text-brand-blue-900 hover:bg-brand-yellow-400 border border-brand-yellow-500 font-bold px-8 py-3.5 shadow-accent-sm cursor-pointer transition-all flex items-center justify-between gap-3"
              >
                <span>Hablar por WhatsApp</span>
                <span className="cta-nested-icon bg-brand-blue-700/10 text-brand-blue-900">
                  <Phone className="h-4 w-4 shrink-0" />
                </span>
              </a>
            </motion.div>

            {/* Feature stats summary line */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-8 border-t border-white/15 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/10 rounded-xl text-brand-yellow-500 border border-white/10 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-blue-200 leading-none mb-1 font-mono">Tiempo de Entrega</p>
                  <p className="text-sm font-subheading uppercase font-bold text-white tracking-wider">Menos de 2 Horas</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/10 rounded-xl text-brand-yellow-500 border border-white/10 shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-blue-200 leading-none mb-1 font-mono">Seguridad</p>
                  <p className="text-sm font-subheading uppercase font-bold text-white tracking-wider">Custodia Digital</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Graphics Column */}
          <div className="lg:col-span-5 relative hidden lg:block h-[450px]">
            {/* Card 1: Map/Tracking Card - Double Bezel */}
            <motion.div
              className="absolute top-8 right-4 w-[82%] z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }}
              whileHover={{ scale: 1.02, zIndex: 40 }}
            >
              <div className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 rounded-2xl p-2 shadow-float hover:shadow-antigravity-deep hover:border-brand-blue-300 transition-all duration-500 w-full">
                <div className="double-bezel-inner bg-white rounded-xl border border-brand-blue-50/50 shadow-sm p-4">
                  <div className="relative h-44 w-full rounded-xl overflow-hidden mb-3 bg-brand-blue-50 border border-brand-blue-100">
                    <Image
                      src="/card_mapa.webp"
                      alt="Mapa de Cobertura de Mar del Plata"
                      fill={true}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-brand-blue-700 text-brand-yellow-500 border border-brand-yellow-500 px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-widest font-mono">
                      MAPA EN VIVO
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-brand-blue-700">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider block font-subheading">Rango de Entrega MDQ</span>
                      <span className="text-[10px] text-brand-blue-400 font-sans block mt-0.5">Asignación prioritaria directa</span>
                    </div>
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200 font-bold uppercase font-mono tracking-wider">
                      Activo
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Messenger On Road Card - Double Bezel Dark variant */}
            <motion.div
              className="absolute bottom-6 left-0 w-[78%] z-30"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.6 } }}
              whileHover={{ scale: 1.02, zIndex: 40 }}
            >
              <div className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 rounded-2xl p-2 shadow-float hover:shadow-antigravity-deep hover:border-brand-blue-300 transition-all duration-500 w-full">
                <div className="double-bezel-inner bg-brand-blue-700 rounded-xl border border-brand-blue-600/50 shadow-sm p-5 text-white">
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-2.5 rounded-xl bg-brand-yellow-500 text-brand-blue-900 border border-brand-yellow-500">
                      <Bike className="h-5 w-5 animate-pulse shrink-0" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow-500 leading-none mb-1 font-mono">MOTO MENSAJERO</h4>
                      <p className="text-sm font-subheading uppercase font-bold text-white leading-tight">MATÍAS CEJAS</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between border-b border-white/10 pb-1.5">
                      <span className="text-brand-blue-100 font-sans">Velocidad Promedio</span>
                      <span className="font-semibold font-mono text-white">Tránsito optimizado</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-blue-100 font-sans">Tiempo Estimado</span>
                      <span className="font-bold text-brand-yellow-500 font-mono"> {'<'} 120 Minutos</span>
                    </div>
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
              <div className="px-4 py-2 bg-brand-yellow-500 text-brand-blue-900 border border-brand-yellow-500 font-bold rounded-full text-xs font-subheading tracking-wider uppercase shadow-accent-md flex items-center gap-1.5">
                <Zap className="h-4 w-4 fill-current shrink-0" />
                Entrega Inmediata
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
