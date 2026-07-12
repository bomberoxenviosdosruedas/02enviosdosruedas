'use client';

import React from 'react';
import { MapPin, Building, ShieldCheck, Eye, Compass, Navigation } from 'lucide-react';

const COVERAGE_DATA = [
  { zone: 'Centro & Terminal Vieja', delay: '30 - 45 min', price: 'Mínimo', cut: '20:00 hs' },
  { zone: 'Güemes & Playa Grande', delay: '40 - 55 min', price: 'Estándar', cut: '20:00 hs' },
  { zone: 'Constitución & Caisamar', delay: '50 - 65 min', price: 'Medio', cut: '19:30 hs' },
  { zone: 'Puerto & Punta Mogotes', delay: '45 - 60 min', price: 'Estándar', cut: '19:30 hs' },
  { zone: 'Alfar & Bosque Peralta Ramos', delay: '60 - 80 min', price: 'Extendido', cut: '18:30 hs' },
  { zone: 'Sierra de los Padres & Batán', delay: '90 - 120 min', price: 'Interurbano', cut: '17:00 hs' },
];

export default function WarehouseMap() {
  return (
    <section id="nosotros" className="py-14 bg-white px-4 sm:px-6 lg:px-8 border-b border-brand-blue-50">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="block text-xs font-bold text-brand-blue-500 uppercase tracking-widest">
            INFRAESTRUCTURA Y GEOGRAFÍA MDQ
          </span>
          <h2 className="text-3xl font-black font-display tracking-tight text-brand-ink sm:text-4xl">
            Sede Central y <span className="text-brand-blue-400">Zonas de Cobertura</span>
          </h2>
          <p className="text-brand-blue-400 text-sm sm:text-base">
            Operamos estratégicamente desde nuestra central para garantizar la consolidación más rápida hacia cualquier barrio latitudinal de la costa marplatense.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Warehouse Friuli card */}
          <div className="lg:col-span-5 bg-brand-blue-700 text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-md border border-brand-blue-700">
            <div className="space-y-4">
              <div className="inline-flex h-9 w-9 bg-brand-blue-400/10 text-brand-blue-300 rounded-xl items-center justify-center border border-brand-blue-400/20">
                <Building className="h-5 w-5" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display font-black text-2xl tracking-tight leading-tight">
                  Depósito de Consolidación Friuli 1972
                </h3>
                <p className="text-xs text-brand-blue-500 leading-relaxed font-normal">
                  Nuestra sede está equipada para recibir pallets de mercadería de e-commerce, resguardarla contra la humedad atlántica en estanterías reforzadas y despachar por cadetería local articulada.
                </p>
              </div>

              {/* Warehouse features list */}
              <div className="space-y-3 pt-2">
                <div className="flex gap-2.5 items-start text-xs">
                  <Eye className="h-4 w-4 text-brand-blue-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-brand-blue-100">Cámaras Blindadas 24hs:</strong> Grabación continua de seguridad que vigila la manipulación del Pick & Pack en todo momento.
                  </div>
                </div>

                <div className="flex gap-2.5 items-start text-xs">
                  <ShieldCheck className="h-4 w-4 text-brand-blue-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-brand-blue-100">Seguridad Civil Homologada:</strong> Seguro corporativo multirriesgo que ampara tu stock activo depositado por cuenta corriente.
                  </div>
                </div>

                <div className="flex gap-2.5 items-start text-xs">
                  <Navigation className="h-4 w-4 text-brand-blue-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-brand-blue-100">Retiros Consolidados Gratuitos:</strong> Para empresas adheridas, recolectamos lotes de mercaderías sin costo para ingresarlas al ruteo.
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-brand-blue-700/80 pt-4 flex gap-3 text-xs items-center text-brand-blue-300">
              <MapPin className="h-5 w-5 text-brand-blue-300 flex-shrink-0" />
              <span>Dirección física: <strong>Friuli 1972 (Zona Sur Habitual), Mar del Plata, Argentina</strong></span>
            </div>
          </div>

          {/* Zones Delay Directory Table */}
          <div className="lg:col-span-7 bg-brand-white-50 border border-brand-blue-100 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="font-bold text-brand-ink text-lg flex items-center gap-2">
                <Compass className="h-5 w-5 text-brand-blue-400" />
                Planilla de Despacho y Tiempos de Corte
              </h3>
              <p className="text-xs text-brand-blue-400 font-normal">
                Nuestros estimadores de tránsito promedio aseguran que puedas programar la llegada de paquetería de manera transparente y mantener la fidelidad de tu negocio en verde.
              </p>
            </div>

            {/* Table layout */}
            <div className="overflow-x-auto rounded-xl border border-brand-blue-100 bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-blue-50 text-[10px] text-brand-blue-400 uppercase tracking-wider font-bold">
                    <th className="p-3">Zona de Destino</th>
                    <th className="p-3">Demora Promedio</th>
                    <th className="p-3">Rango Fee</th>
                    <th className="p-3">Hora de Corte</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-blue-50 text-xs text-brand-blue-600">
                  {COVERAGE_DATA.map((item, idx) => (
                    <tr key={idx} className="hover:bg-brand-white-50/40">
                      <td className="p-3 font-semibold text-brand-ink">{item.zone}</td>
                      <td className="p-3 font-mono text-brand-blue-500">{item.delay}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 bg-brand-blue-200 rounded text-[10px] font-medium text-brand-blue-500">
                          {item.price}
                        </span>
                      </td>
                      <td className="p-3 text-brand-blue-500 font-bold">{item.cut}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[10px] text-brand-blue-500 italic font-normal leading-normal select-none">
              * Para destinos en Sierra de los Padres o Batán, aconsejamos contactarse antes del mediodía para acoplarse eficientemente al lote general del camión utilitario rural interurbano.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
