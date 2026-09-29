import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CotizadorExpressDetails from '@/components/cotizar/express/CotizadorExpressDetails';
import CotizadorExpressHelp from '@/components/cotizar/express/CotizadorExpressHelp';

const baseUrl = 'https://www.enviosdosruedas.com';

export const dynamic = 'force-dynamic';

/**
 * Ficha de servicio, no cotizador. El formulario vive en `/cotizar`, que devuelve
 * las dos tarifas en una sola carga. Esta URL se conserva porque ya está indexada y
 * porque sirve para búsquedas del tipo "envío express mar del plata".
 */
export const metadata: Metadata = {
  title: 'Envío Express en Moto en Mar del Plata | Tarifas 2026',
  description:
    'Envío express en moto por Mar del Plata: entrega prioritaria en el día, tarifa por zona desde $3.700 y coordinación por WhatsApp. Conocé las pautas y las zonas.',
  alternates: {
    canonical: `${baseUrl}/cotizar/express`,
  },
  openGraph: {
    title: 'Envío Express en Moto en Mar del Plata | Envíos DosRuedas',
    description:
      'Entrega prioritaria en el día por Mar del Plata. Tarifa por zona desde $3.700, franja de 3 hs a coordinar.',
    url: `${baseUrl}/cotizar/express`,
    type: 'article',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Envío Express en Moto en Mar del Plata | Envíos DosRuedas',
    description:
      'Entrega prioritaria en el día por Mar del Plata. Tarifa por zona desde $3.700, franja de 3 hs a coordinar.',
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@enviosdosruedas',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Envío Express en Moto',
  serviceType: 'Mensajería express en moto',
  url: `${baseUrl}/cotizar/express`,
  description:
    'Envío prioritario en moto dentro de Mar del Plata con entrega el mismo día y franja horaria a coordinar.',
  areaServed: 'Mar del Plata',
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
    price: '3700',
    description: 'Tarifa por zona desde 0-3 km.',
  },
};

const TARIFAS = [
  { rango: '0 – 3 km', precio: '$3.700' },
  { rango: '3 – 5 km', precio: '$4.600' },
  { rango: '5 – 7 km', precio: '$6.100' },
  { rango: '7 – 10 km', precio: '$8.200' },
  { rango: '+ 10 km', precio: '$1.000 por km' },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div
        id="cotizar-express-page"
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

            <span className="inline-block px-3.5 py-1 bg-brand-yellow-500/10 text-brand-yellow-500 rounded-full text-xs font-subheading font-bold tracking-wider uppercase border border-brand-yellow-500/40">
              Servicio Express
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.95] text-white">
              Envío express en moto por{' '}
              <span className="inline-block bg-brand-yellow-500 text-brand-blue-900 px-3 py-1 rounded-lg -rotate-1">
                Mar del Plata
              </span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed font-light">
              Para cuando el envío no puede esperar. Medimos la distancia real entre tu retiro y
              tu entrega, coordinamos una franja de 3 horas y el cadete sale directo a buscarlo.
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
          <section aria-labelledby="tarifas-express" className="space-y-4">
            <h2
              id="tarifas-express"
              className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white"
            >
              Tarifas 2026
            </h2>
            <div className="overflow-x-auto rounded-[20px] border border-white/15 bg-white/5 backdrop-blur-md max-w-2xl">
              <table className="w-full text-left border-collapse">
                <caption className="sr-only">
                  Tarifas por zona de distancia para el servicio Express
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
                      className="px-4 sm:px-5 py-3 font-subheading text-xs uppercase tracking-widest text-brand-yellow-500 font-bold"
                    >
                      Express
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
                      <td className="px-4 sm:px-5 py-3 font-mono text-sm font-bold text-brand-yellow-500 tabular-nums">
                        {fila.precio}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-sans text-xs text-white/70 leading-relaxed max-w-2xl">
              Distancia medida sobre la calle, no en línea recta. Radio estándar de 20 km.
            </p>
          </section>

          <CotizadorExpressDetails />
          <CotizadorExpressHelp />
        </div>
      </div>
    </>
  );
}
