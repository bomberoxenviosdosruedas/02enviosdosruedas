import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Zap, Clock, ShieldCheck, ArrowRight, CheckCircle2, Navigation, Compass } from 'lucide-react';
import CTANestedPill from '@/src/components/ui/CTANestedPill';
import CoberturaExplorer from '@/src/components/cobertura/CoberturaExplorer';
import LogisticaNetworkCanvas from '@/src/components/home/LogisticaNetworkCanvas';
import {
  EXPRESS_PRICE_PER_KM,
  EXPRESS_TIERS,
  LOW_COST_PRICE_PER_KM,
  LOW_COST_TIERS,
} from '@/src/lib/pricing';
import { CONSULT_THRESHOLD_KM } from '@/src/lib/promises';

const baseUrl = 'https://www.enviosdosruedas.com';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

/**
 * Nombres de barrios por zona. Contenido editorial: NO contiene precios.
 * Los importes salen de `pricing.ts` (fuente única) — nunca escribirlos a mano,
 * o quedan desincronizados de `PriceRange` en BD.
 */
const ZONE_BARRIOS: readonly string[] = [
  'Macrocentro, Centro, Güemes, Chauvín, San Juan, La Perla',
  'Playa Grande, Los Troncos, Puerto, Parque Luro, Pompeya',
  'Punta Mogotes, Caisamar, Constitución, Colinas, Las Avenidas',
  'Faro, Alfar, Bosque Peralta Ramos, Parque Camet, Libertad',
  'Acantilados, Batán, Sierra de los Padres, Camet Norte',
];

/**
 * Filas de la tabla de radios. Los tramos fijos se toman de los `*_TIERS`;
 * la última fila es el tramo por km, que aplica a partir del último tier
 * y hasta `CONSULT_THRESHOLD_KM`.
 */
const ZONE_ROWS = ZONE_BARRIOS.map((barrios, i) => {
  const express = EXPRESS_TIERS[i];
  const lowCost = LOW_COST_TIERS[i];

  if (express && lowCost) {
    return {
      zona: `Z${i + 1}`,
      km: `${express.minKm} a ${express.maxKm} km`,
      barrios,
      express: formatArs(express.price),
      lowCost: formatArs(lowCost.price),
      isFormula: false,
    };
  }

  const lastTier = EXPRESS_TIERS[EXPRESS_TIERS.length - 1];
  return {
    zona: `Z${i + 1}`,
    km: `+${lastTier.maxKm} km (hasta ${CONSULT_THRESHOLD_KM} km)`,
    barrios,
    express: `${formatArs(EXPRESS_PRICE_PER_KM)}/km`,
    lowCost: `${formatArs(LOW_COST_PRICE_PER_KM)}/km`,
    isFormula: true,
  };
});

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
    <main className="min-h-dvh bg-brand-white-50 text-brand-blue-700">
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
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFEC01_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow-500 text-brand-blue-900 font-subheading text-xs uppercase tracking-wider mb-4">
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
              <CTANestedPill href="/cotizar" variant="primary" size="large">
                Cotizá tu envío
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
          <p className="font-sans text-sm sm:text-base text-brand-ink mt-2">
            Tarifas transparentes calculadas según la distancia real en kilómetros desde el punto de retiro al de entrega.
          </p>
        </div>

        <div className="bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-sm">
          <div className="bg-white rounded-xl border border-brand-blue-50/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">
                  Tarifas Express y LowCost por zona de cobertura en Mar del Plata, 2026.
                </caption>
                <thead>
                  <tr className="border-b border-brand-blue-100">
                    <th
                      scope="col"
                      className="px-4 py-3 font-subheading text-sm uppercase tracking-[0.08em] text-brand-blue-900"
                    >
                      Zona
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 font-subheading text-sm uppercase tracking-[0.08em] text-brand-blue-900"
                    >
                      Distancia
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 font-subheading text-sm uppercase tracking-[0.08em] text-brand-blue-900"
                    >
                      Barrios incluidos
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-right font-subheading text-sm uppercase tracking-[0.08em] text-brand-blue-900"
                    >
                      Express
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-right font-subheading text-sm uppercase tracking-[0.08em] text-brand-blue-900"
                    >
                      LowCost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ZONE_ROWS.map((row) => (
                    <tr
                      key={row.zona}
                      className="border-b border-brand-blue-50 align-top last:border-b-0"
                    >
                      <th scope="row" className="px-4 py-3.5">
                        <span className="rounded bg-brand-blue-700 px-2 py-0.5 font-mono text-sm text-white tabular-nums">
                          {row.zona}
                        </span>
                      </th>
                      <td className="whitespace-nowrap px-4 py-3.5 font-mono text-xs font-medium text-brand-blue-600 tabular-nums">
                        {row.km}
                      </td>
                      <td className="px-4 py-3.5 font-sans text-xs leading-relaxed text-brand-ink">
                        {row.barrios}
                        {row.isFormula && (
                          <span className="mt-1 block font-sans text-2xs italic text-brand-blue-500">
                            * Aplica Math.ceil(km) × valor por km
                          </span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3.5 text-right font-mono text-sm font-bold text-brand-blue-900 tabular-nums">
                        {row.express}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3.5 text-right font-mono text-sm font-bold text-brand-blue-900 tabular-nums">
                        {row.lowCost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Neighborhood Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="font-display text-2xl sm:text-3xl uppercase text-brand-blue-900">
            BUSCADOR DE BARRIOS Y ZONAS
          </h2>
          <p className="font-sans text-sm text-brand-ink mt-1">
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
              <h3 className="font-subheading text-xl uppercase text-brand-blue-900">
                BASE OPERATIVA CENTRAL
              </h3>
              <p className="font-sans text-sm text-brand-ink leading-relaxed">
                Nuestra base física está ubicada en <strong>Friuli 1972, Barrio Chauvín</strong>. Esta posición estratégica en el corazón de Mar del Plata nos permite despachar a cualquier punto de la ciudad en minutos.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-blue-700 text-brand-yellow-500 flex items-center justify-center font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-subheading text-xl uppercase text-brand-blue-900">
                SERVICIO EXPRESS (60 A 90 MIN)
              </h3>
              <p className="font-sans text-sm text-brand-ink leading-relaxed">
                Prioridad operativa directa con franja horaria de entrega a elección (ej. 10 a 13 hs). Solicitá antes de las 15:00 hs con 2 horas de anticipación.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-subheading text-xl uppercase text-brand-blue-900">
                REPARTO LOWCOST EN EL DÍA
              </h3>
              <p className="font-sans text-sm text-brand-ink leading-relaxed">
                Entregas en el transcurso de la jornada antes de las 19:00 hs para compras online y comercios. Solicitá antes de las 13:00 hs con la tarifa más conveniente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
