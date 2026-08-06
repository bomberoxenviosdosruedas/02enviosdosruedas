'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { MessageSquare, Mail, HelpCircle, ArrowRight } from 'lucide-react';

export default function FaqCta() {
  return (
    <section 
      id="faq-cta" 
      className="py-24 bg-gradient-to-br from-brand-blue-700 to-brand-blue-600 text-white relative overflow-hidden border-t border-brand-yellow-500/20"
    >
      {/* Dynamic Background Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,var(--color-brand-yellow-500),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_75%,var(--color-brand-white-50),transparent_40%)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="double-bezel-outer bg-brand-blue-50/90 border border-brand-blue-100 p-2 rounded-3xl max-w-4xl mx-auto shadow-xl relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
          }}
        >
          <div className="double-bezel-inner bg-white p-8 sm:p-12 rounded-2xl border border-brand-blue-50/50 shadow-sm text-brand-blue text-center relative overflow-hidden">
            {/* Abstract background logo */}
            <div className="absolute right-0 bottom-0 translate-y-8 translate-x-8 text-brand-blue-50 pointer-events-none -z-10">
              <HelpCircle className="h-64 w-64 text-brand-blue-100 opacity-20" />
            </div>

            <div className="max-w-2xl mx-auto space-y-6 relative z-10 flex flex-col items-center">
              
              <span className="px-4 py-1.5 bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-700 rounded-full text-xs font-sans font-bold uppercase tracking-widest inline-block">
                SOPORTE HUMANO EN MDP
              </span>
              
              <h3 className="text-3xl sm:text-4xl font-display uppercase tracking-[0.02em] leading-[1.1] text-brand-blue-700">
                ¿NO ENCONTRASTE LO QUE BUSCABAS?
              </h3>
              
              <p className="text-sm sm:text-base text-brand-blue-600/90 leading-relaxed font-sans">
                No te preocupes. Nuestro equipo de soporte está listo para ayudarte de inmediato con cualquier consulta específica que tengas sobre nuestros servicios de mensajería y delivery.
              </p>

              {/* CTA Buttons (Double-Bezel & cta-nested-pill compliant) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
                <a
                  href="https://wa.me/5492236602699?text=Hola,%20tengo%20una%20consulta%20que%20no%20encontr%C3%A9%20en%20las%20FAQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="faq-cta-whatsapp"
                  className="link-animated cta-nested-pill bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-700 font-subheading tracking-wider text-lg uppercase shadow-brutalist w-full sm:w-auto justify-center"
                >
                  Hablá por WhatsApp
                  <span className="cta-nested-icon bg-brand-blue/10 text-brand-blue shrink-0">
                    <MessageSquare className="h-4.5 w-4.5 fill-current" />
                  </span>
                </a>

                <Link
                  href="/contacto"
                  id="faq-cta-contacto"
                  className="cta-nested-pill bg-white hover:bg-brand-blue-50 text-brand-blue border border-brand-blue-100 font-subheading tracking-wider text-lg uppercase shadow-sm hover:shadow-md w-full sm:w-auto justify-center"
                >
                  Contacto Directo
                  <span className="cta-nested-icon bg-brand-blue/5 text-brand-blue shrink-0">
                    <ArrowRight className="h-4.5 w-4.5" />
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
