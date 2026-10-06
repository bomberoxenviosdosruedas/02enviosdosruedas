'use client';

import React from 'react';
import { Building2, Check, Clock, MapPin, Package, Route as RouteIcon, Shield, ShieldCheck, ShoppingBag, Star, Zap } from 'lucide-react';
import CTANestedPill, { type CTANestedPillVariant } from './CTANestedPill';
import Badge from './Badge';
import { cn } from '@/lib/utils';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

/**
 * El precio del tramo llega como string porque cada servicio usa su propio
 * formato. Si viene un número desnudo lo presentationamos con signo y
 * separador de miles; si ya viene formateado (`$6.000`, `Tarifa LowCost`)
 * lo respetamos tal cual. No calcula nada: sólo muestra.
 */
const displayPrice = (price: string) => {
  const raw = price.trim();
  return /^\d+$/.test(raw) ? formatArs(Number(raw)) : price;
};

/**
 * `light` = tarifario sobre fondo blanco (Express, Depósito, E-commerce 24HS).
 * `dark` = tarifario sobre azul de marca (LowCost, Flex): las tarjetas van
 * translúcidas con texto claro.
 */
export type Tone = 'light' | 'dark';

export type ServiceType =
  | 'EXPRESS'
  | 'LOW_COST'
  | 'FLEX'
  | 'DEPOSITO'
  | 'ECOMMERCE_24HS'
  | 'EMPRENDEDORES'
  | 'ECOMMERCE_SAME_DAY'
  | 'CUENTA_CORRIENTE'
  | 'CONTRAREEMBOLSO';

export interface PriceTier {
  range: string;
  distance: string;
  price: string;
  period?: string;
  features: string[];
  tag?: string;
  note?: string;
  featured?: boolean;
}

export interface PricingFact {
  icon: string;
  title: string;
  body: string;
}

export interface ServicePricingProps {
  serviceType: ServiceType;
  title: string;
  subtitle?: string;
  rangeLabel: string;
  unit: string;
  tiers: PriceTier[];
  ctaLabel: (tierIndex: number) => React.ReactNode;
  ctaHref?: string;
  ctaVariant?: CTANestedPillVariant;
  featuredIndex?: number;
  perKmCoefficient?: number;
  maxAutoKm?: number;
  consultThresholdKm?: number;
  excedenteTitle?: string;
  excedenteDescription?: string;
  excedenteExampleKm?: number;
  /** Precio del ejemplo, resuelto fuera del componente (ver `pricing.ts`). */
  excedenteExamplePrice?: number;
  showFacts?: boolean;
  facts?: PricingFact[];
  tone?: Tone;
  backgroundClassName?: string;
  cardClassName?: string;
  className?: string;
}

/** Ventana operativa por servicio: corte de carga y hora de entrega. */
const SERVICE_WINDOWS: Record<ServiceType, string> = {
  EXPRESS: 'Franja de 3 hs a elección',
  LOW_COST: 'Corte 13:00 · entrega antes de 19:00',
  FLEX: 'Corte 15:00 · entrega antes de 20:00',
  DEPOSITO: 'Despacho Same Day 9:00-20:00',
  EMPRENDEDORES: 'Planes 3PL y E-commerce',
  ECOMMERCE_24HS: 'Next Day 9:00-20:00',
  ECOMMERCE_SAME_DAY: 'Same Day 9:00-20:00',
  CUENTA_CORRIENTE: 'Condiciones Express · corte 15:00',
  CONTRAREEMBOLSO: 'Comisión $0',
};

/** `facts[].icon` viene como nombre de string desde cada servicio. */
const FACT_ICONS: Record<string, React.ElementType> = {
  Building2,
  Clock,
  Package,
  Route: RouteIcon,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Zap,
};

interface TierCardProps {
  tier: PriceTier;
  isFeatured: boolean;
  unit: string;
  ctaLabel: React.ReactNode;
  ctaHref?: string;
  ctaVariant: CTANestedPillVariant;
  tone: Tone;
  cardClassName?: string;
}

