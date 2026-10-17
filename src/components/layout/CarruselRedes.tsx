'use client';

import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';

const WHATSAPP_NUMBER = SUPPORT_PHONE.replace(/\D/g, '');

const GRID_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const CARD_VARIANTS: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CarruselRedes() {
  const prefersReducedMotion = useReducedMotion();

  const networks = [
    {
      id: 'facebook',
      name: 'FACEBOOK',
      handle: 'Envíos DosRuedas',
      desc: 'Seguí nuestro día a día, novedades operativas y la comunidad comercial en Mar del Plata.',
      action: 'SEGUIR COMUNIDAD',
      url: 'https://www.facebook.com/share/1RnSzyweir/',
      icon: FaFacebook,
      badgeText: 'FACEBOOK OFICIAL',
      // Identidad oficial Facebook: azul #0866FF / #1877F2, badge e icono en blanco, marca de agua en blanco 10%
      cardBg: 'bg-[#0866FF] hover:bg-[#1877F2]',
      outerBorder: 'border border-[#1877F2]/50 hover:border-[#1877F2] bg-brand-blue/80 backdrop-blur-md shadow-xl',
      innerBorder: 'border-white/15',
      badgeBg: 'bg-white text-[#0866FF] border-white font-bold shadow-xs',
      iconBoxBg: 'bg-white text-[#0866FF] shadow-lg shadow-[#0866FF]/30',
      titleColor: 'text-white',
      handleColor: 'text-white/90',
      descColor: 'text-white/90',
      watermarkColor: 'text-white/10 group-hover:text-white/20',
      btnBg: 'bg-white hover:bg-white/90 text-[#0866FF] font-bold shadow-md shadow-[#0866FF]/20',
      btnIconBg: 'bg-[#0866FF]/15 text-[#0866FF]',
      glow: 'from-[#1877F2]/30 to-transparent',
    },
    {
      id: 'instagram',
      name: 'INSTAGRAM',
      handle: '@enviosdosruedas',
      desc: 'Mirá el detrás de escena de nuestros riders y la flota recorriendo las calles de MDQ.',
      action: 'VER CONTENIDO',
      url: 'https://www.instagram.com/enviosdosruedas/',
      icon: FaInstagram,
      badgeText: 'INSTAGRAM MDQ',
      // Identidad oficial Instagram: fondo y borde con degradado oficial #833AB4 → #E1306C → #FD1D1D → #F77737
      cardBg: 'bg-gradient-to-br from-[#833AB4] via-[#E1306C] via-[#FD1D1D] to-[#F77737]',
      outerBorder: 'p-[2px] bg-gradient-to-br from-[#833AB4] via-[#E1306C] via-[#FD1D1D] to-[#F77737] shadow-xl',
      innerBorder: 'border-white/20',
      badgeBg: 'bg-white text-[#E1306C] border-white font-bold shadow-xs',
      iconBoxBg: 'bg-white text-[#E1306C] shadow-lg shadow-[#FD1D1D]/30',
      titleColor: 'text-white',
      handleColor: 'text-white/90',
      descColor: 'text-white/90',
      watermarkColor: 'text-white/10 group-hover:text-white/20',
      btnBg: 'bg-white hover:bg-white/90 text-[#E1306C] font-bold shadow-md shadow-[#FD1D1D]/30',
      btnIconBg: 'bg-[#E1306C]/15 text-[#E1306C]',
      glow: 'from-[#FD1D1D]/30 to-transparent',
    },
    {
      id: 'whatsapp',
      name: 'WHATSAPP',
      handle: SUPPORT_PHONE,
      desc: 'Escribinos directamente para consultas, contrataciones o soporte express al toque.',
      action: 'INICIAR CHAT',
      url: `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}`,
      icon: FaWhatsapp,
      badgeText: 'WHATSAPP DIRECTO',
      // Identidad oficial WhatsApp: verde corporativo #128C7E / #25D366 con textos en blanco para máxima legibilidad
      cardBg: 'bg-[#128C7E] hover:bg-[#0e7468]',
      outerBorder: 'border border-[#25D366]/50 hover:border-[#25D366] bg-brand-blue/80 backdrop-blur-md shadow-xl',
      innerBorder: 'border-white/15',
      badgeBg: 'bg-white text-[#128C7E] border-white font-bold shadow-xs',
      iconBoxBg: 'bg-white text-[#128C7E] shadow-lg shadow-[#128C7E]/40',
      titleColor: 'text-white',
      handleColor: 'text-white/90',
      descColor: 'text-white/90',
      watermarkColor: 'text-white/10 group-hover:text-white/20',
      btnBg: 'bg-white hover:bg-white/90 text-[#128C7E] font-bold shadow-md shadow-[#128C7E]/30',
      btnIconBg: 'bg-[#128C7E]/15 text-[#128C7E]',
      glow: 'from-[#25D366]/30 to-transparent',
    },
  ];

  return (
    <section
      id="carrusel-redes"
      suppressHydrationWarning
      className="py-20 md:py-32 bg-brand-blue border-y border-white/10 relative overflow-hidden font-sans"
    >
      {/* Background Decorative Mesh & Depth Highlights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,236,1,0.08),transparent_50%)] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 left-1/4 w-100 h-100 bg-brand-blue-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Segment */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-500 rounded-full text-xs font-bold tracking-widest inline-block font-subheading uppercase shadow-accent-sm">
            Nuestra Comunidad Digital
          </span>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.92] tracking-tight uppercase text-white text-center">
            SEGUÍ NUESTRO <span className="text-brand-yellow-500">MOVIMIENTO</span>
          </h2>

          <p className="text-brand-blue-50 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto opacity-90">
            Sumate a nuestros canales digitales y enterate al toque de todas las novedades operativas en Mar del Plata.
          </p>
          <div className="h-0.5 w-20 bg-brand-yellow-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Networks Grid: 3 Unique Branded Cards */}
        <motion.div
          variants={prefersReducedMotion ? undefined : GRID_VARIANTS}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          {networks.map((net) => {
            const Icon = net.icon;

            return (
              <motion.div
                key={net.id}
                variants={prefersReducedMotion ? undefined : CARD_VARIANTS}
                className={`social-block group relative rounded-2xl p-2 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 ${net.outerBorder}`}
              >
                {/* Internal Glow on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-linear-to-b ${net.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} aria-hidden="true" />

                <div className={`relative rounded-xl p-6 sm:p-7 flex flex-col justify-between h-97.5 md:h-107.5 overflow-hidden ${net.cardBg} border ${net.innerBorder} transition-colors`}>
                  
                  {/* Background Watermark Icon that enlarges and tilts on hover */}
                  <div className={`absolute -right-8 -bottom-8 ${net.watermarkColor} transition-transform duration-500 ease-out group-hover:scale-125 group-hover:-rotate-12 pointer-events-none select-none`} aria-hidden="true">
                    <Icon className="w-56 h-56" />
                  </div>

                  {/* Top Area: Badge & Branded Icon Box */}
                  <div className="z-10 text-left space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-2xs font-bold tracking-widest px-3 py-1 rounded-full uppercase font-subheading border ${net.badgeBg}`}>
                        {net.badgeText}
                      </span>

                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${net.iconBoxBg}`} aria-hidden="true">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className={`font-display text-3xl sm:text-4xl uppercase tracking-tight leading-none ${net.titleColor}`}>
                        {net.name}
                      </h3>
                      <p className={`font-mono text-xs font-bold mt-1.5 ${net.handleColor}`}>
                        {net.handle}
                      </p>
                    </div>

                    <p className={`font-sans text-xs sm:text-sm leading-relaxed ${net.descColor}`}>
                      {net.desc}
                    </p>
                  </div>

                  {/* Bottom Action Area: Custom CTA Button per Network */}
                  <div className="z-10 pt-4 border-t border-white/10">
                    <a
                      href={net.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        if (net.id === 'whatsapp') {
                          trackAnalytics.whatsappClick('carrusel_redes_whatsapp', net.action);
                        } else {
                          trackAnalytics.ctaClick(`carrusel_redes_${net.id}`, net.action);
                        }
                      }}
                      className={`w-full min-h-11 inline-flex items-center justify-between font-subheading font-bold uppercase tracking-wider text-xs sm:text-sm px-5 py-3 rounded-full transition-colors duration-200 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500 ${net.btnBg}`}
                    >
                      <span>{net.action}</span>
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1 ${net.btnIconBg}`} aria-hidden="true">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

