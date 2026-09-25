import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Users, HelpCircle, MessageSquare, ArrowRight, ShieldCheck, MapPin, Clock, Truck } from 'lucide-react';
import CTANestedPill from '@/src/components/ui/CTANestedPill';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';

export const metadata: Metadata = {
  title: 'Sobre Nosotros, FAQs y Redes | Envíos DosRuedas Mar del Plata',
  description: 'Conocé al equipo de Envíos DosRuedas: cadetería y mensajería en moto en Mar del Plata. Flota propia, base física en Friuli 1972 Chauvín y más de 7 años de trayectoria. Respuestas a FAQs y canales de contacto directo.',
  keywords: [
    'envíos dosruedas nosotros',
    'cadetería mar del plata historia',
    'quiénes somos envíos dosruedas',
    'base física friuli 1972 chauvín',
    'mensajería en moto mar del plata equipo',
    'faq cadetería mar del plata',
  ],
  openGraph: {
    title: 'Sobre Nosotros, FAQs y Redes | Envíos DosRuedas MDQ',
    description: 'Flota propia, base física en Friuli 1972 y el compromiso de conectar cada barrio de Mar del Plata.',
    url: 'https://enviosdosruedas.com.ar/nosotros',
    type: 'website',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Sobre Nosotros | Envíos DosRuedas',
  description: 'Empresa de mensajería urbana y distribución en moto en Mar del Plata.',
  url: 'https://enviosdosruedas.com.ar/nosotros',
  mainEntity: {
    '@type': 'Organization',
    name: 'Envíos DosRuedas',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Friuli 1972',
      addressLocality: 'Mar del Plata',
      addressRegion: 'Buenos Aires',
      addressCountry: 'AR',
    },
    telephone: '+542236602699',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://enviosdosruedas.com.ar' },
    { '@type': 'ListItem', position: 2, name: 'Nosotros', item: 'https://enviosdosruedas.com.ar/nosotros' },
  ],
};

const sections = [
  {
    id: 'sobre-nosotros',
    label: 'SOBRE NOSOTROS',
    title: 'Nuestra Historia y Compromiso',
    description: 'Conocé quiénes estamos detrás de Envíos DosRuedas en Mar del Plata. Flota propia, base física en Friuli 1972 y compromiso real con cada entrega.',
    icon: Users,
    href: '/nosotros/sobre-nosotros',
    cta: 'Conocé nuestra historia',
  },
  {
    id: 'preguntas-frecuentes',
    label: 'PREGUNTAS FRECUENTES',
    title: 'Respuestas Rápidas a tus Dudas',
    description: 'Todo sobre servicios, tiempos, tarifas, cobertura, pagos y cómo operamos. Más de 20 preguntas respondidas por categoría.',
    icon: HelpCircle,
    href: '/nosotros/preguntas-frecuentes',
    cta: 'Ver todas las FAQs',
  },
  {
    id: 'nuestras-redes',
    label: 'NUESTRAS REDES',
    title: 'Seguinos y Contactanos',
    description: 'WhatsApp directo, Instagram, Facebook. Atención personalizada sin bots. Cotizá, consultá y coordiná al instante.',
    icon: MessageSquare,
    href: '/nosotros/nuestras-redes',
    cta: 'Ver redes y contacto',
  },
];

const values = [
  { icon: ShieldCheck, title: 'Flota Propia', desc: 'Cadetes de confianza, no apps ni intermediarios. Cada envío lo cuida alguien que conocemos.' },
  { icon: MapPin, title: 'Base Física', desc: 'Friuli 1972, Barrio Chauvín. Operamos desde un punto real, no virtual.' },
  { icon: Clock, title: 'Transparencia Total', desc: 'Tarifas publicadas 2026, sin costos ocultos. "Preferimos decir que no podemos, a fallar".' },
  { icon: Truck, title: 'Cobertura Real', desc: 'Todo Mar del Plata + 20 km (Batán, Sierra de los Padres). Llegamos donde otros no.' },
];

