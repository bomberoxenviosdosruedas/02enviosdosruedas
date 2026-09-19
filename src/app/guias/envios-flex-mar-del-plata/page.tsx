import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  CheckCircle2,
  Clock,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Package,
  AlertTriangle,
  Sparkles,
  Truck,
  ExternalLink,
} from 'lucide-react';
import CTANestedPill from '@/src/components/ui/CTANestedPill';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Guía Completa Mercado Envíos Flex en Mar del Plata 2026',
  description:
    'Aprendé cómo activar, configurar y gestionar tus entregas con Mercado Envíos Flex en Mar del Plata. Horarios de corte, zonas cubiertas y consejos para proteger tu reputación.',
  alternates: {
    canonical: `${baseUrl}/guias/envios-flex-mar-del-plata`,
  },
  openGraph: {
    title: 'Guía Mercado Envíos Flex en Mar del Plata | Envíos DosRuedas',
    description:
      'Paso a paso definitivo para vendedores de Mercado Libre en Mar del Plata. Optimizá tu logística y entregá en el día.',
    url: `${baseUrl}/guias/envios-flex-mar-del-plata`,
    type: 'article',
    locale: 'es_AR',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Guía Completa Mercado Envíos Flex en Mar del Plata 2026',
  description:
    'Guía práctica y operativa para configurar y gestionar entregas en el mismo día con Mercado Envíos Flex en General Pueyrredón.',
  mainEntityOfPage: `${baseUrl}/guias/envios-flex-mar-del-plata`,
  author: {
    '@type': 'Organization',
    name: 'Envíos DosRuedas',
    url: baseUrl,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Envíos DosRuedas',
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo-envios-simplified.webp`,
    },
  },
  datePublished: '2026-01-15T09:00:00-03:00',
  dateModified: '2026-09-18T10:00:00-03:00',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Guías', item: `${baseUrl}/#servicios` },
    { '@type': 'ListItem', position: 3, name: 'Guía Mercado Envíos Flex MDQ', item: `${baseUrl}/guias/envios-flex-mar-del-plata` },
  ],
};

