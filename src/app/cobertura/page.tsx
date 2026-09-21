import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Zap, Clock, ShieldCheck, ArrowRight, CheckCircle2, Navigation, Compass } from 'lucide-react';
import CTANestedPill from '@/src/components/ui/CTANestedPill';
import CoberturaExplorer from '@/src/components/cobertura/CoberturaExplorer';
import LogisticaNetworkCanvas from '@/src/components/home/LogisticaNetworkCanvas';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Cobertura de Envíos en Mar del Plata y Zonas',
  description:
    'Zonas y radios de cobertura de mensajería y paquetería en Mar del Plata. Desde Friuli 1972 a todos los barrios: Centro, Güemes, Puerto, Mogotes, Constitución y hasta 20 km.',
  alternates: {
    canonical: `${baseUrl}/cobertura`,
  },
  openGraph: {
    title: 'Cobertura de Envíos en Mar del Plata y Zonas | Envíos DosRuedas',
    description:
      'Mapa y radios de cobertura para entregas Express y LowCost en Mar del Plata y Partido de General Pueyrredón.',
    url: `${baseUrl}/cobertura`,
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobertura de Envíos en Mar del Plata y Zonas | Envíos DosRuedas',
    description: 'Mapa y radios de cobertura para entregas Express y LowCost en Mar del Plata y Partido de General Pueyrredón.',
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@enviosdosruedas',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${baseUrl}#localbusiness`,
  name: 'Envíos DosRuedas - Cobertura Mar del Plata',
  description:
    'Mensajería, paquetería urbana y distribución e-commerce con cobertura integral en Mar del Plata y Partido de General Pueyrredón.',
  url: `${baseUrl}/cobertura`,
  telephone: '+54-223-660-2699',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Friuli 1972',
    addressLocality: 'Mar del Plata',
    addressRegion: 'Buenos Aires',
    postalCode: '7600',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -38.0175,
    longitude: -57.5683,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Partido de General Pueyrredón' },
    { '@type': 'City', name: 'Mar del Plata' },
    { '@type': 'Place', name: 'Chauvín' },
    { '@type': 'Place', name: 'Centro Mar del Plata' },
    { '@type': 'Place', name: 'Güemes' },
    { '@type': 'Place', name: 'Playa Grande' },
    { '@type': 'Place', name: 'Puerto Mar del Plata' },
    { '@type': 'Place', name: 'Punta Mogotes' },
    { '@type': 'Place', name: 'Constitución' },
    { '@type': 'Place', name: 'Batán' },
    { '@type': 'Place', name: 'Sierra de los Padres' },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Cobertura', item: `${baseUrl}/cobertura` },
  ],
};

