'use client';

import React from 'react';
import { Check, ArrowRight, Star, Zap, TrendingDown, ShoppingBag, Building2, Package, Store, ShieldCheck, MapPin, Clock, Shield, Route } from 'lucide-react';
import NumberFlow from '@number-flow/react';
import DoubleBezelCard from './DoubleBezelCard';
import CTANestedPill from './CTANestedPill';
import Badge from './Badge';
import { cn } from '@/lib/utils';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

export interface PriceTier {
  range: string;
  distance: string;
  price: string;
  features: string[];
  tag?: string;
  note?: string;
  featured?: boolean;
}

export interface ServicePricingProps {
  serviceType: 'EXPRESS' | 'LOW_COST' | 'FLEX' | 'DEPOSITO' | 'ECOMMERCE_24HS' | 'ECOMMERCE_SAME_DAY' | 'CUENTA_CORRIENTE' | 'CONTRAREEMBOLSO';
  title: string;
  subtitle?: string;
  rangeLabel: string;
  unit: string;
  tiers: PriceTier[];
  ctaLabel: (tierIndex: number) => React.ReactNode;
  onCta?: (tierIndex: number) => void;
  featuredIndex?: number;
  className?: string;
  showFacts?: boolean;
  facts?: Array<{
    icon: string;
    title: string;
    body: string;
  }>;
  perKmCoefficient?: number;
  maxAutoKm?: number;
  consultThresholdKm?: number;
  excedenteTitle?: string;
  excedenteDescription?: string;
  excedenteExampleKm?: number;
  ctaHref?: string;
  ctaVariant?: 'primary' | 'outline' | 'secondary' | 'ghost';
  backgroundClassName?: string;
  headerClassName?: string;
  cardClassName?: string;
}

const SERVICE_CONFIG = {
  EXPRESS: {
    headerBg: 'bg-white',
    windowShort: 'Franja de 3 hs',
  },
  LOW_COST: {
    headerBg: 'bg-brand-blue-500',
    windowShort: 'Sin franja · < 19:00 hs',
  },
  FLEX: {
    headerBg: 'bg-brand-blue-700',
    windowShort: 'Corte 15:00 · < 20:00 hs',
  },
  DEPOSITO: {
    headerBg: 'bg-brand-blue-700',
    windowShort: 'Same Day · 9-20 hs',
  },
  ECOMMERCE_24HS: {
    headerBg: 'bg-brand-blue-500',
    windowShort: 'Next Day · 9-20 hs',
  },
  ECOMMERCE_SAME_DAY: {
    headerBg: 'bg-brand-blue-700',
    windowShort: 'Same Day · 9-20 hs',
  },
  CUENTA_CORRIENTE: {
    headerBg: 'bg-brand-blue-700',
    windowShort: 'LowCost + Express',
  },
  CONTRAREEMBOLSO: {
    headerBg: 'bg-brand-blue-500',
    windowShort: '$0 comisión',
  },
};

