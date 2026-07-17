'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Truck, Coins } from 'lucide-react';

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
  const [activeCategory, setActiveCategory] = useState<string>('envios');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categories: FaqCategories = {
    envios: {
      label: 'Preguntas sobre Envíos',
      icon: Truck,
      items: [
        {
          question: '¿Qué tipo de envíos realizan?',
          answer: 'Realizamos todo tipo de mensajería y distribución local: Envíos Express (prioritarios en el acto), Envíos LowCost (económicos programados) y entregas de MercadoLibre Flex.',
        },
        {
          question: '¿Cuáles son las zonas de cobertura?',
          answer: 'Ofrecemos cobertura total dentro del ejido urbano de Mar del Plata, organizados de forma eficiente para llegar a cada rincón de la ciudad.',
        },
        {
          question: '¿Cuáles son los límites de tamaño y peso sin cobros adicionales?',
          answer: 'Transportamos paquetes ligeros de hasta 5 kg con medidas de 40x40x30 cm. Esto garantiza la agilidad del tránsito urbano y resguarda la seguridad vial de nuestros repartidores. Bultos que excedan estas dimensiones pueden cotizarse de manera especial.',
        },
        {
          question: '¿Cómo funciona el servicio de MercadoLibre Flex?',
          answer: 'Realizamos tus entregas en el mismo día (Same-Day) en Mar del Plata para que mantengas tu reputación en verde. Retiramos tus paquetes y los entregamos de forma segura.',
        },
      ],
    },
    pagos: {
      label: 'Preguntas sobre Pagos',
      icon: Coins,
      items: [
        {
          question: '¿Cómo se manejan los cobros de los servicios?',
          answer: 'Ofrecemos opciones de facturación y cobros semanales, quincenales o mensuales para empresas y emprendedores. Factura tipo C disponible.',
        },
        {
          question: '¿Realizan entregas a Contrarreembolso?',
          answer: 'Sí, realizamos entregas con cobranza contrareembolso en el domicilio del comprador en Mar del Plata, rindiendo el dinero recolectado de forma segura y veloz.',
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
      {/* Background gradients or subtle clean styling */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-blue-50/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-yellow-50/20 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Tab Selection Filter (Clean Design System Control) */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.keys(categories).map((catKey) => {
            const cat = categories[catKey];
            const Icon = cat.icon;
            const isActive = activeCategory === catKey;

            return (
              <motion.button
                key={catKey}
                onClick={() => handleCategoryChange(catKey)}
                whileHover={{ scale: 1.02, y: -0.5 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-full text-base font-subheading uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer border ${isActive
                    ? 'bg-brand-blue-700 text-white border-brand-blue-700 shadow-sm'
                    : 'bg-brand-blue-50 text-brand-blue-700 border-brand-blue-100 hover:bg-brand-blue-100/60'
                  }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-brand-yellow-500' : 'text-brand-blue-400'}`} />
                <span>{cat.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Accordion List Wrapper */}
        <div className="min-h-[300px] border-t border-brand-blue-100/80">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="divide-y divide-brand-blue-100/80"
            >
              {categories[activeCategory].items.map((item, idx) => {
                const isExpanded = expandedIndex === idx;

                return (
                  <div
                    key={item.question}
                    className="transition-colors duration-200"
                  >
                    {/* Collapsible Header Click Area */}
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="w-full py-5 text-left flex items-center justify-between gap-4 cursor-pointer group"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg shrink-0 transition-colors duration-200 ${isExpanded ? 'text-brand-blue-700 bg-brand-blue-50' : 'text-brand-blue-400 bg-transparent'}`}>
                          <HelpCircle className="h-5 w-5 shrink-0" />
                        </div>
                        <h4 className={`text-base sm:text-lg font-sans font-semibold leading-tight transition-colors ${isExpanded ? 'text-brand-blue-700' : 'text-brand-blue-500 group-hover:text-brand-blue-700'}`}>
                          {item.question}
                        </h4>
                      </div>
                      
                      {/* Micro-indicator: turns yellow on active/expanded state */}
                      <div className={`p-1.5 rounded-full shrink-0 transition-all duration-300 ${isExpanded ? 'rotate-180 text-brand-yellow-500 bg-brand-blue-50' : 'text-brand-blue-300 group-hover:text-brand-yellow-500'}`}>
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </button>

                    {/* Smooth Expandable Answer Body */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                          <div className="pl-13 pr-4 pb-5 text-sm sm:text-base text-brand-blue-600/90 font-sans leading-relaxed">
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
