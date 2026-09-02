'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, CheckCircle2, ShieldCheck } from 'lucide-react';

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
      className="py-24 bg-[#052C87] text-white relative overflow-hidden border-t border-white/10"
    >
      {/* Aesthetic ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#0950F6,transparent_30%)] opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,#FFF12E,transparent_40%)] opacity-15 pointer-events-none" />
 
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-8 flex flex-col items-center">
          
          <div className="inline-flex p-3.5 bg-white/10 text-brand-yellow-500 rounded-3xl mx-auto border border-white/15 shadow-glow-yellow">
            <Mail className="h-6 w-6 text-brand-yellow-500" />
          </div>
 
          <div className="space-y-3">
            <span className="px-4 py-1.5 bg-brand-yellow-500 text-[#052C87] font-bold rounded-full text-xs font-subheading uppercase tracking-widest inline-block shadow-glow-yellow transform -rotate-1">
              COMUNIDAD LOGÍSTICA
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.05] text-white">
              NEWSLETTER EXCLUSIVO
            </h2>
            <p className="text-sm sm:text-base text-white/90 font-sans leading-relaxed max-w-lg mx-auto">
              Recibí promociones relámpago, novedades operativas de calle, beneficios corporativos y noticias logísticas de Mar del Plata directamente en tu bandeja de entrada.
            </p>
          </div>
  
          {/* Form container with state change */}
          <div className="w-full rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2 shadow-2xl">
            <div className="rounded-[20px] bg-white p-6 sm:p-8 border border-brand-blue-50/50 shadow-sm text-brand-blue-700">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="newsletter-form"
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 w-full"
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
                      className="flex-1 h-11 border-2 border-brand-blue-100 rounded-xl bg-white px-4 text-brand-ink font-sans text-sm focus:border-[#0950F6] focus:ring-2 focus:ring-[#0950F6]/20 focus:outline-none transition-all placeholder:text-brand-blue-400"
                    />
                    <button
                      type="submit"
                      className="group min-h-[52px] bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 font-subheading tracking-wider text-base uppercase font-bold px-8 py-3.5 rounded-full flex items-center justify-center gap-3 shadow-glow-yellow transition-all duration-300 shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow-500/50"
                    >
                      <span>Unirme Ahora</span>
                      <span className="w-8 h-8 rounded-full bg-[#052C87]/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                        <Mail className="h-4.5 w-4.5 text-[#052C87]" />
                      </span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    className="py-4 text-center space-y-3 flex flex-col items-center justify-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-2.5 bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-700 rounded-full w-fit">
                      <CheckCircle2 className="h-6 w-6 text-[#0950F6] animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-display uppercase tracking-tight text-brand-blue-700 leading-none">
                      ¡Suscripción Exitosa!
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-ink font-sans max-w-sm mx-auto">
                      Ya formás parte de la lista prioritaria. Preparate para recibir las mejores novedades y descuentos.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
 
          {/* Disclaimer text */}
          <div className="flex items-center justify-center gap-2 text-xs text-white/80 font-sans pt-2">
            <ShieldCheck className="h-4.5 w-4.5 text-brand-yellow-500 shrink-0" />
            <span>Garantizamos la privacidad de tus datos. Podés darte de baja con un solo clic en cualquier momento.</span>
          </div>
 
        </div>
      </div>
    </section>
  );
}
