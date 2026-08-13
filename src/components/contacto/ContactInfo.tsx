'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Mail, Clock, MapPin, ShieldCheck } from 'lucide-react';

export default function ContactInfo() {
  const contactChannels = [
    {
      label: 'WhatsApp',
      value: '2236602699',
      href: 'https://wa.me/542236602699',
      iconPath: '/iconos/whatapps.svg',
      color: 'hover:border-[#25D366] hover:bg-[#25D366]/5 hover:shadow-[3px_3px_0px_#25D366]',
      iconBg: 'bg-[#25D366] text-white border-[#25D366]',
    },
    {
      label: 'Email Principal',
      value: 'matiascejas@enviosdosruedas.com',
      href: 'mailto:matiascejas@enviosdosruedas.com',
      isLucide: true,
      icon: Mail,
      color: 'hover:border-brand-blue hover:bg-brand-blue-50/50 hover:shadow-[3px_3px_0px_var(--color-brand-blue)]',
      iconBg: 'bg-brand-blue text-white border-brand-blue-100',
    },
    {
      label: 'Instagram',
      value: '@enviosdosruedas',
      href: 'https://instagram.com/enviosdosruedas',
      iconPath: '/iconos/instagram.svg',
      color: 'hover:border-[#dc2743] hover:bg-gradient-to-tr hover:from-[#f09433]/5 hover:via-[#dc2743]/5 hover:to-[#bc1888]/5 hover:shadow-[3px_3px_0px_#dc2743]',
      iconBg: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white border-[#dc2743]',
    },
    {
      label: 'Facebook',
      value: 'Envíos DosRuedas',
      href: 'https://facebook.com/enviosdosruedas',
      iconPath: '/iconos/facebook.svg',
      color: 'hover:border-[#1877F2] hover:bg-[#1877F2]/5 hover:shadow-[3px_3px_0px_#1877F2]',
      iconBg: 'bg-[#1877F2] text-white border-[#1877F2]',
    },
  ];

  const hours = [
    { days: 'Lunes a Viernes', time: '08:00 - 18:00 hs' },
    { days: 'Sábados', time: '09:00 - 15:00 hs' },
    { days: 'Domingos', time: 'Cerrado', isClosed: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="space-y-8 h-full flex flex-col justify-between"
    >
      {/* Contact Channels Grid */}
      <div className="double-bezel-outer bg-brand-blue-50/80 hover:shadow-brutalist border border-brand-blue-100 p-2 rounded-2xl transition-all duration-300">
        <div className="double-bezel-inner bg-white rounded-xl p-6 border border-brand-blue-50/50 shadow-sm space-y-6">
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
                  transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                  className={`p-4 border-2 border-brand-blue-100 rounded-2xl flex items-center gap-3 transition-all duration-300 group/item bg-brand-white-50 hover:bg-white cursor-pointer ${chan.color}`}
                >
                  <div className={`p-3 rounded-xl border border-white/10 relative w-11 h-11 flex items-center justify-center shrink-0 ${chan.iconBg} group-hover/item:scale-105 duration-300`}>
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
                    <p className="text-[10px] font-subheading uppercase tracking-widest text-brand-blue-300 leading-none mb-1">
                      {chan.label}
                    </p>
                    <p className="text-xs sm:text-sm font-bold font-mono truncate text-brand-blue-700 leading-tight">
                      {chan.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Operating Hours */}
      <div className="double-bezel-outer bg-brand-blue-50/80 hover:shadow-brutalist border border-brand-blue-100 p-2 rounded-2xl transition-all duration-300">
        <div className="double-bezel-inner bg-white rounded-xl p-6 border border-brand-blue-50/50 shadow-sm space-y-6">
          <h3 className="text-2xl font-display uppercase tracking-tight text-brand-blue flex items-center gap-2">
            <Clock className="h-6 w-6 text-brand-blue group-hover:rotate-6 transition-transform" />
            HORARIOS DE ATENCIÓN
          </h3>

          <div className="space-y-3">
            {hours.map((item) => (
              <div 
                key={item.days} 
                className="flex justify-between items-center py-2.5 border-b-2 border-brand-blue-50 last:border-b-0"
              >
                <span className="text-sm font-bold text-brand-blue-500 font-sans">{item.days}</span>
                <span 
                  className={`text-sm font-bold uppercase tracking-wider font-mono ${
                    item.isClosed ? 'text-brand-blue-500 bg-brand-white-50 border border-brand-blue-100 px-2.5 py-0.5 rounded-md text-xs' : 'text-brand-blue-700'
                  }`}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coverage & Interactive Map */}
      <div className="double-bezel-outer bg-brand-blue-50/80 hover:shadow-brutalist border border-brand-blue-100 p-2 rounded-2xl transition-all duration-300 flex-grow flex flex-col">
        <div className="double-bezel-inner bg-white rounded-xl p-6 border border-brand-blue-50/50 shadow-sm space-y-6 flex-grow flex flex-col justify-between">
          <div className="space-y-2">
            <h3 className="text-2xl font-display uppercase tracking-tight text-brand-blue flex items-center gap-2">
              <MapPin className="h-6 w-6 text-brand-blue shrink-0 group-hover:translate-y-[-2px] transition-transform" />
              ZONA DE COBERTURA
            </h3>
            <p className="text-sm text-brand-blue-400 font-sans leading-relaxed">
              Operamos en toda la ciudad de Mar del Plata, listos para llegar a donde nos necesites con ruteos eficientes y envíos en el día.
            </p>
          </div>

          {/* Map iframe with soft shadow glow */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-brand-blue-700 h-64 sm:h-72 w-full mt-2 flex-grow min-h-[220px] shadow-brutalist group-hover:border-brand-blue-700 transition-all duration-300">
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
      </div>
    </motion.div>
  );
}
