'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Zap, Package, Truck, Building, Info, X, Clock, ShieldCheck, MapPin } from 'lucide-react';

export default function ServicesOverview() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [reduceMotion, setReduceMotion] = useState(false);

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
      championships: 'EXPRESS',
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
          'Notificación en tiempo real por WhatsApp.'
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
      championships: 'LOWCOST',
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
      championships: 'FLEX',
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
      icon: Building,
      badge: 'LOGÍSTICA INTEGRAL',
      city: 'Depósito Friuli 1972',
      founded: 'Depósito Inteligente',
      championships: '3PL CORPORATIVO',
      stats: {
        time: '24 hs / Stock',
        price: 'Planes a Medida',
        weight: 'Sin límite',
      },
      details: {
        summary: 'Almacená tus productos en nuestro depósito central en Mar del Plata y olvidate del empaque y los despachos. Nosotros nos encargamos de todo el proceso logístico para que te dediques a vender.',
        features: [
          'Control de stock en tiempo real por sistema QR/barras.',
          'Embalaje profesional (packing personalizado y seguro).',
          'Distribución de pedidos Same-Day y Next-Day.'
        ],
        ctaText: 'CONSULTÁ PLANES',
        ctaHref: '/servicios/plan-emprendedores'
      }
    },
  ];

  const totalServices = services.length;

  useEffect(() => {
    const checkMotion = () => {
      const isClassActive = document.documentElement.classList.contains('reduce-motion');
      setReduceMotion(isClassActive);
    };

    checkMotion();

    const observer = new MutationObserver(checkMotion);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoRotate || reduceMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalServices);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoRotate, totalServices, reduceMotion]);

  const handlePrev = () => {
    setIsAutoRotate(false);
    setActiveIndex((prev) => (prev - 1 + totalServices) % totalServices);
  };

  const handleNext = () => {
    setIsAutoRotate(false);
    setActiveIndex((prev) => (prev + 1) % totalServices);
  };

  return (
    <section 
      id="services-overview" 
      className="py-24 bg-brand-ink text-white relative overflow-hidden"
      style={{ perspective: '2000px' }}
    >
      
      {/* Background Decorative Asymmetric Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-yellow-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-subheading tracking-widest inline-block uppercase shadow-sm mb-3">
              NUESTROS SERVICIOS
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-tight leading-none text-balance">
              SOLUCIONES LOGÍSTICAS <br />
              <span className="text-brand-yellow drop-shadow-[0_2px_10px_rgba(255,236,1,0.25)] underline decoration-brand-blue-500 underline-offset-8">
                EN MOVIMIENTO 3D
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAutoRotate(!isAutoRotate)}
              className={`px-4 py-2 rounded-full text-xs font-bold font-subheading tracking-wider border transition-colors cursor-pointer ${
                isAutoRotate 
                  ? 'bg-brand-yellow text-brand-blue border-brand-yellow shadow-cta-glow' 
                  : 'bg-white/10 text-gray-300 border-white/20'
              }`}
            >
              {isAutoRotate ? '⚡ ROTACIÓN AUTOMÁTICA' : 'ROTACIÓN PAUSADA'}
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-brand-blue border border-white/20 transition-all cursor-pointer"
                aria-label="Anterior Servicio"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-brand-blue border border-white/20 transition-all cursor-pointer"
                aria-label="Siguiente Servicio"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3D Tilted Card Carousel Container */}
        <div 
          className="relative h-[500px] sm:h-[540px] flex items-center justify-center my-8"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            // Calculate relative offset from active index
            let offset = index - activeIndex;
            if (offset < -Math.floor(totalServices / 2)) offset += totalServices;
            if (offset > Math.floor(totalServices / 2)) offset -= totalServices;

            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;

            // 3D positioning transform
            const rotateY = reduceMotion ? 0 : offset * -28; // Degree of tilt
            const translateZ = reduceMotion ? 0 : (isCenter ? 120 : -absOffset * 180); // Depth Z
            const translateX = reduceMotion ? 0 : offset * (isSmallScreen ? 140 : 260); // X spread
            const opacity = isCenter ? 1 : (reduceMotion ? 0 : Math.max(0.2, 1 - absOffset * 0.35));
            const scale = isCenter ? 1.05 : (reduceMotion ? 1 : Math.max(0.7, 1 - absOffset * 0.15));

            return (
              <button
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
                className="absolute w-[290px] sm:w-[350px] h-[440px] sm:h-[490px] rounded-3xl transition-[transform,opacity] duration-700 ease-out cursor-pointer select-none group text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex: totalServices - absOffset,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Card Outer Structure with Editorial Border */}
                <div 
                  className={`w-full h-full rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden border-4 transition-[border-color,background-color,box-shadow] duration-300 shadow-2xl ${
                    isCenter 
                      ? 'border-brand-yellow shadow-[8px_8px_0px_rgba(6,54,165,0.3)] bg-brand-blue-700' 
                      : 'border-white/10 bg-brand-blue-700/80 backdrop-blur-md shadow-lg hover:border-white/30'
                  }`}
                >
                  {/* Subtle Radial Glow */}
                  <div className={`absolute bottom-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20 -mr-12 -mb-12 ${
                    isCenter ? 'bg-brand-yellow-500' : 'bg-brand-blue-400'
                  }`} />

                  {/* Huge Watermark Background Icon */}
                  <div className="absolute right-4 bottom-4 text-white opacity-[0.03] pointer-events-none select-none transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6">
                    <Icon className="w-48 h-48" />
                  </div>

                  {/* Top Badge Symbol & Serie Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-3 bg-brand-yellow text-brand-blue rounded-xl shadow-[2px_2px_0px_var(--color-brand-blue-700)] group-hover:scale-105 transition-transform duration-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className={`text-[10px] font-bold font-subheading px-2.5 py-1 rounded-full border shadow-sm ${
                        isCenter
                          ? 'bg-brand-ink text-brand-yellow border-brand-yellow/30'
                          : 'bg-white/10 text-white border-white/20'
                      }`}>
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Middle Service Information */}
                  <div className="relative z-10 space-y-2 mt-auto">
                    <div className="text-xs font-bold text-brand-yellow uppercase tracking-widest font-subheading flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {service.city}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white leading-none group-hover:text-brand-yellow transition-colors text-balance">
                      {service.title}
                    </h3>
                    <p className="text-xs text-brand-blue-100 line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Stats Grid & Callout */}
                  <div className="relative z-10 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white/5 p-2 rounded-xl backdrop-blur-sm">
                      <div className="text-sm font-bold font-subheading text-brand-yellow truncate">{service.stats.time}</div>
                      <div className="text-[9px] text-brand-blue-200 uppercase font-bold tracking-wider">ENTREGA</div>
                    </div>
                    <div className="bg-white/5 p-2 rounded-xl backdrop-blur-sm">
                      <div className="text-sm font-bold font-subheading text-white truncate">{service.stats.price}</div>
                      <div className="text-[9px] text-brand-blue-200 uppercase font-bold tracking-wider">TARIFA</div>
                    </div>
                    <div className="bg-white/5 p-2 rounded-xl backdrop-blur-sm">
                      <div className="text-sm font-bold font-subheading text-brand-yellow truncate">{service.stats.weight}</div>
                      <div className="text-[9px] text-brand-blue-200 uppercase font-bold tracking-wider">PESO</div>
                    </div>
                  </div>

                  {/* Center Card Click Hint */}
                  {isCenter && (
                    <div className="relative z-10 mt-3 text-center animate-pulse">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-yellow font-subheading tracking-wider underline uppercase">
                        <Info className="w-3.5 h-3.5" />
                        Mirá la Ficha Técnica
                      </span>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {services.map((service, i) => (
            <button
              key={service.id}
              onClick={() => {
                setActiveIndex(i);
                setIsAutoRotate(false);
              }}
              className={`h-2.5 rounded-full transition-[width,background-color] duration-300 cursor-pointer ${
                i === activeIndex ? 'w-10 bg-brand-yellow' : 'w-2.5 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Ir al servicio ${service.title}`}
            />
          ))}
        </div>

      </div>

      {/* Interactive Modal for Selected Service Details */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="double-bezel-outer p-2 rounded-3xl bg-brand-blue-50/10 border border-brand-blue-100/20 max-w-2xl w-full"
            >
              <div className="double-bezel-inner bg-brand-blue-700 border border-brand-blue-500/20 rounded-2xl p-6 sm:p-8 text-white relative shadow-2xl space-y-6">
                
                {/* Close Modal Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-brand-blue transition-colors cursor-pointer z-20"
                >
                  <X className="w-5 h-5" />
                </button>

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
                      <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-white">
                        <ShieldCheck className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Statistics Row */}
                <div className="grid grid-cols-3 gap-3 text-center">
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
                </div>

                {/* Action Footer */}
                <div className="pt-2 flex justify-between items-center gap-4">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-xs text-brand-blue-300 hover:text-white underline uppercase font-bold tracking-wider cursor-pointer"
                  >
                    Volver Atrás
                  </button>
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
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
