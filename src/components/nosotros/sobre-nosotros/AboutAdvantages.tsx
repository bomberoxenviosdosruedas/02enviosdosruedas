'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export default function AboutAdvantages() {
  return (
    <section 
      id="about-advantages" 
      className="py-24 bg-white relative overflow-hidden border-t border-brand-blue-100/30"
    >
      {/* Dynamic background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1 bg-brand-yellow text-brand-blue rounded-full text-base font-subheading uppercase tracking-widest inline-block border border-brand-blue/50">
            DIFERENCIAL COMPETITIVO
          </span>
          <h2 className="text-brand-blue-700 text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-[0.02em] leading-[1.1]">
            POR QUÉ ELEGIRNOS
          </h2>
          <p className="text-brand-blue-600/90 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            En un mercado sobresaturado de aplicaciones genéricas y envíos automatizados sin rostro, decidimos ir por el camino de la excelencia territorial en Mar del Plata.
          </p>
          <div className="h-1 w-16 bg-brand-blue-700 mx-auto rounded-full" />
        </div>

        {/* Asymmetric Bento Grid (Replaces banned 3 equal card layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: Soporte Humano 24/7 (Main White Card, 7 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl hover-float cursor-default"
          >
            <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full text-brand-blue">
              <div className="space-y-5">
                <div className="p-3 bg-brand-blue-50 text-brand-blue-700 rounded-2xl w-fit border border-brand-blue-100/50">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-subheading uppercase tracking-wider text-brand-blue-700 font-bold leading-tight">
                  Soporte Humano 24/7
                </h3>
                <p className="text-sm text-brand-blue-600/90 font-sans leading-relaxed">
                  Damos la cara frente a cualquier inconveniente. Contamos con atención al cliente humana e inmediata disponible las 24 horas, los 7 días de la semana para resolver de manera ágil tus dudas.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-blue-100/40 flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-brand-blue-500">
                <Sparkles className="h-4 w-4 text-brand-yellow-500 fill-brand-yellow-500" />
                <span>SOPORTE DIRECTO WHATSAPP</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Flota Propia (5 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="lg:col-span-5 double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl hover-float cursor-default"
          >
            <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full text-brand-blue">
              <div className="space-y-5">
                <div className="p-3 bg-brand-yellow-50 text-brand-blue rounded-2xl w-fit border border-brand-yellow-100/50">
                  <Truck className="h-6 w-6 text-brand-blue-700" />
                </div>
                <h3 className="text-3xl font-subheading uppercase tracking-wider text-brand-blue-700 font-bold leading-tight">
                  Flota Propia Capacitada
                </h3>
                <p className="text-sm text-brand-blue-600/90 font-sans leading-relaxed">
                  Controlamos meticulosamente cada eslabón de la logística con repartidores propios, identificados y altamente capacitados en Mar del Plata.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-blue-100/40 flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-brand-blue-500">
                <Sparkles className="h-4 w-4 text-brand-yellow-500 fill-brand-yellow-500 animate-pulse" />
                <span>COBERTURA TOTAL MDP</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Entregas Confiables (Full-width horizontal Bento Card, 12 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="lg:col-span-12 double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl hover-float cursor-default"
          >
            <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-blue-50 text-brand-blue-700 rounded-xl">
                    <ShieldCheck className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="text-3xl font-subheading uppercase tracking-wider text-brand-blue-700 font-bold leading-none">
                    Entregas Confiables en Tiempo y Forma
                  </h3>
                </div>
                <p className="text-sm text-brand-blue-600/90 font-sans leading-relaxed">
                  Tu negocio depende de la puntualidad y el buen trato del paquete. Nos aseguramos de realizar cada entrega en el tiempo pactado y en perfectas condiciones.
                </p>
              </div>
              <div className="shrink-0 flex items-center justify-end">
                <span className="cta-nested-pill bg-brand-yellow hover:bg-brand-yellow-400 text-brand-blue border border-brand-blue/50 font-subheading text-lg rounded-full uppercase tracking-wider shadow-sm">
                  <span>100% CONFIABLE</span>
                  <span className="cta-nested-icon bg-brand-blue/10 text-brand-blue shrink-0">
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </span>
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
