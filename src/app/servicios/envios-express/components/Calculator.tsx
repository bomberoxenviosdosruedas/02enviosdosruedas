'use client';

import React, { useState, useEffect } from 'react';
import { LayoutGrid, AlertCircle, ShoppingBag, Coins, HelpCircle, ArrowRightLeft, ShieldAlert } from 'lucide-react';

const zones = [
  { id: 'centro', name: 'Centro', weight: 1 },
  { id: 'chauvin', name: 'Chauvín (Z. San José)', weight: 1.5 },
  { id: 'laperla', name: 'La Perla', weight: 1.6 },
  { id: 'constitucion', name: 'Constitución', weight: 3 },
  { id: 'guemes', name: 'Güemes / Playa Grande', weight: 2 },
  { id: 'lostroncos', name: 'Los Troncos / Stella Maris', weight: 2.4 },
  { id: 'puerto', name: 'Puerto Mar del Plata', weight: 3.5 },
  { id: 'mogotes', name: 'Punta Mogotes', weight: 4.5 },
  { id: 'alfar', name: 'Alfar / Playas del Sur', weight: 5.5 },
  { id: 'caisamar', name: 'Caisamar / Pompeya', weight: 3.2 },
  { id: 'terminal', name: 'Terminal vieja / Alberti', weight: 1.8 },
  { id: 'bosque', name: 'Bosque Peralta Ramos', weight: 5.8 },
  { id: 'sierra', name: 'Sierra de los Padres', weight: 9.5 },
  { id: 'batan', name: 'Batán', weight: 8.5 },
  { id: 'camet', name: 'Camet / Las Dalias', weight: 6.5 },
];

const packageTypes = [
  { id: 'document', name: 'Sobre / Documentación', desc: 'Contratos, trámites, llaves, facturas (Hasta 1 kg)', baseMod: 0 },
  { id: 'box', name: 'Caja Mediana / Bolsa', desc: 'Indumentaria, calzado, comida, repuestos (Hasta 5 kg)', baseMod: 600 },
  { id: 'heavy', name: 'Bulto Pesado / Caja grande', desc: 'Lote de productos, mercaderia pesada (Hasta 15 kg)', baseMod: 1500 },
];

const serviceModes = [
  { id: 'lowcost', name: 'Envíos LowCost', desc: 'Ingresa antes de 13hs, entrega por la tarde', priceMod: -400, badge: 'Ahorro' },
  { id: 'mlflex', name: 'MercadoLibre Flex', desc: 'Cumplimiento estricto en el día con firma digital', priceMod: 800, badge: 'SLA Ideal' },
  { id: 'express', name: 'Envío Express 2H', desc: 'Asignación exclusiva, entrega menor a 120 minutos', priceMod: 1800, badge: 'Prioritario' },
];

function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

interface CalculatorProps {
  onQuoteChange?: (quote: any) => void;
}

