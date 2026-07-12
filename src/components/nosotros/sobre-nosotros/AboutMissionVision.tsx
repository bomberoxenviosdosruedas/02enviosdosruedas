'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Rocket, CheckSquare } from 'lucide-react';

export default function AboutMissionVision() {
  return (
    <section 
      id="about-mission-vision" 
      className="py-24 bg-brand-blue relative overflow-hidden text-white border-t-4 border-brand-yellow"
    >
      {/* Visual background enhancements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,204,0,0.03),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.02),transparent_40%)]" />

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      >
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-blue shadow-[2px_2px_0px_var(--color-brand-blue)]">
            PROPÓSITO Y FUTURO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white">
            MISIÓN, VISIÓN E INNOVACIÓN
          </h2>
          <p className="text-blue-100 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Hacia dónde vamos y cuáles son las convicciones profundas que guían cada entrega y ruteo diario.
          </p>
          <div className="h-2 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Asymmetric Bento Grid (Replaces banned 3 equal card layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: Nuestra Misión (8 columns, Dark Mode style) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-8 bg-slate-950 border-2 border-brand-yellow text-white p-8 rounded-3xl shadow-[6px_6px_0px_var(--color-brand-yellow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_var(--color-brand-yellow)] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="p-3 bg-brand-yellow text-brand-blue rounded-2xl w-fit border-2 border-brand-blue">
                <Target className="h-6 w-6" />
              </div>
              
              <h3 className="text-2xl font-display uppercase tracking-wider text-brand-yellow">
                NUESTRA MISIÓN
              </h3>
              
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Simplificar la logística de última milla local en Mar del Plata.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-yellow/20 flex items-center gap-2 text-xs">
              <CheckSquare className="h-4.5 w-4.5 text-brand-yellow shrink-0 fill-brand-blue" />
              <span className="font-subheading text-brand-yellow uppercase tracking-widest text-sm">SELLO DE CALIDAD DOSRUEDAS</span>
            </div>
          </motion.div>

          {/* Card 2: Nuestra Visión (4 columns, High Contrast White layout) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="lg:col-span-4 bg-white text-brand-ink border-2 border-brand-blue p-8 rounded-3xl shadow-[6px_6px_0px_var(--color-brand-blue)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_var(--color-brand-blue)] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="p-3 bg-brand-blue text-brand-yellow rounded-2xl w-fit border-2 border-brand-blue">
                <Eye className="h-6 w-6" />
              </div>
              
              <h3 className="text-2xl font-display uppercase tracking-wider text-brand-blue">
                NUESTRA VISIÓN
              </h3>
              
              <p className="text-sm text-slate-650 font-sans leading-relaxed">
                Consolidar la red de última milla y mensajería más confiable de Mar del Plata.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-150 flex items-center gap-2 text-xs text-brand-blue">
              <CheckSquare className="h-4.5 w-4.5 text-brand-blue shrink-0 fill-brand-yellow" />
              <span className="font-subheading uppercase tracking-widest text-sm">VISIÓN DE FUTURO 2026</span>
            </div>
          </motion.div>

          {/* Card 3: Innovación Constante (12 columns, Horizontal Bento) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="lg:col-span-12 bg-slate-900 border-2 border-white text-white p-8 rounded-3xl shadow-[6px_6px_0px_var(--color-white)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_var(--color-white)] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-brand-blue text-brand-yellow rounded-xl border-2 border-brand-yellow">
                  <Rocket className="h-5.5 w-5.5" />
                </div>
                <h3 className="text-2xl font-display uppercase tracking-wide text-brand-yellow font-bold leading-none">
                  INNOVACIÓN CONSTANTE
                </h3>
              </div>
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Trabajamos constantemente en nuevas innovaciones para hacer más confiable el servicio.
              </p>
            </div>
            <div className="shrink-0 flex items-center justify-end">
              <span className="px-5 py-2.5 bg-brand-yellow border-2 border-brand-blue text-brand-blue font-subheading text-lg rounded-2xl uppercase tracking-wider shadow-[3px_3px_0px_rgba(255,255,255,0.8)]">
                TECNOLOGÍA PROPIA
              </span>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
