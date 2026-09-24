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
      className="py-20 sm:py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-[#D6E4FE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
          <span className="px-4 py-1.5 bg-[#FFEC01] text-[#0950F6] rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest inline-block font-bold transform -rotate-1 shadow-glow-yellow">
            VENTAJAS TERRITORIALES
          </span>
          <h2 className="text-[#0950F6] text-3xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.05]">
            POR QUÉ CONFIAR EN DOSRUEDAS
          </h2>
          <p className="text-[#0950F6]/80 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
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
                  <div className="w-12 h-12 bg-[#E6EEFE] text-[#0950F6] rounded-2xl flex items-center justify-center border border-[#D6E4FE]">
                    <MessageSquare className="h-6 w-6 text-[#0950F6]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-[#0950F6] leading-tight">
                    Atención Humana & Directa
                  </h3>
                  <p className="text-sm sm:text-base text-[#0950F6]/80 leading-relaxed font-sans">
                    Damos la cara siempre. Cuando surge una duda o reprogramación, te comunicás directamente por WhatsApp con operadores en Mar del Plata que gestionan y resuelven en el acto.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#D6E4FE] flex items-center gap-2 text-xs font-subheading font-bold uppercase tracking-wider text-[#0950F6]">
                  <Sparkles className="h-4 w-4 text-[#FFEC01] fill-[#FFEC01]" />
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
                  <div className="w-12 h-12 bg-[#FFEC01]/20 text-[#0950F6] rounded-2xl flex items-center justify-center border border-[#FFEC01]/40">
                    <Truck className="h-6 w-6 text-[#0950F6]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-[#0950F6] leading-tight">
                    Flota Propia Capacitada
                  </h3>
                  <p className="text-sm sm:text-base text-[#0950F6]/80 leading-relaxed font-sans">
                    No tercerizamos de forma descontrolada. Nuestro equipo de cadetes está uniformado, capacitado en manejo de paquetes frágiles y con base física en <strong>Friuli 1972</strong>.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#D6E4FE] flex items-center gap-2 text-xs font-subheading font-bold uppercase tracking-wider text-[#0950F6]">
                  <Sparkles className="h-4 w-4 text-[#FFEC01] fill-[#FFEC01] animate-pulse" />
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
                    <div className="p-2.5 bg-[#E6EEFE] text-[#0950F6] rounded-xl">
                      <ShieldCheck className="h-6 w-6 text-[#0950F6]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-[#0950F6] leading-none">
                      Garantía Operativa Sin Excusas
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#0950F6]/80 leading-relaxed font-sans">
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