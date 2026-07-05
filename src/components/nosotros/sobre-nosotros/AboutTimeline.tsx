'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Compass, TrendingUp, CheckCircle, Award } from 'lucide-react';

export default function AboutTimeline() {
  const milestones = [
    {
      year: '2017',
      title: 'Inicios y Fundamentos',
      desc: 'Comenzamos como un modesto servicio de mensajería local con una flota de motos entusiasta, adaptándonos con rapidez a las crecientes exigencias de los comercios marplatenses.',
      icon: Compass,
    },
    {
      year: '2021',
      title: 'La Gran Transformación',
      desc: 'Evolucionamos hacia la gestión del e-commerce moderno en Mar del Plata. Rediseñamos todos nuestros flujos y ruteos para liderar la entrega de última milla.',
      icon: TrendingUp,
    },
    {
      year: '2023',
      title: 'Consolidación de Calidad',
      desc: 'Alcanzamos la calificación de 5.0 estrellas en Google Reviews. Cientos de clientes locales validaron oficialmente nuestra búsqueda de la excelencia.',
      icon: Award,
    },
    {
      year: '2024',
      title: 'Liderazgo 3PL (Fulfillment)',
      desc: 'Operamos depósitos propios bajo un modelo logístico 3PL integral de almacenamiento y empaquetado personalizado para potenciar PyMEs de toda la región costera.',
      icon: CheckCircle,
    },
  ];

  return (
    <section 
      id="about-timeline" 
      className="py-24 bg-slate-50 relative overflow-hidden border-t-4 border-b-4 border-brand-blue"
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
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="px-4 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-blue shadow-[2px_2px_0px_#0636A5]">
            TRAYECTORIA Y EVOLUCIÓN
          </span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
            NUESTRA HISTORIA
          </h2>
          <p className="text-slate-650 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Más de 7 años revolucionando la logística de última milla y el delivery estratégico en Mar del Plata.
          </p>
          <div className="h-2 w-16 bg-brand-blue mx-auto rounded-full" />
        </div>

        {/* Timeline body */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Line (Desktop only) */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-1 bg-brand-blue hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={milestone.year} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center md:justify-between group/card cursor-pointer ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Circle Pin on Line */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-1.5 md:top-auto w-10 h-10 rounded-full bg-brand-yellow border-2 border-brand-blue shadow-[2px_2px_0px_rgba(6,54,165,0.2)] flex items-center justify-center z-10 text-brand-blue group-hover/card:scale-110 group-hover/card:bg-brand-blue group-hover/card:text-brand-yellow transition-all duration-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="w-full md:w-[45%] hidden md:block" />

                  {/* Card Content Column */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    viewport={{ once: true }}
                    transition={{ 
                      y: { type: "spring", stiffness: 300, damping: 20 },
                      scale: { type: "spring", stiffness: 300, damping: 20 },
                      opacity: { duration: 0.55 }
                    }}
                    className="w-full md:w-[45%] bg-white p-6 sm:p-8 rounded-3xl border-2 border-brand-blue shadow-[4px_4px_0px_#0636A5] pl-16 md:pl-8 group hover:shadow-[6px_6px_0px_#0636A5] transition-all duration-300"
                  >
                    <span className="inline-block text-3xl font-display text-brand-blue mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-display uppercase tracking-wide text-slate-900 font-bold leading-tight mb-2 group-hover:text-brand-blue transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-slate-650 font-sans leading-relaxed">
                      {milestone.desc}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </motion.div>
    </section>
  );
}
