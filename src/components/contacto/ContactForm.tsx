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
    <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl h-full flex flex-col justify-between relative overflow-hidden">
      {/* Accent top gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6366F1] via-[#22C55E] to-[#FFEC01]" />

      <div>
        {/* Header Header & Badges */}
        <div className="mb-6 pb-6 border-b border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] text-xs font-subheading uppercase tracking-wider font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#6366F1]" />
              Cotización Inmediata
            </span>

            {/* Badge de SLA */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] text-xs font-mono font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-[#22C55E] animate-pulse" />
              Atención comercial &lt; 2 MIN
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white mb-2 leading-tight">
            ¿Listo para escalar la logística de tu e-commerce?
          </h2>
          <p className="text-[#94A3B8] font-sans text-sm sm:text-base leading-relaxed">
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
              <div className="w-16 h-16 rounded-full bg-[#22C55E]/20 text-[#22C55E] mx-auto flex items-center justify-center border border-[#22C55E]/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-2xl uppercase tracking-tight text-white">
                  ¡SOLICITUD ENVIADA!
                </h3>
                <p className="font-sans text-sm text-[#94A3B8] max-w-sm mx-auto leading-relaxed">
                  Se abrió WhatsApp para conectar directamente con nuestro equipo comercial en Mar del Plata.
                </p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl border border-white/20 text-white hover:bg-white/10 font-subheading uppercase text-xs tracking-wider font-bold transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]"
              >
                Completar otro formulario
              </button>
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
                <div className="p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-300 text-xs font-sans">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Por favor, ingresá tu nombre para iniciar el contacto.</span>
                </div>
              )}

              {/* Campo 1: Tu Nombre */}
              <div className="space-y-1.5">
                <label
                  htmlFor="nombre"
                  className="block text-xs font-subheading uppercase tracking-wider text-white font-bold"
                >
                  Tu Nombre <span className="text-[#22C55E]">*</span>
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
                  className="w-full h-11 px-4 rounded-xl border border-white/10 text-white font-sans text-sm bg-white/5 focus:outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/50 focus-visible:ring-2 focus-visible:ring-[#6366F1] transition-all placeholder:text-[#94A3B8]/60 disabled:opacity-50"
                />
              </div>

              {/* Campo 2: Empresa / Negocio */}
              <div className="space-y-1.5">
                <label
                  htmlFor="empresa"
                  className="block text-xs font-subheading uppercase tracking-wider text-white font-bold"
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
                  className="w-full h-11 px-4 rounded-xl border border-white/10 text-white font-sans text-sm bg-white/5 focus:outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/50 focus-visible:ring-2 focus-visible:ring-[#6366F1] transition-all placeholder:text-[#94A3B8]/60 disabled:opacity-50"
                />
              </div>

              {/* Campo 3: Volumen Estimado Mensual */}
              <div className="space-y-1.5">
                <label
                  htmlFor="volumen"
                  className="block text-xs font-subheading uppercase tracking-wider text-white font-bold"
                >
                  Volumen Estimado Mensual
                </label>
                <select
                  id="volumen"
                  name="volumen"
                  value={formData.volumen}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full h-11 px-4 rounded-xl border border-white/10 text-white font-sans text-sm bg-[#111827] focus:outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/50 focus-visible:ring-2 focus-visible:ring-[#6366F1] transition-all cursor-pointer disabled:opacity-50"
                >
                  <option value="" disabled className="bg-[#111827] text-[#94A3B8]">
                    Seleccioná una opción
                  </option>
                  <option value="1 a 50 envíos" className="bg-[#111827] text-white">
                    1 a 50 envíos
                  </option>
                  <option value="51 a 200 envíos" className="bg-[#111827] text-white">
                    51 a 200 envíos
                  </option>
                  <option value="Más de 200 envíos" className="bg-[#111827] text-white">
                    Más de 200 envíos
                  </option>
                </select>
              </div>

              {/* Botón CTA: Hablar por WhatsApp */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full h-12 rounded-xl bg-[#22C55E] hover:bg-[#16a34a] active:scale-[0.99] text-white font-subheading tracking-wider uppercase text-base font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827] disabled:opacity-50"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Hablar por WhatsApp</span>
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Guarantee */}
      <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#94A3B8] font-sans">
        <span>Respuesta garantizada</span>
        <span className="font-mono font-bold text-white">Mar del Plata 2026</span>
      </div>
    </div>
  );
}
