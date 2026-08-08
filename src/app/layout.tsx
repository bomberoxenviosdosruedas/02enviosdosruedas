import type { Metadata } from 'next';
import { Outfit, Anton, Bebas_Neue } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import ClientLayout from '../components/ClientLayout';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-subheading',
  display: 'swap',
});

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: {
    default: 'Envíos DosRuedas - Mensajería & Logística en Mar del Plata',
    template: '%s | Envíos DosRuedas',
  },
  description: 'La solución logística y última milla de mayor confianza en Mar del Plata. Envíos Express, MercadoLibre Flex, ruteo eficiente y cadetería inteligente.',
  keywords: ['envíos mar del plata', 'mensajería mar del plata', 'logística e-commerce argentina', 'mercadolibre flex mar del plata', 'cadetería mar del plata', 'envíos express mar del plata', 'logística 3pl argentina', 'última milla mar del plata'],
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
    title: 'Envíos DosRuedas - Mensajería & Logística en Mar del Plata',
    description: 'La solución logística y última milla de mayor confianza en Mar del Plata. Envíos Express, MercadoLibre Flex, ruteo eficiente y cadetería inteligente.',
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
    title: 'Envíos DosRuedas - Mensajería & Logística en Mar del Plata',
    description: 'La solución logística y última milla de mayor confianza en Mar del Plata.',
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@enviosdosruedas',
  },
  verification: {
    google: 'Xmi1zpx45Gdf_z7dZfPWRjDuG7ExiOo7N2fy1hnlBbA',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${outfit.variable} ${anton.variable} ${bebasNeue.variable} scroll-smooth`}>
      <head>
        {/* Preconnect para Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch para dominios externos */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LSLQ3RJ8WT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LSLQ3RJ8WT');
          `}
        </Script>

        {/* Schema Markup: Organization + LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  name: 'Envíos DosRuedas',
                  url: baseUrl,
                  logo: `${baseUrl}/LogoEnviosDosRuedas.png`,
                  sameAs: [
                    'https://www.instagram.com/enviosdosruedas',
                    'https://www.facebook.com/enviosdosruedas',
                    'https://wa.me/542236602699',
                  ],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+54-223-660-2699',
                    contactType: 'customer service',
                    availableLanguage: 'Spanish',
                    areaServed: 'AR',
                  },
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': `${baseUrl}#localbusiness`,
                  name: 'Envíos DosRuedas',
                  description: 'Mensajería y logística e-commerce en Mar del Plata. Envíos Express, LowCost, MercadoLibre Flex y soluciones 3PL para PyMEs.',
                  url: baseUrl,
                  telephone: '+54-223-660-2699',
                  email: 'matiascejas@enviosdosruedas.com',
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
                      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                      opens: '08:00',
                      closes: '20:00',
                    },
                  ],
                  areaServed: {
                    '@type': 'City',
                    name: 'Mar del Plata',
                  },
                  priceRange: '$$',
                  currenciesAccepted: 'ARS',
                  paymentAccepted: 'Cash, Credit Card, Transfer, MercadoPago',
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Servicios de Logística y Mensajería',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Envíos Express',
                          description: 'Entregas prioritarias en menos de 2 horas en Mar del Plata.',
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
                          description: 'Socio logístico certificado para Mercado Envíos Flex. Same-Day delivery.',
                          url: `${baseUrl}/servicios/enviosflex`,
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Logística 3PL y Plan Emprendedores',
                          description: 'Almacenamiento, picking, packing y fulfillment para e-commerce.',
                          url: `${baseUrl}/servicios/plan-emprendedores`,
                        },
                      },
                    ],
                  },
                },
              ],
            }, null, 2)
          }}
        />
      </head>
      <body className="bg-white text-brand-ink font-sans antialiased selection:bg-brand-yellow selection:text-brand-blue min-h-screen flex flex-col" suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
