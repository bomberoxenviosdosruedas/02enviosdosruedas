'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Building2, ShoppingBag, Landmark, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function EmprendedoresHome() {
  const solutions = [
    {
      title: 'Soluciones Corporativas',
      description: 'Optimización logística para empresas con Cuenta Corriente Flexible y beneficios de escala.',
      features: ['Facturación unificada', 'Múltiples despachos simultáneos', 'Gestión de devoluciones'],
      icon: Building2,
      tag: 'EMPRESAS',
    },
    {
      title: 'Envíos Flex MercadoLibre',
      description: 'Socio estratégico para potenciar tus ventas con entregas en el día.',
      features: ['Cumplimiento de SLAs de entrega', 'Etiquetado compatible', 'Ruteo dinámico'],
      icon: ShoppingBag,
      tag: 'MERCADOLIBRE',
    },
    {
      title: 'Logística E-Commerce',
      description: 'Gestión integral de última milla para PyMEs en crecimiento.',
      features: ['Seguimiento en tiempo real', 'Atención personalizada', 'Planes a tu medida'],
      icon: Landmark,
      tag: 'EMPRENDEDORES',
    },
  ];

  return (
    <section 
      id="emprendedores-home" 
      className="py-24 bg-brand-blue border-y border-blue-200/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(255,236,1,0.04),transparent_35%)]" />
      
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
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="px-3 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-block shadow-accent-sm">
            Socio Estratégico Local
          </span>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
            Potencia tu Logística con DosRuedas
          </h2>
          <div className="h-1.5 w-20 bg-brand-yellow rounded-full" />
        </div>

        {/* Solutions Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ 
                  y: { type: "spring", stiffness: 300, damping: 20 },
                  scale: { type: "spring", stiffness: 300, damping: 20 },
                  opacity: { duration: 0.5, delay: idx * 0.1 }
                }}
                className="bg-white rounded-3xl p-8 border border-slate-100 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(255,236,1,0.18)] hover:border-brand-yellow/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="p-3.5 bg-brand-yellow text-brand-blue rounded-2xl shadow-accent-sm group-hover:scale-105 transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest bg-brand-yellow text-brand-blue px-3 py-1 rounded-full uppercase font-mono shadow-inner">
                      {solution.tag}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-display uppercase tracking-tight text-slate-900 group-hover:text-brand-blue transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-slate-655 text-sm leading-relaxed font-sans">
                      {solution.description}
                    </p>
                  </div>

                  {/* Bullet features list */}
                  <ul className="space-y-2.5 pt-2">
                    {solution.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-slate-500 font-sans group-hover:text-slate-700 transition-colors">
                        <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-100">
                  <Link
                    href="/servicios/plan-emprendedores"
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue group-hover:text-brand-yellow-dark transition-colors"
                  >
                    <span>Conocer más</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
