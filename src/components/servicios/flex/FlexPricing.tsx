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
      price: 'Tarifa LowCost',
      description: 'Ideal para vendedores que recién comienzan con MercadoLibre Flex.',
      bullets: ['Tarifa zonificada estándar', 'Segunda visita bonificada', 'Retiro sin cargo por tu domicilio'],
      highlight: false,
    },
    {
      name: 'Nivel 2 (Pro)',
      volume: 'Más de 5 envíos diarios',
      price: 'Tarifario Híbrido',
      description: 'Beneficios exclusivos y optimizaciones para vendedores constantes.',
      bullets: ['Zonas lejanas con tope fijo', 'Segunda visita GRATIS (Zona Centro)', 'Prioridad absoluta en ruteo diario'],
      highlight: true,
    },
    {
      name: 'Nivel 3 (Elite)',
      volume: 'Grandes Cuentas',
      price: '$4.500',
      description: 'Máxima eficiencia y previsibilidad de costos para operaciones grandes.',
      bullets: ['Tarifa PLANA en toda la ciudad', 'Reprogramaciones 100% GRATIS', 'Soporte y gestor dedicado'],
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
            Niveles Flex
          </TimelineContent>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white flex justify-center">
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
          <div className="h-2 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Pricing Cards Grid (3 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {levels.map((level, idx) => {
            const isNumericPrice = level.price.startsWith('$');
            const numericValue = isNumericPrice ? parseInt(level.price.replace('$', '').replace('.', '')) : null;

            return (
              <TimelineContent
                key={level.name}
                animationNum={2 + idx}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                as="div"
              >
                <Card
                  className={`rounded-3xl border-2 bg-white text-brand-blue border-brand-blue flex flex-col justify-between h-full transition-all duration-300 group text-left shadow-[6px_6px_0px_#D8CA00] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#D8CA00] ${
                    level.highlight ? 'lg:scale-[1.03] relative z-20' : ''
                  }`}
                >
                  <CardHeader className="p-8 pb-2 text-left relative">
                    {level.highlight && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-blue border-2 border-brand-blue font-bold font-subheading text-xs tracking-wider px-4 py-1 rounded-full shadow-md">
                        RECOMENDADO
                      </span>
                    )}

                    <div>
                      <span className="text-xs font-subheading tracking-wider uppercase text-brand-blue font-bold">
                        {level.volume}
                      </span>
                      <h3 className="text-2xl font-display uppercase tracking-wider mt-1 min-h-[56px] leading-tight text-brand-ink font-bold">
                        {level.name}
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
                        <span className="text-3xl font-display uppercase font-bold tracking-tight text-brand-blue">
                          {level.price}
                        </span>
                      )}
                      <span className="text-xs font-subheading tracking-wider uppercase block mt-1 text-slate-500">/ liquidación quincenal</span>
                    </div>

                    <p className="text-sm opacity-90 leading-relaxed font-sans min-h-[48px] text-slate-600">
                      {level.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-8 pt-0 flex flex-col justify-between flex-grow">
                    {/* Bullets */}
                    <ul className="space-y-2.5 pt-4 border-t-2 border-slate-100 mb-6">
                      {level.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="h-4.5 w-4.5 shrink-0 text-brand-blue" />
                          <span className="font-sans text-sm opacity-90">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <a
                        href="https://wa.me/542236602699"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-xl text-sm font-subheading uppercase tracking-wider font-bold flex items-center justify-center gap-1.5 transition-all bg-brand-blue text-brand-yellow hover:bg-brand-blue/90 border-2 border-brand-blue shadow-[3px_3px_0px_#D8CA00]"
                      >
                        <span>Activar {level.name.split(' ')[0]}</span>
                        <ArrowRight className="h-4 w-4 animate-pulse shrink-0" />
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
          className="bg-white text-brand-ink rounded-3xl p-8 border-2 border-brand-blue shadow-[6px_6px_0px_#D8CA00] relative overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 translate-y-6 translate-x-6 text-slate-100/50 pointer-events-none -z-10">
            <CloudRain className="h-64 w-64 text-slate-100" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="px-4 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-subheading uppercase tracking-widest inline-block border border-brand-blue/20">
                BENEFICIO EXCLUSIVO CLIMA
              </span>
              <h3 className="text-3xl font-display uppercase tracking-tight text-brand-blue">
                Recargo por lluvia: Mínimo Indispensable
              </h3>
              <p className="text-sm text-slate-655 leading-relaxed font-sans max-w-2xl">
                Para todos nuestros clientes asociados al canal Flex, el recargo por días de lluvia es reducido al mínimo indispensable. Minimizamos al máximo el impacto directo en tus costos operativos mensuales para que sigas vendiendo con tranquilidad.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="flex-pricing-cta-whatsapp"
                className="bg-brand-blue hover:bg-brand-blue/95 border-2 border-brand-blue text-brand-yellow font-subheading tracking-wider text-base uppercase px-8 py-4 rounded-xl shadow-[4px_4px_0px_#00277c] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#00277c] transition-all duration-200 flex items-center justify-center gap-2.5 font-bold w-full sm:w-auto"
              >
                <MessageSquare className="h-5 w-5 fill-current" />
                Más Información Flex
              </a>
            </div>

          </div>
        </TimelineContent>

      </div>
    </section>
  );
}
