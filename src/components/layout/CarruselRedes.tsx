'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function CarruselRedes() {
  const networks = [
    {
      name: 'Instagram',
      handle: '@enviosdosruedas',
      desc: 'Novedades diarias',
      url: '/nosotros/nuestras-redes',
      icon: FaInstagram,
      color: 'bg-white text-brand-ink hover:border-[#E1306C]/50 border-slate-100 shadow-sm',
      iconColor: 'text-[#E1306C]',
      iconBg: 'bg-[#E1306C]/10',
    },
    {
      name: 'Facebook',
      handle: 'Envíos DosRuedas',
      desc: 'Comunidad activa',
      url: '/nosotros/nuestras-redes',
      icon: FaFacebook,
      color: 'bg-white text-brand-ink hover:border-[#1877F2]/50 border-slate-100 shadow-sm',
      iconColor: 'text-[#1877F2]',
      iconBg: 'bg-[#1877F2]/10',
    },
    {
      name: 'WhatsApp',
      handle: '+54 223 660-2699',
      desc: 'Atención inmediata',
      url: 'https://wa.me/542236602699',
      icon: FaWhatsapp,
      color: 'bg-white text-brand-ink hover:border-[#25D366]/50 border-slate-100 shadow-sm',
      iconColor: 'text-[#25D366]',
      iconBg: 'bg-[#25D366]/10',
    },
  ];

  return (
    <section 
      id="carrusel-redes" 
      className="py-24 bg-brand-blue border-y border-blue-200/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(255,204,0,0.03),transparent_35%)]" />

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
        
        {/* Header Segment */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-yellow text-brand-blue border-2 border-brand-blue rounded-full text-xs font-subheading tracking-widest inline-block shadow-[2px_2px_0px_#003399]">
            Nuestra Comunidad
          </span>
          <h2 className="text-white text-display uppercase text-center">
            SIGUE NUESTRO MOVIMIENTO
          </h2>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-sans">
            Únete a nuestra comunidad digital y mantente al día con las últimas noticias de logística en Mar del Plata.
          </p>
          <div className="h-1.5 w-12 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Networks Grid/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {networks.map((net, index) => {
            const Icon = net.icon;
            const isExternal = net.url.startsWith('http');
            return (
              <motion.a
                key={net.name}
                href={net.url}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.12, ease: "easeOut" }}
                className="p-8 rounded-xl border-2 border-brand-blue flex flex-col justify-between hover:shadow-[6px_6px_0px_#FFEC01] hover:bg-slate-50 transition-all duration-300 group bg-white text-brand-ink active:scale-[0.98] active:translate-y-[1px]"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="p-4 rounded-xl bg-brand-blue/5 text-brand-blue border border-brand-blue/10">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-subheading tracking-widest text-slate-400 group-hover:text-brand-blue transition-colors">
                      {net.desc}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-display uppercase tracking-tight text-brand-ink group-hover:text-brand-blue transition-colors">
                      {net.name}
                    </h3>
                    <p className="text-slate-500 font-mono text-xs mt-1">
                      {net.handle}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-brand-ink">
                  <span className="text-xs font-sans font-semibold group-hover:text-brand-blue transition-colors">
                    {isExternal ? 'Contactar ahora' : 'Ver perfil'}
                  </span>
                  <div className="h-9 w-9 rounded-xl bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center transition-all active:scale-[0.98] active:translate-y-[1px]">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
