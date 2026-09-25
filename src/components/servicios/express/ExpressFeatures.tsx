import React from 'react';
import { Clock, MapPinned, Package, Users } from 'lucide-react';
import { DoubleBezelCard } from '@/components/ui';
import { EXPRESS_WINDOW, MAX_WEIGHT_KG, OPERATING_HOURS } from '@/src/lib/promises';

const features = [
  {
    title: `Entrega en ${EXPRESS_WINDOW}`,
    desc: 'Pedís, retiramos y vamos directo al destino. Ideal para trámites, documentos y ventas que no pueden esperar.',
    icon: Clock,
    span: 'sm:col-span-7',
  },
  {
    title: `Bultos de hasta ${MAX_WEIGHT_KG} kg`,
    desc: 'Todo lo que viaja seguro en moto: sobres, cajas, repuestos, pedidos de tu tienda.',
    icon: Package,
    span: 'sm:col-span-5',
  },
  {
    title: 'Tarifa fija por distancia',
    desc: 'El precio sale de la distancia real entre retiro y entrega. Sin tarifa dinámica ni sorpresas a la hora de pagar.',
    icon: MapPinned,
    span: 'sm:col-span-5',
  },
  {
    title: 'Flota propia, sin tercerizar',
    desc: 'Más de 7 años recorriendo Mar del Plata con nuestras propias motos y cadetes. Coordinás todo por WhatsApp con una persona.',
    icon: Users,
    span: 'sm:col-span-7',
  },
];

export default function ExpressFeatures() {
  return (
    <section
      id="express-features"
      className="py-24 bg-brand-white-50 relative z-10 overflow-hidden border-t border-brand-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="-rotate-1 inline-block px-4 py-1.5 bg-brand-blue-700 text-brand-yellow-500 rounded-full text-xs font-subheading uppercase tracking-widest">
              Por qué Express
            </span>

            <h2 className="text-brand-blue-900 text-4xl sm:text-5xl font-display uppercase tracking-tight leading-[0.98]">
              Rápido cuando <br />
              <span className="bg-brand-yellow-500 px-2 py-0.5 inline-block mt-1 -rotate-1 shadow-glow-yellow">
                importa llegar
              </span>
            </h2>

            <p className="text-brand-blue-900 text-base leading-relaxed font-sans">
              Cubrimos todo el Partido de General Pueyrredón: Centro, Güemes, Chauvín, Los Troncos, Puerto, Playa
              Grande, Punta Mogotes, Constitución, Camet y Batán.
            </p>

            <p className="flex items-center gap-3 text-sm text-brand-blue-900 uppercase tracking-wider font-subheading">
              <Clock className="h-5 w-5 text-brand-blue-700 shrink-0" aria-hidden="true" />
              <span>
                Lunes a viernes {OPERATING_HOURS.weekdays} · Sábados {OPERATING_HOURS.saturdays}
              </span>
            </p>
          </div>

          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-6 text-left">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <li key={feat.title} className={feat.span}>
                  <DoubleBezelCard className="h-full" innerClassName="h-full">
                    <div className="flex flex-col h-full space-y-4 relative overflow-hidden">
                      <Icon
                        className="absolute -bottom-6 -right-6 h-32 w-32 text-brand-blue-50 pointer-events-none select-none"
                        aria-hidden="true"
                      />
                      <div className="h-12 w-12 rounded-xl bg-brand-blue-700 text-brand-yellow-500 flex items-center justify-center shrink-0 relative z-10">
                        <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                      </div>
                      <div className="space-y-1.5 relative z-10">
                        <h3 className="text-xl font-display uppercase tracking-wider text-brand-blue-900 leading-tight">
                          {feat.title}
                        </h3>
                        <p className="text-sm text-brand-blue-900 font-sans leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  </DoubleBezelCard>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
