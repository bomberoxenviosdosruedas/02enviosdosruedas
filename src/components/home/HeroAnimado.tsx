'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'motion/react';
import { Bike, Shield, Zap, MapPin, ArrowRight } from 'lucide-react';
import LogisticaNetworkCanvas from './LogisticaNetworkCanvas';
import gsap from 'gsap';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    }
  },
};

export default function HeroAnimado() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const floatX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const floatY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), springConfig);

  const floatXInv = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, -20]), springConfig);
  const floatYInv = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
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
    mouseX.set(0);
    mouseY.set(0);
  };

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, 150]);

  const counterRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (counterRef.current && !hasAnimated) {
      setHasAnimated(true);
      gsap.to(counterRef.current, {
        innerHTML: 5000,
        duration: 2,
        snap: { innerHTML: 1 },
        ease: 'power3.out',
        delay: 1.5,
      });
    }
  }, [hasAnimated]);

  return (
    <section
      id="hero-animado"
      className="relative min-h-[95dvh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-blue text-white section-fade-bottom"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
    >
      {/* Background patterns */}
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.02),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,236,1,0.02),transparent_50%)]" />
      </motion.div>

      {/* Interactive Logistics Network Background */}
      <LogisticaNetworkCanvas />

      {/* Remove unnecessary AI-generated gradient to white */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-brand-white-50 pointer-events-none" />

      {/* Background illustration overlay with topographic feel */}
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none">
        <Image
          src="/hero-background.jpeg"
          alt="Textura de Mapa de calles"
          fill
          priority
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
            {/* Contenedor envolvente 3D */}
            <motion.div
              className="w-full max-w-[400px] lg:max-w-none h-full relative"
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Card 1: Map Representation */}
              <motion.div
                className="absolute top-8 sm:top-12 right-0 w-[78%] z-25"
                initial={{ opacity: 0, z: -100 }}
                animate={{ opacity: 1, z: 0, transition: { duration: 0.9, ease: "easeOut", delay: 0.5 } }}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(10px)',
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative rounded-2xl overflow-hidden border border-brand-blue-100 bg-white p-2.5 sm:p-3 shadow-[4px_4px_0px_var(--color-brand-blue-600)]">
                  <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
                    <Image
                      src="/card_mapa.webp"
                      alt="Mapa de Cobertura de Mar del Plata"
                      width={400}
                      height={300}
                      className="rounded-xl object-cover h-40 sm:h-48 w-full"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-brand-ink font-mono" style={{ transform: 'translateZ(30px)' }}>
                    <span className="text-[11px] font-bold uppercase tracking-wide">Ruteo de Envíos</span>
                    <span className="text-[9px] px-1.5 py-0.5 border border-brand-blue-400 bg-brand-white-50 text-brand-blue-700 font-bold uppercase rounded-full">Optimizado</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Transit Details */}
              <motion.div
                className="absolute bottom-6 sm:bottom-8 left-0 w-[74%] z-30"
                initial={{ opacity: 0, z: -100 }}
                animate={{ opacity: 1, z: 0, transition: { duration: 0.9, ease: "easeOut", delay: 0.7 } }}
                style={{
                  transformStyle: 'preserve-3d',
                  x: floatX,
                  y: floatY,
                  transform: 'translateZ(40px)',
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-yellow bg-brand-blue-700 p-3.5 sm:p-4 text-white shadow-[4px_4px_0px_var(--color-brand-yellow)]">
                  <div className="flex items-center gap-3 mb-2.5" style={{ transform: 'translateZ(10px)' }}>
                    <div className="p-2 sm:p-2 rounded-xl bg-brand-yellow text-brand-blue">
                      <Bike className="h-4.5 w-4.5 sm:h-5 sm:w-5 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white font-display">Reparto en Curso</h4>
                      <p className="text-[9px] sm:text-[10px] text-brand-yellow font-mono">ID: MDQ-FLEX-2026</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 text-xs font-mono" style={{ transform: 'translateZ(20px)' }}>
                    <div className="flex justify-between border-b border-white/10 pb-1">
                      <span className="text-brand-blue-300 text-[10px] sm:text-[11px]">Origen</span>
                      <span className="font-semibold text-white text-[10px] sm:text-[11px]">CD Centro</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-blue-300 text-[10px] sm:text-[11px]">Destinatario</span>
                      <span className="font-semibold text-brand-yellow text-[10px] sm:text-[11px]">Zona Güemes</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Info Pill */}
              <motion.div
                className="absolute top-1/2 left-1/4 -translate-y-1/2 z-35"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.9 } }}
                style={{
                  x: floatXInv,
                  y: floatYInv,
                  transform: 'translateZ(70px)',
                }}
              >
                <div className="px-4 py-2 sm:px-5 sm:py-2.5 bg-brand-yellow text-brand-blue font-mono tracking-widest text-[10px] sm:text-[11px] rounded-full border border-brand-yellow flex items-center gap-1.5 sm:gap-2 font-bold shadow-[2px_2px_0px_var(--color-brand-blue)]">
                  <span className="h-2 w-2 rounded-full bg-brand-blue-400 animate-ping" />
                  ENTREGA FLEX ACTIVA
                </div>
              </motion.div>

              {/* Counter Pill */}
              <motion.div
                className="absolute -bottom-4 right-4 z-40"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, delay: 1.1 } }}
                style={{
                  x: floatX,
                  y: floatYInv,
                  transform: 'translateZ(80px)',
                }}
              >
                <div className="px-4 py-2 bg-white text-brand-blue-700 font-display text-xl rounded-xl border border-brand-blue-100 shadow-elevated flex items-center gap-2">
                  <span className="text-brand-yellow-500">+</span>
                  <span ref={counterRef} className="font-display">0</span>
                  <span className="text-sm font-subheading tracking-widest ml-1 mt-1 text-brand-blue-400">ENVÍOS</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
