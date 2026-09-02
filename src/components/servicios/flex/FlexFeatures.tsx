'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Truck, Clock, Coins } from 'lucide-react';

export default function FlexFeatures() {
  const features = [
    {
      title: 'Recolección gratis',
      desc: 'Retiramos tus paquetes sin costo adicional directamente por tu local o depósito.',
      icon: Truck,
    },
    {
      title: 'Entrega en el día antes de 20hs.',
      desc: 'Garantizamos que tus clientes reciban sus compras el mismo día antes de las 20:00 hs.',
      icon: Clock,
    },
    {
      title: 'Tarifas LowCost.',
      desc: 'Tarifas competitivas súper económicas para cuidar la rentabilidad de cada una de tus ventas.',
      icon: Coins,
    },
    {
      title: 'Horario de corte: 15hs.',
      desc: 'Recibimos y procesamos tus despachos del día hasta las 15:00 hs de manera garantizada.',
      icon: Clock,
    },
  ];

  return (
    <section
      id="flex-features"
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
            <span className="-rotate-1 inline-block px-4 py-1.5 bg-[#0950F6] text-[#FFF12E] rounded-full text-xs font-subheading font-bold uppercase tracking-widest shadow-sm">
              MERCADOLIBRE EXPERTS
            </span>

            <h2 className="text-[#0950F6] text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-[0.98] border-l-4 border-[#FFF12E] pl-4">
              DOMINÁ TUS VENTAS <br />
              <span className="text-[#052C87] bg-[#FFF12E] px-2 py-0.5 inline-block mt-1 font-bold">CON ENVÍOS FLEX</span>
            </h2>

            <p className="text-[#00277C] text-base leading-relaxed font-sans">
              Somos el aliado estratégico definitivo para vendedores de MercadoLibre en Mar del Plata. Optimizamos tus Envíos Same-Day Mar del Plata para que vos solo te preocupes por publicar, atender clientes y vender más de lo que imaginás.
            </p>

            <div className="pt-4 flex items-center gap-3.5 text-sm text-[#0950F6] font-bold uppercase tracking-wider font-subheading">
              <Truck className="h-5 w-5 text-[#FFF12E] shrink-0 fill-current" />
              <span>COBERTURA TOTAL EN MAR DEL PLATA</span>
            </div>
          </div>

          {/* Features columns (Right) - Bento Grid layout with Double-Bezel cards */}
          <div className="lg:col-span-7 grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              const spanClass = 'lg:col-span-6';

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