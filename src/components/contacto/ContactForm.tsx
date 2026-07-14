'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    
    // Simular un envío asincrónico ágil de 1.5s
    setTimeout(() => {
      setStatus('success');
      setFormData({ nombre: '', email: '', mensaje: '' });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ 
        y: { ease: [0.16, 1, 0.3, 1], duration: 0.6 },
        opacity: { duration: 0.6 }
      }}
      className="double-bezel-outer bg-[#E6EEFE]/80 hover:shadow-[0_0_20px_rgba(6,54,165,0.15)] border border-[#BACEFD] p-2 rounded-2xl transition-all duration-300 flex flex-col group cursor-pointer h-full"
    >
      <div className="double-bezel-inner bg-white rounded-xl p-6 border border-brand-blue-50/50 shadow-sm h-full flex flex-col justify-between relative overflow-hidden">
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-blue" />

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue mb-2">
              ¿TENÉS ALGUNA CONSULTA?
            </h3>
            <p className="text-brand-blue-500 font-sans text-sm sm:text-base leading-relaxed">
              Completá el formulario y te responderemos a la brevedad.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-brand-white-50 rounded-2xl p-6 border-2 border-brand-blue flex flex-col items-center text-center space-y-4 py-12 shadow-[4px_4px_0px_var(--color-brand-blue)]"
              >
                <div className="p-4 bg-brand-yellow text-brand-blue rounded-full border-2 border-brand-blue shadow-[2px_2px_0px_var(--color-brand-blue)]">
                  <CheckCircle2 className="h-10 w-10 text-brand-blue fill-brand-yellow shrink-0" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-display uppercase tracking-wide text-brand-blue font-bold">
                    ¡MENSAJE ENVIADO!
                  </h4>
                  <p className="text-sm text-brand-blue-600 font-sans max-w-sm leading-relaxed">
                    Gracias por comunicarte con Envíos DosRuedas. Te responderemos lo antes posible para ayudarte con tu cotización o consulta.
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStatus('idle')}
                  className="px-6 py-3 bg-brand-blue hover:bg-brand-blue/95 border-2 border-brand-blue text-brand-yellow font-subheading uppercase text-sm tracking-wider rounded-xl shadow-[3px_3px_0px_var(--color-brand-yellow)] cursor-pointer font-bold"
                >
                  Enviar otro mensaje
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                className="space-y-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {status === 'error' && (
                  <div className="p-4 bg-brand-white-50 border-2 border-brand-blue-500 rounded-xl flex items-center gap-3 text-brand-blue-700 text-xs font-sans">
                    <AlertCircle className="h-5.5 w-5.5 text-brand-blue-500 shrink-0" />
                    <span>Por favor, completá todos los campos obligatorios (*) antes de enviar.</span>
                  </div>
                )}

                {/* Nombre */}
                <div className="space-y-2">
                  <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-brand-blue-600">
                    Nombre completo <span className="text-brand-blue font-bold">*</span>
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
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-brand-blue-100 text-brand-blue-700 font-sans text-sm focus:outline-none focus:border-brand-blue focus:shadow-[2px_2px_0px_var(--color-brand-blue)] transition-all disabled:opacity-60 bg-brand-white-50"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-brand-blue-600">
                    Correo electrónico <span className="text-brand-blue font-bold">*</span>
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
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-brand-blue-100 text-brand-blue-700 font-sans text-sm focus:outline-none focus:border-brand-blue focus:shadow-[2px_2px_0px_var(--color-brand-blue)] transition-all disabled:opacity-60 bg-brand-white-50"
                  />
                </div>

                {/* Mensaje */}
                <div className="space-y-2">
                  <label htmlFor="mensaje" className="block text-xs font-bold uppercase tracking-wider text-brand-blue-600">
                    Tu mensaje o consulta <span className="text-brand-blue font-bold">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    placeholder="Escribí acá tu consulta. Decinos en qué podemos ayudarte..."
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-brand-blue-100 text-brand-blue-700 font-sans text-sm focus:outline-none focus:border-brand-blue focus:shadow-[2px_2px_0px_var(--color-brand-blue)] transition-all disabled:opacity-60 bg-brand-white-50 resize-none"
                  />
                </div>

                {/* Submit Button (Neo-Brutalist) */}
                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                  className="w-full cta-nested-pill bg-brand-yellow hover:bg-brand-yellow-400 text-brand-blue border border-brand-blue-100 shadow-[3px_3px_0px_rgba(0,39,124,0.1)] font-subheading tracking-wider uppercase text-lg cursor-pointer disabled:opacity-60 justify-center"
                >
                  <span>{status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}</span>
                  <span className="cta-nested-icon bg-brand-blue/10 text-brand-blue shrink-0">
                    {status === 'submitting' ? (
                      <svg className="animate-spin h-4 w-4 text-brand-blue" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    ) : (
                      <Send className="h-4 w-4 shrink-0" />
                    )}
                  </span>
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
