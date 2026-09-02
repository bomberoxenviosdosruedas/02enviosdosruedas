'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Truck, CheckSquare } from 'lucide-react';

export default function LowCostHowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Solicitud',
      desc: 'Nos solicitás el envío por WhatsApp.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Retiro',
      desc: 'Retiramos el paquete por tu local o depósito en el transcurso del día.',
      icon: Truck,
    },
    {
      number: '03',
      title: 'Entrega',
      desc: 'Entregamos de forma segura en manos de tu destinatario.',
      icon: CheckSquare,
    },
  ];

  return (
    <section 
      id="lowcost-how-it-works" 
      className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-brand-blue-100"
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
          <span className="-rotate-1 inline-block px-4 py-1.5 bg-[#0950F6] text-[#FFF12E] rounded-full text-xs font-subheading uppercase font-bold tracking-widest shadow-sm">
            PASO A PASO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-[#0950F6] border-l-4 border-[#FFF12E] pl-4 inline-block leading-[0.98]">
            ¿CÓMO FUNCIONA?
          </h2>
          <p className="text-[#00277C] font-sans text-sm sm:text-base max-w-lg mx-auto">
            Un proceso simple, transparente y diseñado milimétricamente para maximizar tu productividad logística.
          </p>
          <div className="h-1.5 w-16 bg-[#FFF12E] mx-auto rounded-full" />
        </div>

        {/* Steps Grid Bento Layout with Double Bezel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="absolute top-[2.4rem] left-12 right-12 h-1 bg-[#0950F6]/20 hidden lg:block -z-10" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const spanClass = 'lg:col-span-4';

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
                  <Icon className="absolute -bottom-6 -right-6 h-32 w-32 text-[#0950F6]/[0.05] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110" />

                  {/* Floating step number */}
                  <span className="-rotate-1 absolute top-3 left-3 bg-[#FFF12E] text-[#052C87] font-bold font-mono tabular-nums text-xs tracking-widest px-3 py-1 rounded-full shadow-glow-yellow z-10">
                    PASO {step.number}
                  </span>

                  {/* Circle Icon wrapper */}
                  <div className="h-16 w-16 bg-[#0950F6] text-[#FFF12E] border border-[#0950F6] rounded-2xl flex items-center justify-center mt-4 mb-5 shadow-md group-hover:scale-105 transition-transform duration-300 relative z-10">
                    <Icon className="h-6 w-6 shrink-0" />
                  </div>

                  <div className="space-y-2 relative z-10">
                    <h3 className="text-xl font-display uppercase tracking-wider text-[#0950F6] font-bold leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#00277C]/80 font-sans leading-relaxed">
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
