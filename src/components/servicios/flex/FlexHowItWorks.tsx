'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Truck, CheckSquare, Sparkles } from 'lucide-react';

export default function FlexHowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Vendés',
      desc: 'Recibís una venta con Mercado Envíos Flex en tu panel tradicional de vendedor de MercadoLibre.',
      icon: ShoppingBag,
    },
    {
      number: '02',
      title: 'Retiramos',
      desc: 'Coordinamos y pasamos a retirar todos los paquetes por tu local o depósito en el horario de corte acordado.',
      icon: Truck,
    },
    {
      number: '03',
      title: 'Entregamos',
      desc: 'Nuestra flota especializada distribuye eficientemente los paquetes en Mar del Plata durante la tarde.',
      icon: CheckSquare,
    },
    {
      number: '04',
      title: 'Calificás',
      desc: 'Tu cliente recibe el paquete en el mismo día y tu reputación de MercadoLíder sube automáticamente.',
      icon: Sparkles,
    },
  ];

  return (
    <section 
      id="flex-how-it-works" 
      className="py-24 bg-gray-50 relative overflow-hidden border-t-4 border-b-4 border-brand-blue"
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      >
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="px-4 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-blue shadow-[2px_2px_0px_var(--color-brand-blue)] font-bold">
            LOGÍSTICA SINCRONIZADA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-brand-blue border-l-4 border-brand-yellow pl-4 inline-block">
            LOGÍSTICA SIN FRICCIONES
          </h2>
          <p className="text-slate-655 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Integramos tu flujo diario de ventas con nuestra red de distribución de última milla en tiempo real.
          </p>
          <div className="h-2 w-16 bg-brand-blue mx-auto rounded-full" />
        </div>

        {/* Steps Grid (4 columns with visual connectors) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="absolute top-[2.4rem] left-12 right-12 h-1 bg-brand-blue/30 hidden lg:block -z-10" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-white border-2 border-brand-blue rounded-3xl p-6 shadow-[4px_4px_0px_var(--color-brand-blue)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_var(--color-brand-blue)] transition-all duration-300 relative flex flex-col items-center text-center group"
              >
                {/* Floating step number */}
                <span className="absolute -top-3.5 -left-3.5 bg-brand-yellow text-brand-blue font-bold font-mono text-xs tracking-widest px-3 py-1 rounded-full border-2 border-brand-blue shadow-[2px_2px_0px_var(--color-brand-blue)]">
                  {step.number}
                </span>

                {/* Circle Icon wrapper */}
                <div className="h-16 w-16 bg-brand-blue text-brand-yellow border-2 border-brand-blue rounded-2xl flex items-center justify-center mb-5 shadow-[2px_2px_0px_var(--color-brand-blue)] group-hover:scale-105 transition-transform duration-300">
                  <Icon className="h-6 w-6 shrink-0" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-display uppercase tracking-wider text-brand-blue font-bold leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-655 font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
