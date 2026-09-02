'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, MessageSquare, Landmark } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/src/components/ui/card';
import { Sparkles } from '@/src/components/ui/sparkles';
import { TimelineContent } from '@/src/components/ui/timeline-animation';
import { VerticalCutReveal } from '@/src/components/ui/vertical-cut-reveal';
import NumberFlow from '@number-flow/react';

export default function LowCostPricing() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const zones = [
    {
      name: 'Zona 1',
      scope: 'Hasta 3 km',
      price: '$3.000',
      description: 'La mejor tarifa para ruteo diario de cercanía.',
      bullets: ['Eficiencia en ruteo masivo', 'Corte de carga 13:00 hs', 'Entrega antes de las 19:00 hs', 'SLA de entrega garantizada'],
      highlight: false,
    },
    {
      name: 'Zona 2',
      scope: '3 a 5 km',
      price: '$4.000',
      description: 'Cobertura intermedia económica para PyMEs.',
      bullets: ['Eficiencia en ruteo masivo', 'Corte de carga 13:00 hs', 'Entrega antes de las 19:00 hs', 'SLA de entrega garantizada'],
      highlight: true,
    },
    {
      name: 'Zona 3',
      scope: '5 a 7 km',
      price: '$5.300',
      description: 'Llegamos a distancias medias al mejor costo.',
      bullets: ['Eficiencia en ruteo masivo', 'Corte de carga 13:00 hs', 'Entrega antes de las 19:00 hs', 'SLA de entrega garantizada'],
      highlight: false,
    },
    {
      name: 'Zona 4',
      scope: '7 a 10 km',
      price: '$7.000',
      description: 'Máximo ahorro en distancias urbanas largas.',
      bullets: ['Eficiencia en ruteo masivo', 'Corte de carga 13:00 hs', 'Entrega antes de las 19:00 hs', 'SLA de entrega garantizada'],
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
      id="lowcost-pricing"
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
            TARIFARIO INTELIGENTE 2026
          </TimelineContent>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white flex justify-center leading-[0.98]">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.1}
              staggerFrom="first"
              containerClassName="justify-center"
            >
              TARIFAS 2026 ENVÍOS LOWCOST
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            as="p"
            className="text-blue-100 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed"
          >
            Eficiencia en ruteo masivo. Garantizamos entregas antes de las 19:00 hs para pedidos cargados antes de las 13:00 hs.
          </TimelineContent>
          <div className="h-1.5 w-16 bg-[#FFF12E] mx-auto rounded-full" />
        </div>

        {/* Pricing Cards Grid Bento layout with Double Bezel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {zones.map((zone, idx) => {
            const isNumericPrice = zone.price.startsWith('$');
            const numericValue = isNumericPrice ? parseInt(zone.price.replace('$', '').replace('.', '')) : null;

            // Asymmetric layout
            const spanClass = 'lg:col-span-3';

            return (
              <TimelineContent
                key={zone.name}
                animationNum={2 + idx}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                as="div"
                className={`${spanClass} bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[28px] shadow-float hover:shadow-antigravity-deep transition-all duration-300 flex flex-col`}
              >
                <Card
                  className={`border-0 bg-white text-[#052C87] rounded-[20px] p-6 flex flex-col justify-between h-full transition-all duration-300 group text-left shadow-none relative overflow-hidden ${
                    zone.highlight ? 'ring-2 ring-[#FFF12E]' : ''
                  }`}
                >
                  <CardHeader className="p-0 pb-4 text-left relative z-10">
                    {zone.highlight && (
                      <span className="-rotate-1 inline-block self-start mb-3 bg-[#FFF12E] text-[#052C87] font-bold font-subheading text-xs tracking-wider px-3 py-1 rounded-full shadow-glow-yellow">
                        RECOMENDADO PYME
                      </span>
                    )}

                    <div>
                      <span className="text-xs font-subheading tracking-wider uppercase text-[#0950F6] font-bold">
                        {zone.name}
                      </span>
                      <h3 className="text-2xl font-display uppercase tracking-wider mt-1 min-h-[48px] leading-tight text-[#052C87] font-bold">
                        {zone.scope}
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
                        <span className="text-4xl sm:text-5xl font-mono tabular-nums uppercase font-bold tracking-tight text-[#052C87]">
                          {zone.price}
                        </span>
                      )}
                      <span className="text-xs font-subheading tracking-wider uppercase block mt-1 text-[#3570F8]">/ despacho final</span>
                    </div>

                    <p className="text-sm opacity-90 leading-relaxed font-sans min-h-[48px] text-[#00277C]/80">
                      {zone.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0 pt-0 flex flex-col justify-between flex-grow relative z-10">
                    {/* Bullets */}
                    <ul className="space-y-2.5 pt-4 border-t border-brand-blue-100 mb-6">
                      {zone.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-xs text-[#00277C]">
                          <Check className="h-4 w-4 shrink-0 text-[#0950F6]" />
                          <span className="font-sans text-xs">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <Link
                        href="/cotizar/lowcost"
                        className="group w-full inline-flex items-center justify-between gap-2 bg-[#0950F6] hover:bg-[#0742CA] text-white font-subheading font-bold uppercase tracking-wider px-6 py-3 rounded-full text-sm min-h-[48px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0950F6]"
                      >
                        <span>Ver {zone.name}</span>
                        <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRight className="h-4 w-4 shrink-0 text-white" />
                        </span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TimelineContent>
            );
          })}
        </div>

        {/* Zona 5 / Special Dynamic Quote Box */}
        <TimelineContent
          animationNum={6}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          as="div"
          className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[28px] shadow-float"
        >
          <div className="bg-[#052C87] text-white rounded-[20px] p-8 relative overflow-hidden text-left border border-white/10 shadow-sm">
            {/* Background icon watermark */}
            <Landmark className="absolute -bottom-8 -right-8 h-64 w-64 text-white/[0.04] pointer-events-none select-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

              <div className="lg:col-span-8 space-y-4 text-left">
                <span className="-rotate-1 inline-block px-4 py-1 bg-[#FFF12E] text-[#052C87] rounded-full text-xs font-subheading font-bold uppercase tracking-widest shadow-glow-yellow">
                  ZONA 5 (MÁS DE 10 KM)
                </span>
                <h3 className="text-3xl font-mono tabular-nums uppercase tracking-tight text-white font-bold">
                  $7.000 Base + $700 x km adicional
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed font-sans max-w-2xl">
                  Para envíos de larga distancia fuera del ejido urbano masivo tradicional (+10 km), aplicamos tarifa base de 7 a 10 km (<span className="font-mono tabular-nums">$7.000</span>) más <span className="font-mono tabular-nums">$700</span> por kilómetro adicional entero para que sigas ruteando con máxima rentabilidad.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <a
                  href="https://wa.me/542236602699"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="lowcost-pricing-cta-whatsapp"
                  className="group inline-flex items-center justify-between gap-3 bg-[#FFF12E] hover:bg-[#FFF44A] text-[#052C87] font-subheading font-bold uppercase tracking-wider px-6 py-3 rounded-full text-sm min-h-[48px] shadow-glow-yellow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF12E] w-full sm:w-auto"
                >
                  <span>Consultar por WhatsApp</span>
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
