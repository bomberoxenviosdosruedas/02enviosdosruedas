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
      color: 'hover:border-[#E1306C]/40 hover:bg-[#E1306C]/5 hover:shadow-[0_20px_40px_-15px_rgba(225,48,108,0.25)]',
      hoverIcon: 'group-hover:bg-[#E1306C]/10 group-hover:text-[#E1306C] group-hover:border-[#E1306C]/20',
      hoverTitle: 'group-hover:text-[#E1306C]',
      hoverArrow: 'group-hover:bg-[#E1306C] group-hover:text-white group-hover:border-[#E1306C]',
    },
    {
      name: 'Facebook',
      handle: 'Envíos DosRuedas',
      desc: 'Comunidad activa',
      url: '/nosotros/nuestras-redes',
      icon: FaFacebook,
      color: 'hover:border-[#1877F2]/40 hover:bg-[#1877F2]/5 hover:shadow-[0_20px_40px_-15px_rgba(24,119,242,0.25)]',
      hoverIcon: 'group-hover:bg-[#1877F2]/10 group-hover:text-[#1877F2] group-hover:border-[#1877F2]/20',
      hoverTitle: 'group-hover:text-[#1877F2]',
      hoverArrow: 'group-hover:bg-[#1877F2] group-hover:text-white group-hover:border-[#1877F2]',
    },
    {
      name: 'WhatsApp',
      handle: '2236602699',
      desc: 'Atención inmediata',
      url: 'https://wa.me/542236602699',
      icon: FaWhatsapp,
      color: 'hover:border-[#25D366]/40 hover:bg-[#25D366]/5 hover:shadow-[0_20px_40px_-15px_rgba(37,211,102,0.25)]',
      hoverIcon: 'group-hover:bg-[#25D366]/10 group-hover:text-[#25D366] group-hover:border-[#25D366]/20',
      hoverTitle: 'group-hover:text-[#25D366]',
      hoverArrow: 'group-hover:bg-[#25D366] group-hover:text-white group-hover:border-[#25D366]',
    },
  ];

  return (
    <section 
      id="carrusel-redes" 
      className="py-24 bg-brand-blue border-y border-brand-blue-100/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,var(--color-brand-yellow-500),transparent_35%)]" />

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
          <span className="px-4 py-1.5 bg-brand-yellow text-brand-blue border-2 border-brand-blue rounded-full text-xs font-subheading tracking-widest inline-block shadow-[2px_2px_0px_var(--color-brand-blue)]">
            Nuestra Comunidad
          </span>
          <h2 className="text-white text-display uppercase text-center">
            SIGUE NUESTRO MOVIMIENTO
          </h2>
          <p className="text-brand-blue-50 text-sm sm:text-base leading-relaxed font-sans">
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
                className={`double-bezel-outer p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/50 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group ${net.color}`}
              >
                <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full text-brand-ink">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className={`p-3 rounded-xl bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-100/50 transition-all duration-300 ${net.hoverIcon}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-subheading tracking-widest text-brand-blue-300 group-hover:text-brand-blue transition-colors font-bold uppercase">
                        {net.desc}
                      </span>
                    </div>
                    
                    <div className="text-left">
                      <h3 className={`text-2xl font-display uppercase tracking-tight text-brand-ink transition-colors duration-300 ${net.hoverTitle}`}>
                        {net.name}
                      </h3>
                      <p className="text-brand-blue-400 font-mono text-xs mt-1">
                        {net.handle}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-brand-blue-50 flex items-center justify-between text-brand-ink">
                    <span className="text-xs font-sans font-bold group-hover:text-brand-blue-600 transition-colors">
                      {isExternal ? 'Contactar ahora' : 'Ver perfil'}
                    </span>
                    <div className={`h-9 w-9 rounded-xl bg-brand-blue-50 text-brand-blue-600 border border-brand-blue-100 flex items-center justify-center transition-all duration-300 ${net.hoverArrow}`}>
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
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
