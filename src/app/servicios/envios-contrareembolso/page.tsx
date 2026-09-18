import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Banknote,
  ShieldCheck,
  Clock,
  ArrowRight,
  CheckCircle2,
  Phone,
  Wallet,
  Sparkles,
  MapPin,
  CircleDollarSign,
  Receipt,
  TrendingUp,
} from 'lucide-react';
import CTANestedPill from '@/src/components/ui/CTANestedPill';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Envíos Contra Reembolso en Mar del Plata | Cobro en Destino',
  description:
    'Servicio seguro de cobro contra reembolso y entrega en Mar del Plata. Rendición de efectivo y transferencias en el día para tu comercio o emprendimiento.',
  alternates: {
    canonical: `${baseUrl}/servicios/envios-contrareembolso`,
  },
  openGraph: {
    title: 'Envíos Contra Reembolso en Mar del Plata | Envíos DosRuedas',
    description:
      'Entregá tus paquetes y cobrá en mano en Mar del Plata. Rendición en el día con total seguridad y flota propia.',
    url: `${baseUrl}/servicios/envios-contrareembolso`,
    type: 'website',
    locale: 'es_AR',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Envíos Contra Reembolso y Cobro en Destino en Mar del Plata',
  description:
    'Servicio de cobro contra entrega y rendición inmediata en Mar del Plata para comercios y emprendedores.',
  url: `${baseUrl}/servicios/envios-contrareembolso`,
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#localbusiness`,
    name: 'Envíos DosRuedas',
    telephone: '+54-223-660-2699',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Friuli 1972',
      addressLocality: 'Mar del Plata',
      addressRegion: 'Buenos Aires',
      postalCode: '7600',
      addressCountry: 'AR',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Mar del Plata',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${baseUrl}/#servicios` },
    { '@type': 'ListItem', position: 3, name: 'Envíos Contrarreembolso', item: `${baseUrl}/servicios/envios-contrareembolso` },
  ],
};

export default function EnviosContrareembolsoPage() {
  const steps = [
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
      title: 'Rendición en el día',
      desc: 'Te transferimos la recaudación a tu CBU/CVU o te entregamos el efectivo en mano con comprobante firmado.',
      icon: Receipt,
    },
  ];

  const benefits = [
    {
      title: 'Rendición inmediata',
      desc: 'El dinero de tus ventas no queda retenido semanas. Te transferimos o rendimos en mano el mismo día de la entrega.',
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
  ];

  return (
    <main className="min-h-[100dvh] bg-brand-white-50 text-brand-blue-700 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative z-10 bg-brand-blue-700 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Columna Izquierda: Copys y CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/30 text-brand-yellow-400 text-xs font-subheading uppercase tracking-widest font-bold shadow-accent-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-yellow-500" />
                <span>Cobranzas Seguras en Mar del Plata</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.98]">
                ENVÍOS CON <span className="text-brand-yellow-500">COBRO EN DESTINO</span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 max-w-xl leading-relaxed">
                Vendé más en Mar del Plata brindándole a tus clientes la tranquilidad de pagar al recibir el paquete. Cobramos en efectivo o transferencia y te rendimos el dinero en el día.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <CTANestedPill
                  href="https://wa.me/542236602699?text=Hola!%20Quiero%20consultar%20por%20env%C3%ADos%20contra%20reembolso%20en%20Mar%20del%20Plata."
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="large"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Pedí por WhatsApp
                </CTANestedPill>

                <CTANestedPill
                  href="/cotizar/express"
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
                  <CheckCircle2 className="w-4 h-4 text-brand-yellow-500 shrink-0" />
                  Rendición en el día
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-yellow-500 shrink-0" />
                  Efectivo y Transferencia
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-yellow-500 shrink-0" />
                  Flota propia verificada
                </span>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Double Bezel Resumen */}
            <div className="lg:col-span-5">
              <div className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-float">
                <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm text-brand-blue-700 space-y-6">
                  <div className="flex items-center justify-between border-b border-brand-blue-100 pb-4">
                    <span className="font-subheading text-xs uppercase tracking-widest text-brand-blue-500 font-bold">
                      MODALIDAD CONTRA REEMBOLSO
                    </span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-brand-yellow-500/20 text-brand-blue-900 font-bold">
                      2026 MDQ
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 flex items-start gap-3.5">
                      <Wallet className="w-6 h-6 text-brand-blue-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-subheading text-xs uppercase text-brand-blue-500 font-bold">
                          Cobranza en efectivo
                        </span>
                        <p className="font-sans text-xs sm:text-sm text-brand-blue-700/90 mt-0.5">
                          El cadete recibe los billetes, verifica autenticidad y firma el remito correspondiente.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 flex items-start gap-3.5">
                      <Banknote className="w-6 h-6 text-brand-blue-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-subheading text-xs uppercase text-brand-blue-500 font-bold">
                          Cobranza por transferencia
                        </span>
                        <p className="font-sans text-xs sm:text-sm text-brand-blue-700/90 mt-0.5">
                          El comprador transfiere en el momento con comprobante validado antes de entregar el paquete.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-brand-blue-100 flex items-center justify-between text-xs font-mono text-brand-blue-500">
                    <span>Base de operaciones</span>
                    <span className="font-bold text-brand-blue-700">Friuli 1972, MDQ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso Paso a Paso */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-white-50">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-700 font-subheading text-xs uppercase font-bold tracking-widest border border-brand-blue-100">
              CÓMO FUNCIONA
            </span>
            <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-brand-blue-700">
              PASO A PASO SIMPLE Y TRANSPARENTE
            </h2>
            <p className="font-sans text-sm sm:text-base text-brand-blue-600/90">
              Diseñado para que cobres rápido y sin preocupaciones en cada rincón de Mar del Plata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.step}
                  className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl"
                >
                  <div className="double-bezel-inner bg-white p-6 sm:p-7 rounded-xl border border-brand-blue-50/50 shadow-sm h-full flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-700 flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-display text-2xl text-brand-yellow-500 font-bold">
                          {st.step}
                        </span>
                      </div>
                      <h3 className="font-display text-xl uppercase text-brand-blue-700">
                        {st.title}
                      </h3>
                      <p className="font-sans text-sm text-brand-blue-600 leading-relaxed">
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

      {/* Ventajas para tu Comercio */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-blue-50/50 border-y border-brand-blue-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full bg-brand-yellow-500 text-brand-blue-900 font-subheading text-xs uppercase font-bold tracking-widest">
              CONFIANZA TOTAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-brand-blue-700">
              POR QUÉ ELEGIR NUESTRO COBRO EN DESTINO
            </h2>
            <p className="font-sans text-sm sm:text-base text-brand-blue-600/90">
              Más de 7 años recorriendo Mar del Plata garantizan seguridad y puntualidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-brand-blue-100 shadow-sm flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-700 text-brand-yellow-500 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-lg uppercase text-brand-blue-700">
                      {b.title}
                    </h3>
                    <p className="font-sans text-sm text-brand-blue-600 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
            ¿QUERÉS EMPEZAR A COBRAR EN DESTINO HOY?
          </h2>
          <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 max-w-xl mx-auto">
            Escribinos por WhatsApp y coordinamos tu primer retiro contra reembolso en minutos. Sin contratos forzosos ni comisiones ocultas.
          </p>
          <div className="pt-2 flex justify-center">
            <CTANestedPill
              href="https://wa.me/542236602699?text=Hola!%20Quiero%20activar%20env%C3%ADos%20con%20cobro%20contra%20reembolso%20para%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="large"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Pedí por WhatsApp
            </CTANestedPill>
          </div>
        </div>
      </section>
    </main>
  );
}
