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
      {/* Línea horizontal de fondo con degradado */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent h-px" />
      {/* Brillo central amarillo */}
      <div className="absolute top-1/2 -translate-y-1/2 h-[3px] bg-gradient-to-r from-transparent via-brand-yellow/80 to-transparent w-40 sm:w-64 blur-[1.5px]" />
      {/* Línea central azul */}
      <div className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent w-72 sm:w-[450px]" />
      
      {/* Isotipo flotante 3D y Glassmorphic en el centro */}
      <div className="absolute top-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 ease-out hover-float hover:scale-110 active:scale-95 group">
        {/* Glow halo exterior */}
        <div className="absolute inset-0 bg-brand-yellow/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-xl" />
        
        {/* Cuerpo del botón/badge principal */}
        <div className="relative bg-gradient-to-b from-[#0636A5]/80 to-[#002068]/95 backdrop-blur-md border border-white/20 rounded-full p-3.5 shadow-lg group-hover:border-brand-yellow/60 group-hover:shadow-[0_0_20px_rgba(255,236,1,0.4)] flex items-center justify-center transition-all duration-300">
          <Bike className="h-5 w-5 text-brand-yellow group-hover:rotate-12 transition-transform duration-300 ease-out shrink-0" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div id="home-page-container" className="w-full bg-brand-blue text-white min-h-screen relative overflow-hidden">
      {/* Ambient depth orbs — static, no pulse glow (follows DESIGN.md anti-pattern rules) */}
      <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-brand-blue/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] bg-brand-navy/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[45vw] h-[45vw] bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none" />

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

