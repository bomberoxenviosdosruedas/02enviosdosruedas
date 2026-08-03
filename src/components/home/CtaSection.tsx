'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { MessageSquare, FileText, User, Store, PackageSearch } from 'lucide-react';

export default function CtaSection() {
  const [formData, setFormData] = useState({ name: '', business: '', volume: '' });

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, business, volume } = formData;
    const message = `Hola, soy ${name} de ${business}. Me interesa cotizar envíos para ${volume} paquetes mensuales.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5492236602699?text=${encodedMessage}`, '_blank');
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
        variants={{
          hidden: { opacity: 0, y: 45 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      >
        <div className="double-bezel-inner bg-white rounded-[2rem] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 border-2 border-brand-blue-100 shadow-minimal relative overflow-hidden">

          {/* Background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,54,165,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,54,165,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Left Text Block */}
          <div className="lg:w-1/2 space-y-8 relative z-10 text-center lg:text-left">
            <div className="inline-flex">
              <span className="px-4 py-2 rounded-full text-xs font-subheading tracking-widest bg-brand-yellow/20 text-brand-blue border border-brand-yellow uppercase font-bold">
                Cotización Inmediata
              </span>
            </div>

            <h2 className="text-brand-blue text-display uppercase leading-[0.95]">
              ¿Listo para escalar la logística de tu e-commerce?
            </h2>

            <p className="text-brand-blue-500 text-lg font-sans leading-relaxed font-medium">
              Olvidate de la gestión de paquetes en Mar del Plata. Completá los datos y hablemos por WhatsApp al instante.
            </p>

            <div className="pt-2 hidden lg:block">
              <p className="text-xs font-mono tracking-widest text-brand-blue-400 font-bold uppercase leading-none">
                Atención comercial <span className="text-brand-yellow-500 bg-brand-blue px-2 py-0.5 rounded">{'<'} 2 MIN</span>
              </p>
            </div>
          </div>

          {/* Right Form Block */}
          <div className="lg:w-1/2 w-full relative z-10">
            <form onSubmit={handleWhatsAppRedirect} className="space-y-5 bg-brand-white-50 p-6 sm:p-8 rounded-2xl border-2 border-brand-blue-100 shadow-[4px_4px_0px_var(--color-brand-blue-200)]">

              <div className="space-y-1.5">
                <label className="text-xs font-subheading tracking-widest text-brand-blue uppercase font-bold">Tu Nombre</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-blue-400" />
                  <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} type="text" placeholder="Ingresá tu nombre" className="w-full h-12 border-2 border-brand-blue-100 rounded-xl pl-11 pr-4 focus:outline-none focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20 text-brand-blue-700 text-sm font-sans transition-colors" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-subheading tracking-widest text-brand-blue uppercase font-bold">Empresa / Negocio</label>
                <div className="relative">
                  <Store className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-blue-400" />
                  <input required value={formData.business} onChange={e => setFormData({...formData, business: e.target.value})} type="text" placeholder="Nombre de tu emprendimiento" className="w-full h-12 border-2 border-brand-blue-100 rounded-xl pl-11 pr-4 focus:outline-none focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20 text-brand-blue-700 text-sm font-sans transition-colors" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-subheading tracking-widest text-brand-blue uppercase font-bold">Volumen Estimado Mensual</label>
                <div className="relative">
                  <PackageSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-blue-400" />
                  <select required value={formData.volume} onChange={e => setFormData({...formData, volume: e.target.value})} className="w-full h-12 border-2 border-brand-blue-100 rounded-xl pl-11 pr-4 focus:outline-none focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20 text-brand-blue-700 text-sm font-sans transition-colors appearance-none bg-white cursor-pointer">
                    <option value="" disabled>Seleccioná una opción</option>
                    <option value="1 a 50">1 a 50 envíos</option>
                    <option value="51 a 200">51 a 200 envíos</option>
                    <option value="Más de 200">Más de 200 envíos</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-brand-yellow hover:bg-brand-yellow-400 text-brand-blue font-subheading tracking-wider text-xl uppercase py-4 rounded-xl border-2 border-brand-blue shadow-[4px_4px_0px_var(--color-brand-blue)] flex items-center justify-center gap-3 cursor-pointer font-bold active:scale-[0.98] active:translate-y-[2px] transition-all group">
                  <span>Hablar por WhatsApp</span>
                  <MessageSquare className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>

            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
