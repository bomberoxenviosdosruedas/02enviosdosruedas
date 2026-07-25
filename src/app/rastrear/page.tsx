'use client';

import React from 'react';
import { Search } from 'lucide-react';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('@/src/components/ui/LeafletMap'), { ssr: false });

export default function RastrearPage() {
  return (
    <div className="w-full bg-brand-white-50 min-h-screen relative overflow-hidden">

      {/* 2. Hero Search & Tracking Command Section */}
      <section className="bg-brand-blue-700 px-6 md:px-16 py-12 md:py-24 relative overflow-hidden">
        {/* Background Bezel Overlay */}
        <div className="absolute inset-0 bg-brand-blue-50/10 mix-blend-overlay pointer-events-none" />

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">

          {/* Left Column (60%) */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-700 border-2 border-brand-yellow-500 text-brand-yellow-500 font-subheading tracking-[0.1em] text-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-yellow-500 animate-pulse" />
              CENTRO DE CONTROL MDQ // VIGENCIA 2026
            </div>

            <h1 className="font-display text-4xl md:text-6xl uppercase tracking-[-0.02em] leading-[1.0] text-brand-white-50">
              RASTREÁ TU PAQUETE EN TIEMPO REAL POR MAR DEL PLATA
            </h1>

            <p className="text-brand-blue-100 font-sans text-lg max-w-[65ch] leading-relaxed">
              Ingresá tu número de seguimiento (ej: ED-2026-8841) y mirá la ubicación exacta de tu rider en las calles de la ciudad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="relative flex-1 group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-brand-blue-300 group-focus-within:text-brand-blue-700 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Ej: ED-2026-8841"
                  className="w-full h-14 pl-12 pr-4 rounded-xl bg-brand-white-50 border-2 border-brand-blue-100 text-brand-blue-700 placeholder:text-brand-blue-300 focus:outline-none focus:border-brand-blue-700 focus:ring-4 focus:ring-brand-blue-700/10 transition-all font-mono uppercase"
                />
              </div>
              <button className="h-14 px-8 rounded-full bg-brand-yellow-500 text-brand-blue-700 font-subheading tracking-[0.1em] text-lg flex items-center justify-center gap-3 hover:bg-brand-yellow-400 transition-colors shadow-sm whitespace-nowrap cursor-pointer">
                RASTREAR AHORA
                <span className="w-8 h-8 rounded-full bg-brand-blue-700/10 flex items-center justify-center shrink-0">
                  <Search className="h-4 w-4 text-brand-blue-700" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column (40%) - Floating Status Card */}
          <div className="md:col-span-5 md:pl-8">
            {/* Double Bezel Outer */}
            <div className="bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-float-shadow backdrop-blur-sm transform md:rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
              {/* Double Bezel Inner */}
              <div className="bg-brand-white-50 rounded-xl p-6 border border-brand-blue-50/50 shadow-sm flex flex-col gap-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-brand-blue-400 text-xs font-subheading tracking-[0.1em] mb-1">ORDEN ACTIVA</p>
                    <p className="font-mono text-xl text-brand-blue-700 font-bold">ED-2026-8841</p>
                  </div>
                  <span className="bg-brand-yellow-500/20 text-brand-blue-700 font-subheading px-2 py-1 rounded text-sm tracking-wider">
                    EXPRESS 0-3 KM
                  </span>
                </div>

                <div className="h-px bg-brand-blue-100 w-full" />

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-blue-50 rounded-full flex items-center justify-center overflow-hidden border border-brand-blue-100">
                    <svg className="w-6 h-6 text-brand-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-bold text-brand-blue-700">Martín G.</p>
                    <p className="text-brand-blue-400 text-sm font-sans">Moto #14</p>
                  </div>
                </div>

                <div className="mt-2 bg-brand-blue-50 p-4 rounded-lg flex justify-between items-center border border-brand-blue-100">
                   <div>
                     <p className="text-brand-blue-400 text-xs font-subheading tracking-[0.1em]">ESTADO</p>
                     <p className="font-sans text-brand-blue-700 text-sm font-semibold">EN CAMINO</p>
                   </div>
                   <div className="text-right">
                     <p className="text-brand-blue-400 text-xs font-subheading tracking-[0.1em]">ETA</p>
                     <p className="font-mono text-brand-blue-700 text-xl font-bold">12 MIN</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Live Telemetry & Route Map Section */}
      <section className="bg-brand-white-50 px-6 md:px-16 py-16">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-display text-3xl uppercase tracking-[-0.02em] text-brand-blue-700 mb-8">
            MAPA EN VIVO Y ESTADO DEL ENVÍO
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Map Column (7) */}
            <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[400px] bg-brand-blue-50 rounded-2xl border border-brand-blue-100 relative overflow-hidden flex items-center justify-center">
              <MapComponent />

              {/* Fake UI overlays on map */}
              <div className="absolute top-4 left-4 bg-brand-white-50/90 backdrop-blur-sm p-3 rounded-xl border border-brand-blue-100 shadow-sm z-[1000] pointer-events-none">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-brand-blue-700" />
                  <span className="font-subheading text-xs tracking-wider text-brand-blue-400">ORIGEN</span>
                </div>
                <p className="font-sans text-sm font-medium text-brand-blue-700">Friuli 1972</p>
                <p className="text-brand-blue-400 text-xs font-sans">Colinas de Peralta Ramos</p>
              </div>

              <div className="absolute bottom-4 left-4 bg-brand-white-50/90 backdrop-blur-sm p-3 rounded-xl border border-brand-blue-100 shadow-sm z-[1000] pointer-events-none">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-brand-yellow-500" />
                  <span className="font-subheading text-xs tracking-wider text-brand-blue-400">DESTINO</span>
                </div>
                <p className="font-sans text-sm font-medium text-brand-blue-700">Güemes 2450</p>
                <p className="text-brand-blue-400 text-xs font-sans">Chauvín</p>
              </div>

              <div className="absolute top-4 right-4 bg-brand-blue-700 text-brand-white-50 px-3 py-2 rounded-lg font-mono font-bold shadow-md z-[1000] flex items-center gap-2 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-brand-yellow-500 animate-pulse" />
                38 km/h
              </div>
            </div>

            {/* Stepper Column (5) */}
            <div className="lg:col-span-5">
              <div className="bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl h-full shadow-float-shadow">
                <div className="bg-brand-white-50 rounded-xl p-8 border border-brand-blue-50/50 shadow-sm h-full flex flex-col">
                  <h3 className="font-subheading text-xl tracking-widest text-brand-blue-700 mb-8 border-b border-brand-blue-100 pb-4">LÍNEA DE TIEMPO</h3>

                  <div className="flex-1 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[11px] top-2 bottom-6 w-[2px] bg-brand-blue-100 z-0" />

                    <div className="space-y-8 relative z-10">
                      {/* Step 1: Completed */}
                      <div className="flex gap-6 group">
                        <div className="w-6 h-6 rounded-full bg-brand-yellow-500 flex items-center justify-center shrink-0 border-2 border-brand-white-50 shadow-sm z-10 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-brand-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-sans font-bold text-brand-blue-700">Orden recibida</p>
                          <p className="text-brand-blue-400 text-sm font-mono mt-1">14:10 hs (Friuli Hub)</p>
                        </div>
                      </div>

                      {/* Step 2: Completed */}
                      <div className="flex gap-6 group">
                        <div className="w-6 h-6 rounded-full bg-brand-yellow-500 flex items-center justify-center shrink-0 border-2 border-brand-white-50 shadow-sm z-10 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-brand-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-sans font-bold text-brand-blue-700">Paquete asignado a rider</p>
                          <p className="text-brand-blue-400 text-sm font-mono mt-1">14:15 hs (Martín G.)</p>
                        </div>
                      </div>

                      {/* Step 3: Active */}
                      <div className="flex gap-6 group">
                        <div className="w-6 h-6 rounded-full bg-brand-blue-700 flex items-center justify-center shrink-0 border-2 border-brand-white-50 shadow-sm z-10 mt-0.5 relative">
                          <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow-500 animate-pulse" />
                          <span className="absolute inset-0 rounded-full border border-brand-yellow-500 animate-ping opacity-50" />
                        </div>
                        <div>
                          <p className="font-sans font-bold text-brand-blue-700">En tránsito por Av. Paso</p>
                          <p className="text-brand-blue-700 font-medium text-sm font-mono mt-1 bg-brand-yellow-500/20 inline-block px-2 py-0.5 rounded">ETA 14:32 hs</p>
                        </div>
                      </div>

                      {/* Step 4: Pending */}
                      <div className="flex gap-6 group opacity-50">
                        <div className="w-6 h-6 rounded-full bg-brand-blue-100 flex items-center justify-center shrink-0 border-2 border-brand-white-50 z-10 mt-0.5">
                        </div>
                        <div>
                          <p className="font-sans text-brand-blue-700">Entrega confirmada en destino</p>
                          <p className="text-brand-blue-400 text-sm font-mono mt-1">--:-- hs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service Details & Receipt Drawer Section */}
      <section className="bg-brand-blue-50 px-6 md:px-16 py-12 border-t border-brand-blue-100">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Card 1: Tarifa */}
            <div className="bg-brand-blue-50/80 border border-brand-blue-100 p-1.5 rounded-[20px] shadow-sm">
              <div className="bg-brand-white-50 rounded-[14px] p-5 border border-brand-blue-50/50 shadow-sm h-full hover:shadow-md transition-shadow">
                <p className="font-subheading text-brand-blue-400 text-sm tracking-widest mb-2">TARIFA APLICADA</p>
                <p className="font-mono text-2xl font-bold text-brand-blue-700 mb-1">$3.700 ARS</p>
                <p className="text-xs text-brand-blue-400 font-sans">Base Express 0-3 km</p>
              </div>
            </div>

            {/* Card 2: Distancia */}
            <div className="bg-brand-blue-50/80 border border-brand-blue-100 p-1.5 rounded-[20px] shadow-sm">
              <div className="bg-brand-white-50 rounded-[14px] p-5 border border-brand-blue-50/50 shadow-sm h-full hover:shadow-md transition-shadow">
                <p className="font-subheading text-brand-blue-400 text-sm tracking-widest mb-2">DISTANCIA CALCULADA</p>
                <p className="font-mono text-2xl font-bold text-brand-blue-700 mb-1">2.8 km</p>
                <p className="text-xs text-brand-blue-400 font-sans">vía OSRM engine</p>
              </div>
            </div>

            {/* Card 3: PIN */}
            <div className="bg-brand-blue-50/80 border border-brand-blue-100 p-1.5 rounded-[20px] shadow-sm">
              <div className="bg-brand-white-50 rounded-[14px] p-5 border border-brand-blue-50/50 shadow-sm h-full hover:shadow-md transition-shadow">
                <p className="font-subheading text-brand-blue-400 text-sm tracking-widest mb-2">FIRMA DIGITAL (PIN)</p>
                <div className="flex gap-2 mb-1">
                  {['7', '4', '9', '2'].map((digit, i) => (
                    <span key={i} className="w-8 h-10 bg-brand-blue-50 flex items-center justify-center rounded font-mono text-xl font-bold text-brand-blue-700 border border-brand-blue-100">
                      {digit}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-brand-blue-400 font-sans mt-2">Brindar al recibir</p>
              </div>
            </div>

            {/* Card 4: Soporte */}
            <div className="bg-brand-blue-50/80 border border-brand-blue-100 p-1.5 rounded-[20px] shadow-sm">
              <div className="bg-brand-white-50 rounded-[14px] p-5 border border-brand-blue-50/50 shadow-sm h-full flex flex-col justify-center">
                <p className="font-subheading text-brand-blue-400 text-sm tracking-widest mb-3">SOPORTE DIRECTO</p>
                <button className="w-full py-3 px-4 rounded-full bg-brand-yellow-500 text-brand-blue-700 font-subheading tracking-[0.1em] text-sm flex items-center justify-center gap-2 hover:bg-brand-yellow-400 transition-colors shadow-sm whitespace-nowrap cursor-pointer">
                  <svg className="w-4 h-4 text-brand-blue-700" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  CONTACTAR A RIDER VÍA WHATSAPP
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA Final & Support Section */}
      <section className="bg-brand-blue-700 px-6 md:px-16 py-16 md:py-24 relative overflow-hidden">
        {/* Background Bezel Overlay */}
        <div className="absolute inset-0 bg-brand-blue-50/5 mix-blend-overlay pointer-events-none" />

        <div className="max-w-[900px] mx-auto relative z-10">
          <div className="bg-brand-white-50 rounded-[2rem] p-8 md:p-12 shadow-elevated text-center border border-brand-blue-100">
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-[-0.02em] text-brand-blue-700 mb-4">
              ¿QUERÉS ENVIAR OTRO PAQUETE HOY MISMO?
            </h2>
            <p className="font-sans text-brand-blue-400 text-lg mb-10 max-w-[50ch] mx-auto">
              Cotizá en 30 segundos sin registrarte. Tarifas transparentes 2026.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="h-14 px-8 rounded-full bg-brand-yellow-500 text-brand-blue-700 font-subheading tracking-[0.1em] text-lg flex items-center justify-center hover:bg-brand-yellow-400 transition-colors shadow-sm w-full sm:w-auto cursor-pointer">
                COTIZÁ EXPRESS AHORA
              </button>
              <button className="h-14 px-8 rounded-full bg-transparent border-2 border-brand-blue-700 text-brand-blue-700 font-subheading tracking-[0.1em] text-lg flex items-center justify-center hover:bg-brand-blue-50 transition-colors w-full sm:w-auto cursor-pointer">
                VER PLANES LOW COST
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
