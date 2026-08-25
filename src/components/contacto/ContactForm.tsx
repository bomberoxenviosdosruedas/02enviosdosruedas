'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, CheckCircle2, AlertCircle, Sparkles, Clock } from 'lucide-react';

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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre.trim()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    const message = `Hola Envíos DosRuedas! Soy ${formData.nombre.trim()}${
      formData.empresa.trim() ? ` de ${formData.empresa.trim()}` : ''
    }.${
      formData.volumen ? ` Volumen mensual estimado: ${formData.volumen}.` : ''
    } Quisiera recibir una cotización.`;

    const waUrl = `https://wa.me/542236602699?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setStatus('success');
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
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
    <div className="double-bezel-outer bg-brand-blue-50 border border-brand-blue-100 p-2 rounded-2xl shadow-md h-full flex flex-col justify-between">
      <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-xs relative overflow-hidden h-full flex flex-col justify-between">
        {/* Accent top gradient bar */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-blue-700 via-brand-blue-500 to-brand-yellow-500" />

        <div>
          {/* Header & Badges */}
          <div className="mb-6 pb-6 border-b border-brand-blue-100">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-700 text-xs font-subheading uppercase tracking-wider font-bold">
                <Sparkles className="w-3.5 h-3.5 text-brand-yellow-500" />
                Cotización Inmediata
              </span>

              {/* SLA Badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow-50 border border-brand-yellow-200 text-brand-blue-900 text-xs font-mono font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-brand-blue-700 animate-pulse" />
                Atención comercial &lt; 2 MIN
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue-700 mb-2 leading-tight">
              ¿Listo para escalar la logística de tu e-commerce?
            </h2>
            <p className="text-brand-ink/80 font-sans text-sm sm:text-base leading-relaxed">
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
                <div className="w-16 h-16 rounded-full bg-brand-yellow-500 text-brand-blue-900 mx-auto flex items-center justify-center shadow-accent">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-700">
                    ¡SOLICITUD ENVIADA!
                  </h3>
                  <p className="font-sans text-sm text-brand-ink/80 max-w-sm mx-auto leading-relaxed">
                    Se abrió WhatsApp para conectar directamente con nuestro equipo comercial en Mar del Plata.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl border-2 border-brand-blue-100 text-brand-blue-700 hover:bg-brand-blue-50 font-subheading uppercase text-xs tracking-wider font-bold transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500"
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
                  <div className="p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-600 text-xs font-sans">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Por favor, ingresá tu nombre para iniciar el contacto.</span>
                  </div>
                )}

                {/* Campo 1: Tu Nombre */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="nombre"
                    className="block text-xs font-subheading uppercase tracking-wider text-brand-blue-700 font-bold"
                  >
                    Tu Nombre <span className="text-brand-yellow-500">*</span>
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
                    className="w-full h-11 px-4 rounded-xl border-2 border-brand-blue-100 text-brand-ink font-sans text-sm bg-white focus:outline-none focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20 transition-all placeholder:text-brand-blue-300 disabled:opacity-50"
                  />
                </div>

                {/* Campo 2: Empresa / Negocio */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="empresa"
                    className="block text-xs font-subheading uppercase tracking-wider text-brand-blue-700 font-bold"
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
                    className="w-full h-11 px-4 rounded-xl border-2 border-brand-blue-100 text-brand-ink font-sans text-sm bg-white focus:outline-none focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20 transition-all placeholder:text-brand-blue-300 disabled:opacity-50"
                  />
                </div>

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
                    className="w-full h-11 px-4 rounded-xl border-2 border-brand-blue-100 text-brand-ink font-sans text-sm bg-white focus:outline-none focus:border-brand-blue-700 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <option value="" disabled className="text-brand-blue-300">
                      Seleccioná una opción
                    </option>
                    <option value="1 a 50 envíos">1 a 50 envíos</option>
                    <option value="51 a 200 envíos">51 a 200 envíos</option>
                    <option value="Más de 200 envíos">Más de 200 envíos</option>
                  </select>
                </div>

                {/* Botón CTA: Hablar por WhatsApp */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full cta-nested-pill bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 font-subheading tracking-wider uppercase text-base font-bold flex items-center justify-center gap-2 py-3.5 transition-all duration-300 shadow-accent active:scale-[0.99] cursor-pointer border-none disabled:opacity-50"
                >
                  <span>Hablar por WhatsApp</span>
                  <span className="cta-nested-icon bg-brand-blue-900/10 text-brand-blue-900 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </span>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Guarantee */}
        <div className="pt-4 mt-6 border-t border-brand-blue-100 flex items-center justify-between text-xs text-brand-blue-400 font-sans">
          <span>Respuesta garantizada</span>
          <span className="font-mono font-bold text-brand-blue-700">Mar del Plata 2026</span>
        </div>
      </div>
    </div>
  );
}
