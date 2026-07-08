'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Clock, ShieldCheck, Users, Trophy, Truck } from 'lucide-react';

export default function VisionSection() {
  const stats = [
    { value: '+50k', label: 'Envíos Realizados', icon: Truck },
    { value: '99.8%', label: 'Eficiencia de Entrega', icon: Trophy },
    { value: '0', label: 'Paquetes extraviados', icon: ShieldCheck },
    { value: '+50', label: 'Emprendedores Confían', icon: Users },
  ];

  return (
    <section 
      id="vision-section" 
      className="py-24 bg-white relative z-10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] overflow-hidden"
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 45 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Information Block */}
          <div className="lg:col-span-6 space-y-8">
            <span className="px-4 py-1.5 bg-brand-blue/5 text-brand-blue rounded-full text-xs font-subheading tracking-widest inline-block border border-brand-blue/20 uppercase">
              Partner Logístico Especializado
            </span>
            
            <h2 className="text-slate-900 text-display uppercase text-left">
              Nuestra Visión Logística
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed font-sans max-w-xl">
              Transformamos tus costos fijos en soluciones flexibles que acompañan el crecimiento de tu negocio, con ruteos eficientes y una red totalmente integrada en toda Mar del Plata.
            </p>

            <div className="space-y-5 pt-4">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start p-4 rounded-2xl hover:bg-slate-50 transition-all border-2 border-transparent hover:border-brand-blue/10 group cursor-default">
                <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-xl shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  <Clock className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-subheading uppercase tracking-wider text-slate-900 leading-none mb-1.5 group-hover:text-brand-blue transition-colors">
                    Entregas a Tiempo
                  </h4>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed">
                    Puntualidad garantizada en cada envío. Optimizamos cada ruta mediante geolocalización avanzada.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start p-4 rounded-2xl hover:bg-slate-50 transition-all border-2 border-transparent hover:border-brand-blue/10 group cursor-default">
                <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-xl shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-subheading uppercase tracking-wider text-slate-900 leading-none mb-1.5 group-hover:text-brand-blue transition-colors">
                    Envíos Seguros
                  </h4>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed">
                    Protección total de tus paquetes. Despachos con custodia digital y firmas de entrega seguras.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Deck Block */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  viewport={{ once: true }}
                  transition={{ 
                    y: { type: "spring", stiffness: 300, damping: 20 },
                    scale: { type: "spring", stiffness: 300, damping: 20 },
                    opacity: { duration: 0.5, delay: i * 0.1 }
                  }}
                  className={`p-8 rounded-3xl border-2 border-brand-blue transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                    i % 3 === 0 
                      ? 'bg-brand-yellow/5 shadow-[4px_4px_0px_#0636A5] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0636A5] hover:bg-brand-yellow/10' 
                      : 'bg-white shadow-[4px_4px_0px_#0636A5] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0636A5]'
                  }`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3.5 rounded-2xl bg-brand-blue/5 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                      <Icon className="h-6 w-6 group-hover:rotate-6 transition-transform duration-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-4xl lg:text-5xl font-display text-brand-blue uppercase leading-none mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-xs text-slate-500 font-sans uppercase tracking-wider leading-relaxed">
                      {stat.label}
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
