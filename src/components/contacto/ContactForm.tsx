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
import InputField from '@/src/components/ui/InputField';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    volumen: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

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
      setError('Por favor, ingresá tu nombre para iniciar el contacto.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setError(null);

    const message = `¡Hola Envíos DosRuedas! Vengo del sitio web. Mi nombre es *${formData.nombre}*${
      formData.empresa ? ` de la empresa *${formData.empresa}*` : ''
    }.${formData.volumen ? ` Volumen mensual estimado: ${formData.volumen}.` : ''} Quisiera recibir una cotización.`;

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
    setError(null);
  };

  return (
    <section aria-label="Formulario de contacto comercial" className="h-full flex flex-col justify-between">
      <DoubleBezelCard>
        <div className="space-y-6 relative overflow-hidden h-full flex flex-col justify-between">
          <div className="relative z-10 space-y-6">
            {/* Header & Badges */}
            <div className="pb-4 border-b border-brand-blue-100">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-700 text-xs font-subheading uppercase tracking-wider -rotate-1 shadow-glow-yellow">
                  <Sparkles className="w-3.5 h-3.5 text-brand-blue-700" />
                  Cotización Inmediata
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow-500/20 border border-brand-yellow-500/40 text-brand-blue-700 text-xs font-mono font-bold uppercase tracking-wider tabular-nums">
                  <Clock className="w-3.5 h-3.5 text-brand-blue-700 animate-pulse" />
                  Atención comercial {'<'} 2 MIN
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue-700 mb-2 leading-tight">
                ¿Listo para escalar la logística de tu e-commerce?
              </h2>
              <p className="text-brand-blue-700/80 font-sans text-sm sm:text-base leading-relaxed">
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
                  <div className="w-16 h-16 rounded-full bg-brand-yellow-500 text-brand-blue-900 mx-auto flex items-center justify-center shadow-glow-yellow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-700">
                      ¡SOLICITUD ENVIADA!
                    </h3>
                    <p className="font-sans text-sm text-brand-blue-700/80 max-w-sm mx-auto leading-relaxed">
                      Se abrió WhatsApp para conectar directamente con nuestro equipo comercial en Mar del Plata.
                    </p>
                  </div>
                  <CTANestedPill
                    type="button"
                    variant="outline"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl font-subheading uppercase text-xs tracking-wider"
                  >
                    Completar otro formulario
                  </CTANestedPill>
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
                  {error && (
                    <div className="p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-700 text-xs font-sans" role="alert">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Campo 1: Tu Nombre */}
                  <InputField
                    id="nombre"
                    name="nombre"
                    label="Tu Nombre"
                    placeholder="Tu Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    disabled={status === 'submitting'}
                    icon={<MessageCircle className="h-3.5 w-3.5" />}
                    error={error}
                    containerClassName="space-y-1.5"
                  />

                  {/* Campo 2: Empresa / Negocio */}
                  <InputField
                    id="empresa"
                    name="empresa"
                    label="Empresa / Negocio"
                    placeholder="Empresa / Negocio"
                    value={formData.empresa}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    icon={<Sparkles className="h-3.5 w-3.5" />}
                    containerClassName="space-y-1.5"
                  />

                  {/* Campo 3: Volumen Estimado Mensual */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="volumen"
                      className="block text-xs font-subheading uppercase tracking-wider text-brand-blue-700 font-bold"
                    >
                      Volumen Estimado Mensual
                    </label>
                    <select
                      id="volumen"
                      name="volumen"
                      value={formData.volumen}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full h-11 bg-white border-2 border-brand-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-700 focus-visible:border-brand-blue-700 rounded-xl px-4 text-sm transition-all text-brand-blue-700 cursor-pointer disabled:opacity-50 shadow-sm"
                    >
                      <option value="" disabled className="text-brand-blue-500">
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
                      variant="primary"
                      className="w-full"
                    >
                      Hablar por WhatsApp
                    </CTANestedPill>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Guarantee */}
          <div className="pt-4 mt-6 border-t border-brand-blue-100 flex items-center justify-between text-xs text-brand-blue-700/80 font-sans relative z-10">
            <span>Respuesta garantizada</span>
            <span className="font-mono font-bold text-brand-blue-700 tabular-nums">Mar del Plata 2026</span>
          </div>
        </div>
      </DoubleBezelCard>
    </section>
  );
}