export default function GuiaEnviosFlexPage() {
  const steps = [
    {
      number: '1',
      title: 'Habilitar Flex en tu panel de Mercado Libre',
      desc: 'Ingresá a tu cuenta de vendedor en Mercado Libre, sección Configuración de Envíos y activá la opción "Mercado Envíos Flex". Vas a necesitar definir tu dirección de despacho en Mar del Plata.',
    },
    {
      number: '2',
      title: 'Definir horario de corte y capacidad diaria',
      desc: 'Recomendamos fijar el horario de corte a las 15:00 hs. Esto le permite a tus clientes comprar durante toda la mañana y primeras horas de la tarde con la promesa de recibir en el día.',
    },
    {
      number: '3',
      title: 'Coordinar con un servicio de cadetería local',
      desc: 'Al operar con Envíos DosRuedas, pasamos a recolectar los paquetes por tu local o depósito después de las 15:00 hs y los distribuimos antes de las 20:00 hs protegiendo tu termómetro verde.',
    },
    {
      number: '4',
      title: 'Escanear y entregar con remito digital',
      desc: 'Cada paquete se escanea y entrega con firma y geolocalización, garantizando que Mercado Libre registre la entrega a tiempo de forma 100% automática.',
    },
  ];

  const tips = [
    {
      title: 'Embalaje seguro y legible',
      desc: 'Imprimí la etiqueta térmica o autoadhesiva asegurando que el código QR y de barras no tenga arrugas. Protegé el contenido con sobre impermeable.',
      icon: Package,
    },
    {
      title: 'Horario de corte estricto',
      desc: 'No aceptes ventas fuera de horario sin confirmar disponibilidad. Respetar el corte de las 15:00 hs asegura que el 100% llegue antes de las 20:00 hs.',
      icon: Clock,
    },
    {
      title: 'Comunicación clara con el comprador',
      desc: 'Avisale a tus compradores que el repartidor entregará entre las 16:00 y las 20:00 hs para que haya alguien disponible en el domicilio.',
      icon: ShieldCheck,
    },
    {
      title: 'Zonas de cobertura calibradas',
      desc: 'Configurá tu mapa de entrega en base a la cobertura real de Mar del Plata: Centro, Güemes, San Juan, Chauvín, Puerto, Constitución y Mogotes.',
      icon: MapPin,
    },
  ];

  return (
    <main className="min-h-[100dvh] bg-brand-white-50 text-brand-blue-700 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative z-10 bg-brand-blue-700 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/30 text-brand-yellow-400 text-xs font-subheading uppercase tracking-widest font-bold shadow-accent-sm">
              <BookOpen className="w-3.5 h-3.5 text-brand-yellow-500" />
              <span>Guía Práctica para Vendedores MDQ 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.98]">
              CÓMO OPERAR <span className="text-brand-yellow-500">MERCADO ENVÍOS FLEX</span> EN MAR DEL PLATA
            </h1>

            <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 leading-relaxed font-light">
              Todo lo que necesitás saber para activar entregas en el mismo día, no perder ventas locales y mantener tu reputación de MercadoLíder al 100% sin complicaciones operativas.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <CTANestedPill
                href="https://wa.me/542236602699?text=Hola!%20Le%C3%AD%20la%20gu%C3%ADa%20Flex%20y%20quiero%20coordinar%20retiros%20para%20mi%20cuenta."
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="large"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Activá Flex con Nosotros
              </CTANestedPill>

              <CTANestedPill
                href="/servicios/enviosflex"
                variant="elevated"
                size="large"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Ver Servicio Flex
              </CTANestedPill>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Editorial de la Guía */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-white-50">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Introducción */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display uppercase text-brand-blue-700">
              ¿Por qué activar Flex si vendés en Mar del Plata?
            </h2>
            <p className="font-sans text-base text-brand-blue-600 leading-relaxed">
              En Mar del Plata, más del 65% de los compradores de Mercado Libre prefieren publicaciones con la insignia <strong>"Llega hoy"</strong>. Activar Envíos Flex posiciona tus publicaciones en los primeros lugares de búsqueda para usuarios ubicados en el Partido de General Pueyrredón, multiplicando tu tasa de conversión sin costos adicionales de comisión.
            </p>
          </div>

          {/* Pasos */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-display uppercase text-brand-blue-700">
              Paso a paso para configurar tu logística
            </h2>

            <div className="space-y-6">
              {steps.map((st) => (
                <div
                  key={st.number}
                  className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl"
                >
                  <div className="double-bezel-inner bg-white p-6 rounded-xl border border-brand-blue-50/50 shadow-sm flex items-start gap-5">
                    <span className="w-10 h-10 rounded-xl bg-brand-blue-700 text-brand-yellow-500 font-display text-xl flex items-center justify-center shrink-0">
                      {st.number}
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-display text-lg uppercase text-brand-blue-700">
                        {st.title}
                      </h3>
                      <p className="font-sans text-sm text-brand-blue-600 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Buenas Prácticas */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-display uppercase text-brand-blue-700">
              Claves para cuidar tu reputación (Termómetro Verde)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {tips.map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.title}
                    className="p-6 rounded-2xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-blue-700 text-brand-yellow-500 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base uppercase text-brand-blue-700">
                      {t.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-brand-blue-600 leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Box de Solución DosRuedas */}
          <div className="p-8 rounded-2xl bg-brand-blue-700 text-white space-y-6">
            <div className="flex items-center gap-2 text-brand-yellow-500 text-xs font-subheading uppercase font-bold tracking-wider">
              <Truck className="w-4 h-4" />
              <span>Tu aliado logístico en Mar del Plata</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight leading-snug">
              DEJÁ LA LOGÍSTICA EN NUESTRAS MANOS Y DEDICATE A VENDER
            </h3>
            <p className="font-sans text-sm sm:text-base text-brand-blue-50/90 leading-relaxed">
              En Envíos DosRuedas contamos con más de 7 años de experiencia y flota propia en las calles de MDQ. Retiramos tus paquetes puntualmente y garantizamos el 100% de entregas en el día.
            </p>
            <div className="pt-2">
              <CTANestedPill
                href="https://wa.me/542236602699?text=Hola!%20Quiero%20activar%20repartos%20Flex%20con%20Env%C3%ADos%20DosRuedas."
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="large"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Consultar por WhatsApp
              </CTANestedPill>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
