'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion, useSpring, useMotionValue } from 'motion/react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Zap, Package, Truck, Warehouse, Info, X, MapPin, ShieldCheck } from 'lucide-react';

export default function ServicesOverview() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Spring configurations following HyperFrames standard
  const springConfig = { stiffness: 100, damping: 20 };
  const springConfigSnappy = { stiffness: 300, damping: 25 };
  const springConfigCarousel = { stiffness: 120, damping: 22 };

  // Track active index for spring animations
  const activeIndexMotion = useMotionValue(0);
  const activeIndexSpring = useSpring(activeIndexMotion, springConfigCarousel);

  const services = [
    {
      id: 'express',
      title: 'Envíos Express',
      description: 'Mensajería en moto con entregas inmediatas de alta prioridad.',
      href: '/servicios/envios-express',
      icon: Zap,
      badge: 'URGENTE',
      city: 'Cobertura MDQ',
      founded: '15+ Años en Calles',
      imageUrl: '/cards/fondo_express.webp',
      cardStyleCenter: 'border-brand-yellow bg-gradient-to-br from-brand-blue-700 to-brand-blue-900 shadow-cta-glow text-white',
      cardStyleSide: 'border-brand-blue-500/20 bg-brand-blue-800 text-white/90',
      textColor: 'text-white',
      titleColor: 'text-white group-hover:text-brand-yellow',
      descColor: 'text-brand-blue-100',
      imgBlend: 'opacity-25 mix-blend-overlay',
      badgeStyle: 'bg-brand-yellow text-brand-blue border-brand-yellow/30',
      statBoxStyle: 'bg-white/10 border border-white/10 text-white',
      statValStyle: 'text-brand-yellow',
      statLabelStyle: 'text-brand-blue-200',
      hintColor: 'text-brand-yellow',
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
      badgeStyle: 'bg-brand-blue-700 text-brand-yellow border-brand-blue-600/30',
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
      cardStyleCenter: 'border-brand-blue bg-gradient-to-br from-brand-yellow-500 to-brand-yellow-400 shadow-[8px_8px_0px_rgba(255,236,1,0.25)] text-brand-ink',
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
      cardStyleCenter: 'border-brand-blue bg-gradient-to-br from-brand-blue-800 to-brand-blue-950 shadow-2xl text-white',
      cardStyleSide: 'border-brand-blue-800/20 bg-brand-blue-900 text-white/90',
      textColor: 'text-white',
      titleColor: 'text-white group-hover:text-brand-yellow',
      descColor: 'text-brand-blue-100',
      imgBlend: 'opacity-25 mix-blend-overlay',
      badgeStyle: 'bg-brand-blue-900 text-white border-brand-blue-700/30',
      statBoxStyle: 'bg-white/10 border border-white/10 text-white',
      statValStyle: 'text-brand-yellow',
      statLabelStyle: 'text-brand-blue-200',
      hintColor: 'text-brand-yellow',
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

  // Sync activeIndexMotion with activeIndex (with spring)
  useEffect(() => {
    activeIndexMotion.set(activeIndex);
  }, [activeIndex, activeIndexMotion]);

  // Auto-rotation with deterministic timing
  useEffect(() => {
    if (!isAutoRotate || reduceMotion) {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
        autoRotateIntervalRef.current = null;
      }
      return;
    }

    // Deterministic interval - 4500ms exactly
    autoRotateIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalServices);
    }, 4500);

    return () => {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
        autoRotateIntervalRef.current = null;
      }
    };
  }, [isAutoRotate, totalServices, reduceMotion]);

  const handlePrev = () => {
    setIsAutoRotate(false);
    setActiveIndex((prev) => (prev - 1 + totalServices) % totalServices);
  };

  const handleNext = () => {
    setIsAutoRotate(false);
    setActiveIndex((prev) => (prev + 1) % totalServices);
  };

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
      className="py-24 bg-brand-ink text-white relative overflow-hidden"
      style={{ perspective: '2000px' }}
    >
      {/* Background Decorative Asymmetric Glows - no animate-pulse */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-yellow-500/5 rounded-full blur-3xl pointer-events-none"
        animate={reduceMotion ? {} : { scale: [1, 1.02, 1] }}
        transition={{ duration: 4, ease: 'easeInOut', repeat: reduceMotion ? 0 : Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8"
        >
          <div>
            <div className="px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-subheading tracking-widest inline-block uppercase shadow-sm mb-3">
              NUESTROS SERVICIOS
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-tight leading-none text-balance">
              SOLUCIONES LOGÍSTICAS <br />
              <span className="text-brand-yellow drop-shadow-[0_2px_10px_rgba(255,236,1,0.25)] underline decoration-brand-blue-500 underline-offset-8">
                A TU MEDIDA
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => setIsAutoRotate(!isAutoRotate)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-4 py-2 rounded-full text-xs font-bold font-subheading tracking-wider border transition-colors cursor-pointer ${
                isAutoRotate
                  ? 'bg-brand-yellow-500 text-brand-blue-900 border-brand-yellow-500 shadow-cta-glow'
                  : 'bg-brand-blue-50/80 text-brand-blue-400 border-brand-blue-100 hover:bg-brand-blue-100 hover:text-brand-blue-700'
              }`}
            >
              {isAutoRotate ? '⚡ ROTACIÓN AUTOMÁTICA' : 'ROTACIÓN PAUSADA'}
            </motion.button>

            <div className="flex items-center gap-2">
              <motion.button
                onClick={handlePrev}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-brand-blue border border-white/20 cursor-pointer"
                aria-label="Anterior Servicio"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-brand-blue border border-white/20 cursor-pointer"
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
                className="absolute w-[290px] sm:w-[350px] h-[440px] sm:h-[490px] rounded-3xl cursor-pointer select-none group text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
                style={{
                  transformStyle: 'preserve-3d',
                  zIndex: transform.zIndex,
                }}
                // Use spring-based animate for all transform properties
                animate={{
                  rotateY: transform.rotateY,
                  translateZ: transform.translateZ,
                  translateX: transform.translateX,
                  opacity: transform.opacity,
                  scale: transform.scale,
                }}
                transition={reduceMotion
                  ? { duration: 0.01 }
                  : { type: 'spring', stiffness: 120, damping: 22 }}
                whileHover={isCenter ? { scale: 1.02, transition: springConfigSnappy } : undefined}
              >
                {/* Card Structure with Color Block Themes */}
                <div
                  className={`w-full h-full rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden border-4 shadow-2xl ${
                    isCenter ? service.cardStyleCenter : service.cardStyleSide
                  }`}
                >
                  {/* Imagen de fondo premium con mezcla de capa */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill={true}
                      sizes="(max-w-7xl) 350px, 290px"
                      className={`object-cover ${service.imgBlend}`}
                      priority={index === 0}
                    />
                    {/* Gradiente de overlay para garantizar legibilidad de textos */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/20 to-transparent opacity-60" />
                  </div>
                  {/* Subtle Glow Overlay - only on center card with subtle animation */}
                  {isCenter && (
                    <motion.div
                      className="absolute bottom-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20 -mr-12 -mb-12"
                      style={{
                        backgroundColor: index === 3 ? 'var(--color-brand-blue-500)' : 'var(--color-brand-yellow-500)',
                      }}
                      animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
                      transition={{ duration: 3, ease: 'easeInOut', repeat: reduceMotion ? 0 : Infinity }}
                    />
                  )}

                  {/* Huge Watermark Background Icon with subtle float */}
                  <motion.div
                    className="absolute right-4 bottom-4 opacity-[0.06] pointer-events-none select-none"
                    animate={isCenter && !reduceMotion ? { rotate: [0, 2, -2, 0], scale: [1, 1.02, 1] } : {}}
                    transition={{ duration: 4, ease: 'easeInOut', repeat: reduceMotion ? 0 : Infinity }}
                  >
                    <Icon className="w-48 h-48" />
                  </motion.div>

                  {/* Top Badge Symbol & Serie Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <motion.div
                      className="flex items-center gap-2.5"
                      whileHover={{ scale: 1.05, transition: springConfigSnappy }}
                    >
                      <div className="p-3 bg-brand-yellow text-brand-blue rounded-xl shadow-[2px_2px_0px_var(--color-brand-blue-700)]">
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
                      whileHover={{ x: 4, transition: springConfigSnappy }}
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

                  {/* Center Card Click Hint - spring-based pulse instead of animate-pulse */}
                  {isCenter && (
                    <motion.div
                      className="relative z-10 mt-3 text-center"
                      animate={{ opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, ease: 'easeInOut', repeat: reduceMotion ? 0 : Infinity }}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
          className="flex items-center justify-center gap-2 mt-8"
          role="group"
          aria-label="Navegación de servicios"
        >
          {services.map((service, i) => (
            <motion.button
              key={service.id}
              onClick={() => {
                setActiveIndex(i);
                setIsAutoRotate(false);
              }}
              aria-label={`Ir al servicio ${service.title}${i === activeIndex ? ', servicio actual' : ''}`}
              aria-current={i === activeIndex ? 'true' : 'false'}
              className={`min-w-[44px] min-h-[44px] flex items-center justify-center h-2.5 rounded-full cursor-pointer ${
                i === activeIndex ? 'w-10 bg-brand-yellow' : 'w-2.5 bg-white/30 hover:bg-white/60 border border-brand-blue-200'
              }`}
              whileHover={i !== activeIndex ? { scale: 1.2, transition: springConfigSnappy } : undefined}
              whileTap={{ scale: 0.9 }}
              animate={i === activeIndex ? { width: '2.5rem' } : { width: '0.625rem' }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
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
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.3 }}
              className="double-bezel-outer p-2 rounded-3xl bg-brand-blue-50/10 border border-brand-blue-100/20 max-w-2xl w-full"
            >
              <div className="double-bezel-inner bg-brand-blue-700 border border-brand-blue-500/20 rounded-2xl p-6 sm:p-8 text-white relative shadow-2xl space-y-6">
                {/* Close Modal Button */}
                <motion.button
                  onClick={() => setSelectedService(null)}
                  whileHover={{ scale: 1.1, rotate: 90, transition: springConfigSnappy }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-brand-blue transition-colors cursor-pointer z-20"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Modal Header */}
                <div className="flex items-center gap-4 text-left">
                  <div className="p-4 bg-brand-yellow text-brand-blue rounded-2xl shadow-[3px_3px_0px_var(--color-brand-blue-900)]">
                    {React.createElement(selectedService.icon, { className: "w-8 h-8" })}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-brand-yellow font-subheading tracking-widest uppercase">
                      {selectedService.founded} • {selectedService.city}
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-balance mt-0.5">
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
                    <span className="text-xs font-subheading text-brand-yellow font-bold uppercase tracking-wider block">Beneficios Clave:</span>
                    {selectedService.details.features.map((feat: string, fIdx: number) => (
                      <motion.div
                        key={fIdx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: fIdx * 0.08 }}
                        className="flex items-start gap-2 text-xs sm:text-sm text-white"
                      >
                        <ShieldCheck className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
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
                    <span className="text-xl font-bold font-subheading text-brand-yellow block truncate">
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
                    <span className="text-xl font-bold font-subheading text-brand-yellow block truncate">
                      {selectedService.stats.weight}
                    </span>
                    <span className="text-[10px] text-brand-blue-200 font-bold uppercase tracking-wider">Capacidad</span>
                  </div>
                </motion.div>

                {/* Action Footer */}
                <div className="pt-2 flex justify-between items-center gap-4">
                  <motion.button
                    onClick={() => setSelectedService(null)}
                    whileHover={{ x: -4, transition: springConfigSnappy }}
                    whileTap={{ scale: 0.98 }}
                    className="text-xs text-brand-blue-300 hover:text-white underline uppercase font-bold tracking-wider cursor-pointer"
                  >
                    Volver Atrás
                  </motion.button>
                  <a
                    href={selectedService.details.ctaHref}
                    className="cta-nested-pill bg-brand-yellow text-brand-blue px-6 py-2.5 text-sm"
                  >
                    <span>{selectedService.details.ctaText}</span>
                    <span className="cta-nested-icon bg-brand-blue/10">→</span>
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