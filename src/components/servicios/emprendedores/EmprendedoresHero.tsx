'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Landmark, ShieldCheck, Box } from 'lucide-react';

export default function EmprendedoresHero() {
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
      id="emprendedores-hero" 
      className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-blue border-b-4 border-brand-yellow text-white"
    >
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,204,0,0.06),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.04),transparent_50%)]" />

      {/* Background illustration overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
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
              <span className="px-4 py-1.5 rounded-full text-sm font-subheading uppercase tracking-widest bg-brand-yellow text-brand-blue border-2 border-brand-blue flex items-center gap-1.5 shadow-[2px_2px_0px_var(--color-brand-blue)]">
                <Box className="h-4.5 w-4.5 animate-pulse shrink-0" />
                E-COMMERCE 3PL
              </span>
            </motion.div>

            {/* Title with Inline Image Typography */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-3"
            >
              <span>ALMACENAMIENTO Y</span>
              <span className="relative inline-block w-16 h-10 sm:w-20 sm:h-12 rounded-full overflow-hidden border-2 border-brand-yellow align-middle shrink-0 shadow-[2px_2px_0px_var(--color-brand-blue)]">
                <Image
                  src="https://picsum.photos/id/444/200/100" 
                  alt="Almacenamiento"
                  fill
                  className="object-cover"
                />
              </span>
              <span className="text-brand-yellow">FULFILLMENT PARA PYMES</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed text-blue-50"
            >
              Solución integral de almacenamiento y fulfillment para PyMEs en Mar del Plata. Contamos con depósitos propios en la ciudad para garantizar el mejor servicio 3PL. Delegá la logística en manos de expertos.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contacto"
                id="emprendedores-hero-cta-plan"
                className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellow/95 text-brand-blue font-subheading tracking-wider text-base uppercase px-8 py-4 rounded-xl border-2 border-brand-blue shadow-[4px_4px_0px_var(--color-brand-blue)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_var(--color-brand-blue)] transition-all duration-200 flex items-center justify-center gap-2.5 font-bold cursor-pointer"
              >
                Solicitar Plan Corporativo
                <ArrowRight className="h-5 w-5 shrink-0" />
              </Link>
              
              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="emprendedores-hero-cta-whatsapp"
                className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white font-subheading tracking-wider text-base uppercase px-8 py-4 rounded-xl border-2 border-white shadow-[4px_4px_0px_var(--color-brand-yellow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_var(--color-brand-yellow)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="h-5 w-5 text-brand-yellow shrink-0" />
                Agendar Asesoría 3PL
              </a>
            </motion.div>

            {/* Feature stats summary line */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-8 border-t-2 border-white/15 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-xl text-brand-yellow border border-white/10">
                  <Landmark className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-200 leading-none mb-1">Depósitos Propios</p>
                  <p className="text-sm font-subheading uppercase font-semibold text-slate-100">Ubicación Estratégica</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-xl text-brand-yellow border border-white/10">
                  <ShieldCheck className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-200 leading-none mb-1">Fulfillment Seguro</p>
                  <p className="text-sm font-subheading uppercase font-semibold text-slate-100">Custodia Digital 24/7</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Graphics Column */}
          <div className="lg:col-span-5 relative hidden lg:block h-[450px]">
            {/* Card 1: Warehouse / Storage Graphic Card */}
            <motion.div 
              className="absolute top-8 right-0 w-[80%] z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative rounded-3xl border-2 border-brand-blue bg-white p-5 text-brand-ink shadow-[6px_6px_0px_var(--color-brand-yellow)]">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] bg-brand-blue/10 text-brand-blue border border-brand-blue/20 font-bold uppercase px-2.5 py-1 rounded-full">
                    Control de Inventario
                  </span>
                  <span className="text-xs font-mono font-bold text-brand-blue">
                    Depósito MDP
                  </span>
                </div>
                <h3 className="text-base font-display uppercase tracking-tight text-brand-ink leading-snug">
                  Tu stock bajo control
                </h3>
                <p className="text-xs text-slate-650 font-sans mt-2 leading-relaxed">
                  Evitá dolores de cabeza. Nos ocupamos del almacenamiento, picking, empaquetado y despacho automatizado de tus ventas en el acto.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Account Control */}
            <motion.div 
              className="absolute bottom-10 left-0 w-[75%] z-30"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.6 } }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative rounded-3xl border-2 border-brand-yellow bg-slate-900 p-5 text-white shadow-[6px_6px_0px_var(--color-brand-blue)]">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-yellow animate-ping" />
                    <span className="text-[10px] font-bold tracking-widest text-brand-yellow uppercase">Cuenta Corriente Activa</span>
                  </div>
                  <p className="text-sm font-subheading uppercase font-semibold leading-none">
                    Esquemas de Pago Flexibles
                  </p>
                  <p className="text-xs text-slate-355 font-sans leading-relaxed">
                    Facturación quincenal o mensual consolidada para que no comprometas el flujo de caja diario de tu emprendimiento o PyME.
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
