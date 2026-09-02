'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Route, Clock, Coins, TrendingDown 
} from 'lucide-react';

export default function LowCostBenefits() {
  const benefits = [
    {
      title: 'Entregas a valores LowCost con las condiciones de express',
      desc: 'Disfrutá del mejor precio con un servicio rápido y seguro que se adapta a vos.',
      icon: Coins,
    },
    {
      title: 'Horario de corte extendido hasta 13hs',
      desc: 'Ingresá tus envíos del día hasta las 13:00 hs y los entregamos en la misma jornada antes de las 19:00 hs.',
      icon: Clock,
    },
    {
      title: 'Ruteo Urbano Eficiente',
      desc: 'Ruteo continuo optimizado que permite la máxima velocidad de entrega en Mar del Plata.',
      icon: Route,
    },
    {
      title: 'Ahorro de costos logísticos',
      desc: 'Maximizá tu rentabilidad pagando tarifas súper económicas por cada entrega.',
      icon: TrendingDown,
    },
  ];

  return (
    <section 
      id="lowcost-benefits" 
      className="py-24 bg-[#052C87] relative z-10 overflow-hidden border-t border-b border-white/10 text-white"
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
          <span className="-rotate-1 inline-block px-4 py-1.5 bg-[#FFF12E] text-[#052C87] rounded-full text-xs font-subheading uppercase font-bold tracking-widest shadow-glow-yellow">
            VENTAJAS CLAVE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white leading-[0.98]">
            BENEFICIOS LOWCOST
          </h2>
          <p className="text-blue-100 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            La combinación perfecta entre economía inteligente y máxima eficiencia logística para la consolidación de tu negocio.
          </p>
          <div className="h-1.5 w-16 bg-[#FFF12E] mx-auto rounded-full" />
        </div>

        {/* Benefits Grid Bento layout with Double Bezel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            const spanClass = 'lg:col-span-6';

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, x: 2 }}
                className={`${spanClass} bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[28px] shadow-float hover:shadow-antigravity-deep transition-all duration-300 flex flex-col justify-between text-left group relative overflow-hidden`}
              >
                <div className="bg-white text-[#052C87] p-8 rounded-[20px] h-full space-y-5 relative overflow-hidden">
                  {/* Giant Watermark Icon */}
                  <Icon className="absolute -bottom-6 -right-6 h-36 w-32 text-[#0950F6]/[0.05] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110" />

                  <div className="p-3 bg-[#0950F6] text-[#FFF12E] rounded-xl w-fit border border-[#0950F6] shadow-sm relative z-10">
                    <Icon className="h-6 w-6 shrink-0" />
                  </div>
                  
                  <h3 className="text-xl font-display uppercase tracking-wide text-[#052C87] font-bold leading-tight relative z-10">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm text-[#00277C]/80 font-sans leading-relaxed relative z-10">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
