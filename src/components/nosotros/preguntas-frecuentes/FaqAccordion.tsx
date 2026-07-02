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
    <section id="faq-accordion" className="py-16 bg-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-50/40 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-yellow-50/40 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Tab Selection Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
                className={`px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider font-subheading flex items-center gap-2.5 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                }`}
              >
                <Icon className={`h-4.5 w-4.5 ${isActive ? 'text-brand-yellow' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Accordion List Wrapper */}
        <div className="space-y-4 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {categories[activeCategory].items.map((item, idx) => {
                const isExpanded = expandedIndex === idx;

                return (
                  <div
                    key={item.question}
                    className={`rounded-3xl overflow-hidden transition-all duration-300 border ${
                      isExpanded 
                        ? 'bg-white border-brand-blue/30 shadow-md ring-2 ring-brand-blue/5' 
                        : 'bg-slate-50/70 border-slate-200 hover:border-brand-blue/15 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    {/* Collapsible Header Click Area */}
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-xl shrink-0 ${isExpanded ? 'bg-brand-yellow text-brand-blue' : 'bg-brand-blue/10 text-brand-blue'}`}>
                          <HelpCircle className="h-4.5 w-4.5 animate-pulse" />
                        </div>
                        <h4 className={`text-sm sm:text-base font-subheading font-semibold leading-tight transition-colors ${isExpanded ? 'text-brand-blue' : 'text-slate-900'}`}>
                          {item.question}
                        </h4>
                      </div>
                      <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-brand-blue text-white' : 'bg-slate-200/50 text-slate-500'}`}>
                        <ChevronDown className="h-4 w-4" />
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
                          <div className="px-6 pb-7 pl-16 pr-8 border-t border-slate-100 pt-4 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
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
