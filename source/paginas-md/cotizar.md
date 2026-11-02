# Contexto Consolidado: Cotizar (`/cotizar`)

> Documento generado automáticamente para referencia e integración completa.
> Incluye el código de `layout.tsx`, los componentes de layout (`Header`, `Footer`, `CarruselRedes`, etc.), `page.tsx` y todos los componentes y dependencias resueltos en profundidad.

* **Ruta de la página:** `/cotizar`
* **Punto de entrada:** [`src/app/cotizar/page.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/cotizar/page.tsx)
* **Cantidad total de archivos incluidos:** 42

---

## Tabla de Contenidos

1. [src/app/layout.tsx](#srcapplayouttsx) — *Shell del App Router (layout.tsx)*
2. [src/app/cotizar/page.tsx](#srcappcotizarpagetsx) — *Página Principal (page.tsx)*
3. [src/components/ClientLayout.tsx](#srccomponentsclientlayouttsx) — *Layout de Cliente (ClientLayout)*
4. [src/lib/promises.ts](#srclibpromisests) — *Librería / Utilidad Local*
5. [src/components/cotizar/unified/CotizadorHero.tsx](#srccomponentscotizarunifiedcotizadorherotsx) — *Componente de Sección*
6. [src/components/cotizar/unified/CotizadorUnificado.tsx](#srccomponentscotizarunifiedcotizadorunificadotsx) — *Componente de Sección*
7. [src/components/cotizar/unified/CotizadorRecargos.tsx](#srccomponentscotizarunifiedcotizadorrecargostsx) — *Componente de Sección*
8. [src/lib/pricing.ts](#srclibpricingts) — *Librería / Utilidad Local*
9. [src/components/layout/OptimizedHeader.tsx](#srccomponentslayoutoptimizedheadertsx) — *Componente de Layout*
10. [src/components/layout/OptimizedFooter.tsx](#srccomponentslayoutoptimizedfootertsx) — *Componente de Layout*
11. [src/lib/analytics.ts](#srclibanalyticsts) — *Librería / Utilidad Local*
12. [src/components/layout/CarruselRedes.tsx](#srccomponentslayoutcarruselredestsx) — *Componente de Layout*
13. [src/components/ui/HeroProceduralBackground.tsx](#srccomponentsuiheroproceduralbackgroundtsx) — *Componente Primitivo UI*
14. [src/components/ui/CTANestedPill.tsx](#srccomponentsuictanestedpilltsx) — *Componente Primitivo UI*
15. [src/components/ui/Badge.tsx](#srccomponentsuibadgetsx) — *Componente Primitivo UI*
16. [src/components/cotizar/unified/CotizadorForm.tsx](#srccomponentscotizarunifiedcotizadorformtsx) — *Componente de Sección*
17. [src/components/cotizar/unified/CotizadorComparativa.tsx](#srccomponentscotizarunifiedcotizadorcomparativatsx) — *Componente de Sección*
18. [src/components/cotizar/unified/CotizadorMapa.tsx](#srccomponentscotizarunifiedcotizadormapatsx) — *Componente de Sección*
19. [src/components/cotizar/unified/CotizadorGuia.tsx](#srccomponentscotizarunifiedcotizadorguiatsx) — *Componente de Sección*
20. [src/hooks/cotizador/useCotizadorUnified.ts](#srchookscotizadorusecotizadorunifiedts) — *Hook React*
21. [src/components/layout/MobileNav.tsx](#srccomponentslayoutmobilenavtsx) — *Componente de Layout*
22. [src/lib/utils.ts](#srclibutilsts) — *Librería / Utilidad Local*
23. [src/components/ui/AddressAutocomplete.tsx](#srccomponentsuiaddressautocompletetsx) — *Componente Primitivo UI*
24. [src/components/ui/InputField.tsx](#srccomponentsuiinputfieldtsx) — *Componente Primitivo UI*
25. [src/components/ui/DoubleBezelCard.tsx](#srccomponentsuidoublebezelcardtsx) — *Componente Primitivo UI*
26. [src/components/ui/RadioCardGroup.tsx](#srccomponentsuiradiocardgrouptsx) — *Componente Primitivo UI*
27. [src/components/ui/DynamicRouteMap.tsx](#srccomponentsuidynamicroutemaptsx) — *Componente Primitivo UI*
28. [src/hooks/useGoogleRoute.ts](#srchooksusegoogleroutets) — *Hook React*
29. [src/actions/quote.ts](#srcactionsquotets) — *Módulo Local*
30. [src/lib/whatsapp.ts](#srclibwhatsappts) — *Librería / Utilidad Local*
31. [src/components/ui/index.ts](#srccomponentsuiindexts) — *Componente Primitivo UI*
32. [src/components/ui/LeafletRouteMap.tsx](#srccomponentsuileafletroutemaptsx) — *Componente Primitivo UI*
33. [src/lib/prisma.ts](#srclibprismats) — *Librería / Utilidad Local*
34. [src/lib/route-cache.ts](#srclibroutecachets) — *Librería / Utilidad Local*
35. [src/components/ui/StepperHorizontal.tsx](#srccomponentsuistepperhorizontaltsx) — *Componente Primitivo UI*
36. [src/components/ui/StepperVertical.tsx](#srccomponentsuistepperverticaltsx) — *Componente Primitivo UI*
37. [src/components/ui/LogosCarousel.tsx](#srccomponentsuilogoscarouseltsx) — *Componente Primitivo UI*
38. [src/components/ui/FloatTiltCard.tsx](#srccomponentsuifloattiltcardtsx) — *Componente Primitivo UI*
39. [src/components/ui/BentoGrid.tsx](#srccomponentsuibentogridtsx) — *Componente Primitivo UI*
40. [src/components/ui/Knockout.tsx](#srccomponentsuiknockouttsx) — *Componente Primitivo UI*
41. [src/components/ui/ServicePricing.tsx](#srccomponentsuiservicepricingtsx) — *Componente Primitivo UI*
42. [src/components/ui/card.tsx](#srccomponentsuicardtsx) — *Componente Primitivo UI*

---

<a id="srcapplayouttsx"></a>
## 1. `src/app/layout.tsx`
* **Rol:** Shell del App Router (layout.tsx)
* **Archivo:** [`src/app/layout.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/layout.tsx)

```tsx
import type { Metadata, Viewport } from 'next';
import { Outfit, Anton, Bebas_Neue, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import { MotionConfig } from 'motion/react';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { CONTACT_EMAIL, SUPPORT_PHONE } from '@/lib/promises';

const JSON_LD_PHONE = SUPPORT_PHONE.replace(/\s+/g, '-');

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: false,
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-subheading',
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: true,
});

const baseUrl = 'https://www.enviosdosruedas.com';
const AHREFS_ANALYTICS_KEY = 'NWj98c8Mm2KygtpCXcQh5w';
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0950F6',
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Mensajería en moto en Mar del Plata | Envíos DosRuedas',
    template: '%s | Envíos DosRuedas',
  },
  description:
    'Mensajería en moto y logística e-commerce en Mar del Plata. Envíos Express en franja de 3 hs, Mercado Envíos Flex en el día y reparto LowCost. Cotizá online.',
  authors: [{ name: 'Envíos DosRuedas' }],
  creator: 'Envíos DosRuedas',
  publisher: 'Envíos DosRuedas',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: baseUrl,
    siteName: 'Envíos DosRuedas',
    title: 'Mensajería en moto en Mar del Plata | Envíos DosRuedas',
    description:
      'La solución logística y última milla de mayor confianza en Mar del Plata. Envíos Express, MercadoLibre Flex, ruteo eficiente y cadetería inteligente.',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Envíos DosRuedas - Logística y Mensajería en Mar del Plata',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mensajería en moto en Mar del Plata | Envíos DosRuedas',
    description: 'La solución logística y última milla de mayor confianza en Mar del Plata.',
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@enviosdosruedas',
  },
  verification: {
    google: ['RKKz8Z6gsm6k3099W3s-xs7G6LTSQQNHpBs_iWfIQnM'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${anton.variable} ${bebasNeue.variable} ${geistMono.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                '@context': 'https://schema.org',
                '@graph': [
                  {
                    '@type': 'Organization',
                    name: 'Envíos DosRuedas',
                    url: baseUrl,
                    logo: `${baseUrl}/logo-envios-simplified.webp`,
                    sameAs: [
                      'https://www.instagram.com/enviosdosruedas/',
                      'https://www.facebook.com/enviosdosruedas/',
                    ],
                    contactPoint: {
                      '@type': 'ContactPoint',
                      telephone: JSON_LD_PHONE,
                      contactType: 'customer service',
                      availableLanguage: 'Spanish',
                      areaServed: 'AR',
                    },
                  },
                  {
                    '@type': 'LocalBusiness',
                    '@id': `${baseUrl}#localbusiness`,
                    name: 'Envíos DosRuedas',
                    description:
                      'Mensajería y logística e-commerce en Mar del Plata. Envíos Express en franja de 3 hs a elección, LowCost, Mercado Envíos Flex y almacenamiento en Friuli 1972.',
                    url: baseUrl,
                    telephone: JSON_LD_PHONE,
                    email: CONTACT_EMAIL,
                    image: `${baseUrl}/og-image.jpg`,
                    hasMap: 'https://www.google.com/maps?q=Friuli+1972,+Mar+del+Plata',
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
                      latitude: -38.0055,
                      longitude: -57.5426,
                    },
                    openingHoursSpecification: [
                      {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                        opens: '09:00',
                        closes: '18:00',
                      },
                      {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: ['Saturday'],
                        opens: '10:00',
                        closes: '15:00',
                      },
                    ],
                    areaServed: { '@type': 'City', name: 'Mar del Plata' },
                    priceRange: '$$',
                    currenciesAccepted: 'ARS',
                    paymentAccepted: 'Cash, Credit Card, Transfer, MercadoPago',
                  },
                ],
              },
              null,
              2
            ),
          }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17510443994" strategy="lazyOnload" />
        <Script id="google-tag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17510443994');
            gtag('config', 'G-LSLQ3RJ8WT');
          `}
        </Script>
        {process.env.NODE_ENV === 'production' && (
          <Script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key={AHREFS_ANALYTICS_KEY}
            strategy="afterInteractive"
            async
          />
        )}
      </head>
      <body
        className="bg-brand-white text-brand-ink font-sans antialiased selection:bg-brand-yellow selection:text-brand-blue min-h-dvh flex flex-col"
        suppressHydrationWarning
      >
        <MotionConfig reducedMotion="user">
          <ClientLayout>{children}</ClientLayout>
        </MotionConfig>
        <SpeedInsights />
      </body>
    </html>
  );
}
```

---

