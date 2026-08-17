'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Clock, MapPin, ShieldCheck, Phone, ArrowUpRight, MessageCircle, Instagram } from 'lucide-react';

export default function ContactInfo() {
  const contactChannels = [
    {
      label: 'WhatsApp Directo',
      value: '+54 223 660-2699',
      href: 'https://wa.me/542236602699?text=Hola%20Envíos%20DosRuedas!%20Quiero%20hacer%20una%20consulta%20comercial.',
      icon: MessageCircle,
      badge: 'Respuesta inmediata',
      isPrimary: true,
    },
    {
      label: 'Línea Telefónica',
      value: '+54 223 660-2699',
      href: 'tel:+542236602699',
      icon: Phone,
      badge: '08:00 a 20:00 hs',
      isPrimary: false,
    },
    {
      label: 'Email Comercial',
      value: 'matiascejas@enviosdosruedas.com',
      href: 'mailto:matiascejas@enviosdosruedas.com',
      icon: Mail,
      badge: 'Cotizaciones B2B',
      isPrimary: false,
    },
    {
      label: 'Instagram Oficial',
      value: '@enviosdosruedas',
      href: 'https://instagram.com/enviosdosruedas',
      icon: Instagram,
      badge: 'Novedades & Comunidad',
      isPrimary: false,
    },
  ];

  const schedule = [
    { days: 'Lunes a Viernes', hours: '08:00 - 20:00 hs', status: 'Operativo' },
    { days: 'Sábados', hours: '08:00 - 16:00 hs', status: 'Operativo' },
    { days: 'Domingos y Feriados', hours: 'Guardia Programada', status: 'Guardia' },
  ];

  return (
    <div className="space-y-6 h-full flex flex-col justify-between">
      
      {/* Contact Channels Card (Double Bezel) */}
      <div className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-minimal">
        <div className="double-bezel-inner bg-white rounded-xl p-6 border border-brand-blue-50/50 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-brand-blue-50">
            <h3 className="text-xl font-display uppercase tracking-tight text-brand-blue-700 flex items-center gap-2">
              CANALES DE ATENCIÓN
            </h3>
            <span className="text-[11px] font-mono font-bold text-brand-blue-500 uppercase">
              MDQ 2026
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {contactChannels.map((channel) => {
              const IconComponent = channel.icon;
              return (
                <motion.a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.25 }}
                  className={`p-3.5 rounded-xl border transition-all duration-300 flex flex-col justify-between group ${
                    channel.isPrimary
                      ? 'bg-brand-yellow-50/70 border-brand-yellow-200 hover:border-brand-yellow-500 hover:shadow-accent-sm'
                      : 'bg-brand-white-50 border-brand-blue-100 hover:border-brand-blue-400 hover:bg-brand-blue-50/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        channel.isPrimary
                          ? 'bg-brand-yellow-500 text-brand-blue-900'
                          : 'bg-brand-blue-700 text-brand-white-50 group-hover:bg-brand-blue-500'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-blue-400 group-hover:text-brand-blue-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <div>
                    <span className="block text-[10px] font-subheading uppercase tracking-wider text-brand-blue-400 font-bold mb-0.5">
                      {channel.label}
                    </span>
                    <span className="block font-mono text-xs sm:text-sm font-bold text-brand-blue-900 truncate">
                      {channel.value}
                    </span>
                    <span className="inline-block text-[10px] font-sans text-brand-blue-500 mt-1">
                      {channel.badge}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Operating Hours Card (Double Bezel) */}
      <div className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-minimal">
        <div className="double-bezel-inner bg-white rounded-xl p-6 border border-brand-blue-50/50 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-brand-blue-50">
            <h3 className="text-lg font-display uppercase tracking-tight text-brand-blue-700 flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-blue-500" />
              HORARIOS DE DESPACHO
            </h3>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-brand-blue-700 font-bold px-2 py-0.5 bg-brand-blue-50 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow-500 animate-pulse" />
              Base Central
            </span>
          </div>

          <div className="space-y-2.5">
            {schedule.map((item) => (
              <div
                key={item.days}
                className="flex items-center justify-between py-2 border-b border-brand-blue-50/60 last:border-b-0 text-xs sm:text-sm font-sans"
              >
                <span className="font-medium text-brand-ink">{item.days}</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-brand-blue-700">{item.hours}</span>
                  <span
                    className={`px-2 py-0.5 text-[10px] font-subheading uppercase tracking-wider rounded font-bold ${
                      item.status === 'Operativo'
                        ? 'bg-brand-yellow-50 text-brand-blue-900 border border-brand-yellow-200'
                        : 'bg-brand-blue-50 text-brand-blue-600'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coverage Map & Hub Card (Double Bezel) */}
      <div className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-minimal flex-grow flex flex-col">
        <div className="double-bezel-inner bg-white rounded-xl p-6 border border-brand-blue-50/50 shadow-sm space-y-4 flex-grow flex flex-col justify-between">
          
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-brand-blue-50">
              <h3 className="text-lg font-display uppercase tracking-tight text-brand-blue-700 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-blue-500" />
                COBERTURA EN MAR DEL PLATA
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-brand-ink/80 font-sans mt-2 leading-relaxed">
              Base central en <strong>Friuli 1972</strong> con alcance diario en todo el Partido de General Pueyrredón (Güemes, Centro, Puerto, Mogotes, Chauvín, Constitución, Batán).
            </p>
          </div>

          {/* Map iframe container */}
          <div className="relative rounded-xl overflow-hidden border-2 border-brand-blue-100 h-56 sm:h-64 w-full min-h-[200px] shadow-sm mt-2">
            <iframe
              title="Mapa de cobertura logística Envíos DosRuedas Mar del Plata"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-57.6200%2C-38.0600%2C-57.5100%2C-37.9500&amp;layer=mapnik&amp;marker=-38.0055%2C-57.5426"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />

            {/* Badge overlay on map */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-brand-blue-700/95 backdrop-blur-sm text-brand-white-50 p-2.5 rounded-lg text-xs font-sans shadow-lg border border-brand-blue-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-yellow-500 animate-ping" />
                <span className="font-subheading uppercase text-xs tracking-wider text-brand-yellow-500 font-bold">
                  Hub Central MDQ
                </span>
              </div>
              <div className="flex items-center gap-1 font-mono text-[11px] text-brand-blue-100">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow-500" />
                <span>Radio 100% MDQ</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
