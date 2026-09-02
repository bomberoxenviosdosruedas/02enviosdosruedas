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
    <section className="relative w-full pt-20 pb-16 lg:pt-24 lg:pb-24 bg-[#0950F6] text-white overflow-hidden">
      {/* Glow orbs - high voltage neon & deep midnight navy */}
      <div
        className="absolute top-[-128px] left-[-128px] w-[384px] h-[384px] rounded-full pointer-events-none bg-[#FFF12E]/25 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-160px] right-[-128px] w-[500px] h-[500px] rounded-full pointer-events-none bg-[#052C87]/60 blur-[130px]"
        aria-hidden="true"
      />

      {/* Border accent */}
      <div className="absolute inset-0 pointer-events-none border border-white/10" />

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
            {/* Badge - "Conexión Directa Mar del Plata" with velocity tilt & neon glow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit bg-[#052C87]/80 backdrop-blur-md border border-[#FFF12E]/40 -rotate-1 shadow-glow-yellow">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFF12E] shadow-[0_0_10px_#FFF12E]" />
              <span className="font-subheading text-xs font-bold uppercase tracking-wider text-[#FFF12E]">
                Conexión Directa Mar del Plata
              </span>
            </div>

            {/* Monumental Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display uppercase tracking-tight leading-[0.98] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white"
            >
              ¿Hablamos<br />
              <span className="italic text-[#FFF12E] drop-shadow-[0_2px_16px_rgba(255,241,46,0.4)]">
                ahora?
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl font-sans leading-relaxed text-lg sm:text-xl text-white/90"
            >
              Sin formularios complejos ni esperas. Elegí el canal que mejor se adapte al ritmo de tu e-commerce.
            </motion.p>

            {/* Office Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-8 pt-6 border-t border-white/20"
            >
              <div className="grid gap-1">
                <span className="font-subheading text-xs uppercase tracking-wider text-[#FFF12E] font-bold">
                  Oficina Central
                </span>
                <span className="font-mono text-sm font-bold text-white tabular-nums">
                  Friuli 1972, Mar del Plata
                </span>
              </div>
              <div className="grid gap-1">
                <span className="font-subheading text-xs uppercase tracking-wider text-[#FFF12E] font-bold">
                  Operación
                </span>
                <span className="font-mono text-sm font-bold text-white tabular-nums">
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
                className="group flex items-center justify-between p-6 rounded-2xl bg-[#052C87] border border-white/15 shadow-lg hover:shadow-glow-yellow hover:border-[#FFF12E]/60 transition-all duration-300 cursor-pointer"
              >
                <span className="flex items-center gap-4 sm:gap-5">
                  <span className="inline-flex p-3 rounded-xl bg-white/10 text-[#FFF12E] group-hover:bg-[#FFF12E] group-hover:text-[#0950F6] transition-colors duration-300">
                    <channel.icon className="h-6 w-6 shrink-0" />
                  </span>
                  <span>
                    <span className="block font-display uppercase tracking-wide text-lg sm:text-xl text-white leading-tight mb-1">
                      {channel.title}
                    </span>
                    <span className="block font-sans text-xs text-white/70">
                      {channel.desc}
                    </span>
                  </span>
                </span>
                <span className="text-[#FFF12E] group-hover:translate-x-1 transition-transform">
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
          className="pt-12 sm:pt-16 border-t border-white/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column: Heading, Description & Moto Image */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#052C87] border border-white/20 text-[#FFF12E] text-xs font-subheading uppercase tracking-wider font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#FFF12E]" />
                <span>PROPUESTA B2B · GENERAL PUEYRREDÓN</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white leading-[0.98]">
                Pedí un plan a medida
              </h2>

              <p className="font-sans text-base sm:text-lg text-white/85 leading-relaxed">
                Si tu negocio despacha a diario en Mar del Plata o necesitás integración de envíos para tu tienda online, armamos un esquema con tarifas fijas, retiros programados y cuenta corriente mensual.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#052C87]/80 border border-white/15 flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-[#FFF12E] shrink-0" />
                  <span className="font-subheading text-xs uppercase tracking-wider text-white font-bold">
                    Tarifas por volumen
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#052C87]/80 border border-white/15 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#FFF12E] shrink-0" />
                  <span className="font-subheading text-xs uppercase tracking-wider text-white font-bold">
                    Retiros en tu local
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#052C87]/80 border border-white/15 flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FFF12E] shrink-0" />
                  <span className="font-subheading text-xs uppercase tracking-wider text-white font-bold">
                    Todo MDQ y Batán
                  </span>
                </div>
              </div>

              {/* Vector Dispatch HUD Card */}
              <div className="relative w-full h-[220px] rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-gradient-to-br from-[#052C87] via-[#04236B] to-[#021440] p-6 flex flex-col justify-between">
                <HeroProceduralBackground variant="contact" />
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <span className="font-subheading text-xs uppercase tracking-widest text-[#FFF12E] font-bold block">
                      CENTRAL DE DESPACHO MDQ
                    </span>
                    <span className="font-display text-2xl uppercase tracking-tight text-white mt-1 block">
                      COBERTURA GENERAL PUEYRREDÓN
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#FFF12E]/20 border border-[#FFF12E] text-[#FFF12E] font-mono text-xs font-bold tabular-nums">
                    GPS ACTIVO
                  </span>
                </div>
                <div className="relative z-10 flex justify-between items-end text-white border-t border-white/10 pt-3">
                  <div>
                    <span className="font-subheading uppercase text-xs tracking-wider block text-white/80">
                      Hub Operativo Friuli 1972
                    </span>
                    <span className="font-mono text-xs text-[#FFF12E] font-medium tabular-nums">
                      Salidas cada 30 min · Soporte en directo
                    </span>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-[#FFF12E] animate-pulse shadow-[0_0_8px_#FFF12E]" />
                </div>
              </div>
            </div>

            {/* Right Column: Double-Bezel Quick Request Card */}
            <div className="rounded-[28px] bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-xl">
              <div className="bg-[#052C87] p-6 sm:p-8 rounded-[20px] border border-white/10 relative overflow-hidden text-white">
                {/* Accent line top */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0950F6] via-white to-[#FFF12E]" />

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#FFF12E] text-[#0950F6] mx-auto flex items-center justify-center shadow-glow-yellow">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-2xl uppercase tracking-tight text-white">
                      ¡SOLICITUD REGISTRADA!
                    </h3>
                    <p className="font-sans text-sm text-white/80 max-w-sm mx-auto">
                      Un asesor comercial de Envíos DosRuedas te escribirá a la brevedad con la tarifa especial para tu volumen.
                    </p>
                    <a
                      href={`https://wa.me/542236602699?text=Hola!%20Ped%C3%AD%20un%20plan%20a%20medida%20a%20nombre%20de%20${encodeURIComponent(
                        formData.nombre || 'mi comercio'
                      )}%20para%20${encodeURIComponent(formData.volumen)}%20env%C3%ADos%20mensuales.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between min-h-[52px] px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-subheading uppercase text-sm tracking-wider font-bold shadow-lg transition-all cursor-pointer mt-2 group"
                    >
                      <span>Coordinar ahora por WhatsApp</span>
                      <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                    <div>
                      <span className="font-subheading text-xs uppercase tracking-wider text-[#FFF12E] font-bold block">
                        COTIZACIÓN INMEDIATA
                      </span>
                      <h3 className="font-display text-2xl uppercase tracking-tight text-white leading-none mt-1">
                        Cotizá tu cuenta comercial
                      </h3>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-subheading uppercase tracking-wider text-white/90 font-bold">
                        Nombre o Comercio <span className="text-[#FFF12E]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej: Tienda Güemes / Juan Pérez"
                        className="w-full h-11 px-4 rounded-xl border-2 border-[#0950F6]/30 bg-white/5 text-white font-sans text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF12E] transition-all placeholder:text-white/40"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-subheading uppercase tracking-wider text-white/90 font-bold">
                        WhatsApp / Teléfono <span className="text-[#FFF12E]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="Ej: 223 660-2699"
                        className="w-full h-11 px-4 rounded-xl border-2 border-[#0950F6]/30 bg-white/5 text-white font-mono text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF12E] transition-all placeholder:text-white/40 tabular-nums"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-subheading uppercase tracking-wider text-white/90 font-bold">
                          Volumen Mensual
                        </label>
                        <select
                          value={formData.volumen}
                          onChange={(e) => setFormData({ ...formData, volumen: e.target.value })}
                          className="w-full h-11 px-3 rounded-xl border-2 border-[#0950F6]/30 bg-[#052C87] text-white font-sans text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF12E] cursor-pointer"
                        >
                          <option value="20-50">20 a 50 envíos</option>
                          <option value="50-200">50 a 200 envíos</option>
                          <option value="200-500">200 a 500 envíos</option>
                          <option value="+500">+500 envíos (Gran cuenta)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-subheading uppercase tracking-wider text-white/90 font-bold">
                          Modalidad
                        </label>
                        <select
                          value={formData.servicio}
                          onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                          className="w-full h-11 px-3 rounded-xl border-2 border-[#0950F6]/30 bg-[#052C87] text-white font-sans text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF12E] cursor-pointer"
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
                      className="group w-full mt-2 min-h-[52px] rounded-full bg-[#FFF12E] hover:bg-[#FFF44A] text-[#0950F6] font-subheading uppercase text-base tracking-wider font-bold py-3 px-6 shadow-glow-yellow transition-all duration-300 cursor-pointer flex items-center justify-between"
                    >
                      <span>Solicitar Plan y Tarifas</span>
                      <span className="w-8 h-8 rounded-full bg-[#0950F6]/10 text-[#0950F6] flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                        <Send className="h-4 w-4" />
                      </span>
                    </button>

                    <p className="text-center font-sans text-xs text-white/60 pt-1">
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
