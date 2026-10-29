'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MessageSquare, User, Store, PackageSearch } from 'lucide-react';
import { SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';
import { CTANestedPill } from '@/components/ui/CTANestedPill';

const WHATSAPP_NUMBER = SUPPORT_PHONE.replace(/\D/g, '');

export default function CtaSection() {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({ name: '', business: '', volume: '' });
  const [submitted, setSubmitted] = useState(false);

  const buildWhatsAppUrl = (name: string, business: string, volume: string) => {
    const cleanName = name.trim();
    const cleanBusiness = business.trim();
    const cleanVolume = volume.trim().toLowerCase();
    const message = `Hola, soy ${cleanName} de ${cleanBusiness}. Me interesa cotizar envíos para ${cleanVolume} paquetes mensuales.`;
    return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, business, volume } = formData;
    trackAnalytics.formSubmit('home_cta_whatsapp');
    trackAnalytics.whatsappClick('home_cta_form', 'Hablar por WhatsApp');
    const url = buildWhatsAppUrl(name, business, volume);
    setSubmitted(true);
    const newWin = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWin) newWin.opener = null;
  };

  // Spring tokens desde globals.css: --ease-out, --duration-feedback
  const spring = { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const };
  const fastSpring = { duration: 0.2, ease: [0.23, 1, 0.32, 1] as const };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: reduceMotion ? { duration: 0.01 } : spring },
  };

  return (
    <section
      id="cta-section"
      aria-labelledby="cta-section-title"
      className="py-20 lg:py-28 bg-brand-blue-500 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="rounded-[30px] bg-white/5 backdrop-blur-md border border-white/10 p-2.5 sm:p-3.5"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-start gap-10 lg:gap-16"
          >
            {/* LEFT: Copy block - ALWAYS LEFT-ALIGNED */}
            <motion.div
              variants={itemVariants}
              className="lg:w-3/5 w-full space-y-8"
            >
              {/* Badge - inline, left-aligned */}
              <motion.span
                whileHover={reduceMotion ? undefined : { scale: 1.02, transition: fastSpring }}
                className="inline-flex px-3.5 py-1.5 rounded-full text-xs font-subheading uppercase tracking-widest bg-brand-yellow-500/15 border border-brand-yellow-500/30 text-brand-blue-500 font-bold shadow-accent-sm"
              >
                Cotización Inmediata
              </motion.span>

              {/* Headline - track-tight, weight-driven */}
              <motion.h2
                id="cta-section-title"
                className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.92] tracking-tight text-brand-blue-500"
              >
                ¿Listo para escalar la logística de tu e-commerce?
              </motion.h2>

              {/* Body - relaxed leading, 65ch max */}
              <motion.p className="font-sans text-base sm:text-lg text-brand-blue-500/80 leading-relaxed max-w-[65ch]">
                Olvidate de la gestión de paquetes en Mar del Plata. Completá tus datos y te respondemos por WhatsApp en minutos.
              </motion.p>

              {/* SLA text - honest copy, no fake brackets */}
              <motion.p className="font-sans text-sm text-brand-blue-500/60 leading-relaxed">
                Atención comercial: respondemos en pocos minutos hábiles.
              </motion.p>
            </motion.div>

            {/* RIGHT: Form INLINE - no card elevation, no bg-50 */}
            <motion.div
              variants={itemVariants}
              className="lg:w-2/5 w-full space-y-5"
            >
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* NAME FIELD */}
                <div className="space-y-1.5">
                  <label htmlFor="cta-name" className="text-xs font-subheading tracking-wider text-brand-blue-500 uppercase font-bold">
                    Tu Nombre
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-blue-500/60 pointer-events-none" aria-hidden="true">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      id="cta-name"
                      name="nombre"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      type="text"
                      placeholder="Ingresá tu nombre"
                      className="w-full h-12 border-2 border-brand-blue-200 rounded-xl pl-12 pr-4 focus:outline-none focus:border-brand-yellow-500 focus:ring-2 focus:ring-brand-yellow-500/30 text-brand-blue-500 placeholder:text-brand-blue-500/50 text-sm font-sans transition-colors bg-white"
                    />
                  </div>
                </div>

                {/* BUSINESS FIELD */}
                <div className="space-y-1.5">
                  <label htmlFor="cta-business" className="text-xs font-subheading tracking-wider text-brand-blue-500 uppercase font-bold">
                    Empresa / Negocio
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-blue-500/60 pointer-events-none" aria-hidden="true">
                      <Store className="w-5 h-5" />
                    </div>
                    <input
                      id="cta-business"
                      name="empresa"
                      autoComplete="organization"
                      required
                      value={formData.business}
                      onChange={e => setFormData({ ...formData, business: e.target.value })}
                      type="text"
                      placeholder="Nombre de tu emprendimiento"
                      className="w-full h-12 border-2 border-brand-blue-200 rounded-xl pl-12 pr-4 focus:outline-none focus:border-brand-yellow-500 focus:ring-2 focus:ring-brand-yellow-500/30 text-brand-blue-500 placeholder:text-brand-blue-500/50 text-sm font-sans transition-colors bg-white"
                    />
                  </div>
                </div>

                {/* VOLUME FIELD - styled select */}
                <div className="space-y-1.5">
                  <label htmlFor="cta-volume" className="text-xs font-subheading tracking-wider text-brand-blue-500 uppercase font-bold">
                    Volumen Estimado Mensual
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-blue-500/60 pointer-events-none" aria-hidden="true">
                      <PackageSearch className="w-5 h-5" />
                    </div>
                    <select
                      required
                      id="cta-volume"
                      name="volumen"
                      value={formData.volume}
                      onChange={e => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full h-12 border-2 border-brand-blue-200 rounded-xl pl-12 pr-12 focus:outline-none focus:border-brand-yellow-500 focus:ring-2 focus:ring-brand-yellow-500/30 text-brand-blue-500 text-sm font-sans transition-colors bg-white appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Seleccioná una opción</option>
                      <option value="1 a 50">1 a 50 envíos</option>
                      <option value="51 a 200">51 a 200 envíos</option>
                      <option value="más de 200">Más de 200 envíos</option>
                    </select>
                    {/* Custom chevron */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-blue-500/60 pointer-events-none flex items-center justify-center" aria-hidden="true">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* CTA - CTANestedPill component */}
                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -2, transition: fastSpring }}
                  whileTap={reduceMotion ? undefined : { y: 0, transition: { duration: 0.05 } }}
                >
                  <CTANestedPill
                    type="submit"
                    variant="primary"
                    size="large"
                    className="w-full"
                    id="cta-section-whatsapp"
                  >
                    {submitted ? 'Mensaje listo en WhatsApp' : 'Hablar por WhatsApp'}
                  </CTANestedPill>
                </motion.div>

                {/* Post-submit inline feedback (replaces separate card) */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -8, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    role="status"
                    aria-live="polite"
                    className="rounded-xl bg-brand-yellow-500/10 border border-brand-yellow-500/30 p-4 text-sm text-brand-blue-500 font-sans flex items-start gap-3"
                  >
                    <svg className="w-5 h-5 text-brand-yellow-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <div>
                      <p className="font-bold">¡Abrimos tu consulta en WhatsApp!</p>
                      <p className="mt-1 text-brand-blue-500/70">
                        Si no se abrió automáticamente,{' '}
                        <a
                          href={buildWhatsAppUrl(formData.name, formData.business, formData.volume)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline decoration-brand-yellow-500 decoration-2 underline-offset-2 hover:text-brand-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 rounded"
                        >
                          hacé clic acá para abrir el chat
                        </a>
                        .
                      </p>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}