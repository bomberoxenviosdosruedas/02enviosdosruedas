import type { Metadata } from 'next';
import CotizadorHero from '@/components/cotizar/unified/CotizadorHero';
import CotizadorUnificado from '@/components/cotizar/unified/CotizadorUnificado';
import CotizadorRecargos from '@/components/cotizar/unified/CotizadorRecargos';
import {
  EXPRESS_PRICE_PER_KM,
  EXPRESS_TIERS,
  LOW_COST_PRICE_PER_KM,
  LOW_COST_TIERS,
} from '@/lib/pricing';
import {
  CONSULT_THRESHOLD_KM,
  EXPRESS_CUTOFF_TIME,
  EXPRESS_LEAD_TIME,
  LOWCOST_CUTOFF_TIME,
  LOWCOST_DELIVERY_DEADLINE,
  PERIPHERY_PRICE_PER_KM,
  STANDARD_BULLET_DIMENSIONS_CM,
  STANDARD_WEIGHT_KG,
} from '@/lib/promises';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

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
  areaServed: [{ '@type': 'City', name: 'Mar del Plata' }],
  offers: [
    {
      '@type': 'Offer',
      name: 'Envío Express en moto',
      priceCurrency: 'ARS',
      price: String(EXPRESS_TIERS[0].price),
      description: `Tarifa por zona desde 0 a ${EXPRESS_TIERS[0].maxKm} km. Entrega en la franja horaria que elijas.`,
    },
    {
      '@type': 'Offer',
      name: 'Envío LowCost en moto',
      priceCurrency: 'ARS',
      price: String(LOW_COST_TIERS[0].price),
      description: `Tarifa por zona desde 0 a ${LOW_COST_TIERS[0].maxKm} km. Entrega programada el mismo día.`,
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

/**
 * Filas de la tabla pública. Se derivan de `pricing.ts` para que el texto y el
 * cotizador nunca puedan contradecirse: nadie escribe un importe a mano acá.
 */
const TARIFAS = [
  ...EXPRESS_TIERS.map((tier, i) => ({
    rango: `${tier.minKm} a ${tier.maxKm} km`,
    express: formatArs(tier.price),
    lowcost: formatArs(LOW_COST_TIERS[i].price),
  })),
  {
    rango: `Más de ${EXPRESS_TIERS[EXPRESS_TIERS.length - 1].maxKm} km`,
    express: `${formatArs(EXPRESS_PRICE_PER_KM)} por km`,
    lowcost: `${formatArs(LOW_COST_PRICE_PER_KM)} por km`,
  },
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
                Las dos columnas usan la misma distancia, medida sobre la calle y no ida y vuelta
                en línea recta. Express se entrega en la franja de 3 hs que elijas; LowCost, en el
                día y sin elección de horario, antes de las {LOWCOST_DELIVERY_DEADLINE}.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md">
              <table className="w-full min-w-136 text-left border-collapse">
                <caption className="sr-only">
                  Tarifas por zona de distancia para los servicios Express y LowCost
                </caption>
                <thead>
                  <tr className="border-b border-white/15">
                    <th scope="col" className="px-4 sm:px-5 py-3 font-subheading text-xs uppercase tracking-widest text-white/85">
                      Zona
                    </th>
                    <th scope="col" className="px-4 sm:px-5 py-3 font-subheading text-xs uppercase tracking-widest text-brand-yellow-500">
                      Express
                    </th>
                    <th scope="col" className="px-4 sm:px-5 py-3 font-subheading text-xs uppercase tracking-widest text-white">
                      LowCost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TARIFAS.map((fila, i) => (
                    <tr
                      key={fila.rango}
                      className={i % 2 === 1 ? 'bg-white/4' : undefined}
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

            <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-3">
              <div>
                <dt className="font-subheading text-xs uppercase tracking-widest text-brand-yellow-500">
                  Cobertura
                </dt>
                <dd className="font-sans text-sm text-white/85 leading-relaxed mt-1">
                  Todo Mar del Plata. Hasta {CONSULT_THRESHOLD_KM} km el cálculo es automático; más
                  allá, la tarifa se conversa con el equipo.
                </dd>
              </div>
              <div>
                <dt className="font-subheading text-xs uppercase tracking-widest text-brand-yellow-500">
                  Peso y medidas
                </dt>
                <dd className="font-sans text-sm text-white/85 leading-relaxed mt-1">
                  Hasta {STANDARD_WEIGHT_KG} kg o {STANDARD_BULLET_DIMENSIONS_CM} por bulto sin
                  recargo. Más que eso suma un recargo por bulto extra, que se calcula según el
                  servicio.
                </dd>
              </div>
              <div>
                <dt className="font-subheading text-xs uppercase tracking-widest text-brand-yellow-500">
                  Cortes
                </dt>
                <dd className="font-sans text-sm text-white/85 leading-relaxed mt-1">
                  Express: con {EXPRESS_LEAD_TIME}, hasta las {EXPRESS_CUTOFF_TIME}. LowCost:
                  pedidos antes de las {LOWCOST_CUTOFF_TIME}, entrega antes de las{' '}
                  {LOWCOST_DELIVERY_DEADLINE}.
                </dd>
              </div>
            </dl>
          </section>

          <CotizadorRecargos />

          <section aria-labelledby="cobertura-guia" className="space-y-4">
            <h2
              id="cobertura-guia"
              className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white"
            >
              Dónde llegamos
            </h2>
            <p className="font-sans text-white/90 leading-relaxed max-w-3xl text-sm sm:text-base">
              Llegamos a todo Mar del Plata: Centro, Güemes, Chauvín, Los Troncos, Puerto, Playa
              Grande, Punta Mogotes, Constitución y Camet, entre otros barrios. Más allá de los 10
              km de ruta cotizamos por kilómetro, y el cálculo automático llega hasta los{' '}
              {CONSULT_THRESHOLD_KM} km. Los destinos fuera de la ciudad, como Batán o Sierra de los
              Padres, van a {formatArs(PERIPHERY_PRICE_PER_KM)} por km de ruta y los vemos por
              WhatsApp.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
