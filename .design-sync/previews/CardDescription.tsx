import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CTANestedPill } from '@enviosdosruedas/ui';
import { MapPinIcon as MapPin } from '@enviosdosruedas/ui';

export const UnderTitle = () => (
  <div style={{ maxWidth: 360 }}>
    <Card>
      <CardHeader>
        <CardTitle>Flex MercadoLibre</CardTitle>
        <CardDescription>
          Despachá tus ventas antes del mediodía y las entregamos hoy en todo el Partido de General Pueyrredón.
        </CardDescription>
      </CardHeader>
    </Card>
  </div>
);

export const WithLocation = () => (
  <div style={{ maxWidth: 380 }}>
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Retiro programado</CardTitle>
        <CardDescription>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <MapPin className="w-4 h-4 text-brand-blue-500" />
            Friuli 1972, Zona Güemes
          </span>
        </CardDescription>
        <CardDescription>Pasamos por tu local entre las 9 y las 12 hs. Te avisamos por WhatsApp cuando el cadete esté en camino.</CardDescription>
      </CardHeader>
    </Card>
  </div>
);

export const AsFooterNote = () => (
  <div style={{ maxWidth: 380 }}>
    <Card variant="bezel">
      <CardHeader>
        <CardTitle>Low Cost · 5 a 7 km</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-mono tabular-nums text-3xl font-bold text-brand-blue-700">$5.300</p>
      </CardContent>
      <CardFooter style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
        <CTANestedPill size="compact">Cotizá tu envío</CTANestedPill>
        <CardDescription className="text-xs">Tarifa vigente 2026. Entrega al día siguiente hábil.</CardDescription>
      </CardFooter>
    </Card>
  </div>
);
