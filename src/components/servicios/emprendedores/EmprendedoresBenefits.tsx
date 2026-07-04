'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, Receipt, Info, Warehouse, BarChart3, UserCheck 
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
      desc: 'Flota exclusiva de motos. Llevamos bultos de hasta 5 kg (con dimensiones máximas de 40x40x30 cm). Control y seguimiento centralizado vía WhatsApp.',
      icon: Info,
    },
    {
      title: 'Almacenaje Seguro',
      desc: 'Contamos con depósitos propios modernos en Mar del Plata, equipados con alta seguridad integral para el resguardo de tu stock o mercadería.',
      icon: Warehouse,
    },
    {
      title: 'Asesor Dedicado',
      desc: 'Asignamos un ejecutivo de cuentas exclusivo para tu firma. Resolvé cualquier consulta operativa o eventualidad directamente con una persona idónea.',
      icon: UserCheck,
    },
  ];

  return (
    <section 
      id="emprendedores-benefits" 
      className="py-24 bg-white relative z-10 shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.02)] overflow-hidden"
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
          <span className="px-3 py-1.5 bg-blue-100 text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-blue-200/50">
            Beneficios para Negocios
          </span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
            Potenciamos tu PyME
          </h2>
          <p className="text-slate-500 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Potenciamos tu capacidad operativa con soluciones logísticas de clase mundial y soporte dedicado a tu crecimiento.
          </p>
          <div className="h-1.5 w-12 bg-brand-yellow mx-auto rounded-full" />
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
                className="bg-slate-50/60 hover:bg-white p-8 rounded-3xl border border-slate-100/80 hover:border-brand-blue/15 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-2xl w-fit">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-lg font-subheading uppercase tracking-wide text-slate-900 font-semibold leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
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