function PriceTierCard({
  tier,
  index,
  isFeatured,
  unit,
  ctaLabel,
  onCta,
  ctaHref,
  ctaVariant,
}: {
  tier: PriceTier;
  index: number;
  isFeatured: boolean;
  unit: string;
  ctaLabel: React.ReactNode;
  onCta?: (tierIndex: number) => void;
  ctaHref?: string;
  ctaVariant?: 'primary' | 'outline' | 'secondary' | 'ghost';
}) {
  // Render badge as a separate variable to avoid JSX parsing issues
  const badgeElement = isFeatured && tier.tag ? (
    <Badge
      variant="accent"
      size="sm"
      className="absolute -top-3 left-1/2 -translate-x-1/2 shadow-md whitespace-nowrap"
      icon={<Star className="h-3 w-3 fill-current" aria-hidden="true" />}
    >
      {tier.tag}
    </Badge>
  ) : null;

  return (
    <li key={tier.range} className="h-full">
      <article
        className={cn(
          'relative flex h-full flex-col justify-between gap-5 rounded-2xl p-5 sm:p-6',
          'transition-[box-shadow,transform,background-color] duration-200',
          isFeatured
            ? 'bg-brand-blue-50 shadow-lg ring-1 ring-brand-blue-200'
            : 'bg-white ring-1 ring-brand-blue-100 hover:shadow-lg hover:ring-brand-blue-300 motion-safe:hover:-translate-y-0.5',
          isFeatured ? 'shadow-lg ring-1 ring-brand-blue-200' : 'shadow-sm hover:shadow-lg hover:ring-brand-blue-300 motion-safe:hover:-translate-y-0.5'
        )}
      >
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex items-start justify-between gap-2 pt-1">
            <h3 className="font-subheading text-sm sm:text-base uppercase tracking-[0.08em] text-brand-blue-900 leading-tight">
              {tier.range}
            </h3>
            <span className="shrink-0 rounded-md bg-brand-blue-50 px-2 py-0.5 font-mono text-xs font-medium text-brand-blue-900 tabular-nums">
              {tier.distance}
            </span>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-brand-blue-700">
              Tarifa fija
            </p>
            <p className="mt-1 flex items-baseline gap-1.5">
              <span className="font-mono text-[40px] sm:text-[44px] font-bold leading-none tracking-tight text-brand-blue-900 tabular-nums">
                {tier.price}
              </span>
              <span className="font-mono text-xs text-brand-blue-700">{unit}</span>
            </p>

          <ul className="space-y-2 pt-2 border-t border-brand-blue-100">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-xs text-brand-blue-900">
                <Check className="h-4 w-4 shrink-0 text-brand-blue-500" />
                <span className="font-sans text-xs">{feature}</span>
              </li>
            ))}
          </ul>

          {tier.note && (
            <p className="text-xs text-brand-blue-700 bg-brand-blue-50 px-3 py-2 rounded-lg border border-brand-blue-100">
              {tier.note}
            </p>
          )}

          <CTANestedPill
            href={ctaHref}
            onClick={onCta ? () => onCta?.(0) : undefined}
            variant={ctaVariant || (isFeatured ? 'primary' : 'outline')}
            size={isFeatured ? 'large' : 'default'}
            className="w-full"
            icon={isFeatured ? <Zap className="h-4 w-4" aria-hidden="true" /> : undefined}
            target={ctaHref?.startsWith('http') ? '_blank' : undefined}
            rel={ctaHref?.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {ctaLabel}
          </CTANestedPill>

          {isFeatured && tier.tag ? (
            <Badge
              variant="accent"
              size="sm"
              className="absolute -top-3 left-1/2 -translate-x-1/2 shadow-md whitespace-nowrap"
              icon={<Star className="h-3 w-3 fill-current" aria-hidden="true" />}
            >
              {tier.tag}
            </Badge>
          ) : null}
        </div>
      </article>
    </li>
  );
}

function PriceFactsSection({ facts }: { facts: ServicePricingProps['facts'] }) {
  if (!facts || facts.length === 0) return null;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-12">
      {facts.map(({ icon, title, body }) => (
        <li key={title}>
          <div className="flex h-full items-start gap-4 rounded-2xl bg-brand-blue-50 p-5 ring-1 ring-brand-blue-100">
            <Shield className="h-6 w-6 shrink-0 text-brand-blue-500" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <p className="font-subheading text-base uppercase tracking-[0.05em] text-brand-blue-900 leading-tight">
                {title}
              </p>
              <p className="text-sm font-sans leading-relaxed text-brand-blue-900">{body}</p>
            </div>
          </div>
        </li>
      )}
    </ul>
  );
}

