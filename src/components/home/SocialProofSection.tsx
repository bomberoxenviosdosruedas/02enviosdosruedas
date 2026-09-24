'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Star,
  Quote,
  ExternalLink,
  MessageSquareQuote,
  Sparkles,
  Flame,
  Building2,
  Bike,
  HeartHandshake,
  Pause,
  Play,
  ChevronDown,
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
  { id: 'empresas', label: 'Comercios', icon: Building2 },
  { id: 'humanos', label: 'Cara Humana', icon: HeartHandshake },
] as const;

// Rotación determinística para efecto Pinterest flotante
function getRotation(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h += id.charCodeAt(i);
  return (h % 12) - 6; // -6deg a +5deg
}

function getVariantClasses(variant: GoogleReview['variant']) {
  switch (variant) {
    case 'dark-blue':
      return {
        outer: 'bg-brand-blue-700/90 border-white/15 shadow-ambient-elevation',
        inner: 'bg-brand-blue-700 text-white border-white/15',
        quote: 'text-brand-yellow-500',
        badge: 'bg-white/10 text-brand-yellow-500 border-white/15',
        mono: 'text-brand-blue-200',
        avatar: 'bg-brand-yellow-500 text-brand-blue-900 border-brand-yellow-400',
        divider: 'border-white/10',
        response: 'bg-white/5 border-white/10 text-brand-blue-100',
        responseLabel: 'text-brand-yellow-500',
      };
    case 'yellow-accent':
      return {
        outer: 'bg-brand-yellow-500/20 border-brand-yellow-500/30 shadow-accent-sm',
        inner: 'bg-white text-brand-blue-700 border-brand-yellow-500/60',
        quote: 'text-brand-blue-700',
        badge: 'bg-brand-blue-50 text-brand-blue-700 border-brand-blue-100',
        mono: 'text-brand-blue-400',
        avatar: 'bg-brand-blue-700 text-white border-brand-blue-700',
        divider: 'border-brand-blue-100/50',
        response: 'bg-brand-blue-50/80 border-brand-blue-100 text-brand-ink',
        responseLabel: 'text-brand-blue-700',
      };
    case 'frost-blue':
      return {
        outer: 'bg-white/60 border-white/70 shadow-float',
        inner: 'bg-white text-brand-blue-700 border-brand-blue-100/60',
        quote: 'text-brand-blue-700',
        badge: 'bg-brand-blue-50 text-brand-blue-700 border-brand-blue-100',
        mono: 'text-brand-blue-400',
        avatar: 'bg-brand-blue-700 text-white border-brand-blue-700',
        divider: 'border-brand-blue-100/50',
        response: 'bg-brand-blue-50/80 border-brand-blue-100 text-brand-ink',
        responseLabel: 'text-brand-blue-700',
      };
    default:
      return {
        outer: 'bg-white/40 border-white/60 shadow-sm',
        inner: 'bg-white text-brand-blue-700 border-brand-blue-100/50',
        quote: 'text-brand-blue-700',
        badge: 'bg-brand-blue-50 text-brand-blue-700 border-brand-blue-100',
        mono: 'text-brand-blue-400',
        avatar: 'bg-brand-blue-700 text-white border-brand-blue-700',
        divider: 'border-brand-blue-100/50',
        response: 'bg-brand-blue-50/80 border-brand-blue-100 text-brand-ink',
        responseLabel: 'text-brand-blue-700',
      };
  }
}

