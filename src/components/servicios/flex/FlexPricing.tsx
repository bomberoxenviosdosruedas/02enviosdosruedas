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
      bullets: ['Tarifa zonificada estándar', 'Segunda visita al 50%', 'Retiro sin cargo por tu domicilio'],
      highlight: false,
    },
    {
      name: 'Nivel 2 (Pro)',
      volume: '+5 envíos diarios',
      price: 'Tarifario Híbrido',
      description: 'Beneficios exclusivos y optimizaciones para vendedores constantes.',
      bullets: ['Zona 4 y 5 tope fijo $6.500', 'Segunda visita GRATIS (Zona 1)', 'Prioridad absoluta en ruteo diario'],
      highlight: true,
    },
    {
      name: 'Nivel 3 (Elite)',
      volume: 'Grandes Cuentas (+10 envíos)',
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
      className="py-24 bg-brand-blue relative overflow-hidden text-white border-y border-blue-900/60"
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
            className="px-3.5 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-block shadow-accent-sm"
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
              Niveles y Tarifas Flex
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
          <div className="h-1.5 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Pricing Cards Grid (3 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
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
                  className={`rounded-3xl border flex flex-col justify-between h-full transition-all duration-300 group ${
                    level.highlight
                      ? 'bg-gradient-to-b from-white via-white to-amber-50 text-slate-900 border-brand-yellow shadow-xl lg:scale-[1.03] relative z-20'
                      : 'bg-gradient-to-b from-white/5 to-white/[0.02] text-white border-white/10 hover:border-white/20 hover:bg-white/[0.08]'
                  }`}
                >
                  <CardHeader className="p-8 pb-2 text-left relative">
                    {level.highlight && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-blue font-bold text-[9px] tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                        RECOMENDADO
                      </span>
                    )}

                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${level.highlight ? 'text-brand-blue' : 'text-brand-yellow'}`}>
                        {level.volume}
                      </span>
                      <h3 className="text-xl font-display uppercase tracking-wider font-semibold mt-1">
                        {level.name}
                      </h3>
                    </div>

                    <div className="py-2">
                      {isNumericPrice && numericValue ? (
                        <div className="flex items-baseline">
                          <span className={`text-4xl font-display uppercase font-bold tracking-tight ${level.highlight ? 'text-brand-blue' : 'text-brand-yellow'}`}>
                            $
                            <NumberFlow
                              value={numericValue}
                              format={{ minimumFractionDigits: 0 }}
                              className="inline-block"
                            />
                          </span>
                        </div>
                      ) : (
                        <span className={`text-3xl font-display uppercase font-bold tracking-tight ${level.highlight ? 'text-brand-blue' : 'text-brand-yellow'}`}>
                          {level.price}
                        </span>
                      )}
                      <span className={`text-xs opacity-65 font-sans block mt-1 ${level.highlight ? 'text-slate-500' : 'text-blue-100'}`}>/ liquidación quincenal</span>
                    </div>

                    <p className={`text-xs opacity-80 leading-relaxed font-sans min-h-[32px] ${level.highlight ? 'text-slate-600' : 'text-slate-200'}`}>
                      {level.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-8 pt-0 flex flex-col justify-between flex-grow">
                    {/* Bullets */}
                    <ul className={`space-y-2.5 pt-4 border-t ${level.highlight ? 'border-slate-200' : 'border-white/10'} mb-6`}>
                      {level.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-xs">
                          <Check className={`h-4 w-4 shrink-0 ${level.highlight ? 'text-brand-blue' : 'text-brand-yellow'}`} />
                          <span className="font-sans opacity-90">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <a
                        href="https://wa.me/542236602699"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider font-subheading flex items-center justify-center gap-1.5 transition-all ${
                          level.highlight
                            ? 'bg-brand-blue text-white hover:bg-brand-blue/90 shadow-sm'
                            : 'bg-white/10 text-white hover:bg-white/15'
                        }`}
                      >
                        <span>Activar {level.name.split(' ')[0]}</span>
                        <ArrowRight className="h-3.5 w-3.5 animate-pulse" />
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
          className="bg-white text-slate-900 rounded-3xl p-8 border border-brand-yellow shadow-lg relative overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 translate-y-6 translate-x-6 text-slate-100/50 pointer-events-none -z-10">
            <CloudRain className="h-64 w-64 text-slate-100" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-[10px] font-bold uppercase tracking-widest inline-block">
                BENEFICIO EXCLUSIVO CLIMA
              </span>
              <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue">
                Recargo por lluvia: Solo 30%
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans max-w-2xl">
                Para todos nuestros clientes asociados al canal Flex, el recargo por días de lluvia es reducido al mínimo indispensable. Minimizamos al máximo el impacto directo en tus costos operativos mensuales para que sigas vendiendo con tranquilidad.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="flex-pricing-cta-whatsapp"
                className="bg-brand-blue hover:bg-brand-blue/95 text-white font-subheading tracking-wider text-base uppercase px-8 py-4 rounded-xl shadow-md transition-all duration-200 hover:scale-[1.03] flex items-center justify-center gap-2.5 font-semibold w-full sm:w-auto"
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