export default function CoberturaPage() {
  return (
    <main className="min-h-[100dvh] bg-brand-white-50 text-brand-blue-700">
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
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <LogisticaNetworkCanvas />
        </div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFEC01_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow-500 text-brand-blue-900 font-subheading text-xs uppercase font-bold tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>PARTIDO DE GENERAL PUEYRREDÓN · VIGENCIA 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white leading-none">
              COBERTURA TOTAL EN <span className="text-brand-yellow-500">MAR DEL PLATA</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-brand-blue-50/90 font-sans leading-relaxed">
              Operamos con base logística central en <strong>Friuli 1972</strong>. Llegamos a todos los barrios del ejido urbano marplatense y extendemos nuestra cobertura hasta un radio de 20 km para llegar a Batán y Sierra de los Padres.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CTANestedPill href="/cotizar/express" variant="primary" size="large">
                Cotizá tu Envío Express
              </CTANestedPill>
              <CTANestedPill href="/cotizar/lowcost" variant="elevated" size="large">
                Cotizá Reparto LowCost
              </CTANestedPill>
            </div>
          </div>
        </div>
      </section>

      {/* Radios Breakdown Table - Double Bezel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-brand-blue-900">
            ESQUEMA DE RADIOS Y TARIFAS 2026
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-ink/80 mt-2">
            Tarifas transparentes calculadas según la distancia real en kilómetros desde el punto de retiro al de entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            {
              radio: 'Z1',
              km: '0 a 3 km',
              desc: 'Macrocentro, Centro, Güemes, Chauvín, San Juan, La Perla',
              express: '$3.700',
              lowCost: '$3.000',
            },
            {
              radio: 'Z2',
              km: '3 a 5 km',
              desc: 'Playa Grande, Los Troncos, Puerto, Parque Luro, Pompeya',
              express: '$4.600',
              lowCost: '$4.000',
            },
            {
              radio: 'Z3',
              km: '5 a 7 km',
              desc: 'Punta Mogotes, Caisamar, Constitución, Colinas, Las Avenidas',
              express: '$6.100',
              lowCost: '$5.300',
            },
            {
              radio: 'Z4',
              km: '7 a 10 km',
              desc: 'Faro, Alfar, Bosque Peralta Ramos, Parque Camet, Libertad',
              express: '$8.200',
              lowCost: '$7.000',
            },
            {
              radio: 'Z5',
              km: '+10 km (hasta 20 km)',
              desc: 'Acantilados, Batán, Sierra de los Padres, Camet Norte',
              express: '$1.000/km',
              lowCost: '$700/km',
              isFormula: true,
            },
          ].map((item) => (
            <div
              key={item.radio}
              className="bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl flex flex-col justify-between"
            >
              <div className="bg-white p-4 rounded-xl border border-brand-blue-50/50 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm font-bold bg-brand-blue-700 text-white px-2 py-0.5 rounded">
                      {item.radio}
                    </span>
                    <span className="font-mono text-xs font-bold text-brand-blue-600">
                      {item.km}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-brand-ink/70 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-blue-50 space-y-2 font-mono">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-sans text-brand-blue-700 font-medium">Express:</span>
                    <span className="font-bold text-brand-blue-900">{item.express}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-sans text-brand-blue-700 font-medium">LowCost:</span>
                    <span className="font-bold text-brand-blue-900">{item.lowCost}</span>
                  </div>
                  {item.isFormula && (
                    <p className="text-[10px] text-brand-blue-500 font-sans italic pt-1">
                      * Aplica Math.ceil(km) x valor por km
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Neighborhood Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="font-display text-2xl sm:text-3xl uppercase text-brand-blue-900">
            BUSCADOR DE BARRIOS Y ZONAS
          </h2>
          <p className="font-sans text-sm text-brand-ink/80 mt-1">
            Encontrá tu barrio en Mar del Plata y visualizá el radio y la tarifa estimada de forma inmediata.
          </p>
        </div>
        <CoberturaExplorer />
      </section>

      {/* Operating Base and Guarantees */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-brand-blue-50/80 border border-brand-blue-100 p-3 rounded-3xl">
          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-brand-blue-50/50 shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow-500 text-brand-blue-900 flex items-center justify-center font-bold">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-subheading text-xl uppercase font-bold text-brand-blue-900">
                BASE OPERATIVA CENTRAL
              </h3>
              <p className="font-sans text-sm text-brand-ink/80 leading-relaxed">
                Nuestra base física está ubicada en <strong>Friuli 1972, Barrio Chauvín</strong>. Esta posición estratégica en el corazón de Mar del Plata nos permite despachar a cualquier punto de la ciudad en minutos.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-blue-700 text-brand-yellow-500 flex items-center justify-center font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-subheading text-xl uppercase font-bold text-brand-blue-900">
                SERVICIO EXPRESS (60 A 90 MIN)
              </h3>
              <p className="font-sans text-sm text-brand-ink/80 leading-relaxed">
                Prioridad operativa directa con franja horaria de entrega a elección (ej. 10 a 13 hs). Solicitá antes de las 15:00 hs con 2 horas de anticipación.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-subheading text-xl uppercase font-bold text-brand-blue-900">
                REPARTO LOWCOST EN EL DÍA
              </h3>
              <p className="font-sans text-sm text-brand-ink/80 leading-relaxed">
                Entregas en el transcurso de la jornada antes de las 19:00 hs para compras online y comercios. Solicitá antes de las 13:00 hs con la tarifa más conveniente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
