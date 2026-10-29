'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { CTANestedPill } from '@/components/ui/CTANestedPill';

export interface FAQItem {
  question: string;
  answer: string;
}

export const FLEX_FAQS: FAQItem[] = [
  {
    question: '¿Existe un mínimo de paquetes diarios para que retiren en mi local?',
    answer:
      'No, retiramos desde 1 solo paquete diario sin costo adicional de recolección en tu comercio o depósito. Podés comenzar a operar sin exigencias de volumen.',
  },
  {
    question: '¿Tienen cobertura en toda la ciudad?',
    answer:
      'Sí, las tarifas estándar de Mercado Envíos Flex cubren todo el ejido urbano de la ciudad de Mar del Plata. Las zonas y localidades periféricas fuera de la ciudad (Chapadmalal, Batán, Santa Clara del Mar, etc.) requieren consulta previa y se cotizan a $1.000 por kilómetro, calculado según la distancia entre el punto de retiro y el de entrega.',
  },
  {
    question: '¿El cadete escanea el paquete en mi local?',
    answer:
      'Sí, el repartidor escanea cada paquete directamente en tu comercio al momento de la recolección para que el estado se actualice al instante en la plataforma de Mercado Libre.',
  },
  {
    question: '¿Se puede cobrar contra entrega?',
    answer:
      'No, el servicio de Mercado Libre Envíos Flex no admite cobros contra entrega. Todas las ventas deben estar previamente cobradas y gestionadas dentro del ecosistema de Mercado Libre.',
  },
  {
    question: '¿Qué sucede ante roturas, extravíos o incidencias?',
    answer:
      'Ante cualquier inconveniente, cada caso particular se evalúa y se resuelve de forma directa, ágil y personalizada con el comercio a través de nuestro soporte por WhatsApp.',
  },
];

export default function FlexFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappMessage = encodeURIComponent(
    'Hola Envíos DosRuedas! Quiero coordinar Mercado Envíos Flex para mi local.'
  );
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=542236602699&text=${whatsappMessage}`;

  return (
    <section
      id="flex-faq"
      aria-label="Preguntas frecuentes sobre Mercado Envíos Flex"
      className="py-24 bg-brand-white-50 relative z-10 overflow-hidden border-t border-brand-blue-100"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="-rotate-1 inline-block px-4 py-1.5 bg-brand-blue-500 text-brand-yellow-500 rounded-full text-xs font-subheading uppercase tracking-widest shadow-sm">
            RESOLVÉ TUS DUDAS
          </span>
          <h2 className="text-brand-blue-500 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight inline-block leading-[0.98]">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-brand-ink font-sans text-sm sm:text-base max-w-lg mx-auto">
            Todo lo que necesitás saber antes de activar y comenzar a despachar tus ventas Flex con nosotros.
          </p>
          <div className="h-1.5 w-16 bg-brand-yellow-500 mx-auto rounded-full" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FLEX_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className="bg-brand-blue-50/80 border border-brand-blue-100 p-1.5 rounded-[22px] shadow-sm transition-all duration-300"
              >
                <div className="bg-white rounded-[18px] border border-brand-blue-50/60 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleQuestion(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 transition-colors hover:bg-brand-blue-50/30"
                  >
                    <span className="font-display text-base sm:text-lg uppercase tracking-wide text-brand-blue-500 leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'bg-brand-yellow-500 text-brand-blue-500 rotate-180'
                          : 'bg-brand-blue-50 text-brand-blue-500'
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-brand-ink font-sans leading-relaxed border-t border-brand-blue-50/80">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Card Footer */}
        <div className="mt-16 bg-brand-blue-500 text-white rounded-[28px] p-8 sm:p-10 border border-brand-blue-400/30 shadow-float relative overflow-hidden text-center sm:text-left">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center relative z-10">
            <div className="sm:col-span-8 space-y-3">
              <span className="-rotate-1 inline-block px-3.5 py-1 bg-brand-yellow-500 text-brand-blue-500 rounded-full text-xs font-subheading uppercase tracking-widest shadow-glow-yellow">
                CONTACTO DIRECTO
              </span>
              <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white leading-tight">
                ¿Tenés otra consulta sobre tu cuenta?
              </h3>
              <p className="text-sm text-brand-blue-50 font-sans max-w-xl leading-relaxed">
                Escribinos por WhatsApp. Te asesoramos con la configuración logística y coordinamos tu primer retiro hoy mismo.
              </p>
            </div>

            <div className="sm:col-span-4 flex justify-center sm:justify-end">
              <CTANestedPill
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="large"
                className="w-full sm:w-auto text-center"
              >
                Hablar por WhatsApp
              </CTANestedPill>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
