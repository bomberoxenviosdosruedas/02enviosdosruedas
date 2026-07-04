'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { MessageSquare, FileText } from 'lucide-react';

export default function CtaSection() {
  return (
    <section 
      id="cta-section" 
      className="py-24 bg-slate-50 relative z-10 overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative background grid subtle overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,54,165,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,54,165,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <motion.div 
        className="max-w-5xl mx-auto px-8 py-16 bg-gradient-to-br from-brand-yellow to-amber-400 border-4 border-brand-blue rounded-3xl text-brand-blue flex flex-col justify-between relative overflow-hidden shadow-[8px_8px_0px_#0636A5] text-center space-y-8"
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
          <span className="px-4 py-2 rounded-full text-xs font-subheading tracking-widest bg-brand-blue text-white border-2 border-brand-blue shadow-[2px_2px_0px_#FFEC01] uppercase font-bold">
            SOLUCIONES ESCALABLES 2026
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-brand-blue text-display uppercase max-w-3xl mx-auto leading-tight">
          ¿Listo para escalar la logística de tu E-Commerce?
        </h2>

        {/* Body */}
        <p className="text-brand-blue/90 text-lg max-w-2xl mx-auto font-sans leading-relaxed font-medium">
          Olvidate de la gestión de paquetes en Mar del Plata y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <motion.a
            href="https://wa.me/542236602699"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp-link"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/95 text-white font-subheading tracking-wider text-xl uppercase px-8 py-4 rounded-xl border-2 border-brand-blue shadow-[4px_4px_0px_#FFFFFF] transition-all flex items-center justify-center gap-2.5 cursor-pointer font-bold"
          >
            <MessageSquare className="h-5 w-5 fill-current animate-bounce shrink-0 text-brand-yellow" />
            Contactanos por WhatsApp
          </motion.a>

          <Link
            href="/cotizar/lowcost"
            id="cta-rates-link"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-brand-blue font-subheading tracking-wider text-xl uppercase px-8 py-4 rounded-xl border-2 border-brand-blue shadow-[4px_4px_0px_#0636A5] transition-all flex items-center justify-center gap-2 cursor-pointer font-bold active:scale-[0.98]"
          >
            <FileText className="h-5 w-5 shrink-0" />
            Ver Tarifas 2026
          </Link>
        </div>

        {/* Highlight footer stat line */}
        <p className="text-xs font-mono tracking-widest text-brand-blue font-bold uppercase pt-4 leading-none">
          Atención comercial inmediata para PyMEs y Emprendedores. Operación centralizada en Friuli 1972.
        </p>

      </motion.div>
    </section>
  );
}
