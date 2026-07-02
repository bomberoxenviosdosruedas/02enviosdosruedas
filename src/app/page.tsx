import type { Metadata } from 'next';
import HeroAnimado from '@/src/components/home/HeroAnimado';
import VisionSection from '@/src/components/home/VisionSection';
import ServicesOverview from '@/src/components/home/ServicesOverview';
import SliderServicios from '@/src/components/home/SliderServicios';
import EmprendedoresHome from '@/src/components/home/EmprendedoresHome';
import CtaSection from '@/src/components/home/CtaSection';
import { Bike } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mensajería y Logística E-commerce en Mar del Plata | Envíos DosRuedas',
  description: 'Especialistas en logística e-commerce y última milla en Mar del Plata. Envíos en el día, Flex y soluciones 3PL para potenciar tu negocio local.',
};

// Separador de sección decorativo con el isotipo de la marca
function SectionSeparator() {
  return (
    <div className="w-full flex items-center justify-center relative h-2 bg-transparent pointer-events-none z-20">
      {/* Línea horizontal de fondo con degradado */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-slate-200 to-transparent h-px" />
      {/* Brillo central amarillo */}
      <div className="absolute top-1/2 -translate-y-1/2 h-[3px] bg-gradient-to-r from-transparent via-brand-yellow to-transparent w-40 sm:w-64 blur-[1.5px]" />
      {/* Línea central azul */}
      <div className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent w-72 sm:w-[450px]" />
      {/* Isotipo flotante en el centro */}
      <div className="absolute top-1/2 -translate-y-1/2 bg-white border border-slate-200 rounded-full p-2.5 shadow-sm text-brand-blue flex items-center justify-center">
        <Bike className="h-4 w-4 text-brand-blue animate-pulse shrink-0" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div id="home-page-container" className="w-full bg-white">
      {/* 1. Animated Hero Presentation */}
      <HeroAnimado />

      {/* Separator */}
      <SectionSeparator />

      {/* 2. Brand Vision Segment */}
      <VisionSection />

      {/* Separator */}
      <SectionSeparator />

      {/* 3. Logistics Overview Solutions */}
      <ServicesOverview />

      {/* Separator */}
      <SectionSeparator />

      {/* 4. Custom Tailored Solutions Slideshow */}
      <SliderServicios />

      {/* Separator */}
      <SectionSeparator />

      {/* 5. Entrepreneurs and Businesses Solutions Panel */}
      <EmprendedoresHome />

      {/* Separator */}
      <SectionSeparator />

      {/* 6. Call to Action High Conversion Segment */}
      <CtaSection />
    </div>
  );
}
