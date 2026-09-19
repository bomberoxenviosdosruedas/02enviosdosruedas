import { BentoGrid, BentoGridItem, Badge, CTANestedPill } from '@enviosdosruedas/ui';
import { ZapIcon as Zap, WalletIcon as Wallet, PackageIcon as Package, WarehouseIcon as Warehouse, CalculatorIcon as Calculator } from '@enviosdosruedas/ui';
import type { ReactNode } from 'react';

interface TileProps {
  icon: ReactNode;
  badge: ReactNode;
  title: string;
  body: string;
  price?: string;
  dark?: boolean;
}

const Tile = ({ icon, badge, title, body, price, dark }: TileProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div
        className={dark ? 'w-12 h-12 rounded-xl bg-brand-yellow-500 text-brand-blue-900 flex items-center justify-center' : 'w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center'}
      >
        {icon}
      </div>
      {badge}
    </div>
    <h3 className={dark ? 'font-display uppercase text-3xl text-white' : 'font-display uppercase text-3xl text-brand-blue-700'}>{title}</h3>
    <p className={dark ? 'font-sans text-sm leading-relaxed text-brand-blue-100' : 'font-sans text-sm leading-relaxed text-brand-ink'}>{body}</p>
    {price && (
      <div className={dark ? 'mt-auto pt-4 border-t border-white/10 flex items-baseline justify-between' : 'mt-auto pt-4 border-t border-brand-blue-100 flex items-baseline justify-between'}>
        <span className={dark ? 'font-subheading uppercase tracking-wider text-xs text-brand-blue-100' : 'font-subheading uppercase tracking-wider text-xs text-brand-blue-400'}>Desde</span>
        <span className={dark ? 'font-mono tabular-nums text-2xl font-bold text-brand-yellow-500' : 'font-mono tabular-nums text-2xl font-bold text-brand-blue-700'}>{price}</span>
      </div>
    )}
  </div>
);

const express = (
  <Tile
    dark
    icon={<Zap className="w-6 h-6" />}
    badge={<Badge variant="accent" size="sm">Más rápido</Badge>}
    title="Express"
    body="Retiro y entrega en el día dentro de Mar del Plata. De Zona Güemes a Playa Grande en menos de dos horas."
    price="$3.700"
  />
);
const lowcost = (
  <Tile
    icon={<Wallet className="w-6 h-6" />}
    badge={<Badge variant="economic" size="sm">Económico</Badge>}
    title="Low Cost"
    body="Entrega programada al día siguiente. La opción más económica para tus envíos diarios."
    price="$3.000"
  />
);
const flex = (
  <Tile
    icon={<Package className="w-6 h-6" />}
    badge={<Badge variant="flex" size="sm">MercadoLibre</Badge>}
    title="Flex"
    body="Despachá tus ventas de MercadoLibre Flex antes del mediodía y llegan hoy."
  />
);
const tpl = (
  <Tile
    icon={<Warehouse className="w-6 h-6" />}
    badge={<Badge variant="secure" size="sm">E-commerce</Badge>}
    title="E-Commerce 3PL"
    body="Guardamos tu stock en el Centro de Distribución, preparamos cada pedido y lo entregamos en todo el Partido de General Pueyrredón."
  />
);

export const ServicesShowcase = () => (
  <BentoGrid>
    <BentoGridItem span="hero" variant="dark" {...{ innerClassName: 'flex-1 flex flex-col' }}>{express}</BentoGridItem>
    <BentoGridItem span="standard" {...{ innerClassName: 'flex-1 flex flex-col' }}>{lowcost}</BentoGridItem>
    <BentoGridItem span="standard" {...{ innerClassName: 'flex-1 flex flex-col' }}>{flex}</BentoGridItem>
    <BentoGridItem span="hero" {...{ innerClassName: 'flex-1 flex flex-col' }}>{tpl}</BentoGridItem>
  </BentoGrid>
);

export const WithCotizadorCTA = () => (
  <BentoGrid>
    <BentoGridItem span="hero" variant="dark" {...{ innerClassName: 'flex-1 flex flex-col' }}>{express}</BentoGridItem>
    <BentoGridItem span="standard" {...{ innerClassName: 'flex-1 flex flex-col' }}>{lowcost}</BentoGridItem>
    <BentoGridItem span="full" doubleBezel={false} className="bg-brand-blue-700 rounded-2xl">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 16, height: '100%', padding: 40 }}>
        <div className="w-12 h-12 rounded-xl bg-brand-yellow-500 text-brand-blue-900 flex items-center justify-center">
          <Calculator className="w-6 h-6" />
        </div>
        <h3 className="font-display uppercase text-5xl text-white leading-none">Cotizá tu envío en segundos</h3>
        <p className="font-sans text-base text-brand-blue-100">Ingresá origen y destino, elegí el servicio y mirá el precio final. Tarifas 2026.</p>
        <CTANestedPill size="large">Cotizá ahora</CTANestedPill>
      </div>
    </BentoGridItem>
  </BentoGrid>
);
