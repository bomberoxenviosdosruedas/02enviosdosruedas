'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Award, ArrowRight, Phone, TrendingUp, Sparkles } from 'lucide-react';

export default function FlexHero() {
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
      id="flex-hero" 
      className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-blue border-b-4 border-brand-yellow text-white"
    >
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,236,1,0.06),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.04),transparent_50%)]" />

      {/* Background illustration overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <Image
          src="https://i.postimg.cc/2Skr5sPW/banner-servicio-flex.jpg"
          alt="Banner del servicio MercadoLibre Flex"
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
          {/* Copy Segment */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="px-4 py-1.5 rounded-full text-sm font-subheading uppercase tracking-widest bg-brand-yellow text-brand-blue border-2 border-brand-blue flex items-center gap-1.5 shadow-[2px_2px_0px_#0636A5]">
                <Sparkles className="h-4.5 w-4.5 animate-pulse shrink-0" />
                Beneficio Emprendedores 2026
              </span>
            </motion.div>

            {/* Title with Inline Image Typography */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-3"
            >
              <span>ENVÍOS FLEX</span>
              <span className="relative inline-block w-16 h-10 sm:w-20 sm:h-12 rounded-full overflow-hidden border-2 border-brand-yellow align-middle shrink-0 shadow-[2px_2px_0px_#0636A5]">
                <Image
                  src="https://picsum.photos/id/1070/200/100" 
                  alt="MercadoLibre Flex"
                  fill
                  className="object-cover"
                />
              </span>
              <span className="text-brand-yellow">MERCADOLIBRE</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed text-blue-50"
            >
              Somos expertos en la logística de MercadoLibre. Optimizamos tus entregas Same-Day para que tu medidor siempre esté en verde y vos solo te enfoques en vender.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/cotizar/lowcost"
                id="flex-hero-cta-activar"
                className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellow/95 text-brand-blue font-subheading tracking-wider text-base uppercase px-8 py-4 rounded-xl border-2 border-brand-blue shadow-[4px_4px_0px_#0636A5] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0636A5] transition-all duration-200 flex items-center justify-center gap-2.5 font-bold cursor-pointer"
              >
                Activar Envíos Flex
                <ArrowRight className="h-5 w-5 shrink-0" />
              </Link>
              
              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="flex-hero-cta-whatsapp"
                className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white font-subheading tracking-wider text-base uppercase px-8 py-4 rounded-xl border-2 border-white shadow-[4px_4px_0px_#FFEC01] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#FFEC01] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="h-5 w-5 text-brand-yellow shrink-0" />
                Contactar Asesor Flex
              </a>
            </motion.div>

            {/* Reputacion Verde Row */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-8 border-t-2 border-white/15 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-xl text-brand-yellow border border-white/10">
                  <Award className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-200 leading-none mb-1">Tu Reputación</p>
                  <p className="text-sm font-subheading uppercase font-semibold text-emerald-400">Medidor 100% en Verde</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-xl text-brand-yellow border border-white/10">
                  <TrendingUp className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-200 leading-none mb-1">SLA de Despacho</p>
                  <p className="text-sm font-subheading uppercase font-semibold text-white">Same-Day Garantizado</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Graphics Segment */}
          <div className="lg:col-span-5 relative hidden lg:block h-[450px]">
            {/* Card 1: Reputation Status Screen */}
            <motion.div 
              className="absolute top-8 right-0 w-[80%] z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative rounded-3xl border-2 border-brand-blue bg-white p-5 text-slate-900 shadow-[6px_6px_0px_#FFEC01]">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-250 font-bold uppercase px-2.5 py-1 rounded-full">
                    SOCIOS LOGÍSTICOS CERTIFICADOS
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600">
                    OK
                  </span>
                </div>
                <h3 className="text-base font-display uppercase tracking-tight text-slate-900 leading-snug">
                  Entregas en el día sin demoras
                </h3>
                <p className="text-xs text-slate-655 font-sans mt-2 leading-relaxed">
                  Evitá sanciones en tu panel de MercadoLibre. Nuestro equipo cumple de manera estricta los ruteos y horarios oficiales del canal.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Flex Corte Horario Screen */}
            <motion.div 
              className="absolute bottom-10 left-0 w-[75%] z-30"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.6 } }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative rounded-3xl border-2 border-brand-yellow bg-slate-900 p-5 text-white shadow-[6px_6px_0px_#0636A5]">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-yellow animate-ping" />
                    <span className="text-[10px] font-bold tracking-widest text-brand-yellow uppercase">Corte Flex Extendido</span>
                  </div>
                  <p className="text-sm font-subheading uppercase font-semibold leading-none">
                    Recibimos hasta las 15:00 hs
                  </p>
                  <p className="text-xs text-slate-350 font-sans leading-relaxed">
                    Maximizá tus ventas de la mañana. Coordinamos el ruteo express de tus paquetes durante la tarde sin excepción.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
