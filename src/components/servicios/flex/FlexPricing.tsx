'use client';

import React, { useRef } from 'react';
import { Check, ArrowRight, MessageSquare, CloudRain } from 'lucide-react';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';
import CTANestedPill from '@/src/components/ui/CTANestedPill';
import { Sparkles } from '@/src/components/ui/sparkles';
import { TimelineContent } from '@/src/components/ui/timeline-animation';
import { VerticalCutReveal } from '@/src/components/ui/vertical-cut-reveal';
import { useReducedMotion } from 'motion/react';
import NumberFlow from '@number-flow/react';
import { LOW_COST_TIERS, LOW_COST_PRICE_PER_KM } from '@/src/lib/pricing';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

export default function FlexPricing() {
  const pricingRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Generate pricing bullets from actual pricing tiers
  const generatePricingBullets = () => {
    const bullets: string[] = [];
    LOW_COST_TIERS.forEach((tier) => {
      if (tier.minKm === 0) {
        bullets.push(`Z1 (0-${tier.maxKm}km) ${formatArs(tier.price)}`);
      } else {
        bullets.push(`Z${LOW_COST_TIERS.indexOf(tier) + 1} (${tier.minKm}-${tier.maxKm}km) ${formatArs(tier.price)}`);
      }
    });
    bullets.push(`Z5 (+10km) ${formatArs(LOW_COST_TIERS[LOW_COST_TIERS.length - 1].price)} + ${formatArs(LOW_COST_PRICE_PER_KM)} x km adicional`);
    return bullets;
  };

  const levels = [
    {
      name: 'Nivel 1 (Crecimiento)',
      volume: '1 a 4 envíos diarios',
      price: '$3.000',
      description: 'Tarifas estándar segmentadas por distancia en km.',
      bullets: generatePricingBullets(),
      highlight: false,
    },
    {
      name: 'Nivel 2 (Pro)',
      volume: '5 a 10 envíos diarios',
      price: '$3.000',
      description: 'Tarifas con tope fijo para envíos de mayor distancia.',
      bullets: [
        'Z1 (0-3km) $3.000 | Z2 (3-5km) $4.000',
        'Z3 (5-7km) $5.300 | Z4 y Z5 (Tope) $6.500',
        'Segunda visita Z1 gratis, otras al 50%',
        'Retiro bonificado sin cargo'
      ],
      highlight: true,
    },
    {
      name: 'Nivel 3 (Elite)',
      volume: '+10 envíos diarios',
      price: '$4.500',
      description: 'Tarifa plana unificada para toda la ciudad sin límites.',
      bullets: [
        'Tarifa plana de $4.500 a toda la ciudad',
        'Segunda visita sin cargo a toda la ciudad',
        'Soporte directo prioritario',
        'Retiro bonificado sin cargo'
      ],
      highlight: false,
    },
  ];

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: shouldReduceMotion ? 0 : i * 0.15,
        duration: shouldReduceMotion ? 0 : 0.5,
      },
    }),
    hidden: {
      filter: shouldReduceMotion ? 'none' : 'blur(10px)',
      y: shouldReduceMotion ? 0 : -20,
      opacity: shouldReduceMotion ? 1 : 0,
    },
  };

  return (
    <section
      id="flex-pricing"
      className="py-24 bg-brand-blue-700 relative overflow-hidden text-white border-t border-b border-white/10"
      ref={pricingRef}
    >
      {/* Background Sparkles overlay throttled for performance */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_85%)] opacity-30">
          <Sparkles
            density={350}
            direction="bottom"
            speed={0.8}
            color="#FFFFFF"
            className="absolute inset-0 h-full w-full"
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <TimelineContent
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            as="span"
            className="-rotate-1 px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-xs font-subheading uppercase tracking-widest inline-block font-bold shadow-glow-yellow"
          >
            NIVELES FLEX 2026
          </TimelineContent>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white flex justify-center leading-[0.98]">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.1}
              staggerFrom="first"
              containerClassName="justify-center"
            >
              NIVELES Y TARIFAS FLEX
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            as="p"
            className="text-brand-blue-100 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed"
          >
            Escalá tu negocio con MercadoLibre Flex. A mayor volumen diario de despachos, mejores beneficios y tarifas para tus envíos Same-Day.
          </TimelineContent>
          <div className="h-1.5 w-16 bg-brand-yellow-500 mx-auto rounded-full" />
        </div>

        {/* Pricing Cards Grid Bento layout with Double Bezel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {levels.map((level, idx) => {
            const isNumericPrice = level.price.startsWith('$');
            const numericValue = isNumericPrice ? parseInt(level.price.replace('$', '').replace('.', '')) : null;

            const spanClass = 'lg:col-span-4';

            return (
              <TimelineContent
                key={level.name}
                animationNum={2 + idx}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                as="div"
                className={`${spanClass}`}
              >
                <DoubleBezelCard variant="dark" className="h-full" outerClassName="shadow-float hover:shadow-antigravity-deep transition-all duration-300">
                  <div className="space-y-4 text-white flex flex-col justify-between h-full">
                    <div className="space-y-3">
                      {level.highlight && (
                        <span className="-rotate-1 absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-yellow-500 text-brand-blue-900 font-bold font-subheading text-xs tracking-wider px-4 py-1 rounded-full shadow-glow-yellow">
                          RECOMENDADO
                        </span>
                      )}

                      <div>
                        <span className="text-xs font-subheading tracking-wider uppercase text-brand-blue-300">
                          {level.volume}
                        </span>
                        <h3 className="text-2xl font-display uppercase tracking-wider mt-1 min-h-[56px] leading-tight text-white">
                          {level.name}
                        </h3>
                      </div>

                      <div className="py-2">
                        {isNumericPrice && numericValue ? (
                          <div className="flex items-baseline">
                            <span className="text-4xl sm:text-5xl font-mono tabular-nums uppercase font-bold tracking-tight text-white">
                              $
                              <NumberFlow
                                value={numericValue}
                                format={{ minimumFractionDigits: 0 }}
                                className="inline-block font-mono tabular-nums"
                              />
                            </span>
                          </div>
                        ) : (
                          <span className="text-3xl font-mono tabular-nums uppercase font-bold tracking-tight text-white">
                            {level.price}
                          </span>
                        )}
                        <span className="text-xs font-subheading tracking-wider uppercase block mt-1 text-brand-blue-300">/ liquidación quincenal</span>
                      </div>

                      <p className="text-sm opacity-90 leading-relaxed font-sans min-h-[48px] text-brand-blue-100">
                        {level.description}
                      </p>
                    </div>

                    <div className="pt-4">
                      <ul className="space-y-2.5 pt-4 border-t border-brand-blue-800 mb-6">
                        {level.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2 text-xs text-brand-blue-100">
                            <Check className="h-4 w-4 shrink-0 text-brand-yellow-500" />
                            <span className="font-sans text-xs">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <CTANestedPill
                        href="https://wa.me/542236602699"
                        variant="primary"
                        className="w-full justify-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Activar {level.name.split(' ')[0]}
                      </CTANestedPill>
                    </div>
                  </div>
                </DoubleBezelCard>
              </TimelineContent>
            );
          })}
        </div>

        {/* Special Benefit: Rain Weather (Full width callout) */}
        <TimelineContent
          animationNum={5}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          as="div"
          className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-2xl shadow-float"
        >
          <div className="bg-brand-blue-900 text-white rounded-xl p-8 relative overflow-hidden text-left border border-white/10 shadow-sm">
            {/* Background icon watermark */}
            <CloudRain className="absolute -bottom-8 -right-8 h-64 w-64 text-white/[0.04] pointer-events-none select-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

              <div className="lg:col-span-8 space-y-4 text-left">
                <span className="-rotate-1 inline-block px-4 py-1 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-xs font-subheading font-bold uppercase tracking-widest shadow-glow-yellow">
                  RECARGO POR LLUVIA
                </span>
                <h3 className="text-3xl font-display uppercase tracking-tight text-white">
                  <span className="font-mono tabular-nums">30%</span> adicional en caso de lluvia
                </h3>
                <p className="text-sm text-brand-blue-100 leading-relaxed font-sans max-w-2xl">
                  Para todos nuestros clientes asociados al canal Flex, el recargo por días de lluvia es de solo un <span className="font-mono tabular-nums">30%</span> adicional sobre el valor del envío. Cuidamos tu rentabilidad operativa para que sigas vendiendo con tranquilidad.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <CTANestedPill
                  href="https://wa.me/542236602699"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="flex-pricing-cta-whatsapp"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Más Información Flex
                </CTANestedPill>
              </div>

            </div>
          </div>
        </TimelineContent>

      </div>
    </section>
  );
}