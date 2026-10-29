'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ScanBarcode, Repeat, ShieldCheck } from 'lucide-react';

export default function FlexHowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Venta y solicitud',
      desc: 'Clientes integrados transmiten sus órdenes directo por sistema. Quienes no estén integrados nos notifican por WhatsApp antes de las 15:00 hs (sábados antes de las 12:00 hs).',
      icon: ShoppingBag,
    },
    {
      number: '02',
      title: 'Retiro y escaneo',
      desc: 'El repartidor pasa por tu comercio y escanea los paquetes directamente al momento de la recolección para que impacte de inmediato en Mercado Libre.',
      icon: ScanBarcode,
    },
    {
      number: '03',
      title: 'Distribución continua',
      desc: 'Nuestros cadetes circulan permanentemente. La administración asigna los envíos a medida que van entrando, posibilitando múltiples retiros en el día.',
      icon: Repeat,
    },
    {
      number: '04',
      title: 'Comprobantes y visibilidad',
      desc: 'Consultás el estado y los comprobantes de entrega tanto en tu panel de control de Envíos DosRuedas como en tu cuenta de vendedor de Mercado Libre.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="flex-how-it-works"
      className="py-24 bg-brand-white-50 relative overflow-hidden border-t border-brand-blue-100"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
        }}
      >
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="-rotate-1 inline-block px-4 py-1.5 bg-brand-blue-500 text-brand-yellow-500 rounded-full text-xs font-subheading uppercase tracking-widest shadow-sm">
            CIRCUITO OPERATIVO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-brand-blue-500 inline-block leading-[0.98]">
            LOGÍSTICA SIN FRICCIONES
          </h2>
          <p className="text-brand-ink font-sans text-sm sm:text-base max-w-lg mx-auto">
            Integramos tus ventas con un circuito ágil de recolección y entrega continua en toda la ciudad.
          </p>
          <div className="h-1.5 w-16 bg-brand-yellow-500 mx-auto rounded-full" />
        </div>

        {/* Steps Grid Bento Layout with Double Bezel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="absolute top-[2.4rem] left-12 right-12 h-1 bg-brand-blue-500/20 hidden lg:block -z-10" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const spanClass = 'lg:col-span-3';

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, x: 2 }}
                className={`${spanClass} bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-[28px] shadow-float hover:shadow-antigravity-deep transition-all duration-300 relative flex flex-col group overflow-hidden`}
              >
                <div className="bg-white p-6 rounded-[20px] border border-brand-blue-50/50 shadow-sm h-full flex flex-col items-center text-center relative overflow-hidden">
                  {/* Giant Watermark Icon */}
                  <Icon className="absolute -bottom-6 -right-6 h-32 w-32 text-brand-blue-500/5 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110" />

                  {/* Floating step number */}
                  <span className="-rotate-1 absolute top-3 left-3 bg-brand-yellow-500 text-brand-blue-500 font-bold font-mono tabular-nums text-xs tracking-widest px-3 py-1 rounded-full shadow-glow-yellow z-10">
                    PASO {step.number}
                  </span>

                  {/* Circle Icon wrapper */}
                  <div className="h-16 w-16 bg-brand-blue-500 text-brand-yellow-500 border border-brand-blue-500 rounded-2xl flex items-center justify-center mt-5 mb-5 shadow-md group-hover:scale-105 transition-transform duration-300 relative z-10">
                    <Icon className="h-6 w-6 shrink-0" />
                  </div>

                  <div className="space-y-2 relative z-10">
                    <h3 className="text-xl font-display uppercase tracking-wider text-brand-blue-500 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-brand-ink font-sans leading-relaxed">
                      {step.desc}
                    </p>
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
