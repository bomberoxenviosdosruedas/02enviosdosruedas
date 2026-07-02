'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  Mail, Clock, MapPin, ShieldCheck 
} from 'lucide-react';

export default function ContactInfo() {
  const contactChannels = [
    {
      label: 'WhatsApp',
      value: '223-660-2699',
      href: 'https://wa.me/542236602699',
      iconPath: '/iconos/whatapps.svg',
      color: 'hover:border-emerald-500 hover:text-emerald-600 hover:shadow-emerald-100',
      iconBg: 'bg-emerald-50 text-emerald-600',
    },
    {
      label: 'Email Principal',
      value: 'matiascejas@enviosdosruedas.com',
      href: 'mailto:matiascejas@enviosdosruedas.com',
      isLucide: true,
      icon: Mail,
      color: 'hover:border-brand-blue hover:text-brand-blue hover:shadow-blue-100',
      iconBg: 'bg-blue-50 text-brand-blue',
    },
    {
      label: 'Instagram',
      value: '@enviosdosruedas',
      href: 'https://instagram.com/enviosdosruedas',
      iconPath: '/iconos/instagram.svg',
      color: 'hover:border-pink-500 hover:text-pink-600 hover:shadow-pink-100',
      iconBg: 'bg-pink-50 text-pink-600',
    },
    {
      label: 'Facebook',
      value: 'Envíos DosRuedas',
      href: 'https://facebook.com/enviosdosruedas',
      iconPath: '/iconos/facebook.svg',
      color: 'hover:border-blue-600 hover:text-blue-700 hover:shadow-blue-200',
      iconBg: 'bg-blue-50 text-blue-700',
    },
  ];

  const hours = [
    { days: 'Lunes a Viernes', time: '9:00 - 18:00 hs' },
    { days: 'Sábados', time: '10:00 - 15:00 hs' },
    { days: 'Domingos', time: 'Cerrado', isClosed: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      className="space-y-8 h-full flex flex-col justify-between"
    >
      {/* Contact Channels Grid */}
      <div className="bg-white rounded-3xl p-8 border border-slate-150 shadow-lg space-y-6 group hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-display uppercase tracking-tight text-slate-900 flex items-center gap-2 group-hover:text-brand-blue transition-colors">
          Canales Rápidos
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactChannels.map((chan) => {
            return (
              <motion.a
                key={chan.label}
                href={chan.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`p-4 border border-slate-100 rounded-2xl flex items-center gap-3 transition-all duration-300 group/item bg-slate-50/40 hover:bg-white hover:shadow-md cursor-pointer ${chan.color}`}
              >
                <div className={`p-3 rounded-xl transition-colors relative w-11 h-11 flex items-center justify-center shrink-0 ${chan.iconBg} group-hover/item:scale-105 duration-300`}>
                  {chan.isLucide && chan.icon ? (
                    <chan.icon className="h-5 w-5" />
                  ) : (
                    <Image
                      src={chan.iconPath!}
                      alt={chan.label}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-sans leading-none mb-1">
                    {chan.label}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold font-mono truncate text-slate-750 group-hover/item:text-slate-900">
                    {chan.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Operating Hours */}
      <div className="bg-white rounded-3xl p-8 border border-slate-150 shadow-lg space-y-6 group hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-display uppercase tracking-tight text-slate-900 flex items-center gap-2 group-hover:text-brand-blue transition-colors">
          <Clock className="h-5 w-5 text-brand-blue group-hover:rotate-6 transition-transform" />
          Horarios de Atención
        </h3>

        <div className="space-y-3">
          {hours.map((item) => (
            <div 
              key={item.days} 
              className="flex justify-between items-center py-2.5 border-b border-slate-50 last:border-b-0"
            >
              <span className="text-sm font-medium text-slate-650 font-sans">{item.days}</span>
              <span 
                className={`text-sm font-bold uppercase tracking-wider font-mono ${
                  item.isClosed ? 'text-rose-500 bg-rose-50 px-2.5 py-0.5 rounded-md text-xs' : 'text-slate-800'
                }`}
              >
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Coverage & Interactive Map */}
      <div className="bg-white rounded-3xl p-8 border border-slate-150 shadow-lg space-y-6 flex-grow flex flex-col group hover:shadow-xl transition-shadow duration-300">
        <div className="space-y-2">
          <h3 className="text-xl font-display uppercase tracking-tight text-slate-900 flex items-center gap-2 group-hover:text-brand-blue transition-colors">
            <MapPin className="h-5 w-5 text-brand-blue shrink-0 group-hover:translate-y-[-2px] transition-transform" />
            Nuestra Zona de Cobertura
          </h3>
          <p className="text-sm text-slate-500 font-sans leading-relaxed">
            Operamos en toda la ciudad de Mar del Plata, listos para llegar a donde nos necesites con ruteos eficientes y envíos en el día.
          </p>
        </div>

        {/* Map iframe with soft shadow glow */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-150 h-64 sm:h-72 w-full mt-2 flex-grow min-h-[220px] shadow-inner group-hover:border-brand-blue/30 transition-all duration-300">
          <iframe
            title="Mapa de cobertura Mar del Plata"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-57.6548%2C-38.0700%2C-57.5146%2C-37.9350&amp;layer=mapnik"
            className="absolute inset-0 w-full h-full border-0"
            style={{ filter: 'grayscale(0.1) contrast(1.05)' }}
            loading="lazy"
          />
          
          {/* Overlay Tag */}
          <div className="absolute bottom-3 left-3 bg-brand-blue text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg border border-white/20 flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-yellow" />
            Cobertura Total Mar del Plata
          </div>
        </div>
      </div>
    </motion.div>
  );
}
