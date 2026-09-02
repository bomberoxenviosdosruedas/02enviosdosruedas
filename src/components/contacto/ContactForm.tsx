'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, CheckCircle2, AlertCircle, Sparkles, Clock, Send } from 'lucide-react';

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
    <div className="rounded-[28px] sm:rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-xl h-full flex flex-col justify-between">
      <div className="bg-[#052C87] p-6 sm:p-8 rounded-[20px] border border-white/10 shadow-lg relative overflow-hidden h-full flex flex-col justify-between text-white">
        {/* Visual Watermark in bottom right */}
        <MessageCircle
          className="absolute -bottom-10 -right-10 w-64 h-64 text-white/[0.04] pointer-events-none"
          aria-hidden="true"
        />

        {/* Accent top gradient bar */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0950F6] via-[#FFF12E] to-[#25D366]" />

        <div className="relative z-10">
          {/* Header & Badges */}
          <div className="mb-6 pb-6 border-b border-white/15">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#FFF12E] text-xs font-subheading uppercase tracking-wider font-bold -rotate-1 shadow-glow-yellow">
                <Sparkles className="w-3.5 h-3.5 text-[#FFF12E]" />
                Cotización Inmediata
              </span>

              {/* SLA Badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF12E]/15 border border-[#FFF12E]/40 text-[#FFF12E] text-xs font-mono font-bold uppercase tracking-wider tabular-nums">
                <Clock className="w-3.5 h-3.5 text-[#FFF12E] animate-pulse" />
                Atención comercial &lt; 2 MIN
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white mb-2 leading-tight">
              ¿Listo para escalar la logística de tu e-commerce?
            </h2>
            <p className="text-white/80 font-sans text-sm sm:text-base leading-relaxed">
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
                <div className="w-16 h-16 rounded-full bg-[#FFF12E] text-[#0950F6] mx-auto flex items-center justify-center shadow-glow-yellow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl uppercase tracking-tight text-white">
                    ¡SOLICITUD ENVIADA!
                  </h3>
                  <p className="font-sans text-sm text-white/80 max-w-sm mx-auto leading-relaxed">
                    Se abrió WhatsApp para conectar directamente con nuestro equipo comercial en Mar del Plata.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl border-2 border-white/20 text-white hover:bg-white/10 font-subheading uppercase text-xs tracking-wider font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF12E]"
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
                  <div className="p-3.5 bg-red-500/20 border border-red-500/40 rounded-xl flex items-center gap-3 text-red-200 text-xs font-sans">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Por favor, ingresá tu nombre para iniciar el contacto.</span>
                  </div>
                )}

                {/* Campo 1: Tu Nombre */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="nombre"
                    className="block text-xs font-subheading uppercase tracking-wider text-white/90 font-bold"
                  >
                    Tu Nombre <span className="text-[#FFF12E]">*</span>
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
                    className="w-full h-11 px-4 rounded-xl border-2 border-[#0950F6]/30 bg-white/5 text-white font-sans text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF12E] transition-all placeholder:text-white/40 disabled:opacity-50"
                  />
                </div>

                {/* Campo 2: Empresa / Negocio */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="empresa"
                    className="block text-xs font-subheading uppercase tracking-wider text-white/90 font-bold"
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
                    className="w-full h-11 px-4 rounded-xl border-2 border-[#0950F6]/30 bg-white/5 text-white font-sans text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF12E] transition-all placeholder:text-white/40 disabled:opacity-50"
                  />
                </div>

                {/* Campo 3: Volumen Estimado Mensual */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="volumen"
                    className="block text-xs font-subheading uppercase tracking-wider text-white/90 font-bold"
                  >
                    Volumen Estimado Mensual
                  </label>
                  <select
                    id="volumen"
                    name="volumen"
                    value={formData.volumen}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className="w-full h-11 px-4 rounded-xl border-2 border-[#0950F6]/30 bg-[#052C87] text-white font-sans text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF12E] transition-all cursor-pointer disabled:opacity-50"
                  >
                    <option value="" disabled className="text-white/40">
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
                  className="group w-full min-h-[52px] rounded-full bg-[#FFF12E] hover:bg-[#FFF44A] text-[#0950F6] font-subheading tracking-wider uppercase text-base font-bold flex items-center justify-between px-6 py-3.5 transition-all duration-300 shadow-glow-yellow active:scale-[0.99] cursor-pointer border-none disabled:opacity-50"
                >
                  <span>Hablar por WhatsApp</span>
                  <span className="w-8 h-8 rounded-full bg-[#0950F6]/10 text-[#0950F6] flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                    <MessageCircle className="w-4 h-4" />
                  </span>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Guarantee */}
        <div className="pt-4 mt-6 border-t border-white/15 flex items-center justify-between text-xs text-white/60 font-sans relative z-10">
          <span>Respuesta garantizada</span>
          <span className="font-mono font-bold text-[#FFF12E] tabular-nums">Mar del Plata 2026</span>
        </div>
      </div>
    </div>
  );
}