export default function NosotrosPage() {
  return (
    <main className="min-h-dvh bg-[#F8FAFC] text-[#0950F6] relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-[#0950F6] text-white pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden border-b border-white/10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0950F6] text-[#FFEC01] border border-[#FFEC01]/40 font-subheading text-xs uppercase font-bold tracking-wider mb-4 shadow-glow-yellow transform -rotate-1">
              <Users className="w-3.5 h-3.5 text-[#FFEC01]" />
              <span>EQUIPO · TRAYECTORIA · VALORES · MDQ 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white leading-none">
              CONOCÉ A <span className="inline-block bg-[#FFEC01] text-[#0950F6] px-3 py-1 rounded-lg transform -rotate-1 shadow-glow-yellow mx-1">ENVÍOS DOSRUEDAS</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 font-sans leading-relaxed font-light max-w-2xl">
              Somos la solución logística y última milla de mayor confianza en Mar del Plata.
              Flota propia, base operativa en Friuli 1972 y más de 7 años recorriendo cada barrio de la ciudad.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CTANestedPill href="/nosotros/sobre-nosotros" variant="primary">
                Nuestra Historia
              </CTANestedPill>
              <CTANestedPill href="/nosotros/preguntas-frecuentes" variant="outline">
                Preguntas Frecuentes
              </CTANestedPill>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#0950F6]">
            LO QUE NOS DIFERENCIA
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#0950F6]/80 mt-2">
            No somos una app. Somos vecinos que entregan con responsabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <DoubleBezelCard key={value.title}>
              <div className="w-12 h-12 rounded-xl bg-[#E6EEFE] text-[#0950F6] flex items-center justify-center font-bold mb-4">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="font-subheading text-lg uppercase font-bold text-[#0950F6] mb-2">
                {value.title}
              </h3>
              <p className="font-sans text-sm text-[#0950F6]/80 leading-relaxed">
                {value.desc}
              </p>
            </DoubleBezelCard>
          ))}
        </div>
      </section>

      {/* Sections Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#0950F6]">
            EXPLORÁ NUESTRAS PÁGINAS
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#0950F6]/80 mt-2">
            Profundizá en lo que te interese: nuestra historia, respuestas a tus dudas o contactanos directo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <DoubleBezelCard key={section.id}>
                <div className="space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0950F6] text-[#FFEC01] flex items-center justify-center shrink-0 border border-[#0950F6] shadow-sm">
                      <Icon className="w-6 h-6 shrink-0" />
                    </div>
                    <div>
                      <span className="text-xs font-subheading tracking-wider uppercase text-[#0950F6] font-bold">
                        {section.label}
                      </span>
                      <h3 className="text-xl font-display uppercase tracking-wider mt-1 leading-tight text-[#0950F6] font-bold min-h-14">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#0950F6]/80 font-sans leading-relaxed">
                      {section.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#D6E4FE]">
                    <CTANestedPill
                      href={section.href}
                      variant="primary"
                      className="w-full justify-center"
                    >
                      {section.cta}
                    </CTANestedPill>
                  </div>
                </div>
              </DoubleBezelCard>
            );
          })}
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <DoubleBezelCard>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-xl bg-[#FFEC01] text-[#0950F6] flex items-center justify-center font-bold mx-auto mb-2">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h3 className="font-subheading text-2xl sm:text-3xl uppercase font-bold text-[#0950F6]">
              ¿TENÉS DUDAS O QUERÉS EMPEZAR?
            </h3>
            <p className="font-sans text-base sm:text-lg text-[#0950F6]/80 leading-relaxed max-w-2xl mx-auto">
              Escríbinos por WhatsApp y te respondemos al instante. Sin bots, sin esperas.
              Cotizá tu envío o consultanos lo que necesites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <CTANestedPill href="https://wa.me/542236602699" variant="primary">
                Hablar por WhatsApp
              </CTANestedPill>
              <CTANestedPill href="/cotizar/express" variant="outline">
                Cotizá Ahora
              </CTANestedPill>
            </div>
          </div>
        </DoubleBezelCard>
      </section>
    </main>
  );
}