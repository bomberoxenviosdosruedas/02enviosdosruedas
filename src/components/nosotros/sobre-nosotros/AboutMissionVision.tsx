'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Rocket, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function AboutMissionVision() {
  return (
    <section
      id="about-mission-vision"
      className="py-20 sm:py-24 bg-brand-white-50 relative overflow-hidden border-t border-brand-blue-100/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3.5">
          <span className="px-4 py-1 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest inline-block font-bold">
            PROPÓSITO & FUTURO
          </span>
          <h2 className="text-brand-blue-700 text-3xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.05]">
            MISIÓN, VISIÓN & COMPROMISO
          </h2>
          <p className="text-brand-ink/80 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Hacia dónde vamos y cuáles son las convicciones que guían cada entrega y ruteo diario en Mar del Plata.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Card 1: Nuestra Misión (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-minimal"
          >
            <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full text-brand-blue-700 space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-blue-50 text-brand-blue-700 rounded-2xl flex items-center justify-center border border-brand-blue-100">
                  <Target className="h-6 w-6" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue-700 leading-tight">
                  NUESTRA MISIÓN
                </h3>

                <p className="text-sm sm:text-base text-brand-ink leading-relaxed font-sans">
                  Brindar a cada negocio, e-commerce y particular de Mar del Plata una infraestructura de última milla confiable, accesible y ágil. Eliminamos las fricciones logísticas para que nuestros clientes puedan enfocarse en vender más y crecer.
                </p>
              </div>

              <div className="pt-4 border-t border-brand-blue-50 flex items-center gap-2 text-xs font-subheading font-bold uppercase tracking-wider text-brand-blue-500">
                <ShieldCheck className="h-4 w-4 text-brand-yellow-500" />
                <span>COMPROMISO OPERATIVO PERMANENTE</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Nuestra Visión (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-minimal"
          >
            <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full text-brand-blue-700 space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-yellow-50 text-brand-blue-900 rounded-2xl flex items-center justify-center border border-brand-yellow-200">
                  <Eye className="h-6 w-6 text-brand-blue-700" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue-700 leading-tight">
                  NUESTRA VISIÓN
                </h3>

                <p className="text-sm sm:text-base text-brand-ink leading-relaxed font-sans">
                  Ser el estándar indiscutido de logística urbana y fulfillment 3PL en la Costa Atlántica, reconocidos por nuestra puntualidad, tecnología de ruteo y calidez en la atención humana.
                </p>
              </div>

              <div className="pt-4 border-t border-brand-blue-50 flex items-center gap-2 text-xs font-subheading font-bold uppercase tracking-wider text-brand-blue-500">
                <ShieldCheck className="h-4 w-4 text-brand-yellow-500" />
                <span>VISIÓN DE FUTURO 2026</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Compromiso e Innovación CTA (12 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-12 double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-minimal"
          >
            <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-blue-50 text-brand-blue-700 rounded-xl">
                    <Rocket className="h-6 w-6 text-brand-blue-700" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue-700 leading-none">
                    ¿LISTO PARA ENVIAR CON LOS MEJORES?
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-brand-ink leading-relaxed font-sans">
                  Sumate a las cientos de tiendas y emprendimientos de Mar del Plata que confían su logística diaria en Envíos DosRuedas. Cotizá en línea o hablá hoy con un asesor comercial.
                </p>
              </div>

              <div className="shrink-0 flex flex-wrap items-center gap-3">
                <Link
                  href="/cotizar/express"
                  className="cta-nested-pill bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 border-none shadow-accent font-subheading text-base sm:text-lg rounded-full uppercase tracking-wider cursor-pointer"
                >
                  <span>Cotizar Envío</span>
                  <span className="cta-nested-icon bg-brand-blue-900/10 text-brand-blue-900 shrink-0">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
                <Link
                  href="/contacto"
                  className="px-6 py-3 rounded-full border-2 border-brand-blue-700 text-brand-blue-700 hover:bg-brand-blue-50 font-subheading uppercase text-sm sm:text-base tracking-wider font-bold transition-all cursor-pointer"
                >
                  Contactar Asesor
                </Link>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}