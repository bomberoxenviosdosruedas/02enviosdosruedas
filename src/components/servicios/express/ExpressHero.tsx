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
      className="relative w-full min-h-dvh pt-32 pb-12 lg:py-0 flex items-center justify-center overflow-hidden bg-brand-blue-700 text-white"
    >
      {/* Background atmospheric depth - only brand gradients */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(6,54,165,0.15)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(6,54,165,0.2),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(255,236,1,0.08),transparent_50%)] pointer-events-none" />

      {/* Background illustration overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.06] mix-blend-overlay pointer-events-none">
        <Image
          src="/delivery-background.jpg"
          alt="Fondo de reparto urbano"
          fill={true}
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-6 my-auto">
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
              <span className="px-4 py-1.5 rounded-full text-sm font-subheading uppercase tracking-widest bg-brand-yellow text-brand-blue border-2 border-brand-blue flex items-center gap-1.5 shadow-[2px_2px_0px_var(--color-brand-blue)] font-bold">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-blue-400 animate-pulse shrink-0" />
                Disponible en Mar del Plata
              </span>
            </motion.div>

            {/* Title with Inline Image Typography */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-3"
            >
              <span>ENVÍOS</span>
              <span className="relative inline-block w-16 h-10 sm:w-20 sm:h-12 rounded-full overflow-hidden border-2 border-brand-yellow align-middle shrink-0 shadow-[2px_2px_0px_var(--color-brand-blue)]">
                <Image
                  src="/cards/hero_express.webp"
                  alt="Envíos Express"
                  fill={true}
                  sizes="(max-width: 768px) 64px, 80px"
                  className="object-cover object-top"
                />
              </span>
              <span className="text-brand-yellow font-bold">EXPRESS - ENTREGA INMEDIATA</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed text-brand-blue-100"
            >
              Prioridad total. Tu paquete entregado en el día si es solicitado antes de 15hs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/cotizar/express"
                id="express-hero-cta-cotizar"
                className="w-full sm:w-auto cta-nested-pill bg-brand-yellow-500 text-brand-blue-900 hover:bg-brand-yellow-400 font-bold cursor-pointer"
              >
                <span>Cotizá tu Envío Express</span>
                <span className="cta-nested-icon bg-brand-blue-700/10 text-brand-blue-700">
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </span>
              </Link>

              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="express-hero-cta-whatsapp"
                className="w-full sm:w-auto cta-nested-pill bg-brand-yellow-500 text-brand-blue-900 hover:bg-brand-yellow-400 border-2 border-brand-blue-700 cursor-pointer"
              >
                <span className="cta-nested-icon bg-brand-blue-700/10 text-brand-blue-700 mr-2">
                  <Phone className="h-5 w-5 shrink-0" />
                </span>
                <span>Hablar por WhatsApp</span>
              </a>
            </motion.div>

            {/* Feature stats summary line */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-8 border-t-2 border-white/15 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-blue-100/30 rounded-xl text-brand-yellow border border-brand-blue-200/50">
                  <Clock className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-blue-200 leading-none mb-1">Entregas en</p>
                  <p className="text-sm font-subheading uppercase font-semibold text-white">Menos de 2 Horas</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-blue-100/30 rounded-xl text-brand-yellow border border-brand-blue-200/50">
                  <ShieldCheck className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-blue-200 leading-none mb-1">Despacho con</p>
                  <p className="text-sm font-subheading uppercase font-semibold text-white">Custodia Digital</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Graphics Column */}
          <div className="lg:col-span-5 relative hidden lg:block h-[450px]">
            {/* Card 1: Map/Tracking Card - Double Bezel */}
            <motion.div
              className="absolute top-8 right-4 w-[80%] z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }}
              whileHover={{ scale: 1.02, zIndex: 40 }}
            >
              <div className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 rounded-2xl p-2 shadow-float hover:shadow-antigravity-deep hover:border-brand-blue-300 transition-all duration-500 w-full">
                <div className="double-bezel-inner bg-white rounded-xl border border-brand-blue-50/50 shadow-sm p-3.5">
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-3.5 bg-brand-blue-50 border border-brand-blue-100">
                    <Image
                      src="/card_mapa.webp"
                      alt="Mapa de Cobertura de Mar del Plata"
                      fill={true}
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-brand-blue text-brand-yellow border border-brand-yellow px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-widest font-mono">
                      MAPA EN VIVO
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-brand-blue-700">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider block">Rango de Entrega</span>
                      <span className="text-[10px] text-brand-blue-400 font-sans block mt-0.5">Asignación prioritaria directa</span>
                    </div>
                    <span className="text-[10px] px-2.5 py-1 rounded-lg bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-100 font-bold uppercase font-mono tracking-wider">
                      Activo
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Messenger On Road Card - Double Bezel Dark variant */}
            <motion.div
              className="absolute bottom-8 left-0 w-[75%] z-30"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.6 } }}
              whileHover={{ scale: 1.02, zIndex: 40 }}
            >
              <div className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 rounded-2xl p-2 shadow-float hover:shadow-antigravity-deep hover:border-brand-blue-300 transition-all duration-500 w-full">
                <div className="double-bezel-inner bg-brand-blue-700 rounded-xl border border-brand-blue-600/50 shadow-sm p-5 text-white">
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
                      <span className="text-brand-blue-200 font-sans">Velocidad Promedio</span>
                      <span className="font-semibold font-mono">Tránsito optimizado</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-blue-200 font-sans">Tiempo Estimado</span>
                      <span className="font-semibold text-brand-yellow font-mono"> 120 Minutos</span>
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
              <div className="px-4 py-2 bg-brand-yellow-500 text-brand-blue-900 border-2 border-brand-blue-700 font-bold rounded-full text-xs font-subheading tracking-wider uppercase shadow-[3px_3px_0px_var(--color-brand-blue-700)] flex items-center gap-1.5">
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
