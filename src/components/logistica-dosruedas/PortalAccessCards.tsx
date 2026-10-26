'use client';

import React from 'react';
import Link from 'next/link';
import {
  Store,
  Bike,
  ShoppingBag,
  Globe,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  FileText,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { trackAnalytics } from '@/lib/analytics';

export function PortalAccessCards() {
  const portals = [
    {
      title: 'Panel para Comercios',
      badge: 'Portal Web B2B',
      description:
        'Entorno exclusivo para locales comerciales y tiendas e-commerce. Generá etiquetas con código EDR, programá recolecciones en tu local y visualizá comprobantes de entrega.',
      icon: Store,
      features: [
        'Carga individual y masiva de remitos',
        'Seguimiento simultáneo de todos tus envíos',
        'Descarga de reportes para administración',
      ],
      ctaText: 'Acceder al Panel Comercial',
      ctaHref: 'https://www.logisticadosruedas.com/',
      isExternal: true,
      variant: 'light' as const,
    },
    {
      title: 'Panel para Repartidores',
      badge: 'App de Reparto MDQ',
      description:
        'Herramienta de campo para la flota de cadetes de Envíos DosRuedas. Ruteo inteligente por zonas, visualización de paradas y confirmación con firma digital y foto.',
      icon: Bike,
      features: [
        'Hojas de ruta optimizadas por radio',
        'Notificación de estado en tiempo real',
        'Prueba de entrega con firma en pantalla',
      ],
      ctaText: 'Ingreso Cadetería',
      ctaHref: 'https://www.logisticadosruedas.com/',
      isExternal: true,
      variant: 'light' as const,
    },
    {
      title: 'Shop DosRuedas',
      badge: 'Ecosistema E-commerce',
      description:
        'Creá tu tienda online con catálogo autogestionable y logística de última milla nativa integrada en Mar del Plata. Vendé online y despachá en un solo clic.',
      icon: ShoppingBag,
      features: [
        'Catálogo online con carrito y WhatsApp',
        'Envíos DosRuedas integrados automáticamente',
        'Tarifas unificadas sin intermediarios',
      ],
      ctaText: 'Conocer Shop DosRuedas',
      ctaHref: 'https://shopdosruedas.com',
      isExternal: true,
      variant: 'dark' as const,
    },
  ];

  return (
    <section id="portales" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="text-xs font-subheading uppercase tracking-widest text-brand-blue-500 font-bold px-3 py-1 bg-brand-blue-50 rounded-full border border-brand-blue-200">
            Ecosistema Digital
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-brand-blue-500">
            Portales dedicados para cada integrante de la red
          </h2>
          <p className="font-sans text-base sm:text-lg text-brand-blue-900/75">
            Elegí la plataforma adecuada según tu rol en la operación logística de Mar del Plata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portals.map((portal) => {
            const Icon = portal.icon;
            const isDark = portal.variant === 'dark';

            return (
              <DoubleBezelCard
                key={portal.title}
                variant={isDark ? 'dark' : 'light'}
                className="h-full flex flex-col justify-between"
                innerClassName={`p-6 sm:p-8 flex flex-col justify-between h-full ${
                  isDark ? 'bg-brand-blue-500 text-white' : 'bg-white text-brand-blue-900'
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${
                        isDark
                          ? 'bg-brand-yellow-500 text-brand-blue-500'
                          : 'bg-brand-blue-500 text-brand-yellow-500'
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span
                      className={`text-2xs font-subheading font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                        isDark
                          ? 'bg-white/10 text-brand-yellow-500 border-brand-yellow-500/30'
                          : 'bg-brand-blue-50 text-brand-blue-500 border-brand-blue-200'
                      }`}
                    >
                      {portal.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3
                      className={`font-display text-2xl uppercase tracking-tight ${
                        isDark ? 'text-white' : 'text-brand-blue-500'
                      }`}
                    >
                      {portal.title}
                    </h3>
                    <p
                      className={`font-sans text-sm leading-relaxed ${
                        isDark ? 'text-brand-blue-50' : 'text-brand-blue-900/75'
                      }`}
                    >
                      {portal.description}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {portal.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-sans">
                        <span
                          className={`mt-0.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                            isDark ? 'bg-brand-yellow-500' : 'bg-brand-blue-500'
                          }`}
                        />
                        <span className={isDark ? 'text-white/90' : 'text-brand-blue-900/85'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-blue-100/30">
                  <a
                    href={portal.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAnalytics.ctaClick('portal_access_click', portal.title)}
                    className={`w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl font-subheading text-xs uppercase tracking-wider font-bold transition-all shadow-sm ${
                      isDark
                        ? 'bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500'
                        : 'bg-brand-blue-500 hover:bg-brand-blue-600 text-white'
                    }`}
                  >
                    <span>{portal.ctaText}</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </DoubleBezelCard>
            );
          })}
        </div>

        {/* Info adicional de la plataforma */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-blue-50 border border-brand-blue-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-brand-blue-500 text-brand-yellow-500 rounded-xl shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-subheading text-sm font-bold uppercase tracking-wider text-brand-blue-900">
                Plataforma oficial: logisticadosruedas.com
              </h4>
              <p className="font-sans text-xs text-brand-blue-900/70">
                Centralizá tus despachos y sincronizá con tu base en Mar del Plata.
              </p>
            </div>
          </div>

          <a
            href="https://www.logisticadosruedas.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-subheading font-bold uppercase tracking-wider text-brand-blue-500 hover:text-brand-blue-700 inline-flex items-center gap-1.5"
          >
            <span>Visitar www.logisticadosruedas.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
