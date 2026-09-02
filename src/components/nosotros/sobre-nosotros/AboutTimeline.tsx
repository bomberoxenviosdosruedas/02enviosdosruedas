'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Compass, TrendingUp, Award, CheckCircle, Truck, MapPin } from 'lucide-react';

export default function AboutTimeline() {
  const milestones = [
    {
      year: '2019',
      title: 'Lanzamiento Inicial en MDQ',
      desc: 'Iniciamos operaciones con flota propia de motocicletas en las calles céntricas de Mar del Plata, apostando a un servicio ágil y de confianza.',
      icon: Compass,
    },
    {
      year: '2021',
      title: 'Soluciones PyME y LowCost',
      desc: 'Lanzamos la modalidad LowCost agrupada y el Plan Emprendedores para impulsar las ventas online durante la expansión del e-commerce local.',
      icon: TrendingUp,
    },
    {
      year: '2023',
      title: 'Consolidación de Flota Propia',
      desc: 'Estructura propia de repartidores uniformados y coordinados por WhatsApp para garantizar entregas puntuales sin tercerización.',
      icon: Truck,
    },
    {
      year: '2024',
      title: 'Pioneros MercadoLibre Flex en MDQ',
      desc: 'Nos convertimos en el socio logístico de referencia para entregas Same-Day de Mercado Libre en todo General Pueyrredón.',
      icon: CheckCircle,
    },
    {
      year: '2025',
      title: 'Hub Logístico Friuli 1972',
      desc: 'Inauguración de nuestro depósito central en Chauvín con depósitos de paquetería, picking y tecnología de ruteo optimizado.',
      icon: MapPin,
    },
    {
      year: '2026',
      title: 'Infraestructura 3PL y Cobertura Total',
      desc: 'Más de 7 años de trayectoria consolidada con flota propia, cotizadores en tiempo real y fulfillment integral para tiendas online.',
      icon: Award,
    },
  ];

  return (
    <section
      id="about-timeline"
      className="py-20 sm:py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-brand-blue-100/50"
    >
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0950F6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3.5">
          <span className="px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest inline-block font-bold transform -rotate-1 shadow-glow-yellow">
            TRAYECTORIA & EVOLUCIÓN
          </span>
          <h2 className="text-brand-blue-700 text-3xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.05]">
            NUESTRA HISTORIA
          </h2>
          <p className="text-brand-ink/80 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Más de 7 años transformando la última milla y la mensajería urbana en la ciudad de Mar del Plata.
          </p>
        </div>

        {/* Timeline body */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Line (Desktop) */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-brand-blue-100 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {milestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={`${milestone.year}-${milestone.title}`}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Circle Pin on Line */}
                  <div className="hidden sm:flex absolute left-6 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-brand-yellow-500 border-2 border-white shadow-md items-center justify-center z-10 text-brand-blue-900 shadow-glow-yellow">
                    <Icon className="h-4.5 w-4.5" />
                  </div>

                  {/* Spacer Column for Desktop */}
                  <div className="w-full sm:w-[45%] hidden sm:block" />

                  {/* Card Content Column - Double Bezel */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="w-full sm:w-[45%] rounded-[28px] bg-brand-blue-50/80 border border-brand-blue-100 p-2 shadow-minimal"
                  >
                    <div className="rounded-[20px] bg-white p-5 sm:p-6 border border-brand-blue-50/50 shadow-sm text-brand-blue-700 flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-3xl sm:text-4xl text-[#0950F6] font-bold leading-none tabular-nums">
                          {milestone.year}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md bg-brand-yellow-50 text-[10px] font-mono text-[#052C87] font-bold uppercase border border-brand-yellow-200 transform -rotate-1">
                          Hito MDQ
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight text-brand-blue-700 leading-tight">
                        {milestone.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-ink leading-relaxed font-sans">
                        {milestone.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}