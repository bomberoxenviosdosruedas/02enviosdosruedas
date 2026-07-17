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
      className="py-24 bg-brand-blue-700 text-white relative overflow-hidden border-t border-brand-yellow-500/20"
    >
      {/* Aesthetic ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,236,1,0.03),transparent_30%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.02),transparent_40%)] pointer-events-none" />
 
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-8 flex flex-col items-center">
          
          <div className="inline-flex p-3 bg-brand-yellow-50 text-brand-blue-700 rounded-3xl mx-auto border border-brand-yellow-100/50 shadow-sm">
            <Mail className="h-6 w-6" />
          </div>
 
          <div className="space-y-3">
            <span className="text-base font-bold uppercase tracking-widest text-brand-yellow-500 font-subheading block">
              COMUNIDAD LOGÍSTICA
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-[0.02em] leading-[1.1] text-white">
              NEWSLETTER EXCLUSIVO
            </h2>
            <p className="text-sm sm:text-base text-brand-blue-100 font-sans leading-relaxed max-w-lg mx-auto">
              Recibí promociones relámpago, novedades operativas de calle, beneficios corporativos y noticias logísticas de Mar del Plata directamente en tu bandeja de entrada.
            </p>
          </div>
  
          {/* Form container with state change (Double-Bezel on Blue Background) */}
          <div className="w-full double-bezel-outer bg-brand-blue-50/90 border border-brand-blue-100 p-2 rounded-2xl shadow-lg">
            <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm text-brand-blue">
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
                      className="flex-1 bg-brand-blue-50/50 text-brand-blue-700 placeholder:text-brand-blue-400 font-sans text-sm rounded-xl px-4 py-4 border border-brand-blue-100 focus:outline-none focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-700/50 transition-all"
                    />
                    <button
                      type="submit"
                      className="cta-nested-pill bg-brand-yellow hover:bg-brand-yellow-400 text-brand-blue border border-brand-blue/50 font-subheading tracking-wider text-base uppercase shadow-sm justify-center shrink-0 cursor-pointer"
                    >
                      <span>Unirme Ahora</span>
                      <span className="cta-nested-icon bg-brand-blue/10 text-brand-blue shrink-0">
                        <Mail className="h-4.5 w-4.5" />
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
                      <CheckCircle2 className="h-6 w-6 text-brand-blue-700 animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-subheading uppercase tracking-wider text-brand-blue-700 font-bold">
                      ¡Suscripción Exitosa!
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-blue-600/95 font-sans max-w-sm mx-auto">
                      Ya formás parte de la lista prioritaria. Preparate para recibir las mejores novedades y descuentos.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
 
          {/* Disclaimer text */}
          <div className="flex items-center justify-center gap-2 text-xs text-brand-blue-200/90 font-sans pt-2">
            <ShieldCheck className="h-4.5 w-4.5 text-brand-yellow-500 shrink-0" />
            <span>Garantizamos la privacidad de tus datos. Podés darte de baja con un solo clic en cualquier momento.</span>
          </div>
 
        </div>
      </div>
    </section>
  );
}
