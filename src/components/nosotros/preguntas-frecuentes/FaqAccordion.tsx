'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Shield, MessageSquare, Truck, Coins } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategories {
  [key: string]: {
    label: string;
    icon: React.ComponentType<any>;
    items: FaqItem[];
  };
}

export default function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState<string>('generales');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categories: FaqCategories = {
    generales: {
      label: 'Servicios Generales',
      icon: Truck,
      items: [
        {
          question: '¿Qué tipo de envíos realizan?',
          answer: 'Transportamos de todo en moto: mandados rápidos, trámites urgentes, paquetes de e-commerce, delivery gastronómico y servicios completos de cadetería comercial en el día.',
        },
        {
          question: '¿Cuáles son las zonas de cobertura? ¿Cubren toda la ciudad/región?',
          answer: 'Ofrecemos cobertura total dentro del ejido urbano de Mar del Plata, zonificado desde la Zona 1 (radio céntrico tradicional) hasta los límites de la ciudad en Zona 4. Para destinos en Zona 5 (afuera del ejido urbano o de larga distancia), realizamos cotizaciones especiales de alta precisión basadas en kilometraje recorrido.',
        },
        {
          question: '¿Realizan entregas a Contrarreembolso?',
          answer: 'Sí, por supuesto. Gestionamos cobranzas de tipo contra-reembolso en efectivo en el domicilio del comprador, realizando rendiciones de dinero sumamente rápidas y seguras para clientes comerciales y PyMEs adheridas.',
        },
      ],
    },
    precios: {
      label: 'Precios y Pagos',
      icon: Coins,
      items: [
        {
          question: '¿Cuáles son los límites de carga?',
          answer: 'Llevamos bultos y paquetes ligeros en moto de hasta 5 kg de peso físico, con medidas máximas recomendadas de 40x40x30 cm. Esto nos permite garantizar de manera óptima la seguridad vial del conductor, la agilidad del tránsito y la integridad absoluta de tu paquete.',
        },
        {
          question: '¿Trabajan con empresas o solo con particulares?',
          answer: 'Trabajamos con ambos por igual. Contamos con esquemas especiales de Cuentas Corrientes Flexibles con facturación mensual simplificada y consolidada para PyMEs, e-commerce y empresas locales con despachos diarios o semanales.',
        },
      ],
    },
    proceso: {
      label: 'Proceso de Envío',
      icon: MessageSquare,
      items: [
        {
          question: '¿Cómo realizo el seguimiento de mi envío?',
          answer: 'Contamos con notificaciones automatizadas de estado y seguimiento centralizado en tiempo real a través de WhatsApp. Ante cualquier duda, nuestro equipo te asiste en directo.',
        },
        {
          question: '¿Cómo puedo solicitar un servicio de mensajería?',
          answer: 'Podés solicitar tu despacho de forma inmediata escribiéndonos a nuestro canal oficial de WhatsApp o de manera automatizada utilizando nuestros cotizadores web inteligentes en tiempo real (tanto para servicios Express como LowCost).',
        },
        {
          question: '¿Cuáles son sus horarios de atención/servicio?',
          answer: 'Nuestros horarios de atención activa son de Lunes a Viernes de 9:00 a 18:00 hs, y los Sábados de 10:00 a 15:00 hs. Los Domingos permanecemos cerrados para recarga de energías.',
        },
      ],
    },
  };

  const handleCategoryChange = (catKey: string) => {
    setActiveCategory(catKey);
    setExpandedIndex(null);
  };

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="faq-accordion" className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-50/40 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-yellow-50/40 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Tab Selection Filter (Neo-Brutalist Buttons) */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.keys(categories).map((catKey) => {
            const cat = categories[catKey];
            const Icon = cat.icon;
            const isActive = activeCategory === catKey;

            return (
              <motion.button
                key={catKey}
                onClick={() => handleCategoryChange(catKey)}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className={`px-6 py-3.5 rounded-2xl text-sm font-subheading uppercase tracking-wider flex items-center gap-2.5 transition-all cursor-pointer border-2 ${
                  isActive
                    ? 'bg-brand-yellow text-brand-blue border-brand-blue shadow-[4px_4px_0px_#0636A5]'
                    : 'bg-white text-slate-700 border-slate-200 shadow-[2px_2px_0px_rgba(0,0,0,0.05)] hover:border-brand-blue hover:shadow-[3px_3px_0px_#0636A5]'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-brand-blue' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Accordion List Wrapper */}
        <div className="space-y-6 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {categories[activeCategory].items.map((item, idx) => {
                const isExpanded = expandedIndex === idx;

                return (
                  <div
                    key={item.question}
                    className={`rounded-3xl overflow-hidden transition-all duration-300 border-2 ${
                      isExpanded 
                        ? 'bg-white border-brand-blue shadow-[6px_6px_0px_#FFEC01]' 
                        : 'bg-slate-50 border-brand-blue/20 shadow-[4px_4px_0px_rgba(6,54,165,0.08)] hover:border-brand-blue hover:shadow-[4px_4px_0px_#0636A5] hover:translate-x-[2px] hover:translate-y-[2px]'
                    }`}
                  >
                    {/* Collapsible Header Click Area */}
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2.5 rounded-xl border-2 shrink-0 ${isExpanded ? 'bg-brand-yellow text-brand-blue border-brand-blue' : 'bg-brand-blue/10 text-brand-blue border-brand-blue/20'}`}>
                          <HelpCircle className="h-5 w-5 shrink-0" />
                        </div>
                        <h4 className={`text-base sm:text-lg font-sans font-bold leading-tight transition-colors ${isExpanded ? 'text-brand-blue' : 'text-slate-900'}`}>
                          {item.question}
                        </h4>
                      </div>
                      <div className={`p-2 rounded-full border-2 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-brand-blue text-brand-yellow border-brand-blue' : 'bg-slate-200/50 text-slate-500 border-slate-300'}`}>
                        <ChevronDown className="h-4.5 w-4.5" />
                      </div>
                    </button>

                    {/* Smooth Expandable Answer Body */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-7 pl-16 pr-8 border-t-2 border-slate-100 pt-4 text-sm sm:text-base text-slate-650 font-sans leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

