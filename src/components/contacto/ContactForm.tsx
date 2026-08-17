'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Sparkles, MessageCircle, HelpCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: 'express',
    mensaje: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    // Simulación de envío con confirmación inmediata
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      servicio: 'express',
      mensaje: '',
    });
    setStatus('idle');
  };

  return (
    <div className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-minimal h-full flex flex-col">
      <div className="double-bezel-inner bg-white rounded-xl p-6 sm:p-8 border border-brand-blue-50/50 shadow-sm h-full flex flex-col justify-between relative overflow-hidden">
        
        {/* Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue-700 via-brand-blue-500 to-brand-yellow-500" />

        <div>
          {/* Header */}
          <div className="mb-6 pb-5 border-b border-brand-blue-50">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-700 text-xs font-subheading uppercase tracking-wider mb-2 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue-500" />
              COTIZACIONES & CONSULTAS
            </div>
            <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue-700 mb-1.5">
              ENVIANOS TU CONSULTA
            </h2>
            <p className="text-brand-ink/80 font-sans text-sm sm:text-base leading-relaxed">
              Completá el formulario con tus datos y los detalles de tu operativa. Te contactamos hoy mismo con una propuesta clara.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="py-10 px-4 text-center flex flex-col items-center justify-center space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-brand-yellow-500 text-brand-blue-900 flex items-center justify-center border-2 border-brand-blue-700 shadow-accent">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2 max-w-md">
                  <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-700">
                    ¡MENSAJE ENVIADO!
                  </h3>
                  <p className="font-sans text-sm text-brand-ink leading-relaxed">
                    Gracias por contactarte con <strong className="text-brand-blue-700">Envíos DosRuedas</strong>. Un asesor comercial revisará tu consulta y te responderá a la brevedad.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full max-w-sm">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex-1 px-5 py-3 rounded-full border-2 border-brand-blue-700 text-brand-blue-700 hover:bg-brand-blue-50 font-subheading uppercase text-sm tracking-wider font-bold transition-all cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                  <a
                    href={`https://wa.me/542236602699?text=Hola!%20Acabo%20de%20enviar%20una%20consulta%20web%20a%20nombre%20de%20${encodeURIComponent(
                      formData.nombre || 'un cliente'
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 font-subheading uppercase text-sm tracking-wider font-bold shadow-accent transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Avisar por WhatsApp
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                {status === 'error' && (
                  <div className="p-3.5 bg-brand-yellow-50 border border-brand-yellow-200 rounded-xl flex items-center gap-3 text-brand-blue-900 text-xs font-sans">
                    <AlertCircle className="w-5 h-5 text-brand-blue-700 shrink-0" />
                    <span>Por favor, completá todos los campos obligatorios (*) para que podamos comunicarnos.</span>
                  </div>
                )}

                {/* Grid: Nombre y Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="nombre" className="block text-xs font-subheading uppercase tracking-wider text-brand-blue-700 font-bold">
                      Nombre completo <span className="text-brand-yellow-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="Ej: Juan Pérez"
                      className="w-full h-11 px-4 rounded-xl border-2 border-brand-blue-100 text-brand-ink font-sans text-sm focus:outline-none focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20 bg-brand-white-50 transition-all placeholder:text-brand-blue-300 disabled:opacity-60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="telefono" className="block text-xs font-subheading uppercase tracking-wider text-brand-blue-700 font-bold">
                      WhatsApp / Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="Ej: 223 660-2699"
                      className="w-full h-11 px-4 rounded-xl border-2 border-brand-blue-100 text-brand-ink font-sans text-sm focus:outline-none focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20 bg-brand-white-50 transition-all placeholder:text-brand-blue-300 disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Grid: Email y Tipo de Servicio */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-subheading uppercase tracking-wider text-brand-blue-700 font-bold">
                      Correo electrónico <span className="text-brand-yellow-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="Ej: juan.perez@email.com"
                      className="w-full h-11 px-4 rounded-xl border-2 border-brand-blue-100 text-brand-ink font-sans text-sm focus:outline-none focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20 bg-brand-white-50 transition-all placeholder:text-brand-blue-300 disabled:opacity-60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="servicio" className="block text-xs font-subheading uppercase tracking-wider text-brand-blue-700 font-bold">
                      Servicio de Interés
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full h-11 px-4 rounded-xl border-2 border-brand-blue-100 text-brand-ink font-sans text-sm focus:outline-none focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20 bg-brand-white-50 transition-all disabled:opacity-60 cursor-pointer"
                    >
                      <option value="express">Envíos Express (2 horas)</option>
                      <option value="lowcost">Envíos LowCost (En el día)</option>
                      <option value="flex">MercadoLibre Flex Partner</option>
                      <option value="3pl">3PL & Plan Emprendedores</option>
                      <option value="corporativo">Cadetería & Cuenta Empresa</option>
                      <option value="otro">Otra consulta general</option>
                    </select>
                  </div>
                </div>

                {/* Mensaje */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label htmlFor="mensaje" className="block text-xs font-subheading uppercase tracking-wider text-brand-blue-700 font-bold">
                      Tu mensaje o consulta <span className="text-brand-yellow-500">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-brand-blue-400">Mar del Plata 2026</span>
                  </div>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    placeholder="Escribí acá tu consulta. Decinos en qué podemos ayudarte..."
                    className="w-full p-4 rounded-xl border-2 border-brand-blue-100 text-brand-ink font-sans text-sm focus:outline-none focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20 bg-brand-white-50 transition-all placeholder:text-brand-blue-300 resize-none disabled:opacity-60"
                  />
                </div>

                {/* Notice */}
                <div className="flex items-start gap-2 text-xs text-brand-blue-400 font-sans">
                  <HelpCircle className="w-4 h-4 shrink-0 mt-0.5 text-brand-blue-300" />
                  <span>
                    Tus datos se utilizan únicamente para responder tu solicitud comercial de forma confidencial.
                  </span>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full cta-nested-pill bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 border-none shadow-accent font-subheading tracking-wider uppercase text-lg cursor-pointer disabled:opacity-60 justify-center transition-all duration-300 active:scale-[0.99]"
                >
                  <span>{status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}</span>
                  <span className="cta-nested-icon bg-brand-blue-900/10 text-brand-blue-900 shrink-0">
                    {status === 'submitting' ? (
                      <svg className="animate-spin h-4 w-4 text-brand-blue-900" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    ) : (
                      <Send className="h-4 w-4 shrink-0" />
                    )}
                  </span>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Guarantee */}
        <div className="pt-4 mt-6 border-t border-brand-blue-50 flex items-center justify-between text-xs text-brand-blue-400 font-sans">
          <span>Atención Comercial: Lunes a Sábados</span>
          <span className="font-mono font-bold text-brand-blue-700">MDQ · 7600</span>
        </div>

      </div>
    </div>
  );
}
