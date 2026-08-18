'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Compass, Users } from 'lucide-react';

export default function ExpressFeatures() {
  const features = [
    {
      title: 'Entrega puerta a puerta',
      desc: 'Retiramos y entregamos en mano, garantizando comodidad y seguridad con firma digital.',
      icon: ShieldCheck,
    },
    {
      title: 'Horario de corte 15:00 hs',
      desc: 'Los envíos solicitados antes de las 15:00 hs se entregan garantizados en la misma jornada.',
      icon: Clock,
    },
    {
      title: 'Notificaciones y control digital',
      desc: 'Recibí avisos automáticos sobre el estado y la entrega de tu paquete al instante por WhatsApp.',
      icon: Compass,
    },
    {
      title: 'Cadetería propia de confianza',
      desc: 'Nuestros riders están identificados, con más de 7 años de trayectoria en las calles de Mar del Plata.',
      icon: Users,
    },
  ];

  return (
    <section
      id="express-features"
      className="py-24 bg-brand-white-50 relative z-10 overflow-hidden border-t-2 border-brand-blue-100"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Header Segment */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="px-4 py-1.5 bg-brand-blue-700 text-brand-yellow-500 rounded-full text-xs font-subheading font-bold uppercase tracking-widest inline-block border border-brand-blue-700 shadow-sm">
              Soluciones Premium MDQ
            </span>

            <h2 className="text-brand-blue-700 text-4xl sm:text-5xl font-display uppercase tracking-tight leading-[0.95] border-l-4 border-brand-yellow-500 pl-4">
              ENTREGAS RÁPIDAS <br />
              <span className="text-brand-yellow-500 bg-brand-blue-700 px-2 py-0.5 inline-block mt-1">Y EFICIENTES</span>
            </h2>

            <p className="text-brand-blue-ink text-base leading-relaxed font-sans font-normal">
              Nuestro servicio Express ofrece cobertura total en el Partido de General Pueyrredón. Llegamos a todos los barrios con franjas horarias prioritarias: Centro, Chauvín, Los Troncos, Güemes, Puerto, Playa Grande, Punta Mogotes, Constitución, Camet y Batán.
            </p>

            <div className="pt-2 flex items-center gap-3 text-sm text-brand-blue-700 font-bold uppercase tracking-wider font-subheading">
              <Compass className="h-5 w-5 text-brand-yellow-500 shrink-0" />
              <span>LOGÍSTICA URBANA INTEGRAL 2026</span>
            </div>
          </div>

          {/* Bento Grid with Double-Bezel cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {features.map((feat, idx) => {
              const Icon = feat.icon;

              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-float hover:shadow-antigravity-deep hover:border-brand-blue-300 transition-all duration-300 flex flex-col group cursor-default"
                >
                  <div className="double-bezel-inner bg-white p-6 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full space-y-4">
                    <div className="h-12 w-12 rounded-xl bg-brand-blue-700 text-brand-yellow-500 flex items-center justify-center shrink-0 border border-brand-blue-700 shadow-sm group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-900 transition-colors duration-200">
                      <Icon className="h-6 w-6 shrink-0" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-xl font-display uppercase tracking-wider text-brand-blue-700 leading-tight">
                        {feat.title}
                      </h4>
                      <p className="text-sm text-brand-blue-ink/80 font-sans leading-relaxed">
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
