import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@enviosdosruedas/ui';
import { Fragment } from 'react';
import { CheckIcon as Check } from '@enviosdosruedas/ui';

export const BulletList = () => (
  <div style={{ maxWidth: 360 }}>
    <Card>
      <CardHeader>
        <CardTitle>Express</CardTitle>
        <CardDescription>Qué incluye cada envío en el día.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 pt-4 border-t border-brand-blue-100">
          {['Elegís rango horario', 'Mínimo 2 hs de anticipación', 'Notificación por WhatsApp', 'Custodia digital'].map((b) => (
            <li key={b} className="flex items-center gap-2 text-brand-ink">
              <Check className="h-4 w-4 shrink-0 text-brand-blue-500" />
              <span className="font-sans text-sm">{b}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </div>
);

const rates: [string, string, string][] = [
  ['0 – 3 km', '$3.700', '$3.000'],
  ['3 – 5 km', '$4.600', '$4.000'],
  ['5 – 7 km', '$6.100', '$5.300'],
  ['7 – 10 km', '$8.200', '$7.000'],
];

export const RateTable = () => (
  <div style={{ maxWidth: 440 }}>
    <Card variant="bezel">
      <CardHeader>
        <CardTitle>Tarifario 2026</CardTitle>
        <CardDescription>Precios por distancia dentro de Mar del Plata.</CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', columnGap: 24, rowGap: 10 }}>
          <span className="font-subheading uppercase tracking-wider text-xs text-brand-blue-400">Rango</span>
          <span className="font-subheading uppercase tracking-wider text-xs text-brand-blue-400">Express</span>
          <span className="font-subheading uppercase tracking-wider text-xs text-brand-blue-400">Low Cost</span>
          {rates.map(([r, e, l]) => (
            <Fragment key={r}>
              <span className="font-sans text-sm text-brand-ink">{r}</span>
              <span className="font-mono tabular-nums text-sm font-bold text-brand-blue-700">{e}</span>
              <span className="font-mono tabular-nums text-sm font-bold text-brand-blue-500">{l}</span>
            </Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export const StatGrid = () => (
  <div style={{ maxWidth: 440 }}>
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Tu semana en MDQ</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
          {[
            ['48', 'envíos'],
            ['2 hs', 'promedio'],
            ['98%', 'a tiempo'],
          ].map(([n, l]) => (
            <div key={l} className="bg-brand-blue-50 rounded-xl text-center" style={{ padding: 12 }}>
              <p className="font-display text-3xl text-brand-blue-700">{n}</p>
              <p className="font-subheading uppercase tracking-wider text-xs text-brand-blue-400 mt-1">{l}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);
