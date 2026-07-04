'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Clock, FileCheck } from 'lucide-react';

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
      className="py-24 bg-white relative z-10 shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.01)] overflow-hidden"
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
          <span className="px-3 py-1.5 bg-blue-100 text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-blue-200/50">
            Puesta en Marcha
          </span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
            ¿Qué necesitás?
          </h2>
          <p className="text-slate-500 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Requisitos mínimos e indispensables para empezar a ofrecer envíos Same-Day y potenciar tu e-commerce hoy mismo.
          </p>
          <div className="h-1.5 w-12 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((req, idx) => {
            const Icon = req.icon;
            return (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50/70 hover:bg-white p-6 rounded-3xl border border-slate-100/80 hover:border-brand-blue/10 hover:shadow-md transition-all duration-300 flex flex-col gap-5 text-left"
              >
                <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-2xl w-fit shrink-0">
                  <Icon className="h-5.5 w-5.5" />
                </div>
                
                <div className="space-y-1.5">
                  <h3 className="text-sm font-subheading uppercase tracking-wider text-slate-900 font-semibold leading-tight">
                    {req.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                    {req.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
