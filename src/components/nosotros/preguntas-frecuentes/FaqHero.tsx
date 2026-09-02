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
      className="relative w-full pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-brand-blue-500 text-white border-b border-white/10"
    >
      {/* Halo glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-yellow-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30vw] h-[30vw] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Monumental Headline & Smart Search (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Speed Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-yellow-500/40 bg-[#052C87]/90 text-brand-yellow-500 text-xs sm:text-sm font-subheading uppercase tracking-widest shadow-md backdrop-blur-md transform -rotate-1">
              <HelpCircle className="h-4 w-4 text-brand-yellow-500 shrink-0" />
              <span>CENTRO DE SOPORTE · MAR DEL PLATA 2026</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="font-display uppercase tracking-tight leading-[0.98] text-5xl sm:text-7xl lg:text-[7rem] text-white">
              <span className="block">¿TENÉS</span>
              <span className="inline-block bg-brand-yellow-500 text-[#052C87] px-3 py-1 rounded-md transform -rotate-1 mt-1 font-display tracking-tight shadow-glow-yellow">
                DUDAS?
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl font-sans text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed pl-4 border-l-4 border-brand-yellow-500">
              Buscá por palabra clave o elegí una categoría. Si no está, te respondemos por WhatsApp en minutos.
            </p>

            {/* Smart Search Bar with Dropdown Suggestions */}
            <div className="relative max-w-xl">
              <div className="relative rounded-[28px] bg-white/10 backdrop-blur-md border border-white/20 p-1.5 shadow-2xl transition-all focus-within:ring-4 focus-within:ring-brand-yellow-500/50">
                <div className="rounded-[20px] bg-white flex items-center px-4 py-1 border border-brand-blue-50/50">
                  <Search className="w-5 h-5 text-[#0950F6] shrink-0 mr-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    placeholder="Ej: ¿cuánto tarda un envío a Batán?"
                    className="w-full h-11 bg-transparent text-brand-ink font-sans text-sm sm:text-base focus:outline-none placeholder:text-brand-blue-400"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="min-w-[44px] min-h-[44px] flex items-center justify-center text-xs font-subheading uppercase text-brand-blue-400 hover:text-[#0950F6] px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0950F6]"
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
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-brand-blue-50 text-brand-ink hover:text-[#0950F6] transition-colors group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0950F6]"
                      >
                        <span className="font-sans text-xs sm:text-sm">{item.text}</span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-subheading font-bold uppercase text-[#0950F6] bg-brand-blue-50 px-2 py-0.5 rounded-md">
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
              <span className="text-xs font-subheading uppercase tracking-wider text-white/80 font-bold mr-1">
                TEMAS:
              </span>
              {CATEGORY_CHIPS.map((cat) => {
                const IconComp = cat.icon;
                return (
                  <a
                    key={cat.name}
                    href="#faq-accordion"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-brand-yellow-500 hover:text-[#052C87] border border-white/20 text-white text-xs font-subheading uppercase tracking-wider font-bold transition-all shadow-glow-yellow min-h-[44px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500"
                  >
                    <IconComp className="w-3.5 h-3.5 text-brand-yellow-500 group-hover:text-[#052C87]" />
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
            <div className="rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2 shadow-2xl">
              <div className="rounded-[20px] bg-[#052C87] p-6 sm:p-7 border border-white/10 shadow-sm relative overflow-hidden space-y-5 text-white">
                {/* Accent line top */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-yellow-500 via-white to-brand-yellow-400" />

                {/* Header */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="font-subheading text-[10px] uppercase tracking-wider text-brand-yellow-500 font-bold block">
                      PREGUNTAS TOP MDQ
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-white leading-none mt-0.5">
                      Respuestas Rápidas
                    </h3>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow-500 animate-pulse shadow-glow-yellow" />
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
                            ? 'bg-white/15 border-brand-yellow-500/50 shadow-2xs'
                            : 'bg-white/5 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                          className="w-full text-left p-3.5 flex items-center justify-between gap-3 min-h-[44px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500"
                        >
                          <span className="font-subheading text-xs sm:text-sm uppercase tracking-wide text-white font-bold leading-snug">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-white shrink-0 transition-transform duration-200 ${
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
                              <div className="px-3.5 pb-3.5 pt-1 text-xs font-sans text-white/90 leading-relaxed border-t border-white/10">
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
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-sans text-white/90 font-medium">
                      ¿No encontrás tu duda?
                    </span>
                    <span className="font-mono text-[11px] text-brand-yellow-500 font-bold">
                      Respuesta &lt; 5 min
                    </span>
                  </div>

                  <a
                    href="https://wa.me/542236602699?text=Hola!%20Tengo%20una%20duda%20sobre%20los%20env%C3%ADos%20de%20Envíos%20DosRuedas%20en%20Mar%20del%20Plata."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group min-h-[52px] w-full px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg font-subheading tracking-wider uppercase text-sm font-bold rounded-full flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.99] cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
                  >
                    <span>Preguntanos por WhatsApp</span>
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                      <MessageCircle className="h-4 w-4 text-white" />
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
