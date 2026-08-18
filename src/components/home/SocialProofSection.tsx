'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  TrendingUp,
  Users,
  HeartHandshake,
  ExternalLink,
  CheckCircle2,
  MessageSquareQuote,
  Sparkles,
  ChevronDown,
  Quote,
  Flame,
  Building2,
  Bike,
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export interface GoogleReview {
  id: string;
  author: string;
  badge?: string;
  category: 'destacadas' | 'express' | 'empresas' | 'humanos';
  categoryLabel: string;
  rating: number;
  timeAgo: string;
  quoteHighlight: string;
  text: string;
  ownerResponse?: string;
  variant: 'dark-blue' | 'yellow-accent' | 'frost-blue' | 'clean-white';
}

const REVIEWS_DATA: GoogleReview[] = [
  {
    id: 'sol-r',
    author: 'Sol R',
    badge: 'Local Guide',
    category: 'destacadas',
    categoryLabel: 'Encargo Especial',
    rating: 5,
    timeAgo: 'Hace 26 semanas',
    quoteHighlight: '“Mi héroe logístico por segundo año consecutivo”',
    text: 'Matías de Envíos DosRuedas se convirtió en mi héroe logístico 🙌. Tenía un encargo especial: comprar alfajores Havanna de temporada en MDQ, embalarlos con mimo y enviármelos para que viajen conmigo hasta Europa. Rapidez, comunicación clara y calidez humana.',
    ownerResponse: '¡Qué gran alegría leer tu mensaje, Sol! Nos enorgullece enormemente acompañarte y garantizar que tus encargos lleguen a tiempo.',
    variant: 'yellow-accent',
  },
  {
    id: 'karen-herrera',
    author: 'Karen Herrera',
    category: 'express',
    categoryLabel: 'Resolución Inmediata',
    rating: 5,
    timeAgo: 'Hace 13 semanas',
    quoteHighlight: '“Resolvieron mi problema con la mejor predisposición”',
    text: 'Excelente el servicio, rápidos, muy atentos, resolvieron mi problema con la mejor predisposición, los recomiendo ampliamente.',
    ownerResponse: '¡Muchas gracias por tus palabras, Karen! Nos alegra saber que pudimos resolver tu envío en el acto.',
    variant: 'dark-blue',
  },
  {
    id: 'agustin-torres',
    author: 'Agustin Torres',
    category: 'empresas',
    categoryLabel: 'Tiendas & Comercios',
    rating: 5,
    timeAgo: 'Hace 48 semanas',
    quoteHighlight: '“Impecable para llevar pedidos a nuestros clientes”',
    text: 'Lo usé varias veces para llevar pedidos a nuestros clientes. Impecable el servicio. Además hacen depósitos en cajeros sin problemas. ¡Unos genios!',
    variant: 'frost-blue',
  },
  {
    id: 'alexis-bogarin',
    author: 'Alexis Bogarin',
    category: 'destacadas',
    categoryLabel: 'Calidad Premium',
    rating: 5,
    timeAgo: 'Hace 37 semanas',
    quoteHighlight: '“El mejor servicio premium de la zona”',
    text: 'El mejor servicio premium de la zona en Mar del Plata. 100% recomendable por puntualidad y trato.',
    variant: 'dark-blue',
  },
  {
    id: 'lorenzo-elizagoyen',
    author: 'Lorenzo Elizagoyen',
    category: 'express',
    categoryLabel: 'Seguridad & Rapidez',
    rating: 5,
    timeAgo: 'Hace 32 semanas',
    quoteHighlight: '“Atención de primera, rápido, confiable y seguro”',
    text: 'Excelente servicio, atención de primera, rápido, confiable y seguro. Recomendado 100% para envíos puntuales.',
    ownerResponse: '¡Gracias Lorenzo! Trabajamos día a día para brindar una mensajería rápida, segura y confiable.',
    variant: 'clean-white',
  },
  {
    id: 'ezequiel-monson',
    author: 'Ezequiel Monson',
    category: 'humanos',
    categoryLabel: 'Cara Humana',
    rating: 5,
    timeAgo: 'Hace 47 semanas',
    quoteHighlight: '“Muy buenos humanos, total confianza”',
    text: 'Muy buenos humanos 😊. Servicio cálido, responsable y de total confianza para cualquier trámite o paquete.',
    variant: 'yellow-accent',
  },
  {
    id: 'emiliano-garri',
    author: 'Emiliano Garri',
    category: 'destacadas',
    categoryLabel: 'Líder en MDQ',
    rating: 5,
    timeAgo: 'Hace 48 semanas',
    quoteHighlight: '“¡La mejor mensajería de MDP!”',
    text: '¡La mejor mensajería de Mar del Plata! Cumplen siempre con lo prometido y no te dejan tirado.',
    variant: 'frost-blue',
  },
  {
    id: 'nahuari',
    author: 'NahuAri',
    category: 'empresas',
    categoryLabel: 'Compromiso Total',
    rating: 5,
    timeAgo: 'Hace 48 semanas',
    quoteHighlight: '“10 de 10, responsables por sobre todas las cosas”',
    text: '10 de 10 muy buenos en lo que hacen, responsables por sobre todas las cosas, súper recomendable para tu negocio.',
    variant: 'clean-white',
  },
  {
    id: 'ignacio',
    author: 'Ignacio',
    category: 'express',
    categoryLabel: 'Cadetería Ágil',
    rating: 5,
    timeAgo: 'Hace 39 semanas',
    quoteHighlight: '“Buena atención y rapidez en la entrega”',
    text: 'Recomendado lo de estos muchachos. Buena atención y rapidez en la entrega en toda la ciudad.',
    variant: 'frost-blue',
  },
  {
    id: 'daniel-gonzalez',
    author: 'Daniel Gonzalez',
    badge: 'Local Guide',
    category: 'humanos',
    categoryLabel: 'Confianza Local',
    rating: 5,
    timeAgo: 'Hace 48 semanas',
    quoteHighlight: '“Excelente servicio muy responsables”',
    text: 'Excelente servicio muy responsables en todo momento.',
    variant: 'clean-white',
  },
  {
    id: 'sergio-rivas',
    author: 'Sergio Rivas',
    category: 'express',
    categoryLabel: 'Puntualidad',
    rating: 5,
    timeAgo: 'Hace 39 semanas',
    quoteHighlight: '“Calidad y puntualidad garantizada”',
    text: 'Excelente servicio calidad y puntualidad en cada entrega.',
    variant: 'dark-blue',
  },
  {
    id: 'ana-veronica',
    author: 'Ana Verónica Abruza',
    category: 'empresas',
    categoryLabel: 'Eficiencia',
    rating: 5,
    timeAgo: 'Hace 39 semanas',
    quoteHighlight: '“Confiable y eficiente”',
    text: 'Confiable y eficiente. Respuesta inmediata para nuestros envíos comerciales.',
    variant: 'yellow-accent',
  },
];

