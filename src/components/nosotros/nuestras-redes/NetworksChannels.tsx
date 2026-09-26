'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';
import CTANestedPill from '@/src/components/ui/CTANestedPill';

export default function NetworksChannels() {
  return (
    <section
      id="redes-oficiales"
      className="py-24 bg-white relative overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-900 font-bold rounded-full text-xs font-subheading uppercase tracking-widest inline-block shadow-glow-yellow transform -rotate-1">
            COMUNIDAD EN REDES
          </span>
          <h2 className="text-brand-blue-700 text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-[0.02em] leading-[1.1]">
            CANALES OFICIALES
          </h2>
          <p className="text-brand-blue-700/80 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Conectate al instante con nuestras plataformas oficiales y formá parte de la mayor comunidad logística de Mar del Plata.
          </p>
          <div className="h-1 w-16 bg-brand-blue-700 mx-auto rounded-full" />
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* WhatsApp: Full width 12 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-12"
          >
            <DoubleBezelCard>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-4 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-100 rounded-2xl relative w-12 h-12 flex items-center justify-center shrink-0">
                      <Image
                        src="/iconos/whatapps.svg"
                        alt="WhatsApp"
                        width={26}
                        height={26}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-subheading uppercase tracking-wider text-brand-blue-700 leading-none">
                        WHATSAPP DIRECTO
                      </h3>
                      <span className="text-xs text-brand-blue-700/80 font-mono mt-1 block tabular-nums">
                        +54 223 660-2699 | ATENCIÓN INMEDIATA
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-brand-blue-700/80 font-sans leading-relaxed">
                    Atención personalizada y sin demoras por WhatsApp. El canal más ágil para coordinar cotizaciones, retiros inmediatos, envíos FLEX y resolver dudas sobre nuestra operativa diaria.
                  </p>
                </div>
                <div className="shrink-0 w-full md:w-auto">
                  <CTANestedPill
                    href="https://wa.me/542236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web."
                    variant="primary"
                  >
                    CHATEÁ AHORA
                  </CTANestedPill>
                </div>
              </div>
            </DoubleBezelCard>
          </motion.div>

          {/* Instagram: 6 columns */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <DoubleBezelCard>
              <div className="flex flex-col justify-between h-full min-h-85">
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
                    <span className="px-3 py-1 bg-brand-yellow-500/20 text-brand-blue-900 border border-brand-yellow-500/40 rounded-full text-xs font-mono font-bold uppercase tracking-wider transform -rotate-1 shadow-glow-yellow tabular-nums">
                      +3.000 SEGUIDORES
                    </span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-subheading uppercase tracking-wider text-brand-blue-700 leading-none">
                      INSTAGRAM
                    </h3>
                    <span className="text-xs text-brand-blue-700/80 font-sans mt-1 block">
                      @enviosdosruedas
                    </span>
                  </div>
                  <p className="text-sm text-brand-blue-700/80 font-sans leading-relaxed">
                    Mirá nuestro día a día, fotos reales de las entregas diarias de la flota y promociones especiales diseñadas para tu e-commerce.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-brand-blue-100 w-full">
                  <CTANestedPill
                    href="https://instagram.com/enviosdosruedas"
                    variant="outline"
                    className="w-full justify-center"
                  >
                    SEGUINOS EN INSTAGRAM
                  </CTANestedPill>
                </div>
              </div>
            </DoubleBezelCard>
          </motion.div>

          {/* Facebook: 6 columns */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <DoubleBezelCard>
              <div className="flex flex-col justify-between h-full min-h-85">
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
                    <span className="px-3 py-1 bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-100 rounded-full text-xs font-mono font-bold uppercase tracking-wider transform -rotate-1 tabular-nums">
                      +2.000 SEGUIDORES
                    </span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-subheading uppercase tracking-wider text-brand-blue-700 leading-none">
                      FACEBOOK
                    </h3>
                    <span className="text-xs text-brand-blue-700/80 font-sans mt-1 block">
                      @enviosdosruedas
                    </span>
                  </div>
                  <p className="text-sm text-brand-blue-700/80 font-sans leading-relaxed">
                    Seguinos para enterarte de ofertas exclusivas y novedades logísticas sobre el tránsito y cadetería comercial local.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-brand-blue-100 w-full">
                  <CTANestedPill
                    href="https://facebook.com/enviosdosruedas"
                    variant="outline"
                    className="w-full justify-center"
                  >
                    SEGUINOS EN FACEBOOK
                  </CTANestedPill>
                </div>
              </div>
            </DoubleBezelCard>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}