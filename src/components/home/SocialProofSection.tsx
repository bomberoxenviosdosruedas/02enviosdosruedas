'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Star } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { CTANestedPill } from '@/components/ui/CTANestedPill';

/**
 * Reviews sourced from actual Google Maps data.
 * Names anonymized to initials per taste-design: "No generic names".
 * Metrics removed per taste-design: "No fabricated data or statistics".
 */
const REVIEWS = [
  {
    id: 'review-1',
    authorInitial: 'K.H.',
    quoteHighlight: 'Resolvieron mi problema con la mejor predisposición',
    text: 'Excelente el servicio, rápidos, muy atentos, resolvieron mi problema con la mejor predisposición, los recomiendo ampliamente.',
  },
  {
    id: 'review-2',
    authorInitial: 'A.T.',
    quoteHighlight: 'Impecable para llevar pedidos a nuestros clientes',
    text: 'Lo usé varias veces para llevar pedidos a nuestros clientes. Impecable el servicio. Además hacen depósitos en cajeros sin problemas.',
  },
  {
    id: 'review-3',
    authorInitial: 'A.B.',
    quoteHighlight: 'El mejor servicio premium de la zona en Mar del Plata',
    text: 'El mejor servicio premium de la zona en Mar del Plata. 100% recomendable por puntualidad y trato.',
  },
  {
    id: 'review-4',
    authorInitial: 'L.E.',
    quoteHighlight: 'Atención de primera, rápido, confiable y seguro',
    text: 'Excelente servicio, atención de primera, rápido, confiable y seguro. Recomendado 100% para envíos puntuales.',
  },
  {
    id: 'review-5',
    authorInitial: 'E.G.',
    quoteHighlight: 'La mejor mensajería de Mar del Plata',
    text: 'La mejor mensajería de Mar del Plata. Cumplen siempre con lo prometido y no te dejan tirado.',
  },
  {
    id: 'review-6',
    authorInitial: 'N.A.',
    quoteHighlight: 'Responsables por sobre todas las cosas',
    text: 'Muy buenos en lo que hacen, responsables por sobre todas las cosas, super recomendable para tu negocio.',
  },
];

// Spring tokens desde globals.css
const spring = { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const };
const fastSpring = { duration: 0.2, ease: [0.23, 1, 0.32, 1] as const };

// Perpetual micro-loop para tarjetas (subtle float)
const cardFloatLoop = {
  y: [0, -4, 0],
  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
};

function ReviewCard({ review, index }: { review: typeof REVIEWS[0]; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ ...spring, delay: index * 0.08 }}
      animate={reduceMotion ? {} : cardFloatLoop}
      style={{ willChange: reduceMotion ? undefined : 'transform' }}
      className="flex"
    >
      <article className="card-token w-full h-full rounded-2xl p-6 sm:p-8 min-h-[320px] flex flex-col justify-between bg-white border border-brand-blue-100 shadow-float hover:border-brand-blue-300 hover:shadow-antigravity-deep transition-all duration-300">
        <div>
          {/* Top Row: Rating (consistent) & Author initial */}
          <div className="flex items-center justify-between mb-6">
            <div
              role="img"
              aria-label="Calificación: 5 de 5 estrellas"
              className="flex gap-1 text-brand-yellow-500"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
              ))}
            </div>
            <div
              className="w-10 h-10 rounded-full bg-brand-blue-500 text-white font-bold flex items-center justify-center text-sm shrink-0 shadow-sm"
              aria-hidden="true"
            >
              {review.authorInitial}
            </div>
          </div>

          {/* Review Heading - track-tight, weight-driven */}
          <motion.h3
            whileHover={{ x: 4, transition: fastSpring }}
            className="font-subheading text-xl sm:text-2xl uppercase leading-none mb-3 tracking-wide text-brand-blue-500"
          >
            {review.quoteHighlight}
          </motion.h3>

          {/* Review Body - relaxed leading, 65ch max */}
          <p className="text-sm leading-relaxed font-normal text-brand-blue-500/85 max-w-[65ch]">
            {review.text}
          </p>
        </div>

        {/* Author / Footer - consistent styling */}
        <div className="pt-6 mt-6 border-t border-brand-blue-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-blue-500 text-white font-bold flex items-center justify-center text-sm shrink-0 shadow-sm" aria-hidden="true">
            {review.authorInitial.charAt(0)}
          </div>
          <span className="font-bold text-sm tracking-wide text-brand-blue-500">
            {review.authorInitial}
          </span>
        </div>
      </article>
    </motion.li>
  );
}

export default function SocialProofSection() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: reduceMotion ? { duration: 0.01 } : spring },
  };

  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-title"
      className="py-20 lg:py-28 bg-white relative z-10 border-y border-brand-blue-100/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - LEFT ALIGNED, ASYMMETRIC */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={spring}
          className="mb-10 lg:mb-14 max-w-3xl"
        >
          {/* Trust Badge - honest copy, no fake metrics */}
          <motion.div
            whileHover={{ scale: 1.02, transition: fastSpring }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue-500 text-white text-xs font-mono font-bold tracking-wider uppercase shadow-accent-sm mb-6"
          >
            <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            <span>Calificación 5.0 en Google Maps</span>
          </motion.div>

          {/* Main Title with highlighted keyword */}
          <motion.h2
            id="social-proof-title"
            className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.92] tracking-tight uppercase text-brand-blue-500"
          >
            LA PALABRA DE QUIENES{' '}
            <span className="inline-block relative mx-1 my-1 px-4 sm:px-5 py-1 rounded-full bg-brand-yellow-500 text-brand-blue-500 shadow-cta-glow">
              VENDEN Y ENVÍAN
            </span>{' '}
            EN MDQ
          </motion.h2>
        </motion.header>

        {/* Testimonials Grid: ASYMMETRIC - 1 col mobile, 2 col tablet, 3 col desktop */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 list-none p-0 m-0"
          role="list"
          aria-label="Opiniones de clientes"
        >
          {REVIEWS.map((review, index) => (
            <motion.li key={review.id} variants={itemVariants} role="listitem">
              <ReviewCard review={review} index={index} />
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA - CTANestedPill component, single primary action */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...spring, delay: 0.3 }}
          className="mt-12 lg:mt-16 text-center lg:text-left max-w-xl mx-auto lg:mx-0"
        >
          <CTANestedPill
            asChild
            variant="primary"
            size="large"
            href="https://www.google.com/maps?q=Friuli+1972,+Mar+del+Plata"
            target="_blank"
            rel="noopener noreferrer"
            id="social-proof-google-maps"
            className="w-full lg:w-auto justify-center"
          >
            <Link
              href="https://www.google.com/maps?q=Friuli+1972,+Mar+del+Plata"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en Google Maps
            </Link>
          </CTANestedPill>
        </motion.div>
      </div>
    </section>
  );
}