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
      color: 'bg-brand-blue text-brand-yellow border-brand-blue',
    },
    {
      title: 'Actualizaciones',
      desc: 'Sé el primero en enterarte de la incorporación de nuevos servicios urbanos, ampliación de zonas y cambios de horarios importantes.',
      icon: Bell,
      color: 'bg-brand-yellow text-brand-blue border-brand-blue',
    },
    {
      title: 'Comunidad Activa',
      desc: 'Formá parte de nuestro grupo diario de clientes locales, compartiendo opiniones y enriqueciendo el servicio con tu feedback directo.',
      icon: Heart,
      color: 'bg-brand-blue-50 text-brand-blue-600 border-brand-blue-200',
    },
    {
      title: 'Soporte Ágil',
      desc: 'Obtené contención y respuestas rápidas a consultas logísticas generales de bultos directamente por medio de mensajes privados directos.',
      icon: MessageSquare,
      color: 'bg-brand-yellow-50 text-brand-yellow-500 border-brand-yellow-200',
    },
  ];

  return (
    <section 
      id="networks-benefits" 
      className="py-24 bg-white relative z-10 overflow-hidden border-t-4 border-brand-blue"
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
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-yellow shadow-[2px_2px_0px_rgba(0,51,153,0.2)]">
            VALORES DE COMUNIDAD
          </span>
          <h2 className="text-brand-ink text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
            BENEFICIOS DE FORMAR PARTE
          </h2>
          <p className="text-brand-blue-500 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Descubrí por qué cientos de marplatenses y PyMEs locales ya nos siguen activamente en nuestros canales de difusión oficiales.
          </p>
          <div className="h-2 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Benefits Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-brand-white-50 border-2 border-brand-blue p-6 rounded-3xl shadow-[4px_4px_0px_var(--color-brand-blue)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_var(--color-brand-blue)] transition-all duration-300 flex flex-col justify-between group text-left"
              >
                <div className="space-y-5">
                  <div className={`p-3 rounded-2xl w-fit border-2 ${benefit.color}`}>
                    <Icon className="h-5 w-5 shrink-0" />
                  </div>

                  <h3 className="text-xl font-display uppercase tracking-wider text-brand-ink font-bold leading-tight">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-brand-blue-500 font-sans leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t-2 border-brand-blue flex items-center gap-1.5 text-xs font-subheading uppercase text-brand-blue-300">
                  <CheckCircle className="h-4 w-4 text-brand-yellow shrink-0 fill-brand-blue" />
                  <span>Beneficio Oficial</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
