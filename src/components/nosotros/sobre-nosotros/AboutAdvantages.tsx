'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';
import CTANestedPill from '@/src/components/ui/CTANestedPill';

export default function AboutAdvantages() {
  return (
    <section
      id="about-advantages"
      className="py-20 sm:py-24 bg-brand-blue-50 relative overflow-hidden border-t border-brand-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
          <span className="px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest inline-block transform -rotate-1 shadow-glow-yellow">
            VENTAJAS TERRITORIALES
          </span>
          <h2 className="text-brand-blue-700 text-3xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.05]">
            POR QUÉ CONFIAR EN DOSRUEDAS
          </h2>
          <p className="text-brand-blue-700/80 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Frente a aplicaciones automatizadas y plataformas impersonales, nosotros brindamos compromiso presencial, operadores locales y conocimiento metro a metro de Mar del Plata.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Card 1: Soporte Humano Directo (7 cols) */}
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
                  <div className="w-12 h-12 bg-brand-blue-50 text-brand-blue-700 rounded-2xl flex items-center justify-center border border-brand-blue-100">
                    <MessageSquare className="h-6 w-6 text-brand-blue-700" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue-700 leading-tight">
                    Atención Humana y Directa
                  </h3>
                  <p className="text-sm sm:text-base text-brand-blue-700/80 leading-relaxed font-sans">
                    Damos la cara siempre. Cuando surge una duda o reprogramación, te comunicás directamente por WhatsApp con operadores en Mar del Plata que gestionan y resuelven en el acto.
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-blue-100 flex items-center gap-2 text-xs font-subheading uppercase tracking-wider text-brand-blue-700">
                  <Sparkles className="h-4 w-4 text-brand-yellow-500 fill-current" />
                  <span>COMUNICACIÓN DIRECTA VÍA WHATSAPP</span>
                </div>
              </div>
            </DoubleBezelCard>
          </motion.div>

          {/* Card 2: Flota Propia Coordinada (5 cols) */}
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
                  <div className="w-12 h-12 bg-brand-yellow-500/20 text-brand-blue-700 rounded-2xl flex items-center justify-center border border-brand-yellow-500/40">
                    <Truck className="h-6 w-6 text-brand-blue-700" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue-700 leading-tight">
                    Flota Propia Capacitada
                  </h3>
                  <p className="text-sm sm:text-base text-brand-blue-700/80 leading-relaxed font-sans">
                    No tercerizamos de forma descontrolada. Nuestro equipo de cadetes está uniformado, capacitado en manejo de paquetes frágiles y con base física en <strong>Friuli 1972</strong>.
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-blue-100 flex items-center gap-2 text-xs font-subheading uppercase tracking-wider text-brand-blue-700">
                  <Sparkles className="h-4 w-4 text-brand-yellow-500 fill-current animate-pulse" />
                  <span>COBERTURA TOTAL GENERAL PUEYRREDÓN</span>
                </div>
              </div>
            </DoubleBezelCard>
          </motion.div>

          {/* Card 3: Garantía de Puntualidad (12 cols full width) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-12"
          >
            <DoubleBezelCard>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-brand-blue-50 text-brand-blue-700 rounded-xl">
                      <ShieldCheck className="h-6 w-6 text-brand-blue-700" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue-700 leading-none">
                      Garantía Operativa Sin Excusas
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-brand-blue-700/80 leading-relaxed font-sans">
                    Tu reputación comercial depende de la puntualidad de entrega. Si coordinamos un envío express en 2 horas o un ruteo programado, cumplimos la franja pactada sin desvíos.
                  </p>
                </div>
                <div className="shrink-0 flex items-center">
                  <CTANestedPill
                    href="/cotizar/express"
                    variant="primary"
                  >
                    Cotizar tu Envío
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