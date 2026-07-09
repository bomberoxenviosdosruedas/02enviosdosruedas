'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 3) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section 
      id="newsletter-subscribe" 
      className="py-24 bg-brand-blue text-white relative overflow-hidden border-t-4 border-brand-yellow"
    >
      {/* Aesthetic ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,204,0,0.03),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.02),transparent_40%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-8">
          
          <div className="inline-flex p-3 bg-brand-yellow text-brand-blue rounded-3xl mx-auto border-2 border-brand-blue shadow-[3px_3px_0px_#003399]">
            <Mail className="h-6 w-6" />
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow font-subheading block">
              COMUNIDAD LOGÍSTICA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white leading-tight">
              NEWSLETTER EXCLUSIVO
            </h2>
            <p className="text-sm sm:text-base text-blue-100 font-sans leading-relaxed max-w-lg mx-auto">
              Recibí promociones relámpago, novedades operativas de calle, beneficios corporativos y noticias logísticas de Mar del Plata directamente en tu bandeja de entrada.
            </p>
          </div>

          {/* Form container with state change (Neo-Brutalist Box) */}
          <div className="bg-slate-900 border-2 border-brand-yellow p-6 sm:p-8 rounded-[2rem] shadow-[6px_6px_0px_#FFCC00] backdrop-blur-sm">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="newsletter-form"
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <input
                    type="email"
                    required
                    placeholder="Tu correo electrónico..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white text-slate-900 placeholder:text-slate-400 font-sans text-sm rounded-xl px-4 py-4 border-2 border-brand-blue focus:outline-none focus:shadow-[2px_2px_0px_#003399] transition-all"
                  />
                  <button
                    type="submit"
                    className="bg-brand-yellow hover:bg-brand-yellow/95 text-brand-blue font-subheading tracking-wider font-bold text-sm uppercase px-8 py-4 rounded-xl border-2 border-brand-blue shadow-[3px_3px_0px_#003399] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#003399] transition-all duration-200 shrink-0 cursor-pointer"
                  >
                    Unirme Ahora
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  className="py-4 text-center space-y-3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex p-2 bg-emerald-500/10 text-brand-yellow rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-brand-yellow animate-bounce" />
                  </div>
                  <h3 className="text-xl font-display uppercase tracking-wide text-brand-yellow">
                    ¡Suscripción Exitosa!
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100 font-sans max-w-sm mx-auto">
                    Ya formás parte de la lista prioritaria. Preparate para recibir las mejores novedades y descuentos.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Disclaimer text */}
          <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs text-blue-200/75 font-sans pt-2">
            <ShieldCheck className="h-4 w-4 text-brand-yellow shrink-0" />
            <span>Garantizamos la privacidad de tus datos. Podés darte de baja con un solo clic en cualquier momento.</span>
          </div>

        </div>
      </div>
    </section>
  );
}
