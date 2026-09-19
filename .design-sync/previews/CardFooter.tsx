import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CTANestedPill } from '@enviosdosruedas/ui';
import { MessageCircleIcon as MessageCircle } from '@enviosdosruedas/ui';

export const SingleCTA = () => (
  <div style={{ maxWidth: 360 }}>
    <Card>
      <CardHeader>
        <CardTitle>¿Necesitás enviar hoy?</CardTitle>
        <CardDescription>Cotizá tu Express en segundos y retiramos en menos de dos horas.</CardDescription>
      </CardHeader>
      <CardFooter>
        <CTANestedPill>Cotizá tu envío</CTANestedPill>
      </CardFooter>
    </Card>
  </div>
);

export const PriceAndAction = () => (
  <div style={{ maxWidth: 380 }}>
    <Card variant="bezel">
      <CardHeader>
        <CardTitle>Low Cost · hasta 3 km</CardTitle>
        <CardDescription>Del Centro a Plaza Mitre, entrega al día siguiente.</CardDescription>
      </CardHeader>
      <CardFooter style={{ justifyContent: 'space-between' }}>
        <span className="font-mono tabular-nums text-2xl font-bold text-brand-blue-700">$3.000</span>
        <CTANestedPill variant="elevated" size="compact">Elegí Low Cost</CTANestedPill>
      </CardFooter>
    </Card>
  </div>
);

export const TwoActions = () => (
  <div style={{ maxWidth: 440 }}>
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>E-Commerce 3PL</CardTitle>
        <CardDescription>Guardamos tu stock en el Centro de Distribución y despachamos cada pedido.</CardDescription>
      </CardHeader>
      <CardFooter className="pt-4 border-t border-brand-blue-100" style={{ gap: 12, paddingTop: 16 }}>
        <CTANestedPill size="compact">Pedí una propuesta</CTANestedPill>
        <CTANestedPill variant="ghost" size="compact" icon={<MessageCircle className="w-4 h-4" />}>
          Contactanos
        </CTANestedPill>
      </CardFooter>
    </Card>
  </div>
);
