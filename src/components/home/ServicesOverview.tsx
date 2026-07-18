'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Zap, Package, Truck, Building } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  imageUrl: string;
  span: string; // col-span for bento grid
  variant: 'express' | 'lowcost' | 'flex' | 'ecommerce';
}

const services: ServiceItem[] = [
  {
    title: 'Envíos Express',
    description: 'Mensajería en moto, entregas inmediatas en Mar del Plata.',
    href: '/servicios/envios-express',
    icon: Zap,
    badge: 'URGENTE',
    imageUrl: '/img/generales/envios_express.webp',
    span: 'lg:col-span-7',
    variant: 'express',
  },
  {
    title: 'Envíos LowCost',
    description: 'Envíos económicos con posibilidad de entregas en el día.',
    href: '/servicios/envios-lowcost',
    icon: Package,
    badge: 'ECONÓMICO',
    imageUrl: '/img/generales/envios_low_cost.webp',
    span: 'lg:col-span-5',
    variant: 'lowcost',
  },
  {
    title: 'Envíos Flex (MercadoLibre)',
    description: 'Entregas en el día de tus ventas en MercadoLibre.',
    href: '/servicios/enviosflex',
    icon: Truck,
    badge: 'INTEGRACIÓN FLEX',
    imageUrl: '/img/generales/servicio_flex.jpeg',
    span: 'lg:col-span-5',
    variant: 'flex',
  },
  {
    title: 'E-Commerce & 3PL',
    description: 'Recomendado para E-Commerce, escalá tu tienda online.',
    href: '/servicios/plan-emprendedores',
    icon: Building,
    badge: 'PYMES & CORPORATIVO',
    imageUrl: '/img/generales/Emprendedoresbanner.webp',
    span: 'lg:col-span-7',
    variant: 'ecommerce',
  },
];

const variantConfig: Record<ServiceItem['variant'], { border: string; iconBg: string; iconText: string; badgeBg: string; badgeBorder: string; badgeText: string }> = {
  express: {
    border: 'border-brand-blue-700',
    iconBg: 'bg-brand-yellow',
    iconText: 'text-brand-blue',
    badgeBg: 'bg-brand-yellow',
    badgeBorder: 'border-brand-yellow',
    badgeText: 'text-brand-blue',
  },
  lowcost: {
    border: 'border-brand-blue-200',
    iconBg: 'bg-brand-blue-50',
    iconText: 'text-brand-blue-700',
    badgeBg: 'bg-brand-blue-100',
    badgeBorder: 'border-brand-blue-200',
    badgeText: 'text-brand-blue-700',
  },
  flex: {
    border: 'border-brand-yellow-200',
    iconBg: 'bg-brand-yellow-50',
    iconText: 'text-brand-blue-700',
    badgeBg: 'bg-brand-yellow-100',
    badgeBorder: 'border-brand-yellow-200',
    badgeText: 'text-brand-blue-700',
  },
  ecommerce: {
    border: 'border-brand-blue-700',
    iconBg: 'bg-brand-yellow',
    iconText: 'text-brand-blue',
    badgeBg: 'bg-brand-yellow',
    badgeBorder: 'border-brand-yellow',
    badgeText: 'text-brand-blue',
  },
};

