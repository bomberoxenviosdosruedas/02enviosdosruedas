'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Facebook,
  Instagram,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  Phone,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export default function ContactInfo() {
  const socialCards = [
    {
      id: 'facebook',
      tag: 'FACEBOOK OFICIAL',
      subtag: 'FACEBOOK',
      title: 'Envíos DosRuedas',
      description: 'Seguí nuestro día a día, novedades operativas y la comunidad comercial en Mar del Plata.',
      buttonText: 'SEGUIR COMUNIDAD',
      href: 'https://facebook.com/enviosdosruedas',
      icon: Facebook,
    },
    {
      id: 'instagram',
      tag: 'INSTAGRAM MDQ',
      subtag: 'INSTAGRAM',
      title: '@enviosdosruedas',
      description: 'Mirá el detrás de escena de nuestros riders y la flota recorriendo las calles de MDQ.',
      buttonText: 'VER CONTENIDO',
      href: 'https://instagram.com/enviosdosruedas',
      icon: Instagram,
    },
    {
      id: 'whatsapp',
      tag: 'WHATSAPP DIRECTO',
      subtag: 'WHATSAPP',
      title: '+54 223 660-2699',
      description: 'Escribinos directamente para consultas, contrataciones o soporte express al toque.',
      buttonText: 'INICIAR CHAT',
      href: 'https://wa.me/542236602699?text=Hola!%20Escribo%20desde%20la%20secci%C3%B3n%20de%20contacto.',
      icon: MessageCircle,
    },
  ];

  return (
    <div className="space-y-10">
      {/* Sección de Redes y Canales Digitales */}
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#FFF12E] text-xs font-subheading uppercase tracking-wider font-bold -rotate-1 shadow-glow-yellow">
            <Sparkles className="w-3.5 h-3.5 text-[#FFF12E]" />
            Nuestra Comunidad Digital
          </span>
          <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-white">
            SEGUÍ NUESTRO MOVIMIENTO
          </h2>
          <p className="text-white/85 font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
            Sumate a nuestros canales digitales y enterate al toque de todas las novedades operativas en Mar del Plata.
          </p>
        </div>

        {/* Bento Grid de Canales Digitales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {socialCards.map((card) => {
            const IconComp = card.icon;
            const isWhatsApp = card.id === 'whatsapp';
            return (
              <motion.div
                key={card.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[28px] bg-white/10 backdrop-blur-md border border-white/20 p-2 shadow-lg flex flex-col justify-between"
              >
                <div className="bg-[#052C87] p-5 rounded-[20px] border border-white/10 shadow-md h-full flex flex-col justify-between text-white relative overflow-hidden">
                  {/* Visual Watermark in card corner */}
                  <IconComp
                    className="absolute -bottom-6 -right-6 w-32 h-32 text-white/[0.04] pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[10px] font-subheading uppercase tracking-wider text-[#FFF12E] font-bold px-2.5 py-0.5 rounded bg-white/10 border border-white/20">
                        {card.tag}
                      </span>
                      <span className="text-[10px] font-mono font-bold uppercase text-white/60 tabular-nums">
                        {card.subtag}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white/10 border border-white/20 text-[#FFF12E]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-lg uppercase tracking-tight text-white truncate">
                        {card.title}
                      </h3>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative z-10 w-full min-h-[44px] h-11 rounded-full font-subheading tracking-wider uppercase text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer border ${
                      isWhatsApp
                        ? 'bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-lg'
                        : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF12E]`}
                  >
                    <span>{card.buttonText}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Base de Operaciones MDQ (Datos de Contacto Central) */}
      <div className="rounded-[28px] sm:rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-xl">
        <div className="bg-[#052C87] p-6 sm:p-8 rounded-[20px] border border-white/10 shadow-lg relative overflow-hidden text-white">
          {/* Watermark icon */}
          <MapPin
            className="absolute -bottom-10 -right-10 w-64 h-64 text-white/[0.04] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/15">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFF12E] animate-pulse shadow-[0_0_8px_#FFF12E]" />
                <span className="text-xs font-subheading uppercase tracking-widest text-[#FFF12E] font-bold">
                  CENTRO DE DISTRIBUCIÓN & BASE CENTRAL
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
                BASE DE OPERACIONES MDQ
              </h3>
            </div>
            <span className="font-mono text-xs text-white/80 font-bold px-3 py-1 rounded-full bg-white/10 border border-white/20 tabular-nums">
              Partido de General Pueyrredón
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Datos directos */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/15">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-[#FFF12E] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-subheading uppercase tracking-wider text-[#FFF12E] font-bold">
                    Centro de Distribución
                  </span>
                  <span className="block font-mono text-sm sm:text-base font-bold text-white mt-0.5 tabular-nums">
                    Friuli 1972, Mar del Plata
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/15">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-[#FFF12E] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-subheading uppercase tracking-wider text-[#FFF12E] font-bold">
                    Línea Directa y WhatsApp
                  </span>
                  <a
                    href="tel:+542236602699"
                    className="block font-mono text-sm sm:text-base font-bold text-white hover:text-[#FFF12E] transition-colors mt-0.5 tabular-nums"
                  >
                    +54 223 660-2699
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/15">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-[#FFF12E] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-subheading uppercase tracking-wider text-[#FFF12E] font-bold">
                    Atención Comercial
                  </span>
                  <a
                    href="mailto:matiascejas@enviosdosruedas.com"
                    className="block font-mono text-sm sm:text-base font-bold text-white hover:text-[#FFF12E] transition-colors mt-0.5 break-all tabular-nums"
                  >
                    matiascejas@enviosdosruedas.com
                  </a>
                </div>
              </div>
            </div>

            {/* Horarios de Despacho (Base Central) */}
            <div className="flex flex-col justify-between p-6 rounded-xl bg-white/5 border border-white/15">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/15">
                  <Clock className="w-5 h-5 text-[#FFF12E]" />
                  <h4 className="font-display text-lg uppercase tracking-tight text-white">
                    Horarios de Despacho (Base Central)
                  </h4>
                </div>

                <div className="space-y-4 font-sans text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-white/90 font-mono tabular-nums">Lunes a Viernes: 09:00 - 18:00 hs</span>
                    <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase font-bold text-[#0950F6] bg-[#FFF12E] rounded-full shadow-xs tabular-nums">
                      Activo
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-white/90 font-mono tabular-nums">Sábados: 10:00 - 15:00 hs</span>
                    <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase font-bold text-[#0950F6] bg-[#FFF12E] rounded-full shadow-xs tabular-nums">
                      Activo
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 text-xs text-white/60 flex items-center justify-between font-mono">
                <span>Atención presencial y retiro de cargas</span>
                <span className="text-[#FFF12E] font-bold tabular-nums">Friuli 1972</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
