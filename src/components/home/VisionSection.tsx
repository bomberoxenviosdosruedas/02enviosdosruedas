'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Clock, ShieldCheck, Users, Truck } from 'lucide-react';

export default function VisionSection() {
  const stats = [
    { value: '+52k', label: 'Envíos realizados', icon: Truck },
    { value: '0', label: 'Paquetes extraviados', icon: ShieldCheck },
    { value: '+140', label: 'Emprendedores confían', icon: Users },
  ];

  return (
    <section
      id="vision-section"
      className="py-24 bg-white relative z-10 overflow-hidden"
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
            <span className="px-4 py-1.5 bg-brand-yellow/20 text-brand-blue rounded-full text-xs font-subheading tracking-widest inline-block border border-brand-yellow uppercase">
              Partner Logístico Especializado
            </span>

            <h2 className="text-brand-blue text-display uppercase text-left">
              Conectamos Mar del Plata de Punta a Punta
            </h2>

            <p className="text-brand-blue-500 text-lg leading-relaxed font-sans max-w-xl">
              Nos especializamos en la distribución de última milla para e-commerce locales y retailers nacionales, asegurando que tus productos lleguen al destino en tiempo récord con tecnología de punta y tarifas transparentes.
            </p>

            <div className="space-y-5 pt-4">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start p-4 rounded-2xl hover:bg-brand-white-50 transition-all border border-transparent hover:border-brand-blue/10 group cursor-default">
                <div className="p-3 bg-brand-yellow text-brand-blue rounded-xl shrink-0 group-hover:bg-brand-blue group-hover:text-brand-yellow transition-all duration-300 border border-brand-yellow/30">
                  <Clock className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-subheading uppercase tracking-wider text-brand-blue leading-none mb-1.5 transition-colors">
                    Entregas a Tiempo
                  </h4>
                  <p className="text-sm text-brand-blue-400 font-sans leading-relaxed">
                    Puntualidad garantizada en cada envío. Optimizamos cada ruta mediante geolocalización avanzada.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start p-4 rounded-2xl hover:bg-brand-white-50 transition-all border border-transparent hover:border-brand-blue/10 group cursor-default">
                <div className="p-3 bg-brand-yellow text-brand-blue rounded-xl shrink-0 group-hover:bg-brand-blue group-hover:text-brand-yellow transition-all duration-300 border border-brand-yellow/30">
                  <ShieldCheck className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-subheading uppercase tracking-wider text-brand-blue leading-none mb-1.5 transition-colors">
                    Envíos Seguros
                  </h4>
                  <p className="text-sm text-brand-blue-400 font-sans leading-relaxed">
                    Protección total de tus paquetes. Despachos con custodia digital y firmas de entrega seguras.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Deck Block: Asymmetrical Bento Grid with Double Bezel Architecture */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Main Bento Card: Envíos Realizados (Double Bezel - Dark Corporate Accent) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="sm:col-span-2 p-2 bg-brand-blue/10 border border-brand-blue/15 rounded-[2rem] hover:shadow-accent-sm transition-all duration-500"
            >
              <div className="bg-brand-blue rounded-[calc(2rem-0.5rem)] p-8 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-brand-yellow/5 blur-[50px] pointer-events-none" />
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3.5 rounded-2xl bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20">
                    <Truck className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/10 text-brand-yellow font-bold">MAR DEL PLATA 2026</span>
                </div>
                <div>
                  <h3 className="text-5xl lg:text-6xl font-display uppercase leading-none mb-3">
                    +52.000
                  </h3>
                  <p className="text-xs text-brand-blue-100 font-sans uppercase tracking-wider leading-relaxed">
                    Envíos y entregas realizadas con éxito en toda la región
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bento Card 2: Paquetes Extraviados (Double Bezel - Light Style) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.1 }}
              className="double-bezel-outer hover:shadow-soft-elevation transition-all duration-500"
            >
              <div className="double-bezel-inner p-6 sm:p-8 flex flex-col justify-between h-full group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-brand-blue/5 text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-yellow transition-colors duration-300 border border-brand-blue/10">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl font-display text-brand-blue uppercase leading-none mb-2">
                    0
                  </h3>
                  <p className="text-[10px] text-brand-blue-400 font-sans uppercase tracking-widest font-semibold">
                    Paquetes extraviados
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bento Card 3: Emprendedores Confían (Double Bezel - Light Style) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.2 }}
              className="double-bezel-outer hover:shadow-soft-elevation transition-all duration-500"
            >
              <div className="double-bezel-inner p-6 sm:p-8 flex flex-col justify-between h-full group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-brand-blue/5 text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-yellow transition-colors duration-300 border border-brand-blue/10">
                    <Users className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl font-display text-brand-blue uppercase leading-none mb-2">
                    +140
                  </h3>
                  <p className="text-[10px] text-brand-blue-400 font-sans uppercase tracking-widest font-semibold">
                    Emprendedores confían
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
