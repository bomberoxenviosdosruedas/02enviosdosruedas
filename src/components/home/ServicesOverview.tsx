'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Zap, Package, Truck, Warehouse, X, MapPin, ShieldCheck, ExternalLink } from 'lucide-react';
import {
  DROPOFF_DISCOUNT_PERCENT,
  EXPRESS_LEAD_TIME,
  EXPRESS_WINDOW_SHORT,
  FLEX_CUTOFF_TIME,
  FLEX_DELIVERY_DEADLINE,
  LOWCOST_CUTOFF_TIME,
  LOWCOST_DELIVERY_DEADLINE,
  SAME_DAY_FIXED_PRICE,
  STANDARD_WEIGHT_KG,
} from '@/lib/promises';
import { EXPRESS_TIERS, LOW_COST_TIERS } from '@/lib/pricing';
import { trackAnalytics } from '@/lib/analytics';
import NetworkCanvasWrapper from '@/components/home/NetworkCanvasWrapper';
import { CTANestedPill } from '@/components/ui/CTANestedPill';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

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
  stats: ServiceStats;
  details: ServiceDetails;
}

export default function ServicesOverview() {
  const reduceMotion = useReducedMotion();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const closeModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  useEffect(() => {
    if (!selectedService) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
        return;
      }
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    const triggerEl = lastTriggerRef.current;

    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
      triggerEl?.focus();
    };
  }, [selectedService, closeModal]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Spring tokens desde globals.css: --ease-out, --duration-feedback
  const spring = { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const };
  const fastSpring = { duration: 0.2, ease: [0.23, 1, 0.32, 1] as const };

  // Perpetual micro-loop para tarjeta activa (subtle float)
  const activeCardLoop = {
    y: [0, -4, 0],
    boxShadow: [
      '0 16px 40px rgba(9, 80, 246, 0.18)',
      '0 24px 64px rgba(9, 80, 246, 0.22)',
      '0 16px 40px rgba(9, 80, 246, 0.18)',
    ],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  };

  const services: ServiceItem[] = [
    {
      id: 'express',
      title: 'Envíos Express',
      description: 'Mensajería en moto con franja horaria de 3 hs a elección.',
      href: '/servicios/envios-express',
      icon: Zap,
      badge: 'URGENTE',
      city: 'Todo Mar del Plata',
      founded: '+7 Años de Trayectoria',
      imageUrl: '/cards/fondo_express.webp',
      stats: {
        time: EXPRESS_WINDOW_SHORT,
        price: `${formatArs(EXPRESS_TIERS[0].price)} Base`,
        weight: `Sin recargo hasta ${STANDARD_WEIGHT_KG} kg`,
      },
      details: {
        summary: `Servicio de mensajería urbana con horario a elección, ideal para trámites urgentes, despacho de encomiendas y entrega de documentación. Coordinás la franja horaria que te conviene y se asigna un repartidor exclusivo para tu envío.`,
        features: [
          `Tarifa base de ${formatArs(EXPRESS_TIERS[0].price)} hasta ${EXPRESS_TIERS[0].maxKm} km.`,
          `Entrega en franja de 3 hs a elección, pedido con ${EXPRESS_LEAD_TIME} mínima.`,
          'Notificación automática de entrega por WhatsApp.',
        ],
        ctaText: 'COTIZÁ TU EXPRESS',
        ctaHref: '/cotizar',
      },
    },
    {
      id: 'lowcost',
      title: 'Envíos LowCost',
      description: 'Envíos económicos programados en el día, sin elección de horario.',
      href: '/servicios/envios-lowcost',
      icon: Package,
      badge: 'ECONÓMICO',
      city: 'Todo Gral. Pueyrredón',
      founded: 'Tarifa Fija Especial',
      imageUrl: '/cards/fondo_lowcost.webp',
      stats: {
        time: 'Programado en el día',
        price: `${formatArs(LOW_COST_TIERS[0].price)} Base`,
        weight: `Sin recargo hasta ${STANDARD_WEIGHT_KG} kg`,
      },
      details: {
        summary: 'La alternativa ideal para comercios y e-commerce que buscan optimizar costos de envío. Es un reparto económico programado para el día, no un agrupamiento de tus propios envíos: lo pedís antes del corte y se entrega a lo largo de la jornada.',
        features: [
          `Tarifa base de ${formatArs(LOW_COST_TIERS[0].price)} hasta ${LOW_COST_TIERS[0].maxKm} km.`,
          `Pedí antes de las ${LOWCOST_CUTOFF_TIME} y se entrega antes de las ${LOWCOST_DELIVERY_DEADLINE}.`,
          'Sin elección de franja horaria: la tarifa más baja de la ciudad.',
        ],
        ctaText: 'PROBÁ EL LOWCOST',
        ctaHref: '/cotizar',
      },
    },
    {
      id: 'flex',
      title: 'Envíos Flex',
      description: 'Entregas en el día integradas para tus ventas de MercadoLibre.',
      href: '/servicios/enviosflex',
      icon: Truck,
      badge: 'MERCADOLIBRE FLEX',
      city: 'Mar del Plata urbana',
      founded: `Corte extendido ${FLEX_CUTOFF_TIME}`,
      imageUrl: '/cards/fondo_flex.webp',
      stats: {
        time: 'En el día',
        price: 'Zonificado LowCost',
        weight: 'Apto Moto / Auto',
      },
      details: {
        summary: 'Habilitá Envíos Flex en tu cuenta de MercadoLibre y despachá todas tus ventas en el mismo día. Mejorá tu reputación y convertite en vendedor destacado con recolección gratuita.',
        features: [
          'Visitas bonificadas según tu volumen diario de entregas.',
          `Reparto coordinado antes de las ${FLEX_DELIVERY_DEADLINE}.`,
          'Recolección a domicilio sin cargo extra por nuestro equipo.',
        ],
        ctaText: 'CONFIGURÁ FLEX',
        ctaHref: '/servicios/enviosflex',
      },
    },
    {
      id: '3pl',
      title: 'E-Commerce Same Day',
      description: 'Guardamos tu stock y lo despachamos el mismo día, o E-Commerce 24HS si lo necesitás al día siguiente.',
      href: '/servicios/deposito-fulfillment',
      icon: Warehouse,
      badge: 'E-COMMERCE',
      city: 'Depósito Friuli 1972',
      founded: 'Stock guardado',
      imageUrl: '/cards/fondo_emprendedores.webp',
      stats: {
        time: 'Same Day / 24 hs',
        price: `${formatArs(SAME_DAY_FIXED_PRICE)} fijo`,
        weight: 'Sin límite',
      },
      details: {
        summary: 'Almacená tus productos en nuestro depósito central de Friuli 1972 y olvidate del empaque y los despachos. Nosotros nos encargamos de todo el proceso logístico para que te dediques a vender.',
        features: [
          `E-Commerce Same Day con tarifa fija de ${formatArs(SAME_DAY_FIXED_PRICE)} a toda la ciudad.`,
          `E-Commerce 24HS con ${DROPOFF_DISCOUNT_PERCENT}% OFF si traés los envíos listos (DropOFF).`,
          'Control de stock digital por sistema QR/barras y picking con embalaje profesional.',
        ],
        ctaText: 'CONSULTÁ PLANES',
        ctaHref: '/servicios/deposito-fulfillment',
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: reduceMotion ? { duration: 0.01 } : spring },
  };

  return (
    <section
      id="services-overview"
      aria-labelledby="services-overview-title"
      className="py-20 lg:py-28 bg-brand-blue-500 text-white relative overflow-hidden"
    >
      {/* Red logística interactiva en canvas (fondo z-0) */}
      <NetworkCanvasWrapper />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={spring}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-6 border-b border-white/10 pb-8"
        >
          <div>
            <motion.span
              whileHover={{ scale: 1.02, transition: fastSpring }}
              className="inline-flex px-4 py-1.5 rounded-full text-xs font-subheading font-bold tracking-widest bg-brand-yellow-500/15 border border-brand-yellow-500/30 text-brand-yellow-400 uppercase shadow-accent-sm mb-4"
            >
              NUESTROS SERVICIOS
            </motion.span>
            <h2 id="services-overview-title" className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.92] tracking-tight uppercase text-white text-balance">
              SOLUCIONES LOGÍSTICAS <br />
              <span className="text-brand-yellow-400 drop-shadow-[0_2px_10px_rgba(255,241,46,0.35)] underline decoration-brand-yellow-400/60 underline-offset-8">
                A TU MEDIDA
              </span>
            </h2>
          </div>

          {/* External link to all services */}
          <motion.div
            whileHover={{ x: 4, transition: fastSpring }}
            className="shrink-0"
          >
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 rounded-full font-subheading text-sm uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 transition-colors hover:text-brand-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500 sm:text-base"
            >
              Ver todos los servicios
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>

        {/* ASYMMETRIC GRID - 1 col mobile, 2 col tablet, 4 col desktop (no equal 3-col) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          role="list"
          aria-label="Servicios logísticos"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFirst = index === 0; // First card gets subtle highlight

            return (
              <motion.article
                key={service.id}
                variants={itemVariants}
                role="listitem"
                animate={reduceMotion ? {} : (isFirst ? activeCardLoop : {})}
                style={{ willChange: reduceMotion ? undefined : (isFirst ? 'transform, box-shadow' : undefined) }}
                className="relative"
              >
                <motion.button
                  type="button"
                  tabIndex={0}
                  onClick={(e) => {
                    lastTriggerRef.current = e.currentTarget;
                    setSelectedService(service);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      lastTriggerRef.current = e.currentTarget;
                      setSelectedService(service);
                    }
                  }}
                  whileHover={reduceMotion ? undefined : { y: -4, transition: fastSpring }}
                  whileTap={reduceMotion ? undefined : { y: 0, transition: { duration: 0.05 } }}
                  className="group w-full h-full rounded-2xl p-6 sm:p-8 flex flex-col justify-between bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-blue-300 hover:bg-white/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500"
                  aria-label={`Ver ficha técnica de ${service.title}`}
                >
                  {/* Background Image with Layer Blend */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 rounded-2xl overflow-hidden" aria-hidden="true">
                    <Image
                      src={service.imageUrl}
                      alt=""
                      fill={true}
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover opacity-20 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brand-blue-500/60 via-transparent to-transparent opacity-40" />
                  </div>

                  {/* Top Badge & Icon */}
                  <div className="relative z-10 flex items-center gap-3 mb-4">
                    <motion.div
                      whileHover={reduceMotion ? undefined : { scale: 1.08, transition: fastSpring }}
                      className="p-3 bg-brand-yellow-500 text-brand-blue-500 rounded-xl shadow-[3px_3px_0px_var(--color-brand-blue-500)]"
                      aria-hidden="true"
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                    <span className="text-2xs font-bold font-subheading px-2.5 py-1 rounded-full border bg-brand-yellow-500 text-brand-blue-500 border-brand-yellow-400 shadow-sm uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>

                  {/* Middle Service Information */}
                  <div className="relative z-10 space-y-2 flex-1">
                    <div className="text-xs font-bold uppercase tracking-widest font-subheading flex items-center gap-1 text-brand-yellow-400">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      {service.city}
                    </div>
                    <motion.h3
                      whileHover={reduceMotion ? undefined : { x: 4, transition: fastSpring }}
                      className="font-display text-xl sm:text-2xl uppercase leading-none text-balance text-white group-hover:text-brand-yellow-400 transition-colors"
                    >
                      {service.title}
                    </motion.h3>
                    <p className="text-xs sm:text-sm line-clamp-2 leading-relaxed text-white/80 font-sans">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Stats Grid */}
                  <div className="relative z-10 pt-4 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <div className="text-sm font-bold font-subheading truncate text-brand-yellow-400">{service.stats.time}</div>
                      <div className="text-2xs uppercase font-bold tracking-wider text-white/60">ENTREGA</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <div className="text-sm font-bold font-subheading truncate text-white">{service.stats.price}</div>
                      <div className="text-2xs uppercase font-bold tracking-wider text-white/60">TARIFA BASE</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <div className="text-sm font-bold font-subheading truncate text-brand-yellow-400">{service.stats.weight}</div>
                      <div className="text-2xs uppercase font-bold tracking-wider text-white/60">CAPACIDAD</div>
                    </div>
                  </div>

                  {/* Click Hint */}
                  <motion.div
                    animate={reduceMotion ? {} : { opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
                    className="relative z-10 mt-4 text-center"
                  >
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold font-subheading tracking-wider underline uppercase text-brand-yellow-400">
                      <ExternalLink className="w-3.5 h-3.5" />
                      Ver ficha técnica
                    </span>
                  </motion.div>
                </motion.button>
              </motion.article>
            );
          })}
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
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-brand-blue-500/80 backdrop-blur-md flex items-center justify-center p-4 overscroll-contain overflow-y-auto"
          >
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ ...spring, stiffness: 120, damping: 20 }}
              className="double-bezel-outer p-2 rounded-3xl bg-brand-blue-50/10 border border-brand-blue-100/20 max-w-2xl w-full"
            >
              <div className="double-bezel-inner bg-brand-blue-500 border border-brand-blue-500/20 rounded-2xl p-6 sm:p-8 text-white relative shadow-2xl space-y-6">
                {/* Close Modal Button */}
                <motion.button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeModal}
                  whileHover={reduceMotion ? undefined : { scale: 1.1, rotate: 90, transition: fastSpring }}
                  whileTap={reduceMotion ? undefined : { scale: 0.9 }}
                  className="absolute top-4 right-4 min-w-11 min-h-11 p-2.5 rounded-full bg-white/10 hover:bg-brand-yellow-500 hover:text-brand-blue-500 transition-colors cursor-pointer z-20 inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500"
                  aria-label="Cerrar ficha técnica"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Modal Header */}
                <div className="flex items-center gap-4 text-left pr-10">
                  <div className="p-4 bg-brand-yellow-500 text-brand-blue-500 rounded-2xl shadow-[3px_3px_0px_var(--color-brand-blue-500)]">
                    {React.createElement(selectedService.icon, { className: "w-8 h-8" })}
                  </div>
                  <div>
                    <span className="text-2xs font-bold text-brand-yellow-500 font-subheading tracking-widest uppercase">
                      {selectedService.founded} • {selectedService.city}
                    </span>
                    <h3 id="service-modal-title" className="font-display text-3xl sm:text-4xl uppercase text-balance mt-0.5">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Description & Features Box */}
                <div className="space-y-4 bg-brand-blue-500 p-5 rounded-2xl border border-brand-blue-500/10 text-left">
                  <p className="text-sm sm:text-base leading-relaxed text-brand-blue-50 font-sans">
                    {selectedService.details.summary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-brand-blue-500/10">
                    <span className="text-xs font-subheading text-brand-yellow-500 font-bold uppercase tracking-wider block">Beneficios Clave:</span>
                    {selectedService.details.features.map((feat: string, fIdx: number) => (
                      <motion.div
                        key={fIdx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...spring, delay: fIdx * 0.08 }}
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
                  transition={{ ...spring, delay: 0.1 }}
                  className="grid grid-cols-3 gap-3 text-center"
                >
                  <div className="bg-brand-blue-500 border border-brand-blue-500/20 p-3 rounded-xl">
                    <span className="text-xl font-bold font-subheading text-brand-yellow-500 block truncate">
                      {selectedService.stats.time}
                    </span>
                    <span className="text-2xs text-brand-blue-50 font-bold uppercase tracking-wider">TIEMPOS</span>
                  </div>
                  <div className="bg-brand-blue-500 border border-brand-blue-500/20 p-3 rounded-xl">
                    <span className="text-xl font-bold font-subheading text-white block truncate">
                      {selectedService.stats.price}
                    </span>
                    <span className="text-2xs text-brand-blue-50 font-bold uppercase tracking-wider">PRECIO BASE</span>
                  </div>
                  <div className="bg-brand-blue-500 border border-brand-blue-500/20 p-3 rounded-xl">
                    <span className="text-xl font-bold font-subheading text-brand-yellow-500 block truncate">
                      {selectedService.stats.weight}
                    </span>
                    <span className="text-2xs text-brand-blue-50 font-bold uppercase tracking-wider">CAPACIDAD</span>
                  </div>
                </motion.div>

                {/* Action Footer */}
                <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <motion.button
                    type="button"
                    onClick={closeModal}
                    whileHover={reduceMotion ? undefined : { x: -4, transition: fastSpring }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    className="min-h-11 px-3 text-xs text-brand-blue-50 hover:text-white underline uppercase font-bold tracking-wider cursor-pointer inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 rounded-lg w-full sm:w-auto"
                  >
                    Volver Atrás
                  </motion.button>
                  <CTANestedPill
                    asChild
                    variant="primary"
                    size="large"
                    href={selectedService.details.ctaHref}
                    id={`services-modal-${selectedService.id}-cta`}
                    className="w-full sm:w-auto justify-center"
                    onClick={() =>
                      trackAnalytics.ctaClick(
                        `services_modal_${selectedService.id}_cta`,
                        selectedService.details.ctaText
                      )
                    }
                  >
                    <Link href={selectedService.details.ctaHref}>
                      {selectedService.details.ctaText}
                    </Link>
                  </CTANestedPill>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}