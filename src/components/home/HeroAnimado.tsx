'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useReducedMotion, type Variants, type Transition } from 'motion/react';
import { Bike, Shield, Zap, MapPin, ArrowRight } from 'lucide-react';
import LogisticaNetworkCanvas from './LogisticaNetworkCanvas';
import gsap from 'gsap';

// Spring configuration following HyperFrames standard: stiffness: 100, damping: 20
const springConfig: Transition = { type: 'spring', stiffness: 100, damping: 20 };
const springConfigSnappy: Transition = { type: 'spring', stiffness: 300, damping: 25 };

// Container variants with orchestrated stagger (capped at ~500ms total)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export default function HeroAnimado() {
  const reduceMotion = useReducedMotion();
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  // Mouse tracking for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply spring physics to mouse tracking (HyperFrames standard: stiffness: 100, damping: 20)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  // Float offsets for badges with spring physics
  const floatX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const floatY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-12, 12]), springConfig);
  const floatXInv = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, -15]), springConfig);
  const floatYInv = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    if (e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (touch.clientX - rect.left) / width - 0.5;
    const y = (touch.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    if (reduceMotion) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  // Parallax scroll using transform only
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, 150]);

  // Counter animation using GSAP (deterministic, seek-safe)
  useEffect(() => {
    if (!counterRef.current || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    gsap.to(counterRef.current, {
      innerHTML: 5000,
      duration: 2.5,
      snap: { innerHTML: 1 },
      ease: 'power3.out',
      delay: 1.8,
    });
  }, []);

  // Reduced motion: reset mouse tracking
  useEffect(() => {
    if (reduceMotion) {
      mouseX.set(0);
      mouseY.set(0);
    }
  }, [reduceMotion]);

  return (
    <section
      id="hero-animado"
      className="relative min-h-[95dvh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-blue text-white section-fade-bottom"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      {/* Background patterns - using transform for parallax */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 pointer-events-none"
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.02),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,236,1,0.02),transparent_50%)]" />
      </motion.div>

      {/* Interactive Logistics Network Background */}
      <LogisticaNetworkCanvas />

      {/* Bottom gradient fade to white section */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-brand-white-50 pointer-events-none" />

      {/* Background illustration overlay with topographic feel */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <Image
          src="/hero-background.jpeg"
          alt="Textura de Mapa de calles"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue border border-brand-yellow cta-pulse shadow-accent-sm">
                Tu Solución Confiable
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-[-0.03em] leading-[1.15] sm:leading-[1.1] lg:leading-[1.05] text-white flex flex-col items-center lg:items-start select-none"
            >
              <span className="kinetic-font-stretch cursor-pointer hover:text-brand-yellow">
                Mensajería y Logística
              </span>
              <span className="kinetic-font-stretch bg-brand-yellow px-2.5 py-0.5 text-brand-blue inline-block my-1 sm:my-1.5 lg:my-0 hover:bg-white">
                E-Commerce
              </span>
              <span className="kinetic-font-stretch cursor-pointer hover:text-brand-yellow">
                en Mar del Plata
              </span>
            </motion.h1>

            {/* Body Text */}
            <motion.p
              variants={itemVariants}
              className="text-lg max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed text-brand-blue-100"
            >
              Somos tu partner estratégico en mensajería, envíos en el día y delivery de última milla. Soluciones ágiles, seguras y competitivas para potenciar tu marca.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/cotizar/express"
                id="hero-cta-solicitar"
                className="w-full sm:w-auto bg-brand-yellow text-brand-blue font-mono tracking-wider text-sm uppercase cta-nested-pill border border-brand-yellow hover:shadow-cta-glow transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.95] flex items-center justify-between font-bold"
              >
                <span>Solicitar Servicio</span>
                <span className="cta-nested-icon bg-brand-blue/15 text-brand-blue transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/servicios/envios-express"
                id="hero-cta-servicios"
                className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-mono tracking-wider text-sm uppercase cta-nested-pill border border-white/30 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.95] flex items-center justify-between group"
              >
                <span>Ver Servicios</span>
                <span className="cta-nested-icon bg-white/10 text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>

            {/* Features list */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8 border-t border-white/10 w-full max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg text-brand-yellow">
                  <Shield className="h-4 w-4" />
                </div>
                <span className="text-xs font-subheading tracking-widest uppercase text-brand-blue-100">100% SEGURO</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg text-brand-yellow">
                  <Zap className="h-4 w-4" />
                </div>
                <span className="text-xs font-subheading tracking-widest uppercase text-brand-blue-100">RÁPIDO</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg text-brand-yellow">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-xs font-subheading tracking-widest uppercase text-brand-blue-100">COBERTURA TOTAL</span>
              </div>
            </motion.div>
          </div>

          {/* Graphical Representation / Floating Cards (Inversa Flat Style) */}
          <div
            className="relative h-[380px] sm:h-[450px] w-full mt-10 lg:mt-0 flex justify-center items-center overflow-visible"
            style={{ perspective: 1000 }}
          >
            {/* 3D Container with mouse-following tilt */}
            <motion.div
              className="w-full max-w-[400px] lg:max-w-none h-full relative"
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              {/* Card 1: Map Representation */}
              <motion.div
                className="absolute top-8 sm:top-12 right-0 w-[78%] z-25"
                initial={{ opacity: 0, z: -100 }}
                animate={{ opacity: 1, z: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5, duration: 0.8 }}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(10px)',
                }}
                whileHover={{ scale: 1.02, transition: springConfigSnappy }}
              >
                <div className="relative rounded-2xl overflow-hidden border border-brand-blue-100 bg-white p-2.5 sm:p-3 shadow-[4px_4px_0px_var(--color-brand-blue-600)]">
                  <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
                    <Image
                      src="/card_mapa.webp"
                      alt="Mapa de Cobertura de Mar del Plata"
                      fill
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                      className="rounded-xl object-cover h-40 sm:h-48 w-full"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-brand-ink font-mono" style={{ transform: 'translateZ(30px)' }}>
                    <span className="text-[11px] font-bold uppercase tracking-wide">Ruteo de Envíos</span>
                    <span className="text-[9px] px-1.5 py-0.5 border border-brand-blue-400 bg-brand-white-50 text-brand-blue-700 font-bold uppercase rounded-full">Optimizado</span>
                  </div>
                </div>
              </motion.div>

              {/* Badge 1: Seguridad Garantizada - with perpetual micro-float */}
              <motion.div
                className="absolute top-12 left-4 sm:left-8 z-30"
                initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                animate={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7,
                  duration: 0.6,
                }}
                style={{
                  x: reduceMotion ? 0 : floatX,
                  y: reduceMotion ? 0 : floatY,
                  transform: 'translateZ(30px)',
                }}
                whileHover={{ scale: 1.05, transition: springConfigSnappy }}
              >
                <div className="px-4 py-2 sm:px-5 sm:py-2.5 bg-white text-brand-blue-700 font-mono tracking-widest text-[10px] sm:text-[11px] rounded-full border border-brand-blue-100 flex items-center gap-1.5 sm:gap-2 font-bold shadow-elevated">
                  <Shield className="h-3.5 w-3.5 text-brand-blue-500" />
                  SEGURIDAD GARANTIZADA
                </div>
              </motion.div>

              {/* Badge 2: 100% MARPLATENSE - with perpetual micro-float (inverse) */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-4 z-35"
                initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                animate={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: 0.9,
                  duration: 0.6,
                }}
                style={{
                  x: reduceMotion ? 0 : floatXInv,
                  y: reduceMotion ? 0 : floatYInv,
                  transform: 'translateZ(50px)',
                }}
                whileHover={{ scale: 1.05, transition: springConfigSnappy }}
              >
                <div className="px-4 py-2 sm:px-5 sm:py-2.5 bg-brand-yellow text-brand-blue font-mono tracking-widest text-[10px] sm:text-[11px] rounded-full border border-brand-yellow flex items-center gap-1.5 sm:gap-2 font-bold shadow-[2px_2px_0px_var(--color-brand-blue)]">
                  <MapPin className="h-3.5 w-3.5" />
                  100% MARPLATENSE
                </div>
              </motion.div>

              {/* Badge 3: Envíos en el Día - with perpetual micro-float */}
              <motion.div
                className="absolute bottom-8 left-6 sm:left-12 z-40"
                initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                animate={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: 1.1,
                  duration: 0.6,
                }}
                style={{
                  x: reduceMotion ? 0 : floatX,
                  y: reduceMotion ? 0 : floatYInv,
                  transform: 'translateZ(70px)',
                }}
                whileHover={{ scale: 1.05, transition: springConfigSnappy }}
              >
                <div className="px-4 py-2 sm:px-5 sm:py-2.5 bg-brand-blue-700 text-white font-mono tracking-widest text-[10px] sm:text-[11px] rounded-full border border-brand-yellow flex items-center gap-1.5 sm:gap-2 font-bold shadow-[2px_2px_0px_var(--color-brand-yellow)]">
                  <Zap className="h-3.5 w-3.5 text-brand-yellow" />
                  ENVÍOS EN EL DÍA
                </div>
              </motion.div>

              {/* Counter Pill - with spring pop entrance */}
              <motion.div
                className="absolute -bottom-4 right-4 z-45"
                initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
                animate={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  delay: 1.4,
                  duration: 0.7,
                }}
                style={{
                  x: reduceMotion ? 0 : floatX,
                  y: reduceMotion ? 0 : floatYInv,
                  transform: 'translateZ(90px)',
                }}
                whileHover={{ scale: 1.03, transition: springConfigSnappy }}
              >
                <div className="px-4 py-2 bg-white text-brand-blue-700 font-display text-xl rounded-xl border border-brand-blue-100 shadow-elevated flex items-center gap-2">
                  <span className="text-brand-yellow-500">+</span>
                  <span ref={counterRef} className="font-display">0</span>
                  <span className="text-sm font-subheading tracking-widest ml-1 mt-1 text-brand-blue-700">ENVÍOS</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}