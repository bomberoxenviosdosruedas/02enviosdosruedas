'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Mail, Clock, MapPin, ShieldCheck } from 'lucide-react';

export default function ContactInfo() {
  const contactChannels = [
    {
      label: 'WhatsApp',
      value: '223-660-2699',
      href: 'https://wa.me/542236602699',
      iconPath: '/iconos/whatapps.svg',
      color: 'hover:border-emerald-500 hover:text-emerald-600 hover:shadow-emerald-100',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-250',
    },
    {
      label: 'Email Principal',
      value: 'contacto@enviosdosruedas.com',
      href: 'mailto:contacto@enviosdosruedas.com',
      isLucide: true,
      icon: Mail,
      color: 'hover:border-brand-blue hover:text-brand-blue hover:shadow-blue-100',
      iconBg: 'bg-blue-50 text-brand-blue border-blue-200',
    },
    {
      label: 'Instagram',
      value: '@enviosdosruedas',
      href: 'https://instagram.com/enviosdosruedas',
      iconPath: '/iconos/instagram.svg',
      color: 'hover:border-pink-500 hover:text-pink-600 hover:shadow-pink-100',
      iconBg: 'bg-pink-50 text-pink-600 border-pink-200',
    },
    {
      label: 'Facebook',
      value: 'Envíos DosRuedas',
      href: 'https://facebook.com/enviosdosruedas',
      iconPath: '/iconos/facebook.svg',
      color: 'hover:border-blue-600 hover:text-blue-700 hover:shadow-blue-200',
      iconBg: 'bg-blue-50 text-blue-700 border-blue-200',
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
      <div className="bg-white rounded-3xl p-8 border-2 border-brand-blue shadow-[6px_6px_0px_#003399] space-y-6 group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#003399] transition-all duration-300">
        <h3 className="text-2xl font-display uppercase tracking-tight text-brand-blue flex items-center gap-2">
          CANALES RÁPIDOS
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
                className={`p-4 border-2 border-brand-blue/20 rounded-2xl flex items-center gap-3 transition-all duration-300 group/item bg-slate-50 hover:bg-white hover:border-brand-blue hover:shadow-[3px_3px_0px_#003399] cursor-pointer ${chan.color}`}
              >
                <div className={`p-3 rounded-xl border-2 transition-colors relative w-11 h-11 flex items-center justify-center shrink-0 ${chan.iconBg} group-hover/item:scale-105 duration-300`}>
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
                  <p className="text-[10px] font-subheading uppercase tracking-widest text-slate-400 leading-none mb-1">
                    {chan.label}
                  </p>
                  <p className="text-xs sm:text-sm font-bold font-mono truncate text-brand-ink leading-tight">
                    {chan.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Operating Hours */}
      <div className="bg-white rounded-3xl p-8 border-2 border-brand-blue shadow-[6px_6px_0px_#003399] space-y-6 group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#003399] transition-all duration-300">
        <h3 className="text-2xl font-display uppercase tracking-tight text-brand-blue flex items-center gap-2">
          <Clock className="h-6 w-6 text-brand-blue group-hover:rotate-6 transition-transform" />
          HORARIOS DE ATENCIÓN
        </h3>

        <div className="space-y-3">
          {hours.map((item) => (
            <div 
              key={item.days} 
              className="flex justify-between items-center py-2.5 border-b-2 border-slate-100 last:border-b-0"
            >
              <span className="text-sm font-bold text-slate-650 font-sans">{item.days}</span>
              <span 
                className={`text-sm font-bold uppercase tracking-wider font-mono ${
                  item.isClosed ? 'text-rose-600 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-md text-xs' : 'text-brand-ink'
                }`}
              >
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Coverage & Interactive Map */}
      <div className="bg-white rounded-3xl p-8 border-2 border-brand-blue shadow-[6px_6px_0px_#003399] space-y-6 flex-grow flex flex-col group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#003399] transition-all duration-300">
        <div className="space-y-2">
          <h3 className="text-2xl font-display uppercase tracking-tight text-brand-blue flex items-center gap-2">
            <MapPin className="h-6 w-6 text-brand-blue shrink-0 group-hover:translate-y-[-2px] transition-transform" />
            ZONA DE COBERTURA
          </h3>
          <p className="text-sm text-slate-500 font-sans leading-relaxed">
            Operamos en toda la ciudad de Mar del Plata, listos para llegar a donde nos necesites con ruteos eficientes y envíos en el día.
          </p>
        </div>

        {/* Map iframe with soft shadow glow */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-brand-blue h-64 sm:h-72 w-full mt-2 flex-grow min-h-[220px] shadow-inner group-hover:border-brand-blue transition-all duration-300">
          <iframe
            title="Mapa de cobertura Mar del Plata"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-57.6548%2C-38.0700%2C-57.5146%2C-37.9350&amp;layer=mapnik"
            className="absolute inset-0 w-full h-full border-0"
            style={{ filter: 'grayscale(0.1) contrast(1.05)' }}
            loading="lazy"
          />
          
          {/* Overlay Tag */}
          <div className="absolute bottom-3 left-3 bg-brand-blue text-brand-yellow px-4 py-2 rounded-full text-xs font-subheading uppercase tracking-wider shadow-lg border-2 border-brand-yellow flex items-center gap-1.5">
            <ShieldCheck className="h-4.5 w-4.5 text-brand-yellow shrink-0 fill-brand-blue" />
            COBERTURA TOTAL MAR DEL PLATA
          </div>
        </div>
      </div>
    </motion.div>
  );
}
