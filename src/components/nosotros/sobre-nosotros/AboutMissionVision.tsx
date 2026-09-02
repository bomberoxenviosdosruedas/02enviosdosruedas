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
          <span className="px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest inline-block font-bold transform -rotate-1 shadow-glow-yellow">
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
            className="lg:col-span-7 rounded-[28px] bg-brand-blue-50/80 border border-brand-blue-100 p-2 shadow-minimal"
          >
            <div className="rounded-[20px] bg-white p-6 sm:p-8 border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full text-brand-blue-700 space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-blue-50 text-brand-blue-700 rounded-2xl flex items-center justify-center border border-brand-blue-100">
                  <Target className="h-6 w-6 text-[#0950F6]" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue-700 leading-tight">
                  NUESTRA MISIÓN
                </h3>

                <p className="text-sm sm:text-base text-brand-ink leading-relaxed font-sans">
                  Brindar a cada negocio, e-commerce y particular de Mar del Plata una infraestructura de última milla confiable, accesible y ágil. Eliminamos las fricciones logísticas para que nuestros clientes puedan enfocarse en vender más y crecer.
                </p>
              </div>

              <div className="pt-4 border-t border-brand-blue-50 flex items-center gap-2 text-xs font-subheading font-bold uppercase tracking-wider text-[#0950F6]">
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
            className="lg:col-span-5 rounded-[28px] bg-brand-blue-50/80 border border-brand-blue-100 p-2 shadow-minimal"
          >
            <div className="rounded-[20px] bg-white p-6 sm:p-8 border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full text-brand-blue-700 space-y-6">
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

              <div className="pt-4 border-t border-brand-blue-50 flex items-center gap-2 text-xs font-subheading font-bold uppercase tracking-wider text-[#0950F6]">
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
            className="lg:col-span-12 rounded-[28px] bg-brand-blue-50/80 border border-brand-blue-100 p-2 shadow-minimal"
          >
            <div className="rounded-[20px] bg-[#052C87] p-6 sm:p-8 border border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 text-white">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white/10 text-brand-yellow-500 rounded-xl border border-white/15">
                    <Rocket className="h-6 w-6 text-brand-yellow-500" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white leading-none">
                    ¿LISTO PARA ENVIAR CON LOS MEJORES?
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans">
                  Sumate a las cientos de tiendas y emprendimientos de Mar del Plata que confían su logística diaria en Envíos DosRuedas. Cotizá en línea o hablá hoy con un asesor comercial.
                </p>
              </div>

              <div className="shrink-0 flex flex-wrap items-center gap-3">
                <Link
                  href="/cotizar/express"
                  className="group min-h-[52px] px-8 py-3.5 bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 shadow-glow-yellow font-subheading text-base sm:text-lg rounded-full uppercase tracking-wider font-bold transition-all duration-300 flex items-center gap-3 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow-500/50"
                >
                  <span>Cotizar Envío</span>
                  <span className="w-8 h-8 rounded-full bg-[#052C87]/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                    <ArrowRight className="h-4 w-4 text-[#052C87]" />
                  </span>
                </Link>
                <Link
                  href="/contacto"
                  className="min-h-[52px] px-6 py-3.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white font-subheading uppercase text-sm sm:text-base tracking-wider font-bold transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
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