'use client';

import React, { useRef } from 'react';
import { Check, ArrowRight, MessageSquare, CloudRain } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/src/components/ui/card';
import { Sparkles } from '@/src/components/ui/sparkles';
import { TimelineContent } from '@/src/components/ui/timeline-animation';
import { VerticalCutReveal } from '@/src/components/ui/vertical-cut-reveal';
import NumberFlow from '@number-flow/react';

export default function FlexPricing() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const levels = [
    {
      name: 'Nivel 1 (Crecimiento)',
      volume: '1 a 4 envíos diarios',
      price: '$3.000',
      description: 'Tarifas estándar segmentadas por distancia en km.',
      bullets: [
        'Z1 (0-3km) $3.000 | Z2 (3-5km) $4.000',
        'Z3 (5-7km) $5.300 | Z4 (7-10km) $7.000',
        'Z5 (+10km) $7.000 + $700 x km adicional',
        'Segunda visita bonificada al 50%'
      ],
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
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <section
      id="flex-pricing"
      className="py-24 bg-brand-blue-700 relative overflow-hidden text-white border-t-4 border-b-4 border-brand-yellow-500"
      ref={pricingRef}
    >
      {/* Background Sparkles overlay */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_85%)] opacity-30">
        <Sparkles
          density={1200}
          direction="bottom"
          speed={0.8}
          color="#FFFFFF"
          className="absolute inset-0 h-full w-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <TimelineContent
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            as="span"
            className="px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-blue-700 shadow-[2px_2px_0px_rgba(255,204,0,0.3)] font-bold"
          >
            Niveles Flex
          </TimelineContent>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-brand-white-50 flex justify-center">
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
          <div className="h-2 w-16 bg-brand-yellow-500 mx-auto rounded-full" />
        </div>

        {/* Pricing Cards Grid Bento layout with Double Bezel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {levels.map((level, idx) => {
            const isNumericPrice = level.price.startsWith('$');
            const numericValue = isNumericPrice ? parseInt(level.price.replace('$', '').replace('.', '')) : null;

            // Asymmetric layout
            let spanClass = 'lg:col-span-4';
            if (levels.length === 3) {
              spanClass = 'lg:col-span-4';
            }

            return (
              <TimelineContent
                key={level.name}
                animationNum={2 + idx}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                as="div"
                className={`${spanClass} double-bezel-outer flex flex-col`}
              >
                <Card
                  className={`double-bezel-inner border-0 bg-brand-white-50 text-brand-blue-700 flex flex-col justify-between h-full transition-all duration-300 group text-left shadow-none ${
                    level.highlight ? 'lg:scale-[1.03] relative z-20 shadow-xl' : ''
                  }`}
                >
                  <CardHeader className="p-8 pb-2 text-left relative">
                    {level.highlight && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-yellow-500 text-brand-blue-900 border-2 border-brand-blue-700 font-bold font-subheading text-xs tracking-wider px-4 py-1 rounded-full shadow-md">
                        RECOMENDADO
                      </span>
                    )}

                    <div>
                      <span className="text-xs font-subheading tracking-wider uppercase text-brand-blue-700 font-bold">
                        {level.volume}
                      </span>
                      <h3 className="text-2xl font-display uppercase tracking-wider mt-1 min-h-[56px] leading-tight text-brand-blue-700 font-bold">
                        {level.name}
                      </h3>
                    </div>

                    <div className="py-2">
                      {isNumericPrice && numericValue ? (
                        <div className="flex items-baseline">
                          <span className="text-5xl font-display uppercase font-bold tracking-tight text-brand-blue-700">
                            $
                            <NumberFlow
                              value={numericValue}
                              format={{ minimumFractionDigits: 0 }}
                              className="inline-block"
                            />
                          </span>
                        </div>
                      ) : (
                        <span className="text-3xl font-display uppercase font-bold tracking-tight text-brand-blue-700">
                          {level.price}
                        </span>
                      )}
                      <span className="text-xs font-subheading tracking-wider uppercase block mt-1 text-brand-blue-400">/ liquidación quincenal</span>
                    </div>

                    <p className="text-sm opacity-90 leading-relaxed font-sans min-h-[48px] text-brand-blue-500">
                      {level.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-8 pt-0 flex flex-col justify-between flex-grow">
                    {/* Bullets */}
                    <ul className="space-y-2.5 pt-4 border-t-2 border-brand-blue-100 mb-6">
                      {level.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-xs text-brand-blue-600">
                          <Check className="h-4.5 w-4.5 shrink-0 text-brand-blue-700" />
                          <span className="font-sans text-sm opacity-90">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <a
                        href="https://wa.me/542236602699"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full cta-nested-pill bg-brand-yellow-500 text-brand-blue-900 hover:bg-brand-yellow-400"
                      >
                        <span>Activar {level.name.split(' ')[0]}</span>
                        <span className="cta-nested-icon bg-brand-blue-100">
                          <ArrowRight className="h-4 w-4 animate-pulse shrink-0" />
                        </span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
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
          className="double-bezel-outer p-2 relative overflow-hidden"
        >
          <div className="double-bezel-inner bg-brand-white-50 text-brand-blue-700 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-y-6 translate-x-6 text-brand-blue-100/50 pointer-events-none -z-10">
            <CloudRain className="h-64 w-64 text-brand-blue-100" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="px-4 py-1 bg-brand-blue-100 text-brand-blue-700 rounded-full text-xs font-subheading uppercase tracking-widest inline-block border border-brand-blue-200">
                RECARGO POR LLUVIA
              </span>
              <h3 className="text-3xl font-display uppercase tracking-tight text-brand-blue-700">
                30% adicional en caso de lluvia
              </h3>
              <p className="text-sm text-brand-blue-500 leading-relaxed font-sans max-w-2xl">
                Para todos nuestros clientes asociados al canal Flex, el recargo por días de lluvia es de solo un 30% adicional sobre el valor del envío. Cuidamos tu rentabilidad operativa para que sigas vendiendo con tranquilidad.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="flex-pricing-cta-whatsapp"
                className="cta-nested-pill bg-brand-yellow-500 text-brand-blue-900 hover:bg-brand-yellow-400 w-full sm:w-auto"
              >
                <span>Más Información Flex</span>
                <span className="cta-nested-icon bg-brand-blue-100">
                  <MessageSquare className="h-5 w-5 fill-current" />
                </span>
              </a>
            </div>

          </div>
          </div>
        </TimelineContent>

      </div>
    </section>
  );
}