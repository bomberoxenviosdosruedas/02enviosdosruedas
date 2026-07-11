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
        y: { type: "spring", stiffness: 300, damping: 20 },
        opacity: { duration: 0.6 }
      }}
      className="p-2 bg-slate-200/60 border border-slate-300 rounded-[2rem] hover:shadow-[6px_6px_0px_#FFEC01] hover:border-brand-yellow/40 transition-all duration-300 flex flex-col group cursor-pointer h-full"
    >
      <div className="bg-white rounded-[calc(2rem-0.5rem)] p-8 md:p-10 border border-slate-100 shadow-sm h-full flex flex-col justify-between relative overflow-hidden">
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#00277c]" />

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-[#00277c] mb-2">
              ¿TENÉS ALGUNA CONSULTA?
            </h3>
            <p className="text-slate-650 font-sans text-sm sm:text-base leading-relaxed">
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
                className="bg-emerald-50 rounded-2xl p-6 border-2 border-[#00277c] flex flex-col items-center text-center space-y-4 py-12 shadow-[4px_4px_0px_#00277c]"
              >
                <div className="p-4 bg-brand-yellow text-[#00277c] rounded-full border-2 border-[#00277c] shadow-[2px_2px_0px_#00277c]">
                  <CheckCircle2 className="h-10 w-10 text-[#00277c] fill-brand-yellow shrink-0" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-display uppercase tracking-wide text-[#00277c] font-bold">
                    ¡MENSAJE ENVIADO!
                  </h4>
                  <p className="text-sm text-slate-700 font-sans max-w-sm leading-relaxed">
                    Gracias por comunicarte con Envíos DosRuedas. Te responderemos lo antes posible para ayudarte con tu cotización o consulta.
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStatus('idle')}
                  className="px-6 py-3 bg-[#00277c] hover:bg-[#00277c]/95 border-2 border-[#00277c] text-brand-yellow font-subheading uppercase text-sm tracking-wider rounded-xl shadow-[3px_3px_0px_#FFCC00] cursor-pointer font-bold"
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
                  <div className="p-4 bg-rose-50 border-2 border-rose-600 rounded-xl flex items-center gap-3 text-rose-800 text-xs font-sans">
                    <AlertCircle className="h-5.5 w-5.5 text-rose-600 shrink-0" />
                    <span>Por favor, completá todos los campos obligatorios (*) antes de enviar.</span>
                  </div>
                )}

                {/* Nombre */}
                <div className="space-y-2">
                  <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Nombre completo <span className="text-[#00277c] font-bold">*</span>
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
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 text-slate-900 font-sans text-sm focus:outline-none focus:border-[#00277c] focus:shadow-[2px_2px_0px_#00277c] transition-all disabled:opacity-60 bg-slate-50"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Correo electrónico <span className="text-[#00277c] font-bold">*</span>
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
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 text-slate-900 font-sans text-sm focus:outline-none focus:border-[#00277c] focus:shadow-[2px_2px_0px_#00277c] transition-all disabled:opacity-60 bg-slate-50"
                  />
                </div>

                {/* Mensaje */}
                <div className="space-y-2">
                  <label htmlFor="mensaje" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Tu mensaje o consulta <span className="text-[#00277c] font-bold">*</span>
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
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 text-slate-900 font-sans text-sm focus:outline-none focus:border-[#00277c] focus:shadow-[2px_2px_0px_#00277c] transition-all disabled:opacity-60 bg-slate-50 resize-none"
                  />
                </div>

                {/* Submit Button (Neo-Brutalist) */}
                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  whileHover={{ scale: 1.015, y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-4 rounded-xl font-subheading tracking-wider uppercase text-lg font-bold text-[#00277c] bg-brand-yellow hover:bg-[#ffe000] border-2 border-[#00277c] shadow-[4px_4px_0px_#00277c] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#00277c] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-[#00277c]" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 shrink-0" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
