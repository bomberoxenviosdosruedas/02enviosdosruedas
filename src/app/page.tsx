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

// Separador de sección premium con estilo Glassmorphic y Antigravity (Inverted Theme)
function SectionSeparator() {
  return (
    <div className="w-full flex items-center justify-center relative h-16 bg-transparent pointer-events-auto z-20 perspective-1000">
      {/* Línea horizontal de fondo con degradado sutil sin brillos intensos */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-slate-250 to-transparent h-px" />
      {/* Línea central sutil de acento */}
      <div className="absolute top-1/2 -translate-y-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent w-48 sm:w-80" />
      
      {/* Isotipo flotante y Glassmorphic en el centro */}
      <div className="absolute top-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ease-out hover-float hover:scale-105 active:scale-95 group">
        {/* Cuerpo del botón/badge principal con marca */}
        <div className="relative bg-brand-blue border border-brand-blue/10 rounded-xl p-3 shadow-md group-hover:border-brand-yellow flex items-center justify-center transition-all duration-300">
          <Bike className="h-5 w-5 text-brand-yellow group-hover:rotate-6 transition-transform duration-300 ease-out shrink-0" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div id="home-page-container" className="w-full bg-gray-50 text-slate-900 min-h-screen relative overflow-hidden">
      {/* 1. Animated Hero Presentation */}
      <div className="relative z-10">
        <HeroAnimado />
      </div>

      {/* Separator */}
      <SectionSeparator />

      {/* 2. Brand Vision Segment */}
      <div className="relative z-10">
        <VisionSection />
      </div>

      {/* Separator */}
      <SectionSeparator />

      {/* 3. Logistics Overview Solutions */}
      <div className="relative z-10">
        <ServicesOverview />
      </div>

      {/* Separator */}
      <SectionSeparator />

      {/* 4. Custom Tailored Solutions Slideshow */}
      <div className="relative z-10">
        <SliderServicios />
      </div>

      {/* Separator */}
      <SectionSeparator />

      {/* 5. Entrepreneurs and Businesses Solutions Panel */}
      <div className="relative z-10">
        <EmprendedoresHome />
      </div>

      {/* Separator */}
      <SectionSeparator />

      {/* 6. Call to Action High Conversion Segment */}
      <div className="relative z-10">
        <CtaSection />
      </div>
    </div>
  );
}

