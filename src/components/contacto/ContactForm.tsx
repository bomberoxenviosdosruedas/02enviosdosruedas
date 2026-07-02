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
      className="bg-white rounded-3xl p-8 md:p-10 border border-slate-150 shadow-lg relative overflow-hidden h-full group hover:shadow-xl duration-350 transition-all cursor-default"
    >
      {/* Decorative gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue to-brand-yellow" />

      <div className="space-y-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">
            ¿Tenés alguna consulta?
          </h3>
          <p className="text-slate-500 font-sans text-sm sm:text-base">
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
              className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 flex flex-col items-center text-center space-y-4 py-12"
            >
              <div className="p-4 bg-emerald-100 text-emerald-600 rounded-full">
                <CheckCircle2 className="h-10 w-10 animate-bounce" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-subheading uppercase tracking-wide text-emerald-900 font-bold">
                  ¡Mensaje enviado con éxito!
                </h4>
                <p className="text-sm text-emerald-700 font-sans max-w-sm">
                  Gracias por comunicarte con Envíos DosRuedas. Nos pondremos en contacto con vos lo antes posible para ayudarte.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStatus('idle')}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider font-subheading transition-colors cursor-pointer"
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
                <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl flex items-center gap-3 text-rose-800 text-xs font-sans">
                  <AlertCircle className="h-5 w-5 text-rose-600 shrink-0" />
                  <span>Por favor, completá todos los campos obligatorios (*) antes de enviar.</span>
                </div>
              )}

              {/* Nombre */}
              <div className="space-y-2">
                <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Nombre completo <span className="text-brand-blue">*</span>
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
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow/30 focus:border-brand-blue transition-all disabled:opacity-60 bg-slate-50/50"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Correo electrónico <span className="text-brand-blue">*</span>
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
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow/30 focus:border-brand-blue transition-all disabled:opacity-60 bg-slate-50/50"
                />
              </div>

              {/* Mensaje */}
              <div className="space-y-2">
                <label htmlFor="mensaje" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Tu mensaje o consulta <span className="text-brand-blue">*</span>
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
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow/30 focus:border-brand-blue transition-all disabled:opacity-60 bg-slate-50/50 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'submitting'}
                whileHover={{ scale: 1.015, y: -1 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 rounded-xl font-subheading tracking-wider uppercase text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue/95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 hover:shadow-lg"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Enviando mensaje...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4.5 w-4.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
