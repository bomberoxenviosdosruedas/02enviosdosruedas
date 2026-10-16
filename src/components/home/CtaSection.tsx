'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { MessageSquare, User, Store, PackageSearch, ChevronDown, CheckCircle2 } from 'lucide-react';
import { SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';

const WHATSAPP_NUMBER = SUPPORT_PHONE.replace(/\D/g, '');

export default function CtaSection() {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({ name: '', business: '', volume: '' });
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const buildWhatsAppUrl = (name: string, business: string, volume: string) => {
    const cleanName = name.trim();
    const cleanBusiness = business.trim();
    const cleanVolume = volume.trim().toLowerCase();
    const message = `Hola, soy ${cleanName} de ${cleanBusiness}. Me interesa cotizar envíos para ${cleanVolume} paquetes mensuales.`;
    return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, business, volume } = formData;
    trackAnalytics.formSubmit('home_cta_whatsapp');
    trackAnalytics.whatsappClick('home_cta_form', 'Hablar por WhatsApp');
    const url = buildWhatsAppUrl(name, business, volume);
    setSubmittedUrl(url);
    const newWin = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWin) {
      newWin.opener = null;
    }
  };

  // HyperFrames standard spring config
  const springConfig = { type: 'spring' as const, stiffness: 100, damping: 20 };
  const springConfigSnappy = { type: 'spring' as const, stiffness: 300, damping: 25 };

  // Container variants with orchestrated stagger
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0.01 } : springConfig,
    },
  };

  return (
    <section
      id="cta-section"
      aria-labelledby="cta-section-title"
      className="py-20 lg:py-28 bg-brand-blue-500 relative z-10 overflow-hidden shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="p-2.5 sm:p-3.5 rounded-[30px] bg-white/10 backdrop-blur-md border border-white/25 shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          <motion.div
            className="bg-white rounded-[20px] p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border border-brand-blue-100/50 shadow-sm relative overflow-hidden"
            variants={itemVariants}
          >

            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(9,80,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,80,246,0.03)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" aria-hidden="true" />

            {/* Left Text Block */}
            <motion.div className="lg:w-1/2 space-y-8 relative z-10 text-center lg:text-left" variants={itemVariants}>
              <motion.div
                className="inline-flex"
                whileHover={reduceMotion ? undefined : { scale: 1.03, transition: springConfigSnappy }}
              >
                <span className="px-4 py-2 rounded-full text-xs font-subheading tracking-widest bg-brand-yellow-400/20 text-brand-blue-500 border border-brand-yellow-400 uppercase font-bold cursor-default shadow-glow-yellow">
                  Cotización Inmediata
                </span>
              </motion.div>

              <motion.h2
                id="cta-section-title"
                className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.92] tracking-tight uppercase text-brand-blue-500"
              >
                ¿Listo para escalar la logística de tu e-commerce?
              </motion.h2>

              <motion.p className="text-brand-blue-500 text-base sm:text-lg font-sans leading-relaxed font-medium">
                Olvidate de la gestión de paquetes en Mar del Plata. Completá tus datos y te respondemos por WhatsApp en minutos.
              </motion.p>

              <motion.div
                className="pt-2 cursor-default"
                whileHover={reduceMotion ? undefined : { x: 4, transition: springConfigSnappy }}
              >
                <p className="text-xs font-mono tracking-widest text-brand-blue-500 font-bold uppercase leading-none">
                  Atención comercial <span className="text-brand-yellow-400 bg-brand-blue-500 px-2 py-0.5 rounded font-mono">{'<'} 5 MIN</span>
                </p>
              </motion.div>
            </motion.div>

            {/* Right Form Block */}
            <motion.div className="lg:w-1/2 w-full relative z-10" variants={itemVariants}>
              <form onSubmit={handleWhatsAppRedirect} className="space-y-5 bg-brand-blue-50 p-6 sm:p-8 rounded-[20px] border-2 border-brand-blue-200 shadow-xl">

                <div className="space-y-1.5">
                  <label htmlFor="cta-name" className="text-xs font-subheading tracking-wider text-brand-blue-500 uppercase font-bold">Tu Nombre</label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-blue-500/80 pointer-events-none" aria-hidden="true">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      id="cta-name"
                      name="nombre"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={e => {
                        setFormData({ ...formData, name: e.target.value });
                        if (submittedUrl) setSubmittedUrl(null);
                      }}
                      type="text"
                      placeholder="Ingresá tu nombre"
                      className="w-full h-11 border-2 border-brand-blue-400 rounded-xl pl-11 pr-4 focus:outline-none focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500/30 text-brand-blue-500 placeholder:text-brand-blue-500/75 text-sm font-sans transition-colors bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cta-business" className="text-xs font-subheading tracking-wider text-brand-blue-500 uppercase font-bold">Empresa / Negocio</label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-blue-500/80 pointer-events-none" aria-hidden="true">
                      <Store className="w-5 h-5" />
                    </div>
                    <input
                      id="cta-business"
                      name="empresa"
                      autoComplete="organization"
                      required
                      value={formData.business}
                      onChange={e => {
                        setFormData({ ...formData, business: e.target.value });
                        if (submittedUrl) setSubmittedUrl(null);
                      }}
                      type="text"
                      placeholder="Nombre de tu emprendimiento"
                      className="w-full h-11 border-2 border-brand-blue-400 rounded-xl pl-11 pr-4 focus:outline-none focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500/30 text-brand-blue-500 placeholder:text-brand-blue-500/75 text-sm font-sans transition-colors bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cta-volume" className="text-xs font-subheading tracking-wider text-brand-blue-500 uppercase font-bold">Volumen Estimado Mensual</label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-blue-500/80 pointer-events-none" aria-hidden="true">
                      <PackageSearch className="w-5 h-5" />
                    </div>
                    <select
                      required
                      id="cta-volume"
                      name="volumen"
                      value={formData.volume}
                      onChange={e => {
                        setFormData({ ...formData, volume: e.target.value });
                        if (submittedUrl) setSubmittedUrl(null);
                      }}
                      className="w-full h-11 border-2 border-brand-blue-400 rounded-xl pl-11 pr-10 focus:outline-none focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500/30 text-brand-blue-500 text-sm font-sans transition-colors appearance-none bg-white cursor-pointer"
                    >
                      <option value="" disabled>Seleccioná una opción</option>
                      <option value="1 a 50">1 a 50 envíos</option>
                      <option value="51 a 200">51 a 200 envíos</option>
                      <option value="más de 200">Más de 200 envíos</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-blue-500 pointer-events-none flex items-center justify-center" aria-hidden="true">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <motion.div className="pt-4">
                  <motion.button
                    type="submit"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { scale: 1.02, transition: springConfigSnappy }
                    }
                    whileTap={reduceMotion ? undefined : { scale: 0.98, transition: springConfigSnappy }}
                    className="w-full min-h-13 bg-brand-yellow-400 hover:bg-brand-yellow-300 text-brand-blue-500 font-subheading tracking-wider text-xl uppercase rounded-full shadow-glow-yellow flex items-center justify-center gap-3 cursor-pointer font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2"
                  >
                    <span>{submittedUrl ? 'Mensaje listo en WhatsApp' : 'Hablar por WhatsApp'}</span>
                    <motion.span
                      className="h-5 w-5"
                      aria-hidden="true"
                      whileHover={reduceMotion ? undefined : { scale: 1.15, rotate: 10, transition: springConfigSnappy }}
                    >
                      <MessageSquare className="w-5 h-5" />
                    </motion.span>
                  </motion.button>
                </motion.div>

                {submittedUrl && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="rounded-xl bg-white border border-brand-blue-200 p-3.5 text-xs text-brand-blue-500 font-sans flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-bold">¡Abrimos tu consulta en WhatsApp!</p>
                      <p className="mt-0.5">
                        Si no se abrió automáticamente,{' '}
                        <a
                          href={submittedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline decoration-brand-yellow-500 decoration-2 underline-offset-2 hover:text-brand-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 rounded"
                        >
                          hacé clic acá para abrir el chat
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                )}

              </form>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}