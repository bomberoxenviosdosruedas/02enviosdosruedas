import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from '@enviosdosruedas/ui';
import { ZapIcon as Zap, PackageIcon as Package, StoreIcon as Store } from '@enviosdosruedas/ui';

export const WithBadge = () => (
  <div style={{ maxWidth: 360 }}>
    <Card>
      <CardHeader>
        <div><Badge variant="urgent" size="sm" icon={<Zap className="w-3.5 h-3.5" />}>Express</Badge></div>
        <CardTitle>Envío en el día</CardTitle>
        <CardDescription>Retiramos en Zona Güemes y entregamos en Playa Grande en menos de dos horas.</CardDescription>
      </CardHeader>
    </Card>
  </div>
);

export const WithIconBox = () => (
  <div style={{ maxWidth: 400 }}>
    <Card variant="elevated">
      <CardHeader style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        <div className="w-12 h-12 rounded-xl bg-brand-blue-700 text-brand-yellow-500 flex items-center justify-center shrink-0">
          <Package className="w-6 h-6" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <CardTitle>E-Commerce 3PL</CardTitle>
          <CardDescription>Almacenamos, preparamos y despachamos tus pedidos desde el Centro de Distribución.</CardDescription>
        </div>
      </CardHeader>
    </Card>
  </div>
);

export const HeaderWithBody = () => (
  <div style={{ maxWidth: 360 }}>
    <Card variant="bezel">
      <CardHeader>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div><Badge variant="neutral" size="sm" icon={<Store className="w-3.5 h-3.5" />}>Emprendedores</Badge></div>
          <span className="font-mono tabular-nums text-xs text-brand-blue-400">Tarifas 2026</span>
        </div>
        <CardTitle>Plan para tu marca</CardTitle>
        <CardDescription>Retiros coordinados en tu taller de Constitución, sin mínimo de envíos.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-sans text-sm text-brand-ink pt-4 border-t border-brand-blue-100">
          Low Cost desde <span className="font-mono tabular-nums font-bold text-brand-blue-700">$3.000</span> hasta 3 km.
        </p>
      </CardContent>
    </Card>
  </div>
);
