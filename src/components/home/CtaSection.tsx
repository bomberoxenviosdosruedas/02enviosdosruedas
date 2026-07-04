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
          <span className="px-4 py-2 rounded-full text-xs font-subheading tracking-widest bg-brand-yellow text-brand-blue border-2 border-brand-blue shadow-[2px_2px_0px_#0636A5] uppercase">
            SOLUCIONES ESCALABLES 2026
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-slate-900 text-display uppercase max-w-3xl mx-auto">
          ¿Listo para escalar la logística de tu E-Commerce?
        </h2>

        {/* Body */}
        <p className="text-slate-600 text-lg max-w-2xl mx-auto font-sans leading-relaxed">
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
            className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/95 text-white font-subheading tracking-wider text-xl uppercase px-8 py-4 rounded-xl border-2 border-brand-blue shadow-[4px_4px_0px_#FFEC01] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <MessageSquare className="h-5 w-5 fill-current animate-bounce shrink-0" />
            Contactanos por WhatsApp
          </motion.a>

          <Link
            href="/cotizar/lowcost"
            id="cta-rates-link"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-brand-blue font-subheading tracking-wider text-xl uppercase px-8 py-4 rounded-xl border-2 border-brand-blue shadow-[4px_4px_0px_#0636A5] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <FileText className="h-5 w-5" />
            Ver Tarifas 2026
          </Link>
        </div>

        {/* Highlight footer stat line */}
        <p className="text-xs font-mono tracking-widest text-brand-blue font-bold uppercase pt-4">
          Atención comercial inmediata para PyMEs y Emprendedores en Mar del Plata.
        </p>

      </motion.div>
    </section>
  );
}
