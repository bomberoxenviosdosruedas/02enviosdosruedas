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
      features: ['Soporte dedicado', 'Entregas contrareembolso sin cargo extra', 'Entregas en tiempo y forma'],
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
          <span className="px-4 py-1.5 bg-brand-yellow text-brand-blue border-2 border-brand-blue rounded-full text-xs font-subheading tracking-widest inline-block shadow-[2px_2px_0px_#0636A5]">
            Socio Estratégico Local
          </span>
          <h2 className="text-white text-display uppercase text-left">
            Potenciamos tu Negocio Local
          </h2>
          <p className="text-slate-200 font-sans text-sm sm:text-base leading-relaxed max-w-2xl">
            Si vendés online, necesitás un socio logístico que responda. Creamos planes a tu medida con tarifas dinámicas y recolección a domicilio programada en Mar del Plata.
          </p>
          <div className="h-1.5 w-20 bg-brand-yellow rounded-full" />
        </div>

        {/* Solutions Cards Grid: Asymmetric Layout to avoid banned 3 equal cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 1: PyMEs (E-Commerce) - lg:col-span-7 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.01 }}
            viewport={{ once: true }}
            transition={{ y: { type: "spring", stiffness: 300, damping: 20 }, scale: { type: "spring", stiffness: 300, damping: 20 }, opacity: { duration: 0.5 } }}
            className="lg:col-span-7 bg-[#04287D] rounded-3xl p-8 border border-white/15 flex flex-col justify-between hover:shadow-[6px_6px_0px_#FFEC00] hover:border-brand-yellow/30 transition-all duration-300 group cursor-pointer"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="p-3.5 bg-brand-yellow text-brand-blue border border-brand-yellow rounded-2xl group-hover:scale-105 transition-transform duration-300">
                  <Landmark className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-bold tracking-widest bg-white/10 text-white px-3 py-1 rounded-full uppercase font-mono border border-white/10">
                  EMPRENDEDORES
                </span>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-display uppercase tracking-tight text-white group-hover:text-brand-yellow transition-colors">
                  Logística E-Commerce
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  Gestión integral de última milla para PyMEs en crecimiento. Recolección gratis a domicilio y seguimiento satelital.
                </p>
              </div>
              <ul className="space-y-2.5 pt-2">
                {['Soporte dedicado por WhatsApp', 'Entregas contrareembolso sin cargo extra', 'Entregas en tiempo y forma en MDQ'].map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-xs text-slate-300 font-sans group-hover:text-white transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8 mt-8 border-t border-white/10">
              <Link
                href="/servicios/plan-emprendedores"
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-brand-yellow transition-colors"
              >
                <span>Conocer más</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: MercadoLibre Flex - lg:col-span-5 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.01 }}
            viewport={{ once: true }}
            transition={{ y: { type: "spring", stiffness: 300, damping: 20 }, scale: { type: "spring", stiffness: 300, damping: 20 }, opacity: { duration: 0.5, delay: 0.1 } }}
            className="lg:col-span-5 bg-[#04287D] rounded-3xl p-8 border border-white/15 flex flex-col justify-between hover:shadow-[6px_6px_0px_#FFEC00] hover:border-brand-yellow/30 transition-all duration-300 group cursor-pointer"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="p-3.5 bg-brand-yellow text-brand-blue border border-brand-yellow rounded-2xl group-hover:scale-105 transition-transform duration-300">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-bold tracking-widest bg-white/10 text-white px-3 py-1 rounded-full uppercase font-mono border border-white/10">
                  MERCADOLIBRE
                </span>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-display uppercase tracking-tight text-white group-hover:text-brand-yellow transition-colors">
                  Envíos Flex MercadoLibre
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  Socio estratégico para potenciar tus ventas con entregas rápidas y seguras en el mismo día.
                </p>
              </div>
              <ul className="space-y-2.5 pt-2">
                {['Cumplimiento de SLAs de entrega', 'Etiquetado compatible', 'Ruteo dinámico inteligente'].map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-xs text-slate-300 font-sans group-hover:text-white transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8 mt-8 border-t border-white/10">
              <Link
                href="/servicios/envios-flex"
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-brand-yellow transition-colors"
              >
                <span>Conocer más</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Corporativos (Wide banner at bottom) - lg:col-span-12 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.005 }}
            viewport={{ once: true }}
            transition={{ y: { type: "spring", stiffness: 300, damping: 20 }, scale: { type: "spring", stiffness: 300, damping: 20 }, opacity: { duration: 0.5, delay: 0.2 } }}
            className="lg:col-span-12 bg-[#04287D] rounded-3xl p-8 sm:p-10 border border-white/15 hover:shadow-[6px_6px_0px_#FFEC00] hover:border-brand-yellow/30 transition-all duration-300 group cursor-pointer"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 bg-brand-yellow text-brand-blue border border-brand-yellow rounded-2xl shadow-[2px_2px_0px_#0636A5]">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest bg-white/10 text-white px-3 py-1 rounded-full uppercase font-mono border border-white/10">
                    EMPRESAS / CORPORATIVO
                  </span>
                </div>
                <h3 className="text-3xl font-display uppercase tracking-tight text-white group-hover:text-brand-yellow transition-colors">
                  Soluciones Corporativas
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
                  Optimización logística integral para grandes marcas y empresas con Cuenta Corriente Flexible, ruteos personalizados en el día y beneficios de escala exclusivos.
                </p>
              </div>
              <div className="md:col-span-5 space-y-6 md:border-l md:border-white/10 md:pl-8">
                <ul className="space-y-3">
                  {['Facturación unificada mensual', 'Múltiples despachos simultáneos', 'Gestión inversa y devoluciones'].map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-sans group-hover:text-white transition-colors">
                      <CheckCircle2 className="h-4.5 w-4.5 text-brand-yellow shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Link
                    href="/servicios/logistica-corporativa"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-brand-yellow transition-colors"
                  >
                    <span>Conocer más planes</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
