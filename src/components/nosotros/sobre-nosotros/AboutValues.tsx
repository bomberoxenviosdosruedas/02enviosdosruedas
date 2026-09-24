'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Handshake, Heart } from 'lucide-react';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';

export default function AboutValues() {
  const values = [
    {
      title: 'Transparencia Total',
      desc: 'Tarifas públicas por kilómetro exacto según tabla oficial 2026. Sin costos ocultos, sin sorpresas en la liquidación de tus envíos.',
      icon: Handshake,
    },
    {
      title: 'Cuidado del Paquete',
      desc: 'Tratamos cada paquete como si fuera nuestro. Mochilas reinforced, cajas seguras y manipulación profesional de mercadería frágil.',
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
      className="py-20 sm:py-24 bg-[#0950F6] text-white relative z-10 overflow-hidden border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-left max-w-2xl mb-16 space-y-3.5">
          <span className="px-4 py-1.5 bg-[#FFEC01] text-[#0950F6] rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest inline-block font-bold transform -rotate-1 shadow-glow-yellow">
            FILOSOFÍA OPERATIVA
          </span>
          <h2 className="text-white text-3xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.05]">
            NUESTROS VALORES
          </h2>
          <p className="text-white/80 font-sans text-base sm:text-lg max-w-prose leading-relaxed">
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
            className="lg:col-span-7"
          >
            <DoubleBezelCard>
              <div className="flex flex-col gap-6 h-full justify-between">
                <div className="w-14 h-14 bg-[#E6EEFE] text-[#0950F6] rounded-2xl flex items-center justify-center border border-[#D6E4FE]">
                  <ShieldCheck className="h-7 w-7 text-[#0950F6]" />
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-subheading uppercase tracking-wider text-[#0950F6] font-bold bg-[#FFEC01] px-3 py-1 rounded-full w-fit transform -rotate-1 inline-block">
                    Pilar de Confianza
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-[#0950F6] leading-tight">
                    Cuidado del Paquete
                  </h3>
                  <p className="text-[#0950F6]/80 font-sans leading-relaxed text-sm sm:text-base max-w-prose">
                    Manipulación profesional de paquetería e-commerce, indumentaria, tecnología y repuestos. Cada envío viaja seguro y protegido de las inclemencias del clima marplatense.
                  </p>
                </div>
              </div>
            </DoubleBezelCard>
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
                    className="flex-1"
                  >
                    <DoubleBezelCard>
                      <div className="flex flex-col gap-4 h-full justify-between">
                        <div className="w-11 h-11 bg-[#E6EEFE] text-[#0950F6] rounded-xl flex items-center justify-center border border-[#D6E4FE] shrink-0">
                          <Icon className="h-5 w-5 text-[#0950F6]" />
                        </div>

                        <div className="space-y-1.5">
                          <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight text-[#0950F6] leading-tight">
                            {val.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#0950F6]/80 leading-relaxed font-sans">
                            {val.desc}
                          </p>
                        </div>
                      </div>
                    </DoubleBezelCard>
                  </motion.div>
                );
              })}
          </div>

        </div>

      </div>
    </section>
  );
}
