'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Gift, Bell, Heart, MessageSquare, CheckCircle } from 'lucide-react';

export default function NetworksBenefits() {
  const benefits = [
    {
      title: 'Ofertas Exclusivas',
      desc: 'Accedé a descuentos quincenales y promociones relámpago de delivery diseñadas en exclusiva para toda nuestra comunidad de seguidores.',
      icon: Gift,
      colSpan: 'lg:col-span-7',
    },
    {
      title: 'Actualizaciones',
      desc: 'Sé el primero en enterarte de la incorporación de nuevos servicios urbanos, ampliación de zonas y cambios de horarios importantes.',
      icon: Bell,
      colSpan: 'lg:col-span-5',
    },
    {
      title: 'Comunidad Activa',
      desc: 'Formá parte de nuestro grupo diario de clientes locales, compartiendo opiniones y enriqueciendo el servicio con tu feedback directo.',
      icon: Heart,
      colSpan: 'lg:col-span-5',
    },
    {
      title: 'Soporte Ágil',
      desc: 'Obtené contención y respuestas rápidas a consultas logísticas generales de bultos directamente por medio de mensajes privados directos.',
      icon: MessageSquare,
      colSpan: 'lg:col-span-7',
    },
  ];

  return (
    <section
      id="networks-benefits"
      className="py-24 bg-brand-white-50 relative z-10 overflow-hidden border-t border-brand-blue-100/30"
    >
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-blue-500/5 rounded-full blur-3xl pointer-events-none" />

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
          <span className="px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest inline-block font-bold transform -rotate-1 shadow-glow-yellow">
            VALORES DE COMUNIDAD
          </span>
          <h2 className="text-brand-blue-700 text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.05]">
            BENEFICIOS DE FORMAR PARTE
          </h2>
          <p className="text-brand-ink/80 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Descubrí por qué cientos de marplatenses y PyMEs locales ya nos siguen activamente en nuestros canales de difusión oficiales.
          </p>
        </div>

        {/* Benefits Bento Grid (Asymmetrical Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`${benefit.colSpan} rounded-[28px] bg-brand-blue-50/80 border border-brand-blue-100 p-2 shadow-minimal hover:shadow-lg transition-all`}
              >
                <div className="rounded-[20px] bg-white p-6 sm:p-8 border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full text-brand-blue min-h-[220px]">
                  <div className="space-y-5">
                    <div className="p-3 bg-brand-blue-50 text-[#0950F6] border border-brand-blue-100 rounded-2xl w-fit">
                      <Icon className="h-5 w-5 shrink-0 text-[#0950F6]" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue-700 leading-tight">
                      {benefit.title}
                    </h3>

                    <p className="text-sm text-brand-ink leading-relaxed font-sans">
                      {benefit.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-brand-blue-100/60 flex items-center justify-between text-xs font-mono font-bold uppercase text-brand-blue-500 tabular-nums">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="h-4.5 w-4.5 text-brand-yellow-500 shrink-0" />
                      <span>Beneficio Oficial</span>
                    </span>
                    <span>0{idx + 1}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}