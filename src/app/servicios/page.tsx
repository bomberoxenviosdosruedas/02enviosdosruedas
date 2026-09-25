import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, Truck, Package, Warehouse, ArrowRight, MapPin, Clock, ShieldCheck, CreditCard, MessageSquare } from 'lucide-react';
import CTANestedPill from '@/src/components/ui/CTANestedPill';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Servicios - Express, LowCost, Flex y Fulfillment',
  description: 'Todos los servicios de Envíos DosRuedas en Mar del Plata: Envíos Express 60-90 min, LowCost en el día, Mercado Envíos Flex Same-Day y Depósito & Fulfillment en Friuli 1972.',
  alternates: {
    canonical: `${baseUrl}/servicios`,
  },
  openGraph: {
    title: 'Servicios | Envíos DosRuedas',
    description: 'Mensajería Express, paquetería LowCost, MercadoLibre Flex y logística e-commerce. Cobertura total Mar del Plata.',
    url: `${baseUrl}/servicios`,
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios | Envíos DosRuedas',
    description: 'Envíos Express, LowCost, Flex y Fulfillment en Mar del Plata. Tarifas 2026 publicadas.',
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@enviosdosruedas',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Servicios de Logística y Mensajería Envíos DosRuedas',
  description: 'Envíos Express, LowCost, Mercado Envíos Flex y Depósito & Fulfillment en Mar del Plata. Flota propia, base en Friuli 1972.',
  url: `${baseUrl}/servicios`,
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#localbusiness`,
    name: 'Envíos DosRuedas',
    telephone: '+54-223-660-2699',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Friuli 1972',
      addressLocality: 'Mar del Plata',
      addressRegion: 'Buenos Aires',
      postalCode: '7600',
      addressCountry: 'AR',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Mar del Plata',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Catálogo de Servicios 2026',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Envíos Express',
          description: 'Entregas prioritarias en franja de 60 a 90 min en Mar del Plata.',
          url: `${baseUrl}/servicios/envios-express`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Envíos LowCost',
          description: 'Envíos económicos con entrega garantizada en el día para PyMEs.',
          url: `${baseUrl}/servicios/envios-lowcost`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Envíos Flex (MercadoLibre)',
          description: 'Servicio adaptado a los estándares de Mercado Envíos Flex. Same-Day delivery.',
          url: `${baseUrl}/servicios/enviosflex`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Centro de Depósito y Logística',
          description: 'Almacenamiento, preparación y despacho directo en Friuli 1972.',
          url: `${baseUrl}/servicios/deposito-fulfillment`,
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${baseUrl}/servicios` },
  ],
};

const services = [
  {
    id: 'envios-express',
    label: 'ENVÍOS EXPRESS',
    title: 'Prioridad Inmediata 60-90 min',
    description: 'Mensajería en moto con franja horaria de 3 horas a elección. Ideal para trámites urgentes, repuestos, documentos y gestiones que no pueden esperar.',
    icon: Zap,
    href: '/servicios/envios-express',
    cta: 'Ver detalle y tarifas',
    price: 'Desde $3.700',
    features: [
      'Franja de 3 hs (ej. 10 a 13 hs)',
      'Corte 15:00 hs con 2h anticipación',
      'Hasta 5 kg / 40x30 cm',
      'Ruteo directo sin escalas',
      'Confirmación al instante por WhatsApp',
    ],
    bgColor: 'bg-brand-blue-700',
    borderColor: 'border-brand-blue-800',
    highlightColor: 'text-brand-yellow-500',
    badge: 'PRIORIDAD 1',
    color: 'text-white',
  },
  {
    id: 'envios-lowcost',
    label: 'ENVÍOS LOWCOST',
    title: 'Máxima Rentabilidad en el Día',
    description: 'Paquetería e-commerce y cadetería programada. Pedidos antes de 13:00 hs se entregan antes de 19:00 hs. Ruteo optimizado para bajar costos.',
    icon: Truck,
    href: '/servicios/envios-lowcost',
    cta: 'Ver detalle y tarifas',
    price: 'Desde $3.000',
    features: [
      'Entrega garantizada antes de 19:00 hs',
      'Corte 13:00 hs mismo día',
      'Sin elección de franja horaria',
      'Ruteo masivo consolidado',
      'Ideal para volúmenes recurrentes',
    ],
    bgColor: 'bg-brand-blue-900',
    borderColor: 'border-brand-blue-800',
    highlightColor: 'text-brand-yellow-500',
    badge: 'MÁS ECONÓMICO',
    color: 'text-white',
  },
  {
    id: 'enviosflex',
    label: 'MERCADO ENVÍOS FLEX',
    title: 'Same-Day para MercadoLíderes',
    description: 'Logística adaptada a estándares Flex. Corte 15:00 hs, entregas antes de 20:00 hs, múltiples retiros diarios. Protegé tu reputación y calificaciones.',
    icon: Package,
    href: '/servicios/enviosflex',
    cta: 'Ver planes Flex',
    price: 'Desde $3.000/envío',
    features: [
      '100% entregas Same-Day < 20:00 hs',
      'Sin mínimos: retiramos desde 1 paquete',
      'Múltiples retiros diarios',
      'Segunda visita bonificada',
      'Niveles Pro/Elite con tarifas planas',
    ],
    bgColor: 'bg-brand-blue-500',
    borderColor: 'border-brand-blue-600',
    highlightColor: 'text-brand-yellow-500',
    badge: 'MERCADOLIBRE',
    color: 'text-white',
  },
  {
    id: 'deposito-fulfillment',
    label: 'DEPÓSITO & FULFILLMENT',
    title: 'Logística 3PL Integral en Friuli 1972',
    description: 'Almacenamiento, picking QR, empaquetado y despacho Same-Day o Next-Day. Opción DropOFF con 20% OFF. Contrareembolso sin cargo extra.',
    icon: Warehouse,
    href: '/servicios/deposito-fulfillment',
    cta: 'Ver planes 3PL',
    price: 'Desde $3.800/envío',
    features: [
      'Stock en Friuli 1972 con picking QR',
      'E-Commerce Same Day (fijo toda la ciudad)',
      'E-Commerce Next Day 24hs',
      'DropOFF: traé tus paquetes -20%',
      'Contrareembolso sin comisión',
    ],
    bgColor: 'bg-brand-blue-500',
    borderColor: 'border-brand-blue-600',
    highlightColor: 'text-brand-yellow-500',
    badge: 'E-COMMERCE 3PL',
    color: 'text-white',
  },
];

const comparisonTable = [
  { feature: 'Tiempo de entrega', express: '60-90 min (franja 3 hs)', lowcost: 'Antes de 19:00 hs', flex: 'Antes de 20:00 hs', fulfillment: 'Same-Day / 24hs' },
  { feature: 'Horario de corte', express: '15:00 hs (2h ant.)', lowcost: '13:00 hs', flex: '15:00 hs', fulfillment: 'Según modalidad' },
  { feature: 'Elección de franja', express: 'Sí (3 hs)', lowcost: 'No', flex: 'No (estándar ML)', fulfillment: 'Según modalidad' },
  { feature: 'Precio base 0-3 km', express: '$3.700', lowcost: '$3.000', flex: '$3.000 (Nivel 1)', fulfillment: '$6.000 (Same Day)' },
  { feature: 'Ideal para', express: 'Urgencias, trámites, repuestos', lowcost: 'E-commerce, PyMEs, volúmenes', flex: 'Vendedores MercadoLibre', fulfillment: 'Marcas con stock propio' },
];

export default function ServiciosPage() {
  return (
    <main className="min-h-dvh bg-brand-white-50 text-brand-blue-700 relative overflow-hidden">
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
          <div className="absolute inset-0 bg-[radial-gradient(#FFEC01_1px,transparent_1px)] bg-size-[16px_16px]" />
        </div>
        <div className="absolute -top-32 -left-32 w-125 h-125 rounded-full pointer-events-none bg-brand-yellow-500/10 blur-[120px]" />
        <div className="absolute top-1/4 -right-32 w-150 h-150 rounded-full pointer-events-none bg-brand-blue-500/10 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow-500 text-brand-blue-900 font-subheading text-xs uppercase font-bold tracking-wider mb-4">
              <Package className="w-3.5 h-3.5" />
              <span>CUATRO SOLUCIONES · UNA FLOTA · MDQ 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white leading-none">
              NUESTROS <span className="text-brand-yellow-500">SERVICIOS</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-brand-blue-50/90 font-sans leading-relaxed font-light max-w-2xl">
              Cobertura total en Mar del Plata y Partido de General Pueyrredón.
              Tarifas transparentes 2026. Flota propia, base en Friuli 1972.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CTANestedPill href="/cotizar/express" variant="primary" size="large">
                Cotizá Express
              </CTANestedPill>
              <CTANestedPill href="/cotizar/lowcost" variant="elevated" size="large">
                Cotizá LowCost
              </CTANestedPill>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={service.href}
                className={`group relative ${service.bgColor} ${service.borderColor} p-3 rounded-[28px] shadow-float hover:shadow-antigravity-deep transition-all duration-300 flex flex-col ${service.color}`}
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[20px] shadow-sm flex flex-col justify-between h-full relative overflow-hidden">
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="-rotate-1 absolute -top-3.5 left-6 bg-brand-yellow-500 text-brand-blue-900 font-bold font-subheading text-xs tracking-wider px-3 py-1 rounded-full shadow-glow-yellow">
                        {service.badge}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center shrink-0 border border-brand-blue-500 shadow-sm group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-900 transition-colors duration-200">
                        <Icon className="w-6 h-6 shrink-0" />
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-subheading tracking-wider uppercase text-brand-yellow-500 font-bold">
                        {service.label}
                      </span>
                      <h3 className="text-xl font-display uppercase tracking-wider mt-1 leading-tight font-bold min-h-12">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm opacity-90 leading-relaxed font-sans">
                      {service.description}
                    </p>

                    <div className="flex items-baseline gap-2 pt-2 border-t border-white/20">
                      <span className="text-2xl font-mono tabular-nums font-bold">{service.price}</span>
                      <span className="text-xs font-subheading tracking-wider uppercase opacity-70">/ envío base</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20 relative z-10 space-y-3">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs opacity-90">
                          <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-brand-yellow-500" />
                          <span className="font-sans">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <CTANestedPill
                      href={service.href}
                      variant="outline"
                      size="default"
                      className="w-full justify-center"
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4" />
                    </CTANestedPill>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-brand-blue-900">
            COMPARATIVA RÁPIDA
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-ink/80 mt-2">
            Elegí el servicio que mejor se adapte a tu necesidad operativa y presupuesto.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-brand-blue-100 bg-white shadow-sm">
          <table className="w-full font-sans text-sm">
            <thead>
              <tr className="bg-brand-blue-700 text-white">
                <th className="p-4 text-left font-subheading uppercase tracking-wider">CARACTERÍSTICA</th>
                <th className="p-4 text-center font-subheading uppercase tracking-wider">EXPRESS</th>
                <th className="p-4 text-center font-subheading uppercase tracking-wider">LOWCOST</th>
                <th className="p-4 text-center font-subheading uppercase tracking-wider">FLEX</th>
                <th className="p-4 text-center font-subheading uppercase tracking-wider">FULFILLMENT</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, idx) => (
                <tr key={row.feature} className={idx % 2 === 0 ? 'bg-brand-blue-50/50' : 'bg-white'}>
                  <td className="p-4 font-medium text-brand-blue-900 border-t border-brand-blue-100">{row.feature}</td>
                  <td className="p-4 text-center text-brand-ink/80 border-t border-brand-blue-100 font-mono">{row.express}</td>
                  <td className="p-4 text-center text-brand-ink/80 border-t border-brand-blue-100 font-mono">{row.lowcost}</td>
                  <td className="p-4 text-center text-brand-ink/80 border-t border-brand-blue-100 font-mono">{row.flex}</td>
                  <td className="p-4 text-center text-brand-ink/80 border-t border-brand-blue-100 font-mono">{row.fulfillment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <p className="font-sans text-xs text-brand-ink/60">
            * Tarifas vigentes 2026. Precios base 0-3 km. Consultá cobertura completa en
            <Link href="/cobertura" className="underline hover:text-brand-blue-700 font-medium">/cobertura</Link>
          </p>
        </div>
      </section>

      {/* Additional Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-brand-blue-900">
            SERVICIOS COMPLEMENTARIOS
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-ink/80 mt-2">
            Soluciones específicas para necesidades comerciales avanzadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/servicios/envios-contrareembolso"
            className="bg-white p-6 rounded-2xl border border-brand-blue-100 shadow-sm hover:shadow-md hover:border-brand-blue-300 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center shrink-0 border border-brand-blue-200">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-subheading text-xl uppercase font-bold text-brand-blue-900 mb-1">
                  Envíos Contrareembolso
                </h3>
                <p className="font-sans text-sm text-brand-ink/80 leading-relaxed mb-3">
                  Cobro en efectivo en mano al destinatario. Sin comisión extra. Rinde de dinero en el día.
                </p>
                <CTANestedPill variant="outline" size="compact" href="/servicios/envios-contrareembolso">
                  Ver detalle
                  <ArrowRight className="w-3.5 h-3.5" />
                </CTANestedPill>
              </div>
            </div>
          </Link>

          <Link
            href="/servicios/empresas-cuenta-corriente"
            className="bg-white p-6 rounded-2xl border border-brand-blue-100 shadow-sm hover:shadow-md hover:border-brand-blue-300 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center shrink-0 border border-brand-blue-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-subheading text-xl uppercase font-bold text-brand-blue-900 mb-1">
                  Empresas Cuenta Corriente
                </h3>
                <p className="font-sans text-sm text-brand-ink/80 leading-relaxed mb-3">
                  Liquidación quincenal unificada, tarifas bonificadas por volumen y atención preferencial.
                </p>
                <CTANestedPill variant="outline" size="compact" href="/servicios/empresas-cuenta-corriente">
                  Ver detalle
                  <ArrowRight className="w-3.5 h-3.5" />
                </CTANestedPill>
              </div>
            </div>
          </Link>
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
              ¿CUÁL ES EL SERVICIO IDEAL PARA VOS?
            </h3>
            <p className="font-sans text-base sm:text-lg text-brand-ink/80 leading-relaxed max-w-2xl mx-auto mb-6">
              Te asesoramos sin compromiso. Contanos qué necesitás y te recomendamos la mejor opción.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTANestedPill href="https://wa.me/542236602699" variant="primary" size="large">
                Asesorame por WhatsApp
              </CTANestedPill>
              <CTANestedPill href="/cobertura" variant="elevated" size="large">
                Ver Cobertura
              </CTANestedPill>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}