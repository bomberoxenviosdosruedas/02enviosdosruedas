'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Rocket, ShieldCheck } from 'lucide-react';
import DoubleBezelCard from '@/components/ui/DoubleBezelCard';
import CTANestedPill from '@/components/ui/CTANestedPill';

export default function AboutMissionVision() {
  return (
    <section
      id="about-mission-vision"
      className="py-20 sm:py-24 bg-brand-blue-50 relative overflow-hidden border-t border-brand-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3.5">
          <span className="px-4 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest inline-block transform -rotate-1 shadow-glow-yellow">
            PROPÓSITO & FUTURO
          </span>
          <h2 className="text-brand-ink text-3xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.05]">
            MISIÓN, VISIÓN & COMPROMISO
          </h2>
          <p className="text-brand-ink font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
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
            className="lg:col-span-7"
          >
            <DoubleBezelCard>
              <div className="space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-brand-blue-50 text-brand-blue rounded-2xl flex items-center justify-center border border-brand-blue-100">
                    <Target className="h-6 w-6 text-brand-blue" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-ink leading-tight">
                    NUESTRA MISIÓN
                  </h3>

                  <p className="text-sm sm:text-base text-brand-ink leading-relaxed font-sans">
                    Brindar a cada negocio, e-commerce y particular de Mar del Plata una infraestructura de última milla confiable, accesible y ágil. Eliminamos las fricciones logísticas para que nuestros clientes puedan enfocarse en vender más y crecer.
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-blue-100 flex items-center gap-2 text-xs font-subheading uppercase tracking-wider text-brand-ink">
                  <ShieldCheck className="h-4 w-4 text-brand-blue" />
                  <span>COMPROMISO OPERATIVO PERMANENTE</span>
                </div>
              </div>
            </DoubleBezelCard>
          </motion.div>

          {/* Card 2: Nuestra Visión (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <DoubleBezelCard>
              <div className="space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-brand-yellow-50 text-brand-blue rounded-2xl flex items-center justify-center border border-brand-yellow-100">
                    <Eye className="h-6 w-6 text-brand-blue" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-ink leading-tight">
                    NUESTRA VISIÓN
                  </h3>

                  <p className="text-sm sm:text-base text-brand-ink leading-relaxed font-sans">
                    Ser el estándar indiscutido de logística urbana y fulfillment 3PL en la Costa Atlántica, reconocidos por nuestra puntualidad, tecnología de ruteo y calidez en la atención humana.
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-blue-100 flex items-center gap-2 text-xs font-subheading uppercase tracking-wider text-brand-ink">
                  <ShieldCheck className="h-4 w-4 text-brand-blue" />
                  <span>VISIÓN DE FUTURO 2026</span>
                </div>
              </div>
            </DoubleBezelCard>
          </motion.div>

          {/* Card 3: Compromiso e Innovación CTA (12 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-12"
          >
            <DoubleBezelCard>
              <div className="bg-brand-blue p-6 sm:p-8 rounded-[20px] border border-white/20 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 text-white">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/10 text-brand-yellow rounded-xl border border-white/20">
                      <Rocket className="h-6 w-6 text-brand-yellow" />
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
                  <CTANestedPill
                    href="/cotizar"
                    variant="primary"
                  >
                    Cotizar Envío
                  </CTANestedPill>
                  <CTANestedPill
                    href="/contacto"
                    variant="outline"
                  >
                    Contactar Asesor
                  </CTANestedPill>
                </div>
              </div>
            </DoubleBezelCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}