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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Header Segment (Left Side in Desk) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-yellow shadow-[2px_2px_0px_rgba(0,39,124,0.2)]">
              SOLUCIONES PREMIUM
            </span>
            
            <h2 className="text-brand-blue text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-none border-l-4 border-brand-yellow pl-4">
              ENTREGAS RÁPIDAS <br />
              <span className="text-brand-yellow">Y EFICIENTES</span>
            </h2>
            
            <p className="text-brand-blue-500 text-base leading-relaxed font-sans">
              Nuestro servicio Express ofrece cobertura total en Mar del Plata, llegando a todos los barrios de la ciudad, con posibilidad de elegir el rango horario de entrega (Chauvín, Los Troncos, Güemes, Puerto, Faro, Acantilados, Constitución, Camet y muchos más).
            </p>

            <div className="pt-4 flex items-center gap-3.5 text-sm text-brand-blue font-bold uppercase tracking-wider font-subheading">
              <Compass className="h-5 w-5 text-brand-yellow shrink-0 animate-spin-slow fill-brand-blue" />
              <span>LOGÍSTICA URBANA INTEGRAL</span>
            </div>
          </div>

          {/* Grid Segment (Right Side in Desk) - Bento Grid layout with Double-Bezel cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              // Asymmetric spans: first is wide, next two are split asymmetrically (span 8 and span 4)
              const spanClass = idx === 0 
                ? 'md:col-span-12' 
                : idx === 1 
                  ? 'md:col-span-8' 
                  : 'md:col-span-4';

              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ 
                    y: -5, 
                    x: 2,
                    boxShadow: "0 20px 40px -15px rgba(6, 54, 165, 0.15), 0 0 25px -5px rgba(255, 236, 1, 0.2)"
                  }}
                  className={`${spanClass} double-bezel-outer border border-brand-blue-200/50 transition-all duration-500 flex flex-col group cursor-pointer`}
                >
                  <div className="double-bezel-inner p-6 flex flex-col md:flex-row gap-5 items-start h-full border border-brand-blue-50">
                    <div className="p-3 bg-brand-blue-600 text-brand-yellow rounded-2xl shrink-0 border border-brand-blue-500 shadow-md group-hover:scale-105 transition-transform duration-300">
                      <Icon className="h-5.5 w-5.5 shrink-0" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-xl font-display uppercase tracking-wider text-brand-blue leading-tight group-hover:text-brand-blue-600 transition-colors duration-300">
                        {feat.title}
                      </h4>
                      <p className="text-sm text-brand-blue-500 font-sans leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
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
