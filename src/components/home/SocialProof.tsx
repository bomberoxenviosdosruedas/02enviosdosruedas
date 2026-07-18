'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Star, Shield, MapPin, Award } from 'lucide-react';
import Image from 'next/image';

const logos = [
  { name: 'Mercado Libre', src: '/logos/mercadolibre.svg', alt: 'Mercado Libre Argentina' },
  { name: 'Tiendanube', src: '/logos/tiendanube.svg', alt: 'Tiendanube' },
  { name: 'Shopify', src: '/logos/shopify.svg', alt: 'Shopify' },
  { name: 'Correo Argentino', src: '/logos/correoargentino.svg', alt: 'Correo Argentino' },
  { name: 'Andreani', src: '/logos/andreani.svg', alt: 'Andreani' },
  { name: 'Urbano', src: '/logos/urbano.svg', alt: 'Urbano Express' },
  { name: 'OCA', src: '/logos/oca.svg', alt: 'OCA' },
  { name: 'Shippi', src: '/logos/shippi.svg', alt: 'Shippi' },
];

const testimonials = [
  {
    quote: 'La integración con MercadoLibre Flex fue seamless. Pasamos de despachar 50 pedidos/día a 300+ sin sumar personal. El tracking satelital le da tranquilidad a mis clientes.',
    author: 'Martín G.',
    role: 'Fundador, Tienda Urbana MDQ',
    avatar: '/avatars/martin.jpg',
    rating: 5,
    verified: true,
  },
  {
    quote: 'Antes perdía horas coordinando retiros. Ahora programo todo desde el dashboard y el rider toca timbre en la franja horaria. Mis devoluciones bajaron 60% con la foto de entrega.',
    author: 'Sofia R.',
    role: 'Owner, Moda Local',
    avatar: '/avatars/sofia.jpg',
    rating: 5,
    verified: true,
  },
  {
    quote: 'Para mi e-commerce de repuestos, los envíos Same Day fueron un game changer. Mis clientes en Mar del Plata reciben la pieza antes del mediodía. El soporte responde en minutos.',
    author: 'Carlos M.',
    role: 'Gerente, Repuestos del Sur',
    avatar: '/avatars/carlos.jpg',
    rating: 5,
    verified: true,
  },
];

export default function SocialProof() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Duplicate logos for seamless infinite loop
  const baseTrack = logos.concat(logos);

  return (
    <section
      id="confianza"
      className="py-16 md:py-24 lg:py-32 bg-white relative z-10 overflow-hidden"
      aria-labelledby="socialproof-heading"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,54,165,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,54,165,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0, y: 45 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
          }}
          className="max-w-3xl mb-16 lg:mb-20 space-y-6 text-center"
        >
          <span className="inline-flex items-center px-4 py-1.5 bg-brand-blue-50 text-brand-blue border border-brand-blue-100 rounded-full text-xs font-subheading tracking-widest uppercase">
            CONFIAN Y CRECEN
          </span>
          <h2 id="socialproof-heading" className="text-brand-blue text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.9]">
            +140 EMPRENDEDORES CONFÍAN
          </h2>
          <p className="text-brand-blue-500 text-base sm:text-lg leading-relaxed font-sans max-w-prose font-medium mx-auto">
            Marcas locales y retailers nacionales eligen Envíos DosRuedas para su logística de última milla en Mar del Plata.
          </p>
        </motion.div>

        {/* Logos Carousel - Infinite Scroll */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.2 } }
          }}
          className="relative mb-20 lg:mb-24"
        >
          <div className="overflow-hidden" role="region" aria-label="Empresas que confían en nosotros">
            {/* Mask fade edges */}
            <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] bg-white z-10" />

            <div
              ref={carouselRef}
              className="flex gap-12 lg:gap-16"
              style={{
                animation: prefersReducedMotion || isPaused
                  ? 'none'
                  : 'logos-scroll 30s linear infinite',
                width: 'max-content',
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
            >
              {baseTrack.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0"
                  style={{ width: 'auto', height: '48px' }}
                >
                  <div className="h-full w-auto">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      height={48}
                      width={140}
                      className="h-full w-auto object-contain filter grayscale-[100%] contrast-[1.2] opacity-60 transition-all duration-300 ease-out hover:grayscale-0 hover:contrast-100 hover:opacity-100"
                      style={{ filter: 'grayscale(100%) contrast(1.2) opacity(0.6)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keyframes for infinite scroll */}
          <style jsx global>{`
            @keyframes logos-scroll {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </motion.div>

        {/* Testimonials - 3 Double Bezel Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0, y: 45 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 150, damping: 18 }}
              className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 hover:border-brand-blue-300 hover:shadow-antigravity-deep transition-all duration-500 group"
            >
              <div className="double-bezel-inner bg-white p-6 sm:p-8 border border-brand-blue-50 shadow-sm flex flex-col h-full">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-yellow text-brand-yellow" />
                  ))}
                  {testimonial.verified && (
                    <span className="ml-1.5 px-2 py-0.5 text-[9px] font-subheading tracking-widest uppercase bg-brand-yellow text-brand-blue rounded-full">
                      Verificado
                    </span>
                  )}
                </div>

                {/* Quote */}
                <blockquote className="text-brand-blue-500 font-sans text-sm sm:text-base leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-brand-blue-50">
                  <div className="relative w-10 h-10 rounded-full bg-brand-blue-100 flex items-center justify-center overflow-hidden shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.author} avatar`}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-blue-700/5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-brand-blue text-sm font-semibold truncate">{testimonial.author}</p>
                    <p className="text-brand-blue-400 text-xs sm:text-sm font-sans truncate">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}