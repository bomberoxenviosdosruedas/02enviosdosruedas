'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, HelpCircle, ChevronDown, MessageCircle, Sparkles, ArrowRight, Clock, ShieldCheck, Truck, CreditCard } from 'lucide-react';

const TOP_FAQS = [
  {
    id: 'corte-same-day',
    question: '¿Cuál es el horario de corte para Same-Day?',
    answer: 'Para envíos LowCost con entrega en el día, el corte de solicitud es a las 14:00 hs. Para envíos Express (2 horas), tomamos pedidos de lunes a sábados hasta las 19:00 hs.',
    category: 'Express / LowCost',
  },
  {
    id: 'rastreo-paquete',
    question: '¿Cómo rastreo mi paquete en tiempo real?',
    answer: 'Ingresá el código de seguimiento en nuestro cotizador o envianos un mensaje a nuestro WhatsApp comercial. Un operador te comparte la ubicación satelital del cadete al instante.',
    category: 'Tracking & Seguridad',
  },
  {
    id: 'ausente-entrega',
    question: '¿Qué pasa si no hay nadie en el domicilio?',
    answer: 'El repartidor se comunica telefónicamente al llegar. Si el destinatario no responde, el paquete regresa a base central en Friuli 1972 y reprogramamos una 2da visita sin recargo.',
    category: 'Entregas',
  },
];

const SEARCH_SUGGESTIONS = [
  { text: '¿Cuánto cuesta un envío Express?', link: '/cotizar/express', tag: 'Express' },
  { text: '¿Hacen entregas en Batán y Sierra de los Padres?', link: '/servicios/envios-express', tag: 'Cobertura' },
  { text: '¿Cómo funciona MercadoLibre Flex en MDQ?', link: '/servicios/enviosflex', tag: 'Flex' },
  { text: '¿Cuáles son los medios de pago aceptados?', link: '#faq-accordion', tag: 'Pagos' },
  { text: '¿Tienen servicio de almacenamiento 3PL?', link: '/servicios/plan-emprendedores', tag: '3PL' },
];

const CATEGORY_CHIPS = [
  { name: 'EXPRESS', icon: Clock },
  { name: 'LOWCOST', icon: Truck },
  { name: 'FLEX', icon: Sparkles },
  { name: '3PL', icon: ShieldCheck },
  { name: 'PAGOS', icon: CreditCard },
];

