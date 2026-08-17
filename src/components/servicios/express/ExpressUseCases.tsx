'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Package, Clock, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function ExpressUseCases() {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const cases = [
    {
      title: 'Envíos de documentación',
      desc: 'Contratos, documentos legales, escrituras y trámites críticos que requieren custodia y entrega inmediata.',
      examples: ['Documentos notariales y escrituras', 'Contratos comerciales firmados', 'Certificados médicos y habilitaciones oficiales'],
      icon: FileText,
      badge: 'LEGAL & TRÁMITES',
    },
    {
      title: 'Distribución de insumos',
      desc: 'Despacho urgente de repuestos mecánicos, insumos gastronómicos, tecnología y suministros comerciales.',
      examples: ['Repuestos y piezas mecánicas críticas', 'Insumos de stock para locales y gastronomía', 'Suministros médicos prioritarios'],
      icon: Package,
      badge: 'INSUMOS & REPUESTOS',
    },
    {
      title: 'Entregas con horario estricto',
      desc: 'Operaciones que necesitan entregarse con altísima puntualidad dentro de una franja horaria restringida.',
      examples: ['Entregas en turnos específicos de oficina', 'Desayunos, regalos y catering para eventos', 'Entregas coordinadas en obras y talleres'],
      icon: Clock,
      badge: 'FRANJA HORARIA EXACTA',
    },
  ];

  const toggleTab = (idx: number) => {
    setActiveTab(activeTab === idx ? null : idx);
  };

  return (
    <section
      id="express-use-cases"
      className="py-24 bg-brand-white-50 relative z-10 overflow-hidden border-t-2 border-brand-blue-100"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-blue-50/50 blur-3xl -z-10 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-brand-yellow-50/40 blur-3xl -z-10 -translate-y-1/2 pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
        }}
      >

        {/* Header segment */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-blue-700 text-brand-yellow-500 rounded-full text-xs font-subheading font-bold uppercase tracking-widest inline-block border border-brand-blue-700 shadow-sm">
            Casos de Uso Reales
          </span>
          <h2 className="text-brand-blue-700 text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none">
            ¿CUÁNDO NECESITÁS EXPRESS?
          </h2>
          <p className="text-brand-blue-ink text-base sm:text-lg font-sans max-w-lg mx-auto leading-relaxed">
            Situaciones cotidianas y corporativas donde cada minuto cuenta y la puntualidad es innegociable.
          </p>
          <div className="h-1.5 w-16 bg-brand-yellow-500 mx-auto rounded-full" />
        </div>

        {/* Interactive Case Columns with Double Bezel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((useCase, idx) => {
            const Icon = useCase.icon;
            const isOpen = activeTab === idx;

            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-float hover:shadow-antigravity-deep hover:border-brand-blue-300 transition-all duration-300 flex flex-col group cursor-default"
              >
                <div className={`double-bezel-inner p-6 sm:p-7 space-y-6 h-full flex flex-col justify-between text-left rounded-xl transition-colors duration-300 ${
                  isOpen
                    ? 'bg-brand-blue-700 text-white border border-brand-blue-600 shadow-md'
                    : 'bg-white text-brand-blue-700 border border-brand-blue-50/50 shadow-sm'
                }`}>
                  {/* Icon & Badge Header */}
                  <div className="flex justify-between items-center">
                    <div className={`p-3 rounded-xl border flex items-center justify-center shrink-0 ${
                      isOpen
                        ? 'bg-brand-yellow-500 text-brand-blue-900 border-brand-yellow-500 shadow-sm'
                        : 'bg-brand-blue-700 text-brand-yellow-500 border-brand-blue-700 shadow-sm'
                    }`}>
                      <Icon className="h-6 w-6 shrink-0" />
                    </div>
                    <span className={`text-[10px] font-subheading font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      isOpen
                        ? 'bg-white/10 text-brand-yellow-500 border-white/20'
                        : 'bg-brand-blue-50 text-brand-blue-700 border-brand-blue-200'
                    }`}>
                      {useCase.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className={`text-2xl font-display uppercase tracking-wide leading-tight ${
                      isOpen ? 'text-white' : 'text-brand-blue-700'
                    }`}>
                      {useCase.title}
                    </h3>
                    <p className={`text-sm font-sans leading-relaxed ${
                      isOpen ? 'text-brand-blue-100' : 'text-brand-blue-ink/80'
                    }`}>
                      {useCase.desc}
                    </p>
                  </div>

                  {/* Toggle button for examples */}
                  <button
                    onClick={() => toggleTab(idx)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold tracking-wider uppercase font-subheading flex items-center justify-between border transition-all cursor-pointer ${
                      isOpen
                        ? 'bg-brand-yellow-500 text-brand-blue-900 border-brand-yellow-500 hover:bg-brand-yellow-400'
                        : 'bg-brand-blue-50 text-brand-blue-700 border-brand-blue-200 hover:bg-brand-blue-100'
                    }`}
                  >
                    <span>Ver Ejemplos</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-blue-900' : 'text-brand-blue-700'
                    }`} />
                  </button>

                  {/* Expandable list of examples */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 pt-4 border-t border-white/15">
                          <p className="text-[10px] font-bold tracking-widest text-brand-yellow-500 uppercase font-mono">
                            Despachos Habituales
                          </p>
                          <ul className="space-y-2">
                            {useCase.examples.map((ex, exIdx) => (
                              <motion.li
                                key={ex}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: exIdx * 0.06 }}
                                className="flex items-start gap-2 text-xs text-brand-blue-50 font-sans"
                              >
                                <CheckCircle2 className="h-4 w-4 text-brand-yellow-500 shrink-0 mt-0.5" />
                                <span className="leading-tight">{ex}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}