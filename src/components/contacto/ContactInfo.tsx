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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-700 text-xs font-subheading uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow-500" />
            Nuestra Comunidad Digital
          </span>
          <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-brand-blue-700">
            SEGUÍ NUESTRO MOVIMIENTO
          </h2>
          <p className="text-brand-ink/80 font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
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
                className="double-bezel-outer bg-brand-blue-50 border border-brand-blue-100 p-2 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="double-bezel-inner bg-white p-5 rounded-xl border border-brand-blue-50/50 shadow-xs h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[10px] font-subheading uppercase tracking-wider text-brand-blue-700 font-bold px-2.5 py-0.5 rounded bg-brand-blue-50 border border-brand-blue-100">
                        {card.tag}
                      </span>
                      <span className="text-[10px] font-mono font-bold uppercase text-brand-blue-400">
                        {card.subtag}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-700">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-lg uppercase tracking-tight text-brand-blue-700 truncate">
                        {card.title}
                      </h3>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-brand-ink/75 leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full h-11 rounded-xl font-subheading tracking-wider uppercase text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer border ${
                      isWhatsApp
                        ? 'bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 border-none shadow-accent'
                        : 'bg-brand-blue-50 hover:bg-brand-blue-100 text-brand-blue-700 border-brand-blue-100'
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500`}
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
      <div className="double-bezel-outer bg-brand-blue-50 border border-brand-blue-100 p-2 rounded-2xl shadow-md">
        <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-6 border-b border-brand-blue-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow-500 animate-pulse shadow-[0_0_8px_#FFEC01]" />
                <span className="text-xs font-subheading uppercase tracking-widest text-brand-blue-700 font-bold">
                  CENTRO DE DISTRIBUCIÓN & BASE CENTRAL
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-700">
                BASE DE OPERACIONES MDQ
              </h3>
            </div>
            <span className="font-mono text-xs text-brand-blue-700 font-bold px-3 py-1 rounded-full bg-brand-blue-50 border border-brand-blue-100">
              Partido de General Pueyrredón
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Datos directos */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100">
                <div className="w-10 h-10 rounded-xl bg-white border border-brand-blue-100 text-brand-blue-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-subheading uppercase tracking-wider text-brand-blue-400 font-bold">
                    Centro de Distribución
                  </span>
                  <span className="block font-sans text-sm sm:text-base font-bold text-brand-blue-700 mt-0.5">
                    Friuli 1972, Mar del Plata
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100">
                <div className="w-10 h-10 rounded-xl bg-white border border-brand-blue-100 text-brand-blue-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-subheading uppercase tracking-wider text-brand-blue-400 font-bold">
                    Línea Directa y WhatsApp
                  </span>
                  <a
                    href="tel:+542236602699"
                    className="block font-mono text-sm sm:text-base font-bold text-brand-blue-700 hover:text-brand-blue-500 transition-colors mt-0.5"
                  >
                    +54 223 660-2699
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100">
                <div className="w-10 h-10 rounded-xl bg-white border border-brand-blue-100 text-brand-blue-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-subheading uppercase tracking-wider text-brand-blue-400 font-bold">
                    Atención Comercial
                  </span>
                  <a
                    href="mailto:matiascejas@enviosdosruedas.com"
                    className="block font-mono text-sm sm:text-base font-bold text-brand-blue-700 hover:text-brand-blue-500 transition-colors mt-0.5 break-all"
                  >
                    matiascejas@enviosdosruedas.com
                  </a>
                </div>
              </div>
            </div>

            {/* Horarios de Despacho (Base Central) */}
            <div className="flex flex-col justify-between p-6 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-brand-blue-100">
                  <Clock className="w-5 h-5 text-brand-blue-700" />
                  <h4 className="font-display text-lg uppercase tracking-tight text-brand-blue-700">
                    Horarios de Despacho (Base Central)
                  </h4>
                </div>

                <div className="space-y-4 font-sans text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-brand-blue-100/60">
                    <span className="text-brand-ink font-medium">Lunes a Viernes: 09:00 - 18:00 hs</span>
                    <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase font-bold text-brand-blue-900 bg-brand-yellow-500 rounded-full shadow-xs">
                      Activo
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-brand-blue-100/60">
                    <span className="text-brand-ink font-medium">Sábados: 10:00 - 15:00 hs</span>
                    <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase font-bold text-brand-blue-900 bg-brand-yellow-500 rounded-full shadow-xs">
                      Activo
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-blue-100 text-xs text-brand-blue-400 flex items-center justify-between font-mono">
                <span>Atención presencial y retiro de cargas</span>
                <span className="text-brand-blue-700 font-bold">Friuli 1972</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
