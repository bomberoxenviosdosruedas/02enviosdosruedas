'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, CheckCircle2, ShieldCheck } from 'lucide-react';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';
import CTANestedPill from '@/src/components/ui/CTANestedPill';

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
      className="py-24 bg-[#0950F6] text-white relative overflow-hidden border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-8 flex flex-col items-center">
          
          <div className="inline-flex p-3.5 bg-white/10 text-[#FFEC01] rounded-3xl mx-auto border border-white/15 shadow-glow-yellow">
            <Mail className="h-6 w-6 text-[#FFEC01]" />
          </div>

          <div className="space-y-3">
            <span className="px-4 py-1.5 bg-[#FFEC01] text-[#0950F6] font-bold rounded-full text-xs font-subheading uppercase tracking-widest inline-block shadow-glow-yellow transform -rotate-1">
              COMUNIDAD LOGÍSTICA
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.05] text-white">
              NEWSLETTER EXCLUSIVO
            </h2>
            <p className="text-sm sm:text-base text-white/90 font-sans leading-relaxed max-w-lg mx-auto">
              Recibí promociones relámpago, novedades operativas de calle, beneficios corporativos y noticias logísticas de Mar del Plata directamente en tu bandeja de entrada.
            </p>
          </div>

          {/* Form container with DoubleBezelCard */}
          <div className="w-full">
            <DoubleBezelCard>
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="newsletter-form"
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 w-full items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex-1 w-full space-y-1.5 text-left">
                      <label htmlFor="newsletter-email" className="text-xs font-subheading uppercase tracking-wider font-bold text-[#0950F6]">
                        CORREO ELECTRÓNICO
                      </label>
                      <input
                        id="newsletter-email"
                        type="email"
                        required
                        placeholder="Tu correo electrónico..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-11 bg-[#FFFFFF] border-[1.5px] border-[#D6E4FE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0950F6] focus-visible:border-[#0950F6] rounded-xl px-4 text-sm transition-all text-[#0950F6] placeholder:text-gray-400 font-sans shadow-sm"
                      />
                    </div>
                    <div className="pt-5 sm:pt-0 shrink-0 w-full sm:w-auto">
                      <CTANestedPill
                        type="submit"
                        variant="primary"
                        className="w-full sm:w-auto"
                      >
                        Unirme Ahora
                      </CTANestedPill>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    className="py-4 text-center space-y-3 flex flex-col items-center justify-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-2.5 bg-[#E6EEFE] border border-[#D6E4FE] text-[#0950F6] rounded-full w-fit">
                      <CheckCircle2 className="h-6 w-6 text-[#0950F6] animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-display uppercase tracking-tight text-[#0950F6] leading-none">
                      ¡Suscripción Exitosa!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0950F6]/80 font-sans max-w-sm mx-auto">
                      Ya formás parte de la lista prioritaria. Preparate para recibir las mejores novedades y descuentos.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </DoubleBezelCard>
          </div>

          {/* Disclaimer text */}
          <div className="flex items-center justify-center gap-2 text-xs text-white/80 font-sans pt-2">
            <ShieldCheck className="h-4.5 w-4.5 text-[#FFEC01] shrink-0" />
            <span>Garantizamos la privacidad de tus datos. Podés darte de baja con un solo clic en cualquier momento.</span>
          </div>

        </div>
      </div>
    </section>
  );
}