<a id="srcappcotizarpagetsx"></a>
## 2. `src/app/cotizar/page.tsx`
* **Rol:** Página Principal (page.tsx)
* **Archivo:** [`src/app/cotizar/page.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/cotizar/page.tsx)

```tsx
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

const TITLE = 'Cotizá tu Envío en Moto | Envíos DosRuedas';
const DESCRIPTION =
  'Cargá el retiro y la entrega una vez y compará la tarifa Express y LowCost para tu envío en Mar del Plata. Elegís el servicio y confirmás por WhatsApp.';

export const metadata: Metadata = {
  title: 'Cotizá tu Envío en Moto',
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
    images: [`${baseUrl}/og-image.jpg`],
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

            {/* Vista Mobile (<sm) — Tarjetas verticales de tarifas */}
            <div className="grid grid-cols-1 gap-3 sm:hidden">
              {TARIFAS.map((fila) => (
                <div
                  key={fila.rango}
                  className="rounded-xl border border-white/15 bg-white/5 p-4 space-y-2"
                >
                  <div className="font-mono text-xs text-white/70 uppercase tracking-wider font-medium">
                    Zona: <span className="text-white font-bold">{fila.rango}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-white/10">
                    <span className="font-subheading text-xs uppercase tracking-widest text-brand-yellow-500">
                      Express
                    </span>
                    <span className="font-mono text-sm font-bold text-brand-yellow-500 tabular-nums">
                      {fila.express}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-subheading text-xs uppercase tracking-widest text-white/90">
                      LowCost
                    </span>
                    <span className="font-mono text-sm font-bold text-white tabular-nums">
                      {fila.lowcost}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Vista Desktop (sm+) — Tabla clásica */}
            <div className="hidden sm:block overflow-x-auto rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md">
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
```

---

<a id="srccomponentsclientlayouttsx"></a>
## 3. `src/components/ClientLayout.tsx`
* **Rol:** Layout de Cliente (ClientLayout)
* **Archivo:** [`src/components/ClientLayout.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ClientLayout.tsx)

```tsx
'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import OptimizedHeader from './layout/OptimizedHeader';
import OptimizedFooter from './layout/OptimizedFooter';
import { captureAndPersistUtms } from '@/lib/analytics';

// CarruselRedes se importa dinámicamente para no retrasar el First Contentful Paint (FCP)
const CarruselRedes = dynamic(() => import('./layout/CarruselRedes'), {
  loading: () => <div className="w-full py-16 bg-brand-blue-500 min-h-62.5" />,
  ssr: true,
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    captureAndPersistUtms();
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-5 focus:py-3 focus:rounded-full focus:bg-brand-yellow-500 focus:text-brand-blue-500 focus:font-subheading focus:font-bold focus:uppercase focus:tracking-wider focus:shadow-cta-glow focus:outline-none focus:ring-2 focus:ring-white"
      >
        Saltar al contenido principal
      </a>
      <OptimizedHeader />
      <main id="main-content" className="grow pt-18 scroll-mt-20">
        {children}
      </main>
      <CarruselRedes />
      <OptimizedFooter />
    </>
  );
}
```

---

<a id="srclibpromisests"></a>
## 4. `src/lib/promises.ts`
* **Rol:** Librería / Utilidad Local
* **Archivo:** [`src/lib/promises.ts`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/lib/promises.ts)

```tsx
/**
 * Constantes únicas de promesas de servicio y umbrales operativos (BL-03).
 * Fuente de verdad unificada para cotizadores, páginas informativas, JSON-LD y llms.txt.
 *
 * Nota: Si se modifican estas promesas, recordar actualizar sincronizadamente también
 * public/llms.txt y public/llms-full.txt.
 *
 * Contexto del dueño (definiciones verbatim de servicio, recargos, protocolos y lo que
 * niega explícitamente): docs/knowledge_base/00-negocio/servicios.md y voz-y-lineas-rojas.md
 */

// Ventana de entrega Express.
// Cambio 2026-09-29 (decisión del dueño, relevamiento con Matías Cejas): la promesa de
// "60 a 90 min" se retiró por inexacta. Express coordina hoy una franja horaria acotada
// a elección del cliente, con 2 hs de anticipación mínima.
//
// Contrato de las dos formas, porque se interpolan en oraciones distintas:
//   EXPRESS_WINDOW       → forma larga. SIEMPRE después de "en" o "Entrega en":
//                          "Entrega en franja horaria de 3 hs".
//   EXPRESS_WINDOW_SHORT → forma compacta, para chips, tablas y rótulos sueltos:
//                          "Franja de 3 hs". NUNCA dentro de una oración con "en",
//                          porque "en 3 hs" se leería como duración de la entrega.
export const EXPRESS_WINDOW = 'franja horaria de 3 hs';
export const EXPRESS_WINDOW_SHORT = 'Franja de 3 hs';

// Anticipación mínima para coordinar una franja de Express.
export const EXPRESS_LEAD_TIME = '2 hs de anticipación';

// Corte Express: pedido hasta esta hora para entregar en el día. El último rango
// posible es 17 a 19 hs (entrevista 2026-09-28 §1.1).
export const EXPRESS_CUTOFF_TIME = '15:00 hs';

// Ventanas operativas LowCost
export const LOWCOST_CUTOFF_TIME = '13:00 hs';
export const LOWCOST_DELIVERY_DEADLINE = '19:00 hs';

// Mercado Envíos Flex
export const FLEX_CUTOFF_TIME = '15:00 hs';
export const FLEX_DELIVERY_DEADLINE = '20:00 hs';

// Tarifas fijas de los niveles Flex. Fuera de `PriceRange`: son precio cerrado
// por nivel, no un rango por distancia. El Nivel 1 no tiene cifra propia —cobra
// la tabla LowCost por zona (ver `LOW_COST_TIERS` en `pricing.ts`).
export const FLEX_NIVEL_2_PRICE = 6500; // Tope fijo en Z4 y Z5
export const FLEX_NIVEL_3_PRICE = 4500; // Tarifa plana a todo Mar del Plata

// Recargo por lluvia. El dueño (entrevista 2026-09-28) define un rango según el
// servicio: 50 % para Express y LowCost, 30 % en todos los demás. Esta constante
// modela SOLO el caso de 30 %, que es el único que hoy se muestra en el sitio.
// Antes de usar este valor para Express o LowCost, agregar el desglose por servicio.
// Ver docs/knowledge_base/00-negocio/tarifas.md §7.
export const RAIN_SURCHARGE_PERCENT = 30;

// Recargo por lluvia para Express y LowCost (el caso de 50 % del rango del dueño).
export const RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST = 50;

// Recargos operativos de Express y LowCost (entrevista 2026-09-28 §3). Se informan
// en el cotizador pero no entran en el cálculo automático: dependen de lo que pase
// en el viaje (lluvia, espera, paradas, destinatario ausente).
export const WAIT_TOLERANCE_MIN = 10; // Espera en puerta sin cargo
export const WAIT_CHARGE_ARS = 2200; // Por cada bloque de espera, desde el minuto 11 (corrección dueño oct 2026)
export const WAIT_CHARGE_BLOCK_MIN = 10;
export const EXTRA_STOP_SURCHARGE_PERCENT = 50; // Por parada intermedia sobre la ruta
export const EXTRA_STOP_MAX_DETOUR_KM = 2; // Más desvío que esto es un envío aparte
export const RETRY_CHARGE_PERCENT = 100; // Segunda visita por destinatario ausente

// Periferia: destinos fuera de la urbana de Mar del Plata (Batán, Sierra de los
// Padres…). NO es el excedente de 10 a 20 km de `pricing.ts` ($1.000 / $700 por km):
// es otra tarifa, por km de ruta, que se cotiza aparte. Ver entrevista §3.1.
export const PERIPHERY_PRICE_PER_KM = 1000;
// Bulto extra: más de 5 kg o 40 × 40 × 30 cm. Corrección dueño octubre 2026: desde $1800.
export const BULK_EXTRA_FROM_ARS = 1800;

// Umbrales de distancia y límites físicos
export const CONSULT_THRESHOLD_KM = 20; // Hasta 20 km cálculo automático; > 20 km "A consultar"

// Capacidad por bulto. UN umbral, dos formas de expresarlo:
//   STANDARD_WEIGHT_KG            → lo que entra sin recargo. Es el único número de
//                                   peso que va al copy y a las tarjetas de servicio.
//   STANDARD_BULLET_DIMENSIONS_CM → el mismo umbral en volumen.
//
// Sobrepasado el umbral, el bulto se coordina aparte y entra un recargo desde
// `BULK_EXTRA_FROM_ARS`, cuyo monto final depende del servicio. No entra en el
// cálculo automático del cotizador.
//
// SIN TECHO NUMÉRICO PUBLICADO, y es deliberado (decisión del dueño 2026-09-30).
// Existió una constante `MAX_WEIGHT_KG = 15` que ningún fuente del dueño respalda:
// el 15 kg venía solo del `.docx`, siempre como pregunta sin respuesta registrada
// o como aserción del propio `.docx` — la misma clase de número viejo que el
// dueño ya corrigió ahí ("60-90 min: ESTO ES FALSO"). Lo que el dueño sí
// respondió, textual, fue "todo lo que pueda ser llevado en moto" (CSV pregunta
// 4), sin cifra. Publicar un techo inventado además rompía el recargo por bulto
// extra: si el máximo fuera 5 kg, "más de 5 kg suma $1.800" sería imposible.
// Constante eliminada; el guard de `src/lib/copy-guard.test.ts` la bloquea.
export const STANDARD_WEIGHT_KG = 5;
export const STANDARD_BULLET_DIMENSIONS_CM = '40 × 40 × 30 cm';

// Condiciones comerciales Depósito & Fulfillment (servicio para empresas)
// No figuran en la tabla `PriceRange` ni en docs/contexto/precios.md: son tarifas
// cerradas definidas por el dueño. El 20 % de DropOFF quedó confirmado en el relevamiento
// del 2026-09-29; SAME_DAY_FIXED_PRICE se suma ese mismo día.
export const DROPOFF_DISCOUNT_PERCENT = 20; // Descuento por traer envíos listos al depósito
export const CONTRAREEMBOLSO_COMMISSION_PERCENT = 0; // Sin extra ni comisión por cobro en entrega

// Tarifa fija del plan E-Commerce Same Day para toda la ciudad. Fuera de `PriceRange`
// a propósito: es un precio cerrado por servicio, no un rango por distancia.
export const SAME_DAY_FIXED_PRICE = 6000;

// Tarifa fija E-Commerce 24HS (Next Day) — Confirmada por Matías 2026-09-29.
// Recolección gratis desde 10 envíos. DropOFF -20% solo en este servicio.
export const ECOMMERCE_24HS_PRICE = 3800;

/** Envíos/mes desde los cuales el retiro es gratis. */
export const ECOMMERCE_24HS_FREE_PICKUP_THRESHOLD = 10;

/**
 * Escala de planes E-Commerce 24HS. Vivían como literales dentro de
 * `Ecommerce24HSPricing.tsx`; se movieron acá para que haya una sola fuente,
 * como manda AGENTS.md.
 *
 * Procedencia: `Inicial` es `ECOMMERCE_24HS_PRICE`, confirmado de palabra por el
 * dueño el 2026-09-29. `Pro`, `Elite` y `Partner` salen de la escala que el
 * sitio ya publica; no hay confirmación verbal registrada para esos tres.
 * Si el dueño ajusta la escala, se corrige acá y en ningún otro lado.
 */
export const ECOMMERCE_24HS_PLANS = [
  { name: 'Inicial', fromEnvos: 1, toEnvios: 199, price: ECOMMERCE_24HS_PRICE, featured: false },
  { name: 'Pro', fromEnvos: 200, toEnvios: 1199, price: 3500, featured: true },
  { name: 'Elite', fromEnvos: 1200, toEnvios: 1999, price: 3200, featured: false },
  { name: 'Partner', fromEnvos: 2000, toEnvios: null, price: 3000, featured: false },
] as const;

/**
 * Planes de la landing de Emprendedores. Tarifas cerradas por plan, fuera de
 * `PriceRange`. El Plan Inicial DropOFF ya viene con el -20% aplicado sobre la
 * tarifa plana; el Plan PyME Corporativo no tiene cifra: se cotiza.
 */
export const EMPRENDEDORES_PLANS = [
  {
    name: 'Plan Inicial DropOFF',
    distance: 'Por envío en MDQ',
    price: 2400, // Tarifa base del Plan DropOFF. La consume también `DropoffCalculator`.
    period: '/ envío',
    tag: `DropOFF -${DROPOFF_DISCOUNT_PERCENT}%`,
    note: 'Traés tus paquetes listos a Friuli 1972 y el descuento se aplica solo.',
    featured: false,
  },
  {
    name: 'Plan E-Commerce 3PL',
    distance: 'Stock gratis',
    price: 3000,
    period: '/ envío + stock gratis',
    tag: 'Con depósito',
    note: 'Stock gratis en Friuli 1972 + picking QR + Same Day.',
    featured: true,
  },
  {
    name: 'Plan PyME Corporativo',
    distance: 'Volumen > 10 envíos/día',
    price: null,
    period: '',
    tag: 'Cuenta corriente',
    note: 'Para empresas con envíos diarios recurrentes. La tarifa se cotiza.',
    featured: false,
  },
] as const;

// Reglas de 2da visita / reintento por servicio (corrección dueño octubre 2026)
export const RETRY_RULES = {
  EXPRESS: { type: 'NEW_TRIP', description: 'Se cobra como viaje nuevo' },
  LOW_COST: { type: 'NEW_TRIP', description: 'Se cobra como viaje nuevo' },
  FLEX_NIVEL_1: { type: 'PERCENT', value: 50, description: '50% en todas las zonas' },
  FLEX_NIVEL_2: { type: 'ZONE_BASED', z1: 0, z2_to_z5: 50, description: 'Z1 gratis, Z2-Z5 50%' },
  FLEX_NIVEL_3: { type: 'FREE', description: '100% bonificada todas zonas' },
  DEPOSITO_3PL: { type: 'FREE', description: '100% bonificada' },
  ECOMMERCE_24HS: { type: 'FREE', description: '100% bonificada' },
  CUENTA_CORRIENTE: { type: 'PERCENT', value: 50, description: '50% del valor original' },
} as const;

// Horarios de atención oficiales en base central Friuli 1972 (Decisión 5 aprobada)
export const OPERATING_HOURS = {
  weekdays: '09:00 a 18:00 hs',
  saturdays: '10:00 a 15:00 hs',
  sundays: 'Cerrado',
} as const;

// Canales de contacto oficiales unificados (BL-19)
export const CONTACT_EMAIL = 'matiascejas@enviosdosruedas.com';
export const SUPPORT_PHONE = '+54 223 660-2699';
```

---

<a id="srccomponentscotizarunifiedcotizadorherotsx"></a>
## 5. `src/components/cotizar/unified/CotizadorHero.tsx`
* **Rol:** Componente de Sección
* **Archivo:** [`src/components/cotizar/unified/CotizadorHero.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/cotizar/unified/CotizadorHero.tsx)

```tsx
'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { GitCompareArrows, MapPin, MessageCircle } from 'lucide-react';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import CTANestedPill from '@/components/ui/CTANestedPill';
import Badge from '@/components/ui/Badge';

/**
 * Hero de la guía, no de un servicio. No vende Express ni LowCost: explica que
 * cargás un envío una vez y recibís las dos tarifas. La promesa es la del flujo.
 */
export default function CotizadorHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="cotizador-hero"
      className="relative w-full overflow-hidden bg-brand-blue-500 text-white min-h-auto lg:min-h-[52vh] flex items-center pt-20 pb-8 sm:pt-24 lg:pt-28 lg:pb-12 border-b border-white/10"
    >
      <HeroProceduralBackground variant="express" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <Badge
              variant="accent"
              size="lg"
              className="-rotate-1"
              icon={<GitCompareArrows className="h-4 w-4" />}
            >
              Dos servicios · Una sola carga
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] font-display uppercase tracking-tight leading-[0.92] text-white">
              <span>COTIZÁ TU </span>
              <span className="inline-block bg-brand-yellow-500 text-brand-blue-500 px-3 py-1 rounded-lg transform -rotate-1 shadow-glow-yellow mx-1">
                ENVÍO
              </span>
              <span className="block">Y COMPARÁ</span>
            </h1>

            <p className="text-base sm:text-lg font-sans text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Cargá el retiro y la entrega una sola vez. Te mostramos la tarifa Express y la
              LowCost para esa distancia exacta, y vos elegís cuál querés. Sin registro, sin
              llamadas, sin letra chica.
            </p>

            <div className="flex justify-center lg:justify-start pt-2">
              <CTANestedPill
                href="#cotizador-form"
                variant="primary"
                size="large"
                className="w-full sm:w-auto"
              >
                Cargar mi envío
              </CTANestedPill>
            </div>
          </motion.div>

          {/* El flujo en tres líneas: es la guía completa de la página, en miniatura. */}
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full max-w-lg mx-auto"
          >
            <div className="p-2.5 rounded-2xl bg-brand-blue-50/20 border border-brand-blue-100/40 shadow-2xl backdrop-blur-md">
              <div className="bg-brand-blue-500 rounded-xl border border-white/20 overflow-hidden divide-y divide-white/10">
                {[
                  { n: '01', icon: MapPin, t: 'Cargás retiro y entrega', s: 'Medimos la distancia real por calle' },
                  { n: '02', icon: GitCompareArrows, t: 'Ves las dos tarifas', s: 'Express y LowCost sobre la misma escala' },
                  { n: '03', icon: MessageCircle, t: 'Elegís y confirmás', s: 'Te llevamos el pedido por WhatsApp' },
                ].map((paso) => (
                  <div key={paso.n} className="flex items-center gap-4 p-4 sm:p-5">
                    <span className="font-mono text-xs text-brand-yellow-500 tabular-nums shrink-0">
                      {paso.n}
                    </span>
                    <paso.icon className="h-4 w-4 text-white/60 shrink-0" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block font-subheading text-sm uppercase tracking-wider text-white">
                        {paso.t}
                      </span>
                      <span className="block font-sans text-xs text-white/85 mt-0.5">{paso.s}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

---

<a id="srccomponentscotizarunifiedcotizadorunificadotsx"></a>
## 6. `src/components/cotizar/unified/CotizadorUnificado.tsx`
* **Rol:** Componente de Sección
* **Archivo:** [`src/components/cotizar/unified/CotizadorUnificado.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/cotizar/unified/CotizadorUnificado.tsx)

```tsx
'use client';

import React from 'react';
import { Calculator } from 'lucide-react';
import CotizadorForm from './CotizadorForm';
import CotizadorComparativa from './CotizadorComparativa';
import CotizadorMapa from './CotizadorMapa';
import CotizadorGuia from './CotizadorGuia';
import Badge from '@/components/ui/Badge';
import { useCotizadorUnificado } from '@/hooks/cotizador/useCotizadorUnified';

/**
 * Isla única del cotizador. Todo el estado vive acá: el formulario y la
 * comparación se mueven juntos.
 *
 * No hay cotización por lotes: LowCost es un reparto programado en el día, no un
 * precio por agrupar envíos de un mismo cliente (decisión del dueño 2026-09-29).
 */
export default function CotizadorUnificado() {
  const form = useCotizadorUnificado();

  return (
    <div className="space-y-8 lg:space-y-10">
      <CotizadorGuia />

      <section
        id="cotizador-form"
        aria-label="Cotizador de envíos"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch scroll-mt-20"
      >
        <article className="lg:col-span-7 flex flex-col rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-xl">
          <div className="bg-brand-blue-500 p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col h-full text-white relative overflow-hidden">
            <Calculator
              className="absolute -bottom-10 -right-10 w-64 h-64 text-white/4 pointer-events-none"
              aria-hidden="true"
            />

            <header className="relative z-10 mb-6">
              <Badge
                variant="outline"
                size="sm"
                className="border-brand-yellow-500/40 text-brand-yellow-500 -rotate-1"
              >
                Mar del Plata · Sin registro
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white mt-3">
                Contanos del envío
              </h2>
              <p className="text-white/90 text-sm font-sans mt-1 leading-relaxed">
                Con el origen y el destino alcanzamos el precio de los dos servicios.
              </p>
            </header>

            <CotizadorForm form={form} />

            <CotizadorComparativa form={form} error={form.error} />
          </div>
        </article>

        <CotizadorMapa form={form} />
      </section>

    </div>
  );
}
```

---

<a id="srccomponentscotizarunifiedcotizadorrecargostsx"></a>
## 7. `src/components/cotizar/unified/CotizadorRecargos.tsx`
* **Rol:** Componente de Sección
* **Archivo:** [`src/components/cotizar/unified/CotizadorRecargos.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/cotizar/unified/CotizadorRecargos.tsx)

```tsx
import React from 'react';
import {
  BULK_EXTRA_FROM_ARS,
  EXTRA_STOP_MAX_DETOUR_KM,
  EXTRA_STOP_SURCHARGE_PERCENT,
  PERIPHERY_PRICE_PER_KM,
  RAIN_SURCHARGE_PERCENT,
  RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST,
  RETRY_CHARGE_PERCENT,
  STANDARD_BULLET_DIMENSIONS_CM,
  STANDARD_WEIGHT_KG,
  WAIT_CHARGE_ARS,
  WAIT_CHARGE_BLOCK_MIN,
  WAIT_TOLERANCE_MIN,
} from '@/lib/promises';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

/**
 * Lo que el cotizador no suma solo. El precio de arriba es por distancia; estos
 * recargos dependen de lo que pase en el viaje, así que se informan antes de
 * confirmar en vez de aparecer después. Todos los valores salen de `promises.ts`.
 */
const RECARGOS: { situacion: string; costo: string; detalle: string }[] = [
  {
    situacion: 'Lluvia o calzada mojada',
    costo: `+${RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST} %`,
    detalle: `Sobre la tarifa Express o LowCost. En Flex y cuentas corrientes es ${RAIN_SURCHARGE_PERCENT} %.`,
  },
  {
    situacion: 'Espera en puerta',
    costo: `${formatArs(WAIT_CHARGE_ARS)} cada ${WAIT_CHARGE_BLOCK_MIN} min`,
    detalle: `Los primeros ${WAIT_TOLERANCE_MIN} minutos no se cobran. Corre desde el minuto ${WAIT_TOLERANCE_MIN + 1}.`,
  },
  {
    situacion: 'Parada extra en el camino',
    costo: `+${EXTRA_STOP_SURCHARGE_PERCENT} % por parada`,
    detalle: `Si la parada queda sobre la ruta, hasta ${EXTRA_STOP_MAX_DETOUR_KM} km. Si desvía más, es un envío aparte.`,
  },
  {
    situacion: 'Destinatario ausente',
    costo: `${RETRY_CHARGE_PERCENT} % del envío`,
    detalle: 'La segunda visita se cobra como un envío nuevo. En zonas cercanas, a veces la hacemos sin cargo.',
  },
  {
    situacion: `Bulto de más de ${STANDARD_WEIGHT_KG} kg o ${STANDARD_BULLET_DIMENSIONS_CM}`,
    costo: `Desde ${formatArs(BULK_EXTRA_FROM_ARS)}`,
    detalle: 'El monto final depende del servicio. Si el bulto excede ese tamaño, escribinos y lo coordinamos.',
  },
  {
    situacion: 'Destino fuera de la ciudad',
    costo: `${formatArs(PERIPHERY_PRICE_PER_KM)} por km de ruta`,
    detalle: 'Batán, Sierra de los Padres y otras localidades cercanas. Se cotiza por WhatsApp.',
  },
];

export default function CotizadorRecargos() {
  return (
    <section id="recargos" aria-labelledby="recargos-titulo" className="space-y-5 scroll-mt-24">
      <div className="space-y-2">
        <h2
          id="recargos-titulo"
          className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white"
        >
          Lo que puede sumar al precio
        </h2>
        <p className="font-sans text-white/90 leading-relaxed max-w-3xl text-sm sm:text-base">
          El cotizador calcula el viaje por distancia. Estas situaciones se cobran aparte,
          según lo que pase en el viaje.
        </p>
      </div>

      <dl className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md divide-y divide-white/10">
        {RECARGOS.map((recargo) => (
          <div
            key={recargo.situacion}
            className="grid gap-1 sm:grid-cols-12 sm:gap-6 px-4 sm:px-5 py-4"
          >
            <dt className="sm:col-span-4 font-subheading text-sm uppercase tracking-wider text-white">
              {recargo.situacion}
            </dt>
            <dd className="sm:col-span-3 font-mono text-sm font-bold text-brand-yellow-500 tabular-nums">
              {recargo.costo}
            </dd>
            <dd className="sm:col-span-5 font-sans text-sm text-white/85 leading-relaxed">
              {recargo.detalle}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
```

---

<a id="srclibpricingts"></a>
## 8. `src/lib/pricing.ts`
* **Rol:** Librería / Utilidad Local
* **Archivo:** [`src/lib/pricing.ts`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/lib/pricing.ts)

```tsx
/**
 * Funciones puras de cálculo de precios para los servicios de Envíos DosRuedas.
 * Al ser puras (sin dependencias de React ni I/O), son completamente testeables.
 */

export interface PriceRangeProp {
  id: number;
  serviceType: string;
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
  descripcion: string;
}

/** Tramo de tarifa fija: se aplica a distancias mayores que `minKm` y hasta `maxKm` inclusive. */
export interface PriceTier {
  minKm: number;
  maxKm: number;
  price: number;
}

/**
 * Tarifas oficiales 2026 (docs/contexto/precios.md). Son el fallback cuando `PriceRange`
 * está vacía y la única fuente para mostrar tarifas en la UI: no copiar estos valores a mano.
 */
export const EXPRESS_TIERS: readonly PriceTier[] = [
  { minKm: 0, maxKm: 3, price: 3700 },
  { minKm: 3, maxKm: 5, price: 4600 },
  { minKm: 5, maxKm: 7, price: 6100 },
  { minKm: 7, maxKm: 10, price: 8200 },
];
export const EXPRESS_PRICE_PER_KM = 1000;

export const LOW_COST_TIERS: readonly PriceTier[] = [
  { minKm: 0, maxKm: 3, price: 3000 },
  { minKm: 3, maxKm: 5, price: 4000 },
  { minKm: 5, maxKm: 7, price: 5300 },
  { minKm: 7, maxKm: 10, price: 7000 },
];
export const LOW_COST_PRICE_PER_KM = 700;

/**
 * Calcula precio: tramo fijo si distanceKm <= maxKm, sino distanceKm × pricePerKm (lineal).
 * NO usa Math.ceil — corrección dueño octubre 2026: precio por km lineal.
 * Redondea al entero más cercano para evitar problemas de punto flotante.
 */
function fallbackPrice(distanceKm: number, tiers: readonly PriceTier[], pricePerKm: number): number {
  const tier = tiers.find((t) => distanceKm <= t.maxKm);
  return tier ? tier.price : Math.round(distanceKm * pricePerKm);
}

/**
 * Calcula el precio del servicio Express para una distancia dada.
 *
 * Lógica de rangos (según BD):
 *   0–3 km  → $3.700
 *   3–5 km  → $4.600
 *   5–7 km  → $6.100
 *   7–10 km → $8.200
 *   +10 km  → distanceKm × $1.000  (km total × precio por km, LINEAL)
 *
 * @param distanceKm  Distancia en kilómetros (puede tener decimales).
 * @param priceRanges Rangos de precios obtenidos desde la base de datos.
 * @returns El precio en ARS o `'consultar'` si supera los 20 km.
 */
export function calculateExpressPrice(
  distanceKm: number,
  priceRanges: PriceRangeProp[]
): number | 'consultar' {
  if (distanceKm > 20) return 'consultar';

  const expressRanges = priceRanges.filter((r) => r.serviceType === 'EXPRESS');

  if (expressRanges.length > 0) {
    const matchingRange = expressRanges.find(
      (r) => (r.distanciaMinKm === 0 ? distanceKm >= r.distanciaMinKm : distanceKm > r.distanciaMinKm) && distanceKm <= r.distanciaMaxKm
    );

    if (matchingRange) {
      if (matchingRange.distanciaMaxKm === 9999) {
        // Rango extendido (+10 km): cantidad total de km × precio unitario por km (LINEAL)
        return Math.round(distanceKm * matchingRange.precioRango);
      }
      return matchingRange.precioRango;
    }
  } else {
    // Fallback cuando la tabla de precios de la BD está vacía — misma lógica de rangos
    return fallbackPrice(distanceKm, EXPRESS_TIERS, EXPRESS_PRICE_PER_KM);
  }

  return 'consultar';
}

/**
 * Calcula el precio del servicio LowCost para una distancia dada.
 *
 * Lógica de rangos (según BD):
 *   0–3 km  → $3.000
 *   3–5 km  → $4.000
 *   5–7 km  → $5.300
 *   7–10 km → $7.000
 *   +10 km  → distanceKm × $700  (km total × precio por km, LINEAL)
 *
 * @param distanceKm  Distancia en kilómetros (puede tener decimales).
 * @param priceRanges Rangos de precios obtenidos desde la base de datos.
 * @returns El precio en ARS o `'consultar'` si supera los 20 km.
 */
export function calculateLowCostPrice(
  distanceKm: number,
  priceRanges: PriceRangeProp[]
): number | 'consultar' {
  if (distanceKm > 20) return 'consultar';

  const lowCostRanges = priceRanges.filter((r) => r.serviceType === 'LOW_COST');

  if (lowCostRanges.length > 0) {
    const matchingRange = lowCostRanges.find(
      (r) => (r.distanciaMinKm === 0 ? distanceKm >= r.distanciaMinKm : distanceKm > r.distanciaMinKm) && distanceKm <= r.distanciaMaxKm
    );

    if (matchingRange) {
      if (matchingRange.distanciaMaxKm === 9999) {
        // Rango extendido (+10 km): cantidad total de km × precio unitario por km (LINEAL)
        return Math.round(distanceKm * matchingRange.precioRango);
      }
      return matchingRange.precioRango;
    }
  } else {
    // Fallback cuando la tabla de precios de la BD está vacía — misma lógica de rangos
    return fallbackPrice(distanceKm, LOW_COST_TIERS, LOW_COST_PRICE_PER_KM);
  }

  return 'consultar';
}
```

---

<a id="srccomponentslayoutoptimizedheadertsx"></a>
## 9. `src/components/layout/OptimizedHeader.tsx`
* **Rol:** Componente de Layout
* **Archivo:** [`src/components/layout/OptimizedHeader.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/layout/OptimizedHeader.tsx)

```tsx
'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'motion/react';
import {
  Menu, X, ChevronDown, Bike, ChevronRight, Phone,
  Home, Zap, TrendingDown, Clock, Info, HelpCircle, Share2, Mail,
  LayoutGrid, Building2, Package, Store, Search, UtensilsCrossed
} from 'lucide-react';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';

const PHONE_HREF = `tel:+${SUPPORT_PHONE.replace(/\D/g, '')}`;
const PHONE_DISPLAY_SHORT = SUPPORT_PHONE.replace(/^\+54\s*/, '');

const MobileNav = dynamic(() => import('./MobileNav'), { ssr: false });

export interface NavItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  dropdownItems?: { label: string; href: string; icon?: React.ComponentType<{ className?: string }> }[];
}

const EASE_MOUNT = { duration: 0.45, ease: [0.25, 0.8, 0.25, 1] } as const;

// NAV ITEMS - Static data, move outside component to avoid recreation on every render
const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/', icon: Home },
  {
    label: 'Servicios',
    icon: Bike,
    dropdownItems: [
      { label: 'Envíos Express', href: '/servicios/envios-express', icon: Zap },
      { label: 'Envíos LowCost', href: '/servicios/envios-lowcost', icon: TrendingDown },
      { label: 'Envíos Flex (MeLi)', href: '/servicios/enviosflex', icon: Clock },
      { label: 'Cuenta Corriente Flexible', href: '/servicios/empresas-cuenta-corriente', icon: Building2 },
      { label: 'E-commerce 24HS', href: '/servicios#ecommerce-24hs', icon: Package },
      { label: 'E-commerce Same Day', href: '/servicios/deposito-fulfillment', icon: Store },
    ],
  },
  {
    label: 'Plataformas',
    icon: LayoutGrid,
    dropdownItems: [
      { label: 'Logística DosRuedas', href: '/logistica-dosruedas', icon: Search },
      { label: 'MarDelivery Gastronomía', href: '/mardelivery', icon: UtensilsCrossed },
    ],
  },
  {
    label: 'Nosotros',
    icon: Info,
    dropdownItems: [
      { label: 'Sobre Nosotros', href: '/nosotros/sobre-nosotros', icon: Info },
      { label: 'Preguntas Frecuentes', href: '/nosotros/preguntas-frecuentes', icon: HelpCircle },
      { label: 'Nuestras Redes', href: '/nosotros/nuestras-redes', icon: Share2 },
    ],
  },
  { label: 'Contacto', href: '/contacto', icon: Mail },
];

export default function OptimizedHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const prevPathRef = useRef(pathname);

  // Memoize dropdown variants to avoid recreation on every render
  const dropdownContainer = useMemo<Variants>(() => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 4, scale: prefersReducedMotion ? 1 : 0.97 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: 'spring', stiffness: 420, damping: 28, staggerChildren: prefersReducedMotion ? 0 : 0.03, delayChildren: 0.01 },
    },
    exit: { opacity: 0, y: prefersReducedMotion ? 0 : 4, scale: prefersReducedMotion ? 1 : 0.97, transition: { duration: 0.14, ease: [0.23, 1, 0.32, 1] } },
  }), [prefersReducedMotion]);

  const dropdownItem = useMemo<Variants>(() => ({
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -8 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 400, damping: 28 } },
  }), [prefersReducedMotion]);

  const handleDropdownToggle = useCallback((label: string) => {
    setActiveDropdown(prev => (prev === label ? null : label));
  }, []);

  const handleCloseMobileNav = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FIX ESLINT react-hooks/set-state-in-effect: cierra drawer al cambiar ruta sin setState sincrónico en effect
  // Usamos ref + async microtask para no ser sincrónico
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      // Solo si está abierto, lo cerramos en próximo tick (no sincrónico)
      if (isOpen || activeDropdown) {
        const id = setTimeout(() => {
          setIsOpen(false);
          setActiveDropdown(null);
        }, 0);
        return () => clearTimeout(id);
      }
    }
  }, [pathname, isOpen, activeDropdown]);

  // Cerrar desplegable desktop con Escape
  useEffect(() => {
    if (!activeDropdown) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDropdown]);

  // Lock scroll robusto
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  return (
    <>
      <header
        id="optimized-header"
        className={`fixed top-0 left-0 right-0 z-50 w-full text-white transition-[background-color,border-color,box-shadow,padding] duration-300 ${scrolled ? 'bg-brand-blue-500/95 shadow-elevated border-b border-white/10 py-2.5 backdrop-blur-md' : 'bg-brand-blue-500 py-4 border-b border-transparent'
          }`}
      >
        <motion.div initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={EASE_MOUNT} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" id="nav-logo-opt" aria-current={pathname === '/' ? 'page' : undefined} className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 rounded-xl">
              <div className="flex items-center gap-2.5">
                <motion.div className="relative w-10 h-10 shrink-0" whileHover={prefersReducedMotion ? {} : { rotate: 8, scale: 1.04 }} whileTap={prefersReducedMotion ? {} : { scale: 0.97 }} transition={{ type: 'spring', duration: 0.22, bounce: 0.15 }}>
                  <Image
                    src="/logo-envios-simplified.webp"
                    alt="Logo Envíos Dos Ruedas"
                    fill
                    sizes="40px"
                    className="object-contain"
                    priority
                  />
                </motion.div>
                <span className="font-display text-2xl sm:text-3xl tracking-tight leading-none uppercase select-none flex flex-col sm:flex-row sm:gap-1 items-start sm:items-center">
                  <span className="text-white kinetic-font-stretch">Envíos</span>
                  <span className="text-brand-yellow-500 kinetic-font-stretch">DosRuedas</span>
                </span>
              </div>
            </Link>

            <nav id="desktop-nav-opt" aria-label="Navegación principal" className="hidden lg:flex items-center gap-2">
              {NAV_ITEMS.map((item) => {
                const isDirectActive = item.href ? pathname === item.href : false;
                const isGroupActive = item.dropdownItems
                  ? item.dropdownItems.some((sub) => pathname === sub.href.split('#')[0] && sub.href !== '/servicios#ecommerce-24hs')
                  : false;

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.dropdownItems && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                        setActiveDropdown((prev) => (prev === item.label ? null : prev));
                      }
                    }}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        aria-current={isDirectActive ? 'page' : undefined}
                        className={`px-4 py-2 rounded-xl text-base font-subheading uppercase tracking-wider transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 ${isDirectActive
                            ? 'text-brand-yellow-500 bg-black/20 border-brand-yellow-500/30'
                            : 'text-white border-transparent hover:text-brand-yellow-500 hover:bg-black/15'
                          }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleDropdownToggle(item.label)}
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === item.label}
                        className={`px-4 py-2 rounded-xl text-base font-subheading uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 ${isGroupActive
                            ? 'text-brand-yellow-500 bg-black/20 border-brand-yellow-500/30'
                            : 'text-white border-transparent hover:text-brand-yellow-500 hover:bg-black/15'
                          }`}
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>
                    )}
                    <AnimatePresence>
                      {item.dropdownItems && activeDropdown === item.label && (
                        <motion.div
                          variants={dropdownContainer}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          style={{ transformOrigin: 'top left' }}
                          className="absolute left-0 pt-2 w-64 z-50"
                        >
                          <div className="bg-brand-blue-500 rounded-2xl shadow-2xl border border-white/15 py-2.5 text-white overflow-hidden">
                            <div className="flex flex-col gap-1 px-2">
                              {item.dropdownItems.map((subItem) => {
                                const SubIcon = subItem.icon || ChevronRight;
                                const isSubActive = pathname === subItem.href;
                                return (
                                  <motion.div key={subItem.href} variants={dropdownItem}>
                                    <Link
                                      href={subItem.href}
                                      aria-current={isSubActive ? 'page' : undefined}
                                      className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 border ${isSubActive
                                          ? 'text-brand-yellow-500 bg-black/20 border-brand-yellow-500/30'
                                          : 'text-white border-transparent hover:text-brand-yellow-500 hover:bg-black/15'
                                        }`}
                                    >
                                      <div
                                        className={`p-1.5 rounded-lg transition-colors shrink-0 ${isSubActive
                                            ? 'bg-brand-yellow-500 text-brand-blue-500'
                                            : 'bg-white/10 text-brand-blue-50 group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-500'
                                          }`}
                                        aria-hidden="true"
                                      >
                                        <SubIcon className="h-4 w-4" />
                                      </div>
                                      <span className="text-base font-bold uppercase font-subheading tracking-wider leading-none">{subItem.label}</span>
                                    </Link>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-5">
              <a
                href={PHONE_HREF}
                onClick={() => trackAnalytics.phoneClick(SUPPORT_PHONE, 'header_desktop')}
                className="flex items-center gap-2 text-white hover:text-brand-yellow-500 transition-colors font-mono text-base font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 rounded-lg px-1"
              >
                <Phone className="h-4 w-4 text-brand-yellow-500" aria-hidden="true" />
                <span>{PHONE_DISPLAY_SHORT}</span>
              </a>
              <div className="relative">
                {!(pathname === '/' || pathname.startsWith('/servicios') || pathname.startsWith('/cotizar')) && !prefersReducedMotion && (
                  <motion.span className="absolute inset-0 rounded-full bg-brand-yellow-500/25 pointer-events-none" animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }} />
                )}
                <CTANestedPill
                  id="header_cta"
                  href="/cotizar"
                  variant={(pathname === '/' || pathname.startsWith('/servicios') || pathname.startsWith('/cotizar')) ? 'outline' : 'primary'}
                  size="default"
                  className={
                    (pathname === '/' || pathname.startsWith('/servicios') || pathname.startsWith('/cotizar'))
                      ? 'border-white/40 text-white hover:bg-white/10 hover:border-white focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-brand-blue-500'
                      : ''
                  }
                  iconClassName={
                    (pathname === '/' || pathname.startsWith('/servicios') || pathname.startsWith('/cotizar'))
                      ? 'text-brand-yellow-500 group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-500'
                      : undefined
                  }
                >
                  Cotizá tu envío
                </CTANestedPill>
              </div>
            </div>

            <div className="lg:hidden flex items-center gap-3">
              <a
                href={PHONE_HREF}
                onClick={() => trackAnalytics.phoneClick(SUPPORT_PHONE, 'header_mobile')}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 transition-all min-w-11 min-h-11 flex items-center justify-center"
                aria-label="Llamar"
              >
                <Phone className="h-5 w-5 text-brand-yellow-500" aria-hidden="true" />
              </a>
              <button onClick={() => setIsOpen(!isOpen)} id="mobile-menu-toggle-opt" className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 transition-all cursor-pointer min-w-11 min-h-11 flex items-center justify-center" aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={isOpen} aria-controls="mobile-navigation-dialog">
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.span key="close" initial={prefersReducedMotion ? false : { rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={prefersReducedMotion ? {} : { rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}><X className="h-6 w-6" /></motion.span>
                  ) : (
                    <motion.span key="menu" initial={prefersReducedMotion ? false : { rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={prefersReducedMotion ? {} : { rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}><Menu className="h-6 w-6" /></motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>{isOpen && <MobileNav isOpen={isOpen} onClose={handleCloseMobileNav} navItems={NAV_ITEMS} activeDropdown={activeDropdown} onDropdownToggle={handleDropdownToggle} />}</AnimatePresence>
    </>
  );
}
```

---

<a id="srccomponentslayoutoptimizedfootertsx"></a>
## 10. `src/components/layout/OptimizedFooter.tsx`
* **Rol:** Componente de Layout
* **Archivo:** [`src/components/layout/OptimizedFooter.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/layout/OptimizedFooter.tsx)

```tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import {
  Phone, MapPin, Mail, Clock, ShieldCheck, ArrowUpRight,
  Zap, TrendingDown, ArrowUp, Layers, Building2, Package, Store
} from 'lucide-react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { CONTACT_EMAIL, OPERATING_HOURS, SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';

const PHONE_HREF = `tel:+${SUPPORT_PHONE.replace(/\D/g, '')}`;
const WHATSAPP_NUMBER = SUPPORT_PHONE.replace(/\D/g, '');
const CURRENT_YEAR = new Date().getFullYear();

// ─── Animation Variants ───────────────────────────────────────────────────────

/** Fade-up stagger container for footer columns */
const FOOTER_CONTAINER = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
} as const;

/** Each column fades up */
const FOOTER_COL = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 360, damping: 28 },
  },
} as const;

/** CTA Banner slides up from below */
const BANNER_VARIANT = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 360, damping: 28, delay: 0.08 },
  },
} as const;

/** Social icon spring bounce on hover */
const SOCIAL_HOVER = { y: -2, scale: 1.04 } as const;
const SOCIAL_SPRING = { type: 'spring', stiffness: 420, damping: 26 } as const;

export default function OptimizedFooter() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="optimized-footer"
      className="bg-brand-blue-500 text-white border-t border-white/10 relative overflow-hidden font-sans"
    >
      {/* Decorative top yellow accent bar with continuous glow */}
      <div className="h-1.5 bg-brand-yellow-500 w-full shadow-md shadow-brand-yellow-500/30" />

      {/* Atmospheric Background & Subtle Blueprint Grid Details */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,236,1,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(9,80,246,0.5),transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">

        {/* TOP CTA BANNER — slides up from below on scroll reveal */}
        <motion.div
          variants={prefersReducedMotion ? {} : BANNER_VARIANT}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-14 rounded-2xl bg-brand-blue/90 border border-white/15 p-6 sm:p-8 backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/30 text-brand-yellow-500 text-xs font-subheading uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-yellow-500 animate-ping motion-reduce:animate-none" />
              Operaciones Activas Mar del Plata {CURRENT_YEAR}
            </div>
            <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white">
              ¿Tenés envíos para hoy? <span className="text-brand-yellow-500">Los entregamos a tiempo.</span>
            </h3>
            <p className="text-sm text-brand-blue-50 font-light max-w-xl">
              Cotizá online en segundos o coordiná directo con nuestro equipo logístico por WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/cotizar"
              onClick={() => trackAnalytics.ctaClick('footer_banner_cotizar_cta', 'Cotizá tu Envío')}
              className="w-full sm:w-auto cta-nested-pill bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading uppercase tracking-wider text-sm px-6 py-3.5 rounded-full shadow-accent-sm hover:shadow-cta-glow transition-[transform,background-color,border-color,box-shadow] duration-150 ease-out flex items-center justify-between group min-h-12"
            >
              <span>Cotizá tu Envío</span>
              <span className="cta-nested-icon bg-brand-blue-500/10 text-brand-blue-500 h-7 w-7 rounded-full flex items-center justify-center shrink-0 ml-3 group-hover:translate-x-1 transition-transform duration-150 ease-out">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>

            <a
              href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=Hola%20Envíos%20DosRuedas!%20Quiero%20hacer%20una%20consulta%20de%20envíos`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalytics.whatsappClick('footer_banner_whatsapp', 'Chateá con Nosotros')}
              aria-label="Chateá con Nosotros por WhatsApp para consultas de envíos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-subheading uppercase tracking-wider text-sm px-5 py-3.5 rounded-full transition-[background-color,border-color] duration-150 ease-out min-h-12"
            >
              <FaWhatsapp className="h-4 w-4 text-brand-yellow-500" aria-hidden="true" />
              <span>Chateá con Nosotros</span>
            </a>
          </div>
        </motion.div>

        {/* MID SECTION: fade-up stagger per column on scroll reveal */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
          variants={prefersReducedMotion ? {} : FOOTER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >

          {/* COLUMN 1: Brand details & Socials (4 Cols) */}
          <motion.div
            variants={prefersReducedMotion ? {} : FOOTER_COL}
            className="lg:col-span-4 space-y-6"
          >
            <Link href="/" className="flex items-center gap-3.5 group w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 rounded-xl">
              <div className="relative w-11 h-11 bg-white/10 p-1.5 rounded-xl border border-white/15 group-hover:scale-105 transition-transform duration-300 shrink-0 flex items-center justify-center">
                <Image
                  src="/logo-envios-simplified.webp"
                  alt="Logo Envíos DosRuedas"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-2xl sm:text-3xl tracking-tight uppercase select-none text-white">
                  Envíos <span className="text-brand-yellow-500">DosRuedas</span>
                </span>
                <span className="text-2xs font-mono text-brand-blue-50 tracking-widest uppercase mt-0.5 opacity-90">
                  Tu solución confiable · Mar del Plata
                </span>
              </div>
            </Link>

            <p className="text-brand-blue-50 text-sm leading-relaxed max-w-sm font-light">
              Con más de 7 años de trayectoria en Mar del Plata, transformamos el despacho de tus productos en un motor de crecimiento para emprendedores, PyMEs y comercios locales con flota propia y compromiso humano.
            </p>

            <div className="space-y-3 pt-2">
              <span className="block text-xs font-bold text-brand-yellow-500 uppercase tracking-widest font-subheading">
                Canales Oficiales
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {/* Instagram — spring bounce */}
                <motion.div
                  whileHover={prefersReducedMotion ? {} : SOCIAL_HOVER}
                  transition={SOCIAL_SPRING}
                  className="inline-block"
                >
                  <Link
                    href="/nosotros/nuestras-redes"
                    className="h-10 w-10 rounded-xl bg-white/10 hover:bg-brand-yellow-500 text-white hover:text-brand-blue-500 flex items-center justify-center transition-colors duration-200 border border-white/15 hover:border-brand-yellow-500 shadow-sm p-2.5 group cursor-pointer"
                    title="Instagram @enviosdosruedas"
                    aria-label="Instagram Oficial"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </Link>
                </motion.div>

                {/* Facebook — spring bounce */}
                <motion.div
                  whileHover={prefersReducedMotion ? {} : SOCIAL_HOVER}
                  transition={SOCIAL_SPRING}
                  className="inline-block"
                >
                  <Link
                    href="/nosotros/nuestras-redes"
                    className="h-10 w-10 rounded-xl bg-white/10 hover:bg-brand-yellow-500 text-white hover:text-brand-blue-500 flex items-center justify-center transition-colors duration-200 border border-white/15 hover:border-brand-yellow-500 shadow-sm p-2.5 group cursor-pointer"
                    title="Facebook Envíos DosRuedas"
                    aria-label="Facebook Oficial"
                  >
                    <FaFacebook className="h-5 w-5" />
                  </Link>
                </motion.div>

                {/* WhatsApp — spring bounce */}
                <motion.div
                  whileHover={prefersReducedMotion ? {} : SOCIAL_HOVER}
                  transition={SOCIAL_SPRING}
                  className="inline-block"
                >
                  <a
                    href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAnalytics.whatsappClick('footer_social_whatsapp', 'WhatsApp Directo')}
                    className="h-10 w-10 rounded-xl bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 flex items-center justify-center transition-colors duration-200 border border-brand-yellow-500 hover:border-brand-yellow-400 shadow-accent-sm hover:shadow-cta-glow p-2.5 group cursor-pointer"
                    title="WhatsApp Directo"
                    aria-label="WhatsApp Directo"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                  </a>
                </motion.div>

                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-white font-mono shadow-inner">
                  <ShieldCheck className="h-4 w-4 text-brand-yellow-500 shrink-0" />
                  <span>Centro de Depósito y Logística Local · Friuli 1972</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: Services & Tools */}
          <motion.div
            variants={prefersReducedMotion ? {} : FOOTER_COL}
            className="lg:col-span-4 space-y-5"
          >
            <h4 className="font-subheading text-lg tracking-wider text-brand-yellow-500 uppercase border-b border-white/10 pb-2 flex items-center gap-2">
              <span>Servicios y Plataformas</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {/* Grupo Plataformas y Cotizador */}
              <div>
                <p className="text-2xs text-brand-blue-50/70 uppercase tracking-widest font-subheading mb-2.5">
                  Cotizador y Portales
                </p>
                <ul className="space-y-2.5 text-sm font-sans">
                  <li>
                    <Link
                      href="/cotizar"
                      className="text-brand-blue-50 hover:text-brand-yellow-500 flex items-center justify-between group transition-[color,transform] duration-200 ease-out hover:translate-x-1"
                    >
                      <div className="flex items-center gap-2.5">
                        <Zap className="h-4 w-4 text-brand-yellow-500 shrink-0" />
                        <span>Cotizá Express o LowCost</span>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out text-brand-yellow-500" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/logistica-dosruedas"
                      className="text-brand-blue-50 hover:text-brand-yellow-500 flex items-center justify-between group transition-[color,transform] duration-200 ease-out hover:translate-x-1"
                    >
                      <div className="flex items-center gap-2.5">
                        <Package className="h-4 w-4 text-brand-yellow-500 shrink-0" />
                        <span>Logística DosRuedas (Rastreo)</span>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out text-brand-yellow-500" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mardelivery"
                      className="text-brand-blue-50 hover:text-brand-yellow-500 flex items-center justify-between group transition-[color,transform] duration-200 ease-out hover:translate-x-1"
                    >
                      <div className="flex items-center gap-2.5">
                        <Store className="h-4 w-4 text-brand-yellow-500 shrink-0" />
                        <span>MarDelivery (Gastronomía)</span>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out text-brand-yellow-500" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Grupo Servicios y Planes */}
              <div>
                <p className="text-2xs text-brand-blue-50/70 uppercase tracking-widest font-subheading mb-2.5">
                  Servicios y planes
                </p>
                <ul className="space-y-2.5 text-sm font-sans">
                  <li>
                    <Link
                      href="/servicios/envios-express"
                      className="text-brand-blue-50 hover:text-brand-yellow-500 flex items-center gap-2.5 transition-[color,transform] duration-200 ease-out hover:translate-x-1"
                    >
                      <Zap className="h-4 w-4 text-brand-yellow-500 shrink-0" />
                      <span>Envíos Express</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/envios-lowcost"
                      className="text-brand-blue-50 hover:text-brand-yellow-500 flex items-center gap-2.5 transition-[color,transform] duration-200 ease-out hover:translate-x-1"
                    >
                      <TrendingDown className="h-4 w-4 text-brand-yellow-500 shrink-0" />
                      <span>Envíos LowCost</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/enviosflex"
                      className="text-brand-blue-50 hover:text-brand-yellow-500 flex items-center gap-2.5 transition-[color,transform] duration-200 ease-out hover:translate-x-1"
                    >
                      <Clock className="h-4 w-4 text-brand-yellow-500 shrink-0" />
                      <span>Mercado Envíos Flex</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/empresas-cuenta-corriente"
                      className="text-brand-blue-50 hover:text-brand-yellow-500 flex items-center gap-2.5 transition-[color,transform] duration-200 ease-out hover:translate-x-1"
                    >
                      <Building2 className="h-4 w-4 text-brand-yellow-500 shrink-0" />
                      <span>Cuenta Corriente Flexible</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios#ecommerce-24hs"
                      className="text-brand-blue-50 hover:text-brand-yellow-500 flex items-center gap-2.5 transition-[color,transform] duration-200 ease-out hover:translate-x-1"
                    >
                      <Package className="h-4 w-4 text-brand-yellow-500 shrink-0" />
                      <span>E-commerce 24HS</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/deposito-fulfillment"
                      className="text-brand-blue-50 hover:text-brand-yellow-500 flex items-center gap-2.5 transition-[color,transform] duration-200 ease-out hover:translate-x-1"
                    >
                      <Store className="h-4 w-4 text-brand-yellow-500 shrink-0" />
                      <span>E-commerce Same Day</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios"
                      className="text-brand-yellow-500 hover:text-brand-yellow-400 flex items-center gap-2.5 transition-[color,transform] duration-200 ease-out hover:translate-x-1 font-bold"
                    >
                      <Layers className="h-4 w-4 shrink-0" />
                      <span>Ver todos los servicios</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 3: Contact & Hub Operations Info (4 Cols) */}
          <motion.div
            variants={prefersReducedMotion ? {} : FOOTER_COL}
            className="lg:col-span-4 space-y-5"
          >
            <h4 className="font-subheading text-lg tracking-wider text-brand-yellow-500 uppercase border-b border-white/10 pb-2">
              Base de Operaciones MDQ
            </h4>

            <div className="space-y-3.5 text-xs text-brand-blue-50 font-sans">
              <div className="flex gap-3 items-start bg-brand-blue/80 p-3 rounded-xl border border-white/15">
                <div className="p-2 bg-white/10 rounded-lg shrink-0 text-brand-yellow-500">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase font-subheading tracking-wider">Centro de Distribución</p>
                  <p className="font-sans text-[13px] text-brand-blue-50 mt-0.5">Friuli 1972, Mar del Plata</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-brand-blue/80 p-3 rounded-xl border border-white/15">
                <div className="p-2 bg-white/10 rounded-lg shrink-0 text-brand-yellow-500">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase font-subheading tracking-wider">Línea Directa y WhatsApp</p>
                  <a
                    href={PHONE_HREF}
                    onClick={() => trackAnalytics.phoneClick(SUPPORT_PHONE, 'footer')}
                    className="font-mono text-[13px] font-bold text-brand-yellow-500 hover:underline block mt-0.5"
                  >
                    {SUPPORT_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-brand-blue/80 p-3 rounded-xl border border-white/15">
                <div className="p-2 bg-white/10 rounded-lg shrink-0 text-brand-yellow-500">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase font-subheading tracking-wider">Atención Comercial</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-sans text-[12px] text-brand-blue-50 hover:text-brand-yellow-500 transition-colors block mt-0.5 break-all">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-brand-blue/80 p-3 rounded-xl border border-white/15">
                <div className="p-2 bg-white/10 rounded-lg shrink-0 text-brand-yellow-500">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-white uppercase font-subheading tracking-wider">Horarios de Despacho (Base Central)</p>
                  <div className="text-[12px] font-sans text-brand-blue-50 space-y-0.5">
                    <div className="flex justify-between items-center gap-4">
                      <span>Lunes a Viernes:</span>
                      <span className="font-mono font-bold text-brand-yellow-500">{OPERATING_HOURS.weekdays}</span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                      <span>Sábados:</span>
                      <span className="font-mono font-bold text-brand-yellow-500">{OPERATING_HOURS.saturdays}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Separator */}
        <div className="border-t border-white/10 my-10 relative">
          {/* Scroll to Top — continuous float loop */}
          <motion.button
            onClick={scrollToTop}
            className="absolute -top-5 right-4 sm:right-6 bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 p-2.5 rounded-full shadow-accent-md hover:shadow-cta-glow transition-colors flex items-center justify-center border-2 border-brand-yellow-500 cursor-pointer min-w-11 min-h-11"
            title="Volver al inicio"
            aria-label="Volver arriba"
            /* Idle float loop */
            animate={prefersReducedMotion ? {} : { y: [0, -5, 0] }}
            transition={
              prefersReducedMotion
                ? {}
                : { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' }
            }
            /* Tap feedback */
            whileTap={{ scale: 0.97 }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -4 }}
          >
            <ArrowUp className="h-4 w-4 font-bold" aria-hidden="true" />
          </motion.button>
        </div>

        {/* BOTTOM SECTION: Legal & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-brand-blue-50 font-sans">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6">
            <p className="font-medium text-white">© {CURRENT_YEAR} Envíos DosRuedas · Mar del Plata, Argentina.</p>
            <Link href="/servicios" className="hover:text-brand-yellow-500 transition-colors text-brand-blue-50">
              Servicios
            </Link>
            <Link href="/cobertura" className="hover:text-brand-yellow-500 transition-colors text-brand-blue-50">
              Cobertura
            </Link>
            <Link href="/logistica-dosruedas" className="hover:text-brand-yellow-500 transition-colors text-brand-blue-50">
              Logística DosRuedas
            </Link>
            <Link href="/mardelivery" className="hover:text-brand-yellow-500 transition-colors text-brand-blue-50">
              MarDelivery
            </Link>
            <Link href="/guias/envios-flex-mar-del-plata" className="hover:text-brand-yellow-500 transition-colors text-brand-blue-50">
              Guía MercadoLibre Flex
            </Link>
            <Link href="/nosotros" className="hover:text-brand-yellow-500 transition-colors text-brand-blue-50">
              Nosotros
            </Link>
            <Link href="/nosotros/sobre-nosotros" className="hover:text-brand-yellow-500 transition-colors text-brand-blue-50">
              Sobre Nosotros
            </Link>
            <Link href="/nosotros/preguntas-frecuentes" className="hover:text-brand-yellow-500 transition-colors text-brand-blue-50">
              Preguntas Frecuentes
            </Link>
            <Link href="/nosotros/nuestras-redes" className="hover:text-brand-yellow-500 transition-colors text-brand-blue-50">
              Nuestras Redes
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 shrink-0 text-brand-blue-50">
            <Link href="/terminos-y-condiciones" className="hover:text-brand-yellow-500 transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/politica-de-privacidad" className="hover:text-brand-yellow-500 transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
```

---

<a id="srclibanalyticsts"></a>
## 11. `src/lib/analytics.ts`
* **Rol:** Librería / Utilidad Local
* **Archivo:** [`src/lib/analytics.ts`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/lib/analytics.ts)

```tsx
/**
 * Utilidades de analítica para Google Analytics 4 (GA4) y persistencia de UTMs.
 * Conforme a BL-25 (CAMP-01, CAMP-02, CAMP-03, CAMP-05).
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: 'event' | 'config' | 'set' | 'js',
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

const UTM_STORAGE_KEY = 'envios_dosruedas_utms';

/**
 * Captura y persiste parámetros UTM de la URL en sessionStorage
 */
export function captureAndPersistUtms(): UtmParams {
  if (typeof window === 'undefined') return {};

  try {
    const searchParams = new URLSearchParams(window.location.search);
    const utms: UtmParams = {};

    const utmKeys: (keyof UtmParams)[] = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_content',
      'utm_term',
    ];

    let hasUtm = false;
    utmKeys.forEach((key) => {
      const val = searchParams.get(key);
      if (val) {
        utms[key] = val;
        hasUtm = true;
      }
    });

    if (hasUtm) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utms));
      return utms;
    }

    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as UtmParams;
    }
  } catch {
    // SessionStorage inaccesible o en modo privado
  }

  return {};
}

