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
      className="py-24 bg-brand-white-50 relative z-10 overflow-hidden border-t-4 border-brand-blue"
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
            <span className="px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-yellow shadow-[2px_2px_0px_rgba(0,39,124,0.2)]">
              MÁXIMA RENTABILIDAD
            </span>
            
            <h2 className="text-brand-blue text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-none border-l-4 border-brand-yellow pl-4">
              ENVÍOS LOWCOST: <br />
              <span className="text-brand-yellow font-bold">MÁXIMA EFICIENCIA</span>
            </h2>
            
            <p className="text-brand-blue-500 text-base leading-relaxed font-sans">
              Nuestro servicio LowCost está diseñado para el ruteo diario masivo. Optimizamos nuestras rutas agrupando despachos para ofrecer la tarifa más competitiva, garantizando la entrega en el día para pedidos ingresados antes del horario de corte.
            </p>

            <div className="pt-4 flex items-center gap-3.5 text-sm text-brand-blue font-bold uppercase tracking-wider font-subheading">
              <Landmark className="h-5 w-5 text-brand-yellow shrink-0 fill-brand-blue" />
              <span>LOGÍSTICA PREDECIBLE PARA NEGOCIOS</span>
            </div>
          </div>

          {/* Features columns (Right) */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-6 text-left">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.5 }}
                  className="bg-white border-2 border-brand-blue/20 hover:border-brand-blue hover:shadow-[4px_4px_0px_var(--color-brand-blue)] p-6 rounded-3xl transition-all duration-300 flex flex-col lg:flex-row gap-5 items-start"
                >
                  <div className="p-3 bg-brand-blue text-brand-yellow rounded-2xl shrink-0 border border-brand-blue">
                    <Icon className="h-5.5 w-5.5 shrink-0" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-xl font-display uppercase tracking-wider text-brand-blue leading-tight">
                      {feat.title}
                    </h4>
                    <p className="text-sm text-brand-blue-500 font-sans leading-relaxed">
                      {feat.desc}
                    </p>
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
