'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Clock, Award, RefreshCw, Compass, Users 
} from 'lucide-react';

export default function FlexBenefits() {
  const benefits = [
    {
      title: 'Corte 15:00 hs',
      desc: 'Despachá tus ventas hasta las 15:00 hs para entrega garantizada en el mismo día. Más tiempo de ventas online.',
      icon: Clock,
    },
    {
      title: 'Reputación Intacta',
      desc: 'Cumplimos con rigor tus acuerdos de nivel de servicio (SLAs) para que mantengas tu estatus de MercadoLíder sin sobresaltos.',
      icon: Award,
    },
    {
      title: 'Devoluciones sin cargo',
      desc: 'Si el comprador rechaza el producto en el domicilio por cualquier causa, la devolución a tu local es totalmente SIN CARGO.',
      icon: RefreshCw,
    },
    {
      title: 'Cobertura MDP',
      desc: 'Cubrimos absolutamente todas las zonas de entrega habilitadas por MercadoLibre Flex en la ciudad de Mar del Plata.',
      icon: Compass,
    },
    {
      title: 'Choferes Calificados',
      desc: 'Contamos con personal altamente capacitado para brindar la mejor experiencia de entrega y atención a tus clientes finales.',
      icon: Users,
    },
  ];

  return (
    <section 
      id="flex-benefits" 
      className="py-24 bg-brand-blue relative z-10 overflow-hidden border-t-4 border-b-4 border-brand-yellow text-white"
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
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-blue shadow-[2px_2px_0px_rgba(255,204,0,0.3)] font-bold">
            SOCIOS ESTRATÉGICOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white">
            BENEFICIOS PARA VENDEDORES
          </h2>
          <p className="text-brand-blue-50 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            La solución definitiva para llevar tu tienda o e-commerce de MercadoLibre al siguiente nivel de competitividad.
          </p>
          <div className="h-2 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Benefits Grid Bento layout with Double Bezel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            // Asymmetric Bento Grid spans
            let spanClass = 'lg:col-span-4';
            if (idx === 0 || idx === 1) spanClass = 'lg:col-span-6';

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, x: 2 }}
                className={`${spanClass} double-bezel-outer flex flex-col justify-between text-left group`}
              >
                <div className="double-bezel-inner p-8 h-full space-y-5">
                  <div className="p-3 bg-brand-blue text-brand-yellow rounded-2xl w-fit border-2 border-brand-blue shadow-[2px_2px_0px_var(--color-brand-yellow)]">
                    <Icon className="h-6 w-6 shrink-0" />
                  </div>
                  
                  <h3 className="text-xl font-display uppercase tracking-wide text-brand-blue font-bold leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm text-brand-blue-500 font-sans leading-relaxed">
                    {benefit.desc}
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