export default function Calculator({ onQuoteChange }: CalculatorProps) {
  const [origin, setOrigin] = useState('centro');
  const [destination, setDestination] = useState('guemes');
  const [packageType, setPackageType] = useState('box');
  const [serviceMode, setServiceMode] = useState('lowcost');
  const [insuranceEnabled, setInsuranceEnabled] = useState(false);
  const [declaredValue, setDeclaredValue] = useState(25000); // Standard product value in ARS

  // Rates formulas
  const baseRate = 1800; // Base flat rate
  const originWeight = zones.find(z => z.id === origin)?.weight || 1;
  const destWeight = zones.find(z => z.id === destination)?.weight || 1;
  
  // Distance / Zone differential factor
  const distanceFactor = Math.abs(originWeight - destWeight) * 480;

  const typeMod = packageTypes.find(p => p.id === packageType)?.baseMod || 0;
  const serviceMod = serviceModes.find(s => s.id === serviceMode)?.priceMod || 0;
  
  // 1.5% premium on declared value if insurance enabled
  const insurancePremium = insuranceEnabled ? Math.max(300, Math.round(declaredValue * 0.015)) : 0;

  // Final sum
  const subtotal = baseRate + distanceFactor + typeMod + serviceMod;
  // Minimize math crashes
  const totalCost = Math.max(1200, Math.round(subtotal + insurancePremium));

  const originName = zones.find(z => z.id === origin)?.name || '';
  const destinationName = zones.find(z => z.id === destination)?.name || '';
  const pTypeName = packageTypes.find(p => p.id === packageType)?.name || '';
  const sModeName = serviceModes.find(s => s.id === serviceMode)?.name || '';

  // Trigger callback so that the AI Assistant receives context about active user pricing simulations!
  useEffect(() => {
    if (onQuoteChange) {
      onQuoteChange({
        origen: originName,
        destino: destinationName,
        paquete: pTypeName,
        modalidad: sModeName,
        seguro_activo: insuranceEnabled,
        valor_declarado: insuranceEnabled ? `$${declaredValue} ARS` : 'No asegurado',
        costo_total_pesos: `$${totalCost} ARS`
      });
    }
  }, [origin, destination, packageType, serviceMode, insuranceEnabled, declaredValue, totalCost]);

  // Generate perfect WhatsApp booking text link
  const getWhatsAppLink = () => {
    const phone = '5492236602699';
    const text = `¡Hola Envíos DosRuedas! He calculado una tarifa en el cotizador de su web y quiero coordinar:
📍 *Origen:* ${originName}
🏁 *Destino:* ${destinationName}
📦 *Tipo de Paquete:* ${pTypeName}
⚡ *Modalidad:* ${sModeName}
🔒 *Seguro:* ${insuranceEnabled ? `Habilitado (Declarado por $${formatNumber(declaredValue)})` : 'No'}
💵 *Total Estimado:* $${formatNumber(totalCost)} ARS

¿Tienen cadetes disponibles para realizar este despacho en este momento?`;
    
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="cotizador" className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-b border-brand-blue-50">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="block text-sm font-subheading text-brand-blue uppercase tracking-widest">
            TARIFADOR INSTANTÁNEO
          </span>
          <h2 className="text-4xl font-display uppercase tracking-wide text-brand-blue sm:text-5xl">
            Cotizador de Tarifas <span className="underline decoration-brand-yellow decoration-heavy">Express</span>
          </h2>
          <p className="text-brand-blue-400 text-base leading-relaxed">
            Estima el valor neto del flete o moto mensajería ingresando las zonas en Mar del Plata. Tarifas transparentes al instante sin sorpresas.
          </p>
        </div>

        {/* Form area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 bg-brand-white-50 border border-brand-blue-100 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
            
            {/* Zones setup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-subheading text-brand-blue uppercase tracking-wider mb-2">
                  📍 Punto de Origen (Retiro)
                </label>
                <select 
                  value={origin} 
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full bg-white border border-brand-blue-200 rounded-xl px-3 py-2.5 text-sm text-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                >
                  {zones.map(z => (
                    <option key={z.id} value={z.id}>{z.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-subheading text-brand-blue uppercase tracking-wider mb-2">
                  🏁 Punto de Destino (Entrega)
                </label>
                <select 
                  value={destination} 
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-white border border-brand-blue-200 rounded-xl px-3 py-2.5 text-sm text-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                >
                  {zones.map(z => (
                    <option key={z.id} value={z.id}>{z.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Helper */}
            {origin === destination && (
              <div className="bg-brand-yellow-50 border border-brand-yellow-50 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-brand-yellow-500">
                <AlertCircle className="h-4 w-4 text-brand-yellow-500 flex-shrink-0 mt-0.5" />
                <span>
                  Has seleccionado el mismo punto de origen y destino. Se calculará una tarifa plana mínima de cadetería local directa.
                </span>
              </div>
            )}

            {/* Package classification */}
            <div className="space-y-3">
              <label className="block text-xs font-subheading text-brand-blue uppercase tracking-wider">
                📦 Tipo de Paquete / Volumen
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {packageTypes.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setPackageType(p.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      packageType === p.id 
                        ? 'border-brand-blue bg-brand-white-50/50 ring-1 ring-brand-blue text-brand-blue shadow-sm'
                        : 'border-brand-blue-100 bg-white hover:bg-brand-blue-50 text-brand-blue-600'
                    }`}
                  >
                    <span className="block text-xs font-subheading tracking-wider uppercase leading-none mb-1">
                      {p.name}
                    </span>
                    <span className="block text-[11px] text-brand-blue-400 font-normal leading-tight">
                      {p.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Service Modes */}
            <div className="space-y-3">
              <label className="block text-xs font-subheading text-brand-blue uppercase tracking-wider">
                ⚡ Modalidad del Servicio
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {serviceModes.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setServiceMode(s.id)}
                    className={`p-3.5 rounded-2xl border text-left relative transition-all ${
                      serviceMode === s.id 
                        ? 'border-brand-blue bg-brand-white-50/50 ring-1 ring-brand-blue text-brand-blue shadow-sm'
                        : 'border-brand-blue-100 bg-white hover:bg-brand-blue-50 text-brand-blue-600'
                    }`}
                  >
                    <span className="absolute top-2 right-2 px-1.5 py-0.5 bg-brand-blue text-white rounded text-[8px] font-subheading tracking-wider uppercase">
                      {s.badge}
                    </span>
                    <span className="block text-xs font-subheading tracking-wider uppercase leading-none mb-1 pt-1">
                      {s.name}
                    </span>
                    <span className="block text-[11px] text-brand-blue-400 font-normal leading-tight">
                      {s.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Financial Protection segment */}
            <div className="bg-white border border-brand-blue-100 p-4 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-subheading text-brand-blue uppercase tracking-wider flex items-center gap-1.5">
                    🛡️ Seguro Civil de Carga (Opcional)
                  </h4>
                  <p className="text-[11px] text-brand-blue-300">Ampara el costo neto de productos declarados ante siniestros</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={insuranceEnabled}
                  onChange={(e) => setInsuranceEnabled(e.target.checked)}
                  className="h-4 w-4 text-brand-blue focus:ring-brand-blue border-brand-blue-200 rounded cursor-pointer"
                />
              </div>

              {insuranceEnabled && (
                <div className="pt-2 border-t border-brand-blue-50 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-brand-blue-500">Valor de Mercadería Declarado ($ ARS):</span>
                    <span className="font-bold text-brand-blue font-mono">${formatNumber(declaredValue)}</span>
                  </div>
                  <input 
                    type="range" 
                    min="10000" 
                    max="500000" 
                    step="5000"
                    value={declaredValue}
                    onChange={(e) => setDeclaredValue(Number(e.target.value))}
                    className="w-full accent-brand-blue cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-brand-blue-300 font-mono">
                    <span>Min: $10.000</span>
                    <span>Max: $500.000</span>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Results Side panel */}
          <div className="lg:col-span-5 gradient-blue text-white rounded-3xl overflow-hidden shadow-xl border border-brand-blue-700 flex flex-col justify-between h-full">
            <div>
              <div className="p-6 bg-brand-blue/30 border-b border-brand-blue-700 flex justify-between items-center">
                <div>
                  <h3 className="font-subheading text-lg tracking-wider uppercase text-brand-blue-100">Resumen de Consolidado</h3>
                  <p className="text-[11px] text-brand-blue-200">Estimador sujeto a demoras en puerta &gt;15m</p>
                </div>
                <LayoutGrid className="h-5 w-5 text-brand-yellow" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between text-xs pb-1.5 border-b border-brand-blue-700/60">
                  <span className="text-brand-blue-100">Tarifa Base (Logística):</span>
                  <span className="font-medium text-white font-mono">${formatNumber(baseRate)} ARS</span>
                </div>
                <div className="flex justify-between text-xs pb-1.5 border-b border-brand-blue-700/60">
                  <span className="text-brand-blue-100">Distribución de Rango Geográfico:</span>
                  <span className="font-medium text-white font-mono">+${formatNumber(distanceFactor)} ARS</span>
                </div>
                <div className="flex justify-between text-xs pb-1.5 border-b border-brand-blue-700/60">
                  <span className="text-brand-blue-100">Adicional Categoría Medición Paquete:</span>
                  <span className="font-medium text-white font-mono">+${formatNumber(typeMod)} ARS</span>
                </div>
                <div className="flex justify-between text-xs pb-1.5 border-b border-brand-blue-700/60">
                  <span className="text-brand-blue-100">Variación por Velocidad / SLA:</span>
                  <span className={`${serviceMod < 0 ? 'text-brand-blue-200' : 'text-white'} font-medium font-mono`}>
                    {serviceMod >= 0 ? '+' : '-'}${formatNumber(Math.abs(serviceMod))} ARS
                  </span>
                </div>
                
                {insuranceEnabled && (
                  <div className="flex justify-between text-xs pb-1.5 border-b border-brand-blue-700/60 text-brand-yellow font-bold">
                    <span>Prima Adicional Seguros (1.5%):</span>
                    <span className="font-mono">+${formatNumber(insurancePremium)} ARS</span>
                  </div>
                )}

                {/* Final calculation big display */}
                <div className="pt-2 pb-1 space-y-1">
                  <span className="block text-center text-xs text-brand-blue-100 font-subheading tracking-wider uppercase">
                    MONTO TOTAL ESTIMADO (NETO)
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-center text-brand-yellow font-mono">
                    ${formatNumber(totalCost)}{' '}
                    <span className="text-xs uppercase text-brand-blue-100 font-sans tracking-wide">ars</span>
                  </div>
                </div>

                {/* Visual badges */}
                <div className="bg-brand-blue/30 border border-brand-blue-700 rounded-2xl p-4 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-brand-yellow font-bold">
                    <Coins className="h-4 w-4" />
                    <span className="font-subheading tracking-wider text-sm uppercase">Métodos de Pago Digitales</span>
                  </div>
                  <p className="text-[11px] text-brand-blue-50 leading-relaxed font-normal">
                    Aceptamos efectivo al retiro/entrega, <strong>Cuenta DNI</strong> (obtené comprobantes al instante), <strong>Mercado Pago</strong> o Transferencias inmediatas.
                  </p>
                </div>

                {/* Primary WhatsApp Booking Action */}
                <a 
                  href={getWhatsAppLink()}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-brand-yellow hover:bg-brand-yellow/95 text-brand-blue text-center font-subheading text-xl py-4 rounded-xl block transition-transform hover:scale-[1.015] shadow-lg shadow-brand-yellow/10 tracking-wider uppercase"
                >
                  🚴 COORDINAR PAQUETE POR WHATSAPP
                </a>

                <p className="text-[10px] text-brand-blue-200 text-center font-normal leading-normal">
                  Las cotizaciones de este simulador son orientativas. Esperas superiores a los 15 minutos en puerta están sujetas a reajustes por cadetería.
                </p>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
