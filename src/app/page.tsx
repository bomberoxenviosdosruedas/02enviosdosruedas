import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroAnimado from '@/src/components/home/HeroAnimado';
import VisionSection from '@/src/components/home/VisionSection';
import ServicesOverview from '@/src/components/home/ServicesOverview';

// Below-the-fold sections are dynamically loaded to minimize initial JS execution
const SliderServicios = dynamic(() => import('@/src/components/home/SliderServicios'), {
  loading: () => <div className="w-full py-24 min-h-[400px]" />,
});

const EmprendedoresHome = dynamic(() => import('@/src/components/home/EmprendedoresHome'), {
  loading: () => <div className="w-full py-24 min-h-[400px]" />,
});

const SocialProofSection = dynamic(() => import('@/src/components/home/SocialProofSection'), {
  loading: () => <div className="w-full py-24 min-h-[400px]" />,
});

const CtaSection = dynamic(() => import('@/src/components/home/CtaSection'), {
  loading: () => <div className="w-full py-24 min-h-[300px]" />,
});

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
      {/* 1. Hero Presentation — Critical Above-the-fold (Immediate FCP & LCP) */}
      <section className="relative z-10">
        <HeroAnimado />
      </section>

      {/* 2. Brand Vision & Trust Metrics — Light Surface */}
      <section className="relative z-10">
        <VisionSection />
      </section>

      {/* 3. Logistics Services Overview — White Bento Grid Canvas */}
      <section className="relative z-10">
        <ServicesOverview />
      </section>

      {/* 4. Tailored Solutions for Industries — Lazy Loaded Below-the-fold */}
      <section className="relative z-10">
        <SliderServicios />
      </section>

      {/* 5. Entrepreneurs & B2B Solutions Panel — Lazy Loaded */}
      <section className="relative z-10">
        <EmprendedoresHome />
      </section>

      {/* 6. Social Proof & Verified Testimonials — Lazy Loaded */}
      <section className="relative z-10">
        <SocialProofSection />
      </section>

      {/* 7. Call to Action High Conversion Segment — Lazy Loaded */}
      <section className="relative z-10">
        <CtaSection />
      </section>
    </div>
  );
}
