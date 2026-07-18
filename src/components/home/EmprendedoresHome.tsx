'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Building2, ShoppingBag, Landmark, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function EmprendedoresHome() {
  const solutions = [
    {
      title: 'Logística E-Commerce',
      description: 'Gestión integral de última milla para PyMEs en crecimiento. Recolección gratis a domicilio y seguimiento satelital.',
      features: ['Soporte dedicado', 'Entregas contrareembolso sin cargo extra', 'Entregas en tiempo y forma'],
      icon: Building2,
      tag: 'EMPRENDEDORES',
      span: 'lg:col-span-7',
    },
    {
      title: 'Envíos Flex MercadoLibre',
      description: 'Socio estratégico para potenciar tus ventas con entregas rápidas y seguras en el mismo día.',
      features: ['Cumplimiento de SLAs de entrega', 'Etiquetado compatible', 'Ruteo dinámico inteligente'],
      icon: ShoppingBag,
      tag: 'MERCADOLIBRE',
      span: 'lg:col-span-5',
    },
    {
      title: 'Soluciones Corporativas',
      description: 'Optimización logística integral para grandes marcas y empresas con Cuenta Corriente Flexible, ruteos personalizados en el día y beneficios de escala exclusivos.',
      features: ['Soporte dedicado', 'Entregas contrareembolso sin cargo extra', 'Entregas en tiempo y forma'],
      icon: Landmark,
      tag: 'EMPRESAS / CORPORATIVO',
      span: 'lg:col-span-12',
    },
  ];

  return (
    <section
      id="emprendedores-home"
      className="py-16 md:py-24 lg:py-32 bg-brand-blue-700 border-y border-white/10 relative overflow-hidden z-10"
      aria-labelledby="emprendedores-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(255,236,1,0.06),transparent_35%)]" />

      <motion.div
        className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0, y: 45 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
        }}
      >
        {/* Section Title */}
        <div className="max-w-3xl mb-12 lg:mb-16 space-y-4">
          <span className="inline-flex items-center px-4 py-1.5 bg-white/10 text-brand-yellow border border-white/20 rounded-full text-xs font-subheading tracking-widest uppercase">
            Socio Estratégico Local
          </span>
          <h2 id="emprendedores-heading" className="text-white text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.9] text-left">
            Potenciamos tu Negocio Local
          </h2>
          <p className="text-brand-blue-100 font-sans text-sm sm:text-base leading-relaxed max-w-2xl">
            Si vendés online, necesitás un socio logístico que responda. Creamos planes a tu medida con tarifas dinámicas y recolección a domicilio programada en Mar del Plata.
          </p>
          <div className="h-1.5 w-20 bg-brand-yellow rounded-full" />
        </div>

        {/* Solutions Cards Grid: Asymmetric Bento Layout with Double-Bezel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: index === 2 ? 1.005 : 1.01 }}
              viewport={{ once: true }}
              transition={{
                y: { type: 'spring', stiffness: 300, damping: 20 },
                scale: { type: 'spring', stiffness: 300, damping: 20 },
                opacity: { duration: 0.5, delay: index * 0.1 },
              }}
              className={`${solution.span} double-bezel-outer bg-brand-blue-100/80 hover:shadow-[6px_6px_0px_var(--color-brand-yellow)] hover:border-brand-yellow/40 border border-brand-blue-200 transition-all duration-300 flex flex-col group cursor-pointer`}
            >
              <div className="double-bezel-inner bg-white p-8 flex flex-col justify-between h-full border border-brand-blue-50 shadow-sm space-y-6">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="p-3.5 bg-brand-yellow/20 text-brand-blue border border-brand-yellow/30 rounded-2xl group-hover:scale-105 transition-transform duration-300">
                      <solution.icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest bg-brand-blue-50 text-brand-blue-500 px-3 py-1 rounded-full uppercase font-mono border border-brand-blue-100">
                      {solution.tag}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-display uppercase tracking-tight text-brand-blue group-hover:text-brand-blue transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-brand-blue-500 text-sm leading-relaxed font-sans">
                      {solution.description}
                    </p>
                  </div>
                  <ul className="space-y-2.5 pt-2">
                    {solution.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-brand-blue-500 font-sans group-hover:text-brand-blue-700 transition-colors">
                        <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8 mt-8 border-t border-brand-blue-50">
                  <Link
                    href={solution.tag === 'EMPRENDEDORES' ? '/servicios/plan-emprendedores' : solution.tag === 'MERCADOLIBRE' ? '/servicios/envios-flex' : '/servicios/logistica-corporativa'}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-yellow transition-colors active:scale-[0.98] active:translate-y-[1px]"
                  >
                    <span>Conocer más</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}