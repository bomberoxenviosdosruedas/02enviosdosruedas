'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Handshake, Heart } from 'lucide-react';

export default function AboutValues() {
  const values = [
    {
      title: 'Transparencia Total',
      desc: 'Tarifas públicas por kilómetro exacto según tabla oficial 2026. Sin costos ocultos, sin sorpresas en la liquidación de tus envíos.',
      icon: Handshake,
    },
    {
      title: 'Cuidado del Paquete',
      desc: 'Tratamos cada paquete como si fuera nuestro. Mochilas reforzadas, cajas seguras y manipulación profesional de mercadería frágil.',
      icon: ShieldCheck,
      featured: true,
    },
    {
      title: 'Innovación Tecnológica',
      desc: 'Ruteo optimizado en tiempo real, trazabilidad GPS instantánea y avisos automáticos para tus clientes en Mar del Plata.',
      icon: Heart,
    },
  ];

  return (
    <section 
      id="about-values" 
      className="py-20 sm:py-24 bg-brand-blue-700 text-brand-white-50 relative z-10 overflow-hidden border-t border-brand-blue-500/20"
    >
      {/* Background ambient radial glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue-500/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-yellow-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-left max-w-2xl mb-16 space-y-3.5">
          <span className="px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest inline-block font-bold">
            FILOSOFÍA OPERATIVA
          </span>
          <h2 className="text-brand-white-50 text-3xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.05]">
            NUESTROS VALORES
          </h2>
          <p className="text-brand-blue-100 font-sans text-base sm:text-lg max-w-prose leading-relaxed">
            Los pilares innegociables que sostienen nuestra operativa diaria en cada rincón de General Pueyrredón.
          </p>
        </div>

        {/* Values Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Featured Value (Cuidado Extremo) - 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 double-bezel-outer bg-brand-blue-50/90 border border-brand-blue-100 p-2 rounded-2xl shadow-xl"
          >
            <div className="double-bezel-inner bg-white p-7 sm:p-10 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col gap-6 text-brand-blue-700 h-full justify-between">
              <div className="w-14 h-14 bg-brand-blue-50 text-brand-blue-700 rounded-2xl flex items-center justify-center border border-brand-blue-100">
                <ShieldCheck className="h-7 w-7 text-brand-blue-700" />
              </div>

              <div className="space-y-3">
                <span className="text-xs font-subheading uppercase tracking-wider text-brand-yellow-500 font-bold bg-brand-blue-700 px-3 py-1 rounded-full w-fit">
                  Pilar de Confianza
                </span>
                <h3 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-brand-blue-700 leading-tight">
                  Cuidado del Paquete
                </h3>
                <p className="text-brand-ink font-sans leading-relaxed text-sm sm:text-base max-w-prose">
                  Manipulación profesional de paquetería e-commerce, indumentaria, tecnología y repuestos. Cada envío viaja seguro y protegido de las inclemencias del clima marplatense.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Secondary Values - 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {values
              .filter((v) => !v.featured)
              .map((val, idx) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
                    className="double-bezel-outer bg-brand-blue-50/90 border border-brand-blue-100 p-2 rounded-2xl shadow-xl flex-1"
                  >
                    <div className="double-bezel-inner bg-white p-6 sm:p-7 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col gap-4 text-brand-blue-700 h-full justify-between">
                      <div className="w-11 h-11 bg-brand-blue-50 text-brand-blue-700 rounded-xl flex items-center justify-center border border-brand-blue-100 shrink-0">
                        <Icon className="h-5 w-5 text-brand-blue-700" />
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight text-brand-blue-700 leading-tight">
                          {val.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-brand-ink leading-relaxed font-sans">
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
