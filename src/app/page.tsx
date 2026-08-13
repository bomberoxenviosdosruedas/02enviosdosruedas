import type { Metadata } from 'next';
import HeroAnimado from '@/src/components/home/HeroAnimado';
import VisionSection from '@/src/components/home/VisionSection';
import ServicesOverview from '@/src/components/home/ServicesOverview';
import SliderServicios from '@/src/components/home/SliderServicios';
import EmprendedoresHome from '@/src/components/home/EmprendedoresHome';
import CtaSection from '@/src/components/home/CtaSection';
import SocialProofSection from '@/src/components/home/SocialProofSection';
import { Bike } from 'lucide-react';

const baseUrl = 'https://www.enviosdosruedas.com';

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Envíos DosRuedas',
  url: baseUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${baseUrl}/cotizar/express?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export const metadata: Metadata = {
  title: 'Mensajería y Logística E-commerce en Mar del Plata | Envíos DosRuedas',
  description: 'Especialistas en logística e-commerce y última milla en Mar del Plata. Envíos en el día, Flex y soluciones 3PL para potenciar tu negocio local.',
  alternates: {
    canonical: baseUrl,
  },
};


export default function Home() {
  return (
    <div id="home-page-container" className="w-full bg-brand-white-50 text-brand-blue-700 min-h-screen relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      {/* 1. Animated Hero Presentation */}
      <div className="relative z-10">
        <HeroAnimado />
      </div>

      {/* 2. Brand Vision Segment */}
      <div className="relative z-10">
        <VisionSection />
      </div>

      {/* 3. Logistics Overview Solutions */}
      <div className="relative z-10">
        <ServicesOverview />
      </div>

      {/* 4. Custom Tailored Solutions Slideshow */}
      <div className="relative z-10">
        <SliderServicios />
      </div>

      {/* 5. Entrepreneurs and Businesses Solutions Panel */}
      <div className="relative z-10">
        <EmprendedoresHome />
      </div>

      {/* 6. Call to Action High Conversion Segment */}
      <div className="relative z-10">
        <CtaSection />
      </div>
    </div>
  );
}

