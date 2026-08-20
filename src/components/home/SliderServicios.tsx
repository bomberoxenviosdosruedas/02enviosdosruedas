'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import {
  ShoppingBag,
  Wrench,
  Shirt,
  FileText,
  ClipboardCheck,
  Package,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Clock,
  MapPin,
  Flame,
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface IndustrySlide {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  desc: string;
  icon: React.ElementType;
  sla: string;
  keyBenefits: string[];
  ctaUrl: string;
  ctaText: string;
  variant: 'dark-blue' | 'yellow-accent' | 'frost-blue' | 'clean-white';
}

const INDUSTRY_SLIDES: IndustrySlide[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce & Tiendas Online',
    badge: 'MÁXIMA VELOCIDAD',
    subtitle: 'Envíos Flex Same-Day & Next-Day',
    desc: 'Retiramos tus ventas online y las entregamos en la misma jornada en todo Mar del Plata. Integración directa para Mercado Libre Flex y tiendas independientes con reputación garantizada.',
    icon: ShoppingBag,
    sla: 'Entregas en el día',
    keyBenefits: ['Rendición de dinero en el acto', 'Seguimiento por WhatsApp', 'Cero suspensiones de Flex'],
    ctaUrl: '/servicios/enviosflex',
    ctaText: 'Ver Solución Flex',
    variant: 'yellow-accent',
  },
  {
    id: 'repuestos',
    title: 'Repuestos & Talleres Mecánicos',
    badge: 'ENTREGA CRÍTICA',
    subtitle: 'Cadetería Urgente para el Sector Automotor',
    desc: 'Despacho prioritario de autopartes, repuestos y herramientas hacia talleres, concesionarios y lubricentros de la ciudad sin demoras que frenen tus reparaciones.',
    icon: Wrench,
    sla: 'Prioridad Express',
    keyBenefits: ['Hasta 5 kg por moto', 'Entregas puerta a puerta', 'Cobro contrareembolso'],
    ctaUrl: '/cotizar/express',
    ctaText: 'Cotizar Envío Urgente',
    variant: 'dark-blue',
  },
  {
    id: 'indumentaria',
    title: 'Moda, Calzado & Indumentaria',
    badge: 'LOGÍSTICA INVERSA',
    subtitle: 'Showrooms, Locales & E-Shops',
    desc: 'Distribución ágil con servicio de logística inversa para cambios de talle y devoluciones sin fricción para tus clientas. Cuidado riguroso del empaque.',
    icon: Shirt,
    sla: 'LowCost o Express',
    keyBenefits: ['Gestión de cambios en puerta', 'Tarifas agrupadas LowCost', 'Bolsas y cajas protegidas'],
    ctaUrl: '/servicios/envios-lowcost',
    ctaText: 'Ver Tarifas LowCost',
    variant: 'frost-blue',
  },
  {
    id: 'tramites',
    title: 'Trámites & Gestiones Corporativas',
    badge: 'MÁXIMA SEGURIDAD',
    subtitle: 'Cadetería Administrativa y Cobranzas',
    desc: 'Gestión segura de contratos, facturas, firmas de documentos y depósitos bancarios o cobros en efectivo con rendición inmediata y comprobante digital.',
    icon: FileText,
    sla: 'Custodia Certificada',
    keyBenefits: ['Firma en conformidad', 'Depósitos bancarios', 'Mensajeros de confianza'],
    ctaUrl: '/cotizar/express',
    ctaText: 'Solicitar Cadetería',
    variant: 'clean-white',
  },
  {
    id: 'insumos',
    title: 'Insumos Médicos & Gastronómicos',
    badge: 'PUNTUALIDAD RIGUROSA',
    subtitle: 'Envíos Programados para Comercios',
    desc: 'Abastecimiento de insumos descartables, ópticas, laboratorios, cafeterías y locales gastronómicos que requieren cumplimiento horario riguroso.',
    icon: ClipboardCheck,
    sla: 'Horarios Programados',
    keyBenefits: ['Franjas pactadas de entrega', 'Depósito central Friuli 1972', 'Atención personalizada'],
    ctaUrl: '/servicios/plan-emprendedores',
    ctaText: 'Conocer Plan Comercios',
    variant: 'dark-blue',
  },
  {
    id: 'encomiendas',
    title: 'Encomiendas & Distribución 3PL',
    badge: 'LOGÍSTICA INTEGRAL',
    subtitle: 'Almacenamiento, Picking y Despacho',
    desc: 'Guardamos tu stock en nuestro centro logístico de Chauvín, preparamos tus pedidos apenas entra la venta y despachamos sin que tengas que ocuparte del empaque.',
    icon: Package,
    sla: 'Fulfillment Total',
    keyBenefits: ['Depósito seguro en MDQ', 'Picking & Packing profesional', 'Control de stock diario'],
    ctaUrl: '/servicios/plan-emprendedores',
    ctaText: 'Ver Servicio 3PL',
    variant: 'yellow-accent',
  },
];

