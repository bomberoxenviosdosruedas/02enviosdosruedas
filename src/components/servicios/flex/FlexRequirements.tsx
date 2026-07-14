'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Clock } from 'lucide-react';

export default function FlexRequirements() {
  const requirements = [
    {
      title: 'Cuenta MercadoLibre',
      desc: 'Tener activa y habilitada la opción logística de Mercado Envíos Flex dentro de tu panel o cuenta de vendedor.',
      icon: Sparkles,
    },
    {
      title: 'Ubicación de Retiro',
      desc: 'Estar localizado operativamente dentro de nuestras amplias zonas de cobertura para retiro en Mar del Plata.',
      icon: MapPin,
    },
    {
      title: 'Horario de Corte',
      desc: 'Establecer un horario de corte coordinado (sugerido 15:00 hs) para procesar tus ventas diarias de forma organizada.',
      icon: Clock,
    },
  ];

  return (
    <section 
      id="flex-requirements" 
      className="py-24 bg-brand-white-50 relative z-10 overflow-hidden border-t-4 border-brand-blue"
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
          <span className="px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-yellow shadow-[2px_2px_0px_rgba(0,39,124,0.2)]">
            PUESTA EN MARCHA
          </span>
          <h2 className="text-brand-blue text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight border-l-4 border-brand-yellow pl-4 inline-block">
            ¿QUÉ NECESITÁS?
          </h2>
          <p className="text-brand-blue-500 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Requisitos mínimos e indispensables para empezar a ofrecer envíos Same-Day y potenciar tu e-commerce hoy mismo.
          </p>
          <div className="h-2 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Requirements Grid (3 Columns) Bento Grid layout with Double Bezel */}
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
                <div className="double-bezel-inner p-6 h-full flex flex-col gap-5 text-left">
                  <div className="p-3 bg-brand-yellow text-brand-blue rounded-2xl w-fit shrink-0 border-2 border-brand-blue shadow-[2px_2px_0px_var(--color-brand-blue)] group-hover:scale-105 transition-transform duration-300">
                    <Icon className="h-5.5 w-5.5 shrink-0" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-display uppercase tracking-wide text-brand-blue font-bold leading-tight">
                      {req.title}
                    </h3>
                    <p className="text-sm text-brand-blue-500 font-sans leading-relaxed">
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
