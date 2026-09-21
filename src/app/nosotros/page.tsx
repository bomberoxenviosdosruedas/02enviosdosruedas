import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Users, HelpCircle, MessageSquare, ArrowRight, ShieldCheck, MapPin, Clock, Truck } from 'lucide-react';
import CTANestedPill from '@/src/components/ui/CTANestedPill';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Nosotros - Equipo, Historia y Preguntas Frecuentes',
  description: 'Conocé a Envíos DosRuedas: más de 7 años de trayectoria en logística urbana y última milla en Mar del Plata. Equipo, valores, preguntas frecuentes y contacto directo.',
  alternates: {
    canonical: `${baseUrl}/nosotros`,
  },
  openGraph: {
    title: 'Nosotros | Envíos DosRuedas',
    description: 'Más de 7 años transformando la logística urbana en Mar del Plata con flota propia y base en Friuli 1972.',
    url: `${baseUrl}/nosotros`,
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nosotros | Envíos DosRuedas',
    description: 'Más de 7 años transformando la logística urbana en Mar del Plata con flota propia.',
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@enviosdosruedas',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Nosotros - Envíos DosRuedas',
  description: 'Conocé al equipo, la historia y los valores de Envíos DosRuedas. Logística urbana y última milla en Mar del Plata desde 2017.',
  url: `${baseUrl}/nosotros`,
  mainEntity: {
    '@type': 'Organization',
    '@id': `${baseUrl}#localbusiness`,
    name: 'Envíos DosRuedas',
    url: baseUrl,
    logo: `${baseUrl}/logo-envios-simplified.webp`,
    sameAs: [
      'https://www.instagram.com/enviosdosruedas',
      'https://www.facebook.com/enviosdosruedas',
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Nosotros', item: `${baseUrl}/nosotros` },
  ],
};

const sections = [
  {
    id: 'sobre-nosotros',
    label: 'SOBRE NOSOTROS',
    title: 'Historia, Valores y Trayectoria',
    description: 'Más de 7 años de experiencia en las calles de Mar del Plata. Flota propia, base física en Friuli 1972 y compromiso real con cada entrega.',
    icon: Users,
    href: '/nosotros/sobre-nosotros',
    cta: 'Conocé nuestra historia',
    bgColor: 'bg-brand-blue-700',
    borderColor: 'border-brand-blue-800',
    highlightColor: 'text-brand-yellow-500',
  },
  {
    id: 'preguntas-frecuentes',
    label: 'PREGUNTAS FRECUENTES',
    title: 'Respuestas Rápidas a tus Dudas',
    description: 'Todo sobre servicios, tiempos, tarifas, cobertura, pagos y cómo operamos. Más de 20 preguntas respondidas por categoría.',
    icon: HelpCircle,
    href: '/nosotros/preguntas-frecuentes',
    cta: 'Ver todas las FAQs',
    bgColor: 'bg-brand-blue-900',
    borderColor: 'border-brand-blue-800',
    highlightColor: 'text-brand-yellow-500',
  },
  {
    id: 'nuestras-redes',
    label: 'NUESTRAS REDES',
    title: 'Seguinos y Contactanos',
    description: 'WhatsApp directo, Instagram, Facebook. Atención personalizada sin bots. Cotizá, consultá y coordiná al instante.',
    icon: MessageSquare,
    href: '/nosotros/nuestras-redes',
    cta: 'Ver redes y contacto',
    bgColor: 'bg-brand-blue-500',
    borderColor: 'border-brand-blue-600',
    highlightColor: 'text-brand-yellow-500',
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
    <main className="min-h-[100dvh] bg-brand-white-50 text-brand-blue-700 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-brand-blue-700 text-white pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden border-b border-brand-blue-800">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#FFEC01_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none bg-brand-yellow-500/10 blur-[120px]" />
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none bg-brand-blue-500/10 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow-500 text-brand-blue-900 font-subheading text-xs uppercase font-bold tracking-wider mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>EQUIPO · TRAYECTORIA · VALORES · MDQ 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white leading-none">
              CONOCÉ A <span className="text-brand-yellow-500">ENVÍOS DOSRUEDAS</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-brand-blue-50/90 font-sans leading-relaxed font-light max-w-2xl">
              Somos la solución logística y última milla de mayor confianza en Mar del Plata.
              Flota propia, base operativa en Friuli 1972 y más de 7 años recorriendo cada barrio de la ciudad.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CTANestedPill href="/nosotros/sobre-nosotros" variant="primary" size="large">
                Nuestra Historia
              </CTANestedPill>
              <CTANestedPill href="/nosotros/preguntas-frecuentes" variant="elevated" size="large">
                Preguntas Frecuentes
              </CTANestedPill>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-brand-blue-900">
            LO QUE NOS DIFERENCIA
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-ink/80 mt-2">
            No somos una app. Somos vecinos que entregan con responsabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div key={value.title} className="bg-white p-6 rounded-2xl border border-brand-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center font-bold mb-4">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="font-subheading text-lg uppercase font-bold text-brand-blue-900 mb-2">
                {value.title}
              </h3>
              <p className="font-sans text-sm text-brand-ink/80 leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sections Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-brand-blue-900">
            EXPLORÁ NUESTRAS PÁGINAS
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-ink/80 mt-2">
            Profundizá en lo que te interese: nuestra historia, respuestas a tus dudas o contactanos directo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.id}
                href={section.href}
                className={`group relative ${section.bgColor} ${section.borderColor} p-3 rounded-[28px] shadow-float hover:shadow-antigravity-deep transition-all duration-300 flex flex-col`}
              >
                <div className="bg-white p-6 rounded-[20px] border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full relative overflow-hidden">
                  <div className="space-y-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center shrink-0 border border-brand-blue-500 shadow-sm group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-900 transition-colors duration-200">
                      <Icon className="w-6 h-6 shrink-0" />
                    </div>
                    <div>
                      <span className="text-xs font-subheading tracking-wider uppercase text-brand-blue-500 font-bold">
                        {section.label}
                      </span>
                      <h3 className="text-xl font-display uppercase tracking-wider mt-1 leading-tight text-brand-blue-900 font-bold min-h-[56px]">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-sm text-brand-ink/80 font-sans leading-relaxed">
                      {section.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-blue-100 relative z-10">
                    <CTANestedPill
                      href={section.href}
                      variant="outline"
                      size="default"
                      className="w-full justify-center"
                    >
                      {section.cta}
                      <ArrowRight className="w-4 h-4" />
                    </CTANestedPill>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-brand-blue-50/80 border border-brand-blue-100 p-3 rounded-[28px] shadow-float">
          <div className="bg-white p-6 sm:p-10 rounded-[20px] border border-brand-blue-50/50 shadow-sm text-center">
            <div className="w-16 h-16 rounded-xl bg-brand-yellow-500 text-brand-blue-900 flex items-center justify-center font-bold mx-auto mb-6">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h3 className="font-subheading text-2xl sm:text-3xl uppercase font-bold text-brand-blue-900 mb-3">
              ¿TENÉS DUDAS O QUERÉS EMPEZAR?
            </h3>
            <p className="font-sans text-base sm:text-lg text-brand-ink/80 leading-relaxed max-w-2xl mx-auto mb-6">
              Escríbinos por WhatsApp y te respondemos al instante. Sin bots, sin esperas.
              Cotizá tu envío o consultanos lo que necesites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTANestedPill href="https://wa.me/542236602699" variant="primary" size="large">
                Hablar por WhatsApp
              </CTANestedPill>
              <CTANestedPill href="/cotizar/express" variant="elevated" size="large">
                Cotizá Ahora
              </CTANestedPill>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}