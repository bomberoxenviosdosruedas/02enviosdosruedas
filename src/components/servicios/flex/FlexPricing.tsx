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
      className="py-24 bg-[#0950F6] relative overflow-hidden text-white border-t border-b border-white/10"
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
            className="-rotate-1 px-4 py-1.5 bg-[#FFF12E] text-[#052C87] rounded-full text-xs font-subheading uppercase tracking-widest inline-block font-bold shadow-glow-yellow"
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
            className="text-blue-100 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed"
          >
            Escalá tu negocio con MercadoLibre Flex. A mayor volumen diario de despachos, mejores beneficios y tarifas para tus envíos Same-Day.
          </TimelineContent>
          <div className="h-1.5 w-16 bg-[#FFF12E] mx-auto rounded-full" />
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
                className={`${spanClass} bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[28px] shadow-float hover:shadow-antigravity-deep transition-all duration-300 flex flex-col`}
              >
                <Card
                  className={`border-0 bg-white text-[#052C87] rounded-[20px] flex flex-col justify-between h-full transition-all duration-300 group text-left shadow-none relative overflow-hidden ${
                    level.highlight ? 'ring-2 ring-[#FFF12E]' : ''
                  }`}
                >
                  <CardHeader className="p-8 pb-2 text-left relative z-10">
                    {level.highlight && (
                      <span className="-rotate-1 absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFF12E] text-[#052C87] font-bold font-subheading text-xs tracking-wider px-4 py-1 rounded-full shadow-glow-yellow">
                        RECOMENDADO
                      </span>
                    )}

                    <div>
                      <span className="text-xs font-subheading tracking-wider uppercase text-[#0950F6] font-bold">
                        {level.volume}
                      </span>
                      <h3 className="text-2xl font-display uppercase tracking-wider mt-1 min-h-[56px] leading-tight text-[#052C87] font-bold">
                        {level.name}
                      </h3>
                    </div>

                    <div className="py-2">
                      {isNumericPrice && numericValue ? (
                        <div className="flex items-baseline">
                          <span className="text-4xl sm:text-5xl font-mono tabular-nums uppercase font-bold tracking-tight text-[#052C87]">
                            $
                            <NumberFlow
                              value={numericValue}
                              format={{ minimumFractionDigits: 0 }}
                              className="inline-block font-mono tabular-nums"
                            />
                          </span>
                        </div>
                      ) : (
                        <span className="text-3xl font-mono tabular-nums uppercase font-bold tracking-tight text-[#052C87]">
                          {level.price}
                        </span>
                      )}
                      <span className="text-xs font-subheading tracking-wider uppercase block mt-1 text-[#3570F8]">/ liquidación quincenal</span>
                    </div>

                    <p className="text-sm opacity-90 leading-relaxed font-sans min-h-[48px] text-[#00277C]/80">
                      {level.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-8 pt-0 flex flex-col justify-between flex-grow relative z-10">
                    {/* Bullets */}
                    <ul className="space-y-2.5 pt-4 border-t border-brand-blue-100 mb-6">
                      {level.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-xs text-[#00277C]">
                          <Check className="h-4 w-4 shrink-0 text-[#0950F6]" />
                          <span className="font-sans text-xs">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <a
                        href="https://wa.me/542236602699"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-full inline-flex items-center justify-between gap-2 bg-[#FFF12E] hover:bg-[#FFF44A] text-[#052C87] font-subheading font-bold uppercase tracking-wider px-6 py-3 rounded-full text-sm min-h-[48px] shadow-glow-yellow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF12E]"
                      >
                        <span>Activar {level.name.split(' ')[0]}</span>
                        <span className="w-7 h-7 rounded-full bg-[#052C87]/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRight className="h-4 w-4 shrink-0 text-[#052C87]" />
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
          className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[28px] shadow-float"
        >
          <div className="bg-[#052C87] text-white rounded-[20px] p-8 relative overflow-hidden text-left border border-white/10 shadow-sm">
            {/* Background icon watermark */}
            <CloudRain className="absolute -bottom-8 -right-8 h-64 w-64 text-white/[0.04] pointer-events-none select-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

              <div className="lg:col-span-8 space-y-4 text-left">
                <span className="-rotate-1 inline-block px-4 py-1 bg-[#FFF12E] text-[#052C87] rounded-full text-xs font-subheading font-bold uppercase tracking-widest shadow-glow-yellow">
                  RECARGO POR LLUVIA
                </span>
                <h3 className="text-3xl font-display uppercase tracking-tight text-white">
                  <span className="font-mono tabular-nums">30%</span> adicional en caso de lluvia
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed font-sans max-w-2xl">
                  Para todos nuestros clientes asociados al canal Flex, el recargo por días de lluvia es de solo un <span className="font-mono tabular-nums">30%</span> adicional sobre el valor del envío. Cuidamos tu rentabilidad operativa para que sigas vendiendo con tranquilidad.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <a
                  href="https://wa.me/542236602699"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="flex-pricing-cta-whatsapp"
                  className="group inline-flex items-center justify-between gap-3 bg-[#FFF12E] hover:bg-[#FFF44A] text-[#052C87] font-subheading font-bold uppercase tracking-wider px-6 py-3 rounded-full text-sm min-h-[48px] shadow-glow-yellow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF12E] w-full sm:w-auto"
                >
                  <span>Más Información Flex</span>
                  <span className="w-8 h-8 rounded-full bg-[#052C87]/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                    <MessageSquare className="h-4 w-4 shrink-0 text-[#052C87]" />
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