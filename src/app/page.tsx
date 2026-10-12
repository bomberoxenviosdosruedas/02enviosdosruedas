import type { Metadata } from 'next';
import HeroAnimado from '@/components/home/HeroAnimado';
import SegmentosHome from '@/components/home/SegmentosHome';
import ServicesOverview from '@/components/home/ServicesOverview';
import EmprendedoresHome from '@/components/home/EmprendedoresHome';
import CtaSection from '@/components/home/CtaSection';
import SocialProofSection from '@/components/home/SocialProofSection';
import NetworkCanvasWrapper from '@/components/home/NetworkCanvasWrapper';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  description:
    'Mensajería en moto y logística e-commerce en Mar del Plata. Envíos Express en franja de 3 hs, Mercado Envíos Flex en el día y reparto LowCost. Cotizá online.',
  alternates: {
    canonical: `${baseUrl}/`,
  },
  openGraph: {
    title: 'Mensajería en moto en Mar del Plata | Envíos DosRuedas',
    description:
      'La solución logística y última milla de mayor confianza en Mar del Plata. Envíos Express, MercadoLibre Flex, ruteo eficiente y cadetería inteligente.',
    url: `${baseUrl}/`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export default function HomePage() {
  return (
    <div
      id="home-page-container"
      className="bg-brand-white text-brand-ink selection:bg-brand-yellow selection:text-brand-blue overflow-x-hidden"
    >
      <HeroAnimado />

      <SegmentosHome />

      <section
        className="relative bg-brand-blue py-20 overflow-hidden"
        aria-labelledby="services-section-title"
      >
        {/* Renderizamos el wrapper cliente que carga el canvas de forma diferida */}
        <NetworkCanvasWrapper />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-180 mb-12">
            <div className="font-subheading text-[12px] tracking-mega uppercase text-brand-yellow">
              Nuestros Servicios
            </div>
            <h2
              id="services-section-title"
              className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] leading-[0.9] tracking-[-0.03em] uppercase text-white"
            >
              Conectamos Mar del Plata de punta a punta
            </h2>
          </div>
        </div>
        <ServicesOverview />
      </section>

      <EmprendedoresHome />
      <SocialProofSection />
      <CtaSection />
    </div>
  );
}