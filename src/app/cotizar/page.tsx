import type { Metadata } from 'next';
import CotizadorHero from '@/src/components/cotizar/unified/CotizadorHero';
import CotizadorUnificado from '@/src/components/cotizar/unified/CotizadorUnificado';

const baseUrl = 'https://www.enviosdosruedas.com';

export const dynamic = 'force-dynamic';

const TITLE = 'Cotizá tu Envío en Moto | Express y LowCost | Envíos DosRuedas';
const DESCRIPTION =
  'Cargá el retiro y la entrega una vez y compará la tarifa Express y LowCost para tu envío en Mar del Plata. Elegís el servicio y confirmás por WhatsApp.';

export const metadata: Metadata = {
  title: 'Cotizá tu Envío en Moto | Express y LowCost',
  description: DESCRIPTION,
  alternates: {
    canonical: `${baseUrl}/cotizar`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${baseUrl}/cotizar`,
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@enviosdosruedas',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Cotizador de Envíos Envíos DosRuedas',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  url: `${baseUrl}/cotizar`,
  description:
    'Cotizador interactivo que calcula en una sola carga la tarifa Express y la tarifa LowCost de un envío en moto en Mar del Plata.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Envío Express en moto',
      priceCurrency: 'ARS',
      price: '3700',
      description: 'Tarifa por zona desde 0-3 km. Entrega prioritaria en el día.',
    },
    {
      '@type': 'Offer',
      name: 'Envío LowCost en moto',
      priceCurrency: 'ARS',
      price: '3000',
      description: 'Tarifa por zona desde 0-3 km. Entrega programada el mismo día.',
    },
  ],
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
};

const TARIFAS = [
  { rango: '0 – 3 km', express: '$3.700', lowcost: '$3.000' },
  { rango: '3 – 5 km', express: '$4.600', lowcost: '$4.000' },
  { rango: '5 – 7 km', express: '$6.100', lowcost: '$5.300' },
  { rango: '7 – 10 km', express: '$8.200', lowcost: '$7.000' },
  { rango: '+ 10 km', express: '$1.000 por km', lowcost: '$700 por km' },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div
        id="cotizar-page"
        className="w-full bg-brand-blue-500 text-white min-h-dvh relative overflow-hidden font-sans"
      >
        <CotizadorHero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 space-y-10 lg:space-y-14 relative z-10">
          <CotizadorUnificado />

          {/* Tabla de tarifas: el respaldo textual de lo que calcula el formulario. */}
          <section aria-labelledby="tabla-tarifas" className="space-y-5">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-yellow-500/10 border border-brand-yellow-500/30 text-brand-yellow-500 font-subheading text-xs uppercase tracking-widest">
                Tarifas 2026
              </span>
              <h2
                id="tabla-tarifas"
                className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white"
              >
                Cuánto cuesta cada zona
              </h2>
              <p className="font-sans text-white/90 leading-relaxed max-w-3xl text-sm sm:text-base">
                Las dos columnas usan la misma distancia medida sobre la calle, no ida y vuelta en
                línea recta. Por eso la diferencia entre Express y LowCost siempre es la misma
                forma: pagás un poco más por llegar antes.
              </p>
            </div>

            <div className="overflow-x-auto rounded-[20px] border border-white/15 bg-white/5 backdrop-blur-md">
              <table className="w-full min-w-[34rem] text-left border-collapse">
                <caption className="sr-only">
                  Tarifas por zona de distancia para los servicios Express y LowCost
                </caption>
                <thead>
                  <tr className="border-b border-white/15">
                    <th scope="col" className="px-4 sm:px-5 py-3 font-subheading text-xs uppercase tracking-widest text-white/70 font-bold">
                      Zona
                    </th>
                    <th scope="col" className="px-4 sm:px-5 py-3 font-subheading text-xs uppercase tracking-widest text-brand-yellow-500 font-bold">
                      Express
                    </th>
                    <th scope="col" className="px-4 sm:px-5 py-3 font-subheading text-xs uppercase tracking-widest text-white font-bold">
                      LowCost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TARIFAS.map((fila, i) => (
                    <tr
                      key={fila.rango}
                      className={i % 2 === 1 ? 'bg-white/[0.04]' : undefined}
                    >
                      <th
                        scope="row"
                        className="px-4 sm:px-5 py-3 font-mono text-sm text-white/90 font-normal tabular-nums"
                      >
                        {fila.rango}
                      </th>
                      <td className="px-4 sm:px-5 py-3 font-mono text-sm font-bold text-brand-yellow-500 tabular-nums">
                        {fila.express}
                      </td>
                      <td className="px-4 sm:px-5 py-3 font-mono text-sm font-bold text-white tabular-nums">
                        {fila.lowcost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="font-sans text-xs text-white/70 leading-relaxed">
              Radio estándar de cobertura: 20 km. Más allá de eso la tarifa se conversa con el
              equipo. Express: hasta 5 kg y 40×30 cm por bulto. LowCost: cierre de pedidos a las
              13:00 hs, entrega antes de las 19:00 hs.
            </p>
          </section>

          <section aria-labelledby="cobertura-guia" className="space-y-4">
            <h2
              id="cobertura-guia"
              className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white"
            >
              Dónde llegamos
            </h2>
            <p className="font-sans text-white/90 leading-relaxed max-w-3xl text-sm sm:text-base">
              Centro, Güemes, Puerto, Playa Grande, Punta Mogotes, Constitución, Chauvín, La
              Palmeta y Batán, más Sierra de los Padres y todo el ejido a 20 km. Si tu destino
              está fuera de ese radio, el cotizador te lo dice y lo vemos por WhatsApp.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