/**
 * Obtiene los UTMs persistidos
 */
export function getStoredUtms(): UtmParams {
  if (typeof window === 'undefined') return {};
  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as UtmParams) : {};
  } catch {
    return {};
  }
}

/**
 * Envía un evento a GA4 verificando disponibilidad de window.gtag (con cola segura en dataLayer si carga en lazyOnload)
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  try {
    const utms = getStoredUtms();
    const payload = {
      ...params,
      ...utms,
      page_path: window.location.pathname,
    };

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, payload);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(['event', eventName, payload]);
    }
  } catch {
    // No bloquear el flujo de usuario si falla el script de analítica
  }
}

export const trackAnalytics = {
  /** `dual` = cotizador unificado de /cotizar, que devuelve las dos tarifas de una vez. */
  quoteStart: (service: 'dual' | 'express' | 'lowcost') => {
    trackEvent('quote_start', { service });
  },
  quoteComplete: (data: {
    service: 'express' | 'lowcost';
    distanceKm: number;
    priceArs: number | 'consultar';
    result: 'price' | 'consultar';
    stops?: number;
  }) => {
    trackEvent('quote_complete', {
      service: data.service,
      distance_km: data.distanceKm,
      price_ars: data.priceArs === 'consultar' ? 0 : data.priceArs,
      result: data.result,
      stops: data.stops ?? 1,
    });
  },
  whatsappClick: (placement: string, customText?: string) => {
    trackEvent('whatsapp_click', {
      placement,
      button_text: customText ?? 'whatsapp',
    });
  },
  phoneClick: (phoneNumber: string, placement: string) => {
    trackEvent('phone_click', {
      phone_number: phoneNumber,
      placement,
    });
  },
  formSubmit: (formName: string) => {
    trackEvent('form_submit', { form_name: formName });
  },
  ctaClick: (ctaId: string, label: string) => {
    trackEvent('cta_click', { cta_id: ctaId, label });
  },
};
```

---

<a id="srccomponentslayoutcarruselredestsx"></a>
## 12. `src/components/layout/CarruselRedes.tsx`
* **Rol:** Componente de Layout
* **Archivo:** [`src/components/layout/CarruselRedes.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/layout/CarruselRedes.tsx)

```tsx
'use client';

import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';

const WHATSAPP_NUMBER = SUPPORT_PHONE.replace(/\D/g, '');

const GRID_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const CARD_VARIANTS: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CarruselRedes() {
  const prefersReducedMotion = useReducedMotion();

  const networks = [
    {
      id: 'facebook',
      name: 'FACEBOOK',
      handle: 'Envíos DosRuedas',
      desc: 'Seguí nuestro día a día, novedades operativas y la comunidad comercial en Mar del Plata.',
      action: 'SEGUIR COMUNIDAD',
      url: 'https://www.facebook.com/share/1RnSzyweir/',
      icon: FaFacebook,
      badgeText: 'FACEBOOK OFICIAL',
      // Identidad oficial Facebook: azul #0866FF / #1877F2, badge e icono en blanco, marca de agua en blanco 10%
      cardBg: 'bg-[#0866FF] hover:bg-[#1877F2]',
      outerBorder: 'border border-[#1877F2]/50 hover:border-[#1877F2] bg-brand-blue/80 backdrop-blur-md shadow-xl',
      innerBorder: 'border-white/15',
      badgeBg: 'bg-white text-[#0866FF] border-white font-bold shadow-xs',
      iconBoxBg: 'bg-white text-[#0866FF] shadow-lg shadow-[#0866FF]/30',
      titleColor: 'text-white',
      handleColor: 'text-white/90',
      descColor: 'text-white/90',
      watermarkColor: 'text-white/10 group-hover:text-white/20',
      btnBg: 'bg-white hover:bg-white/90 text-[#0866FF] font-bold shadow-md shadow-[#0866FF]/20',
      btnIconBg: 'bg-[#0866FF]/15 text-[#0866FF]',
      glow: 'from-[#1877F2]/30 to-transparent',
    },
    {
      id: 'instagram',
      name: 'INSTAGRAM',
      handle: '@enviosdosruedas',
      desc: 'Mirá el detrás de escena de nuestros riders y la flota recorriendo las calles de MDQ.',
      action: 'VER CONTENIDO',
      url: 'https://www.instagram.com/enviosdosruedas/',
      icon: FaInstagram,
      badgeText: 'INSTAGRAM MDQ',
      // Identidad oficial Instagram: fondo y borde con degradado oficial #833AB4 → #E1306C → #FD1D1D → #F77737
      cardBg: 'bg-gradient-to-br from-[#833AB4] via-[#E1306C] via-[#FD1D1D] to-[#F77737]',
      outerBorder: 'p-[2px] bg-gradient-to-br from-[#833AB4] via-[#E1306C] via-[#FD1D1D] to-[#F77737] shadow-xl',
      innerBorder: 'border-white/20',
      badgeBg: 'bg-white text-[#E1306C] border-white font-bold shadow-xs',
      iconBoxBg: 'bg-white text-[#E1306C] shadow-lg shadow-[#FD1D1D]/30',
      titleColor: 'text-white',
      handleColor: 'text-white/90',
      descColor: 'text-white/90',
      watermarkColor: 'text-white/10 group-hover:text-white/20',
      btnBg: 'bg-white hover:bg-white/90 text-[#E1306C] font-bold shadow-md shadow-[#FD1D1D]/30',
      btnIconBg: 'bg-[#E1306C]/15 text-[#E1306C]',
      glow: 'from-[#FD1D1D]/30 to-transparent',
    },
    {
      id: 'whatsapp',
      name: 'WHATSAPP',
      handle: SUPPORT_PHONE,
      desc: 'Escribinos directamente para consultas, contrataciones o soporte express al toque.',
      action: 'INICIAR CHAT',
      url: `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}`,
      icon: FaWhatsapp,
      badgeText: 'WHATSAPP DIRECTO',
      // Identidad oficial WhatsApp: verde corporativo #128C7E / #25D366 con textos en blanco para máxima legibilidad
      cardBg: 'bg-[#128C7E] hover:bg-[#0e7468]',
      outerBorder: 'border border-[#25D366]/50 hover:border-[#25D366] bg-brand-blue/80 backdrop-blur-md shadow-xl',
      innerBorder: 'border-white/15',
      badgeBg: 'bg-white text-[#128C7E] border-white font-bold shadow-xs',
      iconBoxBg: 'bg-white text-[#128C7E] shadow-lg shadow-[#128C7E]/40',
      titleColor: 'text-white',
      handleColor: 'text-white/90',
      descColor: 'text-white/90',
      watermarkColor: 'text-white/10 group-hover:text-white/20',
      btnBg: 'bg-white hover:bg-white/90 text-[#128C7E] font-bold shadow-md shadow-[#128C7E]/30',
      btnIconBg: 'bg-[#128C7E]/15 text-[#128C7E]',
      glow: 'from-[#25D366]/30 to-transparent',
    },
  ];

  return (
    <section
      id="carrusel-redes"
      suppressHydrationWarning
      className="py-20 md:py-32 bg-brand-blue border-y border-white/10 relative overflow-hidden font-sans"
    >
      {/* Background Decorative Mesh & Depth Highlights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,236,1,0.08),transparent_50%)] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 left-1/4 w-100 h-100 bg-brand-blue-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Segment */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-500 rounded-full text-xs font-bold tracking-widest inline-block font-subheading uppercase shadow-accent-sm">
            Nuestra Comunidad Digital
          </span>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.92] tracking-tight uppercase text-white text-center">
            SEGUÍ NUESTRO <span className="text-brand-yellow-500">MOVIMIENTO</span>
          </h2>

          <p className="text-brand-blue-50 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto opacity-90">
            Sumate a nuestros canales digitales y enterate al toque de todas las novedades operativas en Mar del Plata.
          </p>
          <div className="h-0.5 w-20 bg-brand-yellow-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Networks Grid: 3 Unique Branded Cards */}
        <motion.div
          variants={prefersReducedMotion ? undefined : GRID_VARIANTS}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          {networks.map((net) => {
            const Icon = net.icon;

            return (
              <motion.div
                key={net.id}
                variants={prefersReducedMotion ? undefined : CARD_VARIANTS}
                className={`social-block group relative rounded-2xl p-2 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 ${net.outerBorder}`}
              >
                {/* Internal Glow on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-linear-to-b ${net.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} aria-hidden="true" />

                <div className={`relative rounded-xl p-6 sm:p-7 flex flex-col justify-between h-97.5 md:h-107.5 overflow-hidden ${net.cardBg} border ${net.innerBorder} transition-colors`}>
                  
                  {/* Background Watermark Icon that enlarges and tilts on hover */}
                  <div className={`absolute -right-8 -bottom-8 ${net.watermarkColor} transition-transform duration-500 ease-out group-hover:scale-125 group-hover:-rotate-12 pointer-events-none select-none`} aria-hidden="true">
                    <Icon className="w-56 h-56" />
                  </div>

                  {/* Top Area: Badge & Branded Icon Box */}
                  <div className="z-10 text-left space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-2xs font-bold tracking-widest px-3 py-1 rounded-full uppercase font-subheading border ${net.badgeBg}`}>
                        {net.badgeText}
                      </span>

                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${net.iconBoxBg}`} aria-hidden="true">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className={`font-display text-3xl sm:text-4xl uppercase tracking-tight leading-none ${net.titleColor}`}>
                        {net.name}
                      </h3>
                      <p className={`font-mono text-xs font-bold mt-1.5 ${net.handleColor}`}>
                        {net.handle}
                      </p>
                    </div>

                    <p className={`font-sans text-xs sm:text-sm leading-relaxed ${net.descColor}`}>
                      {net.desc}
                    </p>
                  </div>

                  {/* Bottom Action Area: Custom CTA Button per Network */}
                  <div className="z-10 pt-4 border-t border-white/10">
                    <a
                      href={net.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        if (net.id === 'whatsapp') {
                          trackAnalytics.whatsappClick('carrusel_redes_whatsapp', net.action);
                        } else {
                          trackAnalytics.ctaClick(`carrusel_redes_${net.id}`, net.action);
                        }
                      }}
                      className={`w-full min-h-11 inline-flex items-center justify-between font-subheading font-bold uppercase tracking-wider text-xs sm:text-sm px-5 py-3 rounded-full transition-colors duration-200 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500 ${net.btnBg}`}
                    >
                      <span>{net.action}</span>
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1 ${net.btnIconBg}`} aria-hidden="true">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
```

---

<a id="srccomponentsuiheroproceduralbackgroundtsx"></a>
## 13. `src/components/ui/HeroProceduralBackground.tsx`
* **Rol:** Componente Primitivo UI
* **Archivo:** [`src/components/ui/HeroProceduralBackground.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/HeroProceduralBackground.tsx)