function ExcedenteSection({
  perKmCoefficient,
  maxAutoKm,
  consultThresholdKm,
  excedenteTitle,
  excedenteDescription,
  excedenteExampleKm,
  ctaLabel,
  ctaHref,
  ctaVariant,
}: {
  perKmCoefficient?: number;
  maxAutoKm?: number;
  consultThresholdKm?: number;
  excedenteTitle?: string;
  excedenteDescription?: string;
  excedenteExampleKm?: number;
  ctaLabel?: string;
  ctaHref?: string;
  ctaVariant?: 'primary' | 'outline' | 'secondary' | 'ghost';
}) {
  if (!perKmCoefficient || !maxAutoKm || !consultThresholdKm) return null;

  const exampleKm = excedenteExampleKm ?? maxAutoKm + 2;
  const examplePrice = perKmCoefficient * exampleKm;

  const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

  return (
    <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-brand-blue-100 flex flex-col lg:flex-row items-stretch justify-between gap-8 mt-12">
      <div className="flex items-start gap-5 flex-1">
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50 ring-1 ring-brand-blue-100"
          aria-hidden="true"
        >
          <MapPin className="h-7 w-7 text-brand-blue-500" />
        </span>

        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-subheading text-2xl sm:text-3xl uppercase tracking-[0.05em] text-brand-blue-900 leading-tight">
              {excedenteTitle ?? `Más de ${maxAutoKm} km dentro de la ciudad`}
            </h3>
            <span className="rounded-md bg-brand-blue-50 px-2.5 py-0.5 font-mono text-xs font-semibold uppercase text-brand-blue-700">
              Excedente por km
            </span>
          </div>

          <p className="text-base font-sans leading-relaxed text-brand-blue-900 max-w-2xl">
            Pasados los {maxAutoKm} km, la tarifa sigue la fórmula por kilómetro hasta
            los <strong className="font-mono tabular-nums">{consultThresholdKm} km</strong>.
            Ejemplo: <span className="underline decoration-brand-yellow-500 decoration-2 underline-offset-4">
              {excedenteExampleKm} km = {formatArs(perKmCoefficient * excedenteExampleKm)}
            </span>
            . Superando los {consultThresholdKm} km, cotizamos el viaje especial en el acto.
          </p>

          <p className="mt-1 inline-flex w-fit items-center gap-2 rounded-lg bg-brand-blue-50 px-3.5 py-2 ring-1 ring-brand-blue-100">
            <span className="font-mono text-xs font-semibold text-brand-blue-900">
              Fórmula: ${formatArs(perKmCoefficient)} × km total, redondeado hacia arriba
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between items-start lg:items-end gap-5 lg:pl-8 lg:border-l lg:border-brand-blue-100">
        <div className="flex flex-col lg:items-end">
          <span className="font-mono text-[11px] uppercase tracking-wider text-brand-blue-700">
            Coeficiente kilométrico
          </span>
          <p className="flex items-baseline gap-1.5">
            <span className="font-mono text-[38px] font-bold leading-none text-brand-blue-900 tabular-nums">
              {formatArs(perKmCoefficient ?? 0)}
            </span>
            <span className="font-mono text-xs text-brand-blue-700">ARS / km</span>
          </p>
          <span className="mt-1 font-mono text-xs text-brand-blue-700">
            Cálculo automático hasta {consultThresholdKm} km
          </span>
        </div>

        <CTANestedPill
          href={ctaHref ?? '/cotizar'}
          variant={ctaVariant ?? 'primary'}
          className="w-full sm:w-auto"
        >
          {ctaLabel ?? 'Cotizar trayecto extendido'}
        </CTANestedPill>
      </div>
    </div>
  );
}

function PriceFactsSection({ facts }: { facts: ServicePricingProps['facts'] }) {
  if (!facts || facts.length === 0) return null;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-12">
      {facts.map(({ icon, title, body }) => (
        <li key={title}>
          <div className="flex h-full items-start gap-4 rounded-2xl bg-brand-blue-50 p-5 ring-1 ring-brand-blue-100">
            <Shield className="h-6 w-6 shrink-0 text-brand-blue-500" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <p className="font-subheading text-base uppercase tracking-[0.05em] text-brand-blue-900 leading-tight">
                {title}
              </p>
              <p className="text-sm font-sans leading-relaxed text-brand-blue-900">{body}</p>
            </div>
          </div>
        </li>
      )}
    </ul>
  );
}

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

export interface PriceTier {
  range: string;
  distance: string;
  price: string;
  features: string[];
  tag?: string;
  note?: string;
  featured?: boolean;
}

