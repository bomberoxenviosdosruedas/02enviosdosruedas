'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Handshake, MapPin } from 'lucide-react';

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
      className="py-24 bg-white relative z-10 shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.01)] overflow-hidden border-t-4 border-brand-blue"
    >
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
        <div className="text-left max-w-2xl mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-yellow shadow-[2px_2px_0px_rgba(0,51,153,0.2)]">
            FILOSOFÍA OPERATIVA
          </span>
          <h2 className="text-brand-ink text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.9]">
            NUESTROS VALORES
          </h2>
          <p className="text-brand-blue-500 font-sans text-base sm:text-lg max-w-prose leading-relaxed font-medium">
            Los pilares estratégicos e innegociables que sostienen nuestra operativa diaria y nos permiten ser tu partner de absoluta confianza.
          </p>
          <div className="h-2 w-16 bg-brand-yellow rounded-full" />
        </div>

        {/* Values Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Value (Cuidado del Paquete) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="lg:col-span-8 bg-brand-blue border-2 border-brand-blue p-8 lg:p-12 rounded-xl shadow-[6px_6px_0px_var(--color-brand-yellow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_var(--color-brand-yellow)] transition-all duration-300 flex flex-col gap-6 text-left group"
          >
            <div className="p-4 bg-brand-yellow text-brand-blue rounded-xl w-fit shrink-0 group-hover:scale-105 transition-transform duration-300">
              <ShieldCheck className="h-8 w-8" />
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl lg:text-5xl font-display uppercase tracking-wider text-brand-yellow font-bold leading-tight">
                Cuidado del Paquete
              </h3>
              <p className="text-brand-blue-100 font-sans leading-relaxed text-lg max-w-prose">
                Manipulación profesional y segura para garantizar que cada bulto llegue en impecables condiciones.
              </p>
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
                  className="bg-brand-white-50 border-2 border-brand-blue p-6 rounded-xl shadow-[4px_4px_0px_var(--color-brand-blue)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_var(--color-brand-blue)] transition-all duration-300 flex flex-col gap-4 text-left group flex-1"
                >
                  <div className="p-3 bg-brand-blue text-brand-yellow rounded-xl w-fit shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="space-y-1.5 mt-auto">
                    <h3 className="text-2xl font-display uppercase tracking-wider text-brand-blue font-bold leading-tight">
                      {val.title}
                    </h3>
                    <p className="text-sm text-brand-blue-500 font-sans leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </motion.div>
    </section>
  );
}
