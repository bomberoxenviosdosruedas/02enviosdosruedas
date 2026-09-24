'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';

interface ContactCard {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  icon: React.ElementType | string;
  tag: string;
  subtag: string;
}

const contactCards: ContactCard[] = [
  {
    title: 'WhatsApp Comercial',
    description: 'Cotizaciones instantáneas, consultas operativas y seguimiento en vivo por WhatsApp.',
    buttonText: 'Chatear por WhatsApp',
    href: 'https://wa.me/542236602699?text=Hola!%20Vengo%20desde%20la%20p%C3%A1gina%20de%20Contacto.',
    icon: MessageSquare,
    tag: 'RESPUESTA < 2 MIN',
    subtag: 'MAR DEL PLATA 2026',
  },
  {
    title: 'Instagram Oficial',
    description: 'Novedades de la flota, consejos para tiendas online y fotos reales de nuestro día a día.',
    buttonText: 'Seguir en Instagram',
    href: 'https://instagram.com/enviosdosruedas',
    icon: '/iconos/instagram.svg',
    tag: '@ENVIOSDOSRUEDAS',
    subtag: 'COMUNIDAD E-COMMERCE',
  },
  {
    title: 'Facebook Oficial',
    description: 'Avisos de servicios, información de tránsito urbano y contacto para empresas.',
    buttonText: 'Visitar Facebook',
    href: 'https://facebook.com/enviosdosruedas',
    icon: '/iconos/facebook.svg',
    tag: 'PÁGINA OFICIAL',
    subtag: 'MAR DEL PLATA',
  },
];

