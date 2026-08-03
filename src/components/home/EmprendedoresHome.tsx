'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Building2, ShoppingBag, Landmark, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function EmprendedoresHome() {
  return (
    <section
      id="emprendedores-home"
      className="py-24 bg-brand-ink relative overflow-hidden text-white border-y border-white/10"
    >
      {/* Background Decorative Asymmetric Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-yellow-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 45 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      >

        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <span className="px-4 py-1.5 bg-brand-blue text-brand-yellow border border-brand-blue-500/30 rounded-full text-xs font-subheading tracking-widest inline-block uppercase shadow-sm">
            Socio Estratégico Local
          </span>
          <h2 className="text-white text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.9] text-left">
            Potenciamos tu Negocio Local
          </h2>
          <p className="text-brand-blue-100 font-sans text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
            Si vendés online, necesitás un socio logístico que responda. Creamos planes a tu medida con tarifas dinámicas y recolección a domicilio programada en Mar del Plata.
          </p>
          <div className="h-1.5 w-16 bg-brand-yellow rounded-full" />
        </div>

        {/* Solutions Cards Grid: Asymmetric Bento Layout with Double-Bezel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: PyMEs (E-Commerce) - lg:col-span-7 (Dark Navy Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            className="lg:col-span-7 double-bezel-outer p-2 rounded-2xl bg-brand-blue-50/5 border border-brand-blue-500/20 hover:border-brand-yellow/30 hover:bg-brand-blue-50/10 hover:shadow-antigravity-deep transition-all duration-300 group"
          >
            <div className="double-bezel-inner bg-brand-blue-700/60 p-6 sm:p-8 rounded-xl border border-brand-blue-500/20 shadow-inner flex flex-col justify-between h-full relative overflow-hidden text-left">
              
              {/* Subtle Radial Glow */}
              <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-brand-yellow-500/10 blur-3xl pointer-events-none" />

              {/* Huge Watermark Background Icon */}
              <div className="absolute right-4 bottom-4 text-white opacity-[0.03] pointer-events-none select-none transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6">
                <Landmark className="w-48 h-48" />
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-brand-yellow text-brand-blue rounded-xl shadow-[2px_2px_0px_var(--color-brand-blue-700)] group-hover:scale-105 transition-transform duration-300">
                    <Landmark className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest bg-brand-ink text-brand-yellow px-3 py-1.5 rounded-lg uppercase font-subheading border border-brand-yellow/30">
                    EMPRENDEDORES
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white group-hover:text-brand-yellow transition-colors duration-300">
                    Logística E-Commerce
                  </h3>
                  <p className="text-brand-blue-100 text-sm leading-relaxed font-sans">
                    Gestión de última milla pensada para PyMEs y marcas locales. Optimizamos tus costos de envío con retiros programados a domicilio y soporte post-venta.
                  </p>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {['Soporte comercial dedicado vía WhatsApp', 'Entregas contrareembolso integradas sin cargo extra', 'Rastreo digital transparente para tus clientes'].map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-white font-sans transition-colors">
                      <ShieldCheck className="h-4.5 w-4.5 text-brand-yellow shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-blue-500/20 relative z-10 flex justify-end">
                <Link
                  href="/servicios/plan-emprendedores"
                  className="cta-nested-pill bg-brand-yellow text-brand-blue px-6 py-2.5 text-xs"
                >
                  <span>Conocer más</span>
                  <span className="cta-nested-icon bg-brand-blue/10">→</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Card 2: MercadoLibre Flex - lg:col-span-5 (Yellow Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 18, delay: 0.1 }}
            className="lg:col-span-5 double-bezel-outer p-2 rounded-2xl bg-brand-yellow-500/10 border border-brand-yellow-500/20 hover:border-brand-blue/30 hover:bg-brand-yellow-500/15 hover:shadow-[0_20px_40px_-15px_rgba(255,236,1,0.15)] transition-all duration-300 group"
          >
            <div className="double-bezel-inner bg-gradient-to-br from-brand-yellow-500 to-brand-yellow-400 p-6 sm:p-8 rounded-xl border border-brand-yellow-500/20 shadow-sm flex flex-col justify-between h-full relative overflow-hidden text-left text-brand-blue-900">
              
              {/* Subtle Radial Glow */}
              <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-white/20 blur-3xl pointer-events-none" />

              {/* Huge Watermark Background Icon */}
              <div className="absolute right-4 bottom-4 text-brand-blue opacity-[0.04] pointer-events-none select-none transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6">
                <ShoppingBag className="w-48 h-48" />
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-brand-blue text-white rounded-xl shadow-[2px_2px_0px_rgba(0,39,124,0.4)]">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest bg-brand-blue text-white px-3 py-1.5 rounded-lg uppercase font-subheading border border-brand-blue/20">
                    MERCADOLIBRE
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue leading-none group-hover:text-brand-blue-950 transition-colors duration-300">
                    Envíos Flex Meli
                  </h3>
                  <p className="text-brand-blue-950/80 text-sm leading-relaxed font-sans font-medium">
                    Socio logístico homologado para tus envíos rápidos en el día. Recolección gratis en tu local y entrega garantizada dentro del SLA establecido.
                  </p>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {['Corte extendido hasta las 15:00 hs', 'Etiquetas impresas 100% compatibles', 'Ruteo dinámico coordinado por GPS'].map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-brand-blue-900 font-sans transition-colors">
                      <ShieldCheck className="h-4.5 w-4.5 text-brand-blue shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-blue/10 relative z-10 flex justify-end">
                <Link
                  href="/servicios/enviosflex"
                  className="cta-nested-pill bg-brand-blue text-white px-6 py-2.5 text-xs shadow-md"
                >
                  <span>Configurar Flex</span>
                  <span className="cta-nested-icon bg-white/10">→</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Corporativos (Wide banner at bottom) - lg:col-span-12 (White Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 18, delay: 0.2 }}
            className="lg:col-span-12 double-bezel-outer p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100 hover:border-brand-blue-300 hover:shadow-antigravity-deep transition-all duration-300 group"
          >
            <div className="double-bezel-inner bg-white p-6 sm:p-10 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full relative overflow-hidden text-left text-brand-ink">
              
              {/* Subtle Radial Glow */}
              <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-brand-blue-500/5 blur-3xl pointer-events-none" />

              {/* Huge Watermark Background Icon */}
              <div className="absolute right-6 bottom-6 text-brand-blue opacity-[0.02] pointer-events-none select-none transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6">
                <Building2 className="w-64 h-64" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                <div className="md:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-brand-yellow text-brand-blue rounded-xl shadow-[2px_2px_0px_var(--color-brand-blue-700)]">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest bg-brand-blue-50 text-brand-blue-600 px-3 py-1.5 rounded-lg uppercase font-subheading border border-brand-blue-100">
                      EMPRESAS / CORPORATIVO
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-brand-blue group-hover:text-brand-blue-900 transition-colors duration-300">
                    Soluciones Corporativas
                  </h3>
                  <p className="text-brand-blue-500 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
                    Optimización y soporte logístico a gran escala para marcas consolidadas. Ofrecemos facturación mensual unificada, ruteos especiales para grandes volúmenes y entregas express coordinadas en Mar del Plata.
                  </p>
                </div>
                
                <div className="md:col-span-5 space-y-6 md:border-l md:border-brand-blue-100 md:pl-8">
                  <ul className="space-y-3">
                    {['Cuenta Corriente comercial con facturación mensual', 'Planilla integrada y despachos masivos en un clic', 'Gestión inversa optimizada para cambios y devoluciones'].map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-blue-600 font-sans transition-colors">
                        <ShieldCheck className="h-4.5 w-4.5 text-brand-blue shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <Link
                      href="/servicios/plan-emprendedores"
                      className="cta-nested-pill bg-brand-yellow text-brand-blue px-6 py-2.5 text-xs shadow-sm hover:shadow-md"
                    >
                      <span>Abrir Cuenta Corriente</span>
                      <span className="cta-nested-icon bg-brand-blue/10">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
