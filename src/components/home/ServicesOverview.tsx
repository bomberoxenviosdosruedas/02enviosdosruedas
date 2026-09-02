'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Zap, Package, Truck, Warehouse, Info, X, MapPin, ShieldCheck } from 'lucide-react';

interface ServiceDetails {
  summary: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

interface ServiceStats {
  time: string;
  price: string;
  weight: string;
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  city: string;
  founded: string;
  imageUrl: string;
  cardStyleCenter: string;
  cardStyleSide: string;
  textColor: string;
  titleColor: string;
  descColor: string;
  imgBlend: string;
  badgeStyle: string;
  statBoxStyle: string;
  statValStyle: string;
  statLabelStyle: string;
  hintColor: string;
  stats: ServiceStats;
  details: ServiceDetails;
}

export default function ServicesOverview() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Snappy spring configs
  const springConfigSnappy = { type: 'spring' as const, stiffness: 300, damping: 25 };
  const springConfigCarousel = { type: 'spring' as const, stiffness: 140, damping: 22 };

  const services: ServiceItem[] = [
    {
      id: 'express',
      title: 'Envíos Express',
      description: 'Mensajería en moto con entregas inmediatas de alta prioridad.',
      href: '/servicios/envios-express',
      icon: Zap,
      badge: 'URGENTE',
      city: 'Cobertura MDQ',
      founded: '+7 Años de Trayectoria',
      imageUrl: '/cards/fondo_express.webp',
      cardStyleCenter: 'border-brand-yellow-500 bg-gradient-to-br from-brand-blue-700 to-brand-blue-900 shadow-cta-glow text-white',
      cardStyleSide: 'border-brand-blue-500/20 bg-brand-blue-800 text-white/90',
      textColor: 'text-white',
      titleColor: 'text-white group-hover:text-brand-yellow-500',
      descColor: 'text-brand-blue-100',
      imgBlend: 'opacity-25 mix-blend-overlay',
      badgeStyle: 'bg-brand-yellow-500 text-brand-blue-900 border-brand-yellow-400',
      statBoxStyle: 'bg-white/10 border border-white/10 text-white',
      statValStyle: 'text-brand-yellow-500',
      statLabelStyle: 'text-brand-blue-200',
      hintColor: 'text-brand-yellow-500',
      stats: {
        time: '30-90 min',
        price: '$3.700 Base',
        weight: 'Hasta 10 kg',
      },
      details: {
        summary: 'Servicio de mensajería urbana inmediata, ideal para trámites urgentes, despacho de encomiendas y entrega de documentación. Se asigna un repartidor exclusivo para tu envío.',
        features: [
          'Tarifa base de $3.700 hasta 3 km.',
          'Entrega garantizada puerta a puerta en tiempo récord.',
          'Notificación automática de entrega por WhatsApp.'
        ],
        ctaText: 'COTIZÁ TU EXPRESS',
        ctaHref: '/cotizar/express'
      }
    },
    {
      id: 'lowcost',
      title: 'Envíos LowCost',
      description: 'Envíos económicos planificados con retiro y entrega coordinados.',
      href: '/servicios/envios-lowcost',
      icon: Package,
      badge: 'ECONÓMICO',
      city: 'Todo Gral. Pueyrredón',
      founded: 'Tarifa Fija Especial',
      imageUrl: '/cards/fondo_lowcost.webp',
      cardStyleCenter: 'border-brand-blue-500 bg-gradient-to-br from-brand-white-50 to-brand-blue-50 shadow-[8px_8px_0px_rgba(6,54,165,0.2)] text-brand-ink',
      cardStyleSide: 'border-brand-blue-100 bg-white text-brand-ink',
      textColor: 'text-brand-ink',
      titleColor: 'text-brand-ink group-hover:text-brand-blue-700',
      descColor: 'text-brand-blue-600',
      imgBlend: 'opacity-[0.15] grayscale mix-blend-multiply',
      badgeStyle: 'bg-brand-blue-700 text-brand-yellow-500 border-brand-blue-600/30',
      statBoxStyle: 'bg-brand-blue-50/80 border border-brand-blue-100 text-brand-ink',
      statValStyle: 'text-brand-blue-700',
      statLabelStyle: 'text-brand-blue-600',
      hintColor: 'text-brand-blue-700',
      stats: {
        time: 'Same / Next Day',
        price: '$3.000 Base',
        weight: 'Hasta 15 kg',
      },
      details: {
        summary: 'La alternativa ideal para e-commerce locales que buscan optimizar costos de envío. Agrupamos los repartos en rutas inteligentes diarias para ofrecer la tarifa más baja de la ciudad.',
        features: [
          'Tarifa base de $3.000 hasta 3 km.',
          'Retiro gratis a domicilio a partir de 5 envíos diarios.',
          'Dos franjas horarias de entrega en el día.'
        ],
        ctaText: 'PROBÁ EL LOWCOST',
        ctaHref: '/cotizar/lowcost'
      }
    },
    {
      id: 'flex',
      title: 'Envíos Flex',
      description: 'Entregas en el día integradas para tus ventas de MercadoLibre.',
      href: '/servicios/enviosflex',
      icon: Truck,
      badge: 'MERCADOLIBRE FLEX',
      city: 'Mar del Plata y Batán',
      founded: 'Corte extendido 15hs',
      imageUrl: '/cards/fondo_flex.webp',
      cardStyleCenter: 'border-brand-blue-700 bg-gradient-to-br from-brand-yellow-500 to-brand-yellow-400 shadow-[8px_8px_0px_rgba(255,236,1,0.25)] text-brand-ink',
      cardStyleSide: 'border-brand-yellow-500/30 bg-brand-yellow-500 text-brand-ink',
      textColor: 'text-brand-ink',
      titleColor: 'text-brand-ink group-hover:text-brand-blue-900',
      descColor: 'text-brand-blue-900/80',
      imgBlend: 'opacity-20 mix-blend-multiply',
      badgeStyle: 'bg-brand-blue-900 text-white border-brand-blue-700/30',
      statBoxStyle: 'bg-brand-blue-700/10 border border-brand-blue-700/20 text-brand-ink',
      statValStyle: 'text-brand-blue-900',
      statLabelStyle: 'text-brand-blue-800',
      hintColor: 'text-brand-blue-900',
      stats: {
        time: 'En el día',
        price: 'Zonificado LowCost',
        weight: 'Apto Moto / Auto',
      },
      details: {
        summary: 'Habilitá Envíos Flex en tu cuenta de MercadoLibre y despachá todas tus ventas en el mismo día. Mejorá tu reputación y convertite en vendedor destacado con recolección gratuita.',
        features: [
          'Visitas bonificadas según tu volumen diario de entregas.',
          'Reparto coordinado antes de las 20:00 hs.',
          'Recolección a domicilio sin cargo extra por nuestro equipo.'
        ],
        ctaText: 'CONFIGURÁ FLEX',
        ctaHref: '/servicios/enviosflex'
      }
    },
    {
      id: '3pl',
      title: 'E-Commerce & 3PL',
      description: 'Logística integral: almacenamiento, preparación y despacho de pedidos.',
      href: '/servicios/plan-emprendedores',
      icon: Warehouse,
      badge: 'LOGÍSTICA INTEGRAL',
      city: 'Depósito Friuli 1972',
      founded: 'Depósito Inteligente',
      imageUrl: '/cards/fondo_emprendedores.webp',
      cardStyleCenter: 'border-brand-blue-500 bg-gradient-to-br from-brand-blue-800 to-brand-blue-950 shadow-2xl text-white',
      cardStyleSide: 'border-brand-blue-800/20 bg-brand-blue-900 text-white/90',
      textColor: 'text-white',
      titleColor: 'text-white group-hover:text-brand-yellow-500',
      descColor: 'text-brand-blue-100',
      imgBlend: 'opacity-25 mix-blend-overlay',
      badgeStyle: 'bg-brand-blue-900 text-white border-brand-blue-700/30',
      statBoxStyle: 'bg-white/10 border border-white/10 text-white',
      statValStyle: 'text-brand-yellow-500',
      statLabelStyle: 'text-brand-blue-200',
      hintColor: 'text-brand-yellow-500',
      stats: {
        time: '24 hs / Stock',
        price: 'Planes a Medida',
        weight: 'Sin límite',
      },
      details: {
        summary: 'Almacená tus productos en nuestro depósito central en Mar del Plata y olvidate del empaque y los despachos. Nosotros nos encargamos de todo el proceso logístico para que te dediques a vender.',
        features: [
          'Control de stock digital por sistema QR/barras.',
          'Embalaje profesional (packing personalizado y seguro).',
          'Distribución de pedidos Same-Day y Next-Day.'
        ],
        ctaText: 'CONSULTÁ PLANES',
        ctaHref: '/servicios/plan-emprendedores'
      }
    },
  ];

