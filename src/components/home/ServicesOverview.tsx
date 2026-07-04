'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Bike, ShieldCheck, Zap, ArrowUpRight, BarChart3 } from 'lucide-react';

export default function ServicesOverview() {
  const services = [
    {
      title: 'Envíos Express',
      description: 'Prioridad absoluta y certeza total. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación.',
      href: '/servicios/envios-express',
      icon: Zap,
      badge: 'URGENTE',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Envíos LowCost',
      description: 'Rentabilidad y ruteo masivo. Ingresá tus pedidos antes de las 13:00 hs y garantizamos entrega en el día.',
      href: '/servicios/envios-lowcost',
      icon: Bike,
      badge: 'ECONÓMICO',
      color: 'from-brand-blue to-blue-800',
    },
    {
      title: 'Envíos Flex (MercadoLibre)',
      description: 'Potenciá tu reputación al máximo. Somos expertos en MercadoLibre. Cumplimos tus acuerdos de nivel de servicio (SLAs) Same-Day.',
      href: '/servicios/enviosflex',
      icon: ShieldCheck,
      badge: 'INTEGRACIÓN FLEX',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      title: 'E-Commerce & 3PL',
      description: 'Tercerización y cuentas corrientes. Soluciones escalables para PyMEs con facturación mensual centralizada.',
      href: '/servicios/plan-emprendedores',
      icon: BarChart3,
      badge: 'PYMES & CORPORATIVO',
      color: 'from-slate-700 to-slate-800',
    },
  ];

  return (
    <section 
      id="services-overview" 
      className="py-24 bg-brand-blue border-y border-blue-200/60 relative overflow-hidden text-white"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-950/30 blur-3xl -z-10" />

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
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-yellow text-brand-blue border-2 border-brand-blue rounded-full text-xs font-subheading tracking-widest inline-block shadow-[2px_2px_0px_#0636A5]">
            Nuestros Servicios
          </span>
          <h2 className="text-white text-display uppercase text-center">
            Soluciones Logísticas
          </h2>
          <div className="h-1.5 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ 
                  y: { type: "spring", stiffness: 300, damping: 20 },
                  scale: { type: "spring", stiffness: 300, damping: 20 },
                  opacity: { duration: 0.5, delay: index * 0.08 }
                }}
                className="bg-white rounded-3xl p-8 border-2 border-brand-blue shadow-lg hover:shadow-[6px_6px_0px_#FFEC01] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 rounded-2xl bg-brand-blue/5 text-brand-blue group-hover:bg-brand-blue group-hover:text-white border border-brand-blue/10 transition-all duration-350">
                      <Icon className="h-6 w-6 group-hover:rotate-6 transition-transform" />
                    </div>
                    <span className="px-3 py-1 rounded-xl text-[10px] font-subheading tracking-wider uppercase bg-brand-blue/5 text-brand-blue border border-brand-blue/10">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display uppercase tracking-tight text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed font-sans mb-8">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-sans text-slate-400 group-hover:text-brand-blue transition-colors">
                    Ver especificaciones de servicio
                  </span>
                  <Link 
                    href={service.href}
                    className="h-12 w-12 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 group-hover:border-brand-blue group-hover:text-brand-blue group-hover:bg-brand-yellow flex items-center justify-center transition-all duration-300 shadow-sm relative overflow-hidden"
                  >
                    <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 shrink-0" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
