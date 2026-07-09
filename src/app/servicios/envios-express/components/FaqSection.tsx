'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Lock, FileText, Compass } from 'lucide-react';

const FAQS_POOL = [
  {
    k: 'peso',
    q: '¿Cuál es el límite máximo de peso por cada envío?',
    a: 'Nuestra flota principal de moto mensajería transporta bultos pequeños, sobres y paquetes de hasta 15 kg. Si necesitás movilizar cargas superiores, bultos industriales o mudanzas, te sugerimos contactarnos previamente para coordinar un flete o utilitario corporativo habilitado.'
  },
  {
    k: 'lluvia',
    q: '¿Qué sucede si hay lluvia o temporales fuertes en la costa?',
    a: 'No detenemos operaciones por llovizna costera habitual o niebla marítima. Nuestros cadetes cuentan con mochilas estancas y bolsos impermeables protectivos de alta gama. En caso de alertas meteorológicas extremas (vientos gales costeros fuertes de más de 65 km/h o granizo severo), priorizamos la vida humana de los mensajeros, deteniendo las motos temporalmente y reprogramando lotes con aviso inmediato al cliente.'
  },
  {
    k: 'pagos',
    q: '¿Qué medios de pago están disponibles y qué es Cuenta DNI?',
    a: 'Ofrecemos máxima flexibilidad: Efectivo al retirar/entregar, Mercado Pago y Transferencia bancaria directa con comprobante inmediato. También soportamos cobros vía Cuenta DNI (la billetera digital líder de la Provincia de Buenos Aires), facilitando promociones bancarias vigentes para tus compradores.'
  },
  {
    k: 'ley25326',
    q: '¿Cómo garantizan la privacidad física y la Ley de Datos Personales 25.326?',
    a: 'Cumplimos estrictamente con la Ley de Protección de Datos de la República Argentina (Ley 25.326). La correspondencia urbana es inviolable. Ningún cadete o personal de clasificación tiene la atribución legal de abrir bultos sellados. Además, almacenamos transitoriamente los domicilios frecuentes para acelerar tus cotizaciones, resguardados con cifrado SSL sin compartir registros con terceros.'
  },
  {
    k: 'prohibido',
    q: '¿Qué objetos o sustancias tienen prohibido el despacho?',
    a: 'De acuerdo con las normativas argentinas, queda prohibido el transporte de inflamables, aerosoles presurizados, corrosivos, sustancias estupefacientes ilícitas, armas u objetivos prohibidos y sumas de dinero en efectivo libre sin declarar por seguros civil. Toda encomienda debe ajustarse al marco regulatorio civil vigente.'
  },
];

export default function FaqSection() {
  const [openKey, setOpenKey] = useState<string | null>('peso');

  const toggle = (key: string) => {
    setOpenKey(openKey === key ? null : key);
  };

  return (
    <section id="faqs" className="py-14 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex h-9 w-9 rounded-xl bg-cyan-100 text-cyan-600 items-center justify-center font-bold">
            ?
          </div>
          <h2 className="text-3xl font-black font-display tracking-tight text-brand-ink">
            Preguntas <span className="text-cyan-500">Frecuentes</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">
            Despejá tus dudas sobre seguros, demoras climáticas, recargos y resguardo de mercaderías.
          </p>
        </div>

        {/* Accordion list */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm divide-y divide-slate-100">
          {FAQS_POOL.map((item) => {
            const isOpen = openKey === item.k;
            return (
              <div key={item.k} className="transition-colors hover:bg-slate-55/40">
                <button
                  onClick={() => toggle(item.k)}
                  className="w-full px-6 py-4.5 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="font-bold text-brand-ink text-xs sm:text-sm flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-cyan-500 flex-shrink-0" />
                    {item.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-xs text-slate-550 leading-relaxed font-normal bg-slate-50/50">
                    <p className="whitespace-pre-line">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Security / Legal sub block */}
        <div className="bg-slate-900 text-slate-300 p-5 rounded-2xl flex flex-col sm:flex-row items-center gap-4 border border-slate-800">
          <div className="h-10 w-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 flex-shrink-0">
            <Lock className="h-5 w-5" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-white text-xs uppercase tracking-wide">Cumplimiento Normativo ARS</h4>
            <p className="text-[10px] text-slate-450 leading-relaxed font-normal">
              Contratos asegurados civilmente mediante cláusulas claras. Ninguna información de tránsito de tus clientes será vendida ni compartida, de acuerdo con la Dirección Nacional de Protección de Datos Personales.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
