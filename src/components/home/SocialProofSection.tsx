'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'motion/react';
import {
  Star,
  TrendingUp,
  HeartHandshake,
  ExternalLink,
  MessageSquareQuote,
  Sparkles,
  ChevronDown,
  Quote,
  Flame,
  Building2,
  Bike,
  ChevronLeft,
  ChevronRight,
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
  { id: 'todas', label: 'Todas', icon: Sparkles },
  { id: 'destacadas', label: 'Destacadas', icon: Flame },
  { id: 'express', label: 'Express & Flex', icon: Bike },
  { id: 'empresas', label: 'Comercios & PyMEs', icon: Building2 },
  { id: 'humanos', label: 'Cara Humana', icon: HeartHandshake },
];

export default function SocialProofSection() {
  const reduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>('todas');
  const [expandedReviewId, setExpandedReviewId] = useState<string | null>(null);
  const [activeSnapIndex, setActiveSnapIndex] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const snappySpring = { type: 'spring' as const, stiffness: 300, damping: 25 };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0.01 } : { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  const filteredReviews =
    activeCategory === 'todas'
      ? REVIEWS_DATA
      : REVIEWS_DATA.filter((r) => r.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedReviewId((prev) => (prev === id ? null : id));
  };

  // Scroll Snap tracking and state updater
  const updateScrollState = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const childWidth = el.firstElementChild?.clientWidth || 360;
    const gap = 24;
    const index = Math.round(scrollLeft / (childWidth + gap));
    setActiveSnapIndex(Math.min(Math.max(index, 0), filteredReviews.length - 1));
  }, [filteredReviews.length]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  // Handle slide snap navigation
  const scrollToIndex = (index: number) => {
    const el = carouselRef.current;
    if (!el) return;

    const children = el.children;
    if (children[index]) {
      (children[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  };

  const handlePrev = () => {
    const el = carouselRef.current;
    if (!el) return;
    const slideWidth = (el.firstElementChild?.clientWidth || 360) + 24;
    el.scrollBy({ left: -slideWidth, behavior: 'smooth' });
  };

  const handleNext = () => {
    const el = carouselRef.current;
    if (!el) return;
    const slideWidth = (el.firstElementChild?.clientWidth || 360) + 24;
    el.scrollBy({ left: slideWidth, behavior: 'smooth' });
  };

  return (
    <section
      id="social-proof"
      className="py-24 bg-gradient-to-b from-brand-white-50 via-brand-blue-50/40 to-brand-white-50 relative z-10 border-y border-brand-blue-100 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-yellow-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <motion.div className="lg:col-span-8 space-y-4" variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-xs font-subheading font-bold tracking-widest uppercase shadow-sm border border-brand-yellow-400">
              <Star className="w-3.5 h-3.5 fill-brand-blue-900" />
              <span>5.0 / 5.0 en Google Maps · Calificación Perfecta</span>
            </div>

            <h2 className="text-brand-blue-700 text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.95]">
              Reseñas Reales de Mar del Plata
            </h2>

            <p className="text-brand-blue-600/90 font-sans text-base sm:text-lg max-w-2xl">
              Deslizá el carrusel para conocer la experiencia de vecinos, tiendas online y emprendedores que confían a diario en nuestra flota propia.
            </p>
          </motion.div>

          {/* Carousel Controls */}
          <motion.div className="lg:col-span-4 flex items-center justify-start lg:justify-end gap-3" variants={itemVariants}>
            <div className="font-mono text-xs font-bold text-brand-blue-500 bg-brand-blue-50 px-3.5 py-1.5 rounded-full border border-brand-blue-100 mr-2">
              <span className="text-brand-blue-700 text-sm font-extrabold">{activeSnapIndex + 1}</span> / {filteredReviews.length}
            </div>

            <motion.button
              type="button"
              onClick={handlePrev}
              disabled={!canScrollLeft}
              whileHover={canScrollLeft && !reduceMotion ? { scale: 1.05 } : undefined}
              whileTap={canScrollLeft && !reduceMotion ? { scale: 0.95 } : undefined}
              aria-label="Reseña anterior"
              className={cn(
                'h-11 w-11 rounded-xl border-2 flex items-center justify-center transition-colors cursor-pointer shadow-xs',
                canScrollLeft
                  ? 'border-brand-blue-200 bg-white text-brand-blue-700 hover:bg-brand-blue-700 hover:text-white hover:border-brand-blue-700'
                  : 'border-brand-blue-100 bg-brand-blue-50/50 text-brand-blue-300 cursor-not-allowed opacity-50'
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            <motion.button
              type="button"
              onClick={handleNext}
              disabled={!canScrollRight}
              whileHover={canScrollRight && !reduceMotion ? { scale: 1.05 } : undefined}
              whileTap={canScrollRight && !reduceMotion ? { scale: 0.95 } : undefined}
              aria-label="Siguiente reseña"
              className={cn(
                'h-11 w-11 rounded-xl border-2 flex items-center justify-center transition-colors cursor-pointer shadow-xs font-bold',
                canScrollRight
                  ? 'border-brand-yellow-500 bg-brand-yellow-500 text-brand-blue-900 hover:bg-brand-yellow-400'
                  : 'border-brand-blue-100 bg-brand-blue-50/50 text-brand-blue-300 cursor-not-allowed opacity-50'
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* 3 Interactive Trust Metrics Strips */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10" variants={itemVariants}>
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -4, transition: snappySpring }}
            className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl group shadow-sm hover:shadow-antigravity-deep transition-shadow cursor-default"
          >
            <div className="double-bezel-inner bg-white p-5 rounded-xl border border-brand-blue-50/50 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow-500 text-brand-blue-900 flex items-center justify-center shrink-0 shadow-xs">
                <Star className="w-6 h-6 fill-brand-blue-900" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-brand-blue-700 tabular-nums">
                    5.0
                  </span>
                  <div className="flex text-brand-yellow-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="font-subheading text-[11px] uppercase tracking-wider text-brand-blue-500 font-bold">
                  15 Opiniones en Google Maps
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={reduceMotion ? undefined : { y: -4, transition: snappySpring }}
            className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl group shadow-sm hover:shadow-antigravity-deep transition-shadow cursor-default"
          >
            <div className="double-bezel-inner bg-white p-5 rounded-xl border border-brand-blue-50/50 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue-700 text-brand-yellow-500 flex items-center justify-center shrink-0 shadow-xs">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-bold text-brand-blue-700 tabular-nums">
                  100%
                </span>
                <p className="font-subheading text-[11px] uppercase tracking-wider text-brand-blue-500 font-bold">
                  Flota Propia Sin Tercerizar
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={reduceMotion ? undefined : { y: -4, transition: snappySpring }}
            className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl group shadow-sm hover:shadow-antigravity-deep transition-shadow cursor-default"
          >
            <div className="double-bezel-inner bg-white p-5 rounded-xl border border-brand-blue-50/50 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow-500/20 text-brand-blue-700 flex items-center justify-center shrink-0 border border-brand-yellow-500/40">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-bold text-brand-blue-700 tabular-nums">
                  +7
                </span>
                <p className="font-subheading text-[11px] uppercase tracking-wider text-brand-blue-500 font-bold">
                  Años de Trayectoria en MDQ
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Dynamic Category Filter Bar */}
        <motion.div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar" variants={itemVariants}>
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <motion.button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  scrollToIndex(0);
                }}
                whileHover={reduceMotion ? undefined : { scale: isActive ? 1.05 : 1.02 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className={cn(
                  'px-4 py-2 rounded-full font-subheading text-xs sm:text-sm uppercase tracking-wider font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer border shrink-0',
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
              </motion.button>
            );
          })}
        </motion.div>

        {/* Blossom-Style Scroll-Snap Carousel Container */}
        <motion.div
          ref={carouselRef}
          tabIndex={0}
          aria-label="Carrusel de testimonios"
          variants={itemVariants}
          className="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[420px] lg:auto-cols-[460px] gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar focus:outline-none"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {filteredReviews.map((review, idx) => {
            const isExpanded = expandedReviewId === review.id;
            const isCurrentSnap = idx === activeSnapIndex;

            // Palette Variant calculation
            const isDarkBlue = review.variant === 'dark-blue';
            const isYellowAccent = review.variant === 'yellow-accent';
            const isFrostBlue = review.variant === 'frost-blue';

            return (
              <motion.div
                key={review.id}
                style={{ scrollSnapAlign: 'center' }}
                whileHover={reduceMotion ? undefined : { y: -6, transition: snappySpring }}
                className={cn(
                  'double-bezel-outer p-2 sm:p-2.5 rounded-3xl transition-all duration-300 flex flex-col h-full select-none cursor-pointer',
                  isDarkBlue && 'bg-brand-blue-900/90 border-brand-blue-700 shadow-md',
                  isYellowAccent && 'bg-brand-yellow-100/80 border-brand-yellow-300 shadow-md',
                  isFrostBlue && 'bg-brand-blue-100/70 border-brand-blue-200 shadow-sm',
                  !isDarkBlue && !isYellowAccent && !isFrostBlue && 'bg-brand-blue-50/80 border-brand-blue-100 shadow-sm',
                  isCurrentSnap ? 'scale-[1.02] shadow-antigravity-deep' : 'opacity-95'
                )}
              >
                <div
                  className={cn(
                    'double-bezel-inner p-6 sm:p-7 rounded-2xl border relative flex flex-col justify-between h-full transition-colors',
                    isDarkBlue && 'bg-gradient-to-br from-brand-blue-800 to-brand-blue-950 text-white border-brand-blue-700/60',
                    isYellowAccent && 'bg-gradient-to-br from-white via-brand-yellow-50/60 to-white text-brand-ink border-brand-yellow-200/80',
                    isFrostBlue && 'bg-gradient-to-br from-white via-brand-blue-50/60 to-white text-brand-ink border-brand-blue-100',
                    !isDarkBlue && !isYellowAccent && !isFrostBlue && 'bg-white text-brand-ink border-brand-blue-50'
                  )}
                >
                  {/* Top Watermark Icon */}
                  <div
                    className={cn(
                      'absolute top-5 right-5 h-8 w-8 pointer-events-none opacity-20',
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
                          <Star key={star} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span
                        className={cn(
                          'text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border',
                          isDarkBlue
                            ? 'bg-white/10 text-brand-yellow-400 border-white/15'
                            : 'bg-brand-blue-50 text-brand-blue-700 border-brand-blue-100'
                        )}
                      >
                        {review.categoryLabel}
                      </span>
                    </div>

                    {/* Scannable Quote Headline */}
                    <h3
                      className={cn(
                        'font-subheading text-xl sm:text-2xl uppercase font-bold leading-tight mb-3',
                        isDarkBlue ? 'text-brand-yellow-400' : 'text-brand-blue-700'
                      )}
                    >
                      {review.quoteHighlight}
                    </h3>

                    {/* Review Body */}
                    <p
                      className={cn(
                        'font-sans text-xs sm:text-sm leading-relaxed mb-6',
                        isDarkBlue ? 'text-brand-blue-100/90' : 'text-brand-ink/85'
                      )}
                    >
                      {review.text}
                    </p>
                  </div>

                  {/* Author & Footer Details */}
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
                            'w-9 h-9 rounded-full font-subheading font-bold text-xs flex items-center justify-center shrink-0 border',
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
                          <div className="flex items-center gap-1.5 mt-1">
                            {review.badge && (
                              <span
                                className={cn(
                                  'text-[9px] font-mono px-1.5 py-0.2 rounded font-bold uppercase',
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

                      {/* Owner response toggle */}
                      {review.ownerResponse && (
                        <motion.button
                          type="button"
                          onClick={() => toggleExpand(review.id)}
                          whileHover={reduceMotion ? undefined : { scale: 1.08 }}
                          whileTap={reduceMotion ? undefined : { scale: 0.95 }}
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
                        </motion.button>
                      )}
                    </div>

                    {/* Expandable Owner Response with spring animation */}
                    <AnimatePresence>
                      {isExpanded && review.ownerResponse && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
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
        </motion.div>

        {/* Scroll Snap Pagination Dots */}
        <motion.div className="flex justify-center items-center gap-1 mb-10" variants={itemVariants}>
          {filteredReviews.map((_, idx) => (
            <div key={idx} className="min-w-[44px] min-h-[44px] flex items-center justify-center">
              <button
                type="button"
                onClick={() => scrollToIndex(idx)}
                aria-label={`Ir a la reseña ${idx + 1}`}
                className={cn(
                  'h-2.5 rounded-full transition-all duration-300 cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500',
                  idx === activeSnapIndex
                    ? 'w-10 bg-brand-yellow-500 border-brand-yellow-400 shadow-cta-glow'
                    : 'w-2.5 bg-brand-blue-200 border-brand-blue-200 hover:bg-brand-blue-400'
                )}
              />
            </div>
          ))}
        </motion.div>

        {/* Verification Link to Google Maps */}
        <motion.div className="text-center" variants={itemVariants}>
          <a
            href="https://share.google/ofw5wAQt3Fc1dArom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-yellow-500 text-brand-blue-900 font-subheading text-sm sm:text-base uppercase tracking-wider font-bold hover:bg-brand-yellow-400 transition-all shadow-cta-glow group hover:scale-[1.02] cursor-pointer"
          >
            <span>Ver Ficha y Opiniones en Google Maps</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}