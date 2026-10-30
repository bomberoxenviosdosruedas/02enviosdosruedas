import React from 'react';
import { Banknote, MapPin, Receipt } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Retiramos tu pedido',
    desc: 'Pasamos a buscar el paquete por tu local, taller o domicilio en Mar del Plata con remito de entrega.',
    icon: MapPin,
  },
  {
    step: '02',
    title: 'Cobramos en destino',
    desc: 'Entregamos al comprador y cobramos el monto exacto en efectivo o mediante transferencia bancaria al instante.',
    icon: Banknote,
  },
  {
    step: '03',
    title: 'Rendición acordada',
    desc: 'Te transferimos la recaudación a tu CBU/CVU o te entregamos el efectivo en mano con comprobante firmado, en el día, al día siguiente o semanal, según lo acordado.',
    icon: Receipt,
  },
] as const;

export default function ContrareembolsoHowItWorks() {
  return (
    <section
      id="contrareembolso-how-it-works"
      aria-label="Cómo funciona el servicio de envíos contra reembolso"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-500 font-subheading text-xs uppercase font-bold tracking-widest border border-brand-blue-100">
            CÓMO FUNCIONA
          </span>
          <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-brand-blue-500">
            PASO A PASO SIMPLE Y TRANSPARENTE
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-blue-500">
            Diseñado para que cobres rápido y sin preocupaciones en cada rincón de Mar del Plata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.step}
                className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl"
              >
                <div className="double-bezel-inner bg-white p-6 sm:p-7 rounded-xl border border-brand-blue-50/50 shadow-sm h-full flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-500 flex items-center justify-center">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <span className="font-display text-2xl text-brand-blue-500">
                        {st.step}
                      </span>
                    </div>
                    <h3 className="font-display text-xl uppercase text-brand-blue-500">
                      {st.title}
                    </h3>
                    <p className="font-sans text-sm text-brand-blue-500 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

