'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, Receipt, Info, Warehouse, UserCheck 
} from 'lucide-react';

export default function EmprendedoresBenefits() {
  const benefits = [
    {
      title: 'Partner Logístico Especializado',
      desc: 'Más que un simple servicio de envío, nos convertimos en tu depósito estratégico. Soluciones completas de almacenamiento y fulfillment diseñadas especialmente para PyMEs.',
      icon: Building2,
    },
    {
      title: 'Cuentas Corrientes',
      desc: 'Esquemas ágiles de facturación mensual consolidada adaptados al flujo de caja financiero de tu negocio (Factura C disponible de forma directa).',
      icon: Receipt,
    },
    {
      title: 'Límites Claros y Seguros',
      desc: 'Flota de motos y utilitarios. Llevamos bultos de hasta 5 kg con control y seguimiento centralizado vía WhatsApp.',
      icon: Info,
    },
    {
      title: 'Almacenaje Seguro',
      desc: 'Contamos con depósitos propios en Friuli 1972, Mar del Plata, equipados con alta seguridad para el resguardo de tu stock.',
      icon: Warehouse,
    },
    {
      title: 'Asesor Dedicado',
      desc: 'Asignamos un operador exclusivo para tu firma. Resolvé cualquier consulta operativa o eventualidad directamente con personas reales en MDQ.',
      icon: UserCheck,
    },
  ];

  return (
    <section 
      id="emprendedores-benefits" 
      className="py-24 bg-[#052C87] relative z-10 overflow-hidden border-t border-b border-white/10 text-white"
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
          <span className="-rotate-1 inline-block px-4 py-1.5 bg-[#FFF12E] text-[#052C87] rounded-full text-xs font-subheading uppercase font-bold tracking-widest shadow-glow-yellow">
            BENEFICIOS PARA NEGOCIOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white leading-[0.98]">
            POTENCIAMOS TU PYME
          </h2>
          <p className="text-blue-100 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Dedicá a vender, de la logística nos encargamos nosotros.
          </p>
          <div className="h-1.5 w-16 bg-[#FFF12E] mx-auto rounded-full" />
        </div>

        {/* Benefits Grid Bento layout with Double Bezel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            let spanClass = 'lg:col-span-4';
            if (idx === 0 || idx === 1) spanClass = 'lg:col-span-6';

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, x: 2 }}
                className={`${spanClass} bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[28px] shadow-float hover:shadow-antigravity-deep transition-all duration-300 flex flex-col justify-between text-left group relative overflow-hidden`}
              >
                <div className="bg-white p-8 rounded-[20px] h-full space-y-5 text-[#052C87] relative overflow-hidden">
                  {/* Giant Watermark Icon */}
                  <Icon className="absolute -bottom-6 -right-6 h-36 w-32 text-[#0950F6]/[0.05] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110" />

                  <div className="p-3 bg-[#0950F6] text-[#FFF12E] rounded-xl w-fit border border-[#0950F6] shadow-sm relative z-10">
                    <Icon className="h-6 w-6 shrink-0" />
                  </div>
                  
                  <h3 className="text-xl font-display uppercase tracking-wide text-[#052C87] font-bold leading-tight relative z-10">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm text-[#00277C]/80 font-sans leading-relaxed relative z-10">
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