```tsx
import React from 'react';

export interface HeroProceduralBackgroundProps {
  variant?: 'express' | 'lowcost' | 'flex' | '3pl' | 'community' | 'contact' | 'default';
  /**
   * Eje tonal del fondo. `blue` (por defecto) es el azul de marca #0950F6 con
   * grilla punteada blanca; `yellow` es el amarillo vial #FFEC01 SIN gradiente,
   * con grilla azul punteada al 5% y un halo blanco suave encima.
   * En ambos tonos nada puede ser más oscuro que #0950F6.
   */
  tone?: 'blue' | 'yellow';
  className?: string;
}

/**
 * Fondo procedural de hero. Server Component: el gate de `prefers-reduced-motion`
 * es CSS (`motion-safe:`), no `useReducedMotion()`, para no romper el hydration —
 * `useReducedMotion()` devuelve `false` en el servidor y el valor real en el cliente.
 * 
 * Gradiente canónico Max (Ajuste #0950F6): linear-gradient(135deg, #0950F6 0%, #0950F6 55%, #3570F8 100%)
 * Halos con rgba(9,80,246,α) y rgba(255,236,1,α) — NUNCA rgba(6,54,165,…) ni rgba(0,39,124,…)
 */
export default function HeroProceduralBackground({
  variant = 'default',
  tone = 'blue',
  className = '',
}: HeroProceduralBackgroundProps) {
  const isYellow = tone === 'yellow';
  const accent = isYellow ? 'var(--color-brand-blue-500)' : 'var(--color-brand-yellow-500)';
  const softAccent = isYellow ? 'var(--color-brand-blue-500)' : 'var(--color-brand-blue-300)';
  const white = isYellow ? 'var(--color-brand-blue-500)' : 'var(--color-white)';
  const gridOpacity = isYellow ? 0.05 : 0.07;
  const artOpacity = isYellow ? 0.14 : 0.2;

  // Gradiente canónico Max: #0950F6 → #0950F6 → #3570F8 (nada más oscuro que #0950F6)
  const canonicalGradient = 'linear-gradient(135deg, #0950F6 0%, #0950F6 55%, #3570F8 100%)';

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
    >
      {isYellow ? (
        <>
          {/* Tono amarillo: base plana, sin gradiente. */}
          <div className="absolute inset-0 bg-brand-yellow-500" />
          <div
            className="absolute inset-x-0 top-0 h-[70%]"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 70%)',
            }}
          />
        </>
      ) : (
        <>
          {/* 1. Gradiente base canónico Max (Ajuste #0950F6) */}
          <div
            className="absolute inset-0"
            style={{ background: canonicalGradient }}
          />

          {/* 2. Procedural Dynamic Radial Highlights (CSS Glows) — Todos teñidos con brand colors */}
          <div
            className="absolute -top-32 -left-32 w-125 h-125 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(9,80,246,0.35) 0%, rgba(9,80,246,0.18) 50%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />

          <div
            className="absolute top-1/4 -right-32 w-150 h-150 rounded-full pointer-events-none"
            style={{
              background:
                variant === 'express' || variant === 'lowcost'
                  ? 'radial-gradient(circle, rgba(255,236,1,0.22) 0%, rgba(255,236,1,0.06) 45%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(255,236,1,0.16) 0%, rgba(9,80,246,0.12) 50%, transparent 70%)',
              filter: 'blur(90px)',
            }}
          />

          <div
            className="absolute -bottom-40 left-1/3 w-137.5 h-137.5 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(9,80,246,0.4) 0%, transparent 70%)',
              filter: 'blur(100px)',
            }}
          />
        </>
      )}

      {/* 3. Mathematical Vector Grid Topology (Pure SVG, 0 KB image) */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: gridOpacity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`hero-procedural-grid-${tone}`}
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke={white}
              strokeWidth="0.75"
              strokeDasharray="2,6"
            />
            <circle cx="0" cy="0" r="1.5" fill={accent} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#hero-procedural-grid-${tone})`} />
      </svg>

      {/* 4. Variant-Specific Procedural Vector Graphics */}
      {variant === 'express' && (
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: artOpacity }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* Animated Speed & Logistics Arteries */}
          <path
            d="M -100 450 Q 400 200 900 380 T 1600 150"
            fill="none"
            stroke={accent}
            strokeWidth="2.5"
            strokeDasharray="12 16"
            className="motion-safe:animate-pulse"
          />
          <path
            d="M -100 300 Q 500 480 1000 250 T 1600 350"
            fill="none"
            stroke={softAccent}
            strokeWidth="1.5"
            strokeDasharray="8 12"
          />
          <circle cx="450" cy="240" r="4" fill={accent} />
          <circle cx="950" cy="360" r="5" fill={accent} />
        </svg>
      )}

      {variant === 'lowcost' && (
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: artOpacity }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* Concentric Cluster Routing Rings */}
          <circle cx="1100" cy="300" r="160" fill="none" stroke={accent} strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="1100" cy="300" r="280" fill="none" stroke={softAccent} strokeWidth="1" strokeDasharray="6 12" />
          <circle cx="1100" cy="300" r="400" fill="none" stroke={white} strokeWidth="0.75" strokeDasharray="4 16" />
          <line x1="200" y1="300" x2="1100" y2="300" stroke={accent} strokeWidth="1.5" strokeDasharray="8 8" />
        </svg>
      )}

      {variant === 'flex' && (
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: artOpacity }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* Verified Dispatch Corridor Matrix */}
          <line x1="0" y1="180" x2="1440" y2="180" stroke={accent} strokeWidth="1.5" strokeDasharray="6 12" />
          <line x1="0" y1="420" x2="1440" y2="420" stroke={softAccent} strokeWidth="1" strokeDasharray="4 10" />
          <rect x="750" y="140" width="80" height="80" rx="16" fill="none" stroke={accent} strokeWidth="1.5" strokeDasharray="4 4" />
          <rect x="950" y="240" width="120" height="120" rx="24" fill="none" stroke={white} strokeWidth="1" strokeDasharray="6 8" />
        </svg>
      )}

      {variant === '3pl' && (
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: artOpacity }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* Inventory Hub Node Matrix */}
          <polygon points="900,150 1100,220 1000,420 800,350" fill="none" stroke={accent} strokeWidth="1.5" strokeDasharray="6 8" />
          <circle cx="900" cy="150" r="5" fill={accent} />
          <circle cx="1100" cy="220" r="5" fill={accent} />
          <circle cx="1000" cy="420" r="5" fill={accent} />
          <circle cx="800" cy="350" r="5" fill={accent} />
        </svg>
      )}

      {variant === 'community' && (
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: artOpacity }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* Social Network Node Links */}
          <line x1="300" y1="200" x2="700" y2="150" stroke={softAccent} strokeWidth="1" />
          <line x1="700" y1="150" x2="1100" y2="280" stroke={accent} strokeWidth="1.5" />
          <line x1="1100" y1="280" x2="900" y2="480" stroke={softAccent} strokeWidth="1" />
          <line x1="900" y1="480" x2="500" y2="400" stroke={accent} strokeWidth="1" />
          <line x1="500" y1="400" x2="300" y2="200" stroke={softAccent} strokeWidth="1" />
        </svg>
      )}

      {variant === 'contact' && (
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: artOpacity }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* GPS Coordinate Beacon Radar */}
          <circle
            cx="1050"
            cy="320"
            r="80"
            fill="none"
            stroke={accent}
            strokeWidth="1.5"
            className="motion-safe:animate-ping [animation-duration:4s]"
          />
          <circle cx="1050" cy="320" r="180" fill="none" stroke={accent} strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="1050" cy="320" r="300" fill="none" stroke={softAccent} strokeWidth="0.75" strokeDasharray="6 12" />
          <circle cx="1050" cy="320" r="6" fill={accent} />
        </svg>
      )}
    </div>
  );
}
```

---

<a id="srccomponentsuictanestedpilltsx"></a>
## 14. `src/components/ui/CTANestedPill.tsx`
* **Rol:** Componente Primitivo UI
* **Archivo:** [`src/components/ui/CTANestedPill.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/CTANestedPill.tsx)

```tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackAnalytics } from '@/lib/analytics';

export type CTANestedPillVariant = 'primary' | 'blue' | 'elevated' | 'outline' | 'ghost';
export type CTANestedPillSize = 'compact' | 'default' | 'large' | 'lg';

export interface CTANestedPillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: CTANestedPillVariant;
  size?: CTANestedPillSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  iconClassName?: string;
  target?: string;
  rel?: string;
  /** Force render as button with onClick navigation instead of Link (avoids nested <a> tags) */
  asButton?: boolean;
}

/**
 * CTANestedPill Component
 * Standardized nested pill CTA interactive element (Button or Link).
 * Follows DESIGN.md specifications:
 * - Rounded-full, font-subheading, uppercase, tracking-wider, font-bold
 * - Embedded circular icon chip (w-8 h-8) with smooth hover translation
 * - Variants: --primary (yellow), --blue (para fondos amarillos), --elevated (white), --outline, --ghost
 */
export const CTANestedPill = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, CTANestedPillProps>(
  (
    {
      children,
      href,
      variant = 'primary',
      size = 'default',
      icon,
      iconPosition = 'right',
      className,
      iconClassName,
      target,
      rel,
      disabled,
      onClick,
      type,
      asButton = false,
      ...restProps
    },
    ref
  ) => {
    const baseStyles =
      'cta-nested-pill group inline-flex items-center justify-between gap-3 rounded-full font-subheading uppercase tracking-wider transition-[transform,background-color,border-color,box-shadow] duration-160 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 select-none border';

    const normalizedSize = size === 'lg' ? 'large' : size;

    const sizeStyles = {
      compact: 'px-4 py-2 text-xs min-h-11',
      default: 'px-5 py-2 text-sm min-h-11',
      large: 'px-8 py-3 text-base min-h-13',
    }[normalizedSize];

    // Anillo de foco bimodal: amarillo sobre azul (primary, elevated) y azul sobre blanco/amarillo (blue, outline, ghost)
    const focusRingStyles = {
      primary: 'focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-brand-blue-500',
      blue: 'focus-visible:ring-brand-blue-500 focus-visible:ring-offset-brand-yellow-500',
      elevated: 'focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-brand-blue-500',
      outline: 'focus-visible:ring-brand-blue-500 focus-visible:ring-offset-white',
      ghost: 'focus-visible:ring-brand-blue-500 focus-visible:ring-offset-white',
    }[variant];

    const variantStyles = {
      primary:
        'bg-brand-yellow-500 text-brand-blue-500 border-brand-yellow-500 shadow-accent-sm hover:shadow-cta-glow hover:bg-brand-yellow-400 active:scale-[0.97]',
      // Para fondos amarillos (#FFEC01): azul de marca, texto blanco, chip amarillo.
      blue: 'bg-brand-blue-500 text-white border-brand-blue-500 shadow-[0_0_24px_rgba(9,80,246,0.28)] hover:bg-brand-blue-500 hover:border-brand-blue-500 active:scale-[0.97]',
      elevated:
        'bg-white text-brand-blue-500 border-brand-blue-100 shadow-elevated hover:shadow-hover-lift hover:border-brand-blue-300 hover:text-brand-blue-500 active:scale-[0.97]',
      outline:
        'bg-transparent text-brand-blue-500 border-2 border-brand-blue-500 hover:bg-brand-blue-50 active:scale-[0.97]',
      ghost:
        'bg-transparent text-brand-blue-500 border-transparent hover:bg-brand-blue-50 active:scale-[0.97]',
    }[variant];

    const iconChipBase =
      'cta-nested-icon w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-160 ease-out';

    const iconChipVariantStyles = {
      primary:
        'bg-transparent text-brand-blue-500 group-hover:bg-brand-blue-500 group-hover:text-brand-yellow-500 group-hover:translate-x-1',
      blue: 'bg-brand-yellow-500 text-brand-blue-500 group-hover:bg-brand-yellow-400 group-hover:translate-x-1',
      elevated:
        'bg-transparent text-brand-blue-500 group-hover:bg-brand-blue-500 group-hover:text-white group-hover:translate-x-1',
      outline:
        'bg-transparent text-brand-blue-500 group-hover:bg-brand-blue-500 group-hover:text-white group-hover:translate-x-1',
      ghost:
        'bg-transparent text-brand-blue-500 group-hover:bg-brand-blue-500 group-hover:text-white group-hover:translate-x-1',
    }[variant];

    const defaultIcon = <ArrowRight className="w-4 h-4" aria-hidden="true" />;
    const renderedIcon = icon !== undefined ? icon : defaultIcon;

    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

    const combinedClassName = cn(
      baseStyles,
      sizeStyles,
      focusRingStyles,
      variantStyles,
      disabledStyles,
      className
    );

    const iconContent = (
      <span className={cn(iconChipBase, iconChipVariantStyles, iconClassName)}>
        {renderedIcon}
      </span>
    );

    const content = (
      <>
        {iconPosition === 'left' && iconContent}
        <span className="truncate">{children}</span>
        {iconPosition === 'right' && iconContent}
      </>
    );

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      if (href && (href.includes('wa.me') || href.includes('whatsapp.com'))) {
        trackAnalytics.whatsappClick(restProps.id || 'cta_pill', typeof children === 'string' ? children : undefined);
      } else if (restProps.id || typeof children === 'string') {
        trackAnalytics.ctaClick(restProps.id || 'cta_pill', typeof children === 'string' ? children : 'cta');
      }
      if (onClick) {
        onClick(e as React.MouseEvent<HTMLButtonElement>);
      }
    };

    const navigate = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      handleClick(e);
      if (href && !disabled && !e.currentTarget.closest('a')) {
        if (href.startsWith('http') || href.startsWith('//')) {
          window.open(href, target || '_self', rel ? undefined : 'noopener noreferrer');
        } else {
          window.location.href = href;
        }
      }
    };

    if (href && !disabled && !asButton) {
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={combinedClassName}
          target={target}
          rel={rel}
          {...(restProps as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'target' | 'rel' | 'onClick'>)}
          onClick={handleClick}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type || 'button'}
        disabled={disabled}
        className={combinedClassName}
        {...restProps}
        onClick={navigate}
      >
        {content}
      </button>
    );
  }
);

CTANestedPill.displayName = 'CTANestedPill';

export default CTANestedPill;
```

---

<a id="srccomponentsuibadgetsx"></a>
## 15. `src/components/ui/Badge.tsx`
* **Rol:** Componente Primitivo UI
* **Archivo:** [`src/components/ui/Badge.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/Badge.tsx)

```tsx
import React from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant =
  | 'urgent'
  | 'secure'
  | 'economic'
  | 'flex'
  | 'neutral'
  | 'outline'
  | 'primary'
  | 'accent';

export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  rounded?: 'full' | 'lg' | 'md';
  className?: string;
}

/**
 * Badge Component
 * Official badge pill system for statuses, trust indicators, and service types.
 * Follows DESIGN.md specifications:
 * - font-subheading, text-label, uppercase, tracking-wider, font-bold
 * - rounded-full or rounded-lg, padding var(--space-1) var(--space-2), border
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  icon,
  rounded = 'full',
  className,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center gap-1.5 font-subheading font-bold uppercase tracking-wider border transition-colors select-none';

  const roundedStyles = {
    full: 'rounded-full',
    lg: 'rounded-lg',
    md: 'rounded-md',
  }[rounded];

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-2xs leading-tight',
    md: 'px-3 py-1 text-xs leading-tight',
    lg: 'px-4 py-1.5 text-sm leading-tight',
  }[size];

  const variantStyles = {
    urgent:
      'bg-brand-yellow-500 text-brand-blue-500 border-brand-yellow-400 shadow-accent-sm',
    secure: 'bg-brand-blue-50 text-brand-blue-500 border-brand-blue-200',
    economic: 'bg-brand-blue-50 text-brand-blue-500 border-brand-blue-200',
    flex: 'bg-brand-yellow-100 text-brand-blue-500 border-brand-yellow-200',
    neutral: 'bg-white text-brand-blue-500 border-brand-blue-100 shadow-sm',
    outline: 'bg-transparent text-brand-blue-500 border-brand-blue-500',
    primary: 'bg-brand-blue-500 text-white border-brand-blue-500',
    accent:
      'bg-brand-yellow-500 text-brand-blue-500 border-brand-yellow-500 shadow-accent-sm',
  }[variant];

  return (
    <span
      className={cn(baseStyles, roundedStyles, sizeStyles, variantStyles, className)}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
```

---

<a id="srccomponentscotizarunifiedcotizadorformtsx"></a>
## 16. `src/components/cotizar/unified/CotizadorForm.tsx`
* **Rol:** Componente de Sección
* **Archivo:** [`src/components/cotizar/unified/CotizadorForm.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/cotizar/unified/CotizadorForm.tsx)

```tsx
'use client';

import React from 'react';
import { MapPin, User, Phone, Package } from 'lucide-react';
import AddressAutocomplete from '@/components/ui/AddressAutocomplete';
import CTANestedPill from '@/components/ui/CTANestedPill';
import InputField from '@/components/ui/InputField';
import type { UseCotizadorUnificadoReturn } from '@/hooks/cotizador/useCotizadorUnified';

interface CotizadorFormProps {
  form: UseCotizadorUnificadoReturn;
}

/**
 * Un solo formulario para los dos servicios. Los campos de servicio que antes
 * vivían en cada cotizador (franja horaria, tipo de producto por servicio) no
 * aparecen acá: la elección del servicio es el último paso, con el número a la vista.
 */
export default function CotizadorForm({ form }: CotizadorFormProps) {
  return (
    <form
      noValidate
      onSubmit={form.handleCalculate}
      onFocus={form.handleInputFocus}
      className="space-y-5 relative z-10"
    >
      <div className="space-y-1.5">
        <label
          htmlFor="guia-origen-input"
          className="text-xs font-subheading uppercase tracking-wider font-bold text-white flex items-center gap-1.5"
        >
          <MapPin className="h-3.5 w-3.5" />
          Dirección de Origen (Retiro)
        </label>
        <AddressAutocomplete
          id="guia-origen-input"
          placeholder="Ej: Av. Colón 1234, Mar del Plata"
          value={form.origen}
          onChange={form.setOrigen}
          onSelectCoordinate={form.setOrigenCoords}
          required
          className="w-full h-11 bg-white border-2 border-brand-blue-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow-500 focus-visible:border-brand-blue-500 rounded-xl px-4 text-sm transition-all text-brand-blue-500 placeholder:text-brand-blue-500 font-sans shadow-sm"
        />
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="guia-destino-input"
          className="text-xs font-subheading uppercase tracking-wider font-bold text-white flex items-center gap-1.5"
        >
          <MapPin className="h-3.5 w-3.5" />
          Dirección de Destino (Entrega)
        </label>
        <AddressAutocomplete
          id="guia-destino-input"
          placeholder="Ej: Juan B. Justo 5678, Mar del Plata"
          value={form.destino}
          onChange={form.setDestino}
          onSelectCoordinate={form.setDestinoCoords}
          required
          className="w-full h-11 bg-white border-2 border-brand-blue-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow-500 focus-visible:border-brand-blue-500 rounded-xl px-4 text-sm transition-all text-brand-blue-500 placeholder:text-brand-blue-500 font-sans shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          id="guia-nombre-input"
          name="nombre"
          autoComplete="name"
          label="Nombre"
          placeholder="Tu nombre completo"
          value={form.nombre}
          onChange={(e) => form.setNombre(e.target.value)}
          required
          icon={<User className="h-3.5 w-3.5" />}
          labelClassName="text-white"
          containerClassName="space-y-1.5"
        />

        <InputField
          id="guia-telefono-input"
          name="telefono"
          autoComplete="tel"
          label="Teléfono"
          placeholder="Tu teléfono de contacto"
          value={form.telefono}
          onChange={(e) => form.setTelefono(e.target.value)}
          required
          type="tel"
          icon={<Phone className="h-3.5 w-3.5" />}
          className="font-mono tabular-nums"
          labelClassName="text-white"
          containerClassName="space-y-1.5"
        />
      </div>

      <InputField
        id="guia-producto-input"
        name="producto"
        label="Qué hay adentro"
        placeholder="Ej: Documentos, indumentaria, repuesto…"
        value={form.producto}
        onChange={(e) => form.setProducto(e.target.value)}
        required
        icon={<Package className="h-3.5 w-3.5" />}
        labelClassName="text-white"
        containerClassName="space-y-1.5"
      />

      <div className="pt-1">
        <CTANestedPill
          type="submit"
          variant="primary"
          size="large"
          disabled={form.isCalculating}
          className="w-full"
        >
          {form.isCalculating ? 'Midiendo la ruta…' : 'Ver las dos tarifas'}
        </CTANestedPill>
      </div>

      <p className="font-sans text-2xs text-white/60 text-center leading-snug">
        Las tarifas salen de nuestra tabla vigente. El pedido se confirma por WhatsApp.
      </p>
    </form>
  );
}
```

---

<a id="srccomponentscotizarunifiedcotizadorcomparativatsx"></a>
## 17. `src/components/cotizar/unified/CotizadorComparativa.tsx`
* **Rol:** Componente de Sección
* **Archivo:** [`src/components/cotizar/unified/CotizadorComparativa.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/cotizar/unified/CotizadorComparativa.tsx)

```tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, Zap, Package, ArrowRight, CloudRain } from 'lucide-react';
import { trackAnalytics } from '@/lib/analytics';
import DoubleBezelCard from '@/components/ui/DoubleBezelCard';
import CTANestedPill from '@/components/ui/CTANestedPill';
import RadioCardGroup from '@/components/ui/RadioCardGroup';
import type { ServiceKey, UseCotizadorUnificadoReturn } from '@/hooks/cotizador/useCotizadorUnified';
import {
  EXPRESS_CUTOFF_TIME,
  EXPRESS_LEAD_TIME,
  LOWCOST_CUTOFF_TIME,
  LOWCOST_DELIVERY_DEADLINE,
  STANDARD_WEIGHT_KG,
} from '@/lib/promises';

interface CotizadorComparativaProps {
  form: Pick<
    UseCotizadorUnificadoReturn,
    'resultado' | 'quoteId' | 'getWhatsAppLink' | 'shouldReduceMotion'
  >;
  error: string | null;
}

/**
 * Reglas de entrega de cada servicio. No son decoración: son el compromiso real
 * que el negocio publica y lo que el visitante está eligiendo entre servicios.
 *
 * Ninguno de los dos promete una duración. Express vende una franja de 3 hs que
 * elige el cliente; LowCost, una entrega en el día sin elección de horario. Por eso
 * la comparación de tiempo es una línea del día, no una cuenta regresiva.
 */
const REGLAS: Record<
  ServiceKey,
  {
    nombre: string;
    entrega: string;
    detalle: string;
    /** Horas del día (24 h) que pinta la línea del día. */
    banda: { desde: number; hasta: number; rotulo: string };
    corte: number;
  }
> = {
  express: {
    nombre: 'Express',
    entrega: 'Elegís una franja de 3 hs',
    detalle: `Pedido con ${EXPRESS_LEAD_TIME} y hasta las ${EXPRESS_CUTOFF_TIME}. La franja la elegís vos, por ejemplo de 10 a 13 hs.`,
    banda: { desde: 10, hasta: 13, rotulo: 'Tu franja' },
    corte: 15,
  },
  lowcost: {
    nombre: 'LowCost',
    entrega: `En el día, antes de las ${LOWCOST_DELIVERY_DEADLINE}`,
    detalle: `Sin elección de horario. Pedido antes de las ${LOWCOST_CUTOFF_TIME}, se entrega en el transcurso del día antes de las ${LOWCOST_DELIVERY_DEADLINE}.`,
    banda: { desde: 9, hasta: 19, rotulo: 'En algún momento del día' },
    corte: 13,
  },
};

/** Escala de la línea del día, compartida por los dos servicios: 9 → 19 hs. */
const DIA_DESDE = 9;
const DIA_HASTA = 19;
const MARCAS = [9, 11, 13, 15, 17, 19];
const posicion = (hora: number) => ((hora - DIA_DESDE) / (DIA_HASTA - DIA_DESDE)) * 100;

function precioTexto(precio: number | 'consultar'): string {
  return precio === 'consultar' ? 'A consultar' : `$${precio.toLocaleString('es-AR')}`;
}

export default function CotizadorComparativa({ form, error }: CotizadorComparativaProps) {
  const { resultado, quoteId, getWhatsAppLink, shouldReduceMotion } = form;
  const [elegido, setElegido] = useState<string>('express');
  const [prevResultado, setPrevResultado] = useState(resultado);

  if (resultado !== prevResultado) {
    setPrevResultado(resultado);
    if (resultado) {
      if (resultado.express.precio !== 'consultar') {
        setElegido('express');
      } else if (resultado.lowcost.precio !== 'consultar') {
        setElegido('lowcost');
      }
    }
  }

  // Sin resultado no hay escala posible: 0 evita NaN en el ancho de las barras.
  const precioExpress = resultado?.express.precio;
  const precioLowCost = resultado?.lowcost.precio;
  const ambosNumericos = typeof precioExpress === 'number' && typeof precioLowCost === 'number';
  const referenciaPrecio = ambosNumericos ? Math.max(precioExpress!, precioLowCost!) : 0;
  const diferenciaPrecio = ambosNumericos ? precioExpress! - precioLowCost! : 0;

  const ambosConsultar =
    resultado !== null &&
    resultado.express.precio === 'consultar' &&
    resultado.lowcost.precio === 'consultar';

  // Opciones para RadioCardGroup
  const serviceOptions = React.useMemo(() => [
    {
      id: 'express',
      label: 'Express',
      description: 'Elegís una franja de 3 hs a elección, en el día.',
      price: resultado?.express.precio ? precioTexto(resultado.express.precio) : '—',
      badge: 'MÁS RÁPIDO',
      serviceType: 'EXPRESS',
      icon: <Zap className="h-6 w-6" aria-hidden="true" />,
      disabled: !resultado || resultado.express.precio === 'consultar',
    },
    {
      id: 'lowcost',
      label: 'LowCost',
      description: `Entrega programada en el día antes de las ${LOWCOST_DELIVERY_DEADLINE}.`,
      price: resultado?.lowcost.precio ? precioTexto(resultado.lowcost.precio) : '—',
      badge: 'MÁS ECONÓMICO',
      serviceType: 'LOW_COST',
      icon: <Package className="h-6 w-6" aria-hidden="true" />,
      disabled: !resultado || resultado.lowcost.precio === 'consultar',
    },
  ], [resultado]);

  const handleServiceChange = (service: string) => {
    setElegido(service);
    trackAnalytics.ctaClick('cotizador_service_select', service);
  };

  const handleConfirmarWhatsApp = () => {
    const svc = (elegido || 'express') as ServiceKey;
    trackAnalytics.whatsappClick(`cotizador_unificado_${svc}`);
    if (resultado) {
      const link = getWhatsAppLink(svc);
      if (link !== '#') {
        window.open(link, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <div className="mt-6 relative z-10 space-y-4">
      <AnimatePresence>
        {error && (
          <motion.div
            role="alert"
            aria-live="assertive"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="p-3 bg-red-500/20 border border-red-500/40 rounded-xl flex items-start gap-2 text-red-100 text-xs font-sans"
          >
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-red-300" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {resultado && (
          <motion.div
            role="region"
            aria-live="polite"
            aria-atomic="true"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={shouldReduceMotion ? { duration: 0.05 } : { duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="w-full"
          >
            <span className="sr-only">
              {ambosConsultar
                ? `Distancia calculada: ${resultado.distancia} kilómetros. Supera el radio estándar de 20 kilómetros, necesita una cotización personalizada.`
                : `Distancia: ${resultado.distancia} kilómetros. Tarifa Express: ${precioTexto(resultado.express.precio)}. Tarifa LowCost: ${precioTexto(resultado.lowcost.precio)}.`}
            </span>

            <DoubleBezelCard>
              <div className="space-y-5">
                {/* Cabecera: la distancia medida, una sola vez */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-brand-blue-100">
                  <div>
                    <span className="block text-2xs font-subheading font-bold uppercase tracking-wider text-brand-blue-500">
                      Distancia medida
                    </span>
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-brand-blue-500 tabular-nums tracking-tight">
                      {resultado.distancia} km
                    </span>
                  </div>
                  {quoteId && (
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-brand-blue-50 text-brand-blue-500 border border-brand-blue-100 tabular-nums">
                      #{quoteId}
                    </span>
                  )}
                </div>

                {ambosConsultar ? (
                  <div className="space-y-4">
                    <p className="font-sans text-sm text-brand-blue-500 leading-relaxed">
                      Tu envío supera el radio estándar de 20 km. Las tarifas por zona no alcanzan:
                      pasanos el caso y te pasamos el valor.
                    </p>
                    <CTANestedPill href="/contacto" variant="primary" className="w-full sm:w-auto">
                      Pedir Cotización Personalizada
                    </CTANestedPill>
                  </div>
                ) : (
                  <>
                    {/* ─────────────────────────────────────────────────────────────
                        FILA 1 — LO QUE PAGÁS. Las dos barras salen casi iguales:
                        ese es el dato, no un defecto de la gráfica.
                        ───────────────────────────────────────────────────────────── */}
                    <section aria-labelledby="fila-precio">
                      <h3
                        id="fila-precio"
                        className="font-subheading text-xs uppercase tracking-widest font-bold text-brand-blue-500 mb-3"
                      >
                        Lo que pagás
                      </h3>

                      <div className="space-y-3">
                        {(['express', 'lowcost'] as const).map((key) => {
                          const regla = REGLAS[key];
                          const precio = resultado[key].precio;
                          const ancho =
                            typeof precio === 'number' && referenciaPrecio > 0
                              ? (precio / referenciaPrecio) * 100
                              : 0;

                          return (
                            <div key={key} className="space-y-1.5">
                              <div className="flex items-baseline justify-between gap-3">
                                <span
                                  className={`font-subheading text-xs font-bold uppercase tracking-wider ${
                                    key === 'express' ? 'text-brand-yellow-600' : 'text-brand-blue-500'
                                  }`}
                                >
                                  {regla.nombre}
                                </span>
                                <span className="font-mono text-2xl sm:text-3xl font-bold text-brand-blue-500 tabular-nums">
                                  {precioTexto(precio)}
                                  {typeof precio === 'number' && (
                                    <span className="text-xs font-bold text-brand-blue-500 ml-1">ARS</span>
                                  )}
                                </span>
                              </div>
                              <div
                                role="presentation"
                                className="h-2.5 w-full rounded-full bg-brand-blue-50 overflow-hidden"
                              >
                                <div
                                  className={`h-full rounded-full ${
                                    key === 'express' ? 'bg-brand-yellow-500' : 'bg-brand-blue-500'
                                  }`}
                                  style={{
                                    width: `${ancho}%`,
                                    transition: shouldReduceMotion ? 'none' : 'width 240ms cubic-bezier(0.23, 1, 0.32, 1)',
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {diferenciaPrecio > 0 && (
                        <p className="mt-3 pt-3 border-t border-brand-blue-100 font-sans text-xs text-brand-blue-500">
                          La diferencia entre uno y otro es de{' '}
                          <span className="font-mono font-bold text-brand-blue-500 tabular-nums">
                            ${diferenciaPrecio.toLocaleString('es-AR')}
                          </span>
                          . Lo demás que cambia es cuándo lo recibís.
                        </p>
                      )}
                    </section>

                    {/* ─────────────────────────────────────────────────────────────
                        FILA 2 — CUÁNDO LLEGA. Una línea del día (9 → 19 hs) para
                        los dos: Express ocupa la franja que elegís; LowCost, el día
                        entero. No hay duración que prometer, y no se muestra una.
                        ───────────────────────────────────────────────────────────── */}
                    <section aria-labelledby="fila-tiempo" className="pt-4 border-t border-brand-blue-100">
                      <h3
                        id="fila-tiempo"
                        className="font-subheading text-xs uppercase tracking-widest font-bold text-brand-blue-500 mb-3"
                      >
                        Cuándo llega
                      </h3>

                      <div className="space-y-4">
                        {(['express', 'lowcost'] as const).map((key) => {
                          const regla = REGLAS[key];
                          const esExpress = key === 'express';
                          const izquierda = posicion(regla.banda.desde);
                          const ancho = posicion(regla.banda.hasta) - izquierda;

                          return (
                            <div key={key} className="space-y-1.5">
                              <div className="flex items-baseline justify-between gap-3">
                                <span className="font-sans text-xs text-brand-blue-500">{regla.nombre}</span>
                                <span className="font-sans text-sm font-bold text-brand-blue-500 text-right">
                                  {regla.entrega}
                                </span>
                              </div>

                              {/* Resumen visual del texto de abajo: el lector de
                                  pantalla ya tiene la regla en palabras. */}
                              <div aria-hidden="true" className="relative h-6 mt-3.5 rounded-md bg-brand-blue-50">
                                <div
                                  className={`absolute inset-y-0 rounded-md flex items-center px-2 overflow-hidden ${
                                    esExpress
                                      ? 'bg-brand-yellow-500 text-brand-blue-500'
                                      : 'bg-[repeating-linear-gradient(135deg,var(--color-brand-blue-500)_0_6px,var(--color-brand-blue-400)_6px_12px)] text-white'
                                  }`}
                                  style={{
                                    left: `${izquierda}%`,
                                    width: `${ancho}%`,
                                    transition: shouldReduceMotion ? 'none' : 'left 240ms cubic-bezier(0.23, 1, 0.32, 1), width 240ms cubic-bezier(0.23, 1, 0.32, 1)',
                                  }}
                                >
                                  <span className="font-subheading text-2xs uppercase tracking-wider font-bold whitespace-nowrap">
                                    {regla.banda.rotulo}
                                  </span>
                                </div>
                                <div
                                  className="absolute -inset-y-1 w-0.5 -translate-x-1/2 bg-brand-blue-500 ring-2 ring-white z-10"
                                  style={{ left: `${posicion(regla.corte)}%` }}
                                >
                                  <span className="absolute -top-4 -translate-x-1/2 px-1 py-0.2 bg-brand-yellow-500 text-brand-blue-500 font-mono text-[9px] font-bold rounded-xs shadow-xs uppercase whitespace-nowrap">
                                    Corte {regla.corte}h
                                  </span>
                                </div>
                              </div>

                              <p className="font-sans text-2xs text-brand-blue-500 leading-snug">
                                {regla.detalle}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      <div aria-hidden="true" className="relative h-4 font-mono text-2xs text-brand-blue-500 tabular-nums">
                        {MARCAS.map((hora) => (
                          <span
                            key={hora}
                            className="absolute -translate-x-1/2 first:translate-x-0 last:-translate-x-full whitespace-nowrap"
                            style={{ left: `${posicion(hora)}%` }}
                          >
                            {hora} hs
                          </span>
                        ))}
                      </div>
                      <p className="font-sans text-2xs text-brand-blue-500 flex items-center gap-1.5">
                        <span aria-hidden="true" className="inline-block h-3 w-0.5 bg-brand-blue-500" />
                        Horario de corte para pedir en el día.
                      </p>
                    </section>

                    {/* ─────────────────────────────────────────────────────────────
                        LA DECISIÓN. RadioCardGroup para elegir servicio + Botón Explícito.
                        ───────────────────────────────────────────────────────────── */}
                    <div className="pt-5 border-t border-brand-blue-100 space-y-4">
                      <div>
                        <h3 className="font-subheading text-xs uppercase tracking-widest font-bold text-brand-blue-500 mb-1">
                          Elegí cómo lo querés
                        </h3>
                        <p className="font-sans text-xs text-brand-blue-500/80">
                          Marcá el servicio que preferís y confirmalo directamente por WhatsApp.
                        </p>
                      </div>

                      <RadioCardGroup
                        name="cotizador-service-selector"
                        value={elegido}
                        onChange={handleServiceChange}
                        options={serviceOptions}
                        gridCols="grid-cols-1 sm:grid-cols-2"
                      />

                      <div className="pt-2 flex flex-col gap-2">
                        <CTANestedPill
                          type="button"
                          variant="primary"
                          size="large"
                          onClick={handleConfirmarWhatsApp}
                          className="w-full justify-between"
                          icon={<ArrowRight className="h-4 w-4" />}
                        >
                          {elegido === 'lowcost' ? 'Pedir LowCost por WhatsApp' : 'Pedir Express por WhatsApp'}
                        </CTANestedPill>
                        <p className="font-mono text-2xs text-brand-blue-500/80 text-center">
                          Coordinación directa con base en Friuli 1972 · Se abre WhatsApp con los datos del envío
                        </p>
                      </div>
                    </div>

                    {/* El precio de arriba es por distancia. Lo que pasa en el viaje
                        (lluvia, espera, paradas, bulto grande) suma aparte, y se avisa
                        antes de confirmar, no después. */}
                    <div className="flex items-start gap-3 rounded-xl border border-brand-blue-100 bg-brand-blue-50/60 px-4 py-3.5">
                      <CloudRain className="h-4 w-4 shrink-0 mt-0.5 text-brand-blue-500" aria-hidden="true" />
                      <p className="font-sans text-xs text-brand-blue-500 leading-relaxed">
                        El precio es por distancia, con bulto de hasta {STANDARD_WEIGHT_KG} kg. Lluvia,
                        espera en puerta, paradas extra o un bulto más grande suman recargo.{' '}
                        <a
                          href="#recargos"
                          className="font-bold underline underline-offset-2 decoration-brand-blue-300 hover:decoration-brand-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 rounded-sm"
                        >
                          Ver cuáles y cuánto
                        </a>
                      </p>
                    </div>
                  </>
                )}
              </div>
            </DoubleBezelCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

---

<a id="srccomponentscotizarunifiedcotizadormapatsx"></a>
## 18. `src/components/cotizar/unified/CotizadorMapa.tsx`
* **Rol:** Componente de Sección
* **Archivo:** [`src/components/cotizar/unified/CotizadorMapa.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/cotizar/unified/CotizadorMapa.tsx)

```tsx
'use client';

import React from 'react';
import DynamicRouteMap from '@/components/ui/DynamicRouteMap';
import type { UseCotizadorUnificadoReturn } from '@/hooks/cotizador/useCotizadorUnified';

interface CotizadorMapaProps {
  form: Pick<UseCotizadorUnificadoReturn, 'origenCoords' | 'destinoCoords' | 'routeCoords' | 'resultado'>;
}

/**
 * La ruta es única: es la misma medición que alimenta las dos tarifas. El pie
 * aclara que el trazado no cambia según el servicio elegido, porque no cambia.
 */
export default function CotizadorMapa({ form }: CotizadorMapaProps) {
  const { origenCoords, destinoCoords, routeCoords, resultado } = form;

  return (
    <div className="lg:col-span-5 min-h-90 lg:min-h-full rounded-[28px] sm:rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-xl">
      <div className="bg-brand-blue-500 p-6 rounded-[20px] border border-white/10 flex flex-col justify-between h-full relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

        <div className="relative z-10 flex justify-between items-center border-b border-white/15 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <div
              className={`w-2.5 h-2.5 rounded-full bg-brand-yellow-500 ${
                resultado ? '' : 'motion-safe:animate-ping'
              }`}
            />
            <span className="text-xs font-mono text-brand-yellow-500 uppercase tracking-widest font-semibold tabular-nums">
              {resultado ? 'Ruta calculada' : 'Midiendo ruta'}
            </span>
          </div>
          <span className="text-2xs font-mono text-white/90 tabular-nums">
            {routeCoords.length > 0 ? 'Google Maps · Red Vial' : 'Mar del Plata · Cobertura'}
          </span>
        </div>

        <div className="relative grow min-h-65 rounded-xl overflow-hidden border border-white/15 shadow-inner z-10">
          <DynamicRouteMap
            origin={origenCoords}
            destination={destinoCoords}
            routeCoords={routeCoords}
            distanceKm={resultado?.distancia}
            serviceType="EXPRESS"
          />
        </div>

        <div className="relative z-10 text-2xs font-mono text-white/90 space-y-1.5 border-t border-white/15 pt-3 mt-3 tabular-nums">
          <div className="flex justify-between gap-3">
            <span>Distancia:</span>
            <span className="text-white">
              {resultado ? `${resultado.distancia} km` : 'Pendiente'}
            </span>
          </div>
          <div className="flex justify-between gap-3">
            <span>Tarifa:</span>
            <span className="text-brand-yellow-500 font-bold uppercase">Express + LowCost</span>
          </div>
          <div className="flex justify-between gap-3">
            <span>Cobertura:</span>
            <span className="text-white">Todo Mar del Plata</span>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

<a id="srccomponentscotizarunifiedcotizadorguiatsx"></a>
## 19. `src/components/cotizar/unified/CotizadorGuia.tsx`
* **Rol:** Componente de Sección
* **Archivo:** [`src/components/cotizar/unified/CotizadorGuia.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/cotizar/unified/CotizadorGuia.tsx)

```tsx
'use client';

import React from 'react';
import { MapPin, GitCompareArrows, MessageCircle } from 'lucide-react';

const PASOS = [
  {
    n: '01',
    icon: MapPin,
    titulo: 'Cargá el envío',
    detalle: 'Retiro, entrega y tus datos de contacto.',
  },
  {
    n: '02',
    icon: GitCompareArrows,
    titulo: 'Compará las dos tarifas',
    detalle: 'Precio y horario de entrega de cada servicio, lado a lado.',
  },
  {
    n: '03',
    icon: MessageCircle,
    titulo: 'Elegí y confirmá',
    detalle: 'Te pasamos el pedido armado por WhatsApp.',
  },
];

/**
 * Riel de orientación de la guía. Es una secuencia real —el orden importa porque
 * cada paso habilita el siguiente—, por eso lleva numeración. Se muestra siempre
 * arriba, incluso con resultados en pantalla, para no perder el hilo.
 */
export default function CotizadorGuia() {
  return (
    <nav aria-label="Cómo funciona el cotizador" className="w-full">
      <ol className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {PASOS.map((paso) => (
          <li
            key={paso.n}
            className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5"
          >
            <span className="font-mono text-xs text-brand-yellow-500 tabular-nums shrink-0 pt-0.5">
              {paso.n}
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-1.5 font-subheading text-xs uppercase font-bold tracking-wider text-white">
                <paso.icon className="h-3.5 w-3.5 text-brand-yellow-500 shrink-0" aria-hidden="true" />
                {paso.titulo}
              </span>
              <span className="block font-sans text-xs text-white/70 mt-1 leading-snug">
                {paso.detalle}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

---

<a id="srchookscotizadorusecotizadorunifiedts"></a>
## 20. `src/hooks/cotizador/useCotizadorUnified.ts`
* **Rol:** Hook React
* **Archivo:** [`src/hooks/cotizador/useCotizadorUnified.ts`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/hooks/cotizador/useCotizadorUnified.ts)

```tsx
'use client';

import { useState, useCallback, useRef } from 'react';
import { useReducedMotion } from 'motion/react';
import { useGoogleRoute, type Coordinate } from '@/hooks/useGoogleRoute';
import { calculateQuoteAction, type QuoteState } from '@/actions/quote';
import { trackAnalytics } from '@/lib/analytics';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export type ServiceKey = 'express' | 'lowcost';

export interface OpcionCotizacion {
  key: ServiceKey;
  precio: number | 'consultar';
}

/**
 * Una sola medición de distancia alimenta las dos tarifas. Las dos llamadas al
 * Server Action viajan en paralelo: la distancia ya está calculada, no se vuelve
 * a pedir la ruta ni a medir dos veces.
 */
export interface ResultadoUnificado {
  distancia: number;
  express: OpcionCotizacion;
  lowcost: OpcionCotizacion;
}

const initialState: QuoteState = { success: false, price: null, distanceKm: null, error: null };

const SOURCE_LABEL: Record<ServiceKey, string> = {
  express: 'Express',
  lowcost: 'LowCost',
};

export function useCotizadorUnificado() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const hasTrackedStart = useRef(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Campos del formulario
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [producto, setProducto] = useState('');

  // Coordenadas y trazado
  const [origenCoords, setOrigenCoords] = useState<Coordinate | null>(null);
  const [destinoCoords, setDestinoCoords] = useState<Coordinate | null>(null);
  const [routeCoords, setRouteCoords] = useState<[number, number][]>([]);

  // Estado de UI
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resultado, setResultado] = useState<ResultadoUnificado | null>(null);
  const [quoteId, setQuoteId] = useState<string | null>(null);

  const { fetchRoute } = useGoogleRoute();

  const handleInputFocus = useCallback(() => {
    if (!hasTrackedStart.current) {
      hasTrackedStart.current = true;
      trackAnalytics.quoteStart('dual');
    }
  }, []);

  const handleCalculate = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      const controller = new AbortController();
      abortControllerRef.current = controller;

      setIsCalculating(true);
      setCalculated(false);
      setError(null);

      let activeOrigenCoords = origenCoords;
      let activeDestinoCoords = destinoCoords;

      try {
        // Autoresolución si el usuario ingresó texto pero no hizo clic en el desplegable
        if (!activeOrigenCoords && origen.trim().length >= 3) {
          try {
            const token = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : undefined;
            const tokenParam = token ? `&session_token=${encodeURIComponent(token)}` : '';
            const autoRes = await fetch(`/api/places/autocomplete?input=${encodeURIComponent(origen.trim())}${tokenParam}`, { signal: controller.signal });
            const autoData = await autoRes.json();
            const first = autoData.predictions?.[0];
            if (first?.place_id) {
              const detRes = await fetch(`/api/places/details?place_id=${encodeURIComponent(first.place_id)}${tokenParam}`, { signal: controller.signal });
              const detData = await detRes.json();
              if (detData.status === 'OK' && detData.result?.geometry?.location) {
                activeOrigenCoords = detData.result.geometry.location;
                setOrigenCoords(activeOrigenCoords);
                setOrigen(first.description);
              }
            }
          } catch {}
        }

        if (!activeDestinoCoords && destino.trim().length >= 3) {
          try {
            const token = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : undefined;
            const tokenParam = token ? `&session_token=${encodeURIComponent(token)}` : '';
            const autoRes = await fetch(`/api/places/autocomplete?input=${encodeURIComponent(destino.trim())}${tokenParam}`, { signal: controller.signal });
            const autoData = await autoRes.json();
            const first = autoData.predictions?.[0];
            if (first?.place_id) {
              const detRes = await fetch(`/api/places/details?place_id=${encodeURIComponent(first.place_id)}${tokenParam}`, { signal: controller.signal });
              const detData = await detRes.json();
              if (detData.status === 'OK' && detData.result?.geometry?.location) {
                activeDestinoCoords = detData.result.geometry.location;
                setDestinoCoords(activeDestinoCoords);
                setDestino(first.description);
              }
            }
          } catch {}
        }

        if (!activeOrigenCoords || !activeDestinoCoords) {
          setError('Elegí el origen y el destino de la lista de sugerencias para calcular la ruta.');
          setIsCalculating(false);
          return;
        }

        const route = await fetchRoute(activeOrigenCoords, activeDestinoCoords, controller.signal);

        if (!route) {
          if (!controller.signal.aborted) {
            setError('No se pudo calcular la ruta. Revisá las direcciones o intentá de nuevo en un momento.');
          }
          setIsCalculating(false);
          return;
        }

        setRouteCoords(route.routeCoords);

        const validOrigen = activeOrigenCoords;
        const validDestino = activeDestinoCoords;

        // Las tarifas nunca se calculan en el cliente: las dos pasan por el Server Action.
        // Enviamos coordenadas; el servidor recalcula la distancia y valida la ruta.
        const pedirTarifa = (serviceType: 'EXPRESS' | 'LOW_COST') => {
          const formData = new FormData();
          formData.append('origenLat', validOrigen.lat.toString());
          formData.append('origenLng', validOrigen.lng.toString());
          formData.append('destinoLat', validDestino.lat.toString());
          formData.append('destinoLng', validDestino.lng.toString());
          formData.append('serviceType', serviceType);
          return calculateQuoteAction(initialState, formData);
        };

        const [respExpress, respLowCost] = await Promise.all([
          pedirTarifa('EXPRESS'),
          pedirTarifa('LOW_COST'),
        ]);

        if (!respExpress.success || !respLowCost.success) {
          setError(respExpress.error || respLowCost.error || 'No pudimos calcular las tarifas.');
          setIsCalculating(false);
          return;
        }

        // Usar la distancia validada por el servidor (debe ser la misma en ambas respuestas)
        const serverDistanceKm = respExpress.distanceKm ?? respLowCost.distanceKm ?? route.distanceKm;

        const newQuoteId = `DR-${Math.floor(1000 + Math.random() * 9000)}`;
        setQuoteId(newQuoteId);

        setResultado({
          distancia: serverDistanceKm,
          express: { key: 'express', precio: respExpress.price! },
          lowcost: { key: 'lowcost', precio: respLowCost.price! },
        });
        setCalculated(true);
        setIsCalculating(false);

        if (typeof window !== 'undefined') {
          try {
            sessionStorage.setItem('last_quote_id', newQuoteId);
            sessionStorage.setItem(
              'last_quote_data',
              JSON.stringify({
                id: newQuoteId,
                servicio: 'DUAL',
                distancia: route.distanceKm,
                precioExpress: respExpress.price,
                precioLowCost: respLowCost.price,
                origen,
                destino,
                nombre,
                telefono,
                producto,
                timestamp: new Date().toISOString(),
              })
            );
          } catch {
            // sessionStorage no disponible (modo privado): el cotizador sigue funcionando.
          }
        }

        (['express', 'lowcost'] as const).forEach((service) => {
          const price = service === 'express' ? respExpress.price! : respLowCost.price!;
          trackAnalytics.quoteComplete({
            service,
            distanceKm: route.distanceKm,
            priceArs: price,
            result: price === 'consultar' ? 'consultar' : 'price',
          });
        });
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return;
        setError('Ocurrió un error inesperado al cotizar. Probá de nuevo.');
        setIsCalculating(false);
      }
    },
    [origenCoords, destinoCoords, fetchRoute, origen, destino, nombre, telefono, producto]
  );

  /** Enlace de WhatsApp con el servicio elegido y todos los datos del envío ya cargados. */
  const getWhatsAppLink = useCallback(
    (service: ServiceKey) => {
      if (!resultado) return '#';
      const precio = resultado[service].precio;
      const precioTexto =
        precio === 'consultar' ? 'A consultar (supera el radio estándar de 20 km)' : `$${precio.toLocaleString('es-AR')} ARS`;

      const timing =
        service === 'express'
          ? 'Entrega en una franja de 3 hs a elección, en el día (pedido con 2 hs de anticipación, corte 15:00 hs).'
          : 'Entrega programada sin elección de horario: pedido antes de las 13:00 hs, entrega en el día antes de las 19:00 hs.';

      const message = [
        `¡Hola Envíos DosRuedas! Elegí el servicio ${SOURCE_LABEL[service]} en el cotizador web:`,
        `🆔 Cotización: #${quoteId || 'WEB'}`,
        `👤 Nombre: ${nombre}`,
        `📞 Teléfono: ${telefono}`,
        `📦 Producto: ${producto}`,
        `📍 Retiro: ${origen}`,
        `🏁 Entrega: ${destino}`,
        `📏 Distancia: ${resultado.distancia} km`,
        `💵 Tarifa ${SOURCE_LABEL[service]} 2026: ${precioTexto}`,
        `🕐 ${timing}`,
        '',
        'Quiero confirmar la reserva.',
      ].join('\n');

      return buildWhatsAppUrl({ message, source: `cotizador_${service}_resultado` });
    },
    [resultado, quoteId, nombre, telefono, producto, origen, destino]
  );

  const resetForm = useCallback(() => {
    setOrigen('');
    setDestino('');
    setNombre('');
    setTelefono('');
    setProducto('');
    setOrigenCoords(null);
    setDestinoCoords(null);
    setRouteCoords([]);
    setIsCalculating(false);
    setCalculated(false);
    setError(null);
    setResultado(null);
    setQuoteId(null);
    hasTrackedStart.current = false;
  }, []);

  return {
    origen,
    setOrigen,
    destino,
    setDestino,
    nombre,
    setNombre,
    telefono,
    setTelefono,
    producto,
    setProducto,
    origenCoords,
    setOrigenCoords,
    destinoCoords,
    setDestinoCoords,
    routeCoords,
    isCalculating,
    calculated,
    error,
    resultado,
    quoteId,
    handleInputFocus,
    handleCalculate,
    getWhatsAppLink,
    resetForm,
    shouldReduceMotion,
  };
}

export type UseCotizadorUnificadoReturn = ReturnType<typeof useCotizadorUnificado>;
```

---

<a id="srccomponentslayoutmobilenavtsx"></a>
## 21. `src/components/layout/MobileNav.tsx`
* **Rol:** Componente de Layout
* **Archivo:** [`src/components/layout/MobileNav.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/layout/MobileNav.tsx)

```tsx
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronDown, ChevronRight, Phone, X } from 'lucide-react';
import { CTANestedPill } from '@/components/ui';
import { SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';

const PHONE_HREF = `tel:+${SUPPORT_PHONE.replace(/\D/g, '')}`;

export interface MobileNavItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  dropdownItems?: { label: string; href: string; icon?: React.ComponentType<{ className?: string }> }[];
}

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: MobileNavItem[];
  activeDropdown: string | null;
  onDropdownToggle: (label: string) => void;
}

const SPRING_PANEL = { type: 'spring', stiffness: 380, damping: 32 } as const;
const NAV_CONTAINER = { hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } } as const;
const NAV_ITEM_VARIANT = { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 380, damping: 26 } } } as const;

// FIX ESLINT: useSyncExternalStore para mounted sin setState en effect
function useIsMounted() {
  return React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, navItems, activeDropdown, onDropdownToggle }) => {
  const prefersReducedMotion = useReducedMotion();
  const mounted = useIsMounted();
  const drawerRef = React.useRef<HTMLDivElement>(null);
  const onCloseRef = React.useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onCloseRef.current();
        return;
      }
      if (e.key === 'Tab' && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const t = setTimeout(() => drawerRef.current?.querySelector<HTMLElement>('button, [href]')?.focus(), 80);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(t);
      document.getElementById('mobile-menu-toggle-opt')?.focus();
    };
  }, [isOpen]);

  if (!mounted) return null;

  const content = (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: prefersReducedMotion ? 0 : 0.2 }} onClick={onClose} className="fixed inset-0 bg-brand-blue-500/70 backdrop-blur-md z-99 lg:hidden" />
      <motion.div
        ref={drawerRef}
        id="mobile-navigation-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Menú principal"
        initial={prefersReducedMotion ? { x: 0 } : { x: '100%' }}
        animate={{ x: 0 }}
        exit={prefersReducedMotion ? { opacity: 0 } : { x: '100%' }}
        transition={SPRING_PANEL}
        className="fixed top-0 right-0 bottom-0 z-100 flex flex-col w-full max-w-[320px] h-dvh bg-brand-blue-500 text-white shadow-2xl border-l border-white/10 lg:hidden overscroll-contain"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0 h-16">
          <Link href="/" onClick={onClose} className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50 rounded-lg">
            <span className="font-display text-xl tracking-tight uppercase select-none flex flex-col items-start leading-none">
              <span className="text-white">Envíos</span>
              <span className="text-brand-yellow-500">DosRuedas</span>
            </span>
          </Link>
          <motion.button onClick={onClose} whileHover={prefersReducedMotion ? {} : { scale: 1.04 }} whileTap={prefersReducedMotion ? {} : { scale: 0.97 }} transition={{ type: 'spring', duration: 0.2, bounce: 0.1 }} className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow-500 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50 transition-colors cursor-pointer min-w-11 min-h-11 flex items-center justify-center" aria-label="Cerrar menú">
            <X className="h-5 w-5" />
          </motion.button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6 space-y-6">
          <motion.nav className="space-y-2" variants={prefersReducedMotion ? {} : NAV_CONTAINER} initial="hidden" animate="visible">
            {navItems.map((item) => (
              <motion.div key={item.label} variants={prefersReducedMotion ? {} : NAV_ITEM_VARIANT} className="border-b border-white/10 pb-2.5 last:border-b-0 last:pb-0">
                {item.href ? (
                  <Link href={item.href} onClick={onClose} className="flex items-center gap-3.5 py-2.5 px-3 rounded-xl text-xl font-subheading tracking-wider uppercase text-white hover:text-brand-yellow-500 hover:bg-white/5 transition-[color,background-color,border-color,transform] duration-150 ease-out min-h-12 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50">
                    {item.icon && <item.icon className="h-5 w-5 text-brand-yellow-500 shrink-0" />}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <div>
                    <button type="button" aria-expanded={activeDropdown === item.label} onClick={() => onDropdownToggle(item.label)} className="w-full text-left py-2.5 px-3 rounded-xl text-xl font-subheading tracking-wider uppercase flex items-center justify-between text-white hover:bg-white/5 cursor-pointer transition-[color,background-color,border-color,transform] duration-150 ease-out min-h-12 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50">
                      <span className="flex items-center gap-3.5">{item.icon && <item.icon className="h-5 w-5 text-brand-yellow-500 shrink-0" />}<span>{item.label}</span></span>
                      <motion.span animate={{ rotate: activeDropdown === item.label ? 180 : 0 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}><ChevronDown className="h-5 w-5 text-brand-yellow-500 shrink-0" /></motion.span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                        activeDropdown === item.label
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="overflow-hidden pl-4 pr-1 py-2 flex flex-col gap-1">
                        {item.dropdownItems?.map((subItem, idx) => {
                          const SubIcon = subItem.icon || ChevronRight;
                          return (
                            <motion.div
                              key={subItem.href}
                              initial={prefersReducedMotion ? {} : { opacity: 0, x: 12 }}
                              animate={activeDropdown === item.label ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
                              transition={{ delay: idx * 0.04, type: 'spring', stiffness: 380, damping: 28 }}
                            >
                              <Link
                                href={subItem.href}
                                onClick={onClose}
                                className="flex items-center gap-3 py-2 px-3 rounded-xl text-base font-subheading uppercase tracking-wider text-white hover:text-brand-yellow-500 hover:bg-black/15 transition-[color,background-color,border-color,transform] duration-150 ease-out min-h-10.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500/50"
                              >
                                <div className="p-1 rounded-lg bg-white/10 text-brand-yellow-500 shrink-0">
                                  <SubIcon className="h-4 w-4" />
                                </div>
                                <span>{subItem.label}</span>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.nav>
        </div>

        <div className="p-5 border-t border-white/10 space-y-4 shrink-0 bg-brand-blue-500 backdrop-blur-md mt-auto">
          <a
            href={PHONE_HREF}
            onClick={() => trackAnalytics.phoneClick(SUPPORT_PHONE, 'drawer_mobile')}
            className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-white/10 border border-white/5 text-white hover:text-brand-yellow-500 font-mono text-sm font-bold transition-[color,background-color,border-color] duration-150 ease-out min-h-11 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50"
          >
            <Phone className="h-4 w-4 text-brand-yellow-500" aria-hidden="true" />
            <span>{SUPPORT_PHONE}</span>
          </a>
          <CTANestedPill id="drawer_cta" href="/cotizar" variant="primary" size="large" className="w-full justify-center min-h-11 py-3.5" onClick={onClose}>Cotizá tu envío</CTANestedPill>
        </div>
      </motion.div>
    </>
  );

  return createPortal(content, document.body);
};

export default MobileNav;
```

