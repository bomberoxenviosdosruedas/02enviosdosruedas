import React from 'react';
import { Calculator, ShieldCheck, MapPin } from 'lucide-react';
import { CTANestedPill, DoubleBezelCard } from '@/components/ui';
import { calculateExpressPrice, EXPRESS_PRICE_PER_KM, EXPRESS_TIERS } from '@/src/lib/pricing';
import { CONSULT_THRESHOLD_KM } from '@/src/lib/promises';
import ExpressDistanceRings from './ExpressDistanceRings';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

const TIER_METADATA = [
  {
    tag: 'ZONA 1 · MICROCENTRO',
    note: 'Mandados rápidos dentro del barrio o zonas aledañas.',
  },
  {
    tag: 'ZONA 2 · INTERBARRIAL',
    note: 'Cruces cortos entre zonas y barrios consolidados.',
  },
  {
    tag: 'ZONA 3 · TRAYECTO MEDIO',
    note: 'De una punta a la otra de la ciudad sin demoras.',
  },
  {
    tag: 'ZONA 4 · PERIMETRO URBANO',
    note: 'Recorridos extensos dentro del ejido urbano de MDQ.',
  },
];

const EXAMPLE_KM = 12;
const examplePrice = calculateExpressPrice(EXAMPLE_KM, []);
const lastTier = EXPRESS_TIERS[EXPRESS_TIERS.length - 1];

export default function ExpressPricing() {
  return (
    <section
      id="express-pricing"
      className="py-20 lg:py-28 bg-[#FFFFFF] relative z-10 overflow-hidden text-[#0F172A]"
    >
      {/* Elemento de Fondo Suave Suizo */}
      <div className="absolute inset-0 bg-[radial-gradient(#0950F6_1px,transparent_1px)] bg-size-[24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-16">
        {/* Cabecera de Sección */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F0F4FF] border border-[#0950F6]/15 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#0950F6] animate-pulse" />
            <span className="font-['Geist_Mono'] text-xs font-semibold text-[#0950F6] uppercase tracking-wider">
              TARIFARIO TRANSPARENTE 2026 · MAR DEL PLATA
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-['Anton'] uppercase tracking-tight text-[#0F172A] leading-[0.98]">
            PAGÁS POR DISTANCIA, <span className="text-[#0950F6]">NO POR APURO</span>
          </h2>

          <p className="text-[#64748B] font-['Outfit'] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Tarifa fija según los kilómetros exactos entre retiro y entrega.
            Sabés el precio final antes de confirmar el pedido, sin sorpresas ni recargos.
          </p>
        </div>

        {/* Layout Principal: Ilustración de Anillos + Grid Bento de Tarifas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Columna Izquierda: Visualizador de Anillos / Cobertura */}
          <div className="lg:col-span-5 bg-[#F5F7FA] border border-[#E5E7EB] rounded-2xl p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-3 relative z-10">
              <span className="font-['Geist_Mono'] text-xs text-[#0950F6] font-semibold uppercase tracking-wider bg-white px-2.5 py-1 rounded-full border border-[#E5E7EB] inline-block">
                RADIAL DE COBERTURA
              </span>
              <h3 className="font-['Anton'] text-2xl text-[#0F172A] uppercase">
                Zonas por Kilometraje
              </h3>
              <p className="text-sm font-['Outfit'] text-[#64748B] leading-relaxed">
                Calculamos la distancia real en mapa punto a punto. Cadetería prioritaria con entrega asegurada en 60 a 90 minutos.
              </p>
            </div>

            <div className="my-6 flex items-center justify-center relative z-10 min-h-65">
              <ExpressDistanceRings />
            </div>

            <div className="pt-4 border-t border-[#E5E7EB] flex items-center gap-2 text-xs font-['Geist_Mono'] text-[#64748B] relative z-10">
              <ShieldCheck className="w-4 h-4 text-[#0950F6] shrink-0" />
              <span>Garantía de tarifa fija sin tarifa dinámica por clima o demanda.</span>
            </div>
          </div>

          {/* Columna Derecha: Tarjetas Bento de Rangos */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {EXPRESS_TIERS.map((tier, idx) => {
              const meta = TIER_METADATA[idx] || {
                tag: `RANGO ${idx + 1}`,
                note: '',
              };

              return (
                <article key={tier.maxKm} className="h-full">
                  <DoubleBezelCard
                    className="h-full transition-all duration-200 hover:border-[#0950F6]/40 hover:-translate-y-0.5"
                    innerClassName="h-full flex flex-col justify-between p-6 space-y-4 bg-white"
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-['Bebas_Neue'] text-xs uppercase tracking-wider text-[#0950F6] bg-[#F0F4FF] px-2.5 py-0.5 rounded-full">
                          {meta.tag}
                        </span>
                        <span className="font-['Geist_Mono'] text-xs font-semibold text-[#64748B]">
                          {tier.minKm} - {tier.maxKm} KM
                        </span>
                      </div>

                      <p className="font-['Geist_Mono'] text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] tabular-nums pt-1">
                        {formatArs(tier.price)}
                      </p>
                    </div>

                    <p className="text-sm font-['Outfit'] text-[#64748B] leading-relaxed">
                      {meta.note}
                    </p>
                  </DoubleBezelCard>
                </article>
              );
            })}
          </div>
        </div>

        {/* Banner Inferior: Batán, Sierra de los Padres y Larga Distancia */}
        <div className="bg-[#0950F6] rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden shadow-lg">
          {/* Marca de Agua de Calculadora */}
          <Calculator
            className="absolute -bottom-8 -right-8 h-64 w-64 text-white/10 pointer-events-none select-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFEC01] text-[#0F172A] rounded-full text-xs font-['Bebas_Neue'] tracking-wider uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>PERIFERIA Y LARGAS DISTANCIAS (&gt; {lastTier.maxKm} KM)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-['Anton'] uppercase tracking-tight text-white leading-tight">
                <span className="font-['Geist_Mono'] text-[#FFEC01] tabular-nums">
                  {formatArs(EXPRESS_PRICE_PER_KM)}
                </span>{' '}
                POR KM EXTRA EN TRAYECTOS LARGOS
              </h3>

              <p className="text-base text-white/90 leading-relaxed font-['Outfit'] max-w-2xl">
                Para Batán, Camet, Sierra de los Padres o la periferia de General Pueyrredón hasta{' '}
                <strong className="text-white font-['Geist_Mono']">{CONSULT_THRESHOLD_KM} km</strong>. Ejemplo:{' '}
                <span className="underline decoration-[#FFEC01] underline-offset-4">
                  {EXAMPLE_KM} km ={' '}
                  <span className="font-['Geist_Mono'] font-bold text-[#FFEC01] tabular-nums">
                    {typeof examplePrice === 'number' ? formatArs(examplePrice) : 'a consultar'}
                  </span>
                </span>
                . Superando los {CONSULT_THRESHOLD_KM} km, cotizamos el viaje especial en el acto.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <CTANestedPill
                href="/cotizar/express"
                variant="primary"
                size="large"
                className="bg-[#FFEC01] hover:bg-[#ebd900] text-[#0F172A] font-['Bebas_Neue'] text-xl tracking-wider px-8 py-4 rounded-full shadow-md transition-all active:scale-95"
              >
                COTIZÁ TU ENVÍO EXACTO
              </CTANestedPill>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
