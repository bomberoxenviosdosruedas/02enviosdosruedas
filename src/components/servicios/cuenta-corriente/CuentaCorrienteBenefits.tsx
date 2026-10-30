import React from 'react';
import { Clock, FileSpreadsheet, Receipt, ShieldCheck } from 'lucide-react';

const BENEFITS = [
  {
    title: 'Pagos Agrupados',
    desc: 'Pagás todos los envíos juntos, por semana, quincena o mes, con el resumen de cada envío. No emitimos Factura A.',
    icon: Receipt,
  },
  {
    title: 'Tarifas Corporativas por Volumen',
    desc: 'Accedé a precios preferenciales fijos con bonificaciones escalonadas según tu volumen de despachos mensuales.',
    icon: FileSpreadsheet,
  },
  {
    title: 'Retiros Diarios Programados',
    desc: 'Pasamos por tu local, taller, fábrica o depósito en horarios convenidos sin que tengas que pedir una moto cada vez.',
    icon: Clock,
  },
  {
    title: 'Remitos y Trazabilidad Digital',
    desc: 'Comprobantes de entrega firmados en formato digital al instante para tu departamento administrativo o contable.',
    icon: ShieldCheck,
  },
] as const;

export default function CuentaCorrienteBenefits() {
  return (
    <section
      id="cuenta-corriente-benefits"
      aria-label="Beneficios corporativos de cuenta corriente"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-white-50"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-500 font-subheading text-xs uppercase font-bold tracking-widest border border-brand-blue-100">
            VENTAJAS PARA PYMES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-brand-blue-500">
            OPTIMIZÁ LA LOGÍSTICA DE TU EMPRESA
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-blue-500">
            Diseñado para simplificar tu administración con trazabilidad y respaldo fiscal completo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl"
              >
                <div className="double-bezel-inner bg-white p-6 sm:p-7 rounded-xl border border-brand-blue-50/50 shadow-sm h-full flex items-start gap-4">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