---

<a id="srclibutilsts"></a>
## 22. `src/lib/utils.ts`
* **Rol:** Librería / Utilidad Local
* **Archivo:** [`src/lib/utils.ts`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/lib/utils.ts)

```tsx
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

<a id="srccomponentsuiaddressautocompletetsx"></a>
## 23. `src/components/ui/AddressAutocomplete.tsx`
* **Rol:** Componente Primitivo UI
* **Archivo:** [`src/components/ui/AddressAutocomplete.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/AddressAutocomplete.tsx)

```tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Loader2 } from 'lucide-react';

interface Suggestion {
  description: string;
  place_id: string;
}

interface AddressAutocompleteProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onSelectCoordinate: (coords: { lat: number; lng: number } | null) => void;
  required?: boolean;
  className?: string;
}

export default function AddressAutocomplete({
  id,
  placeholder,
  value,
  onChange,
  onSelectCoordinate,
  required = false,
  className = '',
}: AddressAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const sessionTokenRef = useRef<string | null>(null);
  const queryCacheRef = useRef<Map<string, Suggestion[]>>(new Map());

  // Iniciar un session token de Google Places API (New) por cada ciclo de búsqueda
  const getOrCreateSessionToken = () => {
    if (!sessionTokenRef.current) {
      sessionTokenRef.current =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : `session-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    }
    return sessionTokenRef.current;
  };

  const resetSessionToken = () => {
    sessionTokenRef.current = null;
  };

  // Click outside listener to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchAddresses = async (searchQuery: string) => {
    const trimmed = searchQuery.trim();
    if (trimmed.length < 3) {
      setSuggestions([]);
      setSelectedIndex(-1);
      return;
    }

    const normalizedKey = trimmed.toLowerCase();
    if (queryCacheRef.current.has(normalizedKey)) {
      setSuggestions(queryCacheRef.current.get(normalizedKey)!);
      setIsOpen(true);
      setSelectedIndex(-1);
      return;
    }

    setIsLoading(true);

    try {
      const token = getOrCreateSessionToken();
      // Llamar al endpoint proxy local agrupando pulsaciones con sessionToken para optimizar facturación
      const url = `/api/places/autocomplete?input=${encodeURIComponent(trimmed)}&session_token=${encodeURIComponent(token)}`;

      const res = await fetch(url);
      const data = await res.json();
      
      if (data.status === 'OK' && data.predictions) {
        queryCacheRef.current.set(normalizedKey, data.predictions);
        setSuggestions(data.predictions);
        setIsOpen(true);
        setSelectedIndex(-1);
      } else {
        setSuggestions([]);
        setSelectedIndex(-1);
      }
    } catch (error) {
      console.error('Error fetching addresses from local API:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChange(val);
    onSelectCoordinate(null);
    setSelectedIndex(-1);

    if (val.trim() === '') {
      setSuggestions([]);
      setIsOpen(false);
      resetSessionToken();
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      searchAddresses(val);
    }, 280);
  };

  const handleSelect = async (suggestion: Suggestion) => {
    onChange(suggestion.description);
    setIsOpen(false);
    setSuggestions([]);
    setSelectedIndex(-1);

    const token = sessionTokenRef.current;
    // Una vez seleccionado el destino, cerramos y reiniciamos el token para la siguiente búsqueda
    resetSessionToken();

    // Obtener las coordenadas a través del endpoint proxy de details cerrando la sesión de Places
    try {
      const sessionParam = token ? `&session_token=${encodeURIComponent(token)}` : '';
      const url = `/api/places/details?place_id=${encodeURIComponent(suggestion.place_id)}${sessionParam}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.status === 'OK' && data.result?.geometry?.location) {
        const { lat, lng } = data.result.geometry.location;
        onSelectCoordinate({ lat, lng });
      }
    } catch (error) {
      console.error('Error fetching place details from local API:', error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === 'Enter') {
      const target = selectedIndex >= 0 && selectedIndex < suggestions.length ? suggestions[selectedIndex] : suggestions[0];
      if (target) {
        e.preventDefault();
        handleSelect(target);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setSelectedIndex(-1);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <input
          type="text"
          id={id}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={className}
          autoComplete="off"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen && suggestions.length > 0}
          aria-controls={`${id}-suggestions`}
          aria-activedescendant={selectedIndex >= 0 ? `${id}-option-${selectedIndex}` : undefined}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-brand-blue-500 pointer-events-none" aria-hidden="true">
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Search className="h-4 w-4" />
          )}
        </div>
      </div>

      {isOpen && suggestions.length > 0 && (
        <ul
          id={`${id}-suggestions`}
          role="listbox"
          className="absolute z-50 w-full mt-1 bg-brand-blue-500 border border-white/20 rounded-xl max-h-60 overflow-y-auto shadow-2xl text-white divide-y divide-white/10"
        >
          {suggestions.map((s, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <li
                key={s.place_id}
                id={`${id}-option-${idx}`}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(s)}
                className={`px-4 py-3 cursor-pointer flex items-start gap-3 transition-colors text-sm ${
                  isSelected ? 'bg-white/10 ring-1 ring-brand-yellow-500' : 'hover:bg-white/10'
                }`}
              >
                <MapPin className="h-5 w-5 text-brand-yellow-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">
                    {s.description.split(',')[0]}
                  </p>
                  <p className="text-xs text-brand-blue-50 mt-0.5 line-clamp-1 font-medium">
                    {s.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
```

---

<a id="srccomponentsuiinputfieldtsx"></a>
## 24. `src/components/ui/InputField.tsx`
* **Rol:** Componente Primitivo UI
* **Archivo:** [`src/components/ui/InputField.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/InputField.tsx)

```tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | null;
  helpText?: string;
  icon?: React.ReactNode;
  containerClassName?: string;
  labelClassName?: string;
}

/**
 * InputField Component
 * Standardized form input container.
 * Follows DESIGN.md specifications:
 * - Height: h-11 (44px touch target)
 * - Border: border-2 border-brand-blue-100 rounded-xl bg-white
 * - Padding left: pl-10 when icon is present
 * - Label: font-subheading text-xs uppercase tracking-wider text-brand-blue-500
 * - Help text: font-mono text-2xs text-brand-blue-400
 * - Focus: border-brand-blue-500 + ring-2 ring-brand-blue-500/20
 * - Error: border-red-500 + ring-2 ring-red-500/20
 */
export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      error,
      helpText,
      icon,
      containerClassName,
      labelClassName,
      className,
      id,
      disabled,
      required,
      ...inputProps
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const helpId = `${inputId}-help`;

    return (
      <div className={cn('input-wrapper flex flex-col gap-1.5 w-full', containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'input-label font-subheading text-xs uppercase tracking-wider text-brand-blue-500 flex items-center justify-between',
              labelClassName
            )}
          >
            <span>
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </span>
          </label>
        )}

        <div className="relative flex items-center w-full">
          {icon && (
            <div className="input-icon absolute left-3.5 text-brand-blue-500 pointer-events-none flex items-center justify-center w-5 h-5">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : helpText ? helpId : undefined}
            className={cn(
              'input-field h-11 min-h-11 w-full border-2 rounded-xl bg-white font-sans text-base sm:text-sm text-brand-blue-500 placeholder:text-brand-blue-500 transition-all duration-200 focus:outline-none',
              icon ? 'pl-10 pr-4' : 'px-4',
              error
                ? 'border-red-500 focus:border-red-500 ring-2 ring-red-500/20 text-red-600'
                : 'border-brand-blue-300 hover:border-brand-blue-400 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500/20',
              disabled && 'border-brand-blue-100 bg-brand-blue-50/50 text-brand-blue-500/60 cursor-not-allowed',
              className
            )}
            {...inputProps}
          />
        </div>

        {error ? (
          <p id={errorId} role="alert" className="font-mono text-2xs text-red-600 font-medium">
            {error}
          </p>
        ) : helpText ? (
          <p id={helpId} className="font-mono text-2xs text-brand-blue-500">
            {helpText}
          </p>
        ) : null}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
```

---

<a id="srccomponentsuidoublebezelcardtsx"></a>
## 25. `src/components/ui/DoubleBezelCard.tsx`
* **Rol:** Componente Primitivo UI
* **Archivo:** [`src/components/ui/DoubleBezelCard.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/DoubleBezelCard.tsx)

```tsx
import React from 'react';
import { cn } from '@/lib/utils';

export interface DoubleBezelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  outerClassName?: string;
  innerClassName?: string;
  variant?: 'light' | 'dark';
  hoverEffect?: boolean;
}

/**
 * DoubleBezelCard Component
 * Signature Two-tier container system (outer bezel + inner card) for primary content.
 * Follows DESIGN.md specifications:
 * - Outer: bg-brand-blue-50/80, border-brand-blue-100, rounded-2xl (16px), p-2 (8px), shadow-float
 * - Inner: bg-white (or brand-blue-500 in dark variant), rounded-xl (12px), p-6, shadow-sm
 * - Hover: shadow-antigravity-deep, border-brand-blue-300
 */
export const DoubleBezelCard = React.forwardRef<HTMLDivElement, DoubleBezelCardProps>(
  (
    {
      children,
      className,
      outerClassName,
      innerClassName,
      variant = 'light',
      hoverEffect = true,
      ...props
    },
    ref
  ) => {
    const isDark = variant === 'dark';

    return (
      <div
        ref={ref}
        className={cn(
          'double-bezel-outer transition-all duration-300 rounded-2xl p-2 shadow-float',
          isDark
            ? 'bg-brand-blue-50/80 border border-brand-blue-100/80'
            : 'bg-brand-blue-50/80 border border-brand-blue-100',
          hoverEffect &&
            (isDark
              ? 'hover:shadow-antigravity-deep hover:border-brand-yellow-400/80'
              : 'hover:shadow-antigravity-deep hover:border-brand-blue-300'),
          outerClassName,
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'double-bezel-inner rounded-xl p-6 shadow-sm overflow-hidden transition-colors duration-200',
            isDark
              ? 'bg-brand-blue-500 border border-white/10 text-white'
              : 'bg-white border border-brand-blue-50/50 text-brand-blue-500',
            innerClassName
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

DoubleBezelCard.displayName = 'DoubleBezelCard';

export default DoubleBezelCard;
```

---

<a id="srccomponentsuiradiocardgrouptsx"></a>
## 26. `src/components/ui/RadioCardGroup.tsx`
* **Rol:** Componente Primitivo UI
* **Archivo:** [`src/components/ui/RadioCardGroup.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/RadioCardGroup.tsx)

```tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface RadioCardOption {
  id: string;
  label: string;
  description?: string;
  price?: string;
  badge?: string;
  serviceType?: 'EXPRESS' | 'LOW_COST' | 'FLEX' | string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface RadioCardGroupProps {
  options: RadioCardOption[];
  value: string;
  onChange: (value: string) => void;
  name?: string;
  className?: string;
  gridCols?: string;
}

/**
 * RadioCardGroup Component
 * Interactive service selection grid with distinct checked states per service type.
 * Follows DESIGN.md specifications:
 * - Grid 3 cols desktop, 1 col mobile
 * - Card: bg-white, border-2 border-brand-blue-100, rounded-xl, p-6
 * - Checked Express: bg-brand-blue-500, border-brand-blue-500, text-white
 * - Checked LowCost: bg-brand-blue-50, border-brand-blue-200, text-brand-blue-500
 * - Checked Flex: bg-brand-yellow-50, border-brand-yellow-200, text-brand-blue-500
 */
export const RadioCardGroup: React.FC<RadioCardGroupProps> = ({
  options,
  value,
  onChange,
  name = 'service-selector',
  className,
  gridCols = 'grid-cols-1 md:grid-cols-3',
}) => {
  return (
    <div
      role="radiogroup"
      aria-label="Selector de servicio"
      className={cn('grid gap-4 w-full', gridCols, className)}
    >
      {options.map((opt) => {
        const isChecked = value === opt.id;
        const type = (opt.serviceType || opt.id).toUpperCase();

        const getCheckedStyles = () => {
          if (type.includes('EXPRESS')) {
            return 'bg-brand-blue-500 border-brand-blue-500 text-white shadow-md';
          }
          if (type.includes('LOW') || type.includes('LOWCOST')) {
            return 'bg-brand-blue-50 border-brand-blue-200 text-brand-blue-500 shadow-sm';
          }
          if (type.includes('FLEX')) {
            return 'bg-brand-yellow-50 border-brand-yellow-200 text-brand-blue-500 shadow-sm';
          }
          return 'bg-brand-blue-500 border-brand-blue-500 text-white shadow-md';
        };

        const uncheckedStyles =
          'bg-white border-2 border-brand-blue-100 text-brand-blue-500 hover:border-brand-blue-200 hover:bg-brand-blue-50/30';

        const checkedStyles = isChecked ? getCheckedStyles() : uncheckedStyles;

        return (
          <label
            key={opt.id}
            role="radio"
            aria-checked={isChecked}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                if (!opt.disabled) onChange(opt.id);
              }
            }}
            onClick={() => {
              if (!opt.disabled) onChange(opt.id);
            }}
            className={cn(
              'relative flex flex-col justify-between p-6 rounded-xl border-2 transition-[transform,background-color,border-color,box-shadow] duration-160 ease-out cursor-pointer select-none hover:-translate-y-0.5 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow-500',
              checkedStyles,
              opt.disabled && 'opacity-50 cursor-not-allowed pointer-events-none'
            )}
          >
            <input
              type="radio"
              name={name}
              value={opt.id}
              checked={isChecked}
              onChange={() => onChange(opt.id)}
              disabled={opt.disabled}
              className="sr-only"
            />

            <div>
              {/* Card Header: Icon/Badge + Check indicator */}
              <div className="flex items-center justify-between mb-4">
                {opt.icon && (
                  <div
                    className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center transition-colors',
                      isChecked && type.includes('EXPRESS')
                        ? 'bg-white/20 text-white'
                        : 'bg-brand-blue-50 text-brand-blue-500 border border-brand-blue-100'
                    )}
                  >
                    {opt.icon}
                  </div>
                )}

                {opt.badge && (
                  <span
                    className={cn(
                      'font-subheading text-2xs uppercase tracking-wider px-2.5 py-1 rounded-full',
                      isChecked && type.includes('EXPRESS')
                        ? 'bg-brand-yellow-500 text-brand-blue-500'
                        : 'bg-brand-blue-50 text-brand-blue-500'
                    )}
                  >
                    {opt.badge}
                  </span>
                )}

                <div
                  className={cn(
                    'w-6 h-6 rounded-full border-2 flex items-center justify-center ml-auto transition-all',
                    isChecked
                      ? type.includes('EXPRESS')
                        ? 'bg-brand-yellow-500 border-brand-yellow-500 text-brand-blue-500'
                        : 'bg-brand-blue-500 border-brand-blue-500 text-white'
                      : 'border-brand-blue-200 bg-white'
                  )}
                >
                  {isChecked && <Check className="w-3.5 h-3.5 stroke-3" />}
                </div>
              </div>

              {/* Title & Description */}
              <h3
                className={cn(
                  'font-subheading text-xl uppercase tracking-wide mb-1',
                  isChecked && type.includes('EXPRESS') ? 'text-white' : 'text-brand-blue-500'
                )}
              >
                {opt.label}
              </h3>

              {opt.description && (
                <p
                  className={cn(
                    'text-xs font-sans leading-relaxed',
                    isChecked && type.includes('EXPRESS')
                      ? 'text-brand-blue-50'
                      : 'text-brand-blue-500'
                  )}
                >
                  {opt.description}
                </p>
              )}
            </div>

            {/* Price section if provided */}
            {opt.price && (
              <div className="mt-4 pt-3 border-t border-current/10 flex items-baseline justify-between">
                <span
                  className={cn(
                    'text-2xs font-subheading uppercase tracking-wider',
                    isChecked && type.includes('EXPRESS') ? 'text-brand-blue-50' : 'text-brand-blue-500'
                  )}
                >
                  DESDE
                </span>
                <span
                  className={cn(
                    'font-mono text-lg font-bold tabular-nums',
                    isChecked && type.includes('EXPRESS')
                      ? 'text-brand-yellow-500'
                      : 'text-brand-blue-500'
                  )}
                >
                  {opt.price}
                </span>
              </div>
            )}
          </label>
        );
      })}
    </div>
  );
};

export default RadioCardGroup;
```

---

<a id="srccomponentsuidynamicroutemaptsx"></a>
## 27. `src/components/ui/DynamicRouteMap.tsx`
* **Rol:** Componente Primitivo UI
* **Archivo:** [`src/components/ui/DynamicRouteMap.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/DynamicRouteMap.tsx)

```tsx
'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const LeafletRouteMap = dynamic(() => import('./LeafletRouteMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-75 bg-brand-blue-500 flex items-center justify-center rounded-3xl border border-white/10 animate-pulse">
      <div className="text-center space-y-2">
        <svg className="animate-spin h-8 w-8 text-brand-yellow mx-auto" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <span className="text-xs font-mono text-brand-blue-100">Cargando mapa interactivo...</span>
      </div>
    </div>
  ),
});

interface Coordinate {
  lat: number;
  lng: number;
}

interface DynamicRouteMapProps {
  origin: Coordinate | null;
  destination: Coordinate | null;
  routeCoords: [number, number][];
  distanceKm?: number;
  serviceType?: 'EXPRESS' | 'LOW_COST';
}

export default function DynamicRouteMap(props: DynamicRouteMapProps) {
  return <LeafletRouteMap {...props} />;
}
```

---

<a id="srchooksusegoogleroutets"></a>
## 28. `src/hooks/useGoogleRoute.ts`
* **Rol:** Hook React
* **Archivo:** [`src/hooks/useGoogleRoute.ts`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/hooks/useGoogleRoute.ts)

```tsx
'use client';

import { useState, useCallback } from 'react';

export interface Coordinate {
  lat: number;
  lng: number;
}

export interface RouteResult {
  distanceKm: number;
  durationMin: number;
  routeCoords: [number, number][]; // [lng, lat]
}

interface UseGoogleRouteState {
  result: RouteResult | null;
  error: string | null;
  isLoading: boolean;
}

/**
 * Hook para calcular rutas reales por carretera utilizando la API de Google Directions.
 * Requiere NEXT_PUBLIC_GOOGLE_MAPS_API_KEY configurada.
 * Soporta AbortController para cancelación de requests en vuelo.
 */
export function useGoogleRoute() {
  const [state, setState] = useState<UseGoogleRouteState>({
    result: null,
    error: null,
    isLoading: false,
  });

  const fetchRoute = useCallback(
    async (
      origin: Coordinate,
      destination: Coordinate,
      signal?: AbortSignal
    ): Promise<RouteResult | null> => {
      setState({ result: null, error: null, isLoading: true });

      try {
        const url = `/api/routes/directions?origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}`;

        const res = await fetch(url, { signal });
        if (!res.ok) {
          throw new Error('Error al obtener la ruta de Google Maps');
        }

        const data = await res.json();

        if (data.status !== 'OK' || !data.routes || data.routes.length === 0) {
          throw new Error(data.error_message || 'No se encontró una ruta vial entre los puntos indicados.');
        }

        const route = data.routes[0];
        const leg = route.legs[0];

        // Google devuelve la distancia en metros y la duración en segundos
        const distanceKm = Math.round((leg.distance.value / 1000) * 10) / 10;
        const durationMin = Math.round(leg.duration.value / 60);

        // Decodificación simple del polyline retornado por Google
        const routeCoords = decodePolyline(route.overview_polyline.points);

        const result: RouteResult = {
          distanceKm,
          durationMin,
          routeCoords,
        };

        setState({ result, error: null, isLoading: false });
        return result;
      } catch (err: unknown) {
        // Ignorar errores de abort (cancelación intencional)
        if (err instanceof Error && err.name === 'AbortError') {
          setState({ result: null, error: null, isLoading: false });
          return null;
        }
        console.error('[useGoogleRoute]', err);
        const errorMessage = err instanceof Error ? err.message : 'No se pudo calcular la ruta. Por favor, intentá de nuevo más tarde.';
        setState({ result: null, error: errorMessage, isLoading: false });
        return null;
      }
    },
    []
  );

  const reset = useCallback(() => {
    setState({ result: null, error: null, isLoading: false });
  }, []);

  return {
    ...state,
    fetchRoute,
    reset,
  };
}

/**
 * Decodifica una cadena de polyline de Google Maps a una lista de coordenadas [lng, lat]
 */
function decodePolyline(encoded: string): [number, number][] {
  const points: [number, number][] = [];
  let index = 0, len = encoded.length;
  let lat = 0, lng = 0;

  while (index < len) {
    let b, shift = 0, result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    const dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
    lat += dlat;

    shift = 0;
    result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    const dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
    lng += dlng;

    // Guardar como [lng, lat] para que sea compatible con Leaflet
    points.push([lng * 1e-5, lat * 1e-5]);
  }

  return points;
}
```

---

<a id="srcactionsquotets"></a>
## 29. `src/actions/quote.ts`
* **Rol:** Módulo Local
* **Archivo:** [`src/actions/quote.ts`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/actions/quote.ts)

```tsx
'use server';

import { cache } from 'react';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { calculateExpressPrice, calculateLowCostPrice, type PriceRangeProp } from '@/lib/pricing';
import { getRouteCache, setRouteCache } from '@/lib/route-cache';

// Tope razonable para la distancia aceptada por el cotizador (km).
const MAX_DISTANCE_KM = 200;

// Esquema de entrada: coordenadas de origen/destino + tipo de servicio
const quoteSchema = z.object({
  origenLat: z.number().finite().min(-90).max(90),
  origenLng: z.number().finite().min(-180).max(180),
  destinoLat: z.number().finite().min(-90).max(90),
  destinoLng: z.number().finite().min(-180).max(180),
  serviceType: z.enum(['EXPRESS', 'LOW_COST']),
});

export type QuoteState = {
  success: boolean;
  price: number | 'consultar' | null;
  distanceKm: number | null;
  error: string | null;
};

/**
 * Calcula la distancia vial real entre dos coordenadas usando Google Directions API.
 * Lado servidor: valida que la distancia coincida con la ruta real.
 * 
 * Cacheado con React.cache() para deduplicar dentro de la misma request
 * (cuando se llama para EXPRESS y LOW_COST en paralelo).
 */
function safeCache<T extends (...args: any[]) => any>(fn: T): T {
  try {
    const cachedFn = cache(fn);
    return ((...args: Parameters<T>) => {
      try {
        return cachedFn(...args);
      } catch {
        return fn(...args);
      }
    }) as T;
  } catch {
    return fn;
  }
}

const fetchRouteDistanceCached = safeCache(async function fetchRouteDistance(
  origenLat: number,
  origenLng: number,
  destinoLat: number,
  destinoLng: number
): Promise<number | null> {
  // 1. Revisar caché en memoria compartido entre solicitudes concurrentes
  const cached = getRouteCache(origenLat, origenLng, destinoLat, destinoLng);
  if (cached) {
    return cached.distanceKm;
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY?.trim() || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
  if (!apiKey) {
    console.error('[calculateQuoteAction] GOOGLE_MAPS_API_KEY no configurada');
    return null;
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origenLat},${origenLng}&destination=${destinoLat},${destinoLng}&key=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== 'OK' || !data.routes || data.routes.length === 0) {
      console.error('[calculateQuoteAction] Google Directions error:', data.error_message || data.status);
      return null;
    }

    const leg = data.routes[0].legs[0];
    // Google devuelve metros → km con 1 decimal
    const distanceKm = Math.round((leg.distance.value / 1000) * 10) / 10;
    const durationMin = Math.round((leg.duration?.value ?? 0) / 60);

    setRouteCache(origenLat, origenLng, destinoLat, destinoLng, {
      distanceKm,
      durationMin,
      polyline: data.routes[0].overview_polyline?.points,
    });

    return distanceKm;
  } catch (error) {
    console.error('[calculateQuoteAction] Error fetch route:', error);
    return null;
  }
});

/**
 * Obtiene los rangos de precios desde la BD con deduplicación por request.
 */
const getPriceRangesCached = safeCache(async function getPriceRanges(
  serviceType: 'EXPRESS' | 'LOW_COST'
): Promise<PriceRangeProp[]> {
  try {
    return await prisma.priceRange.findMany({
      where: { serviceType },
    });
  } catch (error) {
    console.error('No se pudieron leer las tarifas de PriceRange; se usa el fallback de pricing.ts', error);
    return [];
  }
});

export async function calculateQuoteAction(
  prevState: QuoteState,
  formData: FormData
): Promise<QuoteState> {
  try {
    const rawData = {
      origenLat: Number(formData.get('origenLat')),
      origenLng: Number(formData.get('origenLng')),
      destinoLat: Number(formData.get('destinoLat')),
      destinoLng: Number(formData.get('destinoLng')),
      serviceType: formData.get('serviceType'),
    };

    const validatedData = quoteSchema.parse(rawData);

    // 1. Calcular distancia real en servidor (no confiar en cliente)
    // Usa React.cache() para deduplicar cuando se llama para EXPRESS y LOW_COST en paralelo
    const distanceKm = await fetchRouteDistanceCached(
      validatedData.origenLat,
      validatedData.origenLng,
      validatedData.destinoLat,
      validatedData.destinoLng
    );

    if (distanceKm === null) {
      return {
        success: false,
        price: null,
        distanceKm: null,
        error: 'No se pudo calcular la ruta. Verificá las direcciones e intentá de nuevo.',
      };
    }

    if (distanceKm > MAX_DISTANCE_KM) {
      return {
        success: false,
        price: null,
        distanceKm,
        error: `La distancia (${distanceKm} km) supera el límite permitido (${MAX_DISTANCE_KM} km).`,
      };
    }

    // 2. Leer tarifas de PriceRange (BD) → fallback pricing.ts
    // Usa React.cache() para deduplicar dentro del mismo request
    const priceRanges = await getPriceRangesCached(validatedData.serviceType);

    // 3. Calcular precio en servidor con la distancia validada
    let price: number | 'consultar';
    if (validatedData.serviceType === 'EXPRESS') {
      price = calculateExpressPrice(distanceKm, priceRanges);
    } else {
      price = calculateLowCostPrice(distanceKm, priceRanges);
    }

    return {
      success: true,
      price,
      distanceKm,
      error: null,
    };
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        price: null,
        distanceKm: null,
        error: error.issues?.[0]?.message || 'Error de validación: coordenadas inválidas',
      };
    }
    return {
      success: false,
      price: null,
      distanceKm: null,
      error: 'Error interno al calcular la cotización',
    };
  }
}
```

