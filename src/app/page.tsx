import HeroAnimado from '@/src/components/home/HeroAnimado';
import SegmentosHome from '@/src/components/home/SegmentosHome';
import ServicesOverview from '@/src/components/home/ServicesOverview';
import EmprendedoresHome from '@/src/components/home/EmprendedoresHome';
import CtaSection from '@/src/components/home/CtaSection';
import LogisticaNetworkCanvas from '@/src/components/home/LogisticaNetworkCanvas';

export default function HomePage() {
  return (
    <main className="bg-white text-[#0950F6] selection:bg-[#FFEC01] selection:text-[#0950F6] overflow-x-hidden">
      <HeroAnimado />
      
      <section 
        className="relative z-10 bg-[#E6EEFE] border-y border-[#BACEFD] py-4" 
        aria-label="Métricas de confianza"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 flex flex-wrap justify-between gap-4 font-mono text-[11px] tracking-[0.12em] uppercase font-bold text-[#0950F6]">
          <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#FFEC01] border border-[#0950F6]/20" /> Miles de Envios</span>
          <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#FFEC01] border border-[#0950F6]/20" /> Cobertura Total MDQ</span>
          <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#FFEC01] border border-[#0950F6]/20" /> Entregas en el Dia</span>
          <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#FFEC01] border border-[#0950F6]/20" /> Ruteo Activo MDQ</span>
        </div>
      </section>

      <SegmentosHome />

      <section 
        className="relative bg-[#0950F6] py-20 overflow-hidden" 
        aria-labelledby="services-section-title"
      >
        <LogisticaNetworkCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-[720px] mb-12">
            <div className="font-subheading text-[12px] tracking-[0.2em] uppercase text-[#FFEC01]">Nuestros Servicios</div>
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
      <CtaSection />
    </main>
  );
}
