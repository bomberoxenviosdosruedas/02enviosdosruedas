'use client';

import React from 'react';
import { Zap, CreditCard, ShieldCheck, HelpCircle } from 'lucide-react';
import ServicePricing, { type PricingFact, type PriceTier } from '@/components/ui/ServicePricing';
import { FLEX_NIVEL_2_PRICE, FLEX_NIVEL_3_PRICE } from '@/lib/promises';

const FLEX_LEVELS: PriceTier[] = [
  {
    range: 'Nivel 1 · Crecimiento',
    distance: '1 a 4 envíos/día',
    price: 'Z1 a Z5',
    features: [
      'Tarifas por zonas LowCost (Z1 a Z5)',
      'Segunda visita al 50% de la tarifa',
      'Tercera visita se abona como nuevo envío',
      'Recolección bonificada desde 1 paquete',
      'Soporte directo por WhatsApp',
    ],
    tag: 'Nivel 1',
    note: 'Tarifa base LowCost por zona. Ideal para comenzar a despachar en el día.',
  },
  {
    range: 'Nivel 2 · Pro',
    distance: '5 a 10 envíos/día',
    price: String(FLEX_NIVEL_2_PRICE),
    features: [
      'Mantiene topes fijos en zonas lejanas (Z4 y Z5)',
      'Segunda visita en Z1 sin cargo; Z2 a Z5 al 50%',
      'Tercera visita se abona como nuevo envío',
      'Recolección bonificada en tu local',
      'Atención prioritaria por WhatsApp',
    ],
    tag: 'Recomendado',
    note: 'Tope fijo en zonas lejanas y beneficios por volumen sostenido.',
    featured: true,
  },
  {
    range: 'Nivel 3 · Elite',
    distance: '+10 envíos/día mínimos',
    price: String(FLEX_NIVEL_3_PRICE),
    features: [
      'Envíos cercanos hasta 5 km: $3.000 a $4.000',
      'Tarifa plana al resto de la ciudad: $4.500',
      'Segunda visita 100% bonificada sin cargo',
      'Tercera visita se abona como nuevo envío',
      'Integración directa a nuestro sistema logístico',
    ],
    tag: 'Elite',
    note: 'Tarifa preferencial para cuentas de más de 10 envíos diarios mínimos.',
  },
];

const FLEX_FACTS: PricingFact[] = [
  {
    icon: 'ShoppingBag',
    title: 'Recolección bonificada',
    body: 'Retiramos en tu comercio sin costo extra desde 1 paquete diario. Múltiples pasadas para acelerar entregas.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Entregas 100% aseguradas',
    body: 'Comprobantes y métricas en plataforma propia para respaldar y cuidar tu reputación de MercadoLíder.',
  },
  {
    icon: 'Zap',
    title: 'Condiciones climáticas',
    body: 'Aplica durante lluvia o calzada mojada con viento/llovizna. Te comunicamos el costo exacto por WhatsApp.',
  },
];

export default function FlexPricing() {
  return (
    <div className="space-y-12">
      <ServicePricing
        serviceType="FLEX"
        title="Niveles y Tarifas Flex"
        subtitle="Escalá tus ventas con Mercado Envíos Flex. Cuanto mayor sea tu volumen diario de despachos, mejores beneficios y tarifas para tus entregas en el día."
        rangeLabel="Niveles según volumen"
        unit="/ envío"
        tone="dark"
        tiers={FLEX_LEVELS}
        ctaLabel={() => 'Solicitar cotización por WhatsApp'}
        featuredIndex={1}
        ctaHref="https://api.whatsapp.com/send/?phone=542236602699&text=Hola!%20Quiero%20consultar%20por%20las%20tarifas%20de%20Mercado%20Env%C3%ADos%20Flex"
        ctaVariant="primary"
        facts={FLEX_FACTS}
        backgroundClassName="bg-brand-blue-500 border-t border-b border-white/10 text-white"
      />

      {/* Bloque complementario: Condiciones de Clima y Facturación */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Card Clima adverso */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[28px] shadow-float">
            <div className="bg-brand-blue-500 text-white rounded-[20px] p-7 sm:p-8 h-full flex flex-col justify-between border border-white/10 shadow-sm relative overflow-hidden">
              <Zap className="absolute -bottom-6 -right-6 h-36 w-32 text-white/5 pointer-events-none select-none" />
              <div className="space-y-4 relative z-10">
                <span className="-rotate-1 inline-block px-3 py-1 bg-brand-yellow-500 text-brand-blue-500 rounded-full text-xs font-subheading uppercase tracking-widest shadow-glow-yellow">
                  CONDICIONES CLIMÁTICAS
                </span>
                <h3 className="text-2xl font-display uppercase tracking-tight text-white leading-tight">
                  Recargo por lluvia o calzada mojada
                </h3>
                <p className="text-sm text-brand-blue-50 leading-relaxed font-sans">
                  El recargo por clima adverso se activa durante la lluvia o mientras la calzada permanezca mojada con condiciones climáticas difíciles (llovizna o viento). Te comunicamos el costo exacto por WhatsApp al momento de solicitar el servicio para total transparencia operativa.
                </p>
              </div>

              <div className="pt-6 relative z-10">
                <a
                  href="https://api.whatsapp.com/send/?phone=542236602699&text=Hola!%20Quiero%20consultar%20el%20estado%20del%20servicio%20Flex%20por%20clima"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-subheading uppercase tracking-wider text-brand-yellow-500 hover:text-brand-yellow-400 font-bold transition-colors"
                >
                  <Zap className="h-4 w-4" />
                  <span>Consultar estado por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card Facturación y Pagos */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[28px] shadow-float">
            <div className="bg-brand-blue-500 text-white rounded-[20px] p-7 sm:p-8 h-full flex flex-col justify-between border border-white/10 shadow-sm relative overflow-hidden">
              <CreditCard className="absolute -bottom-6 -right-6 h-36 w-32 text-white/5 pointer-events-none select-none" />
              <div className="space-y-4 relative z-10">
                <span className="-rotate-1 inline-block px-3 py-1 bg-brand-yellow-500 text-brand-blue-500 rounded-full text-xs font-subheading uppercase tracking-widest shadow-glow-yellow">
                  FACTURACIÓN Y MEDIOS DE PAGO
                </span>
                <h3 className="text-2xl font-display uppercase tracking-tight text-white leading-tight">
                  Cobros simples y alta inmediata
                </h3>
                <ul className="text-sm text-brand-blue-50 space-y-2 font-sans">
                  <li>
                    <strong className="text-white">Ciclos de pago:</strong> Diario, quincenal o mensual según tu volumen y preferencia.
                  </li>
                  <li>
                    <strong className="text-white">Métodos aceptados:</strong> Efectivo o transferencia bancaria.
                  </li>
                  <li>
                    <strong className="text-white">Alta de cuenta express:</strong> Solo requerimos nombre de tu comercio, teléfono, dirección y CUIT (si requerís factura).
                  </li>
                </ul>
              </div>

              <div className="pt-6 relative z-10">
                <a
                  href="https://api.whatsapp.com/send/?phone=542236602699&text=Hola!%20Quiero%20dar%20de%20alta%20mi%20cuenta%20para%20Mercado%20Env%C3%ADos%20Flex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-subheading uppercase tracking-wider text-brand-yellow-500 hover:text-brand-yellow-400 font-bold transition-colors"
                >
                  <CreditCard className="h-4 w-4" />
                  <span>Dar de alta mi comercio ahora</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
