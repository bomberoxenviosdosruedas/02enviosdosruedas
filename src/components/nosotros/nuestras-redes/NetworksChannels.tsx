'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function NetworksChannels() {
  return (
    <section 
      id="networks-channels" 
      className="py-24 bg-white relative z-10 border-t-4 border-brand-blue"
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
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-yellow shadow-[2px_2px_0px_rgba(0,51,153,0.2)]">
            CONEXIÓN SOCIAL
          </span>
          <h2 className="text-brand-ink text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
            CANALES OFICIALES
          </h2>
          <p className="text-slate-650 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Hacé clic para conectarte al instante con nuestras plataformas oficiales y formar parte de la mayor comunidad logística de Mar del Plata.
          </p>
          <div className="h-2 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Asymmetric Bento Grid (Replaces banned 3 equal card layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* WhatsApp: Full width 12 columns (Main Call Channel) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-12 bg-brand-blue text-white p-8 rounded-3xl border-2 border-brand-yellow shadow-[8px_8px_0px_var(--color-brand-yellow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_var(--color-brand-yellow)] transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group/card cursor-pointer"
          >
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-brand-yellow text-brand-blue border-2 border-brand-blue rounded-2xl relative w-12 h-12 flex items-center justify-center shrink-0">
                  <Image
                    src="/iconos/whatapps.svg"
                    alt="WhatsApp"
                    width={26}
                    height={26}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-display uppercase tracking-wide text-brand-yellow font-bold leading-none">
                    WHATSAPP DIRECTO
                  </h3>
                  <span className="text-xs text-blue-200 font-mono mt-1 block">
                    +54 223 660-2699 | ATENCIÓN INMEDIATA
                  </span>
                </div>
              </div>
              <p className="text-sm text-blue-50 font-sans leading-relaxed">
                Atención personalizada y sin demoras por WhatsApp. El canal más ágil para coordinar cotizaciones, retiros inmediatos, envíos FLEX y resolver dudas sobre nuestra operativa diaria.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <a
                href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-8 py-4 bg-brand-yellow text-brand-blue font-subheading tracking-wider text-base uppercase rounded-2xl border-2 border-brand-blue shadow-[4px_4px_0px_var(--color-brand-blue)] hover:bg-white hover:text-brand-blue flex items-center justify-center gap-2 transition-all duration-300"
              >
                <span>CHATEÁ AHORA</span>
                <ArrowRight className="h-5 w-5 shrink-0" />
              </a>
            </div>
          </motion.div>

          {/* Instagram: 6 columns */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 bg-white p-8 rounded-3xl border-2 border-brand-blue shadow-[6px_6px_0px_var(--color-brand-yellow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_var(--color-brand-yellow)] transition-all duration-300 flex flex-col justify-between group/card cursor-pointer"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-brand-blue-50 text-brand-blue-600 border-2 border-brand-blue rounded-2xl relative w-12 h-12 flex items-center justify-center">
                  <Image
                    src="/iconos/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="px-3 py-1 bg-brand-blue-100 text-brand-blue-600 rounded-full text-xs font-subheading font-bold uppercase tracking-wider">
                  3.2K+ SEGUIDORES
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-display uppercase tracking-wide text-brand-ink font-bold leading-none">
                  INSTAGRAM
                </h3>
                <span className="text-xs text-slate-400 font-mono mt-1 block">
                  @enviosdosruedas
                </span>
              </div>
              <p className="text-sm text-slate-600 font-sans leading-relaxed min-h-[60px]">
                Mirá nuestro día a día, fotos reales de las entregas diarias de la flota y promociones especiales diseñadas para tu e-commerce.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href="https://instagram.com/enviosdosruedas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-brand-blue hover:bg-brand-blue/95 text-white rounded-2xl text-xs font-subheading text-sm tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-[4px_4px_0px_var(--color-brand-yellow)] group-hover/card:bg-brand-yellow group-hover/card:text-brand-blue cursor-pointer duration-300"
              >
                <span>SEGUINOS EN INSTAGRAM</span>
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover/card:translate-x-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Facebook: 6 columns */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 bg-slate-50 p-8 rounded-3xl border-2 border-brand-blue shadow-[6px_6px_0px_var(--color-brand-blue)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_var(--color-brand-blue)] transition-all duration-300 flex flex-col justify-between group/card cursor-pointer"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-blue-50 text-blue-600 border-2 border-brand-blue rounded-2xl relative w-12 h-12 flex items-center justify-center">
                  <Image
                    src="/iconos/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-subheading font-bold uppercase tracking-wider">
                  2.5K+ SEGUIDORES
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-display uppercase tracking-wide text-brand-ink font-bold leading-none">
                  FACEBOOK
                </h3>
                <span className="text-xs text-slate-400 font-mono mt-1 block">
                  @enviosdosruedas
                </span>
              </div>
              <p className="text-sm text-slate-600 font-sans leading-relaxed min-h-[60px]">
                Seguinos para enterarte de ofertas exclusivas y novedades logísticas sobre el tránsito y cadetería comercial local.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-150">
              <a
                href="https://facebook.com/enviosdosruedas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-brand-blue hover:bg-brand-blue/95 text-white rounded-2xl text-xs font-subheading text-sm tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-[4px_4px_0px_var(--color-brand-blue)] group-hover/card:bg-brand-yellow group-hover/card:text-brand-blue cursor-pointer duration-300"
              >
                <span>SEGUINOS EN FACEBOOK</span>
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover/card:translate-x-0.5" />
              </a>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
