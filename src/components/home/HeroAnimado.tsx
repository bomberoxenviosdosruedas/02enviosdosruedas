'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Bike, Shield, Zap, MapPin, ArrowRight } from 'lucide-react';
import LogisticaNetworkCanvas from './LogisticaNetworkCanvas';

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

  return (
    <section 
      id="hero-animado" 
      className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-blue text-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.02),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,236,1,0.02),transparent_50%)]" />
      
      {/* Interactive Logistics Network Background */}
      <LogisticaNetworkCanvas />

      {/* Decorative overlay for layout integration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-blue to-transparent opacity-90 pointer-events-none" />

      {/* Background illustration overlay with topographic feel */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none">
        <Image
          src="/hero-background.jpeg"
          alt="Textura de Mapa de calles"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Info */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="px-2.5 py-1.5 rounded-[3.6px] text-xs font-mono font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue border border-brand-yellow">
                Tu Solución Confiable
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-[-0.03em] leading-[1.15] sm:leading-[1.1] lg:leading-[1.05] text-white"
            >
              Mensajería y Logística <br />
              <span className="bg-brand-yellow px-2.5 py-0.5 text-brand-blue inline-block my-1 sm:my-1.5 lg:my-0">E-Commerce</span> <br />
              en Mar del Plata
            </motion.h1>

            {/* Body Text */}
            <motion.p 
              variants={itemVariants}
              className="text-lg max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed text-slate-200"
            >
              Somos tu partner estratégico en mensajería, envíos en el día y delivery de última milla. Soluciones ágiles, seguras y competitivas para potenciar tu marca.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/cotizar/express"
                id="hero-cta-solicitar"
                className="w-full sm:w-auto bg-brand-yellow text-brand-blue font-mono tracking-wider text-sm uppercase px-8 py-4 rounded-[3.6px] border border-brand-yellow transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 font-bold"
              >
                Solicitar Servicio
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/servicios/envios-express"
                id="hero-cta-servicios"
                className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-mono tracking-wider text-sm uppercase px-8 py-4 rounded-[3.6px] border border-white/30 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Ver Servicios
              </Link>
            </motion.div>

            {/* Features list */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 pt-8 border-t border-white/10 w-full max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start">
                <div className="p-2.5 bg-white/10 rounded-[3.6px] mb-2 text-brand-yellow">
                  <Shield className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-300">100% SEGURO</span>
              </div>
              
              <div className="flex flex-col items-center lg:items-start">
                <div className="p-2.5 bg-white/10 rounded-[3.6px] mb-2 text-brand-yellow">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-300">ULTRA RÁPIDO</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="p-2.5 bg-white/10 rounded-[3.6px] mb-2 text-brand-yellow">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-300">COBERTURA TOTAL</span>
              </div>
            </motion.div>
          </div>

          {/* Graphical Representation / Floating Cards (Inversa Flat Style) */}
          <div 
            className="col-span-1 lg:col-span-5 relative h-[380px] sm:h-[450px] w-full mt-10 lg:mt-0 flex justify-center items-center overflow-visible"
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
                <div className="relative rounded-none overflow-hidden border border-slate-200 bg-white p-2.5 sm:p-3">
                  <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
                    <Image
                      src="/card_mapa.webp"
                      alt="Mapa de Cobertura de Mar del Plata"
                      width={400}
                      height={300}
                      className="rounded-none object-cover h-40 sm:h-48 w-full"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-slate-800 font-mono" style={{ transform: 'translateZ(30px)' }}>
                    <span className="text-[11px] font-bold uppercase tracking-wide">Ruteo de Envíos</span>
                    <span className="text-[9px] px-1.5 py-0.5 border border-emerald-500 bg-emerald-50 text-emerald-800 font-bold uppercase rounded-[3.6px]">Optimizado</span>
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
                <div className="relative rounded-none overflow-hidden border border-slate-200 bg-slate-900 p-3.5 sm:p-4 text-white">
                  <div className="flex items-center gap-3 mb-2.5" style={{ transform: 'translateZ(10px)' }}>
                    <div className="p-2 sm:p-2 rounded-[3.6px] bg-brand-yellow text-brand-blue">
                      <Bike className="h-4.5 w-4.5 sm:h-5 sm:w-5 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white font-display">Reparto en Curso</h4>
                      <p className="text-[9px] sm:text-[10px] text-brand-yellow font-mono">ID: MDQ-FLEX-2026</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 text-xs font-mono" style={{ transform: 'translateZ(20px)' }}>
                    <div className="flex justify-between border-b border-white/10 pb-1">
                      <span className="text-slate-400 text-[10px] sm:text-[11px]">Origen</span>
                      <span className="font-semibold text-white text-[10px] sm:text-[11px]">CD Centro</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-[10px] sm:text-[11px]">Destinatario</span>
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
                <div className="px-4 py-2 sm:px-5 sm:py-2.5 bg-brand-yellow text-brand-blue font-mono tracking-widest text-[10px] sm:text-[11px] rounded-[3.6px] border border-brand-yellow flex items-center gap-1.5 sm:gap-2 font-bold">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  ENTREGA FLEX ACTIVA
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
