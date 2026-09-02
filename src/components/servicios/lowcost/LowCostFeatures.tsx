'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Route, Clock, Landmark, Coins } from 'lucide-react';

export default function LowCostFeatures() {
  const features = [
    {
      title: 'Eficiencia en Ruteo',
      desc: 'Ruteo diario masivo optimizado de última milla. No se elige rango horario para maximizar la eficiencia logística y bajar costos.',
      icon: Route,
    },
    {
      title: 'Corte y Entrega',
      desc: 'Pedidos ingresados antes de las 13:00 hs se entregan de forma totalmente garantizada antes de las 19:00 hs del mismo día.',
      icon: Clock,
    },
    {
      title: 'Tarifa Económica',
      desc: 'La mejor tarifa de Mar del Plata para envíos masivos agrupados, ruteos continuos y entregas a clientes finales.',
      icon: Coins,
    },
  ];

  return (
    <section
      id="lowcost-features"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Header column (Left) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="-rotate-1 inline-block px-4 py-1.5 bg-[#0950F6] text-[#FFF12E] rounded-full text-xs font-subheading uppercase font-bold tracking-widest shadow-sm">
              MÁXIMA RENTABILIDAD
            </span>

            <h2 className="text-[#0950F6] text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-[0.98] border-l-4 border-[#FFF12E] pl-4">
              ENVÍOS LOWCOST: <br />
              <span className="text-[#052C87] bg-[#FFF12E] px-2 py-0.5 inline-block mt-1 font-bold">MÁXIMA EFICIENCIA</span>
            </h2>

            <p className="text-[#00277C] text-base leading-relaxed font-sans">
              Nuestro servicio LowCost está diseñado para el ruteo diario masivo. Optimizamos nuestras rutas agrupando despachos para ofrecer la tarifa más competitiva, garantizando la entrega en el día para pedidos ingresados antes del horario de corte.
            </p>

            <div className="pt-4 flex items-center gap-3.5 text-sm text-[#0950F6] font-bold uppercase tracking-wider font-subheading">
              <Landmark className="h-5 w-5 text-[#FFF12E] shrink-0 fill-current" />
              <span>LOGÍSTICA PREDECIBLE PARA NEGOCIOS</span>
            </div>
          </div>

          {/* Features columns (Right) - Bento Grid layout with Double-Bezel cards */}
          <div className="lg:col-span-7 grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              // Asymmetric Bento Grid spans
              const spanClass = idx === 0
                ? 'lg:col-span-12'
                : idx === 1
                  ? 'lg:col-span-7'
                  : 'lg:col-span-5';

              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{
                    y: -5,
                    x: 2,
                    boxShadow: "0 20px 40px -15px rgba(6, 54, 165, 0.15), 0 0 25px -5px rgba(255, 236, 1, 0.2)"
                  }}
                  className={`${spanClass} bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-[28px] shadow-float hover:shadow-antigravity-deep transition-all duration-300 flex flex-col group cursor-pointer relative overflow-hidden`}
                >
                  <div className="bg-white p-6 rounded-[20px] border border-brand-blue-50/50 shadow-sm flex flex-col md:flex-row gap-5 items-start h-full relative overflow-hidden">
                    {/* Giant Watermark Icon */}
                    <Icon className="absolute -bottom-6 -right-6 h-32 w-32 text-[#0950F6]/[0.05] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110" />

                    <div className="p-3 bg-[#0950F6] text-[#FFF12E] rounded-xl shrink-0 border border-[#0950F6] shadow-md group-hover:bg-[#FFF12E] group-hover:text-[#052C87] transition-colors duration-300 relative z-10">
                      <Icon className="h-6 w-6 shrink-0" />
                    </div>
                    <div className="space-y-1.5 relative z-10">
                      <h4 className="text-xl font-display uppercase tracking-wider text-[#0950F6] leading-tight group-hover:text-[#052C87] transition-colors duration-300">
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