function ReviewCard({
  review,
  rotation,
  reduceMotion = false,
}: {
  review: GoogleReview;
  rotation: number;
  reduceMotion?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const v = getVariantClasses(review.variant);

  return (
    <motion.article
      style={{ rotate: rotation }}
      whileHover={reduceMotion ? undefined : { y: -6, rotate: rotation * 0.5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'relative shrink-0 w-[360px] sm:w-[420px] p-2.5 rounded-[28px] backdrop-blur-md border will-change-transform select-none',
        v.outer
      )}
    >
      <div className={cn('relative p-6 rounded-[20px] border flex flex-col h-full overflow-hidden', v.inner)}>
        <Quote
          aria-hidden="true"
          className={cn('absolute top-5 right-5 h-7 w-7 opacity-[0.08] pointer-events-none', v.quote)}
        />

        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex text-brand-yellow-500" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className={cn('text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border', v.badge)}>
            {review.categoryLabel}
          </span>
        </div>

        <h3 className="font-subheading text-[21px] sm:text-[22px] leading-[1.05] uppercase tracking-wide mb-3">
          {review.quoteHighlight}
        </h3>

        <p className="font-sans text-[13px] leading-relaxed opacity-90 mb-5 line-clamp-4">{review.text}</p>

        <div className={cn('mt-auto pt-4 border-t', v.divider)}>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div
                className={cn(
                  'w-9 h-9 rounded-full font-subheading font-bold text-[12px] flex items-center justify-center border shrink-0',
                  v.avatar
                )}
              >
                {review.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-[13px] leading-none">{review.author}</p>
                <div className="flex items-center gap-1.5 mt-1">
                  {review.badge && (
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-brand-yellow-500 text-brand-blue-900 uppercase">
                      {review.badge}
                    </span>
                  )}
                  <span className={cn('text-[10px] font-mono', v.mono)}>{review.timeAgo}</span>
                </div>
              </div>
            </div>

            {review.ownerResponse && (
              <button
                type="button"
                onClick={() => setExpanded((s) => !s)}
                aria-expanded={expanded}
                aria-label={expanded ? 'Ocultar respuesta' : 'Ver respuesta del equipo'}
                className={cn(
                  'p-1.5 rounded-lg border text-[11px] font-mono flex items-center gap-1 transition-colors cursor-pointer',
                  review.variant === 'dark-blue'
                    ? 'bg-white/10 border-white/15 hover:bg-white/15'
                    : 'bg-brand-blue-50 border-brand-blue-100 hover:bg-brand-blue-100'
                )}
              >
                <MessageSquareQuote className="w-3.5 h-3.5" aria-hidden="true" />
                <ChevronDown
                  className={cn('w-3 h-3 transition-transform', expanded && 'rotate-180')}
                  aria-hidden="true"
                />
              </button>
            )}
          </div>

          <AnimatePresence initial={false}>
            {expanded && review.ownerResponse && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <div className={cn('mt-3 p-3 rounded-xl text-[12px] italic leading-relaxed border', v.response)}>
                  <span className={cn('not-italic font-bold block text-[10px] font-mono uppercase mb-1', v.responseLabel)}>
                    Respuesta de Envíos DosRuedas:
                  </span>
                  “{review.ownerResponse}”
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}

export default function SocialProofSection() {
  const reduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]['id']>('todas');

  const filtered = useMemo(() => {
    return activeCategory === 'todas' ? REVIEWS_DATA : REVIEWS_DATA.filter((r) => r.category === activeCategory);
  }, [activeCategory]);

  const row1 = useMemo(() => filtered, [filtered]);
  const row2 = useMemo(() => [...filtered].slice().reverse(), [filtered]);
  const doubledRow1 = useMemo(() => [...row1, ...row1], [row1]);
  const doubledRow2 = useMemo(() => [...row2, ...row2], [row2]);

  const togglePause = useCallback(() => setIsPaused((p) => !p), []);

  // Fallback estático si el usuario prefiere reducir movimiento
  if (reduceMotion) {
    return (
      <section className="py-24 bg-white border-y border-brand-blue-100/60">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <h2 className="font-display text-4xl uppercase text-brand-blue-700">Reseñas reales</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r) => (
              <ReviewCard key={r.id} review={r} rotation={0} reduceMotion={reduceMotion} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-title"
      className="relative py-24 bg-white overflow-hidden border-y border-brand-blue-100/60"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {/* Blobs ambientales */}
      <div className="pointer-events-none absolute -top-20 right-10 h-[28rem] w-[28rem] rounded-full bg-brand-yellow-500/15 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 left-10 h-[28rem] w-[28rem] rounded-full bg-brand-blue-500/10 blur-[80px]" />

      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-4">
            <a
              href="https://share.google/ofw5wAQt3Fc1dArom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow-400 text-brand-blue-700 text-[11px] font-subheading tracking-widest uppercase font-bold border border-brand-yellow-400 shadow-glow-yellow hover:bg-brand-yellow-500 transition-colors"
            >
              <Star className="w-3.5 h-3.5 fill-brand-blue-700" aria-hidden="true" /> 5.0 / 5.0 Verificado · +120 Valoraciones
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <h2
              id="social-proof-title"
              className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.9] uppercase text-brand-blue-700 tracking-tight"
            >
              La palabra de quienes
              <br />
              <span className="bg-brand-yellow-500 px-2 -rotate-1 inline-block shadow-accent-sm">venden y envían</span> en MDQ
            </h2>
            <p className="font-sans text-[15px] leading-relaxed text-brand-blue-700/80 max-w-2xl">
              Cero filtros, cero bots. Marquee infinito transparente angulado. Pausa al hover. Como tus ejemplos de Pinterest.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={togglePause}
              aria-pressed={isPaused}
              aria-label={isPaused ? 'Reanudar carrusel' : 'Pausar carrusel'}
              className="h-11 px-4 rounded-xl border-2 border-brand-blue-100 bg-white text-brand-blue-700 font-mono text-xs font-bold flex items-center gap-2 hover:bg-brand-blue-50 transition-colors cursor-pointer"
            >
              {isPaused ? <Play className="w-4 h-4" aria-hidden="true" /> : <Pause className="w-4 h-4" aria-hidden="true" />}
              {isPaused ? 'Reanudar' : 'Pausar'}
            </button>
            <a
              href="https://share.google/ofw5wAQt3Fc1dArom"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-5 rounded-full bg-brand-yellow-500 text-brand-blue-900 font-subheading uppercase text-sm font-bold inline-flex items-center gap-2 hover:bg-brand-yellow-400 shadow-cta-glow transition-[background-color,transform] hover:scale-[1.02] cursor-pointer"
            >
              Ver en Google Maps <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Filtros */}
        <div
          role="group"
          aria-label="Filtrar reseñas por categoría"
          className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-8"
        >
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'shrink-0 px-4 py-2 rounded-full font-subheading text-[13px] uppercase tracking-wider font-bold border flex items-center gap-2 transition-[color,background-color,border-color,transform,box-shadow] cursor-pointer',
                  active
                    ? 'bg-brand-blue-700 text-white border-brand-blue-700 shadow-md scale-[1.03]'
                    : 'bg-white text-brand-blue-700 border-brand-blue-100 hover:bg-brand-blue-50'
                )}
              >
                <Icon className={cn('w-4 h-4', active && 'text-brand-yellow-500')} aria-hidden="true" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Marquee Rows */}
      <div className="relative z-10 space-y-6">
        {/* Row 1: left */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className={cn('flex w-max gap-6 will-change-transform animate-marquee-left', isPaused && 'is-paused')}>
            {doubledRow1.map((review, idx) => (
              <ReviewCard key={`${review.id}-r1-${idx}`} review={review} rotation={getRotation(review.id)} />
            ))}
          </div>
        </div>

        {/* Row 2: right */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className={cn('flex w-max gap-6 will-change-transform animate-marquee-right', isPaused && 'is-paused')}>
            {doubledRow2.map((review, idx) => (
              <ReviewCard key={`${review.id}-r2-${idx}`} review={review} rotation={-getRotation(review.id)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}