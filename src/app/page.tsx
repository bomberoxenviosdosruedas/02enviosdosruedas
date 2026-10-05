import type { Metadata } from 'next';
import HeroAnimado from '@/components/home/HeroAnimado';
import SegmentosHome from '@/components/home/SegmentosHome';
import ServicesOverview from '@/components/home/ServicesOverview';
import EmprendedoresHome from '@/components/home/EmprendedoresHome';
import CtaSection from '@/components/home/CtaSection';
import SocialProofSection from '@/components/home/SocialProofSection';
import LogisticaNetworkCanvas from '@/components/home/LogisticaNetworkCanvas';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <div id="home-page-container" className="bg-brand-white text-brand-ink selection:bg-brand-yellow selection:text-brand-blue overflow-x-hidden">
      <HeroAnimado />

      <SegmentosHome />

      <section 
        className="relative bg-brand-blue py-20 overflow-hidden" 
        aria-labelledby="services-section-title"
      >
        <LogisticaNetworkCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-180 mb-12">
            <div className="font-subheading text-[12px] tracking-mega uppercase text-brand-yellow">Nuestros Servicios</div>
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
