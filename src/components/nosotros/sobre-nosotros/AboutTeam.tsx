'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Users2, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function AboutTeam() {
  const teamStats = [
    {
      number: '+20',
      role: 'Repartidores en Calle',
      desc: 'Cadetes capacitados y uniformados que conocen cada atajo y zona de Mar del Plata para entregas veloces y seguras.',
      icon: Users2,
      tag: 'Flota Propia',
    },
    {
      number: '100%',
      role: 'Base Operativa en MDQ',
      desc: 'Depósito central en Friuli 1972 para recepción, almacenamiento, consolidación de paquetes y despacho diario.',
      icon: MapPin,
      tag: 'Hub Chauvín',
    },
    {
      number: '< 2h',
      role: 'Tiempo Promedio Express',
      desc: 'Servicio prioritario punto a punto dentro del ejido urbano con monitoreo continuo de ruta.',
      icon: ShieldCheck,
      tag: 'Máxima Velocidad',
    },
    {
      number: '+7',
      role: 'Años de Trayectoria',
      desc: 'Compromiso ininterrumpido con comerciantes, emprendedores y empresas marplatenses.',
      icon: HeartHandshake,
      tag: 'Confianza Local',
    },
  ];

  return (
    <section
      id="about-team"
      className="py-20 sm:py-24 bg-brand-blue-700 text-brand-white-50 relative z-10 overflow-hidden border-t border-brand-blue-500/20"
    >
      {/* Dynamic ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,var(--color-brand-blue-700),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,var(--color-brand-yellow-500),transparent_50%)] pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-left max-w-3xl mb-16 space-y-3.5">
          <span className="px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest inline-block font-bold">
            FUERZA OPERATIVA & EXPERIENCIA
          </span>
          <h2 className="text-brand-white-50 text-3xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.05]">
            NUESTRO EQUIPO EN CALLE
          </h2>
          <p className="text-brand-blue-100 font-sans text-base sm:text-lg max-w-prose leading-relaxed">
            Una estructura humana consolidada con base física en la ciudad, lista para responder al ritmo de tu negocio.
          </p>
        </div>

        {/* Team Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="double-bezel-outer bg-brand-blue-50/90 border border-brand-blue-100 p-2 rounded-2xl shadow-xl"
              >
                <div className="double-bezel-inner bg-white p-6 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full text-brand-blue-700 space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-brand-blue-50 text-brand-blue-700 rounded-xl flex items-center justify-center border border-brand-blue-100">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-subheading uppercase tracking-wider bg-brand-yellow-500 text-brand-blue-900 px-2.5 py-0.5 rounded-full font-bold">
                        {stat.tag}
                      </span>
                    </div>

                    <span className="block font-subheading text-5xl sm:text-6xl font-bold text-brand-blue-700 leading-none mb-2">
                      {stat.number}
                    </span>

                    <h3 className="text-xl font-display uppercase tracking-tight text-brand-blue-700 leading-tight mb-2">
                      {stat.role}
                    </h3>

                    <p className="text-xs sm:text-sm text-brand-ink leading-relaxed font-sans">
                      {stat.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-blue-50 flex items-center justify-between text-xs text-brand-blue-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Image src="/logo-envios-simplified.webp" alt="Envíos DosRuedas" width={16} height={16} className="object-contain" />
                      Envíos DosRuedas
                    </span>
                    <span className="font-bold text-brand-blue-700">MDQ 2026</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
