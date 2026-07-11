'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Package, Truck, Zap, Building } from 'lucide-react';
import { ServiceCard } from '@/components/ui/service-card';

export default function ServicesOverview() {
  const services = [
    {
      title: 'Envíos Express',
      description: 'Mensajería en moto, entregas inmediatas en Mar del Plata.',
      href: '/servicios/envios-express',
      icon: Zap,
      badge: 'URGENTE',
      imageUrl: '/img/generales/envios_express.webp',
    },
    {
      title: 'Envíos LowCost',
      description: 'Envíos económicos con posibilidad de entregas en el día.',
      href: '/servicios/envios-lowcost',
      icon: Package,
      badge: 'ECONÓMICO',
      imageUrl: '/img/generales/envios_low_cost.webp',
    },
    {
      title: 'Envíos Flex (MercadoLibre)',
      description: 'Entregas en el día de tus ventas en MercadoLibre.',
      href: '/servicios/enviosflex',
      icon: Truck,
      badge: 'INTEGRACIÓN FLEX',
      imageUrl: '/img/generales/servicio_flex.jpeg',
    },
    {
      title: 'E-Commerce & 3PL',
      description: 'Recomendado para E-Commerce, escalá tu tienda online.',
      href: '/servicios/plan-emprendedores',
      icon: Building,
      badge: 'PYMES & CORPORATIVO',
      imageUrl: '/img/generales/Emprendedoresbanner.webp',
    },
  ];

  return (
    <section
      id="services-overview"
      className="py-24 bg-zinc-950 relative overflow-hidden text-white"
    >
      {/* Subtle background decoration adapted to Dark Mode Urbano */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-yellow/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-blue/10 blur-[120px] -z-10" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 45 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      >

        {/* Header Block */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-zinc-900 text-brand-yellow border border-zinc-800 rounded-full text-xs font-subheading tracking-widest inline-block uppercase shadow-sm">
            Nuestros servicios
          </span>
          <h2 className="text-white text-display uppercase text-left">
            Soluciones logísticas a tu medida
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed font-sans max-w-xl">
            Cuatro modalidades pensadas para cada tipo de negocio y cada velocidad de entrega en Mar del Plata.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  y: { type: "spring", stiffness: 300, damping: 20 },
                  opacity: { duration: 0.5, delay: index * 0.1 }
                }}
                className="h-full flex"
              >
                <ServiceCard
                  title={service.title}
                  badge={service.badge}
                  overview={service.description}
                  href={service.href}
                  icon={service.icon}
                  imageUrl={service.imageUrl}
                  className="w-full"
                />
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
