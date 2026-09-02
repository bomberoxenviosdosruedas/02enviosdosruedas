'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Compass, Users } from 'lucide-react';

export default function ExpressFeatures() {
  const features = [
    {
      title: 'Rangos de Entrega de 3 Horas',
      desc: 'Elegí franjas horarias precisas de 3 horas de espaciado (ej: 10 a 13 hs) para trámites y gestiones urgentes.',
      icon: Clock,
    },
    {
      title: 'Corte 15:00 hs (2h anticipación)',
      desc: 'Pedí con 2 horas de anticipación y antes de las 15:00 hs para entrega asegurada en el mismo día.',
      icon: ShieldCheck,
    },
    {
      title: 'Bultos en Moto (Hasta 5 kg)',
      desc: 'Traslado seguro de paquetes de hasta 5 kg y 40x30 cm con control y avisos en tiempo real por WhatsApp.',
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
      className="py-24 bg-[#F8FAFC] relative z-10 overflow-hidden border-t border-brand-blue-100"
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
            <span className="-rotate-1 inline-block px-4 py-1.5 bg-[#0950F6] text-[#FFF12E] rounded-full text-xs font-subheading font-bold uppercase tracking-widest shadow-sm">
              SOLUCIONES PREMIUM MDQ
            </span>

            <h2 className="text-[#0950F6] text-4xl sm:text-5xl font-display uppercase tracking-tight leading-[0.98] border-l-4 border-[#FFF12E] pl-4">
              ENTREGAS RÁPIDAS <br />
              <span className="text-[#052C87] bg-[#FFF12E] px-2 py-0.5 inline-block mt-1">Y EFICIENTES</span>
            </h2>

            <p className="text-[#00277C] text-base leading-relaxed font-sans font-normal">
              Nuestro servicio Express ofrece cobertura total en el Partido de General Pueyrredón. Llegamos a todos los barrios con franjas horarias prioritarias: Centro, Chauvín, Los Troncos, Güemes, Puerto, Playa Grande, Punta Mogotes, Batán.
            </p>

            <div className="pt-2 flex items-center gap-3 text-sm text-[#0950F6] font-bold uppercase tracking-wider font-subheading">
              <Compass className="h-5 w-5 text-[#FFF12E] shrink-0 fill-current" />
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
                  className="bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-[28px] shadow-float hover:shadow-antigravity-deep hover:border-brand-blue-300 transition-all duration-300 flex flex-col group cursor-default relative overflow-hidden"
                >
                  <div className="bg-white p-6 rounded-[20px] border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full space-y-4 relative overflow-hidden">
                    {/* Giant Watermark Icon */}
                    <Icon className="absolute -bottom-6 -right-6 h-32 w-32 text-[#0950F6]/[0.05] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110" />

                    <div className="h-12 w-12 rounded-xl bg-[#0950F6] text-[#FFF12E] flex items-center justify-center shrink-0 border border-[#0950F6] shadow-sm group-hover:bg-[#FFF12E] group-hover:text-[#052C87] transition-colors duration-200 relative z-10">
                      <Icon className="h-6 w-6 shrink-0" />
                    </div>
                    <div className="space-y-1.5 relative z-10">
                      <h4 className="text-xl font-display uppercase tracking-wider text-[#0950F6] leading-tight">
                        {feat.title}
                      </h4>
                      <p className="text-sm text-[#00277C]/80 font-sans leading-relaxed">
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
