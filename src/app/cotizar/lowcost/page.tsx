import type { Metadata } from 'next';
import CotizadorLowCostHero from '@/src/components/cotizar/lowcost/CotizadorLowCostHero';
import CotizadorLowCostForm from '@/src/components/cotizar/lowcost/CotizadorLowCostForm';
import BatchGrid from '@/src/components/cotizar/lowcost/BatchGrid';
import CotizadorLowCostDetails from '@/src/components/cotizar/lowcost/CotizadorLowCostDetails';
import CotizadorLowCostHelp from '@/src/components/cotizar/lowcost/CotizadorLowCostHelp';

const baseUrl = 'https://www.enviosdosruedas.com';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Cotizá tu Envío LowCost en Moto',
  description:
    'Calculá tu tarifa de envío económico programado con entrega en el día en Mar del Plata (pedidos antes de las 13 hs). Ruteo optimizado para comercios y PyMEs.',
  alternates: {
    canonical: `${baseUrl}/cotizar/lowcost`,
  },
  openGraph: {
    title: 'Cotizá tu Envío LowCost en Moto | Envíos DosRuedas',
    description:
      'Calculá tu envío programado con entrega en el día en Mar del Plata. Máxima rentabilidad y eficiencia logística.',
    url: `${baseUrl}/cotizar/lowcost`,
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cotizá tu Envío LowCost en Moto | Envíos DosRuedas',
    description: 'Calculá tu envío programado con entrega en el día en Mar del Plata. Máxima rentabilidad y eficiencia logística.',
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@enviosdosruedas',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Cotizador de Envíos LowCost Envíos DosRuedas',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  url: `${baseUrl}/cotizar/lowcost`,
  description:
    'Herramienta de cálculo para envíos económicos consolidados y ruteos urbanos masivos en Mar del Plata.',
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      {/* Main outer container */}
      <div id="cotizar-lowcost-page" className="w-full bg-brand-blue-500 text-white min-h-[100dvh] relative overflow-hidden font-sans">
        {/* Hero Section — Rendered and Streamed Immediately */}
        <CotizadorLowCostHero />

        {/* Descriptive Content Section — SEO & User Context */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[28px] shadow-float">
            <div className="bg-brand-blue-900 text-white p-6 sm:p-8 rounded-[20px] border border-white/10 shadow-sm space-y-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-yellow-500/10 border border-brand-yellow-500/30 text-brand-yellow-500 font-subheading text-xs uppercase tracking-widest w-fit">
                <span>CÓMO FUNCIONA</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
                CALCULÁ TU REPARTO LOWCOST EN 3 PASOS
              </h2>
              <p className="text-white/80 font-sans leading-relaxed text-base sm:text-lg max-w-3xl">
                Nuestro cotizador LowCost te da la tarifa más económica para envíos programados con entrega en el día.
                Ruteo consolidado masivo para máxima eficiencia. Tarifas 2026 oficiales publicadas.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/15">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-8 h-8 rounded-full bg-brand-yellow-500 text-brand-blue-900 flex items-center justify-center shrink-0 font-display text-lg font-bold">1</span>
                  <div>
                    <h3 className="font-subheading text-sm uppercase font-bold text-white">Ingresá Direcciones</h3>
                    <p className="text-xs text-white/70 font-sans">Origen y destino. El sistema agrupa por zona para optimizar la ruta.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-8 h-8 rounded-full bg-brand-yellow-500 text-brand-blue-900 flex items-center justify-center shrink-0 font-display text-lg font-bold">2</span>
                  <div>
                    <h3 className="font-subheading text-sm uppercase font-bold text-white">Obtené Tarifa por Zona</h3>
                    <p className="text-xs text-white/70 font-sans">Precio fijo por radio (0-3km $3.000, 3-5km $4.000, 5-7km $5.300, 7-10km $7.000, +10km $700/km).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-8 h-8 rounded-full bg-brand-yellow-500 text-brand-blue-900 flex items-center justify-center shrink-0 font-display text-lg font-bold">3</span>
                  <div>
                    <h3 className="font-subheading text-sm uppercase font-bold text-white">Programá la Entrega</h3>
                    <p className="text-xs text-white/70 font-sans">Pedidos antes de 13:00 hs → entrega antes de 19:00 hs. Sin elección de franja, máxima economía.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/15 flex flex-wrap gap-3">
                <span className="font-subheading text-xs uppercase tracking-wider text-brand-yellow-500 font-bold">COBERTURA:</span>
                <span className="text-sm text-white/80 font-sans">Todo Mar del Plata + 20 km (Batán, Sierra de los Padres). Ruteo consolidado diario.</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="font-subheading text-xs uppercase tracking-wider text-brand-yellow-500 font-bold">IDEAL PARA:</span>
                <span className="text-sm text-white/80 font-sans">E-commerce, PyMEs, volúmenes recurrentes, marketplaces. Sin mínimos de envío.</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 sm:mt-0 pt-2 lg:pt-8 space-y-12 lg:space-y-16 pb-16 relative z-10">
          {/* 1. Main Quote Form (tarifas leídas en el servidor por el Server Action) */}
          <main className="w-full font-sans">
            <CotizadorLowCostForm />

            {/* Batch / Multi-Destination Planilla */}
            <BatchGrid />
          </main>

          {/* 2. Detail Guidelines */}
          <div className="font-sans">
            <CotizadorLowCostDetails />
          </div>

          {/* 3. Help Contact Banner */}
          <div className="font-sans">
            <CotizadorLowCostHelp />
          </div>
        </div>
      </div>
    </>
  );
}
