import type { Metadata } from 'next';
import HeroAnimado from '@/components/home/HeroAnimado';
import TrustBar from '@/components/home/TrustBar';
import ServicesOverview from '@/components/home/ServicesOverview';
import HowItWorks from '@/components/home/HowItWorks';
import SocialProof from '@/components/home/SocialProof';
import CtaSection from '@/components/home/CtaSection';
import OptimizedHeader from '@/components/layout/OptimizedHeader';
import OptimizedFooter from '@/components/layout/OptimizedFooter';

export const metadata: Metadata = {
  title: 'Mensajería y Logística E-commerce en Mar del Plata | Envíos DosRuedas',
  description: 'Especialistas en logística e-commerce y última milla en Mar del Plata. Envíos en el día, Flex y soluciones 3PL para potenciar tu negocio local.',
};

export default function Home() {
  return (
    <>
      <OptimizedHeader />
      <main id="main-content" className="min-h-screen">
        {/* 1. Hero - Blue bg */}
        <HeroAnimado />

        {/* 2. Trust Bar - Blue-50 overlay */}
        <TrustBar />

        {/* 3. Services - White bg */}
        <ServicesOverview />

        {/* 4. How It Works - Blue bg */}
        <HowItWorks />

        {/* 5. Social Proof - White bg */}
        <SocialProof />

        {/* 6. CTA Final - Blue bg */}
        <CtaSection />
      </main>

      {/* 7. Footer - Blue + Blue-950 */}
      <OptimizedFooter />
    </>
  );
}