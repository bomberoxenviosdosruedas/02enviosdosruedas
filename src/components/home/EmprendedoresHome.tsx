'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring } from 'motion/react';
import { Building2, ShoppingBag, Landmark, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function EmprendedoresHome() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Marquee animation using motion values (deterministic, spring-based)
  const marqueeX = useMotionValue(0);
  const marqueeProgress = useMotionValue(0);

  // Split description text into words for the GSAP scrub reveal
  const descriptionText = "Si vendés online, necesitás un socio logístico que responda al toque. Creamos planes a tu medida con tarifas dinámicas transparentes y recolección programada a domicilio en Mar del Plata.";
  const words = descriptionText.split(" ");

  const partners = [
    'TOY PIOLA JUGUETERÍA', 'AMA & POLA', 'DROPIX 3D', 'EL CÓNDOR',
    'STARCEL', 'URBANCOW', 'WANCA', 'CATALINA INDUMENTARIA', 'ENVASES 3G', 'LA PERI'
  ];

  // Initialize GSAP ScrollTrigger animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Scrubbing Text Reveal for Subtitle Words
      if (paragraphRef.current) {
        const wordElements = paragraphRef.current.querySelectorAll('.word-span');
        gsap.fromTo(
          wordElements,
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.05,
            ease: 'none',
            scrollTrigger: {
              trigger: paragraphRef.current,
              start: 'top 85%',
              end: 'bottom 65%',
              scrub: true,
            },
          }
        );
      }

      // 2. Bento Grid Cards Fade Up and Scale Stagger
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.querySelectorAll('.double-bezel-outer');
        gsap.fromTo(
          cards,
          {
            y: 50,
            opacity: 0,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Marquee animation using requestAnimationFrame (deterministic, no CSS infinite)
  useEffect(() => {
    if (reduceMotion || !marqueeRef.current) return;

    const marqueeContent = marqueeRef.current;
    const contentWidth = marqueeContent.scrollWidth / 2; // Half because we duplicate
    let animationId: number;
    let lastTime = 0;
    const speed = 50; // pixels per second

    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      // Calculate new position
      const currentX = marqueeX.get();
      const newX = currentX - (speed * deltaTime) / 1000;

      // Reset when we've scrolled one full set
      if (Math.abs(newX) >= contentWidth) {
        marqueeX.set(newX + contentWidth);
      } else {
        marqueeX.set(newX);
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      lastTime = performance.now();
      animationId = requestAnimationFrame(animate);
    };

    marqueeContent.addEventListener('mouseenter', handleMouseEnter);
    marqueeContent.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      marqueeContent.removeEventListener('mouseenter', handleMouseEnter);
      marqueeContent.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [reduceMotion]);

  // Spring-based marquee transform
  const marqueeSpring = useSpring(marqueeX, { stiffness: 100, damping: 500 });

  return (
    <section
      ref={sectionRef}
      id="emprendedores-home"
      className="py-32 md:py-48 bg-brand-ink relative overflow-hidden text-white border-y border-white/10"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Background Decorative Asymmetric Glows - spring-based pulse instead of animate-pulse */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-yellow-500/5 rounded-full blur-[150px] pointer-events-none"
        animate={reduceMotion ? {} : { scale: [1, 1.02, 1] }}
        transition={{ duration: 4, ease: 'easeInOut', repeat: reduceMotion ? 0 : Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header - Editorial Split with Inline Typography Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="max-w-6xl mb-24 space-y-6 text-left"
        >
          <span className="px-4 py-1.5 bg-brand-blue-50/5 text-brand-yellow border border-brand-yellow/20 rounded-full text-xs font-bold tracking-widest inline-block uppercase shadow-sm font-subheading">
            Socio Estratégico Local
          </span>

          <h2 className="text-white text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.9] text-left max-w-5xl">
            Potenciamos tu{' '}
            <span
              className="inline-block w-16 sm:w-20 md:w-24 h-8 sm:h-10 md:h-12 rounded-full align-middle bg-cover bg-center mx-2 border border-brand-yellow/30 shadow-md group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: "url('https://picsum.photos/seed/delivery/400/200')" }}
              role="img"
              aria-label="Delivery"
            />{' '}
            Marca en Mar del Plata
          </h2>

          <div className="pt-2">
            <p
              ref={paragraphRef}
              className="text-brand-blue-100 font-sans text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl font-medium tracking-tight"
            >
              {words.map((word, i) => (
                <span key={i} className="word-span inline-block mr-1.5">
                  {word}
                </span>
              ))}
            </p>
          </div>

          <div className="h-[2px] w-24 bg-brand-yellow rounded-full pt-1" />
        </motion.div>

        {/* Solutions Cards Grid: Asymmetric Bento Layout with Double-Bezel Cards */}
        <motion.div
          ref={cardsContainerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-auto lg:auto-rows-[340px] grid-flow-row-dense"
        >
          {/* Card 1: PyMEs (E-Commerce) - lg:col-span-7 lg:row-span-2 (Dark Navy Card) */}
          <motion.div
            className="lg:col-span-7 lg:row-span-2 double-bezel-outer p-2 rounded-2xl bg-brand-blue-50/5 border border-brand-blue-500/20 hover:border-brand-yellow/30 hover:bg-brand-blue-50/10 hover:shadow-antigravity-deep group overflow-hidden flex flex-col"
            whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
          >
            <div className="double-bezel-inner bg-brand-blue-700/60 p-6 sm:p-8 rounded-xl border border-brand-blue-500/20 shadow-inner flex flex-col justify-between h-full relative overflow-hidden text-left flex-1">
              {/* Subtle Radial Glow with spring animation */}
              <motion.div
                className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-brand-yellow-500/10 blur-3xl pointer-events-none"
                animate={reduceMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.08, 0.15, 0.08] }}
                transition={{ duration: 3, ease: 'easeInOut', repeat: reduceMotion ? 0 : Infinity }}
              />

              {/* Watermark Background Icon with spring float */}
              <motion.div
                className="absolute right-4 bottom-4 text-white opacity-[0.03] pointer-events-none select-none"
                animate={reduceMotion ? {} : { rotate: [0, 2, -2, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 5, ease: 'easeInOut', repeat: reduceMotion ? 0 : Infinity }}
              >
                <Landmark className="w-44 h-44" />
              </motion.div>

              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-start">
                  <motion.div
                    className="p-3 bg-brand-yellow text-brand-blue rounded-xl shadow-[2px_2px_0px_var(--color-brand-blue-700)]"
                    whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
                  >
                    <Landmark className="h-5 w-5" />
                  </motion.div>
                  <span className="text-[10px] font-bold tracking-widest bg-brand-ink text-brand-yellow px-3 py-1.5 rounded-lg uppercase font-subheading border border-brand-yellow/30">
                    EMPRENDEDORES
                  </span>
                </div>

                <div className="space-y-2">
                  <motion.h3
                    className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white"
                    whileHover={{ x: 4, color: 'var(--color-brand-yellow-500)', transition: { type: 'spring', stiffness: 300, damping: 25 } }}
                  >
                    Logística E-Commerce
                  </motion.h3>
                  <p className="text-brand-blue-100 text-sm leading-relaxed font-sans">
                    Gestión de última milla pensada para PyMEs y marcas locales. Optimizamos tus costos de envío con retiros programados a domicilio y soporte post-venta.
                  </p>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {['Soporte comercial dedicado vía WhatsApp', 'Entregas contrareembolso integradas sin cargo extra', 'Rastreo digital transparente para tus clientes'].map((feat) => (
                    <motion.li
                      key={feat}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
                      className="flex items-start gap-2 text-xs sm:text-sm text-white font-sans"
                    >
                      <ShieldCheck className="h-4.5 w-4.5 text-brand-yellow shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-blue-500/20 relative z-10 flex justify-end">
                <Link
                  href="/servicios/emprendedores"
                  className="cta-nested-pill bg-brand-yellow text-brand-blue px-6 py-2.5 text-xs font-bold tracking-wider font-subheading rounded-full flex items-center gap-2"
                >
                  <span>Conocer más</span>
                  <motion.span
                    className="cta-nested-icon bg-brand-blue/10 w-6 h-6 rounded-full flex items-center justify-center"
                    whileHover={{ x: 4, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Card 2: MercadoLibre Flex - lg:col-span-5 lg:row-span-1 (Yellow Card) */}
          <motion.div
            className="lg:col-span-5 lg:row-span-1 double-bezel-outer p-2 rounded-2xl bg-brand-yellow-500/10 border border-brand-yellow-500/20 hover:border-brand-blue/30 hover:bg-brand-yellow-500/15 hover:shadow-[0_20px_40px_-15px_rgba(255,236,1,0.15)] group overflow-hidden flex flex-col"
            whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
          >
            <div className="double-bezel-inner bg-gradient-to-br from-brand-yellow-500 to-brand-yellow-400 p-6 sm:p-8 rounded-xl border border-brand-yellow-500/20 shadow-sm flex flex-col justify-between h-full relative overflow-hidden text-left text-brand-blue-900 flex-1">
              {/* Subtle Radial Glow with spring animation */}
              <motion.div
                className="absolute bottom-0 right-0 w-36 h-36 rounded-full bg-white/20 blur-2xl pointer-events-none"
                animate={reduceMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 3, ease: 'easeInOut', repeat: reduceMotion ? 0 : Infinity }}
              />

              {/* Watermark Background Icon with spring float */}
              <motion.div
                className="absolute right-4 bottom-4 text-brand-blue opacity-[0.04] pointer-events-none select-none"
                animate={reduceMotion ? {} : { rotate: [0, -2, 2, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 5, ease: 'easeInOut', repeat: reduceMotion ? 0 : Infinity }}
              >
                <ShoppingBag className="w-32 h-32" />
              </motion.div>

              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-start">
                  <motion.div
                    className="p-3 bg-brand-blue text-white rounded-xl shadow-[2px_2px_0px_rgba(0,39,124,0.4)]"
                    whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
                  >
                    <ShoppingBag className="h-5 w-5" />
                  </motion.div>
                  <span className="text-[10px] font-bold tracking-widest bg-brand-blue text-white px-3 py-1.5 rounded-lg uppercase font-subheading border border-brand-blue/20">
                    MERCADOLIBRE
                  </span>
                </div>

                <div className="space-y-1">
                  <motion.h3
                    className="text-xl sm:text-2xl font-display uppercase tracking-tight text-brand-blue"
                    whileHover={{ x: 4, color: 'var(--color-brand-blue-950)', transition: { type: 'spring', stiffness: 300, damping: 25 } }}
                  >
                    Envíos Flex Meli
                  </motion.h3>
                  <p className="text-brand-blue-950/80 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                    Socio logístico homologado para tus envíos rápidos en el día. Recolección gratis en tu local y entrega garantizada dentro del SLA establecido.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-brand-blue/10 relative z-10 flex justify-end">
                <Link
                  href="/servicios/flex"
                  className="cta-nested-pill bg-brand-blue text-white px-6 py-2.5 text-xs font-bold tracking-wider font-subheading rounded-full flex items-center gap-2 shadow-md hover:bg-brand-blue-800"
                >
                  <span>Configurar Flex</span>
                  <motion.span
                    className="cta-nested-icon bg-white/10 w-6 h-6 rounded-full flex items-center justify-center"
                    whileHover={{ x: 4, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Corporativos (White Card) - lg:col-span-5 lg:row-span-1 */}
          <motion.div
            className="lg:col-span-5 lg:row-span-1 double-bezel-outer p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100 hover:border-brand-blue-300 hover:shadow-antigravity-deep group overflow-hidden flex flex-col"
            whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
          >
            <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full relative overflow-hidden text-left text-brand-ink flex-1">
              {/* Subtle Radial Glow with spring animation */}
              <motion.div
                className="absolute bottom-0 right-0 w-36 h-36 rounded-full bg-brand-blue-500/5 blur-2xl pointer-events-none"
                animate={reduceMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.08, 0.15, 0.08] }}
                transition={{ duration: 3, ease: 'easeInOut', repeat: reduceMotion ? 0 : Infinity }}
              />

              {/* Watermark Background Icon with spring float */}
              <motion.div
                className="absolute right-4 bottom-4 text-brand-blue opacity-[0.02] pointer-events-none select-none"
                animate={reduceMotion ? {} : { rotate: [0, 2, -2, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 5, ease: 'easeInOut', repeat: reduceMotion ? 0 : Infinity }}
              >
                <Building2 className="w-32 h-32" />
              </motion.div>

              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-start">
                  <motion.div
                    className="p-3 bg-brand-yellow text-brand-blue rounded-xl shadow-[2px_2px_0px_var(--color-brand-blue-700)]"
                    whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
                  >
                    <Building2 className="h-5 w-5" />
                  </motion.div>
                  <span className="text-[10px] font-bold tracking-widest bg-brand-blue-50 text-brand-blue-600 px-3 py-1.5 rounded-lg uppercase font-subheading border border-brand-blue-100">
                    CORPORATIVO
                  </span>
                </div>

                <div className="space-y-1">
                  <motion.h3
                    className="text-xl sm:text-2xl font-display uppercase tracking-tight text-brand-blue"
                    whileHover={{ x: 4, color: 'var(--color-brand-blue-900)', transition: { type: 'spring', stiffness: 300, damping: 25 } }}
                  >
                    Soluciones Corporativas
                  </motion.h3>
                  <p className="text-brand-blue-500 text-xs sm:text-sm leading-relaxed font-sans">
                    Soporte a gran escala con facturación mensual, ruteos especiales para grandes volúmenes y entregas express coordinadas en Mar del Plata.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-brand-blue-100 relative z-10 flex justify-end">
                <Link
                  href="/contacto"
                  className="cta-nested-pill bg-brand-yellow text-brand-blue px-6 py-2.5 text-xs font-bold tracking-wider font-subheading rounded-full flex items-center gap-2 shadow-sm"
                >
                  <span>Abrir Cuenta Corriente</span>
                  <motion.span
                    className="cta-nested-icon bg-brand-blue/10 w-6 h-6 rounded-full flex items-center justify-center"
                    whileHover={{ x: 4, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Marquee of Local Partners - Spring-based, no CSS infinite animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
          className="mt-24 pt-12 border-t border-brand-blue-500/10"
        >
          <p className="text-center font-subheading text-xs tracking-widest text-brand-blue-300 mb-6 uppercase">
            Marcas locales que confían en nosotros
          </p>
          <div className="w-full overflow-hidden relative py-4">
            {/* Gradient fade mask overlay */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-ink to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-ink to-transparent z-10 pointer-events-none" />

            <motion.div
              ref={marqueeRef}
              style={{ x: marqueeSpring }}
              className="flex gap-16 whitespace-nowrap items-center"
            >
              {/* Set 1 */}
              <div className="flex gap-16 items-center">
                {partners.map((partner, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ color: 'var(--color-brand-yellow-500)', scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
                    className="font-display text-2xl tracking-wider text-brand-blue-300/40 uppercase cursor-default"
                  >
                    {partner}
                  </motion.span>
                ))}
              </div>
              {/* Set 2 (for infinite loop) */}
              <div className="flex gap-16 items-center" aria-hidden="true">
                {partners.map((partner, index) => (
                  <motion.span
                    key={`dup-${index}`}
                    whileHover={{ color: 'var(--color-brand-yellow-500)', scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
                    className="font-display text-2xl tracking-wider text-brand-blue-300/40 uppercase cursor-default"
                  >
                    {partner}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}