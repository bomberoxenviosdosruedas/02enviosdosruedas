import type { Metadata } from 'next';
import { Outfit, Anton, Bebas_Neue, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import ClientLayout from '../components/ClientLayout';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
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

export const metadata: Metadata = {
  title: {
    default: 'Mensajería en moto y logística en Mar del Plata | Envíos DosRuedas',
    template: '%s | Envíos DosRuedas',
  },
  description: 'Mensajería en moto y logística e-commerce en Mar del Plata. Envíos Express en 60-90 min, Mercado Envíos Flex en el día y paquetería LowCost para comercios y particulares.',
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
    <html
      lang="es"
      className={`${outfit.variable} ${anton.variable} ${bebasNeue.variable} ${geistMono.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* DNS Prefetch & Preconnect para recursos externos */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://wa.me" />

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
                  logo: `${baseUrl}/logo-master.svg`,
                  sameAs: [
                    'https://www.instagram.com/enviosdosruedas',
                    'https://www.facebook.com/enviosdosruedas',
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
                  description: 'Mensajería y logística e-commerce en Mar del Plata. Envíos Express en 60-90 min, LowCost, Mercado Envíos Flex y almacenamiento en Friuli 1972.',
                  url: baseUrl,
                  telephone: '+54-223-660-2699',
                  email: 'contacto@enviosdosruedas.com.ar',
                  image: `${baseUrl}/og-image.jpg`,
                  hasMap: 'https://maps.google.com/?q=Friuli+1972,+Mar+del+Plata',
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
                          description: 'Entregas prioritarias en franja de 60 a 90 min en Mar del Plata.',
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
                          name: 'Centro de Depósito y Logística',
                          description: 'Almacenamiento, preparación y despacho directo en Friuli 1972.',
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

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17510443994"
          strategy="lazyOnload"
        />
        <Script id="google-tag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17510443994');
            gtag('config', 'G-LSLQ3RJ8WT');
          `}
        </Script>
      </head>
      <body className="bg-white text-brand-ink font-sans antialiased selection:bg-brand-yellow selection:text-brand-blue min-h-screen flex flex-col" suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