function TierCard({
  tier,
  isFeatured,
  unit,
  ctaLabel,
  ctaHref,
  ctaVariant,
  tone,
  cardClassName,
}: TierCardProps) {
  const isExternal = Boolean(ctaHref?.startsWith('http'));
  const dark = tone === 'dark';

  const badge = isFeatured && tier.tag ? (
    <Badge
      variant="accent"
      size="sm"
      className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md"
      icon={<Star className="h-3 w-3 fill-current" aria-hidden="true" />}
    >
      {tier.tag}
    </Badge>
  ) : null;

  return (
    <li className="h-full">
      <article
        className={cn(
          'relative flex h-full flex-col gap-5 rounded-2xl p-5 sm:p-6',
          'transition-[box-shadow,transform,background-color] duration-200',
          dark
            ? 'bg-white/10 shadow-float ring-1 ring-white/20 backdrop-blur-md hover:bg-white/15'
            : isFeatured
              ? 'bg-brand-blue-50 shadow-lg ring-1 ring-brand-blue-200'
              : 'bg-white shadow-sm ring-1 ring-brand-blue-100 hover:shadow-lg hover:ring-brand-blue-300 motion-safe:hover:-translate-y-0.5',
          cardClassName
        )}
      >
        {badge}

        <div className="flex items-start justify-between gap-2 pt-1">
          <h3
            className={cn(
              'font-subheading text-sm uppercase leading-tight tracking-wider sm:text-base',
              dark ? 'text-white' : 'text-brand-blue-900'
            )}
          >
            {tier.range}
          </h3>
          <span
            className={cn(
              'shrink-0 rounded-md px-2 py-0.5 font-mono text-xs font-medium tabular-nums',
              dark ? 'bg-white/15 text-white' : 'bg-brand-blue-50 text-brand-blue-900'
            )}
          >
            {tier.distance}
          </span>
        </div>

        <div>
          <p
            className={cn(
              'font-mono text-2xs uppercase tracking-wider',
              dark ? 'text-brand-blue-100' : 'text-brand-blue-700'
            )}
          >
            Tarifa
          </p>
          <p className="mt-1 flex flex-wrap items-baseline gap-x-1.5">
            <span
              className={cn(
                'font-mono text-[40px] font-bold leading-none tabular-nums sm:text-[44px]',
                dark ? 'text-brand-yellow-500' : 'text-brand-blue-900'
              )}
            >
              {displayPrice(tier.price)}
            </span>
            <span
              className={cn('font-mono text-xs', dark ? 'text-brand-blue-100' : 'text-brand-blue-700')}
            >
              {tier.period ?? unit}
            </span>
          </p>
        </div>

        <ul
          className={cn(
            'space-y-2 border-t pt-4',
            dark ? 'border-white/15' : 'border-brand-blue-100'
          )}
        >
          {tier.features.map((feature) => (
            <li
              key={feature}
              className={cn('flex items-start gap-2', dark ? 'text-brand-blue-50' : 'text-brand-blue-900')}
            >
              <Check
                className={cn(
                  'mt-0.5 h-4 w-4 shrink-0',
                  dark ? 'text-brand-yellow-500' : 'text-brand-blue-500'
                )}
                aria-hidden="true"
              />
              <span className="font-sans text-xs">{feature}</span>
            </li>
          ))}
        </ul>

        {tier.note ? (
          <p
            className={cn(
              'rounded-lg border px-3 py-2 text-xs',
              dark
                ? 'border-white/15 bg-white/10 text-brand-blue-50'
                : 'border-brand-blue-100 bg-brand-blue-50 text-brand-blue-700'
            )}
          >
            {tier.note}
          </p>
        ) : null}

        <div className="mt-auto pt-2">
          <CTANestedPill
            href={ctaHref}
            variant={ctaVariant}
            size={isFeatured ? 'large' : 'default'}
            className="w-full"
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
          >
            {ctaLabel}
          </CTANestedPill>
        </div>
      </article>
    </li>
  );
}

interface PriceFactsProps {
  facts?: PricingFact[];
  tone: Tone;
}

