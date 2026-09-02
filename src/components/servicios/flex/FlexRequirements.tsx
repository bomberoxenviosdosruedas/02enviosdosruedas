'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Clock } from 'lucide-react';

export default function FlexRequirements() {
  const requirements = [
    {
      title: 'Cuenta activa de vendedor',
      desc: 'Tener una cuenta activa de vendedor dentro de MercadoLibre.',
      icon: Sparkles,
    },
    {
      title: 'Envíos flex activados',
      desc: 'Habilitar la opción de envíos rápidos en el día en tu configuración logística.',
      icon: MapPin,
    },
    {
      title: 'Embalaje apto para moto',
      desc: 'Tener tus paquetes embalados de forma adecuada para el traslado seguro en moto.',
      icon: Clock,
    },
  ];

  return (
    <section 
      id="flex-requirements" 
      className="py-24 bg-[#F8FAFC] relative z-10 overflow-hidden border-t border-brand-blue-100"
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
          <span className="-rotate-1 inline-block px-4 py-1.5 bg-[#0950F6] text-[#FFF12E] rounded-full text-xs font-subheading uppercase font-bold tracking-widest shadow-sm">
            PUESTA EN MARCHA
          </span>
          <h2 className="text-[#0950F6] text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight border-l-4 border-[#FFF12E] pl-4 inline-block leading-[0.98]">
            ¿QUÉ NECESITÁS?
          </h2>
          <p className="text-[#00277C]/80 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Requisitos mínimos e indispensables para empezar a ofrecer envíos Same-Day y potenciar tu e-commerce hoy mismo.
          </p>
          <div className="h-1.5 w-16 bg-[#FFF12E] mx-auto rounded-full" />
        </div>

        {/* Requirements Grid Bento Grid layout with Double Bezel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {requirements.map((req, idx) => {
            const Icon = req.icon;
            return (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, x: 2 }}
                className="lg:col-span-4 bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-[28px] shadow-float hover:shadow-antigravity-deep transition-all duration-300 flex flex-col group cursor-pointer relative overflow-hidden"
              >
                <div className="bg-white p-6 rounded-[20px] border border-brand-blue-50/50 shadow-sm h-full flex flex-col gap-5 text-left relative overflow-hidden">
                  {/* Giant Watermark Icon */}
                  <Icon className="absolute -bottom-6 -right-6 h-32 w-32 text-[#0950F6]/[0.05] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110" />

                  <div className="p-3 bg-[#FFF12E] text-[#052C87] rounded-xl w-fit shrink-0 border border-[#FFF12E] shadow-glow-yellow relative z-10">
                    <Icon className="h-6 w-6 shrink-0" />
                  </div>
                  
                  <div className="space-y-1.5 relative z-10">
                    <h3 className="text-xl font-display uppercase tracking-wide text-[#0950F6] font-bold leading-tight">
                      {req.title}
                    </h3>
                    <p className="text-sm text-[#00277C]/80 font-sans leading-relaxed">
                      {req.desc}
                    </p>
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
