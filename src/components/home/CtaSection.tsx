'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { MessageSquare, FileText } from 'lucide-react';

export default function CtaSection() {
  return (
    <section 
      id="cta-section" 
      className="py-24 bg-white relative z-10 overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative background grid subtle overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,54,165,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,54,165,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <motion.div 
        className="max-w-5xl mx-auto px-8 py-16 card-minimal rounded-3xl text-brand-ink flex flex-col justify-between relative overflow-hidden text-center space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 45 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      >
        {/* Animated Badge */}
        <div className="inline-flex justify-center">
          <span className="px-4 py-2 rounded-full text-xs font-subheading tracking-widest bg-brand-yellow/20 text-brand-blue border border-brand-yellow uppercase font-bold shadow-md">
            SOLUCIONES ESCALABLES 2026
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-brand-blue text-display uppercase max-w-3xl mx-auto leading-tight">
          ¿Listo para escalar la logística de tu e-commerce?
        </h2>

        {/* Body */}
        <p className="text-slate-650 text-lg max-w-2xl mx-auto font-sans leading-relaxed font-medium">
          Olvidate de la gestión de paquetes en Mar del Plata y enfocaté en vender más. Dejá la distribución urbana en manos de expertos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <motion.a
            href="https://wa.me/542236602699"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp-link"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellow text-brand-blue font-subheading tracking-wider text-xl uppercase cta-nested-pill border border-brand-yellow shadow-[3px_3px_0px_var(--color-brand-blue)] flex items-center justify-between cursor-pointer font-bold active:scale-[0.98] active:translate-y-[1px] transition-all"
          >
            <span>Contactanos por WhatsApp</span>
            <span className="cta-nested-icon bg-brand-blue/15 text-brand-blue">
              <MessageSquare className="h-5 w-5 fill-current animate-pulse shrink-0" />
            </span>
          </motion.a>

          <Link
            href="/cotizar/lowcost"
            id="cta-rates-link"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-brand-blue/20 text-brand-blue font-subheading tracking-wider text-xl uppercase cta-nested-pill shadow-[3px_3px_0px_rgba(0,39,124,0.1)] flex items-center justify-between cursor-pointer font-bold active:scale-[0.98] active:translate-y-[1px] transition-all"
          >
            <span>Ver tarifas 2026</span>
            <span className="cta-nested-icon bg-brand-blue/10 text-brand-blue">
              <FileText className="h-5 w-5 shrink-0" />
            </span>
          </Link>
        </div>

        {/* Highlight footer stat line */}
        <p className="text-xs font-mono tracking-widest text-slate-500 font-bold uppercase pt-4 leading-none">
          Atención comercial inmediata para PyMEs y Emprendedores. Operación centralizada en Friuli 1972.
        </p>

      </motion.div>
    </section>
  );
}
