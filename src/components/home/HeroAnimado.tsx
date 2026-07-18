'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Zap, MapPin } from 'lucide-react';

interface FloatCardProps {
  depth: number;
  children: React.ReactNode;
  className?: string;
}

function FloatCard({ depth, children, className }: FloatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hoverDepth, setHoverDepth] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty('--rotate-x', `${-y * 8}deg`);
      card.style.setProperty('--rotate-y', `${x * 8}deg`);
    };

    const handleMouseLeave = () => {
      card.style.setProperty('--rotate-x', '0deg');
      card.style.setProperty('--rotate-y', '0deg');
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-500 ease-smooth group ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transform: `translateZ(${depth}px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))`,
        boxShadow: hoverDepth ? 'var(--shadow-antigravity-deep)' : 'var(--shadow-float)',
      }}
      onMouseEnter={() => setHoverDepth(true)}
      onMouseLeave={() => setHoverDepth(false)}
    >
      {children}
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18,
    },
  },
};

export default function HeroAnimado() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[95dvh] flex items-center pt-32 pb-20 overflow-hidden bg-brand-blue-700 text-white"
      aria-label="Hero principal"
    >
      {/* Background mesh gradient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(6,54,165,0.25)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,236,1,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(0,32,104,0.15)_0%,transparent_50%)]" />
      </div>

      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div
          className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center"
          role="img"
          aria-label="Sección hero con tarjetas 3D flotantes del centro de control logístico"
        >
          {/* Left: Copy */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex" style={{ animationDelay: prefersReducedMotion ? '0ms' : '0ms' }}>
              <span className="px-4 py-2 rounded-full text-[11px] font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue border border-brand-yellow shadow-[0_0_20px_rgba(255,236,1,0.3)]">
                Tu Solución Confiable
              </span>
            </div>

            {/* Title - Anton Display with kinetic stretch */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-[-0.02em] leading-[1.05] sm:leading-[1.05] lg:leading-[1.0] text-white flex flex-col items-center lg:items-start select-none space-y-2">
              <span className="kinetic-font-stretch cursor-pointer hover:text-brand-yellow transition-colors duration-300">
                Mensajería y Logística
              </span>
              <span className="kinetic-font-stretch bg-brand-yellow px-3 py-0.5 text-brand-blue inline-block hover:bg-white transition-colors duration-300 text-left">
                E-Commerce
              </span>
              <span className="kinetic-font-stretch cursor-pointer hover:text-brand-yellow transition-colors duration-300">
                en Mar del Plata
              </span>
            </h1>

            {/* Body */}
            <p className="text-lg max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed text-brand-blue-100">
              Somos tu partner estratégico en mensajería, envíos en el día y delivery de última milla. Soluciones ágiles, seguras y competitivas para potenciar tu marca.
            </p>

            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              {/* Primary CTA - Nested Pill Yellow */}
              <Link
                href="/cotizar/express"
                id="hero-cta-primary"
                className="w-full sm:w-auto relative inline-flex items-center justify-center gap-3 bg-brand-yellow text-brand-blue font-subheading tracking-wider text-sm uppercase cta-nested-pill border-2 border-brand-yellow shadow-[0_0_20px_rgba(255,236,1,0.3)] transition-all duration-300 ease-smooth hover:shadow-cta-glow hover:scale-[1.02] active:scale-[0.98] font-bold"
              >
                <span className="relative z-10">Solicitar Servicio</span>
                <span className="cta-nested-icon relative z-10 w-8 h-8 rounded-full bg-brand-blue/15 text-brand-blue flex items-center justify-center transition-all duration-300 ease-smooth group-hover:translate-x-1 group-hover:bg-brand-blue group-hover:text-brand-yellow">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              {/* Elevated CTA on blue bg - Nested Pill White */}
              <Link
                href="/servicios/envios-express"
                id="hero-cta-secondary"
                className="w-full sm:w-auto relative inline-flex items-center justify-center gap-3 bg-white text-brand-blue font-subheading tracking-wider text-sm uppercase cta-nested-pill border-2 border-brand-blue-100 shadow-elevated transition-all duration-300 ease-smooth hover:shadow-hover-lift hover:-translate-y-0.5 active:scale-[0.98] font-bold"
              >
                <span className="relative z-10">Ver Servicios</span>
                <span className="cta-nested-icon relative z-10 w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center transition-all duration-300 ease-smooth group-hover:translate-x-1 group-hover:bg-brand-blue group-hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            {/* Trust Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8 border-t border-white/10 w-full max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg text-brand-yellow">
                  <Shield className="h-4 w-4" />
                </div>
                <span className="text-[11px] font-subheading tracking-widest uppercase text-brand-blue-100">100% SEGURO</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg text-brand-yellow">
                  <Zap className="h-4 w-4" />
                </div>
                <span className="text-[11px] font-subheading tracking-widest uppercase text-brand-blue-100">RÁPIDO</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg text-brand-yellow">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-[11px] font-subheading tracking-widest uppercase text-brand-blue-100">COBERTURA TOTAL</span>
              </div>
            </div>
          </div>

          {/* Right: Control Tower - 3D Floating Cards */}
          <div
            className="relative h-[380px] sm:h-[450px] w-full flex justify-center items-center overflow-visible"
            style={{ perspective: '1000px' }}
            aria-hidden="true"
          >
            <div
              className="w-full max-w-[400px] lg:max-w-none h-full relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Card 1: Map Representation (depth: 10px) */}
              <FloatCard depth={10} className="absolute top-6 sm:top-8 right-0 w-[78%] z-20">
                <div className="relative rounded-2xl overflow-hidden border border-brand-blue-100 bg-white p-2.5 sm:p-3 shadow-md aspect-[4/3]">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/card_mapa.webp)' }} />
                  <div className="absolute inset-0 bg-brand-blue-700/10" />
                  <div className="relative mt-3 flex items-center justify-between text-brand-blue font-mono" style={{ transform: 'translateZ(20px)' }}>
                    <span className="text-[11px] font-bold uppercase tracking-wide">Ruteo de Envíos</span>
                    <span className="text-[9px] px-1.5 py-0.5 border border-brand-blue-300 bg-brand-blue-50 text-brand-blue-700 font-bold uppercase rounded-full">Optimizado</span>
                  </div>
                </div>
              </FloatCard>

              {/* Card 2: Transit Details (depth: 40px) */}
              <FloatCard depth={40} className="absolute bottom-4 sm:bottom-6 left-0 w-[74%] z-30">
                <div className="relative rounded-2xl overflow-hidden border border-brand-blue-500 bg-brand-blue-700 p-3.5 sm:p-4 text-white shadow-xl aspect-[4/3]">
                  <div className="flex items-center gap-3 mb-2.5" style={{ transform: 'translateZ(10px)' }}>
                    <div className="p-2 sm:p-2 rounded-xl bg-brand-yellow text-brand-blue">
                      <svg className="h-4.5 w-4.5 sm:h-5 sm:w-5 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
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
              </FloatCard>

              {/* Floating Info Pill (depth: 70px) */}
              <FloatCard depth={70} className="absolute top-1/2 left-1/4 -translate-y-1/2 z-40">
                <div className="px-4 py-2 sm:px-5 sm:py-2.5 bg-brand-yellow text-brand-blue font-mono tracking-widest text-[10px] sm:text-[11px] rounded-full border border-brand-yellow flex items-center gap-1.5 sm:gap-2 font-bold shadow-md">
                  <span className="h-2 w-2 rounded-full bg-brand-blue-400 animate-pulse" />
                  ENTREGA FLEX ACTIVA
                </div>
              </FloatCard>

              {/* Counter Pill (depth: 80px) */}
              <FloatCard depth={80} className="absolute -bottom-3 right-3 z-50">
                <div className="px-4 py-2 bg-white text-brand-blue-700 font-display text-xl rounded-xl border border-brand-blue-100 shadow-elevated flex items-center gap-2">
                  <span className="text-brand-yellow-500">+</span>
                  <Counter target={5200} duration={2000} delay={1100} className="font-display" />
                  <span className="text-sm font-subheading tracking-widest ml-1 mt-1 text-brand-blue-400">ENVÍOS</span>
                </div>
              </FloatCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ target, duration = 2000, delay = 0, className = '' }: { target: number; duration?: number; delay?: number; className?: string }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const timer = setTimeout(() => {
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        setCount(Math.floor(eased * target));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [target, duration, delay]);

  return <span className={className}>{count.toLocaleString()}</span>;
}