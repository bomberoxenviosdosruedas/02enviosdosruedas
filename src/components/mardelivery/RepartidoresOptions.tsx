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
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';

const WHATSAPP_NUMBER = SUPPORT_PHONE.replace(/\D/g, '');

export function RepartidoresOptions() {
  const options = [
    {
      title: 'Repartidores por Turno',
      tag: 'Cobertura Fija',
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
      tag: 'Máxima Flexibilidad',
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
    <section id="repartidores" className="py-16 sm:py-24 bg-brand-blue-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="text-xs font-subheading uppercase tracking-widest text-brand-blue-500 font-bold px-3 py-1 bg-brand-blue-100 rounded-full">
            Logística Gastronómica Flexible
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-brand-blue-500">
            Elegí cómo querés gestionar a tus cadetes
          </h2>
          <p className="font-sans text-base sm:text-lg text-brand-blue-900/75">
            Adaptamos la logística al ritmo real de tu cocina y salón. Sin ataduras ni esquemas rígidos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {options.map((opt) => (
            <DoubleBezelCard
              key={opt.title}
              variant="light"
              className="h-full flex flex-col justify-between"
              innerClassName="p-6 sm:p-8 flex flex-col justify-between h-full bg-white"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center font-bold">
                    <Bike className="w-6 h-6" />
                  </div>
                  <span className="text-2xs font-subheading font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-blue-50 text-brand-blue-500 border border-brand-blue-200">
                    {opt.tag}
                  </span>
                </div>

                <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
                  {opt.title}
                </h3>

                <p className="font-sans text-sm text-brand-blue-900/75 leading-relaxed">
                  {opt.description}
                </p>

                <ul className="space-y-2 pt-2 border-t border-brand-blue-50">
                  {opt.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-sans text-brand-blue-900/85">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </DoubleBezelCard>
          ))}
        </div>

        {/* Banner de cierre y enlace externo */}
        <div className="rounded-3xl bg-brand-blue-500 p-8 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-xs font-subheading uppercase tracking-widest text-brand-yellow-500 font-bold block">
              MarDelivery Oficial · Mar del Plata
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white leading-tight">
              ¿Listo para modernizar el delivery de tu comercio?
            </h3>
            <p className="font-sans text-sm sm:text-base text-brand-blue-50 font-light leading-relaxed">
              Contactanos para coordinar una prueba con tu menú online y planificar la cadetería de tu local en Mar del Plata.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <a
              href="https://www.mardelivery.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalytics.ctaClick('mardelivery_portal_click', 'Sitio Oficial MarDelivery')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading font-bold text-sm uppercase tracking-wider rounded-full shadow-lg transition-all"
            >
              <span>Ir a www.mardelivery.com</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=Hola%20MarDelivery!%20Quiero%20coordinar%20una%20demostraci%C3%B3n%20para%20mi%20local`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalytics.whatsappClick('mardelivery_solicitar_demo', 'Chatear por WhatsApp')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-subheading font-bold text-sm uppercase tracking-wider rounded-full transition-all"
            >
              <FaWhatsapp className="w-4 h-4 text-brand-yellow-500" />
              <span>Solicitar Demostración</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
