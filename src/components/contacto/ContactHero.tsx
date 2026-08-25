'use client';

import React, { useState } from 'react';
import HeroProceduralBackground from '@/src/components/ui/HeroProceduralBackground';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

const CHANNELS = [
  {
    title: "WhatsApp Comercial",
    desc: "Respuestas y cotizaciones de envíos en tiempo real.",
    icon: Mail,
    href: "https://wa.me/542236602699?text=Hola!%20Quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20mis%20env%C3%ADos.",
  },
  {
    title: "Llamada de Coordinación",
    desc: "Para hablar directamente con un coordinador logístico.",
    icon: Phone,
    href: "tel:+542236602699",
  },
  {
    title: "Solicitar Cotización B2B",
    desc: "Envianos tu base de envíos para un plan personalizado.",
    icon: MapPin,
    href: "mailto:matiascejas@enviosdosruedas.com",
  },
];

export default function ContactHero() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    volumen: '50-200',
    servicio: 'express',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative w-full pt-20 pb-16 lg:pt-24 lg:pb-24 bg-brand-blue-50 overflow-hidden">
      {/* Glow orbs - brand colors */}
      <div
        className="absolute top-[-128px] left-[-128px] w-[384px] h-[384px] rounded-full pointer-events-none bg-brand-yellow-500/30 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-160px] right-[-128px] w-[500px] h-[500px] rounded-full pointer-events-none bg-brand-blue-700/20 blur-[130px]"
        aria-hidden="true"
      />

      {/* Border accent */}
      <div className="absolute inset-0 pointer-events-none border border-brand-blue-100/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-24">
        {/* Top Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline & Channels (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Badge - "Conexión Directa Mar del Plata" */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit bg-white/80 border border-brand-blue-100 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow-500 shadow-[0_0_10px_#FFEC01]" />
              <span className="font-subheading text-xs font-bold uppercase tracking-wider text-brand-blue-700">
                Conexión Directa Mar del Plata
              </span>
            </div>

            {/* Monumental Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display uppercase tracking-tight leading-[0.88] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-brand-blue-700"
            >
              ¿Hablamos<br />
              <span className="italic text-transparent [-webkit-text-stroke:2px_#0636A5]">
                ahora?
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl font-sans leading-relaxed text-lg sm:text-xl text-brand-ink/90"
            >
              Sin formularios complejos ni esperas. Elegí el canal que mejor se adapte al ritmo de tu e-commerce.
            </motion.p>

            {/* Office Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-8 pt-6 border-t border-brand-blue-100"
            >
              <div className="grid gap-1">
                <span className="font-subheading text-xs uppercase tracking-wider text-brand-blue-400 font-bold">
                  Oficina Central
                </span>
                <span className="font-sans text-sm font-bold text-brand-blue-700">
                  Friuli 1972, Mar del Plata
                </span>
              </div>
              <div className="grid gap-1">
                <span className="font-subheading text-xs uppercase tracking-wider text-brand-blue-400 font-bold">
                  Operación
                </span>
                <span className="font-sans text-sm font-bold text-brand-blue-700">
                  Lunes a Sábado · Turnos 2026
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Channel Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4 sm:space-y-5"
          >
            {CHANNELS.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                target={channel.title === 'Llamada de Coordinación' ? '_self' : '_blank'}
                rel={channel.title === 'Llamada de Coordinación' ? undefined : 'noopener noreferrer'}
                className="group flex items-center justify-between p-6 rounded-2xl bg-white border border-brand-blue-100 shadow-sm hover:shadow-lg hover:border-brand-blue-300 transition-all duration-300 cursor-pointer"
              >
                <span className="flex items-center gap-4 sm:gap-5">
                  <span className="inline-flex p-3 rounded-xl bg-brand-blue-50 text-brand-blue-700 group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-900 transition-colors duration-300">
                    <channel.icon className="h-6 w-6 shrink-0" />
                  </span>
                  <span>
                    <span className="block font-display uppercase tracking-wide text-lg sm:text-xl text-brand-blue-700 leading-tight mb-1">
                      {channel.title}
                    </span>
                    <span className="block font-sans text-xs text-brand-ink/70">
                      {channel.desc}
                    </span>
                  </span>
                </span>
                <span className="text-brand-blue-400 group-hover:text-brand-blue-700 group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section: "Pedí un plan a medida" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pt-12 sm:pt-16 border-t border-brand-blue-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column: Heading, Description & Moto Image */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-blue-100 text-brand-blue-700 text-xs font-subheading uppercase tracking-wider font-bold">
                <Sparkles className="w-3.5 h-3.5 text-brand-yellow-500" />
                <span>PROPUESTA B2B · GENERAL PUEYRREDÓN</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-brand-blue-700 leading-[0.95]">
                Pedí un plan a medida
              </h2>

              <p className="font-sans text-base sm:text-lg text-brand-ink/80 leading-relaxed">
                Si tu negocio despacha a diario en Mar del Plata o necesitás integración de envíos para tu tienda online, armamos un esquema con tarifas fijas, retiros programados y cuenta corriente mensual.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-brand-blue-100 shadow-xs flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-brand-yellow-500 shrink-0" />
                  <span className="font-subheading text-xs uppercase tracking-wider text-brand-blue-700 font-bold">
                    Tarifas por volumen
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-brand-blue-100 shadow-xs flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand-yellow-500 shrink-0" />
                  <span className="font-subheading text-xs uppercase tracking-wider text-brand-blue-700 font-bold">
                    Retiros en tu local
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-brand-blue-100 shadow-xs flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-yellow-500 shrink-0" />
                  <span className="font-subheading text-xs uppercase tracking-wider text-brand-blue-700 font-bold">
                    Todo MDQ y Batán
                  </span>
                </div>
              </div>

              {/* Vector Dispatch HUD Card */}
              <div className="relative w-full h-[220px] rounded-2xl overflow-hidden shadow-lg border border-brand-blue-700/20 bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-700 p-6 flex flex-col justify-between">
                <HeroProceduralBackground variant="contact" />
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <span className="font-subheading text-xs uppercase tracking-widest text-brand-yellow-500 font-bold block">
                      CENTRAL DE DESPACHO MDQ
                    </span>
                    <span className="font-display text-2xl uppercase tracking-tight text-white mt-1 block">
                      COBERTURA GENERAL PUEYRREDÓN
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-brand-yellow-500/20 border border-brand-yellow-500 text-brand-yellow-500 font-mono text-xs font-bold">
                    GPS ACTIVO
                  </span>
                </div>
                <div className="relative z-10 flex justify-between items-end text-white border-t border-white/10 pt-3">
                  <div>
                    <span className="font-subheading uppercase text-xs tracking-wider block text-brand-blue-100">
                      Hub Operativo Friuli 1972
                    </span>
                    <span className="font-sans text-xs text-brand-yellow-500 font-medium">
                      Salidas cada 30 min · Soporte en directo
                    </span>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-brand-yellow-500 animate-pulse shadow-[0_0_8px_#FFEC01]" />
                </div>
              </div>
            </div>

            {/* Right Column: Double-Bezel Quick Request Card */}
            <div className="double-bezel-outer bg-brand-blue-50 border border-brand-blue-100 p-2 rounded-2xl shadow-lg">
              <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-xs relative overflow-hidden">
                {/* Accent line top */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-blue-700 via-brand-blue-500 to-brand-yellow-500" />

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-brand-yellow-500 text-brand-blue-900 mx-auto flex items-center justify-center shadow-accent">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-700">
                      ¡SOLICITUD REGISTRADA!
                    </h3>
                    <p className="font-sans text-sm text-brand-ink/80 max-w-sm mx-auto">
                      Un asesor comercial de Envíos DosRuedas te escribirá a la brevedad con la tarifa especial para tu volumen.
                    </p>
                    <a
                      href={`https://wa.me/542236602699?text=Hola!%20Ped%C3%AD%20un%20plan%20a%20medida%20a%20nombre%20de%20${encodeURIComponent(
                        formData.nombre || 'mi comercio'
                      )}%20para%20${encodeURIComponent(formData.volumen)}%20env%C3%ADos%20mensuales.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 font-subheading uppercase text-sm tracking-wider font-bold shadow-accent transition-all cursor-pointer mt-2"
                    >
                      <span>Coordinar ahora por WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                    <div>
                      <span className="font-subheading text-xs uppercase tracking-wider text-brand-blue-400 font-bold block">
                        COTIZACIÓN INMEDIATA
                      </span>
                      <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-700 leading-none mt-1">
                        Cotizá tu cuenta comercial
                      </h3>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-subheading uppercase tracking-wider text-brand-blue-700 font-bold">
                        Nombre o Comercio <span className="text-brand-yellow-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej: Tienda Güemes / Juan Pérez"
                        className="w-full h-11 px-4 rounded-xl border-2 border-brand-blue-100 text-brand-ink font-sans text-sm focus:outline-none focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20 bg-white transition-all placeholder:text-brand-blue-300"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-subheading uppercase tracking-wider text-brand-blue-700 font-bold">
                        WhatsApp / Teléfono <span className="text-brand-yellow-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="Ej: 223 660-2699"
                        className="w-full h-11 px-4 rounded-xl border-2 border-brand-blue-100 text-brand-ink font-sans text-sm focus:outline-none focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20 bg-white transition-all placeholder:text-brand-blue-300"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-subheading uppercase tracking-wider text-brand-blue-700 font-bold">
                          Volumen Mensual
                        </label>
                        <select
                          value={formData.volumen}
                          onChange={(e) => setFormData({ ...formData, volumen: e.target.value })}
                          className="w-full h-11 px-3 rounded-xl border-2 border-brand-blue-100 text-brand-ink font-sans text-sm focus:outline-none focus:border-brand-blue-700 bg-white cursor-pointer"
                        >
                          <option value="20-50">20 a 50 envíos</option>
                          <option value="50-200">50 a 200 envíos</option>
                          <option value="200-500">200 a 500 envíos</option>
                          <option value="+500">+500 envíos (Gran cuenta)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-subheading uppercase tracking-wider text-brand-blue-700 font-bold">
                          Modalidad
                        </label>
                        <select
                          value={formData.servicio}
                          onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                          className="w-full h-11 px-3 rounded-xl border-2 border-brand-blue-100 text-brand-ink font-sans text-sm focus:outline-none focus:border-brand-blue-700 bg-white cursor-pointer"
                        >
                          <option value="express">Express (2 horas)</option>
                          <option value="lowcost">LowCost (Mismo día)</option>
                          <option value="flex">MercadoLibre Flex</option>
                          <option value="3pl">Fulfillment 3PL</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 cta-nested-pill bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 border-none shadow-accent font-subheading tracking-wider uppercase text-base py-3 cursor-pointer justify-center transition-all duration-300 active:scale-[0.99]"
                    >
                      <span>Solicitar Plan y Tarifas</span>
                      <span className="cta-nested-icon bg-brand-blue-900/10 text-brand-blue-900 shrink-0">
                        <Send className="h-4 w-4" />
                      </span>
                    </button>

                    <p className="text-center font-sans text-xs text-brand-blue-400 pt-1">
                      Atención comercial directa en Mar del Plata · Sin costos de apertura de cuenta
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
