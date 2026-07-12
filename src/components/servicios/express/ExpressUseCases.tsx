'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, HeartPulse, Briefcase, Gift, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function ExpressUseCases() {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const cases = [
    {
      title: 'Documentos',
      desc: 'Contratos, documentos legales, certificados y papeles críticos que no pueden esperar.',
      examples: ['Documentos notariales y escrituras', 'Contratos comerciales firmados', 'Certificados médicos y habilitaciones'],
      icon: FileText,
      badge: 'LEGAL & TRÁMITES',
    },
    {
      title: 'Salud',
      desc: 'Medicamentos, análisis médicos y suministros de salud con prioridad absoluta de entrega.',
      examples: ['Medicamentos especiales recetados', 'Resultados de laboratorio clínico', 'Suministros e insumos médicos urgentes'],
      icon: HeartPulse,
      badge: 'URGENCIA MÉDICA',
    },
    {
      title: 'Negocios',
      desc: 'Entregas comerciales que no pueden retrasarse sin afectar tus operaciones diarias.',
      examples: ['Repuestos y piezas críticas de maquinaria', 'Muestras comerciales prioritarias', 'Insumos y productos perecederos de stock'],
      icon: Briefcase,
      badge: 'B2B & PyMEs',
    },
    {
      title: 'Regalos',
      desc: 'Sorpresas y presentes especiales que deben llegar en un rango horario sumamente acotado.',
      examples: ['Regalos sorpresa de cumpleaños', 'Desayunos, meriendas y catering a domicilio', 'Comida especial y repostería artesanal'],
      icon: Gift,
      badge: 'REGALERÍA & EVENTOS',
    },
  ];

  const toggleTab = (idx: number) => {
    setActiveTab(activeTab === idx ? null : idx);
  };

  return (
    <section 
      id="express-use-cases" 
      className="py-24 bg-gray-50 relative z-10 overflow-hidden border-t-4 border-brand-blue"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-blue-50/50 blur-3xl -z-10 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-yellow-50/40 blur-3xl -z-10 -translate-y-1/2" />

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      >
        
        {/* Header segment */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-yellow shadow-[2px_2px_0px_rgba(0,39,124,0.2)]">
            CASOS DE USO
          </span>
          <h2 className="text-brand-blue text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight border-l-4 border-brand-yellow pl-4 inline-block">
            ¿CUÁNDO NECESITÁS EXPRESS?
          </h2>
          <p className="text-slate-600 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Situaciones cotidianas y corporativas donde cada minuto cuenta y la rapidez es fundamental.
          </p>
          <div className="h-2 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Interactive Case Columns/Accordions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((useCase, idx) => {
            const Icon = useCase.icon;
            const isOpen = activeTab === idx;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between text-left ${
                  isOpen 
                    ? 'bg-slate-900 text-white border-brand-yellow shadow-[6px_6px_0px_var(--color-brand-yellow)]'
                    : 'bg-white text-brand-blue border-brand-blue/20 hover:border-brand-blue hover:shadow-[4px_4px_0px_var(--color-brand-blue)] hover:translate-x-[2px] hover:translate-y-[2px]'
                }`}
              >
                <div className="p-6 sm:p-7 space-y-6">
                  {/* Icon & Badge Header */}
                  <div className="flex justify-between items-center">
                    <div className="p-3 rounded-2xl w-fit border-2 border-brand-blue bg-brand-yellow text-brand-blue shadow-[2px_2px_0px_var(--color-brand-blue)]">
                      <Icon className="h-5.5 w-5.5 shrink-0" />
                    </div>
                    <span className={`text-[10px] font-subheading uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      isOpen ? 'bg-white/10 text-brand-yellow border-white/10' : 'bg-slate-200 text-slate-600 border-slate-300'
                    }`}>
                      {useCase.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display uppercase tracking-wide leading-none text-brand-blue">
                      {useCase.title}
                    </h3>
                    <p className={`text-sm font-sans leading-relaxed ${isOpen ? 'text-slate-300' : 'text-slate-600'}`}>
                      {useCase.desc}
                    </p>
                  </div>

                  {/* Toggle button for examples */}
                  <button
                    onClick={() => toggleTab(idx)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase font-subheading flex items-center justify-between border-2 transition-all cursor-pointer ${
                      isOpen 
                        ? 'bg-slate-800 text-brand-yellow border-brand-yellow hover:bg-slate-700' 
                        : 'bg-white text-brand-blue border-brand-blue hover:bg-slate-50'
                    }`}
                  >
                    <span className="pl-3.5">Ver Ejemplos</span>
                    <ChevronDown className={`h-4.5 w-4.5 shrink-0 pr-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-yellow' : 'text-brand-blue'}`} />
                  </button>

                  {/* Expandable/Collapsible list of examples */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 pt-4 border-t-2 border-white/10">
                          <p className="text-[10px] font-bold tracking-widest text-brand-yellow uppercase">DESPACHOS HABITUALES</p>
                          <ul className="space-y-2.5">
                            {useCase.examples.map((ex, exIdx) => (
                              <motion.li
                                key={ex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: exIdx * 0.08 }}
                                className="flex items-start gap-2 text-xs text-slate-300 font-sans"
                              >
                                <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
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
