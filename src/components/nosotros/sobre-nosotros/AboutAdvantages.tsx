'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ShieldAlert, Truck, Sparkles } from 'lucide-react';

export default function AboutAdvantages() {
  return (
    <section 
      id="about-advantages" 
      className="py-24 bg-slate-50 relative overflow-hidden border-t-4 border-brand-blue"
    >
      {/* Dynamic background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
        }}
      >
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-blue shadow-[2px_2px_0px_#003399]">
            DIFERENCIAL COMPETITIVO
          </span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
            Por Qué Elegirnos
          </h2>
          <p className="text-slate-600 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            En un mercado sobresaturado de aplicaciones genéricas y envíos automatizados sin rostro, decidimos ir por el camino de la excelencia territorial en Mar del Plata.
          </p>
          <div className="h-2 w-16 bg-brand-blue mx-auto rounded-full" />
        </div>

        {/* Asymmetric Bento Grid (Replaces banned 3 equal card layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: Soporte Humano 24/7 (Main White Card, 7 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white p-8 rounded-3xl border-2 border-brand-blue shadow-[6px_6px_0px_#003399] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#003399] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-2xl w-fit">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-display uppercase tracking-wide text-brand-blue font-bold leading-tight">
                Soporte Humano 24/7
              </h3>
              <p className="text-sm text-slate-600 font-sans leading-relaxed">
                Damos la cara frente a cualquier inconveniente. Contamos con atención al cliente humana e inmediata disponible las 24 horas, los 7 días de la semana para resolver de manera ágil tus dudas.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs font-subheading uppercase tracking-wider text-brand-blue">
              <Sparkles className="h-4 w-4 text-brand-yellow fill-brand-yellow" />
              <span>SOPORTE DIRECTO WHATSAPP</span>
            </div>
          </motion.div>

          {/* Card 2: Flota Propia (Egyptian Blue Card, 5 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="lg:col-span-5 bg-brand-blue text-white p-8 rounded-3xl border-2 border-brand-yellow shadow-[6px_6px_0px_#FFCC00] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#FFCC00] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="p-3 bg-brand-yellow text-brand-blue rounded-2xl w-fit">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-display uppercase tracking-wide text-brand-yellow font-bold leading-tight">
                Flota Propia de Repartidores Capacitados
              </h3>
              <p className="text-sm text-blue-50 font-sans leading-relaxed">
                Controlamos meticulosamente cada eslabón de la logística con repartidores propios, identificados y altamente capacitados en Mar del Plata.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-brand-yellow/20 flex items-center gap-1.5 text-xs font-subheading uppercase tracking-wider text-brand-yellow">
              <Sparkles className="h-4 w-4 text-brand-yellow fill-brand-yellow animate-pulse" />
              <span>COBERTURA TOTAL MDP</span>
            </div>
          </motion.div>

          {/* Card 3: Entregas Confiables (Full-width horizontal Bento Card, 12 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="lg:col-span-12 bg-white p-8 rounded-3xl border-2 border-brand-blue shadow-[6px_6px_0px_#003399] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#003399] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-red-100 text-red-650 rounded-xl">
                  <ShieldAlert className="h-5.5 w-5.5" />
                </div>
                <h3 className="text-2xl font-display uppercase tracking-wide text-slate-900 font-bold leading-none">
                  Entregas Confiables en Tiempo y Forma
                </h3>
              </div>
              <p className="text-sm text-slate-500 font-sans leading-relaxed">
                Tu negocio depende de la puntualidad y el buen trato del paquete. Nos aseguramos de realizar cada entrega en el tiempo pactado y en perfectas condiciones.
              </p>
            </div>
            <div className="shrink-0 flex items-center justify-end">
              <span className="px-5 py-2.5 bg-brand-yellow border-2 border-brand-blue text-brand-blue font-subheading text-lg rounded-2xl uppercase tracking-wider shadow-[3px_3px_0px_#003399]">
                100% CONFIABLE
              </span>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
