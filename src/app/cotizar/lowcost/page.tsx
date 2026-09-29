import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CotizadorLowCostDetails from '@/components/cotizar/lowcost/CotizadorLowCostDetails';
import CotizadorLowCostHelp from '@/components/cotizar/lowcost/CotizadorLowCostHelp';
import BatchGrid from '@/components/cotizar/lowcost/BatchGrid';

const baseUrl = 'https://www.enviosdosruedas.com';

export const dynamic = 'force-dynamic';

/**
 * Ficha de servicio, no cotizador. El formulario simple vive en `/cotizar`, que
 * devuelve las dos tarifas en una sola carga. Acá sobrevive la planilla de lotes,
 * que sí es exclusiva de LowCost.
 */
export const metadata: Metadata = {
  title: 'Envío LowCost en Moto en Mar del Plata | Tarifas 2026',
  description:
    'Envío económico programado en moto por Mar del Plata: pedido antes de las 13 hs, entrega en el día antes de las 19 hs. Tarifa por zona desde $3.000.',
  alternates: {
    canonical: `${baseUrl}/cotizar/lowcost`,
  },
  openGraph: {
    title: 'Envío LowCost en Moto en Mar del Plata | Envíos DosRuedas',
    description:
      'Envío programado con entrega en el día en Mar del Plata. Pedido antes de las 13 hs, entrega antes de las 19 hs.',
    url: `${baseUrl}/cotizar/lowcost`,
    type: 'article',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Envío LowCost en Moto en Mar del Plata | Envíos DosRuedas',
    description:
      'Envío programado con entrega en el día en Mar del Plata. Pedido antes de las 13 hs, entrega antes de las 19 hs.',
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@enviosdosruedas',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Envío LowCost en Moto',
  serviceType: 'Mensajería económica programada en moto',
  url: `${baseUrl}/cotizar/lowcost`,
  description:
    'Envío programado en moto dentro de Mar del Plata con entrega el mismo día, agrupado en un ruteo consolidado.',
  areaServed: 'Mar del Plata y General Pueyrredón',
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
  offers: {
    '@type': 'Offer',
    priceCurrency: 'ARS',
    price: '3000',
    description: 'Tarifa por zona desde 0-3 km.',
  },
};

const TARIFAS = [
  { rango: '0 – 3 km', precio: '$3.000' },
  { rango: '3 – 5 km', precio: '$4.000' },
  { rango: '5 – 7 km', precio: '$5.300' },
  { rango: '7 – 10 km', precio: '$7.000' },
  { rango: '+ 10 km', precio: '$700 por km' },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div
        id="cotizar-lowcost-page"
        className="w-full bg-brand-blue-500 text-white min-h-dvh relative overflow-hidden font-sans"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-20 relative z-10 space-y-12 lg:space-y-16">
          <header className="max-w-3xl space-y-5">
            <Link
              href="/cotizar"
              className="inline-flex items-center gap-1.5 font-subheading text-xs uppercase tracking-widest text-brand-yellow-500 hover:text-brand-yellow-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 rounded"
            >
              <ArrowRight className="h-3.5 w-3.5 rotate-180" aria-hidden="true" />
              Ir al cotizador
            </Link>

            <span className="inline-block px-3.5 py-1 bg-white/10 text-white rounded-full text-xs font-subheading font-bold tracking-wider uppercase border border-white/25">
              Servicio LowCost
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.95] text-white">
              Envío lowcost en moto por{' '}
              <span className="inline-block bg-white text-brand-blue-700 px-3 py-1 rounded-lg -rotate-1">
                Mar del Plata
              </span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed font-light">
              Cuando la entrega puede esperar unas horas, el precio baja. Agrupamos los envíos del
              día en un ruteo consolidado: pedís antes de las 13:00 hs y llega antes de las 19:00
              hs. La misma distancia, el mismo servicio, otra factura.
            </p>

            <Link
              href="/cotizar"
              className="inline-flex items-center gap-2.5 rounded-full font-subheading uppercase tracking-widest font-bold px-7 py-3 text-sm min-h-[44px] bg-brand-yellow-500 text-brand-blue-900 border border-brand-yellow-500 shadow-accent-sm hover:shadow-cta-glow hover:bg-brand-yellow-400 active:scale-[.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-700"
            >
              Cotizar mi envío
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </header>

          {/* Tabla de tarifas: el respaldo textual para búsquedas de precio. */}
          <section aria-labelledby="tarifas-lowcost" className="space-y-4">
            <h2
              id="tarifas-lowcost"
              className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white"
            >
              Tarifas 2026
            </h2>
            <div className="overflow-x-auto rounded-[20px] border border-white/15 bg-white/5 backdrop-blur-md max-w-2xl">
              <table className="w-full text-left border-collapse">
                <caption className="sr-only">
                  Tarifas por zona de distancia para el servicio LowCost
                </caption>
                <thead>
                  <tr className="border-b border-white/15">
                    <th
                      scope="col"
                      className="px-4 sm:px-5 py-3 font-subheading text-xs uppercase tracking-widest text-white/70 font-bold"
                    >
                      Zona
                    </th>
                    <th
                      scope="col"
                      className="px-4 sm:px-5 py-3 font-subheading text-xs uppercase tracking-widest text-white font-bold"
                    >
                      LowCost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TARIFAS.map((fila) => (
                    <tr key={fila.rango}>
                      <th
                        scope="row"
                        className="px-4 sm:px-5 py-3 font-mono text-sm text-white/90 font-normal tabular-nums"
                      >
                        {fila.rango}
                      </th>
                      <td className="px-4 sm:px-5 py-3 font-mono text-sm font-bold text-white tabular-nums">
                        {fila.precio}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-sans text-xs text-white/70 leading-relaxed max-w-2xl">
              Distancia medida sobre la calle. Radio estándar de 20 km. El excedente de 10 km se
              calcula con el kilometraje total redondeado hacia arriba.
            </p>
          </section>

          <CotizadorLowCostDetails />

          {/* La planilla de lotes es la función exclusiva de este servicio. */}
          <section aria-labelledby="lotes-lowcost" className="space-y-4">
            <h2
              id="lotes-lowcost"
              className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white"
            >
              ¿Tenés varios envíos?
            </h2>
            <p className="font-sans text-white/90 leading-relaxed max-w-3xl text-sm sm:text-base">
              Cargá tu planilla de destinos y armamos un ruteo agrupado LowCost con un solo
              pedido. Ideal para comercio, PyMEs y marketplaces.
            </p>
            <BatchGrid />
          </section>

          <CotizadorLowCostHelp />
        </div>
      </div>
    </>
  );
}
