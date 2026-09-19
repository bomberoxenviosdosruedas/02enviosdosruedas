import { TimelineGroup, TimelineContent, DoubleBezelCard } from '@enviosdosruedas/ui';
import type { Variants } from 'motion/react';

// Staggered entrance wrapper: each direct child is a
// <TimelineContent variant="staggerItem" />. viewportMargin="0px" so the
// group triggers inside a short preview frame. The staggerItem preset is a
// spring (~1.5s to settle), so items pass a short tween `customVariants` with
// an `animationNum` stagger so a static render shows the settled layout.
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.04, duration: 0.2 } }),
};
// Items opt out of motion's WAAPI path (JS-driven frames) so the settled state
// is committed promptly in the static capture harness.
const noWaapi = () => {};

// The static capture harness freezes the clock, so TimelineGroup's own container fade
// (opacity 0 -> 1 on WAAPI, no onUpdate escape hatch) never commits before the screenshot.
// Pin motion-driven opacity to the settled end state for this card only; live cards animate.
const Settled = ({ children }: { children: React.ReactNode }) => (
  <div data-tg-preview>
    <style>{'[data-tg-preview] [style*="opacity"]{opacity:1!important}'}</style>
    {children}
  </div>
);

const tiers = [
  { rango: '0 a 3 km', precio: '$3.700', zona: 'Güemes → Plaza Mitre' },
  { rango: '3 a 5 km', precio: '$4.600', zona: 'Centro → Playa Grande' },
  { rango: '5 a 7 km', precio: '$6.100', zona: 'Puerto → Constitución' },
  { rango: '7 a 10 km', precio: '$8.200', zona: 'Centro → Punta Mogotes' },
];

export const GrillaTarifasExpress = () => (
  <Settled><TimelineGroup viewportMargin="0px"
    style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 12, maxWidth: 820 }}>
    {tiers.map((t, i) => (
      <TimelineContent key={t.rango} customVariants={item} animationNum={i} viewportMargin="0px" onUpdate={noWaapi}>
        <DoubleBezelCard hoverEffect={false}>
          <p className="font-subheading uppercase tracking-wider text-xs text-brand-blue-500">Express</p>
          <p className="font-display uppercase text-2xl text-brand-blue-700 mt-1">{t.rango}</p>
          <p className="font-mono tabular-nums text-2xl font-bold text-brand-blue-900 mt-2">{t.precio}</p>
          <p className="font-sans text-xs text-brand-ink mt-2">{t.zona}</p>
        </DoubleBezelCard>
      </TimelineContent>
    ))}
  </TimelineGroup>
  </Settled>
);

const pasos = [
  ['01', 'Cotizá', 'Ingresá origen y destino y mirá el precio al instante.'],
  ['02', 'Coordiná', 'Elegí Express o Low Cost y el horario de retiro.'],
  ['03', 'Rastreá', 'Seguí la moto en vivo hasta la puerta de tu cliente.'],
];

export const PasosComoFunciona = () => (
  <Settled><div className="bg-brand-blue-700" style={{ padding: 24, borderRadius: 16, maxWidth: 760 }}>
    <TimelineGroup viewportMargin="0px"
      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {pasos.map(([n, t, d], i) => (
        <TimelineContent key={n} customVariants={item} animationNum={i} viewportMargin="0px" onUpdate={noWaapi} style={{ display: 'flex', gap: 16, alignItems: 'baseline' }}>
          <span className="font-display text-4xl text-brand-yellow-500">{n}</span>
          <span>
            <span className="block font-display uppercase text-2xl text-white">{t}</span>
            <span className="block font-sans text-sm text-brand-blue-100 mt-1">{d}</span>
          </span>
        </TimelineContent>
      ))}
    </TimelineGroup>
  </div>
  </Settled>
);

export const ChipsZonas = () => (
  <Settled><TimelineGroup viewportMargin="0px" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, maxWidth: 620 }}>
    {['Centro', 'Zona Güemes', 'Playa Grande', 'Puerto', 'Punta Mogotes', 'Chauvín', 'Camet', 'Batán'].map((z, i) => (
      <TimelineContent key={z} as="span" customVariants={item} animationNum={i} viewportMargin="0px" onUpdate={noWaapi}
        className="inline-block px-4 py-2 rounded-full bg-brand-blue-50 font-subheading uppercase tracking-wider text-sm text-brand-blue-700">
        {z}
      </TimelineContent>
    ))}
  </TimelineGroup>
  </Settled>
);
