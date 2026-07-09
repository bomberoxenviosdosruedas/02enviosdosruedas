'use client';

import React, { useRef } from 'react';
import { Check, ArrowRight, MessageSquare, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/src/components/ui/card';
import { Sparkles } from '@/src/components/ui/sparkles';
import { TimelineContent } from '@/src/components/ui/timeline-animation';
import { VerticalCutReveal } from '@/src/components/ui/vertical-cut-reveal';
import NumberFlow from '@number-flow/react';

export default function EmprendedoresPricing() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const plans = [
    {
      name: 'Plan E-Commerce (3PL Fulfillment)',
      price: '$6.000',
      period: 'Tarifa Plana Same Day',
      description: 'Incluye almacenamiento, picking y embalaje básico de productos.',
      bullets: [
        'Cobranza contra-reembolso bonificada',
        'Rechazos devueltos 100% sin cargo',
        'Control y monitoreo de stock incluido',
        'Despacho y logística en el acto'
      ],
      highlight: true,
      badge: 'EL MÁS COMPLETO'
    },
    {
      name: 'Plan Escala (Plan 24HS)',
      price: '$3.800',
      period: 'Next Day (Retiro hoy)',
      description: 'Tarifas decrecientes: Pro $3.500 | Elite $3.200 | Partner $3.000.',
      bullets: [
        '20% OFF aplicando Drop-Off en local',
        'Entrega garantizada menor a 24hs',
        'Ideal para grandes volúmenes diarios',
        'Reporte consolidado de envíos'
      ],
      highlight: false,
      badge: 'MAYOR VOLUMEN'
    },
    {
      name: 'Plan Corporativo (Cta. Cte. Flexible)',
      price: 'Híbrido',
      period: 'LowCost + Beneficios Express',
      description: 'Pagá tarifas LowCost súper económicas pero con prioridad alta de gestión.',
      bullets: [
        'Corte extendido de carga hasta 15:00 hs',
        'Elección de rango horario de entrega',
        'Facturación mensual centralizada',
        'Asesor y soporte dedicado por chat'
      ],
      highlight: false,
      badge: 'CTA CTE FLEXIBLE'
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
      id="emprendedores-pricing" 
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
            Planes a Medida
          </TimelineContent>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white flex justify-center">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.1}
              staggerFrom="first"
              containerClassName="justify-center"
            >
              PLANES 3PL Y E-COMMERCE
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            as="p"
            className="text-blue-100 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed"
          >
            Elegí el plan corporativo que mejor se adapte al volumen y necesidades operativas de tu negocio. Desde almacenamiento estratégico hasta ruteo masivo.
          </TimelineContent>
          <div className="h-2 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Pricing Cards Grid (3 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, idx) => {
            const isNumericPrice = plan.price.startsWith('$');
            const numericValue = isNumericPrice ? parseInt(plan.price.replace('$', '').replace('.', '')) : null;

            return (
              <TimelineContent
                key={plan.name}
                animationNum={2 + idx}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                as="div"
              >
                <Card
                  className={`rounded-3xl border-2 flex flex-col justify-between h-full transition-all duration-300 group text-left ${
                    plan.highlight
                      ? 'bg-white text-brand-ink border-brand-blue shadow-[6px_6px_0px_#FFCC00] lg:scale-[1.03] relative z-20 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#FFCC00]'
                      : 'bg-brand-blue/30 text-white border-brand-yellow/30 shadow-[6px_6px_0px_rgba(0,51,153,0.4)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_rgba(0,51,153,0.4)] hover:border-brand-yellow'
                  }`}
                >
                  <CardHeader className="p-8 pb-2 text-left relative">
                    {plan.highlight && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-blue border-2 border-brand-blue font-bold font-subheading text-xs tracking-wider px-4 py-1 rounded-full shadow-md">
                        {plan.badge}
                      </span>
                    )}

                    <div>
                      <span className={`text-xs font-subheading tracking-wider uppercase ${plan.highlight ? 'text-brand-blue font-bold' : 'text-brand-yellow'}`}>
                        {plan.badge}
                      </span>
                      <h3 className={`text-2xl font-display uppercase tracking-wider mt-1 min-h-[56px] leading-tight ${plan.highlight ? 'text-brand-ink font-bold' : 'text-white'}`}>
                        {plan.name}
                      </h3>
                    </div>

                    <div className="py-2">
                      {isNumericPrice && numericValue ? (
                        <div className="flex items-baseline">
                          <span className={`text-5xl font-display uppercase font-bold tracking-tight ${plan.highlight ? 'text-brand-blue' : 'text-brand-yellow'}`}>
                            $
                            <NumberFlow
                              value={numericValue}
                              format={{ minimumFractionDigits: 0 }}
                              className="inline-block"
                            />
                          </span>
                        </div>
                      ) : (
                        <span className={`text-5xl font-display uppercase font-bold tracking-tight ${plan.highlight ? 'text-brand-blue' : 'text-brand-yellow'}`}>
                          {plan.price}
                        </span>
                      )}
                      <span className={`text-xs font-subheading tracking-wider uppercase block mt-1 ${plan.highlight ? 'text-slate-500' : 'text-blue-200'}`}>{plan.period}</span>
                    </div>

                    <p className={`text-sm opacity-90 leading-relaxed font-sans min-h-[48px] ${plan.highlight ? 'text-slate-600' : 'text-slate-200'}`}>
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-8 pt-0 flex flex-col justify-between flex-grow">
                    {/* Bullets */}
                    <ul className={`space-y-2.5 pt-4 border-t-2 ${plan.highlight ? 'border-slate-100' : 'border-white/10'} mb-6`}>
                      {plan.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-xs">
                          <Check className={`h-4.5 w-4.5 shrink-0 ${plan.highlight ? 'text-brand-blue' : 'text-brand-yellow'}`} />
                          <span className="font-sans text-sm opacity-90">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <a
                        href="https://wa.me/542236602699"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 rounded-xl text-sm font-subheading uppercase tracking-wider font-bold flex items-center justify-center gap-1.5 transition-all ${
                          plan.highlight
                            ? 'bg-brand-blue text-brand-yellow hover:bg-brand-blue/90 border-2 border-brand-blue shadow-[3px_3px_0px_#FFCC00]'
                            : 'bg-brand-yellow text-brand-blue hover:bg-brand-yellow/90 border-2 border-brand-blue shadow-[3px_3px_0px_#003399]'
                        }`}
                      >
                        <span>Seleccionar {plan.name.split(' ')[1]}</span>
                        <ArrowRight className="h-4 w-4 animate-pulse shrink-0" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </TimelineContent>
            );
          })}
        </div>

        {/* Bottom CTA Special custom callout */}
        <TimelineContent
          animationNum={5}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          as="div"
          className="bg-white text-brand-ink rounded-3xl p-8 border-2 border-brand-blue shadow-[6px_6px_0px_#FFCC00] relative overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 translate-y-6 translate-x-6 text-slate-100/50 pointer-events-none -z-10">
            <Briefcase className="h-64 w-64 text-slate-100" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="px-4 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-subheading uppercase tracking-widest inline-block border border-brand-blue/20">
                SOPORTE DE INTEGRACIÓN PyMEs
              </span>
              <h3 className="text-3xl font-display uppercase tracking-tight text-brand-blue">
                ¿Tenés necesidades operativas especiales?
              </h3>
              <p className="text-sm text-slate-655 leading-relaxed font-sans max-w-2xl">
                Diseñamos flujos logísticos a medida para grandes e-commerce o distribuidoras con despachos masivos, integraciones API, reportes personalizados y picking especializado.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="emprendedores-pricing-cta-whatsapp"
                className="bg-brand-blue hover:bg-brand-blue/95 border-2 border-brand-blue text-brand-yellow font-subheading tracking-wider text-base uppercase px-8 py-4 rounded-xl shadow-[4px_4px_0px_#FFCC00] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#FFCC00] transition-all duration-200 flex items-center justify-center gap-2.5 font-bold w-full sm:w-auto"
              >
                <MessageSquare className="h-5 w-5 fill-current" />
                Agendar Asesoría 3PL
              </a>
            </div>

          </div>
        </TimelineContent>

      </div>
    </section>
  );
}
