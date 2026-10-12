import type { Metadata } from 'next';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Cuenta Corriente para Empresas',
  description:
    'Logística corporativa y cuenta corriente flexible en Mar del Plata. Facturación quincenal o mensual, tarifas preferenciales y atención comercial directa.',
  alternates: {
    canonical: `${baseUrl}/servicios/empresas-cuenta-corriente`,
  },
  openGraph: {
    title: 'Cuenta Corriente para Empresas | Envíos DosRuedas',
    description:
      'Logística corporativa y cuenta corriente en Mar del Plata. Facturación quincenal o mensual, tarifas preferenciales y flota propia.',
    url: `${baseUrl}/servicios/empresas-cuenta-corriente`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cuenta Corriente para Empresas | Envíos DosRuedas',
    description:
      'Logística corporativa y cuenta corriente en Mar del Plata. Facturación quincenal o mensual y tarifas preferenciales.',
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@enviosdosruedas',
  },
};

export default function EmpresasCuentaCorrienteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
