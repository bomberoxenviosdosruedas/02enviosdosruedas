'use client';

import React from 'react';
import { motion } from 'motion/react';
import { RefreshCw, Award, PhoneCall, Layers, Users } from 'lucide-react';

export default function FlexBenefits() {
  const benefits = [
    {
      title: 'Devoluciones al local sin cargo',
      desc: 'Si el comprador rechaza o no recibe el paquete, te lo devolvemos sin cargo durante el mismo día o al día siguiente a más tardar. Si el paquete ya fue retirado del local y la compra se cancela durante el trayecto, el costo del envío debe abonarse igualmente.',
      icon: RefreshCw,
      badge: 'SIN CARGO',
    },
    {
      title: 'Entregas aseguradas al 100%',
      desc: 'Cuidamos la reputación de tu cuenta de Mercado Libre con entregas aseguradas al 100%. Accedés a comprobantes de entrega digitales y métricas de rendimiento desde nuestra plataforma propia de control.',
      icon: Award,
      badge: 'REPUTACIÓN PROTEGIDA',
    },
    {
      title: 'Protocolo de cliente ausente',
      desc: 'Ante destinatarios ausentes o direcciones difíciles, el cadete llama al cliente para concretar la entrega. Si no lo logra, marca "No entregado" en la app adjuntando una foto como respaldo y prueba de visita.',
      icon: PhoneCall,
      badge: 'FOTO DE RESPALDO',
    },
    {
      title: 'Beneficios por volumen e integración',
      desc: 'Integración directa a nuestro sistema logístico para recibir tus órdenes automáticamente y confirmarlas al instante. Descuentos progresivos por volumen según tu nivel de envíos diarios.',
      icon: Layers,
      badge: 'INTEGRACIÓN DIRECTA',
    },
    {
      title: 'Equipo propio y atención directa',
      desc: 'Atención humana directa por WhatsApp para resolver cualquier consulta en tiempo real. Cadetes propios, profesionales y de plena confianza para cuidar a tus compradores.',
      icon: Users,
      badge: 'SOPORTE WHATSAPP',
    },
  ];

  return (
    <section
      id="flex-benefits"
      className="py-24 bg-brand-blue-500 relative z-10 overflow-hidden border-t border-b border-white/10 text-white"
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
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="-rotate-1 inline-block px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-500 rounded-full text-xs font-subheading uppercase tracking-widest shadow-glow-yellow">
            SOCIOS ESTRATÉGICOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white leading-[0.98]">
            BENEFICIOS PARA VENDEDORES
          </h2>
          <p className="text-brand-blue-50 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            La solución definitiva para proteger tu reputación en Mercado Libre y brindar una experiencia de entrega intachable.
          </p>
          <div className="h-1.5 w-16 bg-brand-yellow-500 mx-auto rounded-full" />
        </div>

        {/* Benefits Grid Bento layout with Double Bezel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            const spanClass = idx < 2 ? 'lg:col-span-6' : 'lg:col-span-4';

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, x: 2 }}
                className={`${spanClass} bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[28px] shadow-float hover:shadow-antigravity-deep transition-all duration-300 flex flex-col justify-between text-left group relative overflow-hidden`}
              >
                <div className="bg-white p-7 sm:p-8 rounded-[20px] h-full space-y-4 text-brand-blue-500 relative overflow-hidden flex flex-col justify-between">
                  {/* Giant Watermark Icon */}
                  <Icon className="absolute -bottom-6 -right-6 h-36 w-32 text-brand-blue-500/5 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110" />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between gap-2">
                      <div className="p-3 bg-brand-blue-500 text-brand-yellow-500 rounded-xl w-fit border border-brand-blue-500 shadow-sm">
                        <Icon className="h-6 w-6 shrink-0" />
                      </div>
                      <span className="text-[10px] font-subheading font-bold uppercase tracking-wider bg-brand-blue-50 text-brand-blue-500 px-2.5 py-1 rounded-full border border-brand-blue-100">
                        {benefit.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-display uppercase tracking-wide text-brand-blue-500 leading-tight">
                      {benefit.title}
                    </h3>

                    <p className="text-sm text-brand-ink font-sans leading-relaxed">
                      {benefit.desc}
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
