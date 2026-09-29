import { Tag, Clock, Receipt, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CTANestedPill } from '@/components/ui';
import DropoffCalculator from './DropoffCalculator';
import { DROPOFF_DISCOUNT_PERCENT, OPERATING_HOURS } from '@/lib/promises';

/** Condiciones operativas de la modalidad DropOFF (fuente: promises.ts, BL-03). */
const conditions = [
  {
    title: 'Descuento automático',
    desc: `Se resta solo en la tarifa final, en cada envío. Sin trámites ni gestiones.`,
    icon: Tag,
  },
  {
    title: 'Horario de corte 13:00 hs',
    desc: 'Lo dejás antes de las 13 y el despacho sale por la tarde.',
    icon: Clock,
  },
  {
    title: 'Contrareembolso $0 comisión',
    desc: 'Cobrás en la entrega, sin cargo extra ni porcentaje por gestión.',
    icon: Receipt,
  },
  {
    title: 'Hub Friuli 1972 · MDQ',
    desc: `Te recibimos ${OPERATING_HOURS.weekdays.toLowerCase()} y sábados ${OPERATING_HOURS.saturdays.toLowerCase()}.`,
    icon: MapPin,
  },
] as const;

/**
 * Modalidad DropOFF 20% (G1 del plan SEO) — bloque interactivo + calculadora de ahorro.
 *
 * Sección blanca 7/5 (misma proporción que el hero) entre Benefits (azul) y
 * Pricing (azul oscuro). La firma visual es el "ticket de ahorro": un comprobante
 * tipo etiqueta de despacho térmica (banda amarilla, perforación punteada, líneas
 * mono tabulares y código de barras) que traduce envíos/mes -> pesos ahorrados.
 * La calculadora es la única isla client (`DropoffCalculator`).
 */
export default function EmprendedoresDropoff() {
  return (
    <section
      id="dropoff-modalidad"
      aria-labelledby="dropoff-title"
      className="py-24 bg-white relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT 7 — copy + condiciones + CTA */}
          <div className="lg:col-span-7 space-y-7">
            <span className="-rotate-1 inline-block px-4 py-1.5 bg-[#0950F6] text-[#FFEC01] rounded-full text-xs font-subheading uppercase font-bold tracking-widest shadow-sm">
              Modalidad DropOFF · Mar del Plata
            </span>

            <h2
              id="dropoff-title"
              className="text-[#0950F6] text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-[0.98] text-balance"
            >
              Traé tus envíos y{' '}
              <span className="bg-[#FFEC01] px-2 py-0.5 inline-block -rotate-1 shadow-glow-yellow">
                ahorrá {DROPOFF_DISCOUNT_PERCENT}%
              </span>{' '}
              en cada despacho
            </h2>

            <p className="text-[#0950F6] text-base leading-relaxed font-sans max-w-2xl">
              La modalidad DropOFF simplifica tu paquetería e-commerce: acercás tus envíos,
              ya preparados, al hub de Friuli 1972 y el descuento se aplica solo en la tarifa
              final de cada despacho. Sin mínimos, sin papeles y con el mismo corte de 13:00 hs
              para entrega del día en Mar del Plata.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {conditions.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100/80"
                  >
                    <span className="p-2 bg-[#0950F6] text-[#FFEC01] rounded-lg shrink-0">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-subheading text-sm uppercase tracking-wider font-bold text-[#0950F6]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-brand-blue-900 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
              <CTANestedPill
                href="https://wa.me/542236602699?text=Hola!%20Quiero%20activar%20la%20modalidad%20DropOFF%20(20%25%20off)%20para%20mis%20despachos%20en%20Mar%20del%20Plata"
                variant="primary"
                size="large"
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaWhatsapp className="h-5 w-5" />}
                iconPosition="left"
              >
                Quiero activar DropOFF
              </CTANestedPill>
              <CTANestedPill href="#emprendedores-pricing" variant="outline" size="large">
                Ver Plan Inicial DropOFF
              </CTANestedPill>
            </div>
          </div>

          {/* RIGHT 5 — calculadora (isla client) */}
          <div className="lg:col-span-5">
            <DropoffCalculator />
            <p className="mt-4 text-center font-mono text-[11px] text-brand-blue-500">
              Estimación sobre la tarifa publicada del Plan Inicial DropOFF (MDQ, 2026). Cada caso se confirma por WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}