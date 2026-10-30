import React from 'react';
import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  Sparkles,
  Wallet,
} from 'lucide-react';
import CTANestedPill from '@/components/ui/CTANestedPill';

export default function ContrareembolsoHero() {
  return (
    <section
      id="contrareembolso-hero"
      aria-label="Envíos con cobro contra reembolso en destino en Mar del Plata"
      className="relative z-10 bg-brand-blue-500 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-400"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda: Copys y CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow-500/10 border border-brand-yellow-500/40 text-brand-yellow-500 text-xs font-subheading uppercase tracking-widest font-bold shadow-accent-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow-500" aria-hidden="true" />
              <span>Cobranzas Seguras en Mar del Plata</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.98]">
              ENVÍOS CON <span className="text-brand-yellow-500">COBRO EN DESTINO</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-brand-blue-100 max-w-xl leading-relaxed">
              Vendé más en Mar del Plata brindándole a tus clientes la tranquilidad de pagar al recibir el paquete. Cobramos en efectivo o transferencia y te rendimos el dinero en el día, al día siguiente o semanal, según lo acordado.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <CTANestedPill
                href="https://api.whatsapp.com/send/?phone=542236602699&text=Hola!%20Quiero%20consultar%20por%20env%C3%ADos%20contra%20reembolso%20en%20Mar%20del%20Plata."
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="large"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Pedí por WhatsApp
              </CTANestedPill>

              <CTANestedPill
                href="/cotizar"
                variant="elevated"
                size="large"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Cotizá tu envío
              </CTANestedPill>
            </div>

            {/* Micro-badges */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-brand-blue-100">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow-500 shrink-0" aria-hidden="true" />
                Rendición acordada
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow-500 shrink-0" aria-hidden="true" />
                Efectivo y Transferencia
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow-500 shrink-0" aria-hidden="true" />
                Flota propia verificada
              </span>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Double Bezel Resumen */}
          <div className="lg:col-span-5">
            <div className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-float">
              <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm text-brand-blue-500 space-y-6">
                <div className="flex items-center justify-between border-b border-brand-blue-100 pb-4">
                  <span className="font-subheading text-xs uppercase tracking-widest text-brand-blue-500 font-bold">
                    MODALIDAD CONTRA REEMBOLSO
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-brand-yellow-500/20 text-brand-blue-500 font-bold">
                    2026 MDQ
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 flex items-start gap-3.5">
                    <Wallet className="w-6 h-6 text-brand-blue-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="block font-subheading text-xs uppercase text-brand-blue-500 font-bold">
                        Cobranza en efectivo
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-brand-blue-500 mt-0.5">
                        El cadete recibe los billetes, verifica autenticidad y firma el remito correspondiente.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 flex items-start gap-3.5">
                    <Banknote className="w-6 h-6 text-brand-blue-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="block font-subheading text-xs uppercase text-brand-blue-500 font-bold">
                        Cobranza por transferencia
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-brand-blue-500 mt-0.5">
                        El comprador transfiere en el momento con comprobante validado antes de entregar el paquete.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-blue-100 flex items-center justify-between text-xs font-mono text-brand-blue-500">
                  <span>Base de operaciones</span>
                  <span className="font-bold text-brand-blue-500">Friuli 1972, MDQ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