export interface ServicePricingProps {
  serviceType: 'EXPRESS' | 'LOW_COST' | 'FLEX' | 'DEPOSITO' | 'ECOMMERCE_24HS' | 'ECOMMERCE_SAME_DAY' | 'CUENTA_CORRIENTE' | 'CONTRAREEMBOLSO';
  title: string;
  subtitle?: string;
  rangeLabel: string;
  unit: string;
  tiers: PriceTier[];
  ctaLabel: (tierIndex: number) => React.ReactNode;
  onCta?: (tierIndex: number) => void;
  featuredIndex?: number;
  className?: string;
  showFacts?: boolean;
  facts?: Array<{
    icon: string;
    title: string;
    body: string;
  }>;
  perKmCoefficient?: number;
  maxAutoKm?: number;
  consultThresholdKm?: number;
  excedenteTitle?: string;
  excedenteDescription?: string;
  excedenteExampleKm?: number;
  ctaHref?: string;
  ctaVariant?: 'primary' | 'outline' | 'secondary' | 'ghost';
  backgroundClassName?: string;
  headerClassName?: string;
  cardClassName?: string;
}

const SERVICE_CONFIG = {
  EXPRESS: {
    headerBg: 'bg-white',
    windowShort: 'Franja de 3 hs',
  },
  LOW_COST: {
    headerBg: 'bg-brand-blue-500',
    windowShort: 'Sin franja · < 19:00 hs',
  },
  FLEX: {
    headerBg: 'bg-brand-blue-700',
    windowShort: 'Corte 15:00 · < 20:00 hs',
  },
  DEPOSITO: {
    headerBg: 'bg-brand-blue-700',
    windowShort: 'Same Day · 9-20 hs',
  },
  ECOMMERCE_24HS: {
    headerBg: 'bg-brand-blue-500',
    windowShort: 'Next Day · 9-20 hs',
  },
  ECOMMERCE_SAME_DAY: {
    headerBg: 'bg-brand-blue-700',
    windowShort: 'Same Day · 9-20 hs',
  },
  CUENTA_CORRIENTE: {
    headerBg: 'bg-brand-blue-700',
    windowShort: 'LowCost + Express',
  },
  CONTRAREEMBOLSO: {
    headerBg: 'bg-brand-blue-500',
    windowShort: '$0 comisión',
  },
};

