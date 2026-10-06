'use client';

import React from 'react';
import Link from 'next/link';
import { Star, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Review {
  id: string;
  author: string;
  timeAgo: string;
  quoteHighlight: string;
  text: string;
  // color variant: 'blue' | 'white' | 'yellow'
  variant: 'blue' | 'white' | 'yellow';
}

// 6 reviews selected from source data, cleaned of emojis, no ownerResponse
const REVIEWS: Review[] = [
  {
    id: 'karen-herrera',
    author: 'Karen Herrera',
    timeAgo: 'Hace 13 semanas',
    quoteHighlight: 'RESOLVIERON MI PROBLEMA CON LA MEJOR PREDISPOSICIÓN',
    text: 'Excelente el servicio, rápidos, muy atentos, resolvieron mi problema con la mejor predisposición, los recomiendo ampliamente.',
    variant: 'blue',
  },
  {
    id: 'agustin-torres',
    author: 'Agustin Torres',
    timeAgo: 'Hace 48 semanas',
    quoteHighlight: 'IMPECABLE PARA LLEVAR PEDIDOS A NUESTROS CLIENTES',
    text: 'Lo usé varias veces para llevar pedidos a nuestros clientes. Impecable el servicio. Además hacen depósitos en cajeros sin problemas. Unos genios.',
    variant: 'white',
  },
  {
    id: 'alexis-bogarin',
    author: 'Alexis Bogarin',
    timeAgo: 'Hace 37 semanas',
    quoteHighlight: 'EL MEJOR SERVICIO PREMIUM DE LA ZONA',
    text: 'El mejor servicio premium de la zona en Mar del Plata. 100% recomendable por puntualidad y trato.',
    variant: 'yellow',
  },
  {
    id: 'lorenzo-elizagoyen',
    author: 'Lorenzo Elizagoyen',
    timeAgo: 'Hace 32 semanas',
    quoteHighlight: 'ATENCIÓN DE PRIMERA, RÁPIDO, CONFIABLE Y SEGURO',
    text: 'Excelente servicio, atención de primera, rápido, confiable y seguro. Recomendado 100% para envíos puntuales.',
    variant: 'white',
  },
  {
    id: 'emiliano-garri',
    author: 'Emiliano Garri',
    timeAgo: 'Hace 48 semanas',
    quoteHighlight: '¡LA MEJOR MENSAJERÍA DE MDP!',
    text: 'La mejor mensajería de Mar del Plata. Cumplen siempre con lo prometido y no te dejan tirado.',
    variant: 'blue',
  },
  {
    id: 'nahuari',
    author: 'NahuAri',
    timeAgo: 'Hace 48 semanas',
    quoteHighlight: '10 DE 10, RESPONSABLES POR SOBRE TODAS LAS COSAS',
    text: '10 de 10 muy buenos en lo que hacen, responsables por sobre todas las cosas, super recomendable para tu negocio.',
    variant: 'white',
  },
];

function ReviewCard({ review }: { review: Review }) {
  const stars = (
    <div aria-label="Calificación: 5 de 5 estrellas" className="flex gap-1" role="img">
      <span className="text-xl">★</span>
      <span className="text-xl">★</span>
      <span className="text-xl">★</span>
      <span className="text-xl">★</span>
      <span className="text-xl">★</span>
    </div>
  );

  const cardStyles = {
    blue: {
      article: 'bg-brand-blue-500 text-white shadow-elevated',
      dateBadge: 'bg-brand-yellow-500 text-brand-blue-500',
      starsColor: 'text-brand-yellow-500',
      headingColor: 'text-white',
      bodyColor: 'text-white/90',
      borderColor: 'border-white/20',
      avatarBg: 'bg-brand-yellow-500 text-brand-blue-500',
      authorColor: 'text-white',
    },
    white: {
      article: 'bg-white border-2 border-brand-yellow-500 shadow-[0_16px_40px_rgba(9,80,246,0.08)]',
      dateBadge: 'bg-brand-blue-50 text-brand-blue-500',
      starsColor: 'text-brand-blue-500',
      headingColor: 'text-brand-blue-500',
      bodyColor: 'text-brand-blue-500/85',
      borderColor: 'border-brand-blue-100/40',
      avatarBg: 'bg-brand-blue-500 text-white',
      authorColor: 'text-brand-blue-500',
    },
    yellow: {
      article: 'bg-brand-yellow-500 text-brand-blue-500 shadow-[0_16px_40px_rgba(255,236,1,0.3)]',
      dateBadge: 'bg-white text-brand-blue-500 shadow-sm',
      starsColor: 'text-brand-blue-500',
      headingColor: 'text-brand-blue-500',
      bodyColor: 'text-brand-blue-500',
      borderColor: 'border-brand-blue-500/20',
      avatarBg: 'bg-brand-blue-500 text-white',
      authorColor: 'text-brand-blue-500',
    },
  }[review.variant];

  return (
    <article className={cn(
      'card-token flex flex-col justify-between p-8 min-h-85',
      cardStyles.article
    )}>
      <div>
        {/* Top Row: Rating & Date */}
        <div className="flex items-center justify-between mb-6">
          <div aria-label="Calificación: 5 de 5 estrellas" className={cn('flex gap-1', cardStyles.starsColor)}>
            {stars}
          </div>
          <span className={cn(
            'text-xs font-bold px-3.5 py-1 rounded-full font-mono',
            cardStyles.dateBadge
          )}>
            {review.timeAgo}
          </span>
        </div>

        {/* Review Heading */}
        <h3 className={cn(
          'font-subheading text-xl lg:text-2xl uppercase leading-none mb-3 tracking-wide',
          cardStyles.headingColor
        )}>
          {review.quoteHighlight}
        </h3>

        {/* Review Body */}
        <p className={cn('text-sm leading-relaxed font-normal', cardStyles.bodyColor)}>
          {review.text}
        </p>
      </div>

      {/* Author / Footer */}
      <div className={cn('pt-6 mt-6 flex items-center gap-3', cardStyles.borderColor)}>
        <div className={cn(
          'w-10 h-10 rounded-full font-bold flex items-center justify-center text-sm shrink-0 shadow-sm',
          cardStyles.avatarBg
        )}>
          {review.author.charAt(0)}
        </div>
        <span className={cn('font-bold text-sm tracking-wide', cardStyles.authorColor)}>
          {review.author}
        </span>
      </div>
    </article>
  );
}

export default function SocialProofSection() {
  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-title"
      className="relative py-24 bg-brand-blue-50 border-y border-brand-blue-100/60"
    >
      <div className="mx-auto max-w-[80rem] px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10 lg:mb-14">
          {/* Rating Trust Badge */}
          <div className="inline-flex items-center mb-5">
            <span className="inline-flex items-center gap-1.5 bg-brand-blue-500 text-white text-[12px] sm:text-[13px] font-mono font-bold px-5 py-2 rounded-full tracking-wider uppercase shadow-md">
              5.0 / 5.0 EN GOOGLE · +120 VALORACIONES
            </span>
          </div>

          {/* Main Title & CTA Button */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            {/* Title with highlighted keyword */}
            <h1
              id="social-proof-title"
              className="font-display uppercase text-brand-blue-500 text-[42px] sm:text-[60px] lg:text-[clamp(2.75rem,5.2vw,4.5rem)] leading-[0.92] max-w-4xl tracking-tight"
            >
              LA PALABRA DE QUIENES
              <span className="inline-block relative mx-1 my-1 px-4 sm:px-5 py-1 rounded-full bg-brand-yellow-500 text-brand-blue-500 shadow-cta-glow">
                VENDEN Y ENVÍAN
              </span>
              EN MDQ
            </h1>

            {/* Google Maps Link Button */}
            <div className="shrink-0 pt-2 lg:pt-0">
              <Link
                href="https://share.google/ofw5wAQt3Fc1dArom"
                target="_blank"
                rel="noopener noreferrer"
                className="button-pill inline-flex items-center gap-2.5 border-2 border-brand-blue-500 text-brand-blue-500 hover:bg-brand-blue-500 hover:text-white px-7 py-3 font-subheading text-lg sm:text-xl tracking-wider uppercase shadow-sm hover:shadow-md"
                aria-label="Ver todas las opiniones en Google Maps"
              >
                <span>VER EN GOOGLE MAPS</span>
                <ExternalLink className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" strokeLinecap="round" strokeLinejoin="round" />
                </ExternalLink>
              </Link>
            </div>
          </div>
        </header>

        {/* Testimonials Grid: 3×2 = 6 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}