export default function FaqHero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredSuggestions = searchQuery.trim()
    ? SEARCH_SUGGESTIONS.filter((item) =>
        item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <section 
      id="faq-hero" 
      className="relative w-full pt-20 pb-16 lg:pt-24 lg:pb-24 overflow-hidden"
      style={{ background: 'var(--surface-tint-blue)' }}
    >
      {/* Glow orbs - matches design spec */}
      <div
        className="absolute top-[-128px] left-[-128px] w-[384px] h-[384px] rounded-full pointer-events-none"
        style={{
          background: 'var(--brand-yellow)',
          opacity: 0.4,
          filter: 'blur(100px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-160px] right-[-128px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'var(--brand-blue)',
          opacity: 0.3,
          filter: 'blur(130px)',
        }}
        aria-hidden="true"
      />

      {/* Border accent */}
      <div className="absolute inset-0 pointer-events-none" style={{ border: '1px solid rgba(6,54,165,0.05)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Monumental Headline & Smart Search (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit">
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(6,54,165,0.10)',
                }}
              >
                <HelpCircle className="w-4 h-4 text-brand-blue-700" />
              </span>
              <span className="font-subheading text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-700">
                CENTRO DE SOPORTE · MAR DEL PLATA
              </span>
            </div>

            {/* Monumental Headline with stroke treatment */}
            <h1 className="font-display uppercase tracking-tighter leading-[0.85] text-6xl sm:text-7xl lg:text-[7.5rem] text-brand-blue-700">
              TENÉS<br />
              <span
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '2px #0636A5',
                  fontStyle: 'italic',
                }}
              >
                DUDAS?
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl font-sans text-base sm:text-lg lg:text-xl text-brand-ink/80 leading-relaxed">
              Buscá por palabra clave o elegí una categoría. Si no está, te respondemos por WhatsApp en minutos.
            </p>

            {/* Smart Search Bar with Dropdown Suggestions */}
            <div className="relative max-w-xl">
              <div className="relative double-bezel-outer bg-brand-blue-50/90 border border-brand-blue-100 p-1.5 rounded-2xl shadow-md transition-all focus-within:shadow-xl focus-within:border-brand-yellow-500">
                <div className="double-bezel-inner bg-white rounded-xl flex items-center px-4 py-1 border border-brand-blue-50/50">
                  <Search className="w-5 h-5 text-brand-blue-700 shrink-0 mr-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    placeholder="Ej: ¿cuánto tarda un envío a Batán?"
                    className="w-full h-11 bg-transparent text-brand-ink font-sans text-sm sm:text-base focus:outline-none placeholder:text-brand-blue-300"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="text-xs font-subheading uppercase text-brand-blue-400 hover:text-brand-blue-700 px-2 py-1"
                    >
                      Limpiar
                    </button>
                  )}
                </div>
              </div>

              {/* Suggestions Dropdown */}
              <AnimatePresence>
                {(isSearchFocused || searchQuery.length > 0) && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-brand-blue-100 shadow-2xl p-3 z-30 space-y-1.5"
                  >
                    <span className="text-[10px] font-subheading uppercase tracking-wider text-brand-blue-400 font-bold px-2 block">
                      {searchQuery ? 'Resultados sugeridos' : 'Preguntas frecuentes sugeridas'}
                    </span>
                    {(searchQuery.length > 0 ? filteredSuggestions : SEARCH_SUGGESTIONS).slice(0, 4).map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-brand-blue-50/70 text-brand-ink hover:text-brand-blue-700 transition-colors group cursor-pointer"
                      >
                        <span className="font-sans text-xs sm:text-sm">{item.text}</span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-subheading font-bold uppercase text-brand-blue-500 bg-brand-blue-50 px-2 py-0.5 rounded-md">
                          {item.tag}
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Category Quick Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-subheading uppercase tracking-wider text-brand-blue-400 font-bold mr-1">
                TEMAS:
              </span>
              {CATEGORY_CHIPS.map((cat) => {
                const IconComp = cat.icon;
                return (
                  <a
                    key={cat.name}
                    href="#faq-accordion"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-brand-blue-100 text-brand-blue-700 hover:border-brand-yellow-500 hover:bg-white text-xs font-subheading uppercase tracking-wider font-bold transition-all shadow-2xs hover:scale-105 cursor-pointer"
                  >
                    <IconComp className="w-3.5 h-3.5 text-brand-yellow-500" />
                    <span>{cat.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Floating "Respuesta Rápida" Accordion Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="double-bezel-outer bg-brand-blue-50/90 border border-brand-blue-100 p-2 rounded-3xl shadow-xl">
              <div className="double-bezel-inner bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-brand-blue-50/50 shadow-sm relative overflow-hidden space-y-5">
                {/* Accent line top */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-blue-700 via-brand-blue-500 to-brand-yellow-500" />

                {/* Header */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="font-subheading text-[10px] uppercase tracking-wider text-brand-blue-400 font-bold block">
                      PREGUNTAS TOP MDQ
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-brand-blue-700 leading-none mt-0.5">
                      Respuestas Rápidas
                    </h3>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow-500 animate-pulse shadow-[0_0_8px_#FFEC01]" />
                </div>

                {/* Top 3 Interactive FAQ Accordion */}
                <div className="space-y-2.5">
                  {TOP_FAQS.map((faq) => {
                    const isOpen = openFaq === faq.id;
                    return (
                      <div
                        key={faq.id}
                        className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                          isOpen
                            ? 'bg-brand-blue-50/60 border-brand-blue-200 shadow-2xs'
                            : 'bg-brand-white-50/70 border-brand-blue-100 hover:border-brand-blue-200'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                          className="w-full text-left p-3.5 flex items-center justify-between gap-3 cursor-pointer"
                        >
                          <span className="font-subheading text-xs sm:text-sm uppercase tracking-wide text-brand-blue-700 font-bold leading-snug">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-brand-blue-700 shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-brand-yellow-500' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <div className="px-3.5 pb-3.5 pt-1 text-xs font-sans text-brand-ink leading-relaxed border-t border-brand-blue-100/50">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                {/* WhatsApp Help Footer CTA */}
                <div className="pt-4 border-t border-brand-blue-50 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-sans text-brand-blue-700 font-medium">
                      ¿No encontrás tu duda?
                    </span>
                    <span className="font-mono text-[11px] text-brand-blue-400">
                      Respuesta &lt; 5 min
                    </span>
                  </div>

                  <a
                    href="https://wa.me/542236602699?text=Hola!%20Tengo%20una%20duda%20sobre%20los%20env%C3%ADos%20de%20Envíos%20DosRuedas%20en%20Mar%20del%20Plata."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full cta-nested-pill bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 border-none shadow-accent font-subheading tracking-wider uppercase text-sm py-2.5 justify-center transition-all duration-300 active:scale-[0.99] cursor-pointer"
                  >
                    <span>Preguntanos por WhatsApp</span>
                    <span className="cta-nested-icon bg-brand-blue-900/10 text-brand-blue-900 shrink-0">
                      <MessageCircle className="h-4 w-4" />
                    </span>
                  </a>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
