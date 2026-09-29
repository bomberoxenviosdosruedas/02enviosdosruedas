import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, Truck, Package, Building2, Clock, ShieldCheck, CreditCard, MessageSquare, Store, Shield, RotateCcw } from 'lucide-react';
import CTANestedPill from '@/components/ui/CTANestedPill';
import { SAME_DAY_FIXED_PRICE } from '@/lib/promises';

const baseUrl = 'https://www.enviosdosruedas.com';

const SAME_DAY_PRICE = `$${SAME_DAY_FIXED_PRICE.toLocaleString('es-AR')}`;

export const metadata: Metadata = {
  title: 'Servicios - Express, LowCost, Flex, Cuenta Corriente y E-commerce 24hs/Same-Day',
  description: 'Servicios de Envíos DosRuedas en Mar del Plata: Envíos Express (franja 3hs), LowCost (día), Mercado Envíos Flex, Cuenta Corriente Flexible, E-commerce 24hs y Same-Day con stock en depósito.',
  alternates: {
    canonical: `${baseUrl}/servicios`,
  },
  openGraph: {
    title: 'Servicios | Envíos DosRuedas',
    description: 'Mensajería Express, paquetería LowCost, MercadoLibre Flex, Cuenta Corriente y logística e-commerce 24hs/Same-Day en Mar del Plata.',
    url: `${baseUrl}/servicios`,
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios | Envíos DosRuedas',
    description: 'Envíos Express, LowCost, Flex, Cuenta Corriente y E-commerce 24hs/Same-Day en Mar del Plata. Tarifas 2026 publicadas.',
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@enviosdosruedas',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Servicios de Logística y Mensajería Envíos DosRuedas',
  description: 'Envíos Express, LowCost, Mercado Envíos Flex, Cuenta Corriente Flexible, E-commerce 24hs y Same-Day con stock en depósito. Flota propia, base en Friuli 1972.',
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
          description: 'Entregas prioritarias en franja horaria de 3 hs a elección en Mar del Plata.',
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
          name: 'Cuenta Corriente Flexible',
          description: 'Para emprendedores y comercios sin volumen fijo: tarifas LowCost, franjas de 3 hs y pagos agrupados semanales, quincenales o mensuales.',
          url: `${baseUrl}/servicios/empresas-cuenta-corriente`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-Commerce 24hs (Next Day)',
          description: 'Se retira hoy y se entrega al día hábil siguiente. Recolección gratis desde 10 envíos.',
          url: `${baseUrl}/servicios/deposito-fulfillment`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-Commerce Same-Day (con stock en depósito)',
          description: 'Stock en nuestro depósito de Friuli 1972: las ventas hasta las 15:00 hs se entregan en el día, con tarifa fija a toda la ciudad.',
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
    title: 'Franja Horaria a Elección',
    description: 'Mensajería en moto con franja horaria de 3 horas a elección. Ideal para trámites urgentes, repuestos, documentos y gestiones que no pueden esperar.',
    icon: Zap,
    href: '/servicios/envios-express',
    cta: 'Ver detalle y tarifas',
    price: 'Desde $3.700',
    priceNote: '/ envío base',
    features: [
      'Franja de 3 hs (ej. 10 a 13 hs)',
      'Corte 15:00 hs con 2h anticipación',
      'Hasta 5 kg / 40 x 40 cm',
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
    description: 'Reparto económico programado en el día, sin elección de horario. Pedidos antes de 13:00 hs se entregan antes de 19:00 hs, para e-commerce y comercio local.',
    icon: Truck,
    href: '/servicios/envios-lowcost',
    cta: 'Ver detalle y tarifas',
    price: 'Desde $3.000',
    priceNote: '/ envío base',
    features: [
      'Entrega antes de 19:00 hs',
      'Corte 13:00 hs mismo día',
      'Sin elección de franja horaria',
      'Hasta 5 kg / 40 x 40 cm',
      'Ideal para envíos esporádicos',
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
    price: 'Desde $3.000',
    priceNote: '/ envío base',
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
    id: 'cuenta-corriente-flexible',
    label: 'CUENTA CORRIENTE FLEXIBLE',
    title: 'Tu Equipo de Entregas sin Volumen Fijo',
    description: 'Para emprendedores y comercios cuya cantidad de pedidos cambia cada día. Tarifas LowCost con franjas de 3 hs como en Express, y pagos agrupados.',
    icon: Building2,
    href: '/servicios/empresas-cuenta-corriente',
    cta: 'Ver condiciones',
    price: 'Tarifas LowCost',
    priceNote: '',
    features: [
      'Sin mínimo de envíos',
      'Franja de 3 hs, corte 15:00 hs',
      'Paga quien envía o quien recibe',
      'Pagos semanales, quincenales o mensuales',
      'Contrareembolso sin comisión',
    ],
    bgColor: 'bg-brand-blue-700',
    borderColor: 'border-brand-blue-800',
    highlightColor: 'text-brand-yellow-500',
    badge: 'EMPRESAS',
    color: 'text-white',
  },
  {
    id: 'ecommerce-24hs',
    label: 'E-COMMERCE 24HS',
    title: 'Se Retira Hoy, Se Entrega Mañana',
    description: 'Retiramos tus envíos hoy y los entregamos el día hábil siguiente en todo Mar del Plata. La recolección es gratis desde 10 envíos.',
    icon: RotateCcw,
    href: '/servicios/deposito-fulfillment',
    cta: 'Ver planes 24hs',
    price: '$3.800',
    priceNote: 'por envío',
    features: [
      'Entrega al día hábil siguiente',
      'Recolección gratis desde 10 envíos',
      'DropOFF en Friuli 1972: -20%',
      'Hasta 5 kg / 40 x 40 cm',
      'Contrareembolso sin comisión',
    ],
    bgColor: 'bg-brand-blue-500',
    borderColor: 'border-brand-blue-600',
    highlightColor: 'text-brand-yellow-500',
    badge: 'E-COMMERCE 24HS',
    color: 'text-white',
  },
  {
    id: 'ecommerce-sameday',
    label: 'E-COMMERCE SAME-DAY',
    title: 'Entrega en el Día · Stock en Friuli 1972',
    description: 'Dejás stock en nuestro depósito y nos ocupamos del picking, el empaque y la entrega. Las ventas hasta las 15:00 hs se entregan en el día.',
    icon: Store,
    href: '/servicios/deposito-fulfillment',
    cta: 'Ver planes Same-Day',
    price: SAME_DAY_PRICE,
    priceNote: 'fijo a toda la ciudad',
    features: [
      'Stock en Friuli 1972 con picking QR',
      'Corte 15:00 hs, entrega antes de 20:00 hs',
      'Rango horario a coordinar',
      'Tarifa fija a toda la ciudad',
      'Productos chicos y medianos',
    ],
    bgColor: 'bg-brand-blue-900',
    borderColor: 'border-brand-blue-800',
    highlightColor: 'text-brand-yellow-500',
    badge: 'E-COMMERCE SAME-DAY',
    color: 'text-white',
  },
];

const comparisonTable = [
  { feature: 'Tiempo de entrega', express: 'Franja de 3 hs', lowcost: 'Antes de 19:00 hs', flex: 'Antes de 20:00 hs', cuentaCorriente: 'Franja de 3 hs', ecom24: 'Día hábil siguiente', ecomSameDay: 'Antes de 20:00 hs' },
  { feature: 'Horario de corte', express: '15:00 hs (2h ant.)', lowcost: '13:00 hs', flex: '15:00 hs', cuentaCorriente: '15:00 hs (2h ant.)', ecom24: 'Retiro en el día', ecomSameDay: '15:00 hs' },
  { feature: 'Elección de franja', express: 'Sí (3 hs)', lowcost: 'No', flex: 'No (estándar ML)', cuentaCorriente: 'Sí (3 hs)', ecom24: 'No', ecomSameDay: 'A coordinar' },
  { feature: 'Precio', express: '$3.700 (0-3 km)', lowcost: '$3.000 (0-3 km)', flex: '$3.000 (Nivel 1)', cuentaCorriente: 'Tarifa LowCost', ecom24: '$3.800 por envío', ecomSameDay: `${SAME_DAY_PRICE} fijo` },
  { feature: 'Ideal para', express: 'Urgencias, trámites, repuestos', lowcost: 'Emprendedores, envíos esporádicos', flex: 'Vendedores MercadoLibre', cuentaCorriente: 'Comercios con pedidos diarios', ecom24: 'Tiendas online sin apuro', ecomSameDay: 'Marcas con stock en depósito' },
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
              <span>SEIS SOLUCIONES · UNA FLOTA · MDQ 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white leading-none">
              NUESTROS <span className="text-brand-yellow-500">SERVICIOS</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-brand-blue-50 font-sans leading-relaxed font-light max-w-2xl">
              Llegamos a todo Mar del Plata.
              Tarifas transparentes 2026. Flota propia, base en Friuli 1972.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CTANestedPill href="/cotizar" variant="primary" size="large">
                Cotizá tu envío
              </CTANestedPill>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - 6 cards: 3 cols on lg for 6 items = 2 rows */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                id={service.id}
                href={service.href}
                className={`group relative scroll-mt-28 ${service.bgColor} ${service.borderColor} p-3 rounded-[28px] shadow-float hover:shadow-antigravity-deep transition-all duration-300 flex flex-col ${service.color}`}
              >
                <div className="border border-white/20 p-2 rounded-[20px] shadow-sm flex flex-col justify-between h-full relative overflow-hidden">
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

                    <p className="text-sm leading-relaxed font-sans">
                      {service.description}
                    </p>

                    <div className="flex items-baseline gap-2 pt-2 border-t border-white/20">
                      <span className="text-2xl font-mono tabular-nums font-bold">{service.price}</span>
                      {service.priceNote && (
                        <span className="text-xs font-subheading tracking-wider uppercase text-brand-blue-50">{service.priceNote}</span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20 relative z-10 space-y-3">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs">
                          <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-brand-yellow-500" />
                          <span className="font-sans">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <CTANestedPill
                      href={service.href}
                      variant="elevated"
                      size="default"
                      className="w-full justify-center"
                    >
                      {service.cta}
                    </CTANestedPill>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Comparison Table - 7 columns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-brand-blue-900">
            COMPARATIVA RÁPIDA
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-ink mt-2">
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
                <th className="p-4 text-center font-subheading uppercase tracking-wider">CTA FLEXIBLE</th>
                <th className="p-4 text-center font-subheading uppercase tracking-wider">E-COM 24HS</th>
                <th className="p-4 text-center font-subheading uppercase tracking-wider">E-COM SAME-DAY</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, idx) => (
                <tr key={row.feature} className={idx % 2 === 0 ? 'bg-brand-blue-50/50' : 'bg-white'}>
                  <td className="p-4 font-medium text-brand-blue-900 border-t border-brand-blue-100">{row.feature}</td>
                  <td className="p-4 text-center text-brand-ink border-t border-brand-blue-100 font-mono">{row.express}</td>
                  <td className="p-4 text-center text-brand-ink border-t border-brand-blue-100 font-mono">{row.lowcost}</td>
                  <td className="p-4 text-center text-brand-ink border-t border-brand-blue-100 font-mono">{row.flex}</td>
                  <td className="p-4 text-center text-brand-ink border-t border-brand-blue-100 font-mono">{row.cuentaCorriente}</td>
                  <td className="p-4 text-center text-brand-ink border-t border-brand-blue-100 font-mono">{row.ecom24}</td>
                  <td className="p-4 text-center text-brand-ink border-t border-brand-blue-100 font-mono">{row.ecomSameDay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <p className="font-sans text-xs text-brand-ink">
            * Tarifas vigentes 2026. Precios base 0-3 km. Consultá cobertura completa en
            <Link href="/cobertura" className="underline hover:text-brand-blue-700 font-medium">/cobertura</Link>
          </p>
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
            <p className="font-sans text-base sm:text-lg text-brand-ink leading-relaxed max-w-2xl mx-auto mb-6">
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