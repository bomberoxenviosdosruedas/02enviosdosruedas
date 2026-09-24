'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, Receipt, Info, Warehouse, UserCheck 
} from 'lucide-react';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';

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
      className="py-24 bg-[#0950F6] relative z-10 overflow-hidden border-t border-b border-white/10 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="-rotate-1 inline-block px-4 py-1.5 bg-[#FFEC01] text-[#0950F6] rounded-full text-xs font-subheading uppercase font-bold tracking-widest shadow-glow-yellow">
            BENEFICIOS PARA NEGOCIOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white leading-[0.98]">
            POTENCIAMOS TU PYME
          </h2>
          <p className="text-white/80 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Dedicá a vender, de la logística nos encargamos nosotros.
          </p>
          <div className="h-1.5 w-16 bg-[#FFEC01] mx-auto rounded-full" />
        </div>

        {/* Benefits Grid Bento layout with Double Bezel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            let spanClass = 'lg:col-span-4';
            if (idx === 0 || idx === 1) spanClass = 'lg:col-span-6';

            return (
              <div key={benefit.title} className={spanClass}>
                <DoubleBezelCard>
                  <div className="space-y-5 text-[#0950F6] relative overflow-hidden h-full flex flex-col justify-between">
                    <Icon className="absolute -bottom-6 -right-6 h-36 w-32 text-[#0950F6]/[0.05] pointer-events-none select-none" />

                    <div className="p-3 bg-[#0950F6] text-[#FFEC01] rounded-xl w-fit border border-[#0950F6] shadow-sm relative z-10">
                      <Icon className="h-6 w-6 shrink-0" />
                    </div>
                    
                    <h3 className="text-xl font-display uppercase tracking-wide text-[#0950F6] font-bold leading-tight relative z-10">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-sm text-[#0950F6]/80 font-sans leading-relaxed relative z-10">
                      {benefit.desc}
                    </p>
                  </div>
                </DoubleBezelCard>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
