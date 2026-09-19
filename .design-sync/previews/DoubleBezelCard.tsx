import { DoubleBezelCard, Badge } from '@enviosdosruedas/ui';

export const Light = () => (
  <div style={{ maxWidth: 380 }}>
    <DoubleBezelCard>
      <Badge variant="urgent" size="sm">Express</Badge>
      <h3 className="font-display uppercase text-3xl text-brand-blue-700 mt-3">Envío en el día</h3>
      <p className="font-sans text-sm text-brand-ink mt-2 leading-relaxed">
        Retiramos en Zona Güemes y entregamos en Playa Grande en menos de dos horas. Te avisamos por WhatsApp en cada paso.
      </p>
      <div className="mt-4 pt-4 border-t border-brand-blue-50 flex items-baseline justify-between">
        <span className="font-subheading uppercase tracking-wider text-xs text-brand-blue-400">Desde</span>
        <span className="font-mono tabular-nums text-2xl font-bold text-brand-blue-700">$3.700</span>
      </div>
    </DoubleBezelCard>
  </div>
);

export const Dark = () => (
  <div className="bg-brand-blue-700" style={{ padding: 24, borderRadius: 16, maxWidth: 420 }}>
    <DoubleBezelCard variant="dark">
      <p className="font-subheading uppercase tracking-wider text-sm text-brand-yellow-500">Low Cost</p>
      <h3 className="font-display uppercase text-3xl mt-2">Enviá más, pagá menos</h3>
      <p className="font-sans text-sm text-brand-blue-100 mt-2 leading-relaxed">
        Programá tus envíos del día siguiente desde Centro hasta Punta Mogotes a tarifa reducida.
      </p>
      <p className="font-mono tabular-nums text-2xl font-bold text-brand-yellow-500 mt-4">$3.000</p>
    </DoubleBezelCard>
  </div>
);

export const StatBlock = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 16, maxWidth: 640 }}>
    {[
      ['15+', 'años en MDQ'],
      ['2 hs', 'entrega Express'],
      ['98%', 'envíos a tiempo'],
    ].map(([n, l]) => (
      <DoubleBezelCard key={l} hoverEffect={false} innerClassName="text-center">
        <p className="font-display text-4xl text-brand-blue-700">{n}</p>
        <p className="font-subheading uppercase tracking-wider text-xs text-brand-blue-400 mt-1">{l}</p>
      </DoubleBezelCard>
    ))}
  </div>
);
