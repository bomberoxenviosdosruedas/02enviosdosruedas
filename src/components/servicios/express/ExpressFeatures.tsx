'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Flame, Clock, CalendarDays, Compass } from 'lucide-react';

export default function ExpressFeatures() {
  const features = [
    {
      title: 'Alta criticidad horaria',
      desc: 'Servicio diseñado para cuando el tiempo es el factor más importante. Vos elegís exactamente cuándo entregamos.',
      icon: Flame,
    },
    {
      title: 'Rango horario a elección',
      desc: 'Elegí el rango de entrega que mejor se adapte a tu comodidad o a los tiempos específicos de tu cliente.',
      icon: Clock,
    },
    {
      title: 'Anticipación mínima',
      desc: 'Solo requerimos un mínimo de 2 horas de anticipación para coordinar y despachar tu envío prioritario en el día.',
      icon: CalendarDays,
    },
  ];

  return (
    <section 
      id="express-features" 
      className="py-24 bg-white relative z-10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] overflow-hidden"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Header Segment (Left Side in Desk) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="px-3 py-1.5 bg-blue-100 text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-blue-200/50">
              Soluciones Premium
            </span>
            
            <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-none">
              Entregas rápidas <br />
              <span className="text-brand-blue">y eficientes</span>
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed font-sans">
              Nuestro servicio Express ofrece cobertura total en Mar del Plata, llegando a todos los barrios de la ciudad, con posibilidad de elegir el rango horario de entrega (Chauvín, Los Troncos, Güemes, Puerto, Faro, Acantilados, Constitución, Camet y muchos más).
            </p>

            <div className="pt-4 flex items-center gap-3.5 text-xs text-brand-blue font-bold uppercase tracking-wider">
              <Compass className="h-5 w-5 text-brand-yellow animate-spin" style={{ animationDuration: '6s' }} />
              <span>LOGÍSTICA URBANA INTEGRAL</span>
            </div>
          </div>

          {/* Grid Segment (Right Side in Desk) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.5 }}
                  className="bg-slate-50/70 hover:bg-white p-6 rounded-3xl border border-slate-100/80 hover:border-brand-blue/10 hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row gap-5 items-start"
                >
                  <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-2xl shrink-0">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-subheading uppercase tracking-wider text-slate-900 leading-tight">
                      {feat.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                      {feat.desc}
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
