'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Truck, Clock, ShieldCheck, MapPin, CheckCircle2, MessageCircle, Users, Activity } from 'lucide-react';

export default function FlexFeatures() {
  const differentials = [
    { text: 'Atención humana directa por WhatsApp', icon: MessageCircle },
    { text: 'Equipo propio, profesional y de confianza', icon: Users },
    { text: 'Baja tasa de siniestralidad garantizada', icon: ShieldCheck },
    { text: 'Sistema propio de seguimiento y control', icon: Activity },
  ];

  const features = [
    {
      title: 'Recolección bonificada',
      desc: 'Retiramos tus paquetes sin costo adicional directamente por tu local o depósito. Sin mínimo de paquetes diarios: aplica desde 1 solo paquete.',
      icon: Truck,
      badge: 'SIN MÍNIMO',
    },
    {
      title: 'Horarios de corte',
      desc: 'Lunes a viernes hasta las 15:00 hs y sábados hasta las 12:00 hs. Recibimos y procesamos tus despachos del día con máxima puntualidad.',
      icon: Clock,
      badge: 'L-V 15HS · SÁB 12HS',
    },
    {
      title: 'Límite estricto: 20:00 hs',
      desc: 'Tus clientes reciben su compra en el día. El límite de entrega es estrictamente hasta las 20:00 hs, sin excepciones ni extensiones en fechas especiales.',
      icon: ShieldCheck,
      badge: 'HASTA 20:00 HS',
    },
    {
      title: 'Cobertura urbana y periferia',
      desc: 'Tarifas Flex estándar para todo el ejido urbano de Mar del Plata. Zonas periféricas (Chapadmalal, Batán, Santa Clara del Mar, etc.) requieren consulta previa y se cotizan a $1.000 por kilómetro (distancia retiro a entrega).',
      icon: MapPin,
      badge: 'EJIDO URBANO + KM',
    },
  ];

  return (
    <section
      id="flex-features"
      className="py-24 bg-brand-white-50 relative z-10 overflow-hidden border-t border-brand-blue-100"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Header column (Left) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="-rotate-1 inline-block px-4 py-1.5 bg-brand-blue-500 text-brand-yellow-500 rounded-full text-xs font-subheading uppercase tracking-widest shadow-sm">
              MERCADOLIBRE EXPERTS
            </span>

            <h2 className="text-brand-blue-500 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-[0.98]">
              DOMINÁ TUS VENTAS <br />
              <span className="text-brand-blue-500 bg-brand-yellow-500 px-2 py-0.5 inline-block mt-1 font-bold -rotate-1">
                CON ENVÍOS FLEX
              </span>
            </h2>

            <p className="text-brand-ink text-base leading-relaxed font-sans">
              Somos el aliado estratégico para vendedores de Mercado Libre en Mar del Plata. Optimizamos tus entregas en el día con equipo propio para que vos te dediques a publicar, vender y potenciar tu reputación.
            </p>

            {/* Diferenciales competitivos destacados */}
            <div className="pt-2 space-y-3">
              <h3 className="text-xs font-subheading uppercase tracking-widest text-brand-blue-500 font-bold">
                Diferenciales que marcan la diferencia:
              </h3>
              <ul className="space-y-2.5">
                {differentials.map((diff) => {
                  const DiffIcon = diff.icon;
                  return (
                    <li key={diff.text} className="flex items-center gap-3 text-sm text-brand-ink font-medium">
                      <div className="h-6 w-6 rounded-full bg-brand-yellow-500/20 text-brand-blue-500 flex items-center justify-center shrink-0 border border-brand-yellow-500/40">
                        <DiffIcon className="h-3.5 w-3.5" />
                      </div>
                      <span>{diff.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="pt-2 flex items-center gap-3.5 text-xs sm:text-sm text-brand-blue-500 font-bold uppercase tracking-wider font-subheading bg-brand-blue-50 p-3 rounded-2xl border border-brand-blue-100">
              <MapPin className="h-5 w-5 text-brand-yellow-500 shrink-0 fill-current" />
              <span>Ejido urbano de Mar del Plata · Periferia a $1.000/km</span>
            </div>
          </div>

          {/* Features columns (Right) - Bento Grid layout with Double-Bezel cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {features.map((feat, idx) => {
              const Icon = feat.icon;

              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{
                    y: -5,
                    x: 2,
                    boxShadow: '0 20px 40px -15px rgba(6, 54, 165, 0.15), 0 0 25px -5px rgba(255, 236, 1, 0.2)',
                  }}
                  className="bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-[28px] shadow-float hover:shadow-antigravity-deep transition-all duration-300 flex flex-col group cursor-pointer relative overflow-hidden"
                >
                  <div className="bg-white p-6 rounded-[20px] border border-brand-blue-50/50 shadow-sm flex flex-col gap-4 items-start h-full relative overflow-hidden">
                    {/* Giant Watermark Icon */}
                    <Icon className="absolute -bottom-6 -right-6 h-32 w-32 text-brand-blue-500/5 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110" />

                    <div className="w-full flex items-center justify-between gap-2 relative z-10">
                      <div className="p-3 bg-brand-blue-500 text-brand-yellow-500 rounded-xl shrink-0 border border-brand-blue-500 shadow-md group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-500 transition-colors duration-300">
                        <Icon className="h-6 w-6 shrink-0" />
                      </div>
                      <span className="text-[10px] font-subheading font-bold uppercase tracking-wider bg-brand-blue-50 text-brand-blue-500 px-2.5 py-1 rounded-full border border-brand-blue-100">
                        {feat.badge}
                      </span>
                    </div>

                    <div className="space-y-1.5 relative z-10">
                      <h4 className="text-xl font-display uppercase tracking-wider text-brand-blue-500 leading-tight group-hover:text-brand-blue-500 transition-colors duration-300">
                        {feat.title}
                      </h4>
                      <p className="text-sm text-brand-ink font-sans leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
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
