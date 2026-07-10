import type { Metadata } from 'next';
import { Outfit, Anton, Bebas_Neue } from 'next/font/google';
import './globals.css'; 
import ClientLayout from '../components/ClientLayout';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-subheading',
});

export const metadata: Metadata = {
  title: 'Envíos DosRuedas - Mensajería & Logística en Mar del Plata',
  description: 'La solución logística y última milla de mayor confianza en Mar del Plata. Envíos Express, MercadoLibre Flex, ruteo eficiente y cadetería inteligente.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${outfit.variable} ${anton.variable} ${bebasNeue.variable} scroll-smooth`}>
      <body className="bg-white text-brand-ink font-sans antialiased selection:bg-brand-yellow selection:text-brand-blue min-h-screen flex flex-col" suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
