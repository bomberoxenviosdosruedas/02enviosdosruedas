'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Package, Truck, Zap, Building } from 'lucide-react';

export default function ServicesOverview() {
  const services = [
    {
      title: 'Envíos Express',
      description: 'Mensajería en moto, entregas inmediatas en Mar del Plata.',
      href: '/servicios/envios-express',
      icon: Zap,
      badge: 'URGENTE',
    },
    {
      title: 'Envíos LowCost',
      description: 'Envíos económicos con posibilidad de entregas en el día.',
      href: '/servicios/envios-lowcost',
      icon: Package,
      badge: 'ECONÓMICO',
    },
    {
      title: 'Envíos Flex (MercadoLibre)',
      description: 'Entregas en el día de tus ventas en MercadoLibre.',
      href: '/servicios/enviosflex',
      icon: Truck,
      badge: 'INTEGRACIÓN FLEX',
    },
    {
      title: 'E-Commerce & 3PL',
      description: 'Recomendado para E-Commerce, escalá tu tienda online.',
      href: '/servicios/plan-emprendedores',
      icon: Building,
      badge: 'PYMES & CORPORATIVO',
    },
  ];

  return (
    <section
      id="services-overview"
      className="py-24 bg-brand-ink relative overflow-hidden text-brand-white-50"
    >
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
          <span className="px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-subheading tracking-widest inline-block uppercase shadow-sm">
            NUESTROS SERVICIOS
          </span>
          <h2 className="text-brand-white-50 text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.9] text-left">
            Soluciones logísticas a tu medida
          </h2>
          <p className="text-brand-blue-100 text-base sm:text-lg max-w-prose leading-relaxed font-sans font-medium">
            Cuatro modalidades pensadas para cada tipo de negocio y cada velocidad de entrega en Mar del Plata.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-[380px]">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Determine bento column spans: 1st and 4th cards are larger (span 7), 2nd and 3rd are standard (span 5)
            const colSpan = (index === 0 || index === 3) ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 18,
                  delay: index * 0.1
                }}
                className={`${colSpan} double-bezel-outer p-2 rounded-2xl bg-brand-blue-50/5 border border-brand-blue-500/20 hover:border-brand-yellow/30 hover:bg-brand-blue-50/10 hover:shadow-antigravity-deep transition-all duration-300 group`}
              >
                {/* Inner Core (Color Blocking Architecture) */}
                <div className="double-bezel-inner bg-brand-blue-700/60 p-6 sm:p-8 rounded-xl border border-brand-blue-500/20 shadow-inner flex flex-col justify-between h-full relative overflow-hidden text-left">
                  
                  {/* Subtle Brand Ambient Glow in Bottom Right */}
                  <div className={`absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-25 -mr-16 -mb-16 transition-opacity duration-300 group-hover:opacity-45 ${
                    index === 0 || index === 2 ? 'bg-brand-yellow-500' : 'bg-brand-blue-400'
                  }`} />

                  {/* Huge Watermark Background Icon */}
                  <div className="absolute right-4 bottom-4 text-white opacity-[0.03] pointer-events-none select-none transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6">
                    <Icon className="w-48 h-48" />
                  </div>

                  {/* Card Header: Icon & Badge */}
                  <div className="relative z-10 flex justify-between items-start">
                    <div className="p-3 bg-brand-yellow text-brand-blue rounded-xl shadow-[2px_2px_0px_var(--color-brand-blue-700)] group-hover:scale-105 transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-subheading tracking-widest uppercase px-3 py-1.5 rounded-lg bg-brand-ink text-brand-yellow font-bold border border-brand-yellow/30">
                      {service.badge}
                    </span>
                  </div>

                  {/* Card Content & CTA */}
                  <div className="relative z-10 space-y-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white group-hover:text-brand-yellow transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-brand-blue-100 font-sans leading-relaxed mt-2 max-w-md">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <a
                        href={service.href}
                        className="inline-flex items-center bg-brand-yellow text-brand-blue text-xs uppercase tracking-wider cta-nested-pill font-bold transition-all duration-300 relative overflow-hidden group/btn px-6 py-3 rounded-full hover:shadow-[2px_2px_0px_var(--color-brand-blue)]"
                      >
                        <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-[-2px]">Ver más</span>
                        <motion.span 
                          className="cta-nested-icon bg-brand-blue text-brand-yellow w-6 h-6 ml-4 relative z-10 flex items-center justify-center rounded-full shrink-0"
                          whileHover={{ scale: 1.15, x: 2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.span>
                        {/* Interactive sliding highlight overlay */}
                        <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 pointer-events-none" />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
