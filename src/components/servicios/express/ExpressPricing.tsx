'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Calculator } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/src/components/ui/card';
import { Sparkles } from '@/src/components/ui/sparkles';
import { TimelineContent } from '@/src/components/ui/timeline-animation';
import { VerticalCutReveal } from '@/src/components/ui/vertical-cut-reveal';
import NumberFlow from '@number-flow/react';

export default function ExpressPricing() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const zones = [
    {
      name: 'Zona 1',
      scope: 'Radio céntrico',
      price: '$3.700',
      description: 'Ideal para entregas inmediatas en el centro.',
      bullets: ['Elegís rango horario', 'Mínimo 2hs anticipación', 'Seguimiento en tiempo real', 'Custodia digital'],
      highlight: false,
    },
    {
      name: 'Zona 2',
      scope: 'Periferia cercana',
      price: '$4.600',
      description: 'Cobertura extendida con rapidez.',
      bullets: ['Elegís rango horario', 'Mínimo 2hs anticipación', 'Seguimiento en tiempo real', 'Custodia digital'],
      highlight: true,
    },
    {
      name: 'Zona 3',
      scope: 'Zonas alejadas',
      price: '$6.100',
      description: 'Llegamos a donde otros no.',
      bullets: ['Elegís rango horario', 'Mínimo 2hs anticipación', 'Seguimiento en tiempo real', 'Custodia digital'],
      highlight: false,
    },
    {
      name: 'Zona 4',
      scope: 'Límites de ciudad',
      price: '$8.200',
      description: 'Máxima cobertura urbana.',
      bullets: ['Elegís rango horario', 'Mínimo 2hs anticipación', 'Seguimiento en tiempo real', 'Custodia digital'],
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
      id="express-pricing" 
      className="py-24 bg-brand-blue relative overflow-hidden text-white border-t-4 border-b-4 border-brand-yellow"
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
            className="px-4 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-blue shadow-[2px_2px_0px_rgba(255,204,0,0.3)] font-bold"
          >
            Envíos Dos Ruedas
          </TimelineContent>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white flex justify-center">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.1}
              staggerFrom="first"
              containerClassName="justify-center"
            >
              TARIFAS 2026 ENVÍOS EXPRESS
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            as="p"
            className="text-blue-100 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed"
          >
            Consultá los precios actualizados para nuestro servicio premium con rango horario a elección.
          </TimelineContent>
          <div className="h-2 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Pricing Cards Grid (4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {zones.map((zone, idx) => {
            const isNumericPrice = zone.price.startsWith('$');
            const numericValue = isNumericPrice ? parseInt(zone.price.replace('$', '').replace('.', '')) : null;

            return (
              <TimelineContent
                key={zone.name}
                animationNum={2 + idx}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                as="div"
              >
                <Card
                  className={`rounded-3xl border-2 bg-white text-brand-blue border-brand-blue flex flex-col justify-between h-full transition-all duration-300 group text-left shadow-[6px_6px_0px_#D8CA00] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#D8CA00] ${
                    zone.highlight ? 'lg:scale-[1.03] relative z-20' : ''
                  }`}
                >
                  <CardHeader className="p-6 pb-2 text-left relative">
                    {zone.highlight && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-blue border-2 border-brand-blue font-bold font-subheading text-xs tracking-wider px-3 py-1 rounded-full shadow-md">
                        RECOMENDADO
                      </span>
                    )}
                    
                    <div>
                      <span className="text-xs font-subheading tracking-wider uppercase text-brand-blue font-bold">
                        {zone.name}
                      </span>
                      <h3 className="text-2xl font-display uppercase tracking-wider mt-1 min-h-[48px] leading-tight text-brand-ink font-bold">
                        {zone.scope}
                      </h3>
                    </div>

                    <div className="py-2">
                      {isNumericPrice && numericValue ? (
                        <div className="flex items-baseline">
                          <span className="text-5xl font-display uppercase font-bold tracking-tight text-brand-blue">
                            $
                            <NumberFlow
                              value={numericValue}
                              format={{ minimumFractionDigits: 0 }}
                              className="inline-block"
                            />
                          </span>
                        </div>
                      ) : (
                        <span className="text-5xl font-display uppercase font-bold tracking-tight text-brand-blue">
                          {zone.price}
                        </span>
                      )}
                      <span className="text-xs font-subheading tracking-wider uppercase block mt-1 text-slate-500">/ despacho final</span>
                    </div>

                    <p className="text-sm opacity-90 leading-relaxed font-sans min-h-[48px] text-slate-600">
                      {zone.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 flex flex-col justify-between flex-grow">
                    {/* Bullets */}
                    <ul className="space-y-2.5 pt-4 border-t-2 border-slate-100 mb-6">
                      {zone.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="h-4.5 w-4.5 shrink-0 text-brand-blue" />
                          <span className="font-sans text-sm opacity-90">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <Link
                        href="/cotizar/express"
                        className="w-full py-3 rounded-xl text-sm font-subheading uppercase tracking-wider font-bold flex items-center justify-center gap-1.5 transition-all bg-brand-blue text-brand-yellow hover:bg-brand-blue/90 border-2 border-brand-blue shadow-[3px_3px_0px_#D8CA00]"
                      >
                        <span>Seleccionar {zone.name}</span>
                        <ArrowRight className="h-4 w-4 animate-pulse shrink-0" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TimelineContent>
            );
          })}
        </div>

        {/* Zona 5: Dynamic Quote Callout (Full width card) */}
        <TimelineContent
          animationNum={6}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          as="div"
          className="bg-white text-brand-ink rounded-3xl p-8 border-2 border-brand-blue shadow-[6px_6px_0px_#D8CA00] relative overflow-hidden text-left"
        >
          {/* Subtle background highlight icon */}
          <div className="absolute right-0 bottom-0 translate-y-6 translate-x-6 text-slate-100/50 pointer-events-none -z-10">
            <Calculator className="h-64 w-64 text-slate-100" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="px-4 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-subheading uppercase tracking-widest inline-block border border-brand-blue/20">
                Zona 5 (Larga Distancia)
              </span>
              <h3 className="text-3xl font-display uppercase tracking-tight text-brand-blue">
                $1.000 / km adicional
              </h3>
              <p className="text-sm text-slate-655 leading-relaxed font-sans max-w-2xl">
                Para envíos de larga distancia fuera del ejido urbano o si querés obtener una cotización de altísima precisión basada en mapa y geolocalización exacta, utilizá nuestro cotizador inteligente en tiempo real.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/cotizar/express"
                id="express-pricing-cta-cotizador"
                className="bg-brand-yellow hover:bg-brand-yellow/95 border-2 border-brand-blue text-brand-blue font-subheading tracking-wider text-base uppercase px-8 py-4 rounded-xl shadow-[4px_4px_0px_#00277c] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#00277c] transition-all duration-200 flex items-center justify-center gap-2.5 font-bold w-full sm:w-auto"
              >
                <Calculator className="h-5 w-5 shrink-0" />
                Ir al Cotizador
              </Link>
            </div>

          </div>
        </TimelineContent>

      </div>
    </section>
  );
}
