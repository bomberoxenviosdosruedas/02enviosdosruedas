import React from 'react';
import { CheckCircle2, Clock, FileText, Package } from 'lucide-react';
import { DoubleBezelCard } from '@/components/ui';

const cases = [
  {
    title: 'Documentos y trámites',
    desc: 'Contratos, escrituras y papeles que tienen que llegar firmados hoy, entregados en mano.',
    examples: ['Documentación para escribanías y estudios', 'Contratos comerciales firmados', 'Certificados y habilitaciones'],
    icon: FileText,
    badge: 'Legal y trámites',
  },
  {
    title: 'Insumos y repuestos',
    desc: 'Lo que frena tu trabajo si no llega: repuestos, insumos de local, tecnología.',
    examples: ['Repuestos para talleres y service', 'Insumos para locales y gastronomía', 'Equipos y accesorios de tecnología'],
    icon: Package,
    badge: 'Insumos y repuestos',
  },
  {
    title: 'Entregas con horario',
    desc: 'Cuando el paquete tiene que estar a una hora: un regalo, un evento, una obra que arranca.',
    examples: ['Regalos y sorpresas del día', 'Pedidos para eventos y catering', 'Entregas coordinadas en obras y oficinas'],
    icon: Clock,
    badge: 'Con horario',
  },
];

export default function ExpressUseCases() {
  return (
    <section
      id="express-use-cases"
      className="py-24 bg-brand-white-50 relative z-10 overflow-hidden border-t border-brand-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="-rotate-1 inline-block px-4 py-1.5 bg-brand-blue-700 text-brand-yellow-500 rounded-full text-xs font-subheading uppercase tracking-widest">
            Casos de uso
          </span>
          <h2 className="text-brand-blue-900 text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none">
            ¿Cuándo te conviene Express?
          </h2>
          <p className="text-brand-blue-900 text-base sm:text-lg font-sans max-w-lg mx-auto leading-relaxed">
            Cuando esperar al día siguiente te cuesta plata, un cliente o un trámite.
          </p>
          <div className="h-1.5 w-16 bg-brand-yellow-500 mx-auto rounded-full" aria-hidden="true" />
        </div>

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <li key={useCase.title}>
                <DoubleBezelCard className="h-full" innerClassName="h-full">
                  <div className="space-y-6 h-full flex flex-col text-left relative overflow-hidden">
                    <Icon
                      className="absolute -bottom-6 -right-6 h-32 w-32 text-brand-blue-50 pointer-events-none select-none"
                      aria-hidden="true"
                    />

                    <div className="flex justify-between items-center gap-3 relative z-10">
                      <div className="p-3 rounded-xl flex items-center justify-center shrink-0 bg-brand-blue-700 text-brand-yellow-500">
                        <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-subheading uppercase tracking-wider px-2.5 py-1 rounded-full border bg-brand-blue-50 text-brand-blue-900 border-brand-blue-100">
                        {useCase.badge}
                      </span>
                    </div>

                    <div className="space-y-2 relative z-10">
                      <h3 className="text-2xl font-display uppercase tracking-wide leading-tight text-brand-blue-900">
                        {useCase.title}
                      </h3>
                      <p className="text-sm font-sans leading-relaxed text-brand-blue-900">{useCase.desc}</p>
                    </div>

                    <ul className="space-y-2 pt-4 border-t border-brand-blue-50 relative z-10">
                      {useCase.examples.map((ex) => (
                        <li key={ex} className="flex items-start gap-2 text-sm text-brand-blue-900 font-sans">
                          <CheckCircle2 className="h-4 w-4 text-brand-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="leading-snug">{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </DoubleBezelCard>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
