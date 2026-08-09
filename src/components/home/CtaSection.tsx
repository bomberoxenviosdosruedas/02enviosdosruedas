'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, type Variants, type Transition } from 'motion/react';
import { MessageSquare, FileText, User, Store, PackageSearch } from 'lucide-react';

export default function CtaSection() {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({ name: '', business: '', volume: '' });

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, business, volume } = formData;
    const message = `Hola, soy ${name} de ${business}. Me interesa cotizar envíos para ${volume} paquetes mensuales.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5492236602699?text=${encodedMessage}`, '_blank');
  };

  // HyperFrames standard spring config
  const springConfig: Transition = { type: 'spring', stiffness: 100, damping: 20 };
  const springConfigSnappy: Transition = { type: 'spring', stiffness: 300, damping: 25 };

  // Container variants with orchestrated stagger
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      id="cta-section"
      className="py-24 bg-brand-blue-700 relative z-10 overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="max-w-6xl mx-auto double-bezel-outer bg-brand-blue-100/50 p-2 sm:p-4 rounded-[2.5rem]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div
          className="double-bezel-inner bg-white rounded-[2rem] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 border-2 border-brand-blue-100 shadow-minimal relative overflow-hidden"
          variants={itemVariants}
        >

          {/* Background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,54,165,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,54,165,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Left Text Block */}
          <motion.div className="lg:w-1/2 space-y-8 relative z-10 text-center lg:text-left" variants={itemVariants}>
            <motion.div className="inline-flex" whileHover={{ scale: 1.02, transition: springConfigSnappy }}>
              <span className="px-4 py-2 rounded-full text-xs font-subheading tracking-widest bg-brand-yellow/20 text-brand-blue border border-brand-yellow uppercase font-bold">
                Cotización Inmediata
              </span>
            </motion.div>

            <motion.h2 className="text-brand-blue text-display uppercase leading-[0.95]">
              ¿Listo para escalar la logística de tu e-commerce?
            </motion.h2>

            <motion.p className="text-brand-blue-500 text-lg font-sans leading-relaxed font-medium">
              Olvidate de la gestión de paquetes en Mar del Plata. Completá los datos y hablemos por WhatsApp al instante.
            </motion.p>

            <motion.div className="pt-2 hidden lg:block" whileHover={{ x: 4, transition: springConfigSnappy }}>
              <p className="text-xs font-mono tracking-widest text-brand-blue-400 font-bold uppercase leading-none">
                Atención comercial <span className="text-brand-yellow-500 bg-brand-blue px-2 py-0.5 rounded">{'<'} 2 MIN</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right Form Block */}
          <motion.div className="lg:w-1/2 w-full relative z-10" variants={itemVariants}>
            <form onSubmit={handleWhatsAppRedirect} className="space-y-5 bg-brand-white-50 p-6 sm:p-8 rounded-2xl border-2 border-brand-blue-100 shadow-[4px_4px_0px_var(--color-brand-blue-200)]">

              <motion.div
                className="space-y-1.5"
                whileHover={{ x: 4, transition: springConfigSnappy }}
              >
                <label className="text-xs font-subheading tracking-widest text-brand-blue uppercase font-bold">Tu Nombre</label>
                <div className="relative">
                  <motion.div
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-blue-400"
                    whileHover={{ scale: 1.2, transition: springConfigSnappy }}
                  >
                    <User />
                  </motion.div>
                  <input
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    type="text"
                    placeholder="Ingresá tu nombre"
                    className="w-full h-12 border-2 border-brand-blue-100 rounded-xl pl-11 pr-4 focus:outline-none focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20 text-brand-blue-700 text-sm font-sans transition-colors"
                  />
                </div>
              </motion.div>

              <motion.div
                className="space-y-1.5"
                whileHover={{ x: 4, transition: springConfigSnappy }}
              >
                <label className="text-xs font-subheading tracking-widest text-brand-blue uppercase font-bold">Empresa / Negocio</label>
                <div className="relative">
                  <motion.div
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-blue-400"
                    whileHover={{ scale: 1.2, transition: springConfigSnappy }}
                  >
                    <Store />
                  </motion.div>
                  <input
                    required
                    value={formData.business}
                    onChange={e => setFormData({...formData, business: e.target.value})}
                    type="text"
                    placeholder="Nombre de tu emprendimiento"
                    className="w-full h-12 border-2 border-brand-blue-100 rounded-xl pl-11 pr-4 focus:outline-none focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20 text-brand-blue-700 text-sm font-sans transition-colors"
                  />
                </div>
              </motion.div>

              <motion.div
                className="space-y-1.5"
                whileHover={{ x: 4, transition: springConfigSnappy }}
              >
                <label className="text-xs font-subheading tracking-widest text-brand-blue uppercase font-bold">Volumen Estimado Mensual</label>
                <div className="relative">
                  <motion.div
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-blue-400"
                    whileHover={{ scale: 1.2, transition: springConfigSnappy }}
                  >
                    <PackageSearch />
                  </motion.div>
                  <select
                    required
                    value={formData.volume}
                    onChange={e => setFormData({...formData, volume: e.target.value})}
                    className="w-full h-12 border-2 border-brand-blue-100 rounded-xl pl-11 pr-4 focus:outline-none focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20 text-brand-blue-700 text-sm font-sans transition-colors appearance-none bg-white cursor-pointer"
                  >
                    <option value="" disabled>Seleccioná una opción</option>
                    <option value="1 a 50">1 a 50 envíos</option>
                    <option value="51 a 200">51 a 200 envíos</option>
                    <option value="Más de 200">Más de 200 envíos</option>
                  </select>
                </div>
              </motion.div>

              <motion.div className="pt-4" whileHover={{ y: -2, transition: springConfigSnappy }}>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 20px -8px rgba(255, 236, 1, 0.4)', transition: springConfigSnappy }}
                  whileTap={{ scale: 0.98, y: 2, transition: springConfigSnappy }}
                  className="w-full bg-brand-yellow hover:bg-brand-yellow-400 text-brand-blue font-subheading tracking-wider text-xl uppercase py-4 rounded-xl border-2 border-brand-blue shadow-[4px_4px_0px_var(--color-brand-blue)] flex items-center justify-center gap-3 cursor-pointer font-bold"
                >
                  <span>Hablar por WhatsApp</span>
                  <motion.span
                    className="h-5 w-5"
                    whileHover={{ scale: 1.1, rotate: 12, transition: springConfigSnappy }}
                  >
                    <MessageSquare />
                  </motion.span>
                </motion.button>
              </motion.div>

            </form>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
}