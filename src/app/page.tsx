import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroAnimado from '@/src/components/home/HeroAnimado';
import SegmentosHome from '@/src/components/home/SegmentosHome';
import ServicesOverview from '@/src/components/home/ServicesOverview';
import VisionSection from '@/src/components/home/VisionSection';
import { LogosCarousel } from '@/src/components/ui/LogosCarousel';

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
  title: {
    absolute: 'Mensajería en moto y logística en Mar del Plata | Envíos DosRuedas',
  },
  description: 'Mensajería en moto y logística e-commerce en Mar del Plata. Envíos Express en 60-90 min, Mercado Envíos Flex en el día y paquetería LowCost para comercios y particulares.',
  alternates: {
    canonical: baseUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Envíos DosRuedas - Mensajería & Logística en Mar del Plata',
    description: 'Mensajería en moto y logística e-commerce en Mar del Plata. Envíos Express 60-90 min, Flex y LowCost. Tarifas 2026.',
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@enviosdosruedas',
  },
};

export default function Home() {
  return (
    <div id="home-page-container" className="w-full bg-brand-white-50 text-brand-blue-700 min-h-[100dvh] relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      {/* 1. Hero Presentation — Critical Above-the-fold (Immediate FCP & LCP) */}
      <section className="relative z-10">
        <HeroAnimado />
      </section>

      {/* 2. Intent-Based Segments Grid (BL-26) */}
      <section className="relative z-10">
        <SegmentosHome />
      </section>

      {/* 3. Logistics Services Overview — White Bento Grid Canvas */}
      <section className="relative z-10">
        <ServicesOverview />
      </section>

      {/* 4. Brand Vision & Trust Metrics — Light Surface */}
      <section className="relative z-10">
        <VisionSection />
      </section>

      {/* Partner & Logistics Hubs Carousel — Infinite Marquee (DESIGN.md signature component) */}
      <section className="relative z-10 py-6 bg-brand-blue-50/60 border-y border-brand-blue-100/70">
        <LogosCarousel />
      </section>

      {/* 5. Tailored Solutions for Industries — Lazy Loaded Below-the-fold */}
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
