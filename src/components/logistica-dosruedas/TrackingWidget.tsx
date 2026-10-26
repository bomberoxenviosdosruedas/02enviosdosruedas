'use client';

import React, { useState } from 'react';
import {
  Search,
  Package,
  CheckCircle2,
  Clock,
  MapPin,
  Bike,
  AlertCircle,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';

const WHATSAPP_NUMBER = SUPPORT_PHONE.replace(/\D/g, '');

interface TrackingResult {
  code: string;
  type: 'EDR' | 'FLEX' | 'GENERAL';
  status: 'en_camino' | 'entregado' | 'en_centro_distribucion' | 'recolectado';
  statusLabel: string;
  recipientName: string;
  zone: string;
  estimatedWindow: string;
  lastUpdate: string;
  timeline: {
    title: string;
    description: string;
    time: string;
    completed: boolean;
    current?: boolean;
  }[];
}

export function TrackingWidget() {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<TrackingResult | null>(null);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const clean = query.trim().toUpperCase();

    if (!clean) {
      setError('Por favor, ingresá un código EDR o número de seguimiento.');
      setResult(null);
      setSearched(true);
      return;
    }

    setError(null);
    setSearched(true);
    trackAnalytics.ctaClick('logistica_tracking_search', clean);

    // Mock realista de consulta con lógica según el prefijo
    const isFlex = clean.includes('FLEX') || clean.includes('MELI');
    const isDelivered = clean.endsWith('OK') || clean.includes('999');

    setResult({
      code: clean.startsWith('EDR') ? clean : `EDR-${clean}`,
      type: isFlex ? 'FLEX' : 'EDR',
      status: isDelivered ? 'entregado' : 'en_camino',
      statusLabel: isDelivered ? 'Entregado en destino' : 'En camino con cadete asignado',
      recipientName: 'Destinatario Registrado',
      zone: 'Mar del Plata (Radio Urbano)',
      estimatedWindow: isDelivered ? 'Entregado hoy' : 'Franja horaria programada en curso',
      lastUpdate: 'Hace unos minutos',
      timeline: [
        {
          title: 'Etiqueta generada y registrada',
          description: 'El comercio despachante ingresó el paquete al sistema logístico.',
          time: '09:15 hs',
          completed: true,
        },
        {
          title: 'Recolectado por cadetería DosRuedas',
          description: 'Retiro confirmado en local/depósito emisor.',
          time: '11:40 hs',
          completed: true,
        },
        {
          title: 'Clasificado en Hub Central Friuli 1972',
          description: 'Verificación de embalaje (máx. 5 kg / 40x40x30 cm) y asignación de zona.',
          time: '13:10 hs',
          completed: true,
        },
        {
          title: isDelivered ? 'En viaje a destino' : 'En camino con cadete en moto',
          description: isDelivered
            ? 'Repartidor completó el recorrido zonal.'
            : 'Cadete transitando hacia el domicilio de entrega.',
          time: '14:25 hs',
          completed: true,
          current: !isDelivered,
        },
        {
          title: 'Entregado en mano',
          description: isDelivered
            ? 'Entrega finalizada con firma y comprobante digital.'
            : 'Pendiente de recepción por parte del cliente.',
          time: isDelivered ? '15:10 hs' : 'Pendiente',
          completed: isDelivered,
          current: isDelivered,
        },
      ],
    });
  };

  const setSampleCode = (code: string) => {
    setQuery(code);
    setError(null);
  };

  return (
    <section id="rastreo" className="py-16 sm:py-24 bg-brand-blue-50/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-subheading uppercase tracking-widest text-brand-blue-500 font-bold px-3 py-1 bg-brand-blue-100 rounded-full">
            Seguimiento en Vivo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-brand-blue-500">
            Consultá el estado de tu paquete
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-blue-900/75 max-w-xl mx-auto">
            Ingresá el código de 4 a 12 dígitos que figura en tu etiqueta o remito.
          </p>
        </div>

        {/* Input box */}
        <DoubleBezelCard
          variant="light"
          className="shadow-xl mb-8"
          innerClassName="p-6 sm:p-8 bg-white"
        >
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-blue-500/50">
                  <Package className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ej: EDR-8420-MDQ o código numérico..."
                  className="w-full pl-11 pr-4 py-3.5 text-base font-mono uppercase bg-brand-blue-50/40 border border-brand-blue-200 rounded-xl text-brand-blue-900 placeholder:text-brand-blue-400/70 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading font-bold uppercase tracking-wider text-sm rounded-xl transition-all shadow-md active:scale-95"
              >
                <Search className="w-4 h-4" />
                <span>Rastrear Envío</span>
              </button>
            </div>

            {/* Quick sample chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-brand-blue-800">
              <span className="text-brand-blue-500/70">Ejemplos para probar:</span>
              <button
                type="button"
                onClick={() => setSampleCode('EDR-4820-MDQ')}
                className="px-2.5 py-1 rounded bg-brand-blue-100 hover:bg-brand-blue-200 text-brand-blue-900 transition-colors"
              >
                EDR-4820-MDQ (En camino)
              </button>
              <button
                type="button"
                onClick={() => setSampleCode('EDR-999-OK')}
                className="px-2.5 py-1 rounded bg-brand-blue-100 hover:bg-brand-blue-200 text-brand-blue-900 transition-colors"
              >
                EDR-999-OK (Entregado)
              </button>
              <button
                type="button"
                onClick={() => setSampleCode('MELI-FLEX-MDQ')}
                className="px-2.5 py-1 rounded bg-brand-blue-100 hover:bg-brand-blue-200 text-brand-blue-900 transition-colors"
              >
                MELI-FLEX-MDQ (Flex)
              </button>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 text-xs text-red-700 bg-red-50 border border-red-200 rounded-xl">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}
          </form>
        </DoubleBezelCard>

        {/* Tracking results */}
        {searched && result && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="bg-white rounded-2xl border border-brand-blue-200 p-6 sm:p-8 shadow-lg space-y-6">
              {/* Header result */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-blue-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-brand-blue-500">
                      {result.code}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-2xs font-subheading font-bold uppercase tracking-wider bg-brand-blue-50 text-brand-blue-500 border border-brand-blue-200">
                      {result.type}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-brand-blue-900/60">
                    Última actualización: {result.lastUpdate}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-subheading font-bold text-sm uppercase tracking-wide text-brand-blue-900">
                    {result.statusLabel}
                  </span>
                </div>
              </div>

              {/* Status Timeline */}
              <div className="space-y-4">
                <h3 className="font-subheading text-xs font-bold uppercase tracking-widest text-brand-blue-500/80">
                  Trazabilidad de la Ruta
                </h3>

                <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-brand-blue-200">
                  {result.timeline.map((step, idx) => (
                    <div key={idx} className="relative group">
                      <div
                        className={`absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          step.completed
                            ? 'bg-brand-blue-500 text-brand-yellow-500 shadow-md'
                            : 'bg-white border-2 border-brand-blue-200 text-brand-blue-300'
                        }`}
                      >
                        {step.completed ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-brand-blue-300" />
                        )}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-subheading text-sm font-bold uppercase tracking-tight text-brand-blue-900">
                            {step.title}
                          </h4>
                          <span className="text-2xs font-mono text-brand-blue-500 font-bold bg-brand-blue-50 px-2 py-0.5 rounded">
                            {step.time}
                          </span>
                        </div>
                        <p className="font-sans text-xs text-brand-blue-900/70">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Help & WhatsApp Button */}
              <div className="pt-6 border-t border-brand-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-brand-blue-50/50 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 rounded-b-2xl">
                <div className="text-xs text-brand-blue-900/80 space-y-0.5 text-center sm:text-left">
                  <p className="font-bold text-brand-blue-900">¿Tenés dudas sobre este paquete?</p>
                  <p>Coordinamos directo desde la base de Friuli 1972.</p>
                </div>

                <a
                  href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=Hola%20Envíos%20DosRuedas!%20Quiero%20consultar%20por%20el%20paquete%20código%20${result.code}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-subheading text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