  const totalServices = services.length;
  const autoRotateIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotation with deterministic timing
  useEffect(() => {
    if (!isAutoRotate || reduceMotion || selectedService) {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
        autoRotateIntervalRef.current = null;
      }
      return;
    }

    autoRotateIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalServices);
    }, 4500);

    return () => {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
        autoRotateIntervalRef.current = null;
      }
    };
  }, [isAutoRotate, totalServices, reduceMotion, selectedService]);

  const handlePrev = useCallback(() => {
    setIsAutoRotate(false);
    setActiveIndex((prev) => (prev - 1 + totalServices) % totalServices);
  }, [totalServices]);

  const handleNext = useCallback(() => {
    setIsAutoRotate(false);
    setActiveIndex((prev) => (prev + 1) % totalServices);
  }, [totalServices]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedService) {
        if (e.key === 'Escape') setSelectedService(null);
        return;
      }
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, selectedService]);

  // Calculate card transforms using spring-based derived values
  const getCardTransform = (index: number) => {
    const offset = (index - activeIndex + totalServices / 2) % totalServices - totalServices / 2;
    const absOffset = Math.abs(offset);
    const isCenter = offset === 0;

    if (reduceMotion) {
      return {
        rotateY: 0,
        translateZ: 0,
        translateX: 0,
        opacity: isCenter ? 1 : 0,
        scale: isCenter ? 1 : 0.7,
        zIndex: isCenter ? totalServices : totalServices - absOffset,
      };
    }

    const rotateY = offset * -28;
    const translateZ = isCenter ? 120 : -absOffset * 180;
    const translateX = offset * (isSmallScreen ? 140 : 260);
    const opacity = isCenter ? 1 : Math.max(0.15, 1 - absOffset * 0.4);
    const scale = isCenter ? 1.05 : Math.max(0.65, 1 - absOffset * 0.18);

    return { rotateY, translateZ, translateX, opacity, scale, zIndex: totalServices - absOffset };
  };

  return (
    <section
      id="services-overview"
      className="py-24 bg-[#052C87] text-white relative overflow-hidden"
      style={{ perspective: '2000px' }}
      onMouseEnter={() => setIsAutoRotate(false)}
      onMouseLeave={() => !selectedService && setIsAutoRotate(true)}
    >
      {/* Background Decorative Asymmetric Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-yellow-500/5 rounded-full blur-3xl pointer-events-none"
        animate={reduceMotion ? {} : { scale: [1, 1.05, 1] }}
        transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header with Viewport Entry */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8"
        >
          <div>
            <div className="px-4 py-1.5 bg-[#0950F6] text-[#FFF12E] rounded-full text-xs font-subheading font-bold tracking-widest inline-block uppercase shadow-glow-yellow mb-3 border border-[#FFF12E]/40">
              NUESTROS SERVICIOS
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-tight leading-none text-balance">
              SOLUCIONES LOGÍSTICAS <br />
              <span className="text-[#FFF12E] drop-shadow-[0_2px_10px_rgba(255,241,46,0.35)] underline decoration-[#0950F6] underline-offset-8">
                A TU MEDIDA
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              type="button"
              onClick={() => setIsAutoRotate(!isAutoRotate)}
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className={`px-4 py-2 rounded-full text-xs font-bold font-subheading tracking-wider border transition-colors cursor-pointer ${
                isAutoRotate
                  ? 'bg-[#FFF12E] text-[#0950F6] border-[#FFF12E] shadow-glow-yellow'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
              }`}
            >
              {isAutoRotate ? '⚡ ROTACIÓN AUTOMÁTICA' : 'ROTACIÓN PAUSADA'}
            </motion.button>

            <div className="flex items-center gap-2">
              <motion.button
                type="button"
                onClick={handlePrev}
                whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                className="p-3 rounded-full bg-white/10 hover:bg-brand-yellow-500 hover:text-brand-blue-900 border border-white/20 cursor-pointer transition-colors"
                aria-label="Anterior Servicio"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                type="button"
                onClick={handleNext}
                whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                className="p-3 rounded-full bg-white/10 hover:bg-brand-yellow-500 hover:text-brand-blue-900 border border-white/20 cursor-pointer transition-colors"
                aria-label="Siguiente Servicio"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* 3D Tilted Card Carousel Container */}
        <div
          ref={carouselRef}
          className="relative h-[500px] sm:h-[540px] flex items-center justify-center my-8"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const transform = getCardTransform(index);
            const isCenter = transform.opacity === 1;

            return (
              <motion.button
                key={service.id}
                type="button"
                onClick={() => {
                  if (isCenter) {
                    setSelectedService(service);
                  } else {
                    setActiveIndex(index);
                    setIsAutoRotate(false);
                  }
                }}
                className="absolute w-[290px] sm:w-[350px] h-[440px] sm:h-[490px] rounded-3xl cursor-pointer select-none group text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
                style={{
                  transformStyle: 'preserve-3d',
                  zIndex: transform.zIndex,
                  willChange: 'transform, opacity',
                }}
                animate={{
                  rotateY: transform.rotateY,
                  translateZ: transform.translateZ,
                  translateX: transform.translateX,
                  opacity: transform.opacity,
                  scale: transform.scale,
                }}
                transition={
                  reduceMotion
                    ? { duration: 0.01 }
                    : springConfigCarousel
                }
                whileHover={isCenter && !reduceMotion ? { scale: 1.02, transition: springConfigSnappy } : undefined}
              >
                {/* Card Structure with Color Block Themes */}
                <div
                  className={`w-full h-full rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden border-4 shadow-2xl ${
                    isCenter ? service.cardStyleCenter : service.cardStyleSide
                  }`}
                >
                  {/* Background Image with Layer Blend */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill={true}
                      sizes="(max-width: 768px) 290px, 350px"
                      className={`object-cover ${service.imgBlend}`}
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/20 to-transparent opacity-60" />
                  </div>

                  {/* Center Card Ambient Glow Overlay */}
                  {isCenter && (
                    <motion.div
                      className="absolute bottom-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20 -mr-12 -mb-12"
                      style={{
                        backgroundColor: index === 3 ? 'var(--color-brand-blue-500)' : 'var(--color-brand-yellow-500)',
                      }}
                      animate={reduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
                      transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
                    />
                  )}

                  {/* Watermark Background Icon */}
                  <motion.div
                    className="absolute right-4 bottom-4 opacity-[0.06] pointer-events-none select-none"
                    animate={isCenter && !reduceMotion ? { rotate: [0, 2, -2, 0], scale: [1, 1.02, 1] } : {}}
                    transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
                  >
                    <Icon className="w-48 h-48" />
                  </motion.div>

                  {/* Top Badge Symbol & Serie Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <motion.div
                      className="flex items-center gap-2.5"
                      whileHover={reduceMotion ? undefined : { scale: 1.05, transition: springConfigSnappy }}
                    >
                      <div className="p-3 bg-brand-yellow-500 text-brand-blue-900 rounded-xl shadow-[2px_2px_0px_var(--color-brand-blue-700)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className={`text-[10px] font-bold font-subheading px-2.5 py-1 rounded-full border shadow-sm ${service.badgeStyle}`}>
                        {service.badge}
                      </span>
                    </motion.div>
                  </div>

                  {/* Middle Service Information */}
                  <div className="relative z-10 space-y-2 mt-auto">
                    <div className={`text-xs font-bold uppercase tracking-widest font-subheading flex items-center gap-1 ${service.hintColor}`}>
                      <MapPin className="w-3.5 h-3.5" />
                      {service.city}
                    </div>
                    <motion.h3
                      className={`font-display text-2xl sm:text-3xl font-extrabold uppercase leading-none text-balance ${service.titleColor}`}
                      whileHover={reduceMotion ? undefined : { x: 4, transition: springConfigSnappy }}
                    >
                      {service.title}
                    </motion.h3>
                    <p className={`text-xs line-clamp-2 leading-relaxed ${service.descColor}`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Stats Grid & Callout */}
                  <div className="relative z-10 pt-4 border-t border-black/5 grid grid-cols-3 gap-2 text-center">
                    <div className={`p-2 rounded-xl backdrop-blur-sm ${service.statBoxStyle}`}>
                      <div className="text-sm font-bold font-subheading truncate">{service.stats.time}</div>
                      <div className={`text-[9px] uppercase font-bold tracking-wider ${service.statLabelStyle}`}>ENTREGA</div>
                    </div>
                    <div className={`p-2 rounded-xl backdrop-blur-sm ${service.statBoxStyle}`}>
                      <div className="text-sm font-bold font-subheading truncate">{service.stats.price}</div>
                      <div className={`text-[9px] uppercase font-bold tracking-wider ${service.statLabelStyle}`}>TARIFA</div>
                    </div>
                    <div className={`p-2 rounded-xl backdrop-blur-sm ${service.statBoxStyle}`}>
                      <div className="text-sm font-bold font-subheading truncate">{service.stats.weight}</div>
                      <div className={`text-[9px] uppercase font-bold tracking-wider ${service.statLabelStyle}`}>PESO</div>
                    </div>
                  </div>

                  {/* Center Card Click Hint */}
                  {isCenter && (
                    <motion.div
                      className="relative z-10 mt-3 text-center"
                      animate={reduceMotion ? {} : { opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
                    >
                      <span className={`inline-flex items-center gap-1.5 text-xs font-bold font-subheading tracking-wider underline uppercase ${service.hintColor}`}>
                        <Info className="w-3.5 h-3.5" />
                        Mirá la Ficha Técnica
                      </span>
                    </motion.div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Carousel Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mt-8"
          role="group"
          aria-label="Navegación de servicios"
        >
          {services.map((service, i) => (
            <motion.button
              key={service.id}
              type="button"
              onClick={() => {
                setActiveIndex(i);
                setIsAutoRotate(false);
              }}
              aria-label={`Ir al servicio ${service.title}${i === activeIndex ? ', servicio actual' : ''}`}
              aria-current={i === activeIndex ? 'true' : 'false'}
              className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500`}
              whileHover={i !== activeIndex && !reduceMotion ? { scale: 1.2, transition: springConfigSnappy } : undefined}
              whileTap={reduceMotion ? undefined : { scale: 0.9 }}
            >
              <motion.span
                className={`h-2.5 rounded-full block ${
                  i === activeIndex ? 'bg-brand-yellow-500 shadow-cta-glow' : 'bg-white/30 hover:bg-white/60 border border-brand-blue-200'
                }`}
                animate={{ width: i === activeIndex ? '2.5rem' : '0.625rem' }}
                transition={springConfigSnappy}
              />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Interactive Modal for Selected Service Details */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-50 bg-brand-blue-950/80 backdrop-blur-md flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="double-bezel-outer p-2 rounded-3xl bg-brand-blue-50/10 border border-brand-blue-100/20 max-w-2xl w-full"
            >
              <div className="double-bezel-inner bg-brand-blue-700 border border-brand-blue-500/20 rounded-2xl p-6 sm:p-8 text-white relative shadow-2xl space-y-6">
                {/* Close Modal Button */}
                <motion.button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  whileHover={reduceMotion ? undefined : { scale: 1.1, rotate: 90, transition: springConfigSnappy }}
                  whileTap={reduceMotion ? undefined : { scale: 0.9 }}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-brand-yellow-500 hover:text-brand-blue-900 transition-colors cursor-pointer z-20"
                  aria-label="Cerrar ficha técnica"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Modal Header */}
                <div className="flex items-center gap-4 text-left">
                  <div className="p-4 bg-brand-yellow-500 text-brand-blue-900 rounded-2xl shadow-[3px_3px_0px_var(--color-brand-blue-900)]">
                    {React.createElement(selectedService.icon, { className: "w-8 h-8" })}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-brand-yellow-500 font-subheading tracking-widest uppercase">
                      {selectedService.founded} • {selectedService.city}
                    </span>
                    <h3 id="service-modal-title" className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-balance mt-0.5">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Description & Features Box */}
                <div className="space-y-4 bg-brand-ink/40 p-5 rounded-2xl border border-brand-blue-500/10 text-left">
                  <p className="text-sm sm:text-base leading-relaxed text-brand-blue-100 font-sans">
                    {selectedService.details.summary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-brand-blue-500/10">
                    <span className="text-xs font-subheading text-brand-yellow-500 font-bold uppercase tracking-wider block">Beneficios Clave:</span>
                    {selectedService.details.features.map((feat: string, fIdx: number) => (
                      <motion.div
                        key={fIdx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: fIdx * 0.08 }}
                        className="flex items-start gap-2 text-xs sm:text-sm text-white"
                      >
                        <ShieldCheck className="w-4 h-4 text-brand-yellow-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Statistics Row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
                  className="grid grid-cols-3 gap-3 text-center"
                >
                  <div className="bg-brand-ink/60 border border-brand-blue-500/20 p-3 rounded-xl">
                    <span className="text-xl font-bold font-subheading text-brand-yellow-500 block truncate">
                      {selectedService.stats.time}
                    </span>
                    <span className="text-[10px] text-brand-blue-200 font-bold uppercase tracking-wider">Tiempos</span>
                  </div>
                  <div className="bg-brand-ink/60 border border-brand-blue-500/20 p-3 rounded-xl">
                    <span className="text-xl font-bold font-subheading text-white block truncate">
                      {selectedService.stats.price}
                    </span>
                    <span className="text-[10px] text-brand-blue-200 font-bold uppercase tracking-wider">Precio Base</span>
                  </div>
                  <div className="bg-brand-ink/60 border border-brand-blue-500/20 p-3 rounded-xl">
                    <span className="text-xl font-bold font-subheading text-brand-yellow-500 block truncate">
                      {selectedService.stats.weight}
                    </span>
                    <span className="text-[10px] text-brand-blue-200 font-bold uppercase tracking-wider">Capacidad</span>
                  </div>
                </motion.div>

                {/* Action Footer */}
                <div className="pt-2 flex justify-between items-center gap-4">
                  <motion.button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    whileHover={reduceMotion ? undefined : { x: -4, transition: springConfigSnappy }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    className="text-xs text-brand-blue-300 hover:text-white underline uppercase font-bold tracking-wider cursor-pointer"
                  >
                    Volver Atrás
                  </motion.button>
                  <a
                    href={selectedService.details.ctaHref}
                    className="cta-nested-pill bg-brand-yellow-500 text-brand-blue-900 px-6 py-2.5 text-sm font-subheading font-bold uppercase hover:bg-brand-yellow-400"
                  >
                    <span>{selectedService.details.ctaText}</span>
                    <span className="cta-nested-icon bg-brand-blue-900/10">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}