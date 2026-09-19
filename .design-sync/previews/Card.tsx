import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  CTANestedPill,
} from '@enviosdosruedas/ui';
import { CheckIcon as Check, ZapIcon as Zap } from '@enviosdosruedas/ui';

const bullets = ['Elegís rango horario', 'Mínimo 2 hs de anticipación', 'Aviso por WhatsApp'];

const Bullets = () => (
  <ul className="space-y-2 pt-4 border-t border-brand-blue-100">
    {bullets.map((b) => (
      <li key={b} className="flex items-center gap-2 text-brand-ink">
        <Check className="h-4 w-4 shrink-0 text-brand-blue-500" />
        <span className="font-sans text-xs">{b}</span>
      </li>
    ))}
  </ul>
);

const Price = ({ value, dark }: { value: string; dark?: boolean }) => (
  <div className="flex items-baseline justify-between">
    <span className={dark ? 'font-subheading uppercase tracking-wider text-xs text-brand-blue-100' : 'font-subheading uppercase tracking-wider text-xs text-brand-blue-400'}>
      Desde
    </span>
    <span className={dark ? 'font-mono tabular-nums text-2xl font-bold text-brand-yellow-500' : 'font-mono tabular-nums text-2xl font-bold text-brand-blue-700'}>
      {value}
    </span>
  </div>
);

export const Default = () => (
  <div style={{ maxWidth: 360 }}>
    <Card>
      <CardHeader>
        <div><Badge variant="urgent" size="sm" icon={<Zap className="w-3.5 h-3.5" />}>Express</Badge></div>
        <CardTitle>Radio cercano · hasta 3 km</CardTitle>
        <CardDescription>Retiramos en Zona Güemes y entregamos en el Centro en el día.</CardDescription>
      </CardHeader>
      <CardContent>
        <Bullets />
      </CardContent>
      <CardFooter style={{ justifyContent: 'space-between' }}>
        <span className="font-mono tabular-nums text-2xl font-bold text-brand-blue-700">$3.700</span>
        <CTANestedPill size="compact">Cotizá</CTANestedPill>
      </CardFooter>
    </Card>
  </div>
);

export const Bezel = () => (
  <div style={{ maxWidth: 360 }}>
    <Card variant="bezel">
      <CardHeader>
        <div><Badge variant="economic" size="sm">Low Cost</Badge></div>
        <CardTitle>Radio central · 3 a 5 km</CardTitle>
        <CardDescription>Entrega programada al día siguiente, de Constitución a Playa Grande.</CardDescription>
      </CardHeader>
      <CardContent>
        <Price value="$4.000" />
      </CardContent>
    </Card>
  </div>
);

export const Elevated = () => (
  <div style={{ maxWidth: 360 }}>
    <Card variant="elevated">
      <CardHeader>
        <div><Badge variant="flex" size="sm">Flex MercadoLibre</Badge></div>
        <CardTitle>Tu tienda, entregas en el día</CardTitle>
        <CardDescription>Despachá tus ventas de MercadoLibre Flex antes del mediodía y llegan hoy a todo MDQ.</CardDescription>
      </CardHeader>
      <CardFooter>
        <CTANestedPill variant="elevated" size="compact">Mirá cómo funciona</CTANestedPill>
      </CardFooter>
    </Card>
  </div>
);

export const Glass = () => (
  <div className="bg-brand-blue-700" style={{ padding: 24, borderRadius: 16, maxWidth: 420 }}>
    <Card variant="glass" className="text-white">
      <CardHeader>
        <CardTitle className="text-brand-yellow-500">Radio perimetral · 7 a 10 km</CardTitle>
        <CardDescription className="text-brand-blue-100">Llegamos a Batán y Camet con la misma agilidad que en el Puerto.</CardDescription>
      </CardHeader>
      <CardContent>
        <Price value="$8.200" dark />
      </CardContent>
    </Card>
  </div>
);

export const HighlightedTier = () => (
  <div style={{ maxWidth: 360 }}>
    <Card className="ring-2 ring-brand-yellow-500">
      <CardHeader>
        <span className="bg-brand-yellow-500 text-brand-blue-900 font-subheading font-bold uppercase tracking-wider text-xs rounded-full" style={{ alignSelf: 'flex-start', padding: '4px 12px' }}>
          Más elegido
        </span>
        <CardTitle>Radio extendido · 5 a 7 km</CardTitle>
        <CardDescription>Distancias medias con máxima agilidad, de Punta Mogotes al Centro.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-mono tabular-nums text-4xl font-bold text-brand-blue-900">$6.100</p>
        <p className="font-subheading uppercase tracking-wider text-xs text-brand-blue-700 mt-1">/ despacho final · Express 2026</p>
      </CardContent>
      <CardFooter>
        <CTANestedPill size="compact">Cotizá 5 a 7 km</CTANestedPill>
      </CardFooter>
    </Card>
  </div>
);
