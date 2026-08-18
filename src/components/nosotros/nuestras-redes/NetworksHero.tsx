'use client';

import React, { useState, useEffect } from 'react';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import { motion } from 'motion/react';
import { Share2, Users, ArrowRight, Sparkles, MessageCircle, Instagram, Video, ExternalLink } from 'lucide-react';

const SOCIAL_CHANNELS = [
  {
    id: 'instagram',
    name: 'Instagram Oficial',
    handle: '@enviosdosruedas',
    desc: 'Rutas en vivo, fotos de la flota en MDQ y novedades de horarios.',
    icon: Instagram,
    badge: 'Último post: hace 18 min',
    link: 'https://instagram.com/enviosdosruedas',
    ctaText: 'Ver historias',
  },
  {
    id: 'tiktok',
    name: 'TikTok Comunidad',
    handle: '@enviosdosruedasmdq',
    desc: 'El día a día de nuestros cadetes recorriendo calles y barrios de Mar del Plata.',
    icon: Video,
    badge: 'Video nuevo hoy',
    link: 'https://tiktok.com/@enviosdosruedasmdq',
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
  const [followers, setFollowers] = useState(12000);

  useEffect(() => {
    const target = 12450;
    const step = 15;
    const interval = setInterval(() => {
      setFollowers((prev) => {
        if (prev + step >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + step;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="networks-hero" 
      className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-brand-blue-700 via-brand-blue-600 to-brand-blue-700 text-brand-white-50 border-b border-brand-blue-500/20"
    >
      {/* Pure Vector & Dynamic Procedural Background (0 KB static images) */}
      <HeroProceduralBackground variant="community" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline & Channel Cards (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Badge in Bebas Neue */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-yellow-500/40 bg-brand-blue-900/80 text-brand-yellow-500 text-xs sm:text-sm font-subheading uppercase tracking-widest shadow-md backdrop-blur-md">
              <Share2 className="h-4 w-4 text-brand-yellow-500 animate-pulse shrink-0" />
              <span>COMUNIDAD EN MOVIMIENTO · </span>
              <span>SOCIAL MEDIA</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-display uppercase tracking-tight leading-[0.92] text-brand-white-50">
              <span className="block">COMUNIDAD EN</span>
              <span className="block text-brand-yellow-500 italic drop-shadow-[0_2px_16px_rgba(255,236,1,0.35)]">
                LÍNEA
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl font-sans text-brand-blue-50 max-w-2xl mx-auto lg:mx-0 leading-relaxed pl-4 border-l-2 border-brand-yellow-500">
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
                    className="group block double-bezel-outer bg-brand-blue-50/90 border border-brand-blue-100/70 p-1.5 rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:border-brand-yellow-500 hover:shadow-xl cursor-pointer"
                  >
                    <div className="double-bezel-inner bg-white rounded-xl p-4 sm:p-4.5 border border-brand-blue-50/50 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                        <div className="w-11 h-11 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center shrink-0 text-brand-blue-700 group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-900 group-hover:border-brand-yellow-500 transition-colors">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="text-left min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-display text-base sm:text-lg uppercase tracking-wide text-brand-blue-700 leading-none">
                              {ch.name}
                            </span>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-yellow-50 text-[10px] font-subheading font-bold uppercase text-brand-blue-900 border border-brand-yellow-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow-500 animate-pulse" />
                              {ch.badge}
                            </span>
                          </div>
                          <p className="font-sans text-xs text-brand-ink/75 truncate mt-0.5">
                            {ch.desc}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-1 text-xs font-subheading uppercase font-bold text-brand-blue-700 group-hover:text-brand-blue-900 group-hover:translate-x-0.5 transition-all">
                        <span className="hidden sm:inline">{ch.ctaText}</span>
                        <ArrowRight className="w-4 h-4 text-brand-yellow-500" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Floating Social Proof & Live Follower Widget (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="double-bezel-outer bg-brand-blue-50/95 border border-brand-blue-100 p-2 rounded-3xl shadow-2xl">
              <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-2xl border border-brand-blue-50/50 shadow-sm text-brand-blue-700 space-y-6 relative overflow-hidden">
                {/* Visual Accent Top Bar */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-blue-700 via-brand-blue-500 to-brand-yellow-500" />

                {/* Follower Counter Block */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center text-brand-blue-700">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-brand-blue-700 leading-none tabular-nums">
                        +{followers.toLocaleString('es-AR')}
                      </div>
                      <p className="text-xs text-brand-blue-400 font-subheading uppercase tracking-wider font-bold mt-0.5">
                        SEGUIDORES EN MAR DEL PLATA
                      </p>
                    </div>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-brand-yellow-500 animate-pulse shadow-[0_0_8px_#FFEC01]" />
                </div>

                {/* Content description */}
                <p className="text-sm text-brand-ink leading-relaxed font-sans">
                  Sumate a la red más activa de la ciudad. Compartimos historias del asfalto marplatense, consejos de embalaje para e-commerce y promociones sorpresa todos los meses.
                </p>

                {/* Dynamic Status Badges Grid (0 KB images) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex flex-col justify-between h-24 text-left group hover:border-brand-yellow-500 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-subheading uppercase font-bold text-brand-blue-700 tracking-wider">
                        RUTAS EN VIVO
                      </span>
                      <span className="w-2 h-2 rounded-full bg-brand-yellow-500 animate-pulse" />
                    </div>
                    <div>
                      <span className="block font-display text-lg text-brand-blue-700 leading-none">
                        #RutasMDQ
                      </span>
                      <span className="text-[10px] text-brand-blue-400 font-sans">Cadetes en calle</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex flex-col justify-between h-24 text-left group hover:border-brand-yellow-500 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-subheading uppercase font-bold text-brand-blue-700 tracking-wider">
                        SAME-DAY SLA
                      </span>
                      <span className="w-2 h-2 rounded-full bg-brand-yellow-500 animate-pulse" />
                    </div>
                    <div>
                      <span className="block font-display text-lg text-brand-blue-700 leading-none">
                        #SameDayMDQ
                      </span>
                      <span className="text-[10px] text-brand-blue-400 font-sans">100% efectividad</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://instagram.com/enviosdosruedas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full cta-nested-pill bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 border-none shadow-accent font-subheading tracking-wider uppercase text-base py-3 justify-center transition-all duration-300 active:scale-[0.99] cursor-pointer flex"
                >
                  <span>Seguinos en Instagram</span>
                  <span className="cta-nested-icon bg-brand-blue-900/10 text-brand-blue-900 shrink-0">
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </a>

                {/* Trust Footer */}
                <div className="pt-3 border-t border-brand-blue-50 flex items-center justify-between text-xs text-brand-blue-400 font-sans">
                  <span>Oficina: Friuli 1972</span>
                  <span className="font-mono font-bold text-brand-blue-700">MDQ 2026</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