export default function ContactInfo() {
  return (
    <div id="contact-info" className="space-y-8">
      {/* 3 Canales Directos */}
      <div>
        <div className="text-center sm:text-left mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6EEFE] text-[#0950F6] text-xs font-subheading uppercase tracking-wider font-bold -rotate-1 border border-[#D6E4FE]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0950F6]" />
            Canales de Atención Directa
          </span>
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#0950F6] mt-2">
            Elegí cómo comunicarte
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map((card, idx) => {
            const IconComp = card.icon;
            const isWhatsApp = idx === 0;

            return (
              <DoubleBezelCard key={card.title}>
                <div className="flex flex-col justify-between h-full space-y-4 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-2xs font-subheading uppercase tracking-wider text-[#0950F6] font-bold px-2.5 py-0.5 rounded bg-[#E6EEFE] border border-[#D6E4FE]">
                        {card.tag}
                      </span>
                      <span className="text-2xs font-mono font-bold uppercase text-[#0950F6]/60 tabular-nums">
                        {card.subtag}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#E6EEFE] border border-[#D6E4FE] text-[#0950F6]">
                        {/* Renderizado con el componente optimizado de Next.js */}
                        {typeof IconComp === 'string' ? (
                          <Image
                            src={IconComp}
                            alt={card.title}
                            width={20}
                            height={20}
                            className="w-5 h-5 object-contain"
                          />
                        ) : (
                          <IconComp className="w-5 h-5 text-[#0950F6]" />
                        )}
                      </div>
                      <h3 className="font-display text-lg uppercase tracking-tight text-[#0950F6] truncate">
                        {card.title}
                      </h3>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-[#0950F6]/80 leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative z-10 w-full min-h-11 h-11 rounded-full font-subheading tracking-wider uppercase text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer border ${
                      isWhatsApp
                        ? 'bg-[#FFEC01] hover:bg-[#FFEC01]/90 text-[#0950F6] border-none shadow-glow-yellow'
                        : 'bg-[#0950F6] hover:bg-[#0950F6]/90 text-white border-none'
                    }`}
                  >
                    <span>{card.buttonText}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </DoubleBezelCard>
            );
          })}
        </div>
      </div>

      {/* Base de Operaciones MDQ */}
      <DoubleBezelCard>
        <div className="bg-[#0950F6] p-6 sm:p-8 rounded-[20px] border border-white/20 relative overflow-hidden text-white space-y-6">
          <MapPin
            className="absolute -bottom-10 -right-10 w-64 h-64 text-white/4 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/15">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFEC01] animate-pulse shadow-[0_0_8px_#FFEC01]" />
                <span className="text-xs font-subheading uppercase tracking-widest text-[#FFEC01] font-bold">
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
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/10 border border-white/20">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-[#FFEC01] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-subheading uppercase tracking-wider text-[#FFEC01] font-bold">
                    Centro de Distribución
                  </span>
                  <span className="block font-mono text-sm sm:text-base font-bold text-white mt-0.5 tabular-nums">
                    Friuli 1972, Mar del Plata
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/10 border border-white/20">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-[#FFEC01] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-subheading uppercase tracking-wider text-[#FFEC01] font-bold">
                    Línea Directa y WhatsApp
                  </span>
                  <a
                    href="tel:+542236602699"
                    className="block font-mono text-sm sm:text-base font-bold text-white hover:text-[#FFEC01] transition-colors mt-0.5 tabular-nums"
                  >
                    +54 223 660-2699
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/10 border border-white/20">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-[#FFEC01] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-subheading uppercase tracking-wider text-[#FFEC01] font-bold">
                    Atención Comercial
                  </span>
                  <a
                    href="mailto:matiascejas@enviosdosruedas.com"
                    className="block font-mono text-sm sm:text-base font-bold text-white hover:text-[#FFEC01] transition-colors mt-0.5 break-all tabular-nums"
                  >
                    matiascejas@enviosdosruedas.com
                  </a>
                </div>
              </div>
            </div>

            {/* Horarios de Despacho */}
            <div className="flex flex-col justify-between p-6 rounded-xl bg-white/10 border border-white/20">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/15">
                  <Clock className="w-5 h-5 text-[#FFEC01]" />
                  <h4 className="font-display text-lg uppercase tracking-tight text-white">
                    Horarios de Despacho (Base Central)
                  </h4>
                </div>

                <div className="space-y-4 font-sans text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-white/90 font-mono tabular-nums">Lunes a Viernes: 09:00 - 18:00 hs</span>
                    <span className="px-2.5 py-0.5 text-2xs font-mono uppercase font-bold text-[#0950F6] bg-[#FFEC01] rounded-full shadow-xs tabular-nums">
                      Activo
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-white/90 font-mono tabular-nums">Sábados: 10:00 - 15:00 hs</span>
                    <span className="px-2.5 py-0.5 text-2xs font-mono uppercase font-bold text-[#0950F6] bg-[#FFEC01] rounded-full shadow-xs tabular-nums">
                      Activo
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 text-xs text-white/60 flex items-center justify-between font-mono">
                <span>Atención presencial y retiro de cargas</span>
                <span className="text-[#FFEC01] font-bold tabular-nums">Friuli 1972</span>
              </div>
            </div>
          </div>

          {/* Mapa Embebido */}
          <div className="relative z-10 pt-6 border-t border-white/15">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
              <div>
                <span className="text-xs font-subheading uppercase tracking-wider text-[#FFEC01] font-bold block">
                  UBICACIÓN EXACTA · MAPA EN VIVO
                </span>
                <h4 className="font-display text-xl uppercase tracking-tight text-white mt-0.5">
                  BASE OPERATIVA EN MAR DEL PLATA
                </h4>
              </div>
              <a
                href="https://share.google/ofw5wAQt3Fc1dArom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#FFEC01] text-xs font-subheading font-bold uppercase tracking-wider transition-all"
              >
                <span>Abrir en Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-white/20 shadow-md relative bg-[#0950F6]">
              <iframe
                title="Mapa de ubicación Friuli 1972, Mar del Plata - Envíos DosRuedas"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-57.5750%2C-38.0220%2C-57.5610%2C-38.0120&amp;layer=mapnik&amp;marker=-38.0172%2C-57.5684"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </DoubleBezelCard>
    </div>
  );
}