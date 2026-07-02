'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { MessageSquare, FileText } from 'lucide-react';

export default function CtaSection() {
  return (
    <section 
      id="cta-section" 
      className="py-24 bg-white text-slate-900 relative z-10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] overflow-hidden"
    >
      {/* Background Graphic Accents with smooth animated glowing lights */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,236,1,0.12),transparent_50%)]"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,54,165,0.05),transparent_40%)]"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
      />
      
      <motion.div 
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 45 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      >
        
        {/* Animated Badge */}
        <div className="inline-flex">
          <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-blue text-white shadow-md animate-pulse">
            SOLUCIONES ESCALABLES 2026
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-none max-w-3xl mx-auto">
          ¿Listo para escalar la logística de tu E-Commerce?
        </h2>

        {/* Body */}
        <p className="text-slate-650 text-lg max-w-2xl mx-auto font-sans leading-relaxed">
          Olvidate de la gestión de paquetes y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
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
            animate={{ 
              boxShadow: [
                "0 4px 6px -1px rgba(6, 54, 165, 0.1), 0 2px 4px -1px rgba(6, 54, 165, 0.06)",
                "0 10px 25px -5px rgba(6, 54, 165, 0.25), 0 8px 10px -6px rgba(6, 54, 165, 0.2)",
                "0 4px 6px -1px rgba(6, 54, 165, 0.1), 0 2px 4px -1px rgba(6, 54, 165, 0.06)"
              ]
            }}
            transition={{
              boxShadow: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
            }}
            className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/95 text-white font-subheading tracking-wider text-lg uppercase px-8 py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2.5 font-medium cursor-pointer"
          >
            <MessageSquare className="h-5 w-5 fill-current animate-bounce shrink-0" />
            Contactanos por WhatsApp
          </motion.a>

          <Link
            href="/cotizar/lowcost"
            id="cta-rates-link"
            className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 hover:-translate-y-0.5 text-slate-700 font-subheading tracking-wider text-lg uppercase px-8 py-4 rounded-xl border border-slate-200 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <FileText className="h-5 w-5" />
            Ver Tarifas 2026
          </Link>
        </div>

        {/* Highlight footer stat line */}
        <p className="text-[11px] font-mono tracking-widest text-brand-blue font-bold uppercase pt-4">
          Atención comercial inmediata para PyMEs y Emprendedores en Mar del Plata.
        </p>

      </motion.div>
    </section>
  );
}
