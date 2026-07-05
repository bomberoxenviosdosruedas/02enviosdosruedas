'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Route, Clock, Coins, Compass, ClipboardCheck, Sparkles 
} from 'lucide-react';

export default function LowCostBenefits() {
  const benefits = [
    {
      title: 'Eficiencia en Ruteo',
      desc: 'Ruteo diario masivo optimizado de última milla. No se elige rango horario para maximizar tu rentabilidad y amortizar el transporte.',
      icon: Route,
    },
    {
      title: 'Corte y Entrega (SLA)',
      desc: 'Ingresá tus pedidos antes de las 13:00 hs y te garantizamos la entrega efectiva en el mismo día, antes de las 19:00 hs.',
      icon: Clock,
    },
    {
      title: 'Economía y Escala',
      desc: 'Bajá tus costos fijos drásticamente y pagá exclusivamente por los paquetes reales que enviás cada jornada.',
      icon: Coins,
    },
    {
      title: 'Cobertura Total',
      desc: 'Llegamos a absolutamente todos los barrios residenciales, comerciales e industriales de Mar del Plata sin recargos ocultos.',
      icon: Compass,
    },
    {
      title: 'Menos Operatividad',
      desc: 'Simplificá tus despachos diarios con un esquema inteligente de retiro programado en tu local o punto de venta.',
      icon: ClipboardCheck,
    },
    {
      title: 'Ideal Emprendedores',
      desc: 'Escalá tu volumen de ventas y expandí el alcance de tu e-commerce sin preocuparte por los altos costos fijos de transporte.',
      icon: Sparkles,
    },
  ];

  return (
    <section 
      id="lowcost-benefits" 
      className="py-24 bg-white relative z-10 overflow-hidden border-t-4 border-brand-blue"
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
          <span className="px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-yellow shadow-[2px_2px_0px_rgba(6,54,165,0.2)]">
            VENTAJAS CLAVE
          </span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
            BENEFICIOS LOWCOST
          </h2>
          <p className="text-slate-655 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            La combinación perfecta entre economía inteligente y máxima eficiencia logística para la consolidación de tu negocio.
          </p>
          <div className="h-2 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Benefits Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                className="bg-slate-50 border-2 border-brand-blue p-8 rounded-3xl shadow-[4px_4px_0px_#0636A5] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0636A5] transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div className="space-y-5">
                  <div className="p-3 bg-brand-yellow text-brand-blue rounded-2xl w-fit border-2 border-brand-blue shadow-[2px_2px_0px_#0636A5]">
                    <Icon className="h-6 w-6 shrink-0" />
                  </div>
                  
                  <h3 className="text-xl font-display uppercase tracking-wide text-slate-900 font-bold leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm text-slate-655 font-sans leading-relaxed">
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
