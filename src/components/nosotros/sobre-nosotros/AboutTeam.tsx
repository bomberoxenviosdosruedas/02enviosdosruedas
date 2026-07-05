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
      number: '15+',
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
      className="py-24 bg-white relative z-10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.01)] overflow-hidden border-t-4 border-brand-blue"
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
          <span className="px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-yellow shadow-[2px_2px_0px_rgba(6,54,165,0.2)]">
            FUERZA HUMANA
          </span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
            NUESTRO EQUIPO
          </h2>
          <p className="text-slate-650 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Un grupo humano coordinado de profesionales apasionados por brindar el mejor servicio de mensajería y delivery de la ciudad.
          </p>
          <div className="h-2 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamStats.map((member, idx) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 border-2 border-brand-blue p-6 rounded-3xl shadow-[4px_4px_0px_#0636A5] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0636A5] transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Big Stylized Number */}
                  <span className="block font-display tracking-tight text-6xl text-brand-blue mb-4 group-hover:text-brand-yellow transition-colors duration-300 leading-none">
                    {member.number}
                  </span>
                  
                  <h3 className="text-xl font-display uppercase tracking-wider text-slate-900 font-bold leading-tight mb-2 min-h-[40px] flex items-center">
                    {member.role}
                  </h3>
                  
                  <p className="text-sm text-slate-650 font-sans leading-relaxed">
                    {member.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t-2 border-brand-blue flex items-center justify-between">
                  <span className="text-xs font-subheading uppercase tracking-wider text-slate-400">DosRuedas Staff</span>
                  <div className="p-2 bg-brand-blue text-brand-yellow border-2 border-brand-blue rounded-xl">
                    <Icon className="h-4 w-4" />
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
