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
      className="py-20 sm:py-24 bg-[#052C87] text-white relative z-10 overflow-hidden border-t border-white/10"
    >
      {/* Dynamic ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,#0950F6,transparent_50%)] pointer-events-none opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,#FFF12E,transparent_50%)] pointer-events-none opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-left max-w-3xl mb-16 space-y-3.5">
          <span className="px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest inline-block font-bold transform -rotate-1 shadow-glow-yellow">
            FUERZA OPERATIVA & EXPERIENCIA
          </span>
          <h2 className="text-white text-3xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.05]">
            NUESTRO EQUIPO EN CALLE
          </h2>
          <p className="text-white/80 font-sans text-base sm:text-lg max-w-prose leading-relaxed">
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
                className="rounded-[28px] bg-white/10 backdrop-blur-md border border-white/20 p-2 shadow-2xl"
              >
                <div className="rounded-[20px] bg-[#052C87] p-6 border border-white/10 shadow-sm flex flex-col justify-between h-full text-white space-y-5 relative overflow-hidden">
                  <Icon className="absolute -right-4 -bottom-4 w-28 h-28 text-white/[0.04] pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-white/10 text-brand-yellow-500 rounded-xl flex items-center justify-center border border-white/15">
                        <Icon className="w-5 h-5 text-brand-yellow-500" />
                      </div>
                      <span className="text-[10px] font-subheading uppercase tracking-wider bg-brand-yellow-500 text-[#052C87] px-2.5 py-0.5 rounded-full font-bold transform -rotate-1">
                        {stat.tag}
                      </span>
                    </div>

                    <span className="block font-mono text-5xl sm:text-6xl font-bold text-brand-yellow-500 leading-none mb-2 tabular-nums">
                      {stat.number}
                    </span>

                    <h3 className="text-xl font-display uppercase tracking-tight text-white leading-tight mb-2">
                      {stat.role}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                      {stat.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Image src="/logo-master.svg" alt="Envíos DosRuedas" width={16} height={16} className="object-contain" />
                      Envíos DosRuedas
                    </span>
                    <span className="font-bold text-brand-yellow-500">MDQ 2026</span>
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
