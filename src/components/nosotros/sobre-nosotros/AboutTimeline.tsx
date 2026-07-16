'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Compass, TrendingUp, Award, CheckCircle, Users, Truck } from 'lucide-react';

export default function AboutTimeline() {
  const milestones = [
    {
      year: '2019',
      title: 'Lanzamiento Inicial',
      desc: 'Lanzamiento inicial con 3 motos de reparto.',
      icon: Compass,
    },
    {
      year: '2021',
      title: 'Nuevos Servicios',
      desc: 'Lanzamos nuevos servicios (LowCost, Plan Emprendedores, E-Commerce)',
      icon: TrendingUp,
    },
    {
      year: '2023',
      title: 'Consolidación Local',
      desc: 'Nos consolidamos en la ciudad de Mar del Plata como una de las principales mensajerias',
      icon: Award,
    },
    {
      year: '2026',
      title: 'Envíos Flex Pioneros',
      desc: 'Primera mensajeria en ofrecer Envios Flex en Mar del Plata',
      icon: CheckCircle,
    },
    {
      year: '2026',
      title: 'Depósito Central',
      desc: 'Mudanza a depósito central Friuli 1972 e innovaciones tecnologicas.',
      icon: Truck,
    },
    {
      year: '2026',
      title: 'Cobertura y Soluciones 3PL',
      desc: 'Cobertura total en toda la ciudad de última milla, Flex y servicios 3PL.',
      icon: Award,
    },
    {
      year: '2026',
      title: 'Flota Ampliada',
      desc: 'Contamos con un equipo de +20 Repartidores capacitados para realizar todos sus envios',
      icon: Users,
    },
  ];

  return (
    <section
      id="about-timeline"
      className="py-24 bg-white relative overflow-hidden border-t border-b border-brand-blue-100/30"
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
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="px-4 py-1 bg-brand-yellow text-brand-blue rounded-full text-base font-subheading uppercase tracking-widest inline-block border border-brand-blue/50">
            TRAYECTORIA Y EVOLUCIÓN
          </span>
          <h2 className="text-brand-blue-700 text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-[0.02em] leading-[1.1]">
            NUESTRA HISTORIA
          </h2>
          <p className="text-brand-blue-600/90 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Más de 7 años revolucionando la logística de última milla y el delivery estratégico en Mar del Plata.
          </p>
          <div className="h-1 w-16 bg-brand-blue-700 mx-auto rounded-full" />
        </div>

        {/* Timeline body */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Line (Desktop only) */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-1 bg-brand-blue-100/80 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={`${milestone.year}-${milestone.title}`}
                  className={`relative flex flex-col md:flex-row items-start md:items-center md:justify-between group/card cursor-pointer ${isEven ? 'md:flex-row-reverse' : ''
                    }`}
                >

                  {/* Circle Pin on Line */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-1.5 md:top-auto w-10 h-10 rounded-full bg-brand-yellow border border-brand-blue-100/80 shadow-sm flex items-center justify-center z-10 text-brand-blue-700 group-hover/card:scale-110 group-hover/card:bg-brand-blue-700 group-hover/card:text-brand-yellow transition-all duration-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="w-full md:w-[45%] hidden md:block" />

                  {/* Card Content Column - Wrapped in Double Bezel */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="w-full md:w-[45%] double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl hover-float pl-16 md:pl-2"
                  >
                    <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm text-brand-blue flex flex-col">
                      <span className="inline-block text-4xl font-subheading tracking-wider text-brand-blue-700 mb-1 leading-none">
                        {milestone.year}
                      </span>
                      <h3 className="text-2xl font-subheading uppercase tracking-wider text-brand-blue-700 font-bold leading-tight mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-brand-blue-600/90 font-sans leading-relaxed">
                        {milestone.desc}
                      </p>
                    </div>
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
