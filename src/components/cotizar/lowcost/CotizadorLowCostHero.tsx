'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navigation, Clock, ShieldCheck, ShoppingBag, Truck } from 'lucide-react';

const ORIGINES = [
  'Centro de Distribución (Av. Colón 1200)',
  'Puerto Mar del Plata',
  'Terminal Ferroautomotora',
  'Paseo Aldrey',
  'La Perla (Av. Independencia)',
  'Av. Constitución 5500',
  'B° Constituyentes',
];

const DESTINOS_LOWCOST = [
  { zona: 'Zona Güemes (Centro)', km: 4.2, barrio: 'Güemes' },
  { zona: 'Plaza Mitre / Plaza Colón', km: 5.8, barrio: 'Centro' },
  { zona: 'Plaza Colón', km: 8.5, barrio: 'Centro' },
  { zona: 'B° Stella Maris', km: 3.7, barrio: 'Stella Maris' },
  { zona: 'Punta Mogotes', km: 11.2, barrio: 'Punta Mogotes' },
  { zona: 'Zona San Juan', km: 2.8, barrio: 'San Juan' },
  { zona: 'Hospital Privado Comunidad', km: 4.9, barrio: 'Cerro Peralta' },
  { zona: 'Zona Peralta Ramos', km: 6.7, barrio: 'Peralta Ramos' },
  { zona: 'Zona Batán', km: 15.5, barrio: 'Batán' },
  { zona: 'Camet', km: 18.3, barrio: 'Camet' },
];

const SIMULATED_TRIPS = [
  { origen: 'Centro de Distribución', destino: 'Zona Güemes', distancia: 4.2 },
  { origen: 'Av. Constitución 5500', destino: 'Plaza Mitre', distancia: 5.8 },
  { origen: 'Puerto Mar del Plata', destino: 'Plaza Colón', distancia: 8.5 },
  { origen: 'Terminal Ferroautomotora', destino: 'B° Stella Maris', distancia: 3.7 },
  { origen: 'La Perla (Av. Libertad)', destino: 'Punta Mogotes', distancia: 11.2 },
  { origen: 'Paseo Aldrey', destino: 'Zona San Juan', distancia: 2.8 },
  { origen: 'B° Constituyentes', destino: 'Hospital Privado Comunidad', distancia: 4.9 },
];

function calcLowCostPrice(d: number): number {
  if (d <= 3) return 3000;
  if (d <= 5) return 4000;
  if (d <= 7) return 5300;
  if (d <= 10) return 7000;
  return 7000 + Math.ceil(d - 10) * 700;
}

