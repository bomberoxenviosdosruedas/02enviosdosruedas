'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function NetworksChannels() {
  return (
    <section
      id="networks-channels"
      className="py-24 bg-brand-white-50 relative z-10 border-t border-brand-blue-100/30"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

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
          <span className="px-4 py-1 bg-brand-yellow-500 text-brand-blue-700 rounded-full text-base font-subheading uppercase tracking-widest inline-block border border-brand-blue-200/50">
            CONEXIÓN SOCIAL
          </span>
          <h2 className="text-brand-blue-700 text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-[0.02em] leading-[1.1]">
            CANALES OFICIALES
          </h2>
          <p className="text-brand-blue-600/90 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Conectate al instante con nuestras plataformas oficiales y formá parte de la mayor comunidad logística de Mar del Plata.
          </p>
          <div className="h-1 w-16 bg-brand-blue-700 mx-auto rounded-full" />
        </div>

        {/* Asymmetric Bento Grid (Replaces banned 3 equal card layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* WhatsApp: Full width 12 columns (Main Call Channel) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-12 double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl hover-float cursor-default"
          >
            <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-brand-blue">
              <div className="space-y-4 max-w-3xl">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-brand-yellow-50 text-brand-blue-700 border border-brand-yellow-100 rounded-2xl relative w-12 h-12 flex items-center justify-center shrink-0">
                    <Image
                      src="/iconos/whatapps.svg"
                      alt="WhatsApp"
                      width={26}
                      height={26}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-subheading uppercase tracking-wider text-brand-blue-700 font-bold leading-none">
                      WHATSAPP DIRECTO
                    </h3>
                    <span className="text-xs text-brand-blue-400 font-sans font-bold mt-1 block">
                      +54 223 660-2699 | ATENCIÓN INMEDIATA
                    </span>
                  </div>
                </div>
                <p className="text-sm text-brand-blue-600/90 font-sans leading-relaxed">
                  Atención personalizada y sin demoras por WhatsApp. El canal más ágil para coordinar cotizaciones, retiros inmediatos, envíos FLEX y resolver dudas sobre nuestra operativa diaria.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-auto">
                <a
                  href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto cta-nested-pill bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 border border-brand-blue-200 font-subheading tracking-wider text-lg uppercase shadow-sm justify-center"
                >
                  <span>CHATEÁ AHORA</span>
                  <span className="cta-nested-icon bg-brand-blue-100 text-brand-blue-700 shrink-0">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Instagram: 6 columns */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl hover-float cursor-default"
          >
            <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full text-brand-blue min-h-[340px]">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-brand-blue-50 border border-brand-blue-100 rounded-2xl relative w-12 h-12 flex items-center justify-center">
                    <Image
                      src="/iconos/instagram.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="px-3 py-1 bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-700 rounded-full text-xs font-sans font-bold uppercase tracking-wider">
                    +3.000 SEGUIDORES
                  </span>
                </div>
                <div>
                  <h3 className="text-3xl font-subheading uppercase tracking-wider text-brand-blue-700 font-bold leading-none">
                    INSTAGRAM
                  </h3>
                  <span className="text-xs text-brand-blue-400 font-sans font-bold mt-1 block">
                    @enviosdosruedas
                  </span>
                </div>
                <p className="text-sm text-brand-blue-600/90 font-sans leading-relaxed">
                  Mirá nuestro día a día, fotos reales de las entregas diarias de la flota y promociones especiales diseñadas para tu e-commerce.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-blue-100/60 w-full">
                <a
                  href="https://instagram.com/enviosdosruedas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full cta-nested-pill bg-brand-blue-700 hover:bg-brand-blue-600 text-brand-white-50 font-subheading tracking-wider text-base uppercase shadow-sm justify-center"
                >
                  <span>SEGUINOS EN INSTAGRAM</span>
                  <span className="cta-nested-icon bg-brand-blue-50 text-brand-blue-700 shrink-0">
                    <ArrowRight className="h-4.5 w-4.5" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Facebook: 6 columns */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl hover-float cursor-default"
          >
            <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full text-brand-blue min-h-[340px]">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-brand-blue-50 border border-brand-blue-100 rounded-2xl relative w-12 h-12 flex items-center justify-center">
                    <Image
                      src="/iconos/facebook.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="px-3 py-1 bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-700 rounded-full text-xs font-sans font-bold uppercase tracking-wider">
                    +2.000 SEGUIDORES
                  </span>
                </div>
                <div>
                  <h3 className="text-3xl font-subheading uppercase tracking-wider text-brand-blue-700 font-bold leading-none">
                    FACEBOOK
                  </h3>
                  <span className="text-xs text-brand-blue-400 font-sans font-bold mt-1 block">
                    @enviosdosruedas
                  </span>
                </div>
                <p className="text-sm text-brand-blue-600/90 font-sans leading-relaxed">
                  Seguinos para enterarte de ofertas exclusivas y novedades logísticas sobre el tránsito y cadetería comercial local.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-blue-100/60 w-full">
                <a
                  href="https://facebook.com/enviosdosruedas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full cta-nested-pill bg-brand-blue-700 hover:bg-brand-blue-600 text-brand-white-50 font-subheading tracking-wider text-base uppercase shadow-sm justify-center"
                >
                  <span>SEGUINOS EN FACEBOOK</span>
                  <span className="cta-nested-icon bg-brand-blue-50 text-brand-blue-700 shrink-0">
                    <ArrowRight className="h-4.5 w-4.5" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}