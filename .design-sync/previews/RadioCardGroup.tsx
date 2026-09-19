import { useState } from 'react';
import { RadioCardGroup, type RadioCardOption } from '@enviosdosruedas/ui';
import { ZapIcon as Zap, WalletIcon as Wallet, PackageIcon as Package } from '@enviosdosruedas/ui';

const services: RadioCardOption[] = [
  {
    id: 'express',
    serviceType: 'EXPRESS',
    label: 'Express',
    description: 'Retiro y entrega en el día dentro de Mar del Plata. Ideal para urgencias.',
    price: '$3.700',
    badge: 'Más rápido',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: 'lowcost',
    serviceType: 'LOW_COST',
    label: 'Low Cost',
    description: 'Entrega programada al día siguiente, la opción más económica.',
    price: '$3.000',
    icon: <Wallet className="w-6 h-6" />,
  },
  {
    id: 'flex',
    serviceType: 'FLEX',
    label: 'Flex',
    description: 'Entregas de MercadoLibre Flex en el día para tu tienda.',
    badge: 'E-commerce',
    icon: <Package className="w-6 h-6" />,
  },
];

const Group = ({ initial }: { initial: string }) => {
  const [value, setValue] = useState(initial);
  return (
    <div style={{ maxWidth: 900 }}>
      <RadioCardGroup options={services} value={value} onChange={setValue} gridCols="grid-cols-3" />
    </div>
  );
};

export const ExpressSelected = () => <Group initial="express" />;
export const LowCostSelected = () => <Group initial="lowcost" />;
export const FlexSelected = () => <Group initial="flex" />;

export const WithDisabled = () => {
  const [value, setValue] = useState('express');
  const opts = services.map((o) => (o.id === 'flex' ? { ...o, disabled: true, badge: 'Próximamente' } : o));
  return (
    <div style={{ maxWidth: 900 }}>
      <RadioCardGroup options={opts} value={value} onChange={setValue} gridCols="grid-cols-3" />
    </div>
  );
};
