import { HeroProceduralBackground, CTANestedPill } from '@enviosdosruedas/ui';
import { ArrowRightIcon as ArrowRight, ZapIcon as Zap, WalletIcon as Wallet, MapPinIcon as MapPin, WarehouseIcon as Warehouse } from '@enviosdosruedas/ui';

// The background is `absolute inset-0` — it needs a sized, relative host.
const frame: React.CSSProperties = { position: 'relative', height: 340, maxWidth: 760, borderRadius: 16, overflow: 'hidden' };
const copy: React.CSSProperties = { position: 'relative', zIndex: 10, padding: '36px 32px', maxWidth: 520 };

const Eyebrow = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-900 font-subheading uppercase tracking-widest text-xs text-brand-yellow-500">
    {icon}
    {children}
  </span>
);

export const Express = () => (
  <div style={frame}>
    <HeroProceduralBackground variant="express" />
    <div style={copy}>
      <Eyebrow icon={<Zap className="h-4 w-4" />}>Mensajería en moto · MDQ 2026</Eyebrow>
      <h1 className="font-display uppercase text-5xl text-white mt-4" style={{ lineHeight: 0.98 }}>
        Envíos Express <span className="block text-brand-yellow-500">en el día</span>
      </h1>
      <p className="font-sans text-base text-brand-blue-100 mt-3 leading-relaxed">
        Retiramos en Zona Güemes y entregamos en Playa Grande en un rango de 3 horas. Te avisamos en cada paso.
      </p>
      <div style={{ marginTop: 20 }}>
        <CTANestedPill variant="primary" icon={<ArrowRight className="h-4 w-4" />}>Cotizá tu envío</CTANestedPill>
      </div>
    </div>
  </div>
);

export const LowCost = () => (
  <div style={frame}>
    <HeroProceduralBackground variant="lowcost" />
    <div style={copy}>
      <Eyebrow icon={<Wallet className="h-4 w-4" />}>Ruteo económico programado</Eyebrow>
      <h1 className="font-display uppercase text-5xl text-white mt-4" style={{ lineHeight: 0.98 }}>
        Enviá más, <span className="text-brand-yellow-500">pagá menos</span>
      </h1>
      <p className="font-sans text-base text-brand-blue-100 mt-3 leading-relaxed">
        Low Cost desde <span className="font-mono tabular-nums font-bold text-white">$3.000</span>: agrupamos tus paquetes del Centro a Punta Mogotes para el día siguiente.
      </p>
    </div>
  </div>
);

export const Contact = () => (
  <div style={frame}>
    <HeroProceduralBackground variant="contact" />
    <div style={copy}>
      <Eyebrow icon={<MapPin className="h-4 w-4" />}>Friuli 1972 · Mar del Plata</Eyebrow>
      <h1 className="font-display uppercase text-5xl text-white mt-4" style={{ lineHeight: 0.98 }}>
        Contactanos, <span className="text-brand-yellow-500">te respondemos hoy</span>
      </h1>
      <p className="font-sans text-base text-brand-blue-100 mt-3 leading-relaxed">
        Escribinos por WhatsApp o pasá por la base: más de 15 años moviendo paquetes por las calles de MDQ.
      </p>
    </div>
  </div>
);

export const ThreePL = () => (
  <div style={frame}>
    <HeroProceduralBackground variant="3pl" />
    <div style={copy}>
      <Eyebrow icon={<Warehouse className="h-4 w-4" />}>E-commerce · Fulfillment 3PL</Eyebrow>
      <h1 className="font-display uppercase text-5xl text-white mt-4" style={{ lineHeight: 0.98 }}>
        Tu depósito <span className="text-brand-yellow-500">en Camet</span>
      </h1>
      <p className="font-sans text-base text-brand-blue-100 mt-3 leading-relaxed">
        Guardamos tu stock, armamos los pedidos y los despachamos a toda la ciudad y Batán.
      </p>
    </div>
  </div>
);
