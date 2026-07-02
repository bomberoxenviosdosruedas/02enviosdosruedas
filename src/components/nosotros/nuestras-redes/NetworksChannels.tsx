'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function NetworksChannels() {
  const channels = [
    {
      name: 'Facebook',
      handle: '@enviosdosruedas',
      stat: '2.5K+ Seguidores',
      desc: 'Seguinos en Facebook para enterarte de ofertas exclusivas quincenales y actualizaciones diarias de nuestros servicios de mensajería urbana en Mar del Plata.',
      iconPath: '/iconos/facebook.svg',
      btnLabel: 'Seguinos en Facebook',
      url: 'https://facebook.com/enviosdosruedas',
      color: 'hover:border-blue-500/30 text-blue-600',
      badgeBg: 'bg-blue-50 text-blue-600',
    },
    {
      name: 'Instagram',
      handle: '@enviosdosruedas',
      stat: '3.2K+ Seguidores',
      desc: 'Mirá nuestro dinámico día a día en Instagram, fotos reales de las entregas diarias de nuestra flota y promociones relámpago súper especiales diseñadas para vos.',
      iconPath: '/iconos/instagram.svg',
      btnLabel: 'Seguinos en Instagram',
      url: 'https://instagram.com/enviosdosruedas',
      color: 'hover:border-pink-500/30 text-pink-600',
      badgeBg: 'bg-pink-50 text-pink-600',
    },
    {
      name: 'WhatsApp',
      handle: '+54 223 660-2699',
      stat: 'Atención Directa',
      desc: 'Atención de consultas personalizada y sin fricciones por WhatsApp. El canal más ágil y directo para coordinar cotizaciones, retiros y pedidos inmediatos.',
      iconPath: '/iconos/whatapps.svg',
      btnLabel: 'Hablá con nosotros',
      url: 'https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web.',
      color: 'hover:border-emerald-500/30 text-emerald-600',
      badgeBg: 'bg-emerald-50 text-emerald-600',
    },
  ];

  return (
    <section 
      id="networks-channels" 
      className="py-24 bg-white relative z-10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.02)] overflow-hidden"
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
          <span className="px-3 py-1.5 bg-blue-100 text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-blue-200/50">
            Conexión Social
          </span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
            Canales Oficiales
          </h2>
          <p className="text-slate-500 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Hacé clic para conectarte al instante con nuestras plataformas oficiales y formar parte de la mayor comunidad logística de Mar del Plata.
          </p>
          <div className="h-1.5 w-12 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Channels Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {channels.map((channel, idx) => {
            return (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -6, scale: 1.015 }}
                viewport={{ once: true }}
                transition={{ 
                  y: { type: "spring", stiffness: 300, damping: 20 },
                  scale: { type: "spring", stiffness: 300, damping: 20 },
                  opacity: { duration: 0.5, delay: idx * 0.08 }
                }}
                className={`bg-slate-50/60 hover:bg-white p-8 rounded-3xl border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group/card ${channel.color} cursor-pointer`}
              >
                <div className="space-y-6">
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-brand-blue/10 rounded-2xl relative w-12 h-12 flex items-center justify-center group-hover/card:scale-105 transition-transform duration-300">
                      <Image
                        src={channel.iconPath}
                        alt={channel.name}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${channel.badgeBg}`}>
                      {channel.stat}
                    </span>
                  </div>

                  {/* Name and Handle */}
                  <div>
                    <h3 className="text-xl font-display uppercase tracking-wide text-slate-900 font-bold leading-none">
                      {channel.name}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono mt-1 block">
                      {channel.handle}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed min-h-[72px]">
                    {channel.desc}
                  </p>
                </div>

                {/* Follow Button */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-brand-blue hover:bg-brand-blue/95 text-white rounded-xl text-xs font-bold uppercase tracking-wider font-subheading flex items-center justify-center gap-1.5 transition-all shadow-sm group-hover/card:bg-brand-yellow group-hover/card:text-brand-blue cursor-pointer duration-300"
                  >
                    <span>{channel.btnLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover/card:translate-x-1 transition-transform duration-300 shrink-0" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
