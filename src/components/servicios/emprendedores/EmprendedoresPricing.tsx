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
      name: 'E-Commerce Same Day',
      price: '$6.000',
      period: 'Fijo toda la ciudad',
      description: 'Stock almacenado en Friuli 1972 (productos chicos/medianos). Sale empaquetado inmediatamente con picking QR.',
      bullets: [
        'Picking por código QR y empaquetado',
        'Despacho y logística en el día',
        'Contrareembolso sin cargo extra',
        'Rechazos devueltos 100% sin costo'
      ],
      highlight: true,
      badge: 'STOCK EN DEPÓSITO'
    },
    {
      name: 'E-Commerce Next Day (24hs)',
      price: '$3.800',
      period: 'Desde $3.800',
      description: 'Retiro programado en tu local para entrega al día siguiente. A mayor cantidad de envíos, baja la tarifa.',
      bullets: [
        'Entrega garantizada en 24 horas',
        'Recolección gratis para +10 envíos (sino $4.000)',
        'Ideal para volúmenes diarios constantes',
        'Resúmenes y reportes de envíos'
      ],
      highlight: false,
      badge: 'RETIRO EN TU LOCAL'
    },
    {
      name: 'Opción DropOFF (-20% OFF)',
      price: '20% OFF',
      period: 'Descuento directo en tarifa',
      description: 'Traé tus paquetes terminados a nuestro depósito central de Friuli 1972 y obtené un 20% de descuento.',
      bullets: [
        '20% de descuento sobre la tarifa final',
        'Recepción directa en Friuli 1972',
        'Ideal para emprendedores con vehículo',
        'Cobro contrareembolso sin comisiones'
      ],
      highlight: false,
      badge: 'AHORRO MÁXIMO'
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
            MODALIDADES E-COMMERCE Y 3PL 2026
          </TimelineContent>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white flex justify-center leading-[0.98]">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.1}
              staggerFrom="first"
              containerClassName="justify-center"
            >
              PLANES PAQUETERÍA Y FULFILLMENT
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            as="p"
            className="text-blue-100 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed"
          >
            Elegí la modalidad e-commerce que mejor impulse tu marca. Desde almacenamiento con picking QR en Friuli 1972 hasta opción DropOFF con 20% OFF.
          </TimelineContent>
          <div className="h-1.5 w-16 bg-[#FFF12E] mx-auto rounded-full" />
        </div>

        {/* Pricing Cards Grid Bento layout with Double Bezel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {plans.map((plan, idx) => {
            const isNumericPrice = plan.price.startsWith('$');
            const numericValue = isNumericPrice ? parseInt(plan.price.replace('$', '').replace('.', '')) : null;

            const spanClass = 'lg:col-span-4';

            return (
              <TimelineContent
                key={plan.name}
                animationNum={2 + idx}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                as="div"
                className={`${spanClass} bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[28px] shadow-float hover:shadow-antigravity-deep transition-all duration-300 flex flex-col`}
              >
                <Card
                  className={`border-0 bg-white text-[#052C87] rounded-[20px] flex flex-col justify-between h-full transition-all duration-300 group text-left shadow-none relative overflow-hidden ${
                    plan.highlight ? 'ring-2 ring-[#FFF12E]' : ''
                  }`}
                >
                  <CardHeader className="p-8 pb-2 text-left relative z-10">
                    {plan.highlight && (
                      <span className="-rotate-1 absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFF12E] text-[#052C87] font-bold font-subheading text-xs tracking-wider px-4 py-1 rounded-full shadow-glow-yellow">
                        {plan.badge}
                      </span>
                    )}

                    <div>
                      <span className="text-xs font-subheading tracking-wider uppercase text-[#0950F6] font-bold">
                        {plan.badge}
                      </span>
                      <h3 className="text-2xl font-display uppercase tracking-wider mt-1 min-h-[56px] leading-tight text-[#052C87] font-bold">
                        {plan.name}
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
                          {plan.price}
                        </span>
                      )}
                      <span className="text-xs font-subheading tracking-wider uppercase block mt-1 text-[#3570F8]">{plan.period}</span>
                    </div>

                    <p className="text-sm opacity-90 leading-relaxed font-sans min-h-[48px] text-[#00277C]/80">
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-8 pt-0 flex flex-col justify-between flex-grow relative z-10">
                    {/* Bullets */}
                    <ul className="space-y-2.5 pt-4 border-t border-brand-blue-100 mb-6">
                      {plan.bullets.map((bullet) => (
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
                        <span>Elegir {plan.name.split(' ')[0]}</span>
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

        {/* Bottom CTA Special custom callout */}
        <TimelineContent
          animationNum={5}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          as="div"
          className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[28px] shadow-float"
        >
          <div className="bg-[#052C87] text-white rounded-[20px] p-8 relative overflow-hidden text-left border border-white/10 shadow-sm">
            {/* Background icon watermark */}
            <Briefcase className="absolute -bottom-8 -right-8 h-64 w-64 text-white/[0.04] pointer-events-none select-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

              <div className="lg:col-span-8 space-y-4 text-left">
                <span className="-rotate-1 inline-block px-4 py-1 bg-[#FFF12E] text-[#052C87] rounded-full text-xs font-subheading font-bold uppercase tracking-widest shadow-glow-yellow">
                  CONTRAREEMBOLSO SIN COSTO EXTRA
                </span>
                <h3 className="text-3xl font-display uppercase tracking-tight text-white">
                  ¿Cobrás tus ventas en puerta?
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed font-sans max-w-2xl">
                  Realizamos cobros contrareembolso en Mar del Plata sin ningún costo adicional sobre el valor del producto. Además, podés llevar tus envíos a Friuli 1972 con un <span className="font-mono tabular-nums">20%</span> de descuento en la tarifa final.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <a
                  href="https://wa.me/542236602699"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="emprendedores-pricing-cta-whatsapp"
                  className="group inline-flex items-center justify-between gap-3 bg-[#FFF12E] hover:bg-[#FFF44A] text-[#052C87] font-subheading font-bold uppercase tracking-wider px-6 py-3 rounded-full text-sm min-h-[48px] shadow-glow-yellow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF12E] w-full sm:w-auto"
                >
                  <span>Agendar Asesoría 3PL</span>
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
