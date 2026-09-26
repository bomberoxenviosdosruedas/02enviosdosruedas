'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Truck,
  Clock,
  CreditCard,
  ShieldCheck,
  ChevronDown,
  HelpCircle,
  Search,
  X,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';
import { FAQ_DATA, type FaqCategoryGroup, type FaqQuestion } from './faqData';

export { FAQ_DATA };
export type { FaqCategoryGroup, FaqQuestion };

const ICON_MAP = {
  Truck,
  Clock,
  CreditCard,
  ShieldCheck,
};

export function FaqCategories() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('servicios');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeGroup = FAQ_DATA.find((cat) => cat.id === activeCategoryId) || FAQ_DATA[0];
  const ActiveIcon = ICON_MAP[activeGroup.iconName];

  const handleCategorySelect = (id: string) => {
    setActiveCategoryId(id);
    setExpandedIndex(0);
    setSearchQuery('');
  };

  const handleToggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const searchResults = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return null;

    const results: { category: FaqCategoryGroup; question: FaqQuestion; originalIndex: number }[] = [];
    FAQ_DATA.forEach((cat) => {
      cat.questions.forEach((q, idx) => {
        if (q.question.toLowerCase().includes(query) || q.answer.toLowerCase().includes(query)) {
          results.push({ category: cat, question: q, originalIndex: idx });
        }
      });
    });
    return results;
  }, [searchQuery]);

  return (
    <section id="faq-categories" className="py-12 bg-brand-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <label htmlFor="faq-search-input" className="sr-only">
            Buscar en preguntas frecuentes
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-blue-700/60" />
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por palabra clave (ej: MercadoLibre, tarifas, Batán)..."
              className="w-full h-11 pl-12 pr-10 bg-white border-2 border-brand-blue-100 focus:border-brand-blue-700 rounded-xl text-sm font-sans text-brand-blue-700 placeholder:text-brand-blue-500 outline-none shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Limpiar búsqueda"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-brand-blue-700 hover:text-brand-blue-700/80 rounded-full cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Filter Grid */}
        {!searchQuery && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {FAQ_DATA.map((category) => {
              const Icon = ICON_MAP[category.iconName];
              const isActive = activeCategoryId === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategorySelect(category.id)}
                  aria-pressed={isActive}
                  className={cn(
                    'group relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 min-h-[52px] cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue-700/50',
                    isActive
                      ? 'bg-brand-blue-700 border-brand-blue-700 text-white shadow-lg scale-[1.02] transform -rotate-1'
                      : 'bg-white border-brand-blue-100 text-brand-blue-700 hover:border-brand-blue-700 hover:bg-brand-blue-50/40'
                  )}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={cn(
                        'w-10 h-10 rounded-xl flex items-center justify-center transition-colors',
                        isActive
                          ? 'bg-brand-yellow-500 text-brand-blue-900 shadow-glow-yellow'
                          : 'bg-brand-blue-50 text-brand-blue-700 group-hover:bg-brand-blue-100'
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={cn(
                        'text-xs font-mono font-bold px-2.5 py-0.5 rounded-full tabular-nums',
                        isActive
                          ? 'bg-white/20 text-brand-yellow-500'
                          : 'bg-brand-blue-50 text-brand-blue-700'
                      )}
                    >
                      {category.questions.length} Qs
                    </span>
                  </div>

                  <h3
                    className={cn(
                      'font-subheading text-lg font-bold tracking-wide uppercase leading-snug mb-1',
                      isActive ? 'text-white' : 'text-brand-blue-700'
                    )}
                  >
                    {category.label}
                  </h3>
                  <p
                    className={cn(
                      'text-xs line-clamp-2 leading-relaxed font-sans',
                      isActive ? 'text-white/80' : 'text-brand-blue-700/80'
                    )}
                  >
                    {category.description}
                  </p>
                </button>
              );
            })}
          </div>
        )}

        {/* Double bezel container for category questions OR search results */}
        <DoubleBezelCard>
          <div className="space-y-6">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-brand-blue-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow-500 text-brand-blue-900 flex items-center justify-center shrink-0">
                  {searchResults ? <Search className="w-5 h-5" /> : <ActiveIcon className="w-5 h-5" />}
                </div>
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl text-brand-blue-700 uppercase tracking-tight">
                    {searchResults ? `Resultados de búsqueda (${searchResults.length})` : activeGroup.label}
                  </h2>
                  <p className="text-xs sm:text-sm text-brand-blue-700/80 font-sans">
                    {searchResults
                      ? `Mostrando coincidencias para "${searchQuery}" en todas las secciones`
                      : activeGroup.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-blue-700 self-start sm:self-center bg-brand-blue-50 px-3 py-1.5 rounded-full border border-brand-blue-100">
                <Sparkles className="w-3.5 h-3.5 text-brand-yellow-500" />
                <span className="tabular-nums">Mar del Plata 2026</span>
              </div>
            </div>

            {/* If Search has no results */}
            {searchResults && searchResults.length === 0 && (
              <div className="text-center py-10">
                <HelpCircle className="w-10 h-10 text-brand-blue-700/40 mx-auto mb-2" />
                <h3 className="font-subheading text-lg uppercase font-bold text-brand-blue-700">
                  No encontramos respuestas exactas para esa búsqueda
                </h3>
                <p className="text-sm font-sans text-brand-blue-700/80 max-w-md mx-auto mt-1 mb-4">
                  Despejá tu consulta inmediatamente con un operador humano en nuestro WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 rounded-xl bg-brand-blue-50 text-brand-blue-700 font-subheading uppercase text-xs font-bold hover:bg-brand-blue-100 cursor-pointer"
                >
                  Ver todas las preguntas
                </button>
              </div>
            )}

            {/* Questions Accordion List */}
            <div className="space-y-3">
              {(searchResults ? searchResults.map((r) => r.question) : activeGroup.questions).map(
                (faq, index) => {
                  const isExpanded = expandedIndex === index;
                  const questionId = `faq-q-${index}`;
                  const answerId = `faq-a-${index}`;

                  return (
                    <div
                      key={faq.question}
                      className={cn(
                        'border rounded-xl transition-all duration-200 overflow-hidden',
                        isExpanded
                          ? 'border-brand-blue-700 bg-brand-blue-50/40 shadow-xs'
                          : 'border-brand-blue-100 bg-white hover:border-brand-blue-700/50'
                      )}
                    >
                      <button
                        type="button"
                        id={questionId}
                        aria-expanded={isExpanded}
                        aria-controls={answerId}
                        onClick={() => handleToggle(index)}
                        className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-700 focus-visible:ring-inset"
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div
                            className={cn(
                              'p-1.5 rounded-lg shrink-0 mt-0.5 transition-colors',
                              isExpanded
                                ? 'bg-brand-blue-700 text-brand-yellow-500'
                                : 'bg-brand-blue-50 text-brand-blue-700 group-hover:bg-brand-blue-100'
                            )}
                          >
                            <HelpCircle className="w-4 h-4 shrink-0" />
                          </div>
                          <h3
                            className={cn(
                              'text-base sm:text-lg font-subheading font-bold uppercase tracking-wide leading-snug transition-colors',
                              isExpanded
                                ? 'text-brand-blue-700'
                                : 'text-brand-blue-700/90 group-hover:text-brand-blue-700'
                            )}
                          >
                            {faq.question}
                          </h3>
                        </div>

                        <div
                          className={cn(
                            'p-1.5 rounded-full shrink-0 transition-transform duration-300 mt-0.5',
                            isExpanded
                              ? 'rotate-180 bg-brand-yellow-500 text-brand-blue-900'
                              : 'bg-brand-blue-50 text-brand-blue-700 group-hover:bg-brand-blue-100'
                          )}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            id={answerId}
                            role="region"
                            aria-labelledby={questionId}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
                          >
                            <div className="px-4 pb-5 pt-1 sm:px-5 sm:pb-6 text-sm sm:text-base text-brand-blue-700/90 font-sans leading-relaxed border-t border-brand-blue-100 bg-white/70">
                              <p>{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </DoubleBezelCard>
      </div>
    </section>
  );
}

export default FaqCategories;