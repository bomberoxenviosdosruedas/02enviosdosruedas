'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Users2, ShieldCheck, HeartHandshake, Laptop } from 'lucide-react';

export default function AboutTeam() {
  const teamStats = [
    {
      number: '3',
      role: 'Equipo Directivo',
      desc: 'Liderazgo estratégico comprometido con la excelencia operativa del servicio y la absoluta satisfacción de nuestros socios comerciales.',
      icon: ShieldCheck,
    },
    {
      number: '+20',
      role: 'Repartidores Calificados',
      desc: 'Profesionales capacitados con amplia experiencia que conocen cada rincón y atajo de Mar del Plata para realizar entregas veloces y eficientes.',
      icon: Users2,
    },
    {
      number: '5',
      role: 'Atención al Cliente',
      desc: 'Ejecutivos de soporte dedicados en exclusiva a resolver consultas inmediatas y brindar contención personalizada por WhatsApp.',
      icon: HeartHandshake,
    },
    {
      number: '4',
      role: 'Soporte Técnico',
      desc: 'Especialistas en logística y tecnología que optimizan de manera continua nuestros ruteos inteligentes y paneles de administración.',
      icon: Laptop,
    },
  ];

  return (
    <section
      id="about-team"
      className="py-24 bg-gradient-to-br from-brand-blue-700 to-brand-blue-600 text-white relative z-10 overflow-hidden border-t border-brand-yellow-500/20"
    >
      {/* Background gradients or subtle clean styling */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,var(--color-brand-blue-700),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,var(--color-brand-yellow-500),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Block */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-blue-700/60 border border-brand-yellow-500/30 text-brand-yellow-500 rounded-full text-base font-subheading uppercase tracking-widest inline-block shadow-sm backdrop-blur-sm">
            FUERZA HUMANA
          </span>
          <h2 className="text-white text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-[0.02em] leading-[1.1]">
            NUESTRO EQUIPO DE CALLE
          </h2>
          <p className="text-brand-blue-100 font-sans text-base sm:text-lg max-w-prose leading-relaxed">
            Contamos con cadetes capacitados en Mar del Plata para entregar todos tus envíos en tiempo y forma.
            <br /><br />
            Contamos con un equipo de +20 repartidores y estamos en constante crecimiento para cumplir con todas las entregas de manera impecable.
          </p>
          <div className="h-1 w-16 bg-brand-yellow-500 rounded-full" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamStats.map((member, idx) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="double-bezel-outer bg-brand-blue-50/90 border-2 border-brand-blue-700 p-2 rounded-2xl hover-float cursor-default shadow-brutalist"
              >
                <div className="double-bezel-inner bg-white p-6 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full text-brand-blue">
                  <div>
                    {/* Big Stylized Number in Bebas Neue */}
                    <span className="block font-subheading tracking-wider text-6xl lg:text-7xl font-bold text-brand-blue-700 mb-2 leading-none">
                      {member.number}
                    </span>

                    <h3 className="text-2xl font-subheading uppercase tracking-wider text-brand-blue-700 font-bold leading-tight mb-2 min-h-[40px] flex items-center">
                      {member.role}
                    </h3>

                    <p className="text-sm text-brand-blue-600/90 font-sans leading-relaxed">
                      {member.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-brand-blue-100/60 flex items-center justify-between">
                    <span className="text-xs font-sans font-bold uppercase tracking-wider text-brand-blue-400">DosRuedas Staff</span>
                    <div className="p-2 bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-100 rounded-xl">
                      <Icon className="h-5 w-5" />
                    </div>
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