export default function CotizadorLowCostHero() {
  const [origen, setOrigen] = useState(ORIGINES[0]);
  const [destino, setDestino] = useState(DESTINOS_LOWCOST[0]);
  const [distanceKm] = useState(destino.km);
  const [price] = useState(calcLowCostPrice(destino.km));

  // Simulación de viaje en vivo
  const [trip, setTrip] = useState(SIMULATED_TRIPS[0]);
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % SIMULATED_TRIPS.length;
      setTrip(SIMULATED_TRIPS[index]);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="cotizador-lowcost-hero"
      className="relative w-full pt-16 pb-12 lg:pt-20 lg:pb-16 overflow-hidden"
      style={{
        minHeight: '75dvh',
        background: 'var(--surface-tint-blue)',
      }}
    >
      {/* Glow orbs - matches design spec */}
      <div
        className="absolute top-[-128px] left-[-128px] w-[384px] h-[384px] rounded-full pointer-events-none"
        style={{
          background: 'var(--brand-yellow)',
          opacity: 0.35,
          filter: 'blur(100px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-160px] right-[-128px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'var(--brand-blue)',
          opacity: 0.25,
          filter: 'blur(130px)',
        }}
        aria-hidden="true"
      />

      {/* Border accent */}
      <div className="absolute inset-0 pointer-events-none" style={{ border: '1px solid rgba(6,54,165,0.05)' }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        {/* Header with badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 lg:mb-10 py-4 border-b"
          style={{ borderColor: 'rgba(6,54,165,0.08)' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit">
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(6,54,165,0.10)',
              }}
            >
              <ShoppingBag className="h-5 w-5" style={{ color: 'var(--brand-blue)' }} />
            </span>
            <span
              className="font-body text-sm font-bold uppercase tracking-[0.15em]"
              style={{ color: 'var(--brand-blue)' }}
            >
              Cotizador LowCost · Mar del Plata
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs font-subheading uppercase tracking-wider">
            <span
              className="px-3 py-1.5 rounded-full"
              style={{
                background: 'rgba(6,54,165,0.08)',
                color: 'var(--brand-blue)',
              }}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-brand-yellow mr-1.5" /> Live
            </span>
            <span
              className="px-3 py-1.5 rounded-full"
              style={{
                background: 'rgba(6,54,165,0.08)',
                color: 'var(--brand-blue)',
              }}
            >
              Hasta 40% ahorro
            </span>
            <span
              className="px-3 py-1.5 rounded-full"
              style={{
                background: 'rgba(6,54,165,0.08)',
                color: 'var(--brand-blue)',
              }}
            >
              Same-Day garantía
            </span>
          </div>
        </motion.div>

        {/* Main Grid - Split Layout: Route Selector (7fr) | Calculator (5fr) */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN: Route Selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 h-full"
          >
            {/* Section Label */}
            <div className="flex items-center justify-between">
              <div>
                <span className="font-subheading text-[10px] uppercase tracking-[0.2em]" style={{ color: 'rgba(6,54,165,0.4)' }}>
                  Selector de Ruta
                </span>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-display uppercase tracking-tighter leading-tight mt-1"
                  style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: 'var(--brand-blue)' }}
                >
                  Configurá tu<br />envío económico
                </motion.h2>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl"
                style={{
                  background: 'rgba(6,54,165,0.05)',
                  border: '1px solid rgba(6,54,165,0.08)',
                }}
              >
                <Navigation className="h-4 w-4" style={{ color: 'var(--brand-blue)' }} />
                <span className="font-body text-xs" style={{ color: 'var(--brand-blue)' }}>
                  <span className="font-bold">Ruteo batch</span> optimizado
                </span>
              </motion.div>
            </div>

            {/* Origin Selector - Glassmorphism Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative overflow-hidden p-6 rounded-2xl border"
              style={{
                background: 'rgba(255,255,255,0.65)',
                backdropFilter: 'blur(16px)',
                borderColor: 'rgba(6,54,165,0.08)',
                boxShadow: '0 2px 12px rgba(6,54,165,0.04), inset 0 1px 0 rgba(255,255,255,0.8)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(6,54,165,0.1)', color: 'var(--brand-blue)' }}>
                  <Navigation className="h-5 w-5" />
                </span>
                <div>
                  <span className="font-subheading text-[10px] uppercase tracking-[0.2em] block mb-0.5" style={{ color: 'rgba(6,54,165,0.4)' }}>
                    Origen de retiro
                  </span>
                  <span className="font-body text-sm font-medium" style={{ color: 'var(--brand-blue)' }}>¿Dónde retiramos tus envíos?</span>
                </div>
              </div>
              <select
                value={origen}
                onChange={(e) => setOrigen(e.target.value)}
                className="w-full appearance-none bg-transparent border-0 focus:outline-none font-body text-base"
                style={{ color: 'var(--brand-blue)', background: 'transparent' }}
              >
                {ORIGINES.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </motion.div>

            {/* Destination Selector - Glassmorphism Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden p-6 rounded-2xl border"
              style={{
                background: 'rgba(255,255,255,0.65)',
                backdropFilter: 'blur(16px)',
                borderColor: 'rgba(6,54,165,0.08)',
                boxShadow: '0 2px 12px rgba(6,54,165,0.04), inset 0 1px 0 rgba(255,255,255,0.8)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(255,236,1,0.15)', color: 'var(--brand-yellow)' }}>
                  <ShoppingBag className="h-5 w-5" />
                </span>
                <div>
                  <span className="font-subheading text-[10px] uppercase tracking-[0.2em] block mb-0.5" style={{ color: 'rgba(6,54,165,0.4)' }}>
                    Zona de entrega
                  </span>
                  <span className="font-body text-sm font-medium" style={{ color: 'var(--brand-blue)' }}>¿A qué zona de MDQ entregamos?</span>
                </div>
              </div>
              <select
                value={destino.zona}
                onChange={(e) => {
                  const selected = DESTINOS_LOWCOST.find((d) => d.zona === e.target.value);
                  if (selected) setDestino(selected);
                }}
                className="w-full appearance-none bg-transparent border-0 focus:outline-none font-body text-base"
                style={{ color: 'var(--brand-blue)', background: 'transparent' }}
              >
                {DESTINOS_LOWCOST.map((d) => (
                  <option key={d.zona} value={d.zona}>
                    {d.zona} · {d.km} km
                  </option>
                ))}
              </select>
              <div className="mt-4 pt-4 flex items-center justify-between border-t text-xs" style={{ borderColor: 'rgba(6,54,165,0.08)', color: 'rgba(6,54,165,0.5)' }}>
                <span className="font-subheading uppercase tracking-wider"><Navigation className="h-3.5 w-3.5 inline-block mr-1" /> <span className="font-bold">{destino.km} km</span></span>
                <span className="font-subheading uppercase tracking-wider"><Truck className="h-3.5 w-3.5 inline-block mr-1" /> Zona: {destino.barrio}</span>
              </div>
            </motion.div>

            {/* Live Trip Simulation Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="relative overflow-hidden p-6 rounded-2xl border"
              style={{
                background: 'rgba(6,54,165,0.05)',
                backdropFilter: 'blur(16px)',
                borderColor: 'rgba(6,54,165,0.10)',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-subheading text-[10px] uppercase tracking-[0.2em]" style={{ color: 'rgba(6,54,165,0.4)' }}>
                  Ruteo batch en vivo
                </span>
                <span className="flex items-center gap-1.5 text-xs font-subheading uppercase tracking-wider" style={{ color: 'var(--brand-yellow)' }}>
                  <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" /> Simulación
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-subheading text-[9px] uppercase tracking-[0.25em] block mb-1" style={{ color: 'rgba(6,54,165,0.5)' }}>Origen</span>
                  <span className="font-body text-sm font-semibold truncate block" style={{ color: 'var(--brand-blue)' }}>{trip.origen}</span>
                </div>
                <div>
                  <span className="font-subheading text-[9px] uppercase tracking-[0.25em] block mb-1" style={{ color: 'rgba(6,54,165,0.5)' }}>Destino</span>
                  <span className="font-body text-sm font-semibold truncate block" style={{ color: 'var(--brand-blue)' }}>{trip.destino}</span>
                </div>
                <div>
                  <span className="font-subheading text-[9px] uppercase tracking-[0.25em] block mb-1" style={{ color: 'rgba(6,54,165,0.5)' }}>Distancia</span>
                  <span className="font-mono text-lg font-bold" style={{ color: 'var(--brand-blue)' }}>{trip.distancia} km</span>
                </div>
                <div>
                  <span className="font-subheading text-[9px] uppercase tracking-[0.25em] block mb-1" style={{ color: 'rgba(6,54,165,0.5)' }}>Tarifa estimada</span>
                  <span className="font-mono text-lg font-bold text-brand-yellow">${calcLowCostPrice(trip.distancia).toLocaleString('es-AR')} ARS</span>
                </div>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { icon: Truck, label: 'Entrega Same-Day', desc: 'Corte 13:00 hs' },
                { icon: Navigation, label: 'Ruteo inteligente', desc: 'OSRM batch MDQ' },
                { icon: ShieldCheck, label: 'Tarifa plana PyME', desc: 'Predecible' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="group p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(12px)',
                    borderColor: 'rgba(6,54,165,0.08)',
                  }}
                >
                  <item.icon className="h-5 w-5 mb-2 group-hover:scale-110 transition-transform" style={{ color: 'var(--brand-yellow)' }} />
                  <span className="font-subheading text-[10px] uppercase tracking-wider block mb-0.5" style={{ color: 'var(--brand-blue)' }}>{item.label}</span>
                  <span className="font-body text-[11px]" style={{ color: 'rgba(6,54,165,0.5)' }}>{item.desc}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Calculator Card - Glassmorphism Double Bezel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Calculator Card - Sticky */}
            <div className="sticky top-20">
              {/* Double Bezel Outer */}
              <div
                className="p-2 rounded-3xl relative overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(6,54,165,0.12)',
                  boxShadow: '0 20px 40px rgba(6,54,165,0.08), 0 0 0 1px rgba(255,255,255,0.1) inset',
                }}
              >
                {/* Double Bezel Inner */}
                <div className="relative p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)' }}>
                  {/* Header */}
                  <div className="flex items-center justify-between border-b mb-6 pb-5" style={{ borderColor: 'rgba(6,54,165,0.08)' }}>
                    <div>
                      <span className="font-subheading text-[10px] uppercase tracking-[0.2em] block mb-1" style={{ color: 'rgba(6,54,165,0.4)' }}>
                        Cálculo Automático
                      </span>
                      <span className="font-headline uppercase tracking-wide text-lg" style={{ color: 'var(--brand-blue)' }}>LOWCOST BATCH</span>
                    </div>
                    <ShoppingBag className="h-7 w-7 shrink-0" style={{ color: 'var(--brand-yellow)' }} />
                  </div>

                  {/* Route Calculation */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: 'rgba(6,54,165,0.06)' }}>
                      <span className="font-subheading text-[10px] uppercase tracking-[0.2em]" style={{ color: 'rgba(6,54,165,0.5)' }}>ORIGEN</span>
                      <span className="font-body text-sm font-semibold truncate max-w-[160px] text-right" style={{ color: 'var(--brand-blue)' }}>{origen}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: 'rgba(6,54,165,0.06)' }}>
                      <span className="font-subheading text-[10px] uppercase tracking-[0.2em]" style={{ color: 'rgba(6,54,165,0.5)' }}>ZONA</span>
                      <span className="font-body text-sm font-semibold truncate max-w-[160px] text-right" style={{ color: 'var(--brand-blue)' }}>{destino.zona}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: 'rgba(6,54,165,0.06)' }}>
                      <span className="font-subheading text-[10px] uppercase tracking-[0.2em]" style={{ color: 'rgba(6,54,165,0.5)' }}>DISTANCIA</span>
                      <span className="font-mono text-xl font-bold" style={{ color: 'var(--brand-blue)' }}>{destino.km} km</span>
                    </div>

                    {/* Price Display - Monumental */}
                    <div className="pt-6 border-t relative" style={{ borderColor: 'rgba(6,54,165,0.08)' }}>
                      <span className="font-subheading text-[10px] uppercase tracking-[0.2em] block mb-2" style={{ color: 'rgba(6,54,165,0.4)' }}>
                        TARIFA FINAL LOWCOST
                      </span>
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 80, damping: 12, delay: 0.2 }}
                        className="flex items-baseline justify-between"
                      >
                        <span className="font-display text-5xl sm:text-6xl font-bold tracking-tight" style={{ color: 'var(--brand-blue)' }}>
                          ${price.toLocaleString('es-AR')}
                        </span>
                        <span className="font-subheading text-[10px] uppercase tracking-[0.2em] ml-4 self-end mb-2" style={{ color: 'var(--brand-yellow)' }}>
                          ARS
                        </span>
                      </motion.div>
                      <span className="font-body text-xs block mt-3" style={{ color: 'rgba(6,54,165,0.5)' }}>
                        Incluye: Retiro + Entrega Same-Day + Seguro
                      </span>
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="pt-4 border-t mb-6" style={{ borderColor: 'rgba(6,54,165,0.08)' }}>
                    <span className="font-subheading text-[10px] uppercase tracking-[0.2em] block mb-3" style={{ color: 'rgba(6,54,165,0.4)' }}>
                      Desglose de tarifa
                    </span>
                    <div className="space-y-2 text-sm font-body">
                      <div className="flex justify-between" style={{ color: 'rgba(6,54,165,0.6)' }}>
                        <span>Base 0-3 km</span>
                        <span className="font-bold" style={{ color: 'var(--brand-blue)' }}>3.000 ARS</span>
                      </div>
                      {destino.km > 3 && <div className="flex justify-between" style={{ color: 'rgba(6,54,165,0.6)' }}>
                        <span>Tramo 3-5 km</span>
                        <span className="font-bold" style={{ color: 'var(--brand-blue)' }}>+1.000 ARS</span>
                      </div>}
                      {destino.km > 5 && <div className="flex justify-between" style={{ color: 'rgba(6,54,165,0.6)' }}>
                        <span>Tramo 5-7 km</span>
                        <span className="font-bold" style={{ color: 'var(--brand-blue)' }}>+1.300 ARS</span>
                      </div>}
                      {destino.km > 7 && <div className="flex justify-between" style={{ color: 'rgba(6,54,165,0.6)' }}>
                        <span>Tramo 7-10 km</span>
                        <span className="font-bold" style={{ color: 'var(--brand-blue)' }}>+1.700 ARS</span>
                      </div>}
                      {destino.km > 10 && (
                        <div className="flex justify-between" style={{ color: 'rgba(6,54,165,0.6)' }}>
                          <span>Excedente +10 km ({Math.ceil(destino.km - 10)} km × $700)</span>
                          <span className="font-bold" style={{ color: 'var(--brand-blue)' }}>+${(Math.ceil(destino.km - 10) * 700).toLocaleString('es-AR')} ARS</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-4 border-t" style={{ borderColor: 'rgba(6,54,165,0.08)' }}>
                    <a
                      href="https://wa.me/542236602699?text=Hola%20necesito%20cotizar%20un%20env%C3%ADo%20LowCost%20desde%20${encodeURIComponent(origen)}%20hacia%20${encodeURIComponent(destino.zona)}%20(${destino.km}%20km)%20%E2%80%93%20Tarifa%20$${price.toLocaleString('es-AR')}%20ARS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full cta-nested-pill bg-brand-yellow-500 text-brand-blue-900 hover:bg-brand-yellow-400 font-bold px-8 py-3.5 cursor-pointer transition-all flex items-center justify-center gap-3"
                      style={{ height: 'var(--control-h-xl)' }}
                    >
                      <span>Confirmar por WhatsApp</span>
                      <span className="cta-nested-icon bg-blue-900/10 text-brand-blue-900">
                        <ShoppingBag className="h-5 w-5 shrink-0" />
                      </span>
                    </a>
                    <button
                      className="cta-nested-pill w-full border-2 text-brand-blue-700 hover:bg-brand-blue-50 font-bold px-8 py-3.5 cursor-pointer transition-all flex items-center justify-center gap-3"
                      style={{ height: 'var(--control-h-xl)', borderColor: 'rgba(6,54,165,0.2)' }}
                    >
                      <span>Agendar retiro masivo</span>
                      <span className="cta-nested-icon bg-brand-blue-50 text-brand-blue-700">
                        <Truck className="h-5 w-5 shrink-0" />
                      </span>
                    </button>
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-6 pt-4 border-t flex items-center justify-center gap-4 text-xs font-subheading uppercase tracking-wider" style={{ borderColor: 'rgba(6,54,165,0.08)', color: 'rgba(6,54,165,0.4)' }}>
                    <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" style={{ color: 'var(--brand-yellow)' }} /> Sin registro obligatorio</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" style={{ color: 'var(--brand-yellow)' }} /> Cotización instantánea</span>
                    <span className="flex items-center gap-1.5"><Navigation className="h-3.5 w-3.5" style={{ color: 'var(--brand-yellow)' }} /> Ruteo batch verificado</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}