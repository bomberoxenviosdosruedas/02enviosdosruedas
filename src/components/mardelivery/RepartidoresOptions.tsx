'use client';

import React from 'react';
import Link from 'next/link';
import {
  Users,
  Clock,
  Bike,
  Shuffle,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';

const WHATSAPP_NUMBER = SUPPORT_PHONE.replace(/\D/g, '');

export function RepartidoresOptions() {
  const options = [
    {
      title: 'Repartidores por Turno',
      tag: 'Cobertura Fija',
      theme: 'amber' as const,
      description:
        'Contás con cadetes asignados exclusivamente a tu local durante las franjas de mayor demanda (ej. mediodías de 11:30 a 15:00 o noches de 20:00 a 00:00).',
      points: [
        'Cadetes puntuales en la puerta de tu negocio',
        'Prioridad absoluta para tus pedidos',
        'Ideal para picos de venta de fin de semana',
      ],
    },
    {
      title: 'Tu Equipo Propio en la App',
      tag: 'Digitalizá a tus Cadetes',
      theme: 'light' as const,
      description:
        'Si ya contás con repartidores de confianza, incorporalos a la aplicación de MarDelivery para que gestionen sus comandas con mapa y trazabilidad.',
      points: [
        'Orden de despacho digital sin papeles perdidos',
        'Comprobante de entrega con firma en pantalla',
        'Control de caja y cobros contra entrega',
      ],
    },
    {
      title: 'Modalidad Híbrida / Combinada',
      tag: 'Máxima Disponibilidad',
      theme: 'obsidian' as const,
      description:
        'Operás habitualmente con tus repartidores propios y, cuando la demanda explota o el clima se complica, sumás el refuerzo de la flota de DosRuedas.',
      points: [
        'Refuerzo inmediato en días de lluvia o feriados',
        'Sin costos fijos cuando la demanda baja',
        'Continuidad de servicio asegurada en Mar del Plata',
      ],
    },
  ];

  return (
    <section id="repartidores" className="py-16 sm:py-24 lg:py-28 bg-white relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2ECC85]/12 border border-[#2ECC85]/30 text-[#1B8756] text-xs font-subheading font-bold uppercase tracking-widest">
            <Bike className="w-3.5 h-3.5 text-[#2ECC85]" />
            LOGÍSTICA GASTRONÓMICA FLEXIBLE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#031811]">
            Elegí cómo querés gestionar a tus cadetes
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#031811]/75 leading-relaxed">
            Adaptamos la logística al ritmo real de tu cocina y salón. Sin ataduras ni esquemas rígidos.
          </p>
        </div>

        {/* Grid de 3 tarjetas con 3 identidades cromáticas distintas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {options.map((opt) => {
            if (opt.theme === 'amber') {
              // 1. Tarjeta 1: Amarillo adecuado (Sun Amber cálido y vibrante)
              return (
                <div
                  key={opt.title}
                  className="rounded-2xl p-6 sm:p-8 bg-linear-to-b from-[#FFFDF0] via-[#FFF9DC] to-[#FFF3BF] text-[#031811] border-2 border-[#F5B938]/60 shadow-[0_6px_24px_-4px_rgba(245,185,56,0.22)] hover:shadow-[0_12px_36px_-6px_rgba(245,185,56,0.32)] hover:border-[#F5B938] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#F5B938]/15 rounded-full blur-xl pointer-events-none" />
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#F5B938] text-[#031811] flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform duration-200">
                        <Clock className="w-7 h-7 text-[#031811]" />
                      </div>
                      <span className="text-2xs font-subheading font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#031811] text-[#F5B938] shadow-xs">
                        {opt.tag}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <h3 className="font-display text-2xl uppercase tracking-tight text-[#031811]">
                        {opt.title}
                      </h3>
                      <p className="font-sans text-sm text-[#031811]/85 leading-relaxed">
                        {opt.description}
                      </p>
                    </div>

                    <ul className="space-y-3 pt-3 border-t border-[#F5B938]/30">
                      {opt.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs font-sans text-[#031811]/90 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#D9940A] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#F5B938]/30 flex items-center justify-between text-xs font-mono font-bold text-[#8C6207] relative z-10">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#D9940A]" />
                      Turnos fijos coordinados
                    </span>
                  </div>
                </div>
              );
            }

            if (opt.theme === 'light') {
              // 2. Tarjeta 2: Fondo claro nítido y balanceado
              return (
                <div
                  key={opt.title}
                  className="rounded-2xl p-6 sm:p-8 bg-white text-[#031811] border border-[#031811]/12 shadow-[0_4px_16px_-2px_rgba(3,24,17,0.06)] hover:shadow-[0_12px_32px_-4px_rgba(3,24,17,0.12)] hover:border-[#031811]/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#031811] text-[#FAFCFB] flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform duration-200">
                        <Users className="w-7 h-7" />
                      </div>
                      <span className="text-2xs font-subheading font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#031811]/5 text-[#031811] border border-[#031811]/15">
                        {opt.tag}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <h3 className="font-display text-2xl uppercase tracking-tight text-[#031811]">
                        {opt.title}
                      </h3>
                      <p className="font-sans text-sm text-[#031811]/75 leading-relaxed">
                        {opt.description}
                      </p>
                    </div>

                    <ul className="space-y-3 pt-3 border-t border-[#031811]/8">
                      {opt.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs font-sans text-[#031811]/85">
                          <CheckCircle2 className="w-4 h-4 text-[#031811] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#031811]/8 flex items-center justify-between text-xs font-mono font-bold text-[#031811]/70">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#031811]" />
                      Tu equipo en pantalla
                    </span>
                  </div>
                </div>
              );
            }

            // 3. Tarjeta 3: Deep Maritime Obsidian con Esmeralda
            return (
              <div
                key={opt.title}
                className="rounded-2xl p-6 sm:p-8 bg-[#031811] text-white border-2 border-[#2ECC85]/60 shadow-[0_12px_40px_-6px_rgba(3,24,17,0.28)] hover:border-[#2ECC85] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#2ECC85]/15 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#2ECC85] text-[#031811] flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform duration-200">
                      <Bike className="w-7 h-7 text-[#031811]" />
                    </div>
                    <span className="text-2xs font-subheading font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#2ECC85] text-[#031811] shadow-[0_0_12px_rgba(46,204,133,0.35)]">
                      {opt.tag}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <h3 className="font-display text-2xl uppercase tracking-tight text-white">
                      {opt.title}
                    </h3>
                    <p className="font-sans text-sm text-[#FAFCFB]/80 leading-relaxed">
                      {opt.description}
                    </p>
                  </div>

                  <ul className="space-y-3 pt-3 border-t border-white/10">
                    {opt.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs font-sans text-[#FAFCFB]/90">
                        <CheckCircle2 className="w-4 h-4 text-[#2ECC85] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold text-[#2ECC85] relative z-10">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#2ECC85]" />
                    Respaldo DosRuedas en picos
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de cierre y enlace externo con estilo Deep Maritime Obsidian */}
        <div className="rounded-3xl bg-[#031811] p-8 sm:p-12 text-white shadow-2xl border border-[#2ECC85]/25 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2ECC85]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 max-w-2xl text-center lg:text-left relative z-10">
            <span className="text-xs font-subheading uppercase tracking-widest text-[#2ECC85] font-bold block">
              MARDELIVERY OFICIAL · MAR DEL PLATA
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white leading-tight">
              ¿Listo para modernizar el delivery de tu comercio?
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#FAFCFB]/80 font-light leading-relaxed">
              Contactanos para coordinar una prueba con tu menú online y planificar la cadetería de tu local en Mar del Plata.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0 relative z-10">
            <a
              href="https://www.mardelivery.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalytics.ctaClick('mardelivery_portal_click', 'Sitio Oficial MarDelivery')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2ECC85] hover:bg-[#27b374] text-[#031811] font-subheading font-bold text-sm uppercase tracking-wider rounded-full shadow-[0_0_24px_rgba(46,204,133,0.35)] transition-all active:scale-95"
            >
              <span>Ir a www.mardelivery.com</span>
              <ExternalLink className="w-4 h-4 text-[#031811]" />
            </a>

            <a
              href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=Hola%20MarDelivery!%20Quiero%20coordinar%20una%20demostraci%C3%B3n%20para%20mi%20local`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalytics.whatsappClick('mardelivery_solicitar_demo', 'Chatear por WhatsApp')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#111B17] hover:bg-white/10 border border-[#2ECC85]/30 text-white font-subheading font-bold text-sm uppercase tracking-wider rounded-full transition-all active:scale-95"
            >
              <FaWhatsapp className="w-4 h-4 text-[#2ECC85]" />
              <span>Solicitar Demostración</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
