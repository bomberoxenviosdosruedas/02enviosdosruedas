'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageCircle,
  Sparkles,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';
import CTANestedPill from '@/src/components/ui/CTANestedPill';
import { buildWhatsAppUrl } from '@/src/lib/whatsapp';
import { trackAnalytics } from '@/src/lib/analytics';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    volumen: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre.trim()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    const message = `¡Hola Envíos DosRuedas! Vengo del sitio web. Mi nombre es *${formData.nombre}*${
      formData.empresa ? ` de la empresa *${formData.empresa}*` : ''
    }.${
      formData.volumen ? ` Volumen mensual estimado: ${formData.volumen}.` : ''
    } Quisiera recibir una cotización.`;

    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('contact_lead', JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }));
      } catch {}
    }

    trackAnalytics.formSubmit('contact_form');
    trackAnalytics.whatsappClick('contact_form');

    const waUrl = buildWhatsAppUrl({ message, source: 'formulario_contacto' });

    setTimeout(() => {
      setStatus('success');
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      empresa: '',
      volumen: '',
    });
    setStatus('idle');
  };

  return (
    <section aria-label="Formulario de contacto comercial" className="h-full flex flex-col justify-between">
      <DoubleBezelCard>
        <div className="space-y-6 relative overflow-hidden h-full flex flex-col justify-between">
          <div className="relative z-10 space-y-6">
            {/* Header & Badges */}
            <div className="pb-4 border-b border-[#D6E4FE]">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6EEFE] border border-[#D6E4FE] text-[#0950F6] text-xs font-subheading uppercase tracking-wider font-bold -rotate-1 shadow-glow-yellow">
                  <Sparkles className="w-3.5 h-3.5 text-[#0950F6]" />
                  Cotización Inmediata
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEC01]/20 border border-[#FFEC01]/40 text-[#0950F6] text-xs font-mono font-bold uppercase tracking-wider tabular-nums">
                  <Clock className="w-3.5 h-3.5 text-[#0950F6] animate-pulse" />
                  Atención comercial &lt; 2 MIN
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-[#0950F6] mb-2 leading-tight">
                ¿Listo para escalar la logística de tu e-commerce?
              </h2>
              <p className="text-[#0950F6]/80 font-sans text-sm sm:text-base leading-relaxed">
                Olvidate de la gestión de paquetes en Mar del Plata. Completá tus datos y te respondemos por WhatsApp al instante.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="py-8 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FFEC01] text-[#0950F6] mx-auto flex items-center justify-center shadow-glow-yellow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl uppercase tracking-tight text-[#0950F6]">
                      ¡SOLICITUD ENVIADA!
                    </h3>
                    <p className="font-sans text-sm text-[#0950F6]/80 max-w-sm mx-auto leading-relaxed">
                      Se abrió WhatsApp para conectar directamente con nuestro equipo comercial en Mar del Plata.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl border-2 border-[#D6E4FE] text-[#0950F6] hover:bg-[#E6EEFE] font-subheading uppercase text-xs tracking-wider font-bold transition-all cursor-pointer"
                  >
                    Completar otro formulario
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  data-testid="contact-main-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  {status === 'error' && (
                    <div className="p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-700 text-xs font-sans">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>Por favor, ingresá tu nombre para iniciar el contacto.</span>
                    </div>
                  )}

                  {/* Campo 1: Tu Nombre */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="nombre"
                      className="block text-xs font-subheading uppercase tracking-wider text-[#0950F6] font-bold"
                    >
                      Tu Nombre <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="Tu Nombre"
                      className="w-full h-11 bg-[#FFFFFF] border-[1.5px] border-[#D6E4FE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0950F6] focus-visible:border-[#0950F6] rounded-xl px-4 text-sm transition-all text-[#0950F6] placeholder:text-gray-400 font-sans shadow-sm disabled:opacity-50"
                    />
                  </div>

                  {/* Campo 2: Empresa / Negocio */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="empresa"
                      className="block text-xs font-subheading uppercase tracking-wider text-[#0950F6] font-bold"
                    >
                      Empresa / Negocio
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="Empresa / Negocio"
                      className="w-full h-11 bg-[#FFFFFF] border-[1.5px] border-[#D6E4FE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0950F6] focus-visible:border-[#0950F6] rounded-xl px-4 text-sm transition-all text-[#0950F6] placeholder:text-gray-400 font-sans shadow-sm disabled:opacity-50"
                    />
                  </div>

                  {/* Campo 3: Volumen Estimado Mensual */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="volumen"
                      className="block text-xs font-subheading uppercase tracking-wider text-[#0950F6] font-bold"
                    >
                      Volumen Estimado Mensual
                    </label>
                    <select
                      id="volumen"
                      name="volumen"
                      value={formData.volumen}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full h-11 bg-[#FFFFFF] border-[1.5px] border-[#D6E4FE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0950F6] focus-visible:border-[#0950F6] rounded-xl px-4 text-sm transition-all text-[#0950F6] cursor-pointer disabled:opacity-50 shadow-sm"
                    >
                      <option value="" disabled className="text-gray-400">
                        Seleccioná una opción
                      </option>
                      <option value="1 a 50 envíos">1 a 50 envíos</option>
                      <option value="51 a 200 envíos">51 a 200 envíos</option>
                      <option value="Más de 200 envíos">Más de 200 envíos</option>
                    </select>
                  </div>

                  {/* Botón CTA: Hablar por WhatsApp */}
                  <div className="pt-2">
                    <CTANestedPill
                      type="submit"
                      text="Hablar por WhatsApp"
                      variant="primary"
                      className="w-full"
                    />
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Guarantee */}
          <div className="pt-4 mt-6 border-t border-[#D6E4FE] flex items-center justify-between text-xs text-[#0950F6]/80 font-sans relative z-10">
            <span>Respuesta garantizada</span>
            <span className="font-mono font-bold text-[#0950F6] tabular-nums">Mar del Plata 2026</span>
          </div>
        </div>
      </DoubleBezelCard>
    </section>
  );
}