function PriceFacts({ facts, tone }: PriceFactsProps) {
  if (!facts?.length) {
    return null;
  }

  const dark = tone === 'dark';

  return (
    <ul className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 lg:gap-6">
      {facts.map(({ icon, title, body }) => {
        const Icon = FACT_ICONS[icon] ?? ShieldCheck;

        return (
          <li key={title}>
            <div
              className={cn(
                'flex h-full items-start gap-4 rounded-2xl p-5 ring-1',
                dark
                  ? 'bg-white/10 text-brand-blue-50 ring-white/20 backdrop-blur-md'
                  : 'bg-brand-blue-50 text-brand-blue-900 ring-brand-blue-100'
              )}
            >
              <Icon
                className={cn(
                  'h-6 w-6 shrink-0',
                  dark ? 'text-brand-yellow-500' : 'text-brand-blue-500'
                )}
                aria-hidden="true"
              />
              <div className="flex flex-col gap-1">
                <p
                  className={cn(
                    'font-subheading text-base uppercase leading-tight tracking-wider',
                    dark ? 'text-white' : 'text-brand-blue-900'
                  )}
                >
                  {title}
                </p>
                <p className="font-sans text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

interface ExcedenteSectionProps {
  perKmCoefficient?: number;
  maxAutoKm?: number;
  consultThresholdKm?: number;
  excedenteTitle?: string;
  excedenteDescription?: string;
  excedenteExampleKm?: number;
  excedenteExamplePrice?: number;
  ctaHref?: string;
  ctaVariant: CTANestedPillVariant;
  tone: Tone;
}

function ExcedenteSection({
  perKmCoefficient,
  maxAutoKm,
  consultThresholdKm,
  excedenteTitle,
  excedenteDescription,
  excedenteExampleKm,
  excedenteExamplePrice,
  ctaHref,
  ctaVariant,
  tone,
}: ExcedenteSectionProps) {
  if (!perKmCoefficient || !maxAutoKm || !consultThresholdKm) {
    return null;
  }

  const dark = tone === 'dark';

  return (
    <div
      className={cn(
        'mt-12 flex flex-col items-stretch justify-between gap-8 rounded-2xl p-6 sm:p-8 lg:flex-row',
        dark
          ? 'bg-white/10 text-brand-blue-50 ring-1 ring-white/20 backdrop-blur-md'
          : 'bg-white text-brand-blue-900 shadow-sm ring-1 ring-brand-blue-100'
      )}
    >
      <div className="flex flex-1 items-start gap-5">
        <span
          className={cn(
            'flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ring-1',
            dark ? 'bg-white/10 ring-white/20' : 'bg-brand-blue-50 ring-brand-blue-100'
          )}
          aria-hidden="true"
        >
          <MapPin className={cn('h-7 w-7', dark ? 'text-brand-yellow-500' : 'text-brand-blue-500')} />
        </span>

        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className={cn(
                'font-subheading text-2xl uppercase leading-tight tracking-wider sm:text-3xl',
                dark ? 'text-white' : 'text-brand-blue-900'
              )}
            >
              {excedenteTitle ?? `Más de ${maxAutoKm} km`}
            </h3>
            <span
              className={cn(
                'rounded-md px-2.5 py-0.5 font-mono text-xs font-semibold uppercase',
                dark ? 'bg-white/15 text-white' : 'bg-brand-blue-50 text-brand-blue-700'
              )}
            >
              Excedente por km
            </span>
          </div>

          <p className="max-w-2xl font-sans text-base leading-relaxed">
            Pasados los {maxAutoKm} km, la tarifa sigue el coeficiente por kilómetro hasta los{' '}
            <strong className="font-mono tabular-nums">{consultThresholdKm} km</strong>
            {excedenteExampleKm && excedenteExamplePrice ? (
              <>
                . Ejemplo:{' '}
                <span className="underline decoration-brand-yellow-500 decoration-2 underline-offset-4">
                  {excedenteExampleKm} km = {formatArs(excedenteExamplePrice)}
                </span>
              </>
            ) : null}
            . Superando los {consultThresholdKm} km, cotizamos el viaje especial en el acto.
          </p>

          {excedenteDescription ? (
            <p
              className={cn(
                'font-sans text-sm leading-relaxed',
                dark ? 'text-brand-blue-100' : 'text-brand-blue-700'
              )}
            >
              {excedenteDescription}
            </p>
          ) : null}

          <p
            className={cn(
              'mt-1 inline-flex w-fit items-center gap-2 rounded-lg px-3.5 py-2 ring-1',
              dark ? 'bg-white/10 ring-white/20' : 'bg-brand-blue-50 ring-brand-blue-100'
            )}
          >
            <span className={cn('font-mono text-xs font-semibold', dark ? 'text-white' : 'text-brand-blue-900')}>
              Fórmula: {formatArs(perKmCoefficient)} × km total
            </span>
          </p>
        </div>
      </div>

      <div
        className={cn(
          'flex flex-col items-start justify-between gap-5 lg:items-end lg:border-l lg:pl-8',
          dark ? 'lg:border-white/20' : 'lg:border-brand-blue-100'
        )}
      >
        <div className="flex flex-col lg:items-end">
          <span
            className={cn(
              'font-mono text-2xs uppercase tracking-wider',
              dark ? 'text-brand-blue-100' : 'text-brand-blue-700'
            )}
          >
            Coeficiente kilométrico
          </span>
          <p className="flex items-baseline gap-1.5">
            <span
              className={cn(
                'font-mono text-[38px] font-bold leading-none tabular-nums',
                dark ? 'text-brand-yellow-500' : 'text-brand-blue-900'
              )}
            >
              {formatArs(perKmCoefficient)}
            </span>
            <span
              className={cn('font-mono text-xs', dark ? 'text-brand-blue-100' : 'text-brand-blue-700')}
            >
              ARS / km
            </span>
          </p>
          <span
            className={cn('mt-1 font-mono text-xs', dark ? 'text-brand-blue-100' : 'text-brand-blue-700')}
          >
            Cálculo automático hasta {consultThresholdKm} km
          </span>
        </div>

        <CTANestedPill
          href={ctaHref ?? '/cotizar'}
          variant={ctaVariant}
          className="w-full sm:w-auto"
          target={ctaHref?.startsWith('http') ? '_blank' : undefined}
          rel={ctaHref?.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          Cotizar trayecto extendido
        </CTANestedPill>
      </div>
    </div>
  );
}

/**
 * Componente único de tarifario por servicio. Los precios entran como datos
 * desde `pricing.ts` / `promises.ts`: acá no se calcula ni se decide ninguna
 * tarifa, sólo se maqueta.
 */
export default function ServicePricing({
  serviceType,
  title,
  subtitle,
  rangeLabel,
  unit,
  tiers,
  ctaLabel,
  ctaHref,
  ctaVariant,
  featuredIndex = 0,
  perKmCoefficient,
  maxAutoKm,
  consultThresholdKm,
  excedenteTitle,
  excedenteDescription,
  excedenteExampleKm,
  excedenteExamplePrice,
  showFacts = true,
  facts,
  tone = 'light',
  backgroundClassName,
  cardClassName,
  className,
}: ServicePricingProps) {
  const windowLabel = SERVICE_WINDOWS[serviceType];
  const dark = tone === 'dark';

  return (
    <section
      id={`${serviceType.toLowerCase()}-pricing`}
      className={cn('relative z-10 overflow-hidden py-20 lg:py-28', backgroundClassName, className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[24px_24px] opacity-[0.06]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl space-y-12 px-4 sm:px-6 lg:space-y-14 lg:px-8">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <div
            className={cn(
              'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5',
              dark ? 'border-white/20 bg-white/10' : 'border-brand-blue-100 bg-brand-blue-50'
            )}
          >
            <span
              className={cn(
                'h-2 w-2 rounded-full motion-safe:animate-pulse',
                dark ? 'bg-brand-yellow-500' : 'bg-brand-blue-500'
              )}
            />
            <span
              className={cn(
                'font-mono text-xs font-semibold uppercase tracking-wider',
                dark ? 'text-white' : 'text-brand-blue-700'
              )}
            >
              Tarifario 2026 · Mar del Plata
            </span>
          </div>

          <h2
            className={cn(
              'font-display text-4xl sm:text-5xl lg:text-6xl',
              dark ? 'text-white' : 'text-brand-blue-900'
            )}
          >
            {title}
          </h2>

          {subtitle ? (
            <p
              className={cn(
                'mx-auto max-w-xl font-sans text-pretty text-base leading-relaxed sm:text-lg',
                dark ? 'text-brand-blue-50' : 'text-brand-blue-900'
              )}
            >
              {subtitle}
            </p>
          ) : null}

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span
              className={cn(
                'font-mono text-xs font-semibold uppercase tracking-wider',
                dark ? 'text-white' : 'text-brand-blue-700'
              )}
            >
              {windowLabel}
            </span>
            {rangeLabel ? (
              <>
                <span
                  className={cn(
                    'h-1 w-1 rounded-full',
                    dark ? 'bg-brand-yellow-500' : 'bg-brand-blue-300'
                  )}
                  aria-hidden="true"
                />
                <span
                  className={cn(
                    'font-mono text-xs font-semibold uppercase tracking-wider',
                    dark ? 'text-white' : 'text-brand-blue-700'
                  )}
                >
                  {rangeLabel}
                </span>
              </>
            ) : null}
          </div>
        </header>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          {tiers.map((tier, index) => (
            <TierCard
              key={tier.range}
              tier={tier}
              isFeatured={index === featuredIndex}
              unit={unit}
              ctaLabel={ctaLabel(index)}
              ctaHref={ctaHref}
              ctaVariant={ctaVariant ?? (index === featuredIndex ? 'primary' : 'outline')}
              tone={tone}
              cardClassName={cardClassName}
            />
          ))}
        </ul>

        <ExcedenteSection
          perKmCoefficient={perKmCoefficient}
          maxAutoKm={maxAutoKm}
          consultThresholdKm={consultThresholdKm}
          excedenteTitle={excedenteTitle}
          excedenteDescription={excedenteDescription}
          excedenteExampleKm={excedenteExampleKm}
          excedenteExamplePrice={excedenteExamplePrice}
          ctaHref={ctaHref}
          ctaVariant={ctaVariant ?? 'primary'}
          tone={tone}
        />

        {showFacts ? <PriceFacts facts={facts} tone={tone} /> : null}
      </div>
    </section>
  );
}