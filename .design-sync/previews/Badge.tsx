import { Badge } from '@enviosdosruedas/ui';
import { ZapIcon as Zap, ShieldCheckIcon as ShieldCheck, LeafIcon as Leaf, ClockIcon as Clock } from '@enviosdosruedas/ui';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' };

export const ServiceTypes = () => (
  <div style={row}>
    <Badge variant="urgent" icon={<Zap className="w-3.5 h-3.5" />}>Express</Badge>
    <Badge variant="economic">Low Cost</Badge>
    <Badge variant="flex">Flex MercadoLibre</Badge>
    <Badge variant="secure" icon={<ShieldCheck className="w-3.5 h-3.5" />}>Envío asegurado</Badge>
  </div>
);

export const AllVariants = () => (
  <div style={row}>
    <Badge variant="urgent">Urgente</Badge>
    <Badge variant="secure">Seguro</Badge>
    <Badge variant="economic">Económico</Badge>
    <Badge variant="flex">Flex</Badge>
    <Badge variant="neutral">Mar del Plata</Badge>
    <Badge variant="outline">Tarifas 2026</Badge>
    <Badge variant="primary">15+ años</Badge>
    <Badge variant="accent">Nuevo</Badge>
  </div>
);

export const Sizes = () => (
  <div style={row}>
    <Badge size="sm" variant="primary">Chico</Badge>
    <Badge size="md" variant="primary">Mediano</Badge>
    <Badge size="lg" variant="primary">Grande</Badge>
  </div>
);

export const RoundedAndIcon = () => (
  <div style={row}>
    <Badge rounded="full" variant="flex" icon={<Clock className="w-3.5 h-3.5" />}>Entrega en el día</Badge>
    <Badge rounded="lg" variant="secure" icon={<Leaf className="w-3.5 h-3.5" />}>Última milla en moto</Badge>
    <Badge rounded="md" variant="outline">Zona Güemes</Badge>
  </div>
);