const CATEGORIES = [
  { id: 'todas', label: 'Todas las Reseñas', icon: Sparkles },
  { id: 'destacadas', label: 'Destacadas', icon: Flame },
  { id: 'express', label: 'Envíos Express & Flex', icon: Bike },
  { id: 'empresas', label: 'Comercios & PyMEs', icon: Building2 },
  { id: 'humanos', label: 'Cara Humana', icon: HeartHandshake },
];

export default function SocialProofSection() {
  const [activeCategory, setActiveCategory] = useState<string>('todas');
  const [expandedReviewId, setExpandedReviewId] = useState<string | null>(null);

  const filteredReviews =
    activeCategory === 'todas'
      ? REVIEWS_DATA
      : REVIEWS_DATA.filter((r) => r.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedReviewId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="social-proof"
      className="py-24 bg-gradient-to-b from-brand-white-50 via-brand-blue-50/40 to-brand-white-50 relative z-10 border-y border-brand-blue-100 overflow-hidden"
    >
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-yellow-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-xs font-subheading font-bold tracking-widest uppercase shadow-sm mb-4 border border-brand-yellow-400">
            <Star className="w-3.5 h-3.5 fill-brand-blue-900" />
            <span>5.0 / 5.0 en Google Maps · Calificación Perfecta</span>
          </div>

          <h2 className="text-brand-blue-700 text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.95] mb-4">
            Reseñas Reales de Mar del Plata
          </h2>

          <p className="text-brand-blue-600/90 font-sans text-base sm:text-lg max-w-2xl mx-auto">
            Descubrí lo que dicen clientes, comercios, vecinos y emprendedores sobre nuestra flota propia y atención directa.
          </p>
        </div>

        {/* Top 3 Interactive Metrics Strips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {/* Card 1: 5.0 Rating */}
          <div className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl group shadow-sm hover:shadow-antigravity-deep transition-all">
            <div className="double-bezel-inner bg-white p-6 rounded-xl border border-brand-blue-50/50 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-yellow-500 text-brand-blue-900 flex items-center justify-center shrink-0 shadow-xs">
                <Star className="w-7 h-7 fill-brand-blue-900" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-brand-blue-700 tabular-nums">
                    5.0
                  </span>
                  <div className="flex text-brand-yellow-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="font-subheading text-xs uppercase tracking-wider text-brand-blue-500 font-bold">
                  15 Opiniones en Google Maps
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: 100% Flota Propia */}
          <div className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl group shadow-sm hover:shadow-antigravity-deep transition-all">
            <div className="double-bezel-inner bg-white p-6 rounded-xl border border-brand-blue-50/50 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue-700 text-brand-yellow-500 flex items-center justify-center shrink-0 shadow-xs">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <div>
                <span className="font-mono text-3xl sm:text-4xl font-bold text-brand-blue-700 tabular-nums">
                  100%
                </span>
                <p className="font-subheading text-xs uppercase tracking-wider text-brand-blue-500 font-bold">
                  Flota Propia Sin Tercerizar
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: +7 Años de Trayectoria */}
          <div className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl group shadow-sm hover:shadow-antigravity-deep transition-all">
            <div className="double-bezel-inner bg-white p-6 rounded-xl border border-brand-blue-50/50 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-yellow-500/20 text-brand-blue-700 flex items-center justify-center shrink-0 border border-brand-yellow-500/40">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div>
                <span className="font-mono text-3xl sm:text-4xl font-bold text-brand-blue-700 tabular-nums">
                  +7
                </span>
                <p className="font-subheading text-xs uppercase tracking-wider text-brand-blue-500 font-bold">
                  Años de Trayectoria en MDQ
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'px-4 py-2 rounded-full font-subheading text-xs sm:text-sm uppercase tracking-wider font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer border',
                  isActive
                    ? 'bg-brand-blue-700 text-white border-brand-blue-700 shadow-sm scale-105'
                    : 'bg-white text-brand-blue-700 border-brand-blue-100 hover:bg-brand-blue-50 hover:border-brand-blue-300'
                )}
              >
                <Icon className={cn('w-4 h-4', isActive ? 'text-brand-yellow-500' : 'text-brand-blue-500')} />
                <span>{cat.label}</span>
                {cat.id === 'todas' && (
                  <span className="text-[10px] font-mono bg-white/20 text-white px-1.5 py-0.2 rounded-full">
                    {REVIEWS_DATA.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Varied Backgrounds Bento / Grid of Reviews */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((review) => {
              const isExpanded = expandedReviewId === review.id;

              // Compute Card Background & Palette Variant according to Design System
              const isDarkBlue = review.variant === 'dark-blue';
              const isYellowAccent = review.variant === 'yellow-accent';
              const isFrostBlue = review.variant === 'frost-blue';

              return (
                <motion.div
                  layout
                  key={review.id}
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -5 }}
                  className={cn(
                    'double-bezel-outer p-2 sm:p-2.5 rounded-2xl transition-all duration-300 flex flex-col',
                    isDarkBlue && 'bg-brand-blue-900/90 border-brand-blue-700 shadow-md',
                    isYellowAccent && 'bg-brand-yellow-100/70 border-brand-yellow-300 shadow-md',
                    isFrostBlue && 'bg-brand-blue-100/60 border-brand-blue-200 shadow-sm',
                    !isDarkBlue && !isYellowAccent && !isFrostBlue && 'bg-brand-blue-50/80 border-brand-blue-100 shadow-sm'
                  )}
                >
                  <div
                    className={cn(
                      'double-bezel-inner p-5 sm:p-6 rounded-xl border relative flex flex-col justify-between h-full transition-colors',
                      isDarkBlue && 'bg-gradient-to-br from-brand-blue-800 to-brand-blue-950 text-white border-brand-blue-700/60',
                      isYellowAccent && 'bg-gradient-to-br from-white via-brand-yellow-50/50 to-white text-brand-ink border-brand-yellow-200/80',
                      isFrostBlue && 'bg-gradient-to-br from-white via-brand-blue-50/50 to-white text-brand-ink border-brand-blue-100',
                      !isDarkBlue && !isYellowAccent && !isFrostBlue && 'bg-white text-brand-ink border-brand-blue-50'
                    )}
                  >
                    {/* Top Watermark Quote Icon */}
                    <div
                      className={cn(
                        'absolute top-4 right-4 h-7 w-7 pointer-events-none opacity-20',
                        isDarkBlue ? 'text-brand-yellow-500 opacity-30' : 'text-brand-blue-700'
                      )}
                    >
                      <Quote className="h-full w-full" />
                    </div>

                    {/* Card Header: Rating, Tag & Time */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex text-brand-yellow-500">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span
                          className={cn(
                            'text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border',
                            isDarkBlue
                              ? 'bg-white/10 text-brand-yellow-400 border-white/15'
                              : 'bg-brand-blue-50 text-brand-blue-600 border-brand-blue-100'
                          )}
                        >
                          {review.categoryLabel}
                        </span>
                      </div>

                      {/* Main Quote Highlight (Scannable Headline) */}
                      <h3
                        className={cn(
                          'font-subheading text-lg sm:text-xl uppercase font-bold leading-tight mb-2.5',
                          isDarkBlue ? 'text-brand-yellow-400' : 'text-brand-blue-700'
                        )}
                      >
                        {review.quoteHighlight}
                      </h3>

                      {/* Body Quote */}
                      <p
                        className={cn(
                          'font-sans text-xs sm:text-sm leading-relaxed mb-4',
                          isDarkBlue ? 'text-brand-blue-100/90' : 'text-brand-ink/85'
                        )}
                      >
                        {review.text}
                      </p>
                    </div>

                    {/* Author & Footer Block */}
                    <div
                      className={cn(
                        'pt-3 border-t mt-auto',
                        isDarkBlue ? 'border-white/10' : 'border-brand-blue-100/60'
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={cn(
                              'w-8 h-8 rounded-full font-subheading font-bold text-xs flex items-center justify-center shrink-0 border',
                              isDarkBlue
                                ? 'bg-brand-yellow-500 text-brand-blue-900 border-brand-yellow-400'
                                : 'bg-brand-blue-700 text-white border-brand-blue-800'
                            )}
                          >
                            {review.author.charAt(0)}
                          </div>
                          <div>
                            <p
                              className={cn(
                                'font-bold font-sans text-xs sm:text-sm leading-none',
                                isDarkBlue ? 'text-white' : 'text-brand-blue-700'
                              )}
                            >
                              {review.author}
                            </p>
                            <div className="flex items-center gap-1 mt-1">
                              {review.badge && (
                                <span
                                  className={cn(
                                    'text-[9px] font-mono px-1 py-0.2 rounded font-bold uppercase',
                                    isDarkBlue
                                      ? 'bg-brand-yellow-500/20 text-brand-yellow-400'
                                      : 'bg-brand-yellow-500/20 text-brand-blue-800'
                                  )}
                                >
                                  {review.badge}
                                </span>
                              )}
                              <span
                                className={cn(
                                  'text-[10px] font-mono',
                                  isDarkBlue ? 'text-brand-blue-300' : 'text-brand-blue-400'
                                )}
                              >
                                {review.timeAgo}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Owner response toggle if available */}
                        {review.ownerResponse && (
                          <button
                            type="button"
                            onClick={() => toggleExpand(review.id)}
                            className={cn(
                              'p-1.5 rounded-lg text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer border',
                              isDarkBlue
                                ? 'bg-white/10 text-white border-white/15 hover:bg-white/20'
                                : 'bg-brand-blue-50 text-brand-blue-700 border-brand-blue-100 hover:bg-brand-blue-100'
                            )}
                            title="Ver respuesta del equipo"
                          >
                            <MessageSquareQuote className="w-3.5 h-3.5" />
                            <ChevronDown
                              className={cn(
                                'w-3 h-3 transition-transform duration-200',
                                isExpanded && 'rotate-180'
                              )}
                            />
                          </button>
                        )}
                      </div>

                      {/* Expandable Owner Response Dropdown */}
                      <AnimatePresence>
                        {isExpanded && review.ownerResponse && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div
                              className={cn(
                                'mt-3 p-3 rounded-lg text-xs font-sans italic border-l-2 leading-relaxed',
                                isDarkBlue
                                  ? 'bg-white/5 border-brand-yellow-500 text-brand-blue-100'
                                  : 'bg-brand-blue-50/80 border-brand-blue-700 text-brand-ink'
                              )}
                            >
                              <span className="font-bold not-italic block text-[10px] uppercase font-mono mb-1 text-brand-yellow-500">
                                Respuesta de Envíos DosRuedas:
                              </span>
                              &ldquo;{review.ownerResponse}&rdquo;
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA / Verification Link to Google Maps */}
        <div className="text-center">
          <a
            href="https://share.google/ofw5wAQt3Fc1dArom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-brand-yellow-500 text-brand-blue-900 font-subheading text-sm sm:text-base uppercase tracking-wider font-bold hover:bg-brand-yellow-400 transition-all shadow-md group hover:scale-[1.02] cursor-pointer"
          >
            <span>Ver Ficha y Opiniones en Google Maps</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}