'use client';

import { Zap } from 'lucide-react';
import ServicePricing, { type PricingFact, type PriceTier } from '@/components/ui/ServicePricing';
import { LOW_COST_PRICE_PER_KM, LOW_COST_TIERS } from '@/lib/pricing';
import { FLEX_NIVEL_2_PRICE, FLEX_NIVEL_3_PRICE, RAIN_SURCHARGE_PERCENT, RETRY_RULES } from '@/lib/promises';

const Z5_TIER = LOW_COST_TIERS[LOW_COST_TIERS.length - 1];

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

/**
 * Nivel 1 no tiene tarifa propia: cobra la tabla LowCost de zona. Por eso su
 * "precio" es el de la última tranche publicada, y el excedente se explica con
 * el mismo coeficiente (`LOW_COST_PRICE_PER_KM`).
 */
const FLEX_LEVELS: PriceTier[] = [
  {
    range: 'Nivel 1 · Crecimiento',
    distance: '1 a 4 envíos/día',
    price: String(Z5_TIER.price),
    features: [
      'Tarifa estándar por zona (Z1-Z5)',
      `Z5 (+${Z5_TIER.maxKm} km): ${formatArs(Z5_TIER.price)} + ${formatArs(LOW_COST_PRICE_PER_KM)} × km`,
      `Segunda visita ${RETRY_RULES.FLEX_NIVEL_1.description}`,
      'Retiro sin cargo en todo MDQ',
    ],
    tag: 'Nivel 1',
    note: 'Tarifa base LowCost por zona. Ideal para empezar.',
  },
  {
    range: 'Nivel 2 · Pro',
    distance: '5 a 10 envíos/día',
    price: String(FLEX_NIVEL_2_PRICE),
    features: [
      'Tope fijo en Z4 y Z5',
      `Segunda visita: ${RETRY_RULES.FLEX_NIVEL_2.description}`,
      'Retiro bonificado sin cargo',
      'Soporte prioritario por WhatsApp',
    ],
    tag: 'Recomendado',
    note: 'Tope fijo en Z4/Z5 + beneficios por volumen.',
    featured: true,
  },
  {
    range: 'Nivel 3 · Elite',
    distance: '+10 envíos/día',
    price: String(FLEX_NIVEL_3_PRICE),
    features: [
      'Tarifa plana unificada a todo MDQ',
      `Segunda visita: ${RETRY_RULES.FLEX_NIVEL_3.description}`,
      'Retiro bonificado sin cargo',
      'Soporte directo prioritario',
      'Liquidación quincenal automática',
    ],
    tag: 'Elite',
    note: 'Tarifa plana unificada a toda la ciudad.',
  },
];

const FLEX_FACTS: PricingFact[] = [
  {
    icon: 'ShoppingBag',
    title: 'Recolección gratis',
    body: 'Retiramos tus paquetes sin costo en todo Mar del Plata, varias veces al día si es necesario.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Reputación intacta',
    body: 'Cumplimos los SLAs de MercadoLibre para que mantengas tu estatus de MercadoLíder.',
  },
  {
    icon: 'Zap',
    title: `Lluvia solo ${RAIN_SURCHARGE_PERCENT}%`,
    body: `Recargo por clima reducido al ${RAIN_SURCHARGE_PERCENT}% para cuidar tu rentabilidad.`,
  },
];

export default function FlexPricing() {
  return (
    <div className="space-y-16">
      <ServicePricing
        serviceType="FLEX"
        title="Niveles y Tarifas Flex"
        subtitle="Escalá tu negocio con MercadoLibre Flex. A mayor volumen diario de despachos, mejores beneficios y tarifas para tus envíos Same-Day."
        rangeLabel="Por liquidación quincenal"
        unit="/ liq. quincenal"
        tone="dark"
        tiers={FLEX_LEVELS}
        ctaLabel={() => 'Solicitar cotización por WhatsApp'}
        featuredIndex={1}
        ctaHref="https://wa.me/542236602699"
        ctaVariant="primary"
        facts={FLEX_FACTS}
        backgroundClassName="bg-brand-blue-700 border-t border-b border-white/10 text-white"
      />

      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-2xl shadow-float">
        <div className="bg-brand-blue-900 text-white rounded-xl p-8 relative overflow-hidden text-left border border-white/10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="-rotate-1 inline-block px-4 py-1 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-xs font-subheading uppercase tracking-widest shadow-glow-yellow">
                Recargo por lluvia
              </span>
              <h3 className="text-3xl font-display uppercase tracking-tight text-white">
                <span className="font-mono tabular-nums">{RAIN_SURCHARGE_PERCENT}%</span> adicional en caso de
                lluvia
              </h3>
              <p className="text-sm text-brand-blue-50 leading-relaxed font-sans max-w-2xl">
                Para todos nuestros clientes asociados al canal Flex, el recargo por días de lluvia es de solo un{' '}
                <span className="font-mono tabular-nums">{RAIN_SURCHARGE_PERCENT}%</span> adicional sobre el valor
                del envío. Cuidamos tu rentabilidad operativa para que sigas vendiendo con tranquilidad.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="flex-pricing-cta-whatsapp"
                className="group inline-flex items-center justify-between gap-3 bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 font-subheading uppercase tracking-wider px-6 py-3 rounded-full text-sm min-h-12 shadow-glow-yellow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 w-full sm:w-auto"
              >
                <span>Más Información Flex</span>
                <span className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                  <Zap className="h-4 w-4 shrink-0 text-brand-blue-900" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}