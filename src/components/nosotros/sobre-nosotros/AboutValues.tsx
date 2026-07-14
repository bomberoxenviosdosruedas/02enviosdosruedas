'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Handshake, Sparkles } from 'lucide-react';

export default function AboutValues() {
  const values = [
    {
      title: 'Transparencia Total',
      desc: 'Comunicación clara, tarifas sin sorpresas y reportes honestos sobre cada una de tus entregas.',
      icon: Handshake,
    },
    {
      title: 'Cuidado del Paquete',
      desc: 'Manipulación profesional y segura para garantizar que cada bulto llegue en impecables condiciones.',
      icon: ShieldCheck,
    },
    {
      title: 'Innovación Tecnológica',
      desc: 'Optimización inteligente de recorridos y tracking digital avanzado adaptado al año 2026.',
      icon: Zap,
    },
  ];

  return (
    <section 
      id="about-values" 
      className="py-24 bg-gradient-to-br from-[#0636A5] to-[#0742CA] text-white relative z-10 overflow-hidden border-t border-brand-yellow-500/20"
    >
      {/* Background gradients or subtle clean styling */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(6,54,165,0.45),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(255,236,1,0.08),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-left max-w-2xl mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-blue-700/60 border border-brand-yellow-500/30 text-brand-yellow-500 rounded-full text-base font-subheading uppercase tracking-widest inline-block shadow-sm backdrop-blur-sm">
            FILOSOFÍA OPERATIVA
          </span>
          <h2 className="text-white text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-[0.02em] leading-[1.1]">
            NUESTROS VALORES
          </h2>
          <p className="text-brand-blue-100 font-sans text-base sm:text-lg max-w-prose leading-relaxed">
            Los pilares estratégicos e innegociables que sostienen nuestra operativa diaria y nos permiten ser tu partner de absoluta confianza.
          </p>
          <div className="h-1 w-16 bg-brand-yellow-500 rounded-full" />
        </div>

        {/* Values Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Value (Cuidado del Paquete) - Wrapped in light Double Bezel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="lg:col-span-8 double-bezel-outer bg-[#E6EEFE]/90 border border-[#BACEFD] p-2 rounded-2xl hover-float cursor-default"
          >
            <div className="double-bezel-inner bg-white p-8 lg:p-12 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col gap-6 text-brand-blue h-full justify-between">
              <div className="p-4 bg-brand-blue-50 text-brand-blue rounded-xl w-fit shrink-0 border border-brand-blue-100/50">
                <ShieldCheck className="h-8 w-8 text-brand-blue-700" />
              </div>

              <div className="space-y-3">
                <h3 className="text-4xl lg:text-5xl font-subheading uppercase tracking-wider text-brand-blue-700 font-bold leading-tight">
                  Cuidado del Paquete
                </h3>
                <p className="text-brand-blue-600/90 font-sans leading-relaxed text-base sm:text-lg max-w-prose">
                  Manipulación profesional y segura para garantizar que cada bulto llegue en impecables condiciones.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            {values.filter(v => v.title !== 'Cuidado del Paquete').map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx + 1) * 0.08 }}
                  className="double-bezel-outer bg-[#E6EEFE]/90 border border-[#BACEFD] p-2 rounded-2xl hover-float cursor-default flex-1"
                >
                  <div className="double-bezel-inner bg-white p-6 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col gap-4 text-brand-blue h-full justify-between">
                    <div className="p-3 bg-brand-blue-50 text-brand-blue rounded-xl w-fit shrink-0 border border-brand-blue-100/50">
                      <Icon className="h-6 w-6 text-brand-blue-700" />
                    </div>

                    <div className="space-y-1.5 mt-auto">
                      <h3 className="text-2xl sm:text-3xl font-subheading uppercase tracking-wider text-brand-blue-700 font-bold leading-tight">
                        {val.title}
                      </h3>
                      <p className="text-sm text-brand-blue-600/90 font-sans leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
