'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Award, Clock, Smartphone, MapPin } from 'lucide-react';

export default function FlexFeatures() {
  const features = [
    {
      title: 'Reputación Garantizada',
      desc: 'Cumplimos rigurosamente con los estrictos SLAs y horarios de MercadoLibre para que tu medidor de reputación siempre esté en verde.',
      icon: Award,
    },
    {
      title: 'Corte extendido 15:00 hs',
      desc: 'Garantizamos la Cobertura MDP y la entrega Same-Day en toda la ciudad recibiendo tus paquetes en mano hasta las 15:00 hs.',
      icon: Clock,
    },
    {
      title: 'Seguimiento por App',
      desc: 'Notificaciones en tiempo real, confirmación de entrega digital con firma/foto para cada paquete despachado.',
      icon: Smartphone,
    },
  ];

  return (
    <section 
      id="flex-features" 
      className="py-24 bg-gray-50 relative z-10 overflow-hidden border-t-4 border-brand-blue"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Header column (Left) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-yellow shadow-[2px_2px_0px_rgba(0,39,124,0.2)]">
              MERCADOLIBRE EXPERTS
            </span>
            
            <h2 className="text-brand-blue text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-none border-l-4 border-brand-yellow pl-4">
              DOMINÁ TUS VENTAS <br />
              <span className="text-brand-yellow font-bold">CON ENVÍOS FLEX</span>
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed font-sans">
              Somos el aliado estratégico definitivo para vendedores de MercadoLibre en Mar del Plata. Optimizamos tus Envíos Same-Day Mar del Plata para que vos solo te preocupes por publicar, atender clientes y vender más de lo que imaginás.
            </p>

            <div className="pt-4 flex items-center gap-3.5 text-sm text-brand-blue font-bold uppercase tracking-wider font-subheading">
              <MapPin className="h-5 w-5 text-brand-yellow shrink-0 fill-brand-blue" />
              <span>COBERTURA TOTAL EN MAR DEL PLATA</span>
            </div>
          </div>

          {/* Features columns (Right) */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-6 text-left">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.5 }}
                  className="bg-white border-2 border-brand-blue/20 hover:border-brand-blue hover:shadow-[4px_4px_0px_var(--color-brand-blue)] p-6 rounded-3xl transition-all duration-300 flex flex-col lg:flex-row gap-5 items-start"
                >
                  <div className="p-3 bg-brand-blue text-brand-yellow rounded-2xl shrink-0 border border-brand-blue">
                    <Icon className="h-5.5 w-5.5 shrink-0" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-xl font-display uppercase tracking-wider text-brand-blue leading-tight">
                      {feat.title}
                    </h4>
                    <p className="text-sm text-slate-655 font-sans leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
