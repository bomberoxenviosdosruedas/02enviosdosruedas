'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Clock } from 'lucide-react';

export default function FlexRequirements() {
  const requirements = [
    {
      title: 'Cuenta activa de vendedor',
      desc: 'Tener una cuenta activa de vendedor dentro de MercadoLibre.',
      icon: Sparkles,
    },
    {
      title: 'Envíos flex activados',
      desc: 'Habilitar la opción de envíos rápidos en el día en tu configuración logística.',
      icon: MapPin,
    },
    {
      title: 'Embalaje apto para moto',
      desc: 'Tener tus paquetes embalados de forma adecuada para el traslado seguro en moto.',
      icon: Clock,
    },
  ];

  return (
    <section 
      id="flex-requirements" 
      className="py-24 bg-brand-white-50 relative z-10 overflow-hidden border-t-4 border-brand-blue-700"
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
          <span className="px-4 py-1.5 bg-brand-blue-700 text-brand-yellow-500 rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-yellow-500 shadow-sm">
            PUESTA EN MARCHA
          </span>
          <h2 className="text-brand-blue-700 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight border-l-4 border-brand-yellow-500 pl-4 inline-block">
            ¿QUÉ NECESITÁS?
          </h2>
          <p className="text-brand-ink/80 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Requisitos mínimos e indispensables para empezar a ofrecer envíos Same-Day y potenciar tu e-commerce hoy mismo.
          </p>
          <div className="h-2 w-16 bg-brand-yellow-500 mx-auto rounded-full" />
        </div>

        {/* Requirements Grid Bento Grid layout with Double Bezel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {requirements.map((req, idx) => {
            const Icon = req.icon;
            return (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, x: 2 }}
                className="lg:col-span-4 double-bezel-outer flex flex-col group"
              >
                <div className="double-bezel-inner p-6 h-full flex flex-col gap-5 text-left bg-white">
                  <div className="p-3 bg-brand-yellow-500 text-brand-blue-900 rounded-2xl w-fit shrink-0 border-2 border-brand-blue-700 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <Icon className="h-5.5 w-5.5 shrink-0" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-display uppercase tracking-wide text-brand-blue-700 font-bold leading-tight">
                      {req.title}
                    </h3>
                    <p className="text-sm text-brand-ink/80 font-sans leading-relaxed">
                      {req.desc}
                    </p>
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
