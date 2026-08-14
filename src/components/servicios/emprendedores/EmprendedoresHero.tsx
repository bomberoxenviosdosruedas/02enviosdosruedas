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
              <span className="px-4 py-1.5 rounded-full text-sm font-subheading uppercase tracking-widest bg-brand-yellow-500 text-brand-blue-900 border-2 border-brand-blue-700 flex items-center gap-1.5 shadow-[2px_2px_0px_var(--color-brand-blue)]">
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
              <span className="relative inline-block w-16 h-10 sm:w-20 sm:h-12 rounded-full overflow-hidden border-2 border-brand-yellow-500 align-middle shrink-0 shadow-[2px_2px_0px_var(--color-brand-blue)]">
                <Image
                  src="/img/generales/Emprendedoresbanner.webp"
                  alt="Almacenamiento"
                  fill={true}
                  sizes="(max-width: 768px) 64px, 80px"
                  className="object-cover"
                />
              </span>
              <span className="text-brand-yellow-500 font-bold">FULFILLMENT PARA PYMES</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed text-brand-blue-100"
            >
              Solución integral de almacenamiento y fulfillment para PyMEs en Mar del Plata. Contamos con depósitos propios en la ciudad para garantizar el mejor servicio 3PL. Delegá la logística en manos de expertos.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contacto"
                id="emprendedores-hero-cta-plan"
                className="w-full sm:w-auto cta-nested-pill bg-brand-yellow-500 text-brand-blue-900 hover:bg-brand-yellow-400 font-bold cursor-pointer"
              >
                <span>Solicitar Plan Corporativo</span>
                <span className="cta-nested-icon bg-brand-blue-100">
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </span>
              </Link>

              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="emprendedores-hero-cta-whatsapp"
                className="w-full sm:w-auto cta-nested-pill bg-brand-blue-700 text-brand-white-50 hover:bg-brand-blue-600 border-2 border-brand-blue-100 cursor-pointer"
              >
                <span className="cta-nested-icon bg-brand-blue-100 mr-2">
                  <Phone className="h-5 w-5 text-brand-yellow-500 shrink-0" />
                </span>
                Agendar Asesoría 3PL
              </a>
            </motion.div>

            {/* Feature stats summary line */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-8 border-t-2 border-brand-blue-100 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-blue-100/30 rounded-xl text-brand-yellow-500 border border-brand-blue-200/50">
                  <Landmark className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-blue-200 leading-none mb-1">Depósitos Propios</p>
                  <p className="text-sm font-subheading uppercase font-semibold text-white">Ubicación Estratégica</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-blue-100/30 rounded-xl text-brand-yellow-500 border border-brand-blue-200/50">
                  <ShieldCheck className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-blue-200 leading-none mb-1">Fulfillment Seguro</p>
                  <p className="text-sm font-subheading uppercase font-semibold text-white">Custodia Digital 24/7</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Graphics Column */}
          <div className="lg:col-span-5 relative hidden lg:block h-[450px]">
            {/* Card 1: Warehouse / Storage Graphic Card - Double Bezel */}
            <motion.div
              className="absolute top-8 right-0 w-[80%] z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 rounded-2xl p-2 shadow-float hover:shadow-antigravity-deep hover:border-brand-blue-300 transition-all duration-500 w-full">
                <div className="double-bezel-inner bg-brand-white-50 rounded-xl border border-brand-blue-50/50 shadow-sm p-5 text-brand-blue-700">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] bg-brand-blue-100 text-brand-blue-700 border border-brand-blue-200 font-bold uppercase px-2.5 py-1 rounded-full">
                      Control de Inventario
                    </span>
                    <span className="text-xs font-mono font-bold text-brand-blue-700">
                      Depósito MDP
                    </span>
                  </div>
                  <h3 className="text-base font-display uppercase tracking-tight text-brand-blue-700 leading-snug">
                    Tu stock bajo control
                  </h3>
                  <p className="text-xs text-brand-blue-500 font-sans mt-2 leading-relaxed">
                    Evitá dolores de cabeza. Nos ocupamos del almacenamiento, picking, empaquetado y despacho automatizado de tus ventas en el acto.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Account Control - Double Bezel Dark */}
            <motion.div
              className="absolute bottom-10 left-0 w-[75%] z-30"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.6 } }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 rounded-2xl p-2 shadow-float hover:shadow-antigravity-deep hover:border-brand-blue-300 transition-all duration-500 w-full">
                <div className="double-bezel-inner bg-brand-blue-700 rounded-xl border border-brand-blue-600/50 shadow-sm p-5 text-white">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-brand-yellow-500 animate-ping" />
                      <span className="text-[10px] font-bold tracking-widest text-brand-yellow-500 uppercase">Cuenta Corriente Activa</span>
                    </div>
                    <p className="text-sm font-subheading uppercase font-semibold leading-none">
                      Esquemas de Pago Flexibles
                    </p>
                    <p className="text-xs text-brand-blue-200 font-sans leading-relaxed">
                      Facturación quincenal o mensual consolidada para que no comprometas el flujo de caja diario de tu emprendimiento o PyME.
                    </p>
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