---

<a id="srclibwhatsappts"></a>
## 30. `src/lib/whatsapp.ts`
* **Rol:** Librería / Utilidad Local
* **Archivo:** [`src/lib/whatsapp.ts`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/lib/whatsapp.ts)

```tsx
/**
 * Helper unificado para generación de URLs de WhatsApp con trazabilidad y UTMs.
 * Conforme a BL-25 (CAMP-03, CAMP-05).
 */
import { getStoredUtms } from './analytics';

export const WHATSAPP_PHONE = '542236602699';

export interface BuildWhatsAppUrlOptions {
  message?: string;
  source?: string;
}

/**
 * Genera la URL de WhatsApp oficial con mensaje prearmado y trazabilidad UTM limpia.
 * Respeta el formato internacional y agrega etiqueta de origen [ref: ...] si existen UTMs.
 */
export function buildWhatsAppUrl({ message, source }: BuildWhatsAppUrlOptions = {}): string {
  const defaultMsg = 'Hola Envíos DosRuedas! Quiero consultar por un servicio de mensajería.';
  let text = message || defaultMsg;

  if (typeof window !== 'undefined') {
    const utms = getStoredUtms();
    const utmTag = utms.utm_source || utms.utm_campaign || source;
    if (utmTag && !text.includes('[ref:')) {
      text += ` [ref: ${utmTag}]`;
    }
  }

  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
}
```

---

<a id="srccomponentsuiindexts"></a>
## 31. `src/components/ui/index.ts`
* **Rol:** Componente Primitivo UI
* **Archivo:** [`src/components/ui/index.ts`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/index.ts)

```tsx
// Core UI Base Primitives - Envíos DosRuedas (2026)
export { DoubleBezelCard, type DoubleBezelCardProps } from './DoubleBezelCard';
export { CTANestedPill, type CTANestedPillProps, type CTANestedPillVariant, type CTANestedPillSize } from './CTANestedPill';
export { RadioCardGroup, type RadioCardGroupProps, type RadioCardOption } from './RadioCardGroup';
export { InputField, type InputFieldProps } from './InputField';
export { StepperHorizontal, type StepperHorizontalProps, type HorizontalStep } from './StepperHorizontal';
export { StepperVertical, type StepperVerticalProps, type VerticalStep } from './StepperVertical';
export { LogosCarousel, type LogosCarouselProps, type LogoItem } from './LogosCarousel';
export { FloatTiltCard, type FloatTiltCardProps } from './FloatTiltCard';
export { BentoGrid, BentoGridItem, type BentoGridProps, type BentoGridItemProps } from './BentoGrid';
export { Badge, type BadgeProps, type BadgeVariant, type BadgeSize } from './Badge';
export { Knockout, type KnockoutProps, type KnockoutTone } from './Knockout';
export { default as HeroProceduralBackground, type HeroProceduralBackgroundProps } from './HeroProceduralBackground';
export {
  default as ServicePricing,
  type ServicePricingProps,
  type PriceTier,
  type PricingFact,
  type ServiceType,
  type Tone,
} from './ServicePricing';

// Helper components
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './card';
```

---

<a id="srccomponentsuileafletroutemaptsx"></a>
## 32. `src/components/ui/LeafletRouteMap.tsx`
* **Rol:** Componente Primitivo UI
* **Archivo:** [`src/components/ui/LeafletRouteMap.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/LeafletRouteMap.tsx)

```tsx
'use client';

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';

interface Coordinate {
  lat: number;
  lng: number;
}

interface LeafletRouteMapProps {
  origin: Coordinate | null;
  destination: Coordinate | null;
  routeCoords: [number, number][]; // Array of [lng, lat] from OSRM GeoJSON
  distanceKm?: number;
  serviceType?: 'EXPRESS' | 'LOW_COST';
}

// Mar del Plata bounds
const mdpCenter: L.LatLngExpression = [-38.0055, -57.5426];
const southWest = L.latLng(-38.1500, -57.7000);
const northEast = L.latLng(-37.8500, -57.4000);
const bounds = L.latLngBounds(southWest, northEast);

export default function LeafletRouteMap({
  origin,
  destination,
  routeCoords,
  distanceKm,
  serviceType = 'EXPRESS',
}: LeafletRouteMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const markerAInstance = useRef<L.Marker | null>(null);
  const markerBInstance = useRef<L.Marker | null>(null);
  const glowPolylineInstance = useRef<L.Polyline | null>(null);
  const polylineInstance = useRef<L.Polyline | null>(null);

  // Initialize Map
  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;

    const map = L.map(mapContainer.current, {
      center: mdpCenter,
      zoom: 13,
      minZoom: 11,
      maxZoom: 17,
      maxBounds: bounds,
      maxBoundsViscosity: 0.8,
      zoomControl: false,
    });

    // Custom positioned zoom control
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // OpenStreetMap tiles with high clarity
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    mapInstance.current = map;

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  // Update Markers and Animated Polylines
  useEffect(() => {
    const map = mapInstance.current;
    if (!map) return;

    // Clear old layers
    if (markerAInstance.current) map.removeLayer(markerAInstance.current);
    if (markerBInstance.current) map.removeLayer(markerBInstance.current);
    if (glowPolylineInstance.current) map.removeLayer(glowPolylineInstance.current);
    if (polylineInstance.current) map.removeLayer(polylineInstance.current);

    markerAInstance.current = null;
    markerBInstance.current = null;
    glowPolylineInstance.current = null;
    polylineInstance.current = null;

    const activeBounds: L.LatLng[] = [];

    // Add Marker A (Origen) - Styled Pin with radar pulse
    if (origin) {
      const latLng = L.latLng(origin.lat, origin.lng);
      activeBounds.push(latLng);
      markerAInstance.current = L.marker(latLng, {
        icon: L.divIcon({
          html: `
            <div class="relative flex items-center justify-center w-10 h-10 map-marker-animate">
              <span class="absolute w-10 h-10 rounded-full bg-brand-blue-500/50 radar-pulse-ring"></span>
              <div class="relative bg-brand-blue-500 text-white rounded-full w-9 h-9 flex items-center justify-center border-2 border-white shadow-xl shadow-brand-blue-500/40">
                <div class="flex flex-col items-center justify-center leading-none">
                  <span class="text-2xs font-subheading text-brand-yellow-500 uppercase tracking-tighter">RET</span>
                  <span class="text-xs font-display">A</span>
                </div>
              </div>
              <div class="absolute -bottom-1 w-2 h-2 bg-brand-blue-500 rotate-45 border-r border-b border-white"></div>
            </div>
          `,
          className: '',
          iconSize: [40, 40],
          iconAnchor: [20, 36],
        }),
      }).addTo(map);
    }

    // Add Marker B (Destino) - High visibility yellow finish pin
    if (destination) {
      const latLng = L.latLng(destination.lat, destination.lng);
      activeBounds.push(latLng);
      markerBInstance.current = L.marker(latLng, {
        icon: L.divIcon({
          html: `
            <div class="relative flex items-center justify-center w-10 h-10 map-marker-animate">
              <span class="absolute w-10 h-10 rounded-full bg-brand-yellow-500/60 radar-pulse-ring"></span>
              <div class="relative bg-brand-yellow-500 text-brand-blue-500 rounded-full w-9 h-9 flex items-center justify-center border-2 border-brand-blue-500 shadow-xl shadow-brand-blue-500/50">
                <div class="flex flex-col items-center justify-center leading-none">
                  <span class="text-2xs font-subheading text-brand-blue-500 uppercase tracking-tighter">ENT</span>
                  <span class="text-xs font-display">B</span>
                </div>
              </div>
              <div class="absolute -bottom-1 w-2 h-2 bg-brand-yellow-500 rotate-45 border-r border-b border-brand-blue-500"></div>
            </div>
          `,
          className: '',
          iconSize: [40, 40],
          iconAnchor: [20, 36],
        }),
      }).addTo(map);
    }

    // Add animated route line if coords exist
    if (routeCoords && routeCoords.length > 0) {
      // OSRM returns geometry as [lng, lat], Leaflet wants [lat, lng]
      const latLngs = routeCoords.map((coord) => L.latLng(coord[1], coord[0]));
      
      // Underlay glow polyline
      glowPolylineInstance.current = L.polyline(latLngs, {
        color: 'var(--color-brand-blue-500)',
        weight: 8,
        opacity: 0.7,
        lineCap: 'round',
        lineJoin: 'round',
      }).addTo(map);

      // Active animated dash polyline
      polylineInstance.current = L.polyline(latLngs, {
        color: 'var(--color-brand-yellow-500)',
        weight: 5,
        opacity: 1,
        className: 'leaflet-route-animated',
        lineCap: 'round',
        lineJoin: 'round',
      }).addTo(map);

      // Fit map to route bounds
      map.fitBounds(polylineInstance.current.getBounds(), {
        padding: [50, 50],
        maxZoom: 15,
        animate: true,
      });
    } else if (activeBounds.length > 0) {
      // If no route but markers exist, fit bounds of markers
      if (activeBounds.length === 1) {
        map.setView(activeBounds[0], 14, { animate: true });
      } else {
        const boundsObj = L.latLngBounds(activeBounds);
        map.fitBounds(boundsObj, { padding: [60, 60], animate: true });
      }
    } else {
      // Reset view to default center
      map.setView(mdpCenter, 13, { animate: true });
    }

  }, [origin, destination, routeCoords]);

  return (
    <div className="w-full h-full min-h-75 relative rounded-2xl overflow-hidden bg-brand-blue-500 select-none">
      {/* Map Target Canvas */}
      <div
        ref={mapContainer}
        role="region"
        aria-label="Mapa interactivo de ruta en Mar del Plata"
        className="relative w-full h-full min-h-75 z-0 overflow-hidden"
      >
        {/* Texto accesible alternativo para lectores de pantalla (BL-09) */}
        <div className="sr-only" aria-live="polite">
          {origin && destination
            ? `Mapa con ruta trazada entre origen y destino en Mar del Plata. Distancia aproximada: ${distanceKm || 0} kilómetros. Modalidad de servicio: ${serviceType === 'EXPRESS' ? 'Express' : 'LowCost'}.`
            : 'Mapa satelital de Mar del Plata preparado para trazar la ruta seleccionada.'}
        </div>
      </div>

      {/* Top Left: Logo Badge Branding Overlay */}
      <div className="absolute top-3 left-3 z-400 pointer-events-none">
        <div className="bg-brand-blue-500/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-brand-blue-500/30 shadow-lg flex items-center gap-2.5">
          <div className="relative w-6 h-6 shrink-0 bg-white/10 rounded-lg p-0.5 flex items-center justify-center">
            <Image
              src="/logo-envios-simplified.webp"
              alt="Logo DosRuedas"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-2xs font-display uppercase tracking-wider text-white">
              DosRuedas <span className="text-brand-yellow-500">Live</span>
            </span>
            <span className="text-2xs font-mono text-brand-blue-100">
              {serviceType === 'EXPRESS' ? 'Franja de 3 hs' : 'Reparto programado'}
            </span>
          </div>
        </div>
      </div>

      {/* Top Right: Live Distance Pill Overlay (if distance available) */}
      {distanceKm !== undefined && distanceKm > 0 && (
        <div className="absolute top-3 right-3 z-400 pointer-events-none">
          <div className="bg-brand-yellow-500 text-brand-blue-500 px-3 py-1.5 rounded-xl border-2 border-brand-blue-500 shadow-xl flex items-center gap-2 animate-pulse-subtle">
            <span className="text-2xs font-subheading uppercase tracking-wider">
              Distancia
            </span>
            <span className="text-sm font-mono font-black tabular-nums bg-brand-blue-500 text-white px-2 py-0.5 rounded-md">
              {distanceKm.toLocaleString('es-AR')} km
            </span>
          </div>
        </div>
      )}

      {/* Bottom Center Route Status Pill */}
      {routeCoords.length > 0 && (
        <div className="absolute bottom-3 left-3 z-400 pointer-events-none">
          <div className="bg-brand-blue-500/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-brand-yellow-500/40 text-2xs font-mono text-brand-yellow-500 flex items-center gap-1.5 shadow-md">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-yellow-500 animate-ping" />
            <span>Ruta Óptima Trazada</span>
          </div>
        </div>
      )}
    </div>
  );
}
```

---

<a id="srclibprismats"></a>
## 33. `src/lib/prisma.ts`
* **Rol:** Librería / Utilidad Local
* **Archivo:** [`src/lib/prisma.ts`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/lib/prisma.ts)

```tsx
import 'dotenv/config'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@generated/prisma/client'

const prismaClientSingleton = () => {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL?.includes('sslmode=verify-full')
      ? { rejectUnauthorized: true }
      : process.env.DATABASE_URL?.includes('sslmode=no-verify')
      ? { rejectUnauthorized: false }
      : undefined,
  })
  const adapter = new PrismaPg(pool)
  return new PrismaClient({ adapter })
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
```

---

<a id="srclibroutecachets"></a>
## 34. `src/lib/route-cache.ts`
* **Rol:** Librería / Utilidad Local
* **Archivo:** [`src/lib/route-cache.ts`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/lib/route-cache.ts)

```tsx
/**
 * Cache compartido en memoria con TTL para cálculo y deduplicación de rutas.
 * Indexado por coordenadas de origen y destino redondeadas a 4 decimales (~11 metros).
 * Evita llamadas redundantes a Google Maps Platform (Routes / Directions API)
 * cuando múltiples Server Actions (Express y LowCost) o peticiones del cliente
 * consultan el mismo trazado en la misma sesión o franja horaria.
 */

export interface CachedRoute {
  distanceKm: number;
  durationMin?: number;
  routeCoords?: [number, number][];
  polyline?: string;
  timestamp: number;
}

const ROUTE_CACHE = new Map<string, CachedRoute>();
const MAX_CACHE_SIZE = 1000;
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 horas

function formatCoord(coord: number): string {
  return Number(coord.toFixed(4)).toString();
}

export function buildRouteKey(
  originLat: number,
  originLng: number,
  destLat: number,
  destLng: number
): string {
  return `${formatCoord(originLat)},${formatCoord(originLng)}->${formatCoord(destLat)},${formatCoord(destLng)}`;
}

export function getRouteCache(
  originLat: number,
  originLng: number,
  destLat: number,
  destLng: number
): CachedRoute | null {
  const key = buildRouteKey(originLat, originLng, destLat, destLng);
  const entry = ROUTE_CACHE.get(key);
  if (!entry) return null;

  if (Date.now() - entry.timestamp > CACHE_TTL_MS) {
    ROUTE_CACHE.delete(key);
    return null;
  }

  return entry;
}

export function setRouteCache(
  originLat: number,
  originLng: number,
  destLat: number,
  destLng: number,
  data: {
    distanceKm: number;
    durationMin?: number;
    routeCoords?: [number, number][];
    polyline?: string;
  }
): void {
  // Poda preventiva si se supera el tamaño máximo
  if (ROUTE_CACHE.size >= MAX_CACHE_SIZE) {
    const oldestKey = ROUTE_CACHE.keys().next().value;
    if (oldestKey) ROUTE_CACHE.delete(oldestKey);
  }

  const key = buildRouteKey(originLat, originLng, destLat, destLng);
  ROUTE_CACHE.set(key, {
    ...data,
    timestamp: Date.now(),
  });
}

export function clearRouteCache(): void {
  ROUTE_CACHE.clear();
}
```

---

<a id="srccomponentsuistepperhorizontaltsx"></a>
## 35. `src/components/ui/StepperHorizontal.tsx`
* **Rol:** Componente Primitivo UI
* **Archivo:** [`src/components/ui/StepperHorizontal.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/StepperHorizontal.tsx)

```tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface HorizontalStep {
  title: string;
  subtitle?: string;
}

export interface StepperHorizontalProps {
  steps: HorizontalStep[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
  className?: string;
}

/**
 * StepperHorizontal Component
 * Multi-step progress indicator for quoters and multi-step forms.
 * Follows DESIGN.md specifications:
 * - Line 2px: brand-blue-100 (completed: brand-yellow-500)
 * - Circles 40px: completed=yellow-500 (STRICTLY NO GREEN!), active=brand-blue-500 + ring, pending=blue-100
 * - Labels: font-subheading text-xs uppercase tracking-wider
 */
export const StepperHorizontal: React.FC<StepperHorizontalProps> = ({
  steps,
  currentStep,
  onStepClick,
  className,
}) => {
  return (
    <div className={cn('w-full py-4', className)}>
      <div className="relative flex items-center justify-between w-full">
        {/* Background Step Line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-brand-blue-100 z-0" />

        {/* Active Step Progress Line */}
        <div
          className="absolute top-5 left-0 h-0.5 bg-brand-yellow-500 transition-all duration-300 z-0"
          style={{
            width: `${(Math.min(currentStep, steps.length - 1) / Math.max(steps.length - 1, 1)) * 100}%`,
          }}
        />

        {steps.map((step, idx) => {
          const isCompleted = idx < currentStep;
          const isActive = idx === currentStep;
          const isPending = idx > currentStep;
          const isClickable = onStepClick && (isCompleted || isActive);

          return (
            <div
              key={idx}
              className="flex flex-col items-center relative z-10 group"
              onClick={() => isClickable && onStepClick(idx)}
              role={isClickable ? 'button' : undefined}
              tabIndex={isClickable ? 0 : undefined}
              onKeyDown={(e) => {
                if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  onStepClick(idx);
                }
              }}
            >
              {/* Step Circle (40px) */}
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center font-subheading text-base transition-all duration-200 border-2 select-none',
                  isCompleted &&
                    'bg-brand-yellow-500 border-brand-yellow-500 text-brand-blue-500 shadow-sm',
                  isActive &&
                    'bg-brand-blue-500 border-brand-blue-500 text-white ring-4 ring-brand-blue-500/20 scale-105',
                  isPending &&
                    'bg-white border-brand-blue-300 text-brand-blue-500',
                  isClickable && 'cursor-pointer hover:scale-110'
                )}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5 stroke-3 text-brand-blue-500" />
                ) : (
                  <span>{idx + 1}</span>
                )}
              </div>

              {/* Step Label */}
              <div className="mt-2 text-center max-w-30">
                <span
                  className={cn(
                    'block font-subheading text-xs uppercase tracking-wider transition-colors',
                    isCompleted && 'text-brand-blue-500',
                    isActive && 'text-brand-blue-500',
                    isPending && 'text-brand-blue-500'
                  )}
                >
                  {step.title}
                </span>
                {step.subtitle && (
                  <span className="block font-mono text-2xs text-brand-blue-500 leading-tight mt-0.5">
                    {step.subtitle}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepperHorizontal;
```

---