export default function SliderServicios() {
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoRotateIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotation with pause on hover
  useEffect(() => {
    if (reduceMotion || isPaused) return;

    autoRotateIntervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % INDUSTRY_SLIDES.length);
    }, 6500);

    return () => {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
        autoRotateIntervalRef.current = null;
      }
    };
  }, [reduceMotion, isPaused]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + INDUSTRY_SLIDES.length) % INDUSTRY_SLIDES.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % INDUSTRY_SLIDES.length);
  };

  const activeSlide = INDUSTRY_SLIDES[current];
  const IconComponent = activeSlide.icon;

  // Background variants
  const isDarkBlue = activeSlide.variant === 'dark-blue';
  const isYellowAccent = activeSlide.variant === 'yellow-accent';
  const isFrostBlue = activeSlide.variant === 'frost-blue';

  return (
    <section
      id="slider-servicios"
      className="py-24 bg-gradient-to-b from-brand-white-50 via-brand-blue-50/30 to-brand-white-50 text-brand-ink relative z-10 overflow-hidden border-t border-brand-blue-100/60"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative ambient backgrounds */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-xs font-subheading tracking-widest font-bold border border-brand-yellow-400 uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 fill-brand-blue-900" />
              <span>Logística a Medida de tu Rubro · MDQ 2026</span>
            </div>

            <h2 className="text-brand-blue-700 text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.95]">
              Soluciones Especiales para Industrias
            </h2>

            <p className="text-brand-blue-600/90 font-sans text-base sm:text-lg max-w-2xl leading-relaxed">
              Adaptamos nuestra flota propia de motos a la dinámica de tu negocio. Elegí tu sector y descubrí cómo optimizamos tus entregas urbanas.
            </p>
          </div>

          {/* Navigation Controls & Counter */}
          <div className="lg:col-span-4 flex items-center justify-start lg:justify-end gap-3">
            <div className="font-mono text-xs font-bold text-brand-blue-500 bg-brand-blue-50 px-3 py-1.5 rounded-full border border-brand-blue-100 mr-2">
              <span className="text-brand-blue-700 text-sm font-extrabold">{current + 1}</span> / {INDUSTRY_SLIDES.length}
            </div>

            <button
              type="button"
              onClick={handlePrev}
              aria-label="Industria anterior"
              className="h-11 w-11 rounded-xl border-2 border-brand-blue-200 bg-white text-brand-blue-700 hover:bg-brand-blue-700 hover:text-white hover:border-brand-blue-700 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Siguiente industria"
              className="h-11 w-11 rounded-xl border-2 border-brand-yellow-500 bg-brand-yellow-500 text-brand-blue-900 hover:bg-brand-yellow-400 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95 font-bold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Quick Industry Navigation Pills */}
        <div
          role="tablist"
          aria-label="Seleccionar rubro industrial"
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar"
        >
          {INDUSTRY_SLIDES.map((slide, idx) => {
            const isSelected = idx === current;
            const MiniIcon = slide.icon;

            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setCurrent(idx)}
                className={cn(
                  'px-4 py-2 rounded-full font-subheading text-xs sm:text-sm uppercase tracking-wider font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer border shrink-0',
                  isSelected
                    ? 'bg-brand-blue-700 text-white border-brand-blue-700 shadow-sm scale-105'
                    : 'bg-white text-brand-blue-700 border-brand-blue-100 hover:bg-brand-blue-50 hover:border-brand-blue-300'
                )}
              >
                <MiniIcon className={cn('w-4 h-4', isSelected ? 'text-brand-yellow-500' : 'text-brand-blue-500')} />
                <span>{slide.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Showcase Hero Card (Double Bezel with Fluid Transitions) */}
        <div
          className={cn(
            'double-bezel-outer p-2 sm:p-3 rounded-3xl transition-all duration-500 shadow-md',
            isDarkBlue && 'bg-brand-blue-950/90 border-brand-blue-700',
            isYellowAccent && 'bg-brand-yellow-100/80 border-brand-yellow-300',
            isFrostBlue && 'bg-brand-blue-100/70 border-brand-blue-200',
            !isDarkBlue && !isYellowAccent && !isFrostBlue && 'bg-brand-blue-50/90 border-brand-blue-100'
          )}
        >
          <div
            className={cn(
              'double-bezel-inner p-6 sm:p-10 lg:p-12 rounded-2xl border relative overflow-hidden transition-colors duration-500',
              isDarkBlue && 'bg-gradient-to-br from-brand-blue-800 to-brand-blue-950 text-white border-brand-blue-700/60',
              isYellowAccent && 'bg-gradient-to-br from-white via-brand-yellow-50/60 to-white text-brand-ink border-brand-yellow-200',
              isFrostBlue && 'bg-gradient-to-br from-white via-brand-blue-50/60 to-white text-brand-ink border-brand-blue-100',
              !isDarkBlue && !isYellowAccent && !isFrostBlue && 'bg-white text-brand-ink border-brand-blue-50'
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left Visual Column: Icon Box & SLA Callout */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-5">
                  <div
                    className={cn(
                      'w-28 h-28 sm:w-32 sm:h-32 rounded-3xl flex items-center justify-center shadow-lg border-2 relative transition-transform hover:scale-105',
                      isDarkBlue
                        ? 'bg-brand-blue-900/80 border-brand-yellow-500 text-brand-yellow-500 shadow-brand-yellow-500/10'
                        : 'bg-brand-yellow-500 text-brand-blue-900 border-brand-yellow-400 shadow-brand-yellow-500/30'
                    )}
                  >
                    <IconComponent className="h-14 w-14 sm:h-16 sm:w-16" />
                  </div>

                  {/* Operational Tag */}
                  <div
                    className={cn(
                      'px-4 py-1.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider border flex items-center gap-1.5',
                      isDarkBlue
                        ? 'bg-white/10 text-brand-yellow-400 border-white/15'
                        : 'bg-brand-blue-50 text-brand-blue-700 border-brand-blue-200'
                    )}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>SLA: {activeSlide.sla}</span>
                  </div>
                </div>

                {/* Right Info Column: Title, Description, Benefits & CTA */}
                <div className="lg:col-span-8 space-y-6 text-left">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={cn(
                          'px-3 py-0.5 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider',
                          isDarkBlue
                            ? 'bg-brand-yellow-500 text-brand-blue-900'
                            : 'bg-brand-blue-700 text-white'
                        )}
                      >
                        {activeSlide.badge}
                      </span>
                      <span
                        className={cn(
                          'text-xs font-subheading uppercase tracking-wider font-bold',
                          isDarkBlue ? 'text-brand-blue-200' : 'text-brand-blue-500'
                        )}
                      >
                        {activeSlide.subtitle}
                      </span>
                    </div>

                    <h3
                      className={cn(
                        'text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-none',
                        isDarkBlue ? 'text-white' : 'text-brand-blue-700'
                      )}
                    >
                      {activeSlide.title}
                    </h3>
                  </div>

                  <p
                    className={cn(
                      'font-sans text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl',
                      isDarkBlue ? 'text-brand-blue-100/90' : 'text-brand-ink/85'
                    )}
                  >
                    {activeSlide.desc}
                  </p>

                  {/* Bullet Benefits Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {activeSlide.keyBenefits.map((benefit, bIdx) => (
                      <div
                        key={bIdx}
                        className={cn(
                          'p-3 rounded-xl border flex items-center gap-2.5 text-xs font-sans font-medium',
                          isDarkBlue
                            ? 'bg-white/5 border-white/10 text-brand-blue-50'
                            : 'bg-brand-blue-50/70 border-brand-blue-100 text-brand-blue-900'
                        )}
                      >
                        <ShieldCheck
                          className={cn(
                            'w-4 h-4 shrink-0',
                            isDarkBlue ? 'text-brand-yellow-400' : 'text-brand-blue-600'
                          )}
                        />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action CTA Button (Nested Pill) */}
                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <Link
                      href={activeSlide.ctaUrl}
                      className={cn(
                        'inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-subheading text-sm sm:text-base uppercase tracking-wider font-bold transition-all shadow-md group active:scale-98 cursor-pointer',
                        isDarkBlue
                          ? 'bg-brand-yellow-500 text-brand-blue-900 hover:bg-brand-yellow-400'
                          : 'bg-brand-blue-700 text-white hover:bg-brand-blue-800'
                      )}
                    >
                      <span>{activeSlide.ctaText}</span>
                      <span
                        className={cn(
                          'w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1',
                          isDarkBlue ? 'bg-brand-blue-900/15 text-brand-blue-900' : 'bg-white/20 text-white'
                        )}
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>

                    <Link
                      href="/contacto"
                      className={cn(
                        'font-subheading text-xs sm:text-sm uppercase tracking-wider font-bold transition-colors underline-offset-4 hover:underline py-2',
                        isDarkBlue ? 'text-brand-blue-200 hover:text-white' : 'text-brand-blue-600 hover:text-brand-blue-800'
                      )}
                    >
                      Consultar Cuenta Corriente Comercial →
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Bar & Indicators */}
        <div className="flex justify-center items-center gap-1 mt-8">
          {INDUSTRY_SLIDES.map((_, idx) => (
            <div key={idx} className="min-w-[44px] min-h-[44px] flex items-center justify-center">
              <button
                type="button"
                onClick={() => setCurrent(idx)}
                aria-label={`Ir al rubro ${idx + 1}`}
                className={cn(
                  'h-2 rounded-full transition-all duration-300 cursor-pointer border',
                  idx === current
                    ? 'w-10 bg-brand-yellow-500 border-brand-yellow-400'
                    : 'w-2 bg-brand-blue-200 border-brand-blue-200 hover:bg-brand-blue-400'
                )}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}