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
      accentColor: '#6366F1',
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
      accentColor: '#6366F1',
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
      accentColor: '#22C55E',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Sección de Redes y Canales Digitales */}
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] text-xs font-subheading uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            Nuestra Comunidad Digital
          </span>
          <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-white">
            SEGUÍ NUESTRO MOVIMIENTO
          </h2>
          <p className="text-[#94A3B8] font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
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
                className="bg-[#111827] border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group"
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: card.accentColor }}
                />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-subheading uppercase tracking-wider text-[#94A3B8] font-bold px-2.5 py-0.5 rounded bg-white/5 border border-white/10">
                      {card.tag}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase text-[#6366F1]">
                      {card.subtag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                        isWhatsApp
                          ? 'bg-[#22C55E]/10 border-[#22C55E]/30 text-[#22C55E]'
                          : 'bg-[#6366F1]/10 border-[#6366F1]/30 text-[#6366F1]'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl uppercase tracking-tight text-white group-hover:text-[#6366F1] transition-colors truncate">
                      {card.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full h-11 rounded-xl font-subheading tracking-wider uppercase text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer border ${
                    isWhatsApp
                      ? 'bg-[#22C55E] hover:bg-[#16a34a] text-white border-transparent shadow-lg'
                      : 'bg-white/5 hover:bg-white/10 text-white border-white/10 group-hover:border-[#6366F1]/50'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]`}
                >
                  <span>{card.buttonText}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Base de Operaciones MDQ (Datos de Contacto Central) */}
      <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-xs font-subheading uppercase tracking-widest text-[#22C55E] font-bold">
                CENTRO DE DISTRIBUCIÓN & BASE CENTRAL
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
              BASE DE OPERACIONES MDQ
            </h3>
          </div>
          <span className="font-mono text-xs text-[#94A3B8] px-3 py-1 rounded-full bg-white/5 border border-white/10">
            Partido de General Pueyrredón
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Datos directos */}
          <div className="space-y-5">
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#6366F1] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-subheading uppercase tracking-wider text-[#94A3B8] font-bold">
                  Centro de Distribución
                </span>
                <span className="block font-sans text-sm sm:text-base font-bold text-white mt-0.5">
                  Friuli 1972, Mar del Plata
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-subheading uppercase tracking-wider text-[#94A3B8] font-bold">
                  Línea Directa y WhatsApp
                </span>
                <a
                  href="tel:+542236602699"
                  className="block font-mono text-sm sm:text-base font-bold text-white hover:text-[#22C55E] transition-colors mt-0.5"
                >
                  +54 223 660-2699
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#6366F1] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-subheading uppercase tracking-wider text-[#94A3B8] font-bold">
                  Atención Comercial
                </span>
                <a
                  href="mailto:matiascejas@enviosdosruedas.com"
                  className="block font-mono text-sm sm:text-base font-bold text-white hover:text-[#6366F1] transition-colors mt-0.5 break-all"
                >
                  matiascejas@enviosdosruedas.com
                </a>
              </div>
            </div>
          </div>

          {/* Horarios de Despacho (Base Central) */}
          <div className="flex flex-col justify-between p-6 rounded-xl bg-white/5 border border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <Clock className="w-5 h-5 text-[#6366F1]" />
                <h4 className="font-display text-lg uppercase tracking-tight text-white">
                  Horarios de Despacho (Base Central)
                </h4>
              </div>

              <div className="space-y-4 font-sans text-sm">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-white font-medium">Lunes a Viernes: 09:00 - 18:00 hs</span>
                  <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase font-bold text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/20 rounded">
                    Activo
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-white font-medium">Sábados: 10:00 - 15:00 hs</span>
                  <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase font-bold text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/20 rounded">
                    Activo
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#94A3B8] flex items-center justify-between font-mono">
              <span>Atención presencial y retiro de cargas</span>
              <span className="text-[#6366F1] font-bold">Friuli 1972</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