export default function ServicesOverview() {
  return (
    <section
      id="servicios"
      className="py-16 md:py-24 lg:py-32 bg-white relative z-10 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,54,165,0.02),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,236,1,0.03),transparent_50%)]" />

      <motion.div
        className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0, y: 45 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
        }}
      >
        {/* Header Block */}
        <div className="max-w-3xl mb-12 lg:mb-16 space-y-4">
          <span className="inline-flex items-center px-4 py-1.5 bg-brand-blue-50 text-brand-blue rounded-full text-xs font-subheading tracking-widest uppercase border border-brand-blue-100 shadow-sm">
            NUESTROS SERVICIOS
          </span>
          <h2 id="services-heading" className="text-brand-blue text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.9] text-left">
            Soluciones logísticas a tu medida
          </h2>
          <p className="text-brand-blue-500 text-base sm:text-lg max-w-prose leading-relaxed font-sans font-medium">
            Cuatro modalidades pensadas para cada tipo de negocio y cada velocidad de entrega en Mar del Plata.
          </p>
        </div>

        {/* Services Bento Grid - Asymmetric 12-col */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-[380px]">
          {services.map((service, index) => {
            const config = variantConfig[service.variant];
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 18,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                  x: 2,
                  boxShadow: '0 25px 50px -12px rgba(6, 54, 165, 0.25), 0 0 30px rgba(255, 236, 1, 0.25)',
                }}
                className={`group relative h-full flex flex-col ${service.span} bg-brand-blue-700 border-2 rounded-xl transition-all duration-300 shadow-[4px_4px_0px_#0636A5] overflow-hidden`}
              >
                {/* Double Bezel Outer */}
                <div className="relative flex-1 overflow-hidden flex flex-col justify-between double-bezel-outer bezel-inner">
                  {/* Background Image with Color Blocking Overlay */}
                  <div className="absolute inset-0 z-0 overflow-hidden bg-brand-blue-800">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-105 group-hover:opacity-40"
                    />
                  </div>

                  {/* Card Header: Icon & Badge */}
                  <div className="relative z-20 flex justify-between items-start">
                    <div className={`p-3 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300 ${config.iconBg} ${config.iconText}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className={`text-xs font-subheading tracking-widest uppercase px-3 py-1.5 rounded-lg font-bold border ${config.badgeBg} ${config.badgeText} ${config.badgeBorder}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Card Content & CTA */}
                  <div className="relative z-20 space-y-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white group-hover:text-brand-yellow transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-brand-blue-100 font-sans leading-relaxed mt-2 max-w-md">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={service.href}
                        className="inline-flex items-center bg-brand-yellow text-brand-blue text-xs uppercase tracking-wider cta-nested-pill font-bold transition-all duration-300 relative overflow-hidden group/btn"
                      >
                        <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-[-2px]">Ver más</span>
                        <span className="cta-nested-icon bg-brand-blue text-brand-yellow w-6 h-6 ml-4 relative z-10 flex items-center justify-center rounded-full shrink-0">
                          <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                        </span>
                        {/* Interactive sliding highlight overlay */}
                        <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 pointer-events-none" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Cotizador Express - Full Width Span 12 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 150, damping: 18, delay: services.length * 0.1 }}
            whileHover={{ y: -6, x: 2 }}
            className="lg:col-span-12 md:col-span-12 group relative h-full flex flex-col bg-brand-blue-700 border-2 border-brand-blue rounded-xl shadow-[4px_4px_0px_#0636A5] overflow-hidden"
          >
            <div className="double-bezel-outer bezel-inner flex h-full flex-col">
              {/* Background */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-brand-blue-800">
                <Image
                  src="/img/generales/cotizador_banner.webp"
                  alt="Cotizador Express"
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="relative z-20 flex flex-col h-full justify-between p-8 sm:p-10">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-brand-yellow text-brand-blue rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="16" />
                      </svg>
                    </div>
                    <span className="text-xs font-subheading tracking-widest uppercase px-3 py-1.5 rounded-lg bg-brand-yellow text-brand-blue font-bold border border-brand-yellow">
                      COTIZADOR EXPRESS
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white group-hover:text-brand-yellow transition-colors duration-300">
                      Cotizá tu envío en segundos
                    </h3>
                    <p className="text-sm text-brand-blue-100 font-sans leading-relaxed mt-2 max-w-md">
                      Ingresá origen, destino y dimensiones. Obtené precio exacto y tiempo estimado al instante.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/cotizar/express"
                    className="inline-flex items-center bg-brand-yellow text-brand-blue text-xs uppercase tracking-wider cta-nested-pill font-bold transition-all duration-300 relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-[-2px]">Cotizar ahora</span>
                    <span className="cta-nested-icon bg-brand-blue text-brand-yellow w-6 h-6 ml-4 relative z-10 flex items-center justify-center rounded-full shrink-0">
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 pointer-events-none" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}