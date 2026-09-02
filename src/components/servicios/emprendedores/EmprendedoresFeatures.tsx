'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Container, PackageCheck, Receipt, Landmark, BarChart3, Users, Clock, Tag } from 'lucide-react';

export default function EmprendedoresFeatures() {
  const features = [
    {
      title: 'E-Commerce Same Day (Friuli 1972)',
      desc: 'Guardamos tu stock en nuestro depósito central de Friuli 1972. Al vender, tu producto sale inmediatamente empaquetado con picking por código QR.',
      icon: Container,
    },
    {
      title: 'Opción DropOFF (-20% OFF)',
      desc: 'Acercá tus paquetes directamente a nuestro depósito en Friuli 1972 y obtené un 20% de descuento automático en la tarifa final de envío.',
      icon: Tag,
    },
    {
      title: 'Contrareembolso Sin Cargo Extra',
      desc: 'Realizamos cobro contra entrega en destino sin ningún tipo de comisión ni recargo adicional por gestión de cobranza.',
      icon: Receipt,
    },
  ];

  const stats = [
    { value: 'SAME DAY', label: 'Picking por QR', icon: BarChart3 },
    { value: '-20% OFF', label: 'Opción DropOFF', icon: Tag },
    { value: '$0 COMISIÓN', label: 'Contrareembolso', icon: Clock },
  ];

  return (
    <section
      id="emprendedores-features"
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
              SOLUCIONES PAQUETERÍA E-COMMERCE
            </span>

            <h2 className="text-[#0950F6] text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-[0.98] border-l-4 border-[#FFF12E] pl-4">
              LOGÍSTICA 3PL <br />
              <span className="text-[#052C87] bg-[#FFF12E] px-2 py-0.5 inline-block mt-1 font-bold">Y PAQUETERÍA E-COMMERCE</span>
            </h2>

            <p className="text-[#00277C] text-base leading-relaxed font-sans">
              Especialistas en paquetería e-commerce y logística 3PL en Mar del Plata. Almacenamos tus productos pequeños o medianos en Friuli 1972, realizamos picking por QR y despachamos en el día o 24hs con la tarifa más competitiva.
            </p>

            <div className="pt-4 flex items-center gap-3.5 text-sm text-[#0950F6] font-bold uppercase tracking-wider font-subheading">
              <Landmark className="h-5 w-5 text-[#FFF12E] shrink-0 fill-current" />
              <span>PAQUETERÍA Y LOGÍSTICA B2B MAR DEL PLATA</span>
            </div>
          </div>

          {/* Features columns (Right) - Bento Grid layout with Double-Bezel cards */}
          <div className="lg:col-span-7 grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
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

        {/* Stats Section Panel */}
        <div className="mt-20 border-t border-brand-blue-100 pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[28px] shadow-float transition-all duration-300 flex items-center justify-center sm:justify-start"
                >
                  <div className="bg-white p-6 rounded-[20px] border border-brand-blue-50/50 shadow-sm flex items-center gap-5 w-full">
                    <div className="p-3.5 bg-[#FFF12E] text-[#052C87] rounded-xl shrink-0 border border-[#FFF12E] shadow-glow-yellow">
                      <Icon className="h-6 w-6 shrink-0" />
                    </div>
                    <div className="text-left">
                      <span className="block text-2xl font-mono tabular-nums font-bold uppercase tracking-tight text-[#052C87] leading-none mb-1">
                        {stat.value}
                      </span>
                      <span className="block text-xs uppercase tracking-wider font-subheading text-[#0950F6] font-bold">
                        {stat.label}
                      </span>
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
