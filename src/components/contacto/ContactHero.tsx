'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

const CHANNELS = [
  {
    title: "WhatsApp Comercial",
    desc: "Respuestas y cotizaciones de envíos en tiempo real.",
    icon: Mail,
  },
  {
    title: "Llamada de Coordinación",
    desc: "Para hablar directamente con un coordinador logístico.",
    icon: Phone,
  },
  {
    title: "Solicitar Cotización B2B",
    desc: "Envianos tu base de envíos para un plan personalizado.",
    icon: MapPin,
  },
];

export default function ContactHero() {
  return (
    <section
      className="relative w-full pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden"
      style={{ background: 'var(--surface-tint-blue)' }}
    >
      {/* Glow orbs - matches design spec */}
      <div
        className="absolute top-[-128px] left-[-128px] w-[384px] h-[384px] rounded-full pointer-events-none"
        style={{
          background: 'var(--brand-yellow)',
          opacity: 0.4,
          filter: 'blur(100px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-160px] right-[-128px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'var(--brand-blue)',
          opacity: 0.3,
          filter: 'blur(130px)',
        }}
        aria-hidden="true"
      />

      {/* Border accent */}
      <div className="absolute inset-0 pointer-events-none" style={{ border: '1px solid rgba(6,54,165,0.05)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline & Channels */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            {/* Badge - matches design spec: "Conexión Directa Mar del Plata" */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit">
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(255,255,255,0.5)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(6,54,165,0.10)',
                }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background: 'var(--brand-yellow)',
                    boxShadow: '0 0 10px var(--brand-yellow), 0 0 20px var(--brand-yellow)',
                  }}
                />
              </span>
              <span
                className="font-body text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: 'var(--brand-blue)' }}
              >
                Conexión Directa Mar del Plata
              </span>
            </div>

            {/* Monumental Title - matches design spec: italic with text-stroke on "ahora?" */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display uppercase tracking-tighter leading-[0.8]"
              style={{ fontSize: '9rem', fontStyle: 'italic', color: 'var(--brand-blue)' }}
            >
              ¿Hablamos<br />
              <span
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '2px #0636A5',
                }}
              >
                ahora?
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl font-body leading-tight"
              style={{ fontSize: 'var(--text-xl)', color: 'rgba(6,54,165,0.7)' }}
            >
              Sin formularios complejos ni esperas. Elegí el canal que mejor se adapte al ritmo de tu e-commerce.
            </motion.p>

            {/* Office Info - matches design spec */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-8 pt-8 border-t"
              style={{ borderColor: 'rgba(6,54,165,0.10)' }}
            >
              <div className="grid gap-1">
                <span
                  className="font-subheading text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: 'rgba(6,54,165,0.4)' }}
                >
                  Oficina Central
                </span>
                <span className="font-body text-sm font-bold" style={{ color: 'var(--brand-blue)' }}>
                  Friuli 1972, Mar del Plata
                </span>
              </div>
              <div className="grid gap-1">
                <span
                  className="font-subheading text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: 'rgba(6,54,165,0.4)' }}
                >
                  Operación
                </span>
                <span className="font-body text-sm font-bold" style={{ color: 'var(--brand-blue)' }}>
                  Lunes a Sábado
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Channel Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            {CHANNELS.map((channel) => (
              <a
                key={channel.title}
                href={channel.title === 'WhatsApp Comercial' ? 'https://wa.me/542236602699' : channel.title === 'Llamada de Coordinación' ? 'tel:+542236602699' : 'mailto:matiascejas@enviosdosruedas.com'}
                target={channel.title === 'Llamada de Coordinación' ? '_self' : '_blank'}
                rel={channel.title === 'Llamada de Coordinación' ? undefined : 'noopener noreferrer'}
                className="group flex items-center justify-between p-7 rounded-3xl cursor-pointer transition-all duration-300"
                style={{
                  border: '1px solid rgba(6,54,165,0.05)',
                  background: 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(12px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.style.background = '#fff';
                  e.currentTarget.style.boxShadow = 'var(--shadow-2xl)';
                  e.currentTarget.style.borderColor = 'var(--brand-yellow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.6)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(6,54,165,0.05)';
                }}
              >
                <span className="flex items-center gap-6">
                  <span
                    className="inline-flex"
                    style={{
                      padding: 16,
                      borderRadius: 'var(--radius-2xl)',
                      background: 'rgba(6,54,165,0.05)',
                    }}
                  >
                    <channel.icon className="h-6 w-6" style={{ color: 'var(--brand-blue)' }} />
                  </span>
                  <span>
                    <span
                      className="block font-headline uppercase tracking-wide"
                      style={{
                        fontSize: 'var(--text-xl)',
                        color: 'var(--brand-blue)',
                        lineHeight: 1,
                        marginBottom: 8,
                      }}
                    >
                      {channel.title}
                    </span>
                    <span
                      className="block"
                      style={{
                        fontSize: 'var(--text-xs)',
                        fontFamily: 'var(--font-body)',
                        color: 'rgba(6,54,165,0.5)',
                      }}
                    >
                      {channel.desc}
                    </span>
                  </span>
                </span>
                <span style={{ color: 'rgba(6,54,165,0.2)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}