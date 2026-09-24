'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Share2, ArrowRight, Sparkles, MessageCircle, ExternalLink } from 'lucide-react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const SOCIAL_CHANNELS = [
  {
    id: 'instagram',
    name: 'Instagram Oficial',
    handle: '@enviosdosruedas',
    desc: 'Rutas en vivo, fotos de la flota en MDQ y novedades de horarios.',
    icon: FaInstagram,
    badge: 'Último post: hace 18 min',
    link: 'https://instagram.com/enviosdosruedas',
    ctaText: 'Ver historias',
  },
  {
    id: 'facebook',
    name: 'Facebook Comunidad',
    handle: '@enviosdosruedas',
    desc: 'El día a día de nuestros cadetes recorriendo calles y barrios de Mar del Plata.',
    icon: FaFacebookF,
    badge: 'Video nuevo hoy',
    link: 'https://facebook.com/enviosdosruedas',
    ctaText: 'Mirar videos',
  },
  {
    id: 'whatsapp',
    name: 'Canal de WhatsApp',
    handle: 'Alertas & Promos MDQ',
    desc: 'Avisos de cortes de tránsito, clima y códigos de descuento relámpago.',
    icon: MessageCircle,
    badge: 'Canal activo 24/7',
    link: 'https://wa.me/542236602699',
    ctaText: 'Unirme al canal',
  },
];

