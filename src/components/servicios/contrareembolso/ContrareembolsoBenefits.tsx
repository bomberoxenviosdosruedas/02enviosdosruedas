import React from 'react';
import { CircleDollarSign, Clock, ShieldCheck, TrendingUp } from 'lucide-react';

const BENEFITS = [
  {
    title: 'Rendición acordada',
    desc: 'El dinero de tus ventas no queda retenido semanas. Te transferimos o rendimos en mano en el día, al día siguiente o semanal, según lo acordado.',
    icon: Clock,
  },
  {
    title: 'Flota propia identificada',
    desc: 'Nuestros cadetes están capacitados y registrados. Sin intermediarios anónimos custodiando tus cobranzas.',
    icon: ShieldCheck,
  },
  {
    title: 'Cero fricción para tu cliente',
    desc: 'Tu comprador paga recién cuando tiene el producto en sus manos, aumentando tus conversiones de venta en MDQ.',
    icon: TrendingUp,
  },
  {
    title: 'Comprobante y trazabilidad',
    desc: 'Notificación inmediata vía WhatsApp apenas se efectiviza la cobranza con foto del remito o comprobante bancario.',
    icon: CircleDollarSign,
  },
] as const;

export default function ContrareembolsoBenefits() {
  return (
    <section
      id="contrareembolso-benefits"
      aria-label="Ventajas de elegir nuestro cobro contra reembolso en destino"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-blue-50/50 border-y border-brand-blue-100"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-brand-yellow-500 text-brand-blue-500 font-subheading text-xs uppercase font-bold tracking-widest">
            CONFIANZA TOTAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-brand-blue-500">
            POR QUÉ ELEGIR NUESTRO COBRO EN DESTINO
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-blue-500">
            Más de 7 años recorriendo Mar del Plata garantizan seguridad y puntualidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-brand-blue-100 shadow-sm flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-lg uppercase text-brand-blue-500">
                    {b.title}
                  </h3>
                  <p className="font-sans text-sm text-brand-blue-500 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

