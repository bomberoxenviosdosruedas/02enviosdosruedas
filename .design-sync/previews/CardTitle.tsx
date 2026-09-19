import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@enviosdosruedas/ui';

export const Default = () => (
  <div style={{ maxWidth: 360 }}>
    <Card>
      <CardHeader>
        <CardTitle>Rastreá tu paquete</CardTitle>
        <CardDescription>Ingresá tu número de seguimiento y mirá en qué parte de Mar del Plata está tu envío.</CardDescription>
      </CardHeader>
    </Card>
  </div>
);

export const DisplayOverride = () => (
  <div style={{ maxWidth: 360 }}>
    <Card variant="bezel">
      <CardHeader>
        <span className="font-subheading uppercase tracking-wider text-xs text-brand-blue-500">Express · Radio central</span>
        <CardTitle className="font-display text-4xl">3 a 5 km</CardTitle>
        <CardDescription>Cobertura intermedia rápida en el casco urbano.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-mono tabular-nums text-3xl font-bold text-brand-blue-900">$4.600</p>
      </CardContent>
    </Card>
  </div>
);

export const OnDarkSurface = () => (
  <div className="bg-brand-blue-700" style={{ padding: 24, borderRadius: 16, maxWidth: 420 }}>
    <Card variant="glass" className="text-white">
      <CardHeader>
        <CardTitle className="text-brand-yellow-500">Enviá más, pagá menos</CardTitle>
        <CardDescription className="text-brand-blue-100">Low Cost: programá tus envíos desde el Puerto hasta Punta Mogotes.</CardDescription>
      </CardHeader>
    </Card>
  </div>
);
