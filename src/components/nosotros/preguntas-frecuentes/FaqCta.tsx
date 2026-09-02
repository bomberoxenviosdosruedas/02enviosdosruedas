'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { MessageSquare, Mail, HelpCircle, ArrowRight } from 'lucide-react';

export default function FaqCta() {
  return (
    <section
      id="faq-cta"
      className="py-24 bg-[#052C87] text-white relative overflow-hidden border-t border-white/10"
    >
      {/* Dynamic Background Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#0950F6,transparent_35%)] opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_75%,#FFF12E,transparent_40%)] opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2 max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
          }}
        >
          <div className="rounded-[20px] bg-[#052C87] p-8 sm:p-12 border border-white/10 text-white text-center relative overflow-hidden">
            {/* Abstract background logo */}
            <div className="absolute right-0 bottom-0 translate-y-8 translate-x-8 text-white/5 pointer-events-none -z-10">
              <HelpCircle className="h-64 w-64 text-white opacity-10" />
            </div>

            <div className="max-w-2xl mx-auto space-y-6 relative z-10 flex flex-col items-center">

              <span className="px-4 py-1.5 bg-brand-yellow-500 text-[#052C87] font-bold rounded-full text-xs font-subheading uppercase tracking-widest inline-block shadow-glow-yellow transform -rotate-1">
                SOPORTE HUMANO EN MDP
              </span>

              <h3 className="text-3xl sm:text-4xl font-display uppercase tracking-tight leading-[1.1] text-white">
                ¿NO ENCONTRASTE LO QUE BUSCABAS?
              </h3>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans">
                No te preocupes. Nuestro equipo de soporte está listo para ayudarte de inmediato con cualquier consulta específica que tengas sobre nuestros servicios de mensajería y delivery.
              </p>

              {/* CTA Buttons (WhatsApp en #25D366 exclusivo para soporte directo) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
                <a
                  href="https://wa.me/5492236602699?text=Hola,%20tengo%20una%20consulta%20que%20no%20encontr%C3%A9%20en%20las%20FAQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="faq-cta-whatsapp"
                  className="group min-h-[52px] px-8 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-subheading tracking-wider text-lg uppercase font-bold rounded-full flex items-center justify-center gap-3 shadow-lg transition-all duration-300 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
                >
                  <span>Hablá por WhatsApp</span>
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                    <MessageSquare className="h-4.5 w-4.5 text-white fill-current" />
                  </span>
                </a>

                <Link
                  href="/contacto"
                  id="faq-cta-contacto"
                  className="group min-h-[52px] px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-subheading tracking-wider text-lg uppercase font-bold rounded-full flex items-center justify-center gap-3 transition-all duration-300 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
                >
                  <span>Contacto Directo</span>
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                    <ArrowRight className="h-4.5 w-4.5 text-white" />
                  </span>
                </Link>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}