export default function ServicePricing({
  serviceType,
  title,
  subtitle,
  rangeLabel,
  unit,
  tiers,
  ctaLabel,
  onCta,
  featuredIndex = 1,
  className,
  showFacts = false,
  facts,
  perKmCoefficient,
  maxAutoKm,
  consultThresholdKm,
  excedenteTitle,
  excedenteDescription,
  excedenteExampleKm,
  ctaHref,
  ctaVariant,
  backgroundClassName,
  headerClassName,
  cardClassName,
}: ServicePricingProps) {
  const serviceConfig = SERVICE_CONFIG[serviceType];
  const { headerBg, windowShort } = serviceConfig;

  return (
    <section
      id={`${serviceType.toLowerCase()}-pricing`}
      className={cn(
        'py-20 lg:py-28 relative z-10 overflow-hidden',
        backgroundClassName || 'bg-white',
        className
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(var(--color-brand-blue-700)_1px,transparent_1px)] bg-size-[24px_24px] opacity-[0.03] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-12 lg:space-y-14">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-blue-50 border border-brand-blue-100 rounded-full">
            <span className="w-2 h-2 rounded-full bg-brand-blue-500 motion-safe:animate-pulse" />
            <span className="font-mono text-xs font-semibold text-brand-blue-700 uppercase tracking-wider">
              Tarifario transparente 2026 · Mar del Plata
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-blue-900">
            {title}
          </h2>

          {subtitle && (
            <p className="text-brand-blue-900 font-sans text-base sm:text-lg max-w-xl mx-auto leading-relaxed text-pretty">
              {subtitle}
            </p>
          )}

          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-brand-blue-700 uppercase tracking-wider">
              {windowShort}
            </span>
            {rangeLabel && (
              <>
                <span className="w-1 h-1 rounded-full bg-brand-blue-300" aria-hidden="true" />
                <span className="font-mono text-xs font-semibold text-brand-blue-700 uppercase tracking-wider">
                  {rangeLabel}
                </span>
              </>
            )}
          </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {tiers.map((tier, idx) => {
            const isFeatured = idx === featuredIndex && Boolean(tier.tag);

            return (
              <li key={tier.range} className="h-full">
                <article
                  className={cn(
                    'relative flex h-full flex-col justify-between gap-5 rounded-2xl p-5 sm:p-6',
                    'transition-[box-shadow,transform,background-color] duration-200',
                    idx === featuredIndex
                      ? 'bg-brand-blue-50 shadow-lg ring-1 ring-brand-blue-200'
                      : 'bg-white ring-1 ring-brand-blue-100 hover:shadow-lg hover:ring-brand-blue-300 motion-safe:hover:-translate-y-0.5',
                    idx === featuredIndex ? 'shadow-lg ring-1 ring-brand-blue-200' : 'shadow-sm hover:shadow-lg hover:ring-brand-blue-300 motion-safe:hover:-translate-y-0.5'
                  )}
                >
                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex items-start justify-between gap-2 pt-1">
                      <h3 className="font-subheading text-sm sm:text-base uppercase tracking-[0.08em] text-brand-blue-900 leading-tight">
                        {tier.range}
                      </h3>
                      <span className="shrink-0 rounded-md bg-brand-blue-50 px-2 py-0.5 font-mono text-xs font-medium text-brand-blue-900 tabular-nums">
                        {tier.distance}
                      </span>
                    </div>

                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-brand-blue-700">
                        Tarifa fija
                      </p>
                      <p className="mt-1 flex items-baseline gap-1.5">
                        <span className="font-mono text-[40px] sm:text-[44px] font-bold leading-none tracking-tight text-brand-blue-900 tabular-nums">
                          {tier.price}
                        </span>
                        <span className="font-mono text-xs text-brand-blue-700">{unit}</span>
                      </p>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-brand-blue-100">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-brand-blue-900">
                          <Check className="h-4 w-4 shrink-0 text-brand-blue-500" />
                          <span className="font-sans text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {tier.note && (
                      <p className="text-xs text-brand-blue-700 bg-brand-blue-50 px-3 py-2 rounded-lg border border-brand-blue-100">
                        {tier.note}
                      </p>
                    )}

                  <CTANestedPill
                    href={ctaHref}
                    onClick={onCta ? () => onCta?.(0) : undefined}
                    variant={ctaVariant || (idx === featuredIndex ? 'primary' : 'outline')}
                    size={idx === featuredIndex ? 'large' : 'default'}
                    className="w-full"
                    icon={idx === featuredIndex ? <Zap className="h-4 w-4" aria-hidden="true" /> : undefined}
                    target={ctaHref?.startsWith('http') ? '_blank' : undefined}
                    rel={ctaHref?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {ctaLabel(idx)}
                  </CTANestedPill>

                  {isFeatured && tier.tag ? (
                    <Badge
                      variant="accent"
                      size="sm"
                      className="absolute -top-3 left-1/2 -translate-x-1/2 shadow-md whitespace-nowrap"
                      icon={<Star className="h-3 w-3 fill-current" aria-hidden="true" />}
                    >
                      {tier.tag}
                    </Badge>
                  ) : null}
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      <ExcedenteSection
        perKmCoefficient={perKmCoefficient}
        maxAutoKm={maxAutoKm}
        consultThresholdKm={consultThresholdKm}
        excedenteTitle={excedenteTitle}
        excedenteDescription={excedenteDescription}
        excedenteExampleKm={excedenteExampleKm}
        ctaLabel={ctaLabel ? (idx: number) => ctaLabel(idx) : undefined}
        ctaHref={ctaHref}
        ctaVariant={ctaVariant}
      />

      <PriceFactsSection facts={facts} />
    </div>
  </section>
  );
}