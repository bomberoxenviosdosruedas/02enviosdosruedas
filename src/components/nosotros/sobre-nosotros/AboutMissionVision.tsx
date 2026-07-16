'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Rocket, CheckSquare } from 'lucide-react';

export default function AboutMissionVision() {
  return (
    <section 
      id="about-mission-vision" 
      className="py-24 bg-white relative overflow-hidden border-t border-brand-blue-100/30"
    >
      {/* Visual background enhancements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,var(--color-brand-blue-700),transparent_35%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,var(--color-brand-yellow-500),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1 bg-brand-yellow text-brand-blue rounded-full text-base font-subheading uppercase tracking-widest inline-block border border-brand-blue/50">
            PROPÓSITO Y FUTURO
          </span>
          <h2 className="text-brand-blue-700 text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-[0.02em] leading-[1.1]">
            MISIÓN, VISIÓN E INNOVACIÓN
          </h2>
          <p className="text-brand-blue-600/90 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Hacia dónde vamos y cuáles son las convicciones profundas que guían cada entrega y ruteo diario.
          </p>
          <div className="h-1 w-16 bg-brand-blue-700 mx-auto rounded-full" />
        </div>

        {/* Asymmetric Bento Grid (Replaces banned 3 equal card layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: Nuestra Misión (8 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-8 double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl hover-float cursor-default"
          >
            <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full text-brand-blue">
              <div className="space-y-6">
                <div className="p-3 bg-brand-blue-50 text-brand-blue-700 rounded-2xl w-fit border border-brand-blue-100/50">
                  <Target className="h-6 w-6" />
                </div>
                
                <h3 className="text-3xl font-subheading uppercase tracking-wider text-brand-blue-700 font-bold">
                  NUESTRA MISIÓN
                </h3>
                
                <p className="text-sm text-brand-blue-600/90 font-sans leading-relaxed">
                  Simplificar la logística de última milla local en Mar del Plata.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-blue-100/60 flex items-center gap-2 text-xs text-brand-blue-400">
                <CheckSquare className="h-4.5 w-4.5 text-brand-blue shrink-0" />
                <span className="font-subheading uppercase tracking-widest text-sm">SELLO DE CALIDAD DOSRUEDAS</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Nuestra Visión (4 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="lg:col-span-4 double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl hover-float cursor-default"
          >
            <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full text-brand-blue">
              <div className="space-y-6">
                <div className="p-3 bg-brand-blue-50 text-brand-blue-700 rounded-2xl w-fit border border-brand-blue-100/50">
                  <Eye className="h-6 w-6" />
                </div>
                
                <h3 className="text-3xl font-subheading uppercase tracking-wider text-brand-blue-700 font-bold">
                  NUESTRA VISIÓN
                </h3>
                
                <p className="text-sm text-brand-blue-600/90 font-sans leading-relaxed">
                  Consolidar la red de última milla y mensajería más confiable de Mar del Plata.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-blue-100/60 flex items-center gap-2 text-xs text-brand-blue-400">
                <CheckSquare className="h-4.5 w-4.5 text-brand-blue shrink-0" />
                <span className="font-subheading uppercase tracking-widest text-sm">VISIÓN DE FUTURO 2026</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Innovación Constante (12 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="lg:col-span-12 double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl hover-float cursor-default"
          >
            <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 text-brand-blue">
              <div className="space-y-4 max-w-3xl">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-blue-50 text-brand-blue-700 rounded-xl border border-brand-blue-100/50">
                    <Rocket className="h-5.5 w-5.5 animate-bounce-slow" />
                  </div>
                  <h3 className="text-3xl font-subheading uppercase tracking-wide text-brand-blue-700 font-bold leading-none">
                    INNOVACIÓN CONSTANTE
                  </h3>
                </div>
                <p className="text-sm text-brand-blue-600/90 font-sans leading-relaxed">
                  Trabajamos constantemente en nuevas innovaciones para hacer más confiable el servicio.
                </p>
              </div>
              <div className="shrink-0 flex items-center justify-end">
                <span className="cta-nested-pill bg-brand-yellow hover:bg-brand-yellow-400 text-brand-blue border border-brand-blue/50 font-subheading text-lg rounded-full uppercase tracking-wider shadow-sm">
                  <span>TECNOLOGÍA PROPIA</span>
                  <span className="cta-nested-icon bg-brand-blue/10 text-brand-blue shrink-0">
                    <Rocket className="h-4.5 w-4.5" />
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
