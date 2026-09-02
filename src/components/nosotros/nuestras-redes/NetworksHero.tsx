'use client';

import React, { useState, useEffect } from 'react';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import { motion } from 'motion/react';
import { Share2, Users, ArrowRight, Sparkles, MessageCircle, Instagram, Facebook, ExternalLink } from 'lucide-react';

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
    id: 'facebook',
    name: 'Facebook Comunidad',
    handle: '@enviosdosruedas',
    desc: 'El día a día de nuestros cadetes recorriendo calles y barrios de Mar del Plata.',
    icon: Facebook,
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-yellow-500/40 bg-[#052C87]/90 text-brand-yellow-500 text-xs sm:text-sm font-subheading uppercase tracking-widest shadow-md backdrop-blur-md transform -rotate-1">
              <Share2 className="h-4 w-4 text-brand-yellow-500 animate-pulse shrink-0" />
              <span>COMUNIDAD EN MOVIMIENTO · SOCIAL MEDIA 2026</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-display uppercase tracking-tight leading-[0.98] text-white">
              <span className="block">COMUNIDAD EN</span>
              <span className="inline-block bg-brand-yellow-500 text-[#052C87] px-3 py-1 rounded-md transform -rotate-1 mt-1 font-display tracking-tight shadow-glow-yellow">
                LÍNEA
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl font-sans text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed pl-4 border-l-4 border-brand-yellow-500">
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

          {/* Right Column: Floating Social Proof & Live Follower Widget (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2 shadow-2xl">
              <div className="rounded-[20px] bg-[#052C87] p-6 sm:p-8 border border-white/10 shadow-sm text-white space-y-6 relative overflow-hidden">
                {/* Visual Accent Top Bar */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-yellow-500 via-white to-brand-yellow-400" />

                {/* Follower Counter Block */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-brand-yellow-500">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-mono text-3xl sm:text-4xl font-bold uppercase tracking-tight text-brand-yellow-500 leading-none tabular-nums">
                        +{followers.toLocaleString('es-AR')}
                      </div>
                      <p className="text-xs text-white/80 font-subheading uppercase tracking-wider font-bold mt-0.5">
                        MÁS DE 5.000 SEGUIDORES EN REDES
                      </p>
                    </div>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-brand-yellow-500 animate-pulse shadow-glow-yellow" />
                </div>

                {/* Content description */}
                <p className="text-sm text-white/90 leading-relaxed font-sans">
                  Sumate a la red más activa de la ciudad. Compartimos historias del asfalto marplatense, consejos de embalaje para e-commerce y promociones sorpresa todos los meses.
                </p>

                {/* Dynamic Status Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between h-24 text-left group hover:border-brand-yellow-500 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-subheading uppercase font-bold text-brand-yellow-500 tracking-wider">
                        RUTAS EN VIVO
                      </span>
                      <span className="w-2 h-2 rounded-full bg-brand-yellow-500 animate-pulse" />
                    </div>
                    <div>
                      <span className="block font-display text-lg text-white leading-none">
                        #RutasMDQ
                      </span>
                      <span className="text-[10px] text-white/70 font-sans">Cadetes en calle</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between h-24 text-left group hover:border-brand-yellow-500 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-subheading uppercase font-bold text-brand-yellow-500 tracking-wider">
                        SAME-DAY SLA
                      </span>
                      <span className="w-2 h-2 rounded-full bg-brand-yellow-500 animate-pulse" />
                    </div>
                    <div>
                      <span className="block font-display text-lg text-white leading-none">
                        #SameDayMDQ
                      </span>
                      <span className="text-[10px] text-white/70 font-sans">100% efectividad</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://instagram.com/enviosdosruedas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group min-h-[52px] w-full px-8 py-3.5 bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 shadow-glow-yellow font-subheading text-base uppercase tracking-wider font-bold rounded-full flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow-500/50"
                >
                  <span>Seguinos en Instagram</span>
                  <span className="w-8 h-8 rounded-full bg-[#052C87]/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                    <ExternalLink className="h-4 w-4 text-[#052C87]" />
                  </span>
                </a>

                {/* Trust Footer */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/70 font-sans">
                  <span>Oficina: Friuli 1972</span>
                  <span className="font-mono font-bold text-brand-yellow-500">MDQ 2026</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