<a id="srccomponentsuistepperverticaltsx"></a>
## 36. `src/components/ui/StepperVertical.tsx`
* **Rol:** Componente Primitivo UI
* **Archivo:** [`src/components/ui/StepperVertical.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/StepperVertical.tsx)

```tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface VerticalStep {
  number?: string | number;
  title: string;
  description: string;
  detail?: string;
  badge?: string;
}

export interface StepperVerticalProps {
  steps: VerticalStep[];
  activeStep: number;
  completedSteps?: number[];
  className?: string;
  variant?: 'light' | 'dark';
}

/**
 * StepperVertical Component
 * Vertical timeline & process indicator ("How It Works", tracking steps).
 * Follows DESIGN.md specifications:
 * - Vertical line 2px left (brand-blue-100 or white/20 in dark mode)
 * - Dots 24px fixed left with 3px border
 * - Completed: brand-yellow-500 + brand-yellow-100 ring — STRICTLY NO GREEN!
 * - Active: brand-yellow-500 + ring-4 ring-brand-yellow-500/30 + pulse-subtle
 * - Pending: brand-blue-100 / muted
 * - Numbers in font-display text-2xl/h2
 */
export const StepperVertical: React.FC<StepperVerticalProps> = ({
  steps,
  activeStep,
  completedSteps,
  className,
  variant = 'light',
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={cn('relative space-y-8 pl-8 md:pl-10', className)}>
      {/* Vertical Connecting Line */}
      <div
        className={cn(
          'absolute top-3 bottom-3 left-3 md:left-3.5 w-0.5 -translate-x-1/2 z-0',
          isDark ? 'bg-white/20' : 'bg-brand-blue-100'
        )}
      />

      {steps.map((step, idx) => {
        const stepNum = step.number !== undefined ? step.number : idx + 1;
        const isCompleted =
          completedSteps?.includes(idx) ?? idx < activeStep;
        const isActive = idx === activeStep;
        const isPending = !isCompleted && !isActive;

        return (
          <div key={idx} className="relative flex items-start gap-4 md:gap-6 group">
            {/* Step Dot (24px fixed left) */}
            <div
              className={cn(
                'absolute -left-8 md:-left-10 top-1 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm transition-all duration-300 z-10',
                isCompleted &&
                  'bg-brand-yellow-500 border-white ring-4 ring-brand-yellow-100 text-brand-blue-500',
                isActive &&
                  'bg-brand-yellow-500 border-white ring-4 ring-brand-yellow-500/30 animate-pulse-subtle text-brand-blue-500 scale-110',
                isPending &&
                  (isDark
                    ? 'bg-brand-blue-500 border-brand-blue-300 text-brand-blue-200'
                    : 'bg-brand-blue-100 border-white text-brand-blue-500')
              )}
            >
              {isCompleted ? (
                <Check className="w-3.5 h-3.5 stroke-3" />
              ) : (
                <span className="w-2 h-2 rounded-full bg-current" />
              )}
            </div>

            {/* Step Content */}
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    'font-display text-xl md:text-2xl tracking-tight uppercase leading-none',
                    isActive || isCompleted
                      ? isDark
                        ? 'text-brand-yellow-500'
                        : 'text-brand-blue-500'
                      : isDark
                      ? 'text-brand-blue-50'
                      : 'text-brand-blue-500'
                  )}
                >
                  {typeof stepNum === 'number' && stepNum < 10 ? `0${stepNum}` : stepNum}.
                </span>

                <h3
                  className={cn(
                    'font-display text-lg md:text-xl uppercase tracking-wide leading-tight',
                    isActive
                      ? isDark
                        ? 'text-white'
                        : 'text-brand-blue-500'
                      : isCompleted
                      ? isDark
                        ? 'text-white/90'
                        : 'text-brand-blue-500'
                      : isDark
                      ? 'text-brand-blue-50'
                      : 'text-brand-blue-500'
                  )}
                >
                  {step.title}
                </h3>

                {step.badge && (
                  <span
                    className={cn(
                      'font-subheading text-2xs uppercase tracking-wider px-2 py-0.5 rounded-full',
                      isActive
                        ? 'bg-brand-yellow-500 text-brand-blue-500'
                        : 'bg-brand-blue-50 text-brand-blue-500'
                    )}
                  >
                    {step.badge}
                  </span>
                )}
              </div>

              <p
                className={cn(
                  'font-sans text-xs md:text-sm leading-relaxed max-w-xl',
                  isDark ? 'text-brand-blue-50' : 'text-brand-blue-500'
                )}
              >
                {step.description}
              </p>

              {step.detail && (
                <p
                  className={cn(
                    'font-mono text-2xs mt-1',
                    isDark ? 'text-brand-yellow-300' : 'text-brand-blue-500'
                  )}
                >
                  {step.detail}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepperVertical;
```

---

<a id="srccomponentsuilogoscarouseltsx"></a>
## 37. `src/components/ui/LogosCarousel.tsx`
* **Rol:** Componente Primitivo UI
* **Archivo:** [`src/components/ui/LogosCarousel.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/LogosCarousel.tsx)

```tsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useReducedMotion } from 'motion/react';

export interface LogoItem {
  name: string;
  logoUrl?: string;
  logoSvg?: keyof typeof PARTNER_SVG_MAP;
  alt?: string;
}

export interface LogosCarouselProps {
  logos?: LogoItem[];
  speed?: number;
  className?: string;
}

/**
 * Real partner logos from simple-icons CDN
 * These are actual companies/services in the Mar del Plata logistics ecosystem
 */
const REAL_PARTNERS: LogoItem[] = [
  { name: 'MercadoLibre', logoSvg: 'mercadolibre', alt: 'MercadoLibre Flex' },
  { name: 'Vercel', logoSvg: 'vercel', alt: 'Vercel hosting' },
  { name: 'PostgreSQL', logoSvg: 'postgresql', alt: 'PostgreSQL database' },
  { name: 'Prisma', logoSvg: 'prisma', alt: 'Prisma ORM' },
  { name: 'Tailwind CSS', logoSvg: 'tailwindcss', alt: 'Tailwind CSS' },
  { name: 'Next.js', logoSvg: 'nextdotjs', alt: 'Next.js framework' },
  { name: 'TypeScript', logoSvg: 'typescript', alt: 'TypeScript' },
  { name: 'GitHub', logoSvg: 'github', alt: 'GitHub' },
];

const PARTNER_SVG_MAP = {
  mercadolibre: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.57 11.18c-.24-.77-.87-1.31-1.63-1.31-1.33 0-1.43 1.4-1.51 1.52-.08.15-.24.27-.4.27H10.7v2.96h4.3c.14 0 .28-.11.32-.24.03-.14.13-.28.18-.44.21-.7.11-1.35-.42-1.75-.8-.6-.5-1.52-.5-2.17 0-.47.33-.84.76-1.27 1.33-.46.63-.23 1.44.45 1.82.25.14.64-.13.84-.45.27-.4.12-1.08-.02-1.38-1.12-.24-2.46.55-3.08 1.62-.73 1.28-.66 2.82.21 3.77 1.42 1.54 4.09 1.5 5.42-.18.38-.5.72-.87 1.03-.88-.75-2.07-1.16-3.54-1.24-.49 0-.99.05-1.49.14-.27.03-.54.05-.82.05h-1.3v-1.97h1.31c.55 0 1.02-.07 1.48-.15.5-.07.9-.18 1.35-.18.85 0 1.57.24 2.28.58.36.18.6.36.8.66.19.3.4.62.74.86 1.23 1.17 1.8 3.62.9 5.17z"/>
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.78 4.22a.75.75 0 0 0-1.06 0l-2.72 2.72-10.04-10.04a.75.75 0 1 0-1.06 1.06l10.5 10.5a.75.75 0 0 0 1.06 0l10.5-10.5a.75.75 0 0 0 0-1.06Z"/>
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
    </svg>
  ),
  prisma: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  tailwindcss: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5zm0 10L2 22l10-5 10 5-10-5z"/>
    </svg>
  ),
  nextdotjs: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.5 3.5L5 12l14.5 8.5V3.5zm-13 9L16 12l-4.5-4.5v9z"/>
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
};

/**
 * LogosCarousel Component
 * Infinite horizontal scrolling partner logo marquee.
 * Follows DESIGN.md specifications:
 * - Uses animate-logos-scroll from globals.css
 * - Real partners via inline SVGs (no external dependencies)
 * - Respects prefers-reduced-motion via useReducedMotion()
 * - Mask gradient: linear-gradient(to right, transparent, black 10%, black 90%, transparent)
 */
export const LogosCarousel: React.FC<LogosCarouselProps> = ({
  logos = REAL_PARTNERS,
  speed = 30,
  className,
}) => {
  const shouldReduce = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Triple items list to ensure smooth infinite loop without visual gap
  const marqueeItems = [...logos, ...logos, ...logos];

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden py-4 select-none',
        className
      )}
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div
        className={cn(
          'flex items-center gap-12 w-max',
          shouldReduce ? 'animate-logos-scroll' : '',
          isPaused || shouldReduce ? 'animation-paused' : ''
        )}
        style={{
          animationDuration: shouldReduce ? undefined : `${speed}s`,
          animationPlayState: isPaused || shouldReduce ? 'paused' : 'running',
        }}
      >
        {marqueeItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="h-12 flex items-center justify-center px-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
          >
            {item.logoSvg && PARTNER_SVG_MAP[item.logoSvg] ? (
              <div className="h-8 w-auto flex items-center justify-center text-brand-blue-500">
                {PARTNER_SVG_MAP[item.logoSvg]!}
              </div>
            ) : item.logoUrl ? (
              <div className="relative h-8 w-32 flex items-center justify-center">
                <Image
                  src={item.logoUrl}
                  alt={item.alt || item.name}
                  width={120}
                  height={32}
                  className="object-contain max-h-8 w-auto"
                />
              </div>
            ) : (
              <span className="font-subheading text-base uppercase tracking-wider text-brand-blue-500">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogosCarousel;
```

---

<a id="srccomponentsuifloattiltcardtsx"></a>
## 38. `src/components/ui/FloatTiltCard.tsx`
* **Rol:** Componente Primitivo UI
* **Archivo:** [`src/components/ui/FloatTiltCard.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/FloatTiltCard.tsx)

```tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface FloatTiltCardProps {
  children: React.ReactNode;
  className?: string;
  perspective?: number;
  disabled?: boolean;
}

/**
 * FloatTiltCard Component
 * Interactive 3D hero cards utilizing CSS perspective and multi-layer Z-translations.
 * Follows DESIGN.md specifications:
 * - Perspective 1000px on wrapper
 * - transform-style: preserve-3d
 * - Mousemove -> rotateX(±8deg) rotateY(±8deg)
 * - Hover tilt lift -> translateY(-6px) rotateX(4deg) rotateY(-2deg) + shadow-antigravity-deep
 * - Disables 3D tilt when prefers-reduced-motion is active
 */
export const FloatTiltCard: React.FC<FloatTiltCardProps> = ({
  children,
  className,
  perspective = 1000,
  disabled = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || reducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    const rotateX = (yPct * -6).toFixed(2);
    const rotateY = (xPct * 6).toFixed(2);

    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        if (cardRef.current) {
          cardRef.current.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
        rafRef.current = 0;
      });
    }
  };

  const handleMouseEnter = () => {
    if (disabled || reducedMotion) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (disabled || reducedMotion) return;
    setIsHovered(false);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
    if (cardRef.current) {
      cardRef.current.style.transform = 'translateY(0px) rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <div
      className="float-tilt-perspective w-full"
      style={{ perspective: `${perspective}px` }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: 'preserve-3d',
          transition: isHovered
            ? 'transform 120ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 200ms ease-out'
            : 'transform 300ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 200ms ease-out',
        }}
        className={cn(
          'relative transition-[box-shadow] duration-200 ease-out',
          isHovered && 'shadow-antigravity-deep',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default FloatTiltCard;
```

---

<a id="srccomponentsuibentogridtsx"></a>
## 39. `src/components/ui/BentoGrid.tsx`
* **Rol:** Componente Primitivo UI
* **Archivo:** [`src/components/ui/BentoGrid.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/BentoGrid.tsx)

```tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import DoubleBezelCard from './DoubleBezelCard';

export interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export interface BentoGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  span?: '7' | '5' | '12' | 'hero' | 'standard' | 'full' | number;
  className?: string;
  doubleBezel?: boolean;
  variant?: 'light' | 'dark';
  /** Extra classes for the inner DoubleBezel panel (it already stretches to the row height) */
  innerClassName?: string;
}

/**
 * BentoGrid Component
 * Asymmetric 12-column layout container for service showcases and features.
 * Follows DESIGN.md specifications:
 * - Base: grid-cols-12, gap-6 lg:gap-8, auto-rows-95
 * - Span 7 (Hero cards): Express, E-Commerce 3PL -> lg:col-span-7
 * - Span 5 (Standard cards): LowCost, Flex -> lg:col-span-5
 * - Span 12 (Full width): Cotizador CTA -> col-span-12
 * - Mobile: grid-cols-1 (all col-span-12 / full width)
 */
export const BentoGrid: React.FC<BentoGridProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-[minmax(340px,auto)] md:auto-rows-95 w-full',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  children,
  span = 'standard',
  className,
  doubleBezel = true,
  variant = 'light',
  innerClassName,
  ...props
}) => {
  const getSpanClass = () => {
    if (span === 7 || span === '7' || span === 'hero') {
      return 'col-span-1 md:col-span-12 lg:col-span-7';
    }
    if (span === 5 || span === '5' || span === 'standard') {
      return 'col-span-1 md:col-span-6 lg:col-span-5';
    }
    if (span === 12 || span === '12' || span === 'full') {
      return 'col-span-1 md:col-span-12 lg:col-span-12';
    }
    if (typeof span === 'number') {
      return `col-span-1 md:col-span-${Math.min(span, 12)} lg:col-span-${span}`;
    }
    return 'col-span-1 md:col-span-6 lg:col-span-5';
  };

  const spanClass = getSpanClass();

  if (doubleBezel) {
    return (
      <DoubleBezelCard
        variant={variant}
        className={cn(spanClass, 'h-full flex flex-col', className)}
        innerClassName={cn('flex-1 flex flex-col', innerClassName)}
        {...props}
      >
        {children}
      </DoubleBezelCard>
    );
  }

  return (
    <div
      className={cn('h-full flex flex-col overflow-hidden', spanClass, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default BentoGrid;
```

---

<a id="srccomponentsuiknockouttsx"></a>
## 40. `src/components/ui/Knockout.tsx`
* **Rol:** Componente Primitivo UI
* **Archivo:** [`src/components/ui/Knockout.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/Knockout.tsx)

```tsx
import React from 'react';
import { cn } from '@/lib/utils';

export type KnockoutTone = 'yellow' | 'blue';

export interface KnockoutProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** `yellow` sobre fondo azul (por defecto). `blue` sobre fondo amarillo. */
  tone?: KnockoutTone;
  children: React.ReactNode;
}

/**
 * Knockout — cápsula rotada que remata palabras clave del H1.
 *
 * Reglas de marca:
 * - Solo dos tonos: amarillo sobre azul, azul sobre amarillo.
 * - Nada más oscuro que `--color-brand-blue-500` (#0950F6), tampoco en el glow.
 * - Contraste AA en ambos sentidos (4.94:1).
 * - Server Component puro (sin hooks, sin motion): usable en cualquier hero.
 *
 * Sustituye a los `<span className="bg-[#FFEC01] text-[#0950F6] … -rotate-1">`
 * sueltos que estaban duplicados hero por hero.
 */
const toneStyles: Record<KnockoutTone, string> = {
  yellow: 'bg-brand-yellow-500 text-brand-blue-500 shadow-[0_0_28px_rgba(255,236,1,0.45)]',
  blue: 'bg-brand-blue-500 text-white shadow-[0_0_24px_rgba(9,80,246,0.28)]',
};

export function Knockout({ tone = 'yellow', className, children, ...rest }: KnockoutProps) {
  return (
    <span
      className={cn(
        'inline-block -rotate-1 rounded-full px-3 py-1 my-1 font-display uppercase leading-[1.1] tracking-[-0.02em] align-baseline',
        toneStyles[tone],
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

export default Knockout;
```

---

<a id="srccomponentsuiservicepricingtsx"></a>
## 41. `src/components/ui/ServicePricing.tsx`
* **Rol:** Componente Primitivo UI
* **Archivo:** [`src/components/ui/ServicePricing.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/ServicePricing.tsx)

```tsx
'use client';

import React from 'react';
import { Building2, Check, Clock, MapPin, Package, Route as RouteIcon, Shield, ShieldCheck, ShoppingBag, Star, Zap } from 'lucide-react';
import CTANestedPill, { type CTANestedPillVariant } from './CTANestedPill';
import Badge from './Badge';
import { cn } from '@/lib/utils';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

/**
 * El precio del tramo llega como string porque cada servicio usa su propio
 * formato. Si viene un número desnudo lo presentationamos con signo y
 * separador de miles; si ya viene formateado (`$6.000`, `Tarifa LowCost`)
 * lo respetamos tal cual. No calcula nada: sólo muestra.
 */
const displayPrice = (price: string) => {
  const raw = price.trim();
  return /^\d+$/.test(raw) ? formatArs(Number(raw)) : price;
};

/**
 * `light` = tarifario sobre fondo blanco (Express, Depósito, E-commerce 24HS).
 * `dark` = tarifario sobre azul de marca (LowCost, Flex): las tarjetas van
 * translúcidas con texto claro.
 */
export type Tone = 'light' | 'dark';

export type ServiceType =
  | 'EXPRESS'
  | 'LOW_COST'
  | 'FLEX'
  | 'DEPOSITO'
  | 'ECOMMERCE_24HS'
  | 'EMPRENDEDORES'
  | 'ECOMMERCE_SAME_DAY'
  | 'CUENTA_CORRIENTE'
  | 'CONTRAREEMBOLSO';

export interface PriceTier {
  range: string;
  distance: string;
  price: string;
  period?: string;
  features: string[];
  tag?: string;
  note?: string;
  featured?: boolean;
}

export interface PricingFact {
  icon: string;
  title: string;
  body: string;
}

export interface ServicePricingProps {
  serviceType: ServiceType;
  title: string;
  subtitle?: string;
  rangeLabel: string;
  unit: string;
  tiers: PriceTier[];
  ctaLabel: (tierIndex: number) => React.ReactNode;
  ctaHref?: string;
  ctaVariant?: CTANestedPillVariant;
  featuredIndex?: number;
  perKmCoefficient?: number;
  maxAutoKm?: number;
  consultThresholdKm?: number;
  excedenteTitle?: string;
  excedenteDescription?: string;
  excedenteExampleKm?: number;
  /** Precio del ejemplo, resuelto fuera del componente (ver `pricing.ts`). */
  excedenteExamplePrice?: number;
  showFacts?: boolean;
  facts?: PricingFact[];
  tone?: Tone;
  backgroundClassName?: string;
  cardClassName?: string;
  className?: string;
}

/** Ventana operativa por servicio: corte de carga y hora de entrega. */
const SERVICE_WINDOWS: Record<ServiceType, string> = {
  EXPRESS: 'Franja de 3 hs a elección',
  LOW_COST: 'Corte 13:00 · entrega antes de 19:00',
  FLEX: 'Corte 15:00 · entrega antes de 20:00',
  DEPOSITO: 'Despacho Same Day 9:00-20:00',
  EMPRENDEDORES: 'Planes 3PL y E-commerce',
  ECOMMERCE_24HS: 'Next Day 9:00-20:00',
  ECOMMERCE_SAME_DAY: 'Same Day 9:00-20:00',
  CUENTA_CORRIENTE: 'Condiciones Express · corte 15:00',
  CONTRAREEMBOLSO: 'Comisión $0',
};

/** `facts[].icon` viene como nombre de string desde cada servicio. */
const FACT_ICONS: Record<string, React.ElementType> = {
  Building2,
  Clock,
  Package,
  Route: RouteIcon,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Zap,
};

interface TierCardProps {
  tier: PriceTier;
  isFeatured: boolean;
  unit: string;
  ctaLabel: React.ReactNode;
  ctaHref?: string;
  ctaVariant: CTANestedPillVariant;
  tone: Tone;
  cardClassName?: string;
}

function TierCard({
  tier,
  isFeatured,
  unit,
  ctaLabel,
  ctaHref,
  ctaVariant,
  tone,
  cardClassName,
}: TierCardProps) {
  const isExternal = Boolean(ctaHref?.startsWith('http'));
  const dark = tone === 'dark';

  const badge = isFeatured && tier.tag ? (
    <Badge
      variant="accent"
      size="sm"
      className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md"
      icon={<Star className="h-3 w-3 fill-current" aria-hidden="true" />}
    >
      {tier.tag}
    </Badge>
  ) : null;

  return (
    <li className="h-full">
      <article
        className={cn(
          'relative flex h-full flex-col gap-5 rounded-2xl p-5 sm:p-6',
          'transition-[box-shadow,transform,background-color] duration-200',
          dark
            ? 'bg-white/10 shadow-float ring-1 ring-white/20 backdrop-blur-md hover:bg-white/15'
            : isFeatured
              ? 'bg-brand-blue-50 shadow-lg ring-1 ring-brand-blue-200'
              : 'bg-white shadow-sm ring-1 ring-brand-blue-100 hover:shadow-lg hover:ring-brand-blue-300 motion-safe:hover:-translate-y-0.5',
          cardClassName
        )}
      >
        {badge}

        <div className="flex items-start justify-between gap-2 pt-1">
          <h3
            className={cn(
              'font-subheading text-sm uppercase leading-tight tracking-wider sm:text-base',
              dark ? 'text-white' : 'text-brand-blue-500'
            )}
          >
            {tier.range}
          </h3>
          <span
            className={cn(
              'shrink-0 rounded-md px-2 py-0.5 font-mono text-xs font-medium tabular-nums',
              dark ? 'bg-white/15 text-white' : 'bg-brand-blue-50 text-brand-blue-500'
            )}
          >
            {tier.distance}
          </span>
        </div>

        <div>
          <p
            className={cn(
              'font-mono text-2xs uppercase tracking-wider',
              dark ? 'text-brand-blue-100' : 'text-brand-blue-500'
            )}
          >
            Tarifa
          </p>
          <p className="mt-1 flex flex-wrap items-baseline gap-x-1.5">
            <span
              className={cn(
                'font-mono text-[40px] font-bold leading-none tabular-nums sm:text-[44px]',
                dark ? 'text-brand-yellow-500' : 'text-brand-blue-500'
              )}
            >
              {displayPrice(tier.price)}
            </span>
            <span
              className={cn('font-mono text-xs', dark ? 'text-brand-blue-100' : 'text-brand-blue-500')}
            >
              {tier.period ?? unit}
            </span>
          </p>
        </div>

        <ul
          className={cn(
            'space-y-2 border-t pt-4',
            dark ? 'border-white/15' : 'border-brand-blue-100'
          )}
        >
          {tier.features.map((feature) => (
            <li
              key={feature}
              className={cn('flex items-start gap-2', dark ? 'text-brand-blue-50' : 'text-brand-blue-500')}
            >
              <Check
                className={cn(
                  'mt-0.5 h-4 w-4 shrink-0',
                  dark ? 'text-brand-yellow-500' : 'text-brand-blue-500'
                )}
                aria-hidden="true"
              />
              <span className="font-sans text-xs">{feature}</span>
            </li>
          ))}
        </ul>

        {tier.note ? (
          <p
            className={cn(
              'rounded-lg border px-3 py-2 text-xs',
              dark
                ? 'border-white/15 bg-white/10 text-brand-blue-50'
                : 'border-brand-blue-100 bg-brand-blue-50 text-brand-blue-500'
            )}
          >
            {tier.note}
          </p>
        ) : null}

        <div className="mt-auto pt-2">
          <CTANestedPill
            href={ctaHref}
            variant={ctaVariant}
            size={isFeatured ? 'large' : 'default'}
            className="w-full"
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
          >
            {ctaLabel}
          </CTANestedPill>
        </div>
      </article>
    </li>
  );
}

interface PriceFactsProps {
  facts?: PricingFact[];
  tone: Tone;
}

function PriceFacts({ facts, tone }: PriceFactsProps) {
  if (!facts?.length) {
    return null;
  }

  const dark = tone === 'dark';

  return (
    <ul className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 lg:gap-6">
      {facts.map(({ icon, title, body }) => {
        const Icon = FACT_ICONS[icon] ?? ShieldCheck;

        return (
          <li key={title}>
            <div
              className={cn(
                'flex h-full items-start gap-4 rounded-2xl p-5 ring-1',
                dark
                  ? 'bg-white/10 text-brand-blue-50 ring-white/20 backdrop-blur-md'
                  : 'bg-brand-blue-50 text-brand-blue-500 ring-brand-blue-100'
              )}
            >
              <Icon
                className={cn(
                  'h-6 w-6 shrink-0',
                  dark ? 'text-brand-yellow-500' : 'text-brand-blue-500'
                )}
                aria-hidden="true"
              />
              <div className="flex flex-col gap-1">
                <p
                  className={cn(
                    'font-subheading text-base uppercase leading-tight tracking-wider',
                    dark ? 'text-white' : 'text-brand-blue-500'
                  )}
                >
                  {title}
                </p>
                <p className="font-sans text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

interface ExcedenteSectionProps {
  perKmCoefficient?: number;
  maxAutoKm?: number;
  consultThresholdKm?: number;
  excedenteTitle?: string;
  excedenteDescription?: string;
  excedenteExampleKm?: number;
  excedenteExamplePrice?: number;
  ctaHref?: string;
  ctaVariant: CTANestedPillVariant;
  tone: Tone;
}

function ExcedenteSection({
  perKmCoefficient,
  maxAutoKm,
  consultThresholdKm,
  excedenteTitle,
  excedenteDescription,
  excedenteExampleKm,
  excedenteExamplePrice,
  ctaHref,
  ctaVariant,
  tone,
}: ExcedenteSectionProps) {
  if (!perKmCoefficient || !maxAutoKm || !consultThresholdKm) {
    return null;
  }

  const dark = tone === 'dark';

  return (
    <div
      className={cn(
        'mt-12 flex flex-col items-stretch justify-between gap-8 rounded-2xl p-6 sm:p-8 lg:flex-row',
        dark
          ? 'bg-white/10 text-brand-blue-50 ring-1 ring-white/20 backdrop-blur-md'
          : 'bg-white text-brand-blue-500 shadow-sm ring-1 ring-brand-blue-100'
      )}
    >
      <div className="flex flex-1 items-start gap-5">
        <span
          className={cn(
            'flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ring-1',
            dark ? 'bg-white/10 ring-white/20' : 'bg-brand-blue-50 ring-brand-blue-100'
          )}
          aria-hidden="true"
        >
          <MapPin className={cn('h-7 w-7', dark ? 'text-brand-yellow-500' : 'text-brand-blue-500')} />
        </span>

        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className={cn(
                'font-subheading text-2xl uppercase leading-tight tracking-wider sm:text-3xl',
                dark ? 'text-white' : 'text-brand-blue-500'
              )}
            >
              {excedenteTitle ?? `Más de ${maxAutoKm} km`}
            </h3>
            <span
              className={cn(
                'rounded-md px-2.5 py-0.5 font-mono text-xs font-semibold uppercase',
                dark ? 'bg-white/15 text-white' : 'bg-brand-blue-50 text-brand-blue-500'
              )}
            >
              Excedente por km
            </span>
          </div>

          <p className="max-w-2xl font-sans text-base leading-relaxed">
            Pasados los {maxAutoKm} km, la tarifa sigue el coeficiente por kilómetro hasta los{' '}
            <strong className="font-mono tabular-nums">{consultThresholdKm} km</strong>
            {excedenteExampleKm && excedenteExamplePrice ? (
              <>
                . Ejemplo:{' '}
                <span className="underline decoration-brand-yellow-500 decoration-2 underline-offset-4">
                  {excedenteExampleKm} km = {formatArs(excedenteExamplePrice)}
                </span>
              </>
            ) : null}
            . Superando los {consultThresholdKm} km, cotizamos el viaje especial en el acto.
          </p>

          {excedenteDescription ? (
            <p
              className={cn(
                'font-sans text-sm leading-relaxed',
                dark ? 'text-brand-blue-100' : 'text-brand-blue-500'
              )}
            >
              {excedenteDescription}
            </p>
          ) : null}

          <p
            className={cn(
              'mt-1 inline-flex w-fit items-center gap-2 rounded-lg px-3.5 py-2 ring-1',
              dark ? 'bg-white/10 ring-white/20' : 'bg-brand-blue-50 ring-brand-blue-100'
            )}
          >
            <span className={cn('font-mono text-xs font-semibold', dark ? 'text-white' : 'text-brand-blue-500')}>
              Fórmula: {formatArs(perKmCoefficient)} × km total
            </span>
          </p>
        </div>
      </div>

      <div
        className={cn(
          'flex flex-col items-start justify-between gap-5 lg:items-end lg:border-l lg:pl-8',
          dark ? 'lg:border-white/20' : 'lg:border-brand-blue-100'
        )}
      >
        <div className="flex flex-col lg:items-end">
          <span
            className={cn(
              'font-mono text-2xs uppercase tracking-wider',
              dark ? 'text-brand-blue-100' : 'text-brand-blue-500'
            )}
          >
            Coeficiente kilométrico
          </span>
          <p className="flex items-baseline gap-1.5">
            <span
              className={cn(
                'font-mono text-[38px] font-bold leading-none tabular-nums',
                dark ? 'text-brand-yellow-500' : 'text-brand-blue-500'
              )}
            >
              {formatArs(perKmCoefficient)}
            </span>
            <span
              className={cn('font-mono text-xs', dark ? 'text-brand-blue-100' : 'text-brand-blue-500')}
            >
              ARS / km
            </span>
          </p>
          <span
            className={cn('mt-1 font-mono text-xs', dark ? 'text-brand-blue-100' : 'text-brand-blue-500')}
          >
            Cálculo automático hasta {consultThresholdKm} km
          </span>
        </div>

        <CTANestedPill
          href={ctaHref ?? '/cotizar'}
          variant={ctaVariant}
          className="w-full sm:w-auto"
          target={ctaHref?.startsWith('http') ? '_blank' : undefined}
          rel={ctaHref?.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          Cotizar trayecto extendido
        </CTANestedPill>
      </div>
    </div>
  );
}

/**
 * Componente único de tarifario por servicio. Los precios entran como datos
 * desde `pricing.ts` / `promises.ts`: acá no se calcula ni se decide ninguna
 * tarifa, sólo se maqueta.
 */
export default function ServicePricing({
  serviceType,
  title,
  subtitle,
  rangeLabel,
  unit,
  tiers,
  ctaLabel,
  ctaHref,
  ctaVariant,
  featuredIndex = 0,
  perKmCoefficient,
  maxAutoKm,
  consultThresholdKm,
  excedenteTitle,
  excedenteDescription,
  excedenteExampleKm,
  excedenteExamplePrice,
  showFacts = true,
  facts,
  tone = 'light',
  backgroundClassName,
  cardClassName,
  className,
}: ServicePricingProps) {
  const windowLabel = SERVICE_WINDOWS[serviceType];
  const dark = tone === 'dark';

  return (
    <section
      id={`${serviceType.toLowerCase()}-pricing`}
      className={cn('relative z-10 overflow-hidden py-20 lg:py-28', backgroundClassName, className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[24px_24px] opacity-[0.06]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl space-y-12 px-4 sm:px-6 lg:space-y-14 lg:px-8">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <div
            className={cn(
              'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5',
              dark ? 'border-white/20 bg-white/10' : 'border-brand-blue-100 bg-brand-blue-50'
            )}
          >
            <span
              className={cn(
                'h-2 w-2 rounded-full motion-safe:animate-pulse',
                dark ? 'bg-brand-yellow-500' : 'bg-brand-blue-500'
              )}
            />
            <span
              className={cn(
                'font-mono text-xs font-semibold uppercase tracking-wider',
                dark ? 'text-white' : 'text-brand-blue-500'
              )}
            >
              Tarifario 2026 · Mar del Plata
            </span>
          </div>

          <h2
            className={cn(
              'font-display text-4xl sm:text-5xl lg:text-6xl',
              dark ? 'text-white' : 'text-brand-blue-500'
            )}
          >
            {title}
          </h2>

          {subtitle ? (
            <p
              className={cn(
                'mx-auto max-w-xl font-sans text-pretty text-base leading-relaxed sm:text-lg',
                dark ? 'text-brand-blue-50' : 'text-brand-blue-500'
              )}
            >
              {subtitle}
            </p>
          ) : null}

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span
              className={cn(
                'font-mono text-xs font-semibold uppercase tracking-wider',
                dark ? 'text-white' : 'text-brand-blue-500'
              )}
            >
              {windowLabel}
            </span>
            {rangeLabel ? (
              <>
                <span
                  className={cn(
                    'h-1 w-1 rounded-full',
                    dark ? 'bg-brand-yellow-500' : 'bg-brand-blue-300'
                  )}
                  aria-hidden="true"
                />
                <span
                  className={cn(
                    'font-mono text-xs font-semibold uppercase tracking-wider',
                    dark ? 'text-white' : 'text-brand-blue-500'
                  )}
                >
                  {rangeLabel}
                </span>
              </>
            ) : null}
          </div>
        </header>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          {tiers.map((tier, index) => (
            <TierCard
              key={tier.range}
              tier={tier}
              isFeatured={index === featuredIndex}
              unit={unit}
              ctaLabel={ctaLabel(index)}
              ctaHref={ctaHref}
              ctaVariant={ctaVariant ?? (index === featuredIndex ? 'primary' : 'outline')}
              tone={tone}
              cardClassName={cardClassName}
            />
          ))}
        </ul>

        <ExcedenteSection
          perKmCoefficient={perKmCoefficient}
          maxAutoKm={maxAutoKm}
          consultThresholdKm={consultThresholdKm}
          excedenteTitle={excedenteTitle}
          excedenteDescription={excedenteDescription}
          excedenteExampleKm={excedenteExampleKm}
          excedenteExamplePrice={excedenteExamplePrice}
          ctaHref={ctaHref}
          ctaVariant={ctaVariant ?? 'primary'}
          tone={tone}
        />

        {showFacts ? <PriceFacts facts={facts} tone={tone} /> : null}
      </div>
    </section>
  );
}
```

---

<a id="srccomponentsuicardtsx"></a>
## 42. `src/components/ui/card.tsx`
* **Rol:** Componente Primitivo UI
* **Archivo:** [`src/components/ui/card.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/card.tsx)

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-lg border bg-white text-brand-blue-500 shadow-sm",
  {
    variants: {
      variant: {
        default: "border-brand-blue-100",
        bezel: "double-bezel-outer p-2 shadow-float bg-brand-blue-50/80 border-brand-blue-100",
        glass: "glass-card",
        // border-transparent: the base `border` would otherwise take currentColor (dark blue) and read as an outline
        elevated: "border-transparent shadow-elevated hover:shadow-hover-lift transition-shadow duration-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = ({ className, variant, ref, ...props }: CardProps & { ref?: React.Ref<HTMLDivElement> }) => {
  if (variant === 'bezel') {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        {...props}
      >
        <div className="double-bezel-inner bg-white rounded-xl h-full shadow-inner relative overflow-hidden">
          {props.children}
        </div>
      </div>
    )
  }
  return (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  )
}
Card.displayName = "Card"

const CardHeader = ({ className, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> }) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
)
CardHeader.displayName = "CardHeader"

const CardTitle = ({ className, ref, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { ref?: React.Ref<HTMLHeadingElement> }) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-subheading uppercase tracking-wider leading-none text-brand-blue-500",
      className,
    )}
    {...props}
  />
)
CardTitle.displayName = "CardTitle"

const CardDescription = ({ className, ref, ...props }: React.HTMLAttributes<HTMLParagraphElement> & { ref?: React.Ref<HTMLParagraphElement> }) => (
  <p
    ref={ref}
    className={cn("text-sm text-brand-blue-500 font-sans leading-relaxed", className)}
    {...props}
  />
)
CardDescription.displayName = "CardDescription"

const CardContent = ({ className, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> }) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
)
CardContent.displayName = "CardContent"

const CardFooter = ({ className, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> }) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

---
