'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Container, PackageCheck, Receipt, Landmark, BarChart3, Users, Clock } from 'lucide-react';

export default function EmprendedoresFeatures() {
  const features = [
    {
      title: 'Almacenamiento en Friuli 1972',
      desc: 'Tercerizá tu logística integral con nosotros. Guardamos tu stock en nuestro depósito central de Friuli 1972.',
      icon: Container,
    },
    {
      title: 'Picking por código QR o de barras',
      desc: 'Armado ágil y preciso con picking por código QR o de barras y packing seguro, ideal para tu tienda online.',
      icon: PackageCheck,
    },
    {
      title: 'Cuentas Corrientes',
      desc: 'Esquemas de facturación mensual flexible y cuentas corrientes centralizadas adaptadas al flujo de caja de tu empresa.',
      icon: Receipt,
    },
  ];

  const stats = [
    { value: 'ALTA', label: 'Efectividad', icon: BarChart3 },
    { value: 'CONFIABLE', label: 'Logística Local', icon: Users },
    { value: 'CONTROL', label: 'Trazabilidad', icon: Clock },
  ];

  return (
    <section
      id="emprendedores-features"
      className="py-24 bg-brand-white-50 relative z-10 overflow-hidden border-t-4 border-brand-blue-700"
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
            <span className="px-4 py-1.5 bg-brand-blue-700 text-brand-yellow-500 rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-yellow-500 shadow-[2px_2px_0px_rgba(0,39,124,0.2)]">
              SOLUCIONES CORPORATIVAS
            </span>

            <h2 className="text-brand-blue-700 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-none border-l-4 border-brand-yellow-500 pl-4">
              LOGÍSTICA 3PL <br />
              <span className="text-brand-yellow-500 font-bold">PARA EMPRENDEDORES</span>
            </h2>

            <p className="text-brand-blue-500 text-base leading-relaxed font-sans">
              Somos mucho más que una empresa de envíos tradicional; nos convertimos en el departamento de logística estratégico de tu negocio. Delegá el almacenamiento, empaquetado y distribución en manos de expertos y enfocate de lleno en hacer crecer tu marca.
            </p>

            <div className="pt-4 flex items-center gap-3.5 text-sm text-brand-blue-700 font-bold uppercase tracking-wider font-subheading">
              <Landmark className="h-5 w-5 text-brand-yellow-500 shrink-0 fill-current" />
              <span>ALIANZA ESTRATÉGICA DE LARGO PLAZO</span>
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
                  className={`${spanClass} double-bezel-outer transition-all duration-500 flex flex-col group cursor-pointer`}
                >
                  <div className="double-bezel-inner p-6 flex flex-col md:flex-row gap-5 items-start h-full">
                    <div className="p-3 bg-brand-blue-600 text-brand-yellow-500 rounded-2xl shrink-0 border border-brand-blue-500 shadow-md group-hover:scale-105 transition-transform duration-300">
                      <Icon className="h-5.5 w-5.5 shrink-0" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-xl font-display uppercase tracking-wider text-brand-blue-700 leading-tight group-hover:text-brand-blue-600 transition-colors duration-300">
                        {feat.title}
                      </h4>
                      <p className="text-sm text-brand-blue-500 font-sans leading-relaxed">
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
        <div className="mt-20 border-t-2 border-brand-blue-100 pt-16">
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
                  className="bg-brand-white-50 border-2 border-brand-blue-700 p-6 rounded-3xl shadow-[4px_4px_0px_var(--color-brand-blue)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_var(--color-brand-blue)] transition-all duration-300 flex items-center gap-5 justify-center sm:justify-start"
                >
                  <div className="p-3.5 bg-brand-yellow-500 text-brand-blue-900 rounded-2xl shrink-0 border-2 border-brand-blue-700 shadow-[2px_2px_0px_var(--color-brand-blue)]">
                    <Icon className="h-6 w-6 shrink-0" />
                  </div>
                  <div className="text-left">
                    <span className="block text-3xl font-display uppercase tracking-tight text-brand-blue-700 leading-none mb-1">
                      {stat.value}
                    </span>
                    <span className="block text-xs uppercase tracking-wider font-subheading text-brand-blue-500 font-bold">
                      {stat.label}
                    </span>
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