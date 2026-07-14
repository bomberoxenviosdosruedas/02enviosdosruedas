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
      className="py-24 bg-white relative z-10 overflow-hidden border-t border-brand-blue-100/30"
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
          <span className="px-4 py-1 bg-brand-yellow text-brand-blue rounded-full text-base font-subheading uppercase tracking-widest inline-block border border-brand-blue/50">
            VALORES DE COMUNIDAD
          </span>
          <h2 className="text-brand-blue-700 text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-[0.02em] leading-[1.1]">
            BENEFICIOS DE FORMAR PARTE
          </h2>
          <p className="text-brand-blue-600/90 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Descubrí por qué cientos de marplatenses y PyMEs locales ya nos siguen activamente en nuestros canales de difusión oficiales.
          </p>
          <div className="h-1 w-16 bg-brand-blue-700 mx-auto rounded-full" />
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
                className={`${benefit.colSpan} double-bezel-outer bg-[#E6EEFE]/80 border border-[#BACEFD] p-2 rounded-2xl hover-float cursor-default`}
              >
                <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full text-brand-blue min-h-[220px]">
                  <div className="space-y-5">
                    <div className="p-3 bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-100 rounded-2xl w-fit">
                      <Icon className="h-5 w-5 shrink-0" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-subheading uppercase tracking-wider text-brand-blue-700 font-bold leading-tight">
                      {benefit.title}
                    </h3>

                    <p className="text-sm text-brand-blue-600/90 font-sans leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-brand-blue-100/60 flex items-center gap-1.5 text-xs font-sans font-bold uppercase text-brand-blue-400">
                    <CheckCircle className="h-4.5 w-4.5 text-brand-blue shrink-0 fill-brand-yellow-500/25" />
                    <span>Beneficio Oficial</span>
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
