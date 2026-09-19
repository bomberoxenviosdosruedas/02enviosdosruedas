import { BentoGrid, BentoGridItem, Badge, CTANestedPill } from '@enviosdosruedas/ui';
import { ZapIcon as Zap, WalletIcon as Wallet, CalculatorIcon as Calculator } from '@enviosdosruedas/ui';

export const HeroAndStandard = () => (
  <BentoGrid>
    <BentoGridItem span="hero" {...{ innerClassName: 'flex-1 flex flex-col' }}>
      <div><Badge variant="urgent" size="sm" icon={<Zap className="w-3.5 h-3.5" />}>Span 7 · Hero</Badge></div>
      <h3 className="font-display uppercase text-4xl text-brand-blue-700 mt-4">Express en el día</h3>
      <p className="font-sans text-sm leading-relaxed text-brand-ink mt-2">
        Retiramos en el Puerto y entregamos en Constitución en menos de dos horas. Te avisamos por WhatsApp en cada paso.
      </p>
      <p className="font-mono tabular-nums text-3xl font-bold text-brand-blue-700 mt-auto">$3.700</p>
    </BentoGridItem>
    <BentoGridItem span="standard" {...{ innerClassName: 'flex-1 flex flex-col' }}>
      <div><Badge variant="economic" size="sm" icon={<Wallet className="w-3.5 h-3.5" />}>Span 5 · Standard</Badge></div>
      <h3 className="font-display uppercase text-3xl text-brand-blue-700 mt-4">Low Cost</h3>
      <p className="font-sans text-sm leading-relaxed text-brand-ink mt-2">
        Entrega al día siguiente de Punta Mogotes a Camet, a la tarifa más baja.
      </p>
      <p className="font-mono tabular-nums text-3xl font-bold text-brand-blue-700 mt-auto">$3.000</p>
    </BentoGridItem>
  </BentoGrid>
);

export const DarkVariant = () => (
  <BentoGrid>
    <BentoGridItem span="hero" variant="dark" {...{ innerClassName: 'flex-1 flex flex-col' }}>
      <p className="font-subheading uppercase tracking-wider text-sm text-brand-yellow-500">Express · 7 a 10 km</p>
      <h3 className="font-display uppercase text-4xl text-white mt-2">Llegamos a Batán hoy</h3>
      <p className="font-sans text-sm leading-relaxed text-brand-blue-100 mt-2">
        Radio perimetral con la misma velocidad que en el Centro. Elegís el rango horario y nosotros hacemos el resto.
      </p>
      <p className="font-mono tabular-nums text-3xl font-bold text-brand-yellow-500 mt-auto">$8.200</p>
    </BentoGridItem>
    <BentoGridItem span="standard" {...{ innerClassName: 'flex-1 flex flex-col' }}>
      <p className="font-subheading uppercase tracking-wider text-sm text-brand-blue-500">Low Cost · 7 a 10 km</p>
      <h3 className="font-display uppercase text-3xl text-brand-blue-700 mt-2">Batán mañana</h3>
      <p className="font-sans text-sm leading-relaxed text-brand-ink mt-2">Programá hoy y lo entregamos al día siguiente.</p>
      <p className="font-mono tabular-nums text-3xl font-bold text-brand-blue-700 mt-auto">$7.000</p>
    </BentoGridItem>
  </BentoGrid>
);

export const FullWidthNoBezel = () => (
  <BentoGrid>
    <BentoGridItem span="full" doubleBezel={false} className="bg-brand-blue-700 rounded-2xl">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 16, height: '100%', padding: 40 }}>
        <div className="w-12 h-12 rounded-xl bg-brand-yellow-500 text-brand-blue-900 flex items-center justify-center">
          <Calculator className="w-6 h-6" />
        </div>
        <p className="font-subheading uppercase tracking-wider text-sm text-brand-yellow-500">Span 12 · sin double bezel</p>
        <h3 className="font-display uppercase text-5xl text-white leading-none">Cotizá tu envío en segundos</h3>
        <p className="font-sans text-base text-brand-blue-100">Ingresá origen y destino y mirá el precio final con tarifas 2026.</p>
        <CTANestedPill size="large">Cotizá ahora</CTANestedPill>
      </div>
    </BentoGridItem>
  </BentoGrid>
);