export default function NetworksHero() {
  const [followers, setFollowers] = useState(4850);

  useEffect(() => {
    const target = 5200;
    const step = 10;
    const interval = setInterval(() => {
      setFollowers((prev) => {
        if (prev + step >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + step;
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="networks-hero" 
      className="relative min-h-[90dvh] flex items-center justify-center pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-brand-blue-500 text-white border-b border-white/10"
    >
      {/* Halo glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-yellow-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30vw] h-[30vw] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline & Channel Cards (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Speed Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-yellow-500/40 bg-[#0950F6]/90 text-brand-yellow-500 text-xs sm:text-sm font-subheading uppercase tracking-widest shadow-md backdrop-blur-md transform -rotate-1">
              <Share2 className="h-4 w-4 text-brand-yellow-500 animate-pulse shrink-0" />
              <span>COMUNIDAD EN MOVIMIENTO · SOCIAL MEDIA 2026</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-display uppercase tracking-tight leading-[0.98] text-white">
              <span className="block">COMUNIDAD EN</span>
              <span className="inline-block bg-brand-yellow-500 text-[#0950F6] px-3 py-1 rounded-md transform -rotate-1 mt-1 font-display tracking-tight shadow-glow-yellow">
                LÍNEA
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl font-sans text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              La logística también se vive en redes. Rutas en vivo, promos relámpago y la comunidad de repartidores más grande de Mar del Plata.
            </p>

            {/* 3 Horizontal Channel Cards */}
            <div className="space-y-3.5 pt-2 max-w-xl mx-auto lg:mx-0">
              {SOCIAL_CHANNELS.map((ch) => {
                const IconComp = ch.icon;
                return (
                  <a
                    key={ch.id}
                    href={ch.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-[28px] bg-white/10 backdrop-blur-md border border-white/20 p-1.5 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-brand-yellow-500 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow-500/50"
                  >
                    <div className="rounded-[20px] bg-white p-4 sm:p-4.5 border border-brand-blue-50/50 flex items-center justify-between gap-4 min-h-[44px]">
                      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                        <div className="w-11 h-11 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center shrink-0 text-[#0950F6] group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-900 group-hover:border-brand-yellow-500 transition-colors">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="text-left min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-display text-base sm:text-lg uppercase tracking-wide text-brand-blue-700 leading-none">
                              {ch.name}
                            </span>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-yellow-50 text-[10px] font-subheading font-bold uppercase text-brand-blue-900 border border-brand-yellow-200 transform -rotate-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow-500 animate-pulse" />
                              {ch.badge}
                            </span>
                          </div>
                          <p className="font-sans text-xs text-brand-ink/75 truncate mt-0.5">
                            {ch.desc}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-1 text-xs font-subheading uppercase font-bold text-[#0950F6] group-hover:text-brand-blue-900 group-hover:translate-x-0.5 transition-all">
                        <span className="hidden sm:inline">{ch.ctaText}</span>
                        <ArrowRight className="w-4 h-4 text-brand-yellow-500" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Animated Kinetic Brand HUD & Image (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full flex flex-col items-center justify-center"
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-brand-yellow-500/20 via-brand-blue-500/35 to-brand-yellow-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Top Status Flag: Redes Activas & Seguidores */}
            <div className="flex items-center gap-2 mb-3 z-20">
              <div className="bg-white/10 backdrop-blur-md border border-brand-yellow-500/30 p-2 rounded-full flex items-center gap-2 shadow-sm px-4 py-1.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-yellow-500" />
                </span>
                <span className="font-subheading text-xs tracking-widest text-brand-yellow-400 font-bold uppercase">
                  REDES ACTIVAS · MDQ
                </span>
              </div>
              <span className="font-mono text-[11px] font-bold bg-brand-yellow-500 text-brand-blue-900 px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                +{followers.toLocaleString('es-AR')} SEGUIDORES
              </span>
            </div>

            {/* Central Visual: Imagen Redes con Órbitas Cinemáticas */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center animate-float-slow z-10">
              <div className="absolute inset-0 rounded-full bg-brand-blue-500/20 blur-2xl pointer-events-none" />
              <div className="relative z-10 w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center group">
                <Image
                  src="/elementos/hero_faq.webp"
                  alt="Seguinos en redes - Envíos DosRuedas"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,16,53,0.7)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Orbiting Badges */}
              <div className="absolute -top-3 right-0 bg-white/10 backdrop-blur-md border border-brand-yellow-500/40 p-2 rounded-xl shadow-lg flex items-center gap-1.5 z-20 px-3 py-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-yellow-400" />
                <span className="font-subheading text-xs tracking-wider text-white uppercase font-bold">RUTAS EN VIVO</span>
              </div>
              <div className="absolute -bottom-2 -left-3 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg flex items-center gap-1.5 z-20 px-3 py-1.5">
                <Share2 className="w-3.5 h-3.5 text-brand-yellow-400" />
                <span className="font-subheading text-xs tracking-wider text-blue-100 uppercase font-bold">TODO MAR DEL PLATA</span>
              </div>
            </div>

            {/* Kinetic Typography Banner */}
            <div className="text-center mt-6 z-10 space-y-1">
              <div className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] uppercase tracking-tight text-white leading-none drop-shadow-md">
                COMUNIDAD <span className="text-brand-yellow-500 drop-shadow-[0_0_18px_rgba(255,236,1,0.5)]">DOSRUEDAS</span>
              </div>
              <div className="font-subheading text-base sm:text-lg tracking-widest text-brand-yellow-400 uppercase font-bold flex items-center justify-center gap-2">
                <span>HISTORIAS EN VIVO</span>
                <span className="text-white/40">·</span>
                <span>MAR DEL PLATA 2026</span>
              </div>
            </div>

            {/* Bottom Micro-Card: Base y CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[20px] shadow-float z-10"
            >
              <div className="bg-[#0950F6] text-white p-4 rounded-[16px] border border-white/10 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow-500" />
                    </span>
                    <span className="font-subheading text-xs uppercase tracking-wider font-bold text-brand-yellow-500">
                      MAR DEL PLATA
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-bold text-white/80">
                    BASE: FRIULI 1972
                  </span>
                </div>
                <a
                  href="https://instagram.com/enviosdosruedas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group min-h-[44px] w-full px-6 py-2.5 bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 shadow-glow-yellow font-subheading text-sm uppercase tracking-wider font-bold rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow-500/50"
                >
                  <span>Seguinos en Instagram</span>
                  <ExternalLink className="h-4 w-4 text-brand-blue-900 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
