'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';
import { Calculator, ShoppingBag, ShieldCheck, Truck, Percent } from 'lucide-react';

const SIMULATED_TRIPS = [
  { origen: "Centro de Distribución", destino: "Zona Güemes", distancia: 4.2 },
  { origen: "Av. Constitución 5500", destino: "Plaza Mitre", distancia: 5.8 },
  { origen: "Puerto Mar del Plata", destino: "Plaza Colón", distancia: 8.5 },
  { origen: "Terminal Ferroautomotora", destino: "B° Stella Maris", distancia: 3.7 },
  { origen: "La Perla (Av. Libertad)", destino: "Punta Mogotes", distancia: 11.2 },
  { origen: "Paseo Aldrey", destino: "Zona San Juan", distancia: 2.8 },
  { origen: "B° Constituyentes", destino: "Hospital Privado Comunidad", distancia: 4.9 },
];

export default function CotizadorLowCostHero() {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Trip simulation state
  const [trip, setTrip] = useState({ origen: "Centro de Distribución", destino: "Zona Güemes", distancia: 4.2 });

  useEffect(() => {
    // Select a random trip on mount to avoid SSR hydration mismatch
    const randomIndex = Math.floor(Math.random() * SIMULATED_TRIPS.length);
    setTrip(SIMULATED_TRIPS[randomIndex]);
  }, []);

  // Calcula la tarifa LowCost según rangos reales de la BD
  // Rangos fijos hasta 10 km; por encima se cobra $700 por km entero excedente (sin prorrateo)
  const distanceKm = trip.distancia;
  function calcLowCostPrice(d: number): number {
    if (d <= 3)  return 3000;
    if (d <= 5)  return 4000;
    if (d <= 7)  return 5300;
    if (d <= 10) return 7000;
    // Más de 10 km: base 7000 + $700 por cada km entero que exceda los 10 km
    return 7000 + Math.ceil(d - 10) * 700;
  }
  const price = calcLowCostPrice(distanceKm);

  // Motion values for smooth 3D mouse tracking spring animations
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);
  
  const [lightX, setLightX] = useState(50);
  const [lightY, setLightY] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized mouse position between -0.5 and 0.5
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(relativeX);
    y.set(relativeY);

    // Dynamic reflection highlight positioning
    const lightPercentX = ((e.clientX - rect.left) / width) * 100;
    const lightPercentY = ((e.clientY - rect.top) / height) * 100;
    setLightX(lightPercentX);
    setLightY(lightPercentY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setLightX(50);
    setLightY(50);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 90,
        damping: 18,
      }
    },
  };

  return (
    <section
      id="cotizador-lowcost-hero"
      className="relative min-h-[65vh] flex items-center justify-center pt-32 pb-12 overflow-hidden bg-gradient-to-b from-brand-blue-700 via-brand-dark to-brand-dark text-white border-b border-white/10"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,var(--color-brand-blue-700),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_65%,var(--color-brand-yellow-500),transparent_45%)] pointer-events-none" />

      {/* Decorative logistics illustration overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none">
        <Image
          src="https://i.postimg.cc/nLMx4vVc/delivery-background.jpg"
          alt="Fondo de reparto"
          fill
          priority
          referrerPolicy="no-referrer"
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Title and Description */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Badge (Bebas Neue) */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="px-4 py-1.5 rounded-full text-sm font-subheading uppercase tracking-widest bg-brand-blue border-2 border-brand-yellow text-brand-yellow flex items-center gap-1.5 shadow-[0_0_20px_var(--color-brand-yellow-500)]">
                <ShoppingBag className="h-4 w-4 text-brand-yellow animate-pulse shrink-0" />
                LOGÍSTICA LOWCOST • 2026
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-[0.02em] leading-none text-white flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2"
            >
              <span>COTIZÁ TU</span>
              <span className="text-brand-yellow text-glow-yellow">ENVÍO</span>
              <span>LOWCOST</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-brand-blue-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Optimizá tus costos de distribución en Mar del Plata. Calculá la tarifa de entrega de tus ruteos diarios con rumbos consolidados y entrega garantizada en el día.
            </motion.p>

            {/* Features Indicators */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 max-w-xl mx-auto lg:mx-0 text-left font-sans text-xs"
            >
              <div className="flex items-center gap-2 text-brand-blue-200 bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm hover:border-white/20 transition-colors">
                <Percent className="h-4 w-4 text-brand-yellow shrink-0" />
                <span>Hasta 40% de Ahorro</span>
              </div>
              <div className="flex items-center gap-2 text-brand-blue-200 bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm hover:border-white/20 transition-colors">
                <Truck className="h-4 w-4 text-brand-yellow shrink-0" />
                <span>Entrega Same-Day</span>
              </div>
              <div className="flex items-center gap-2 text-brand-blue-200 bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm hover:border-white/20 transition-colors">
                <ShieldCheck className="h-4 w-4 text-brand-yellow shrink-0" />
                <span>Tarifa Plana PyME</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic 3D Spring Floating Card */}
          <div className="lg:col-span-5 relative hidden lg:block h-[380px] perspective-1000">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] z-20 preserve-3d cursor-pointer"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }}
            >
              {/* Double-Bezel Card wrapper */}
              <div className="double-bezel-outer bg-brand-blue-50/80 shadow-brutalist border border-brand-blue-100 p-2 rounded-2xl transition-all duration-300">
                <div className="double-bezel-inner bg-white p-8 rounded-xl border border-brand-blue-50/50 text-brand-blue-700">
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div>
                        <h4 className="text-xl font-subheading uppercase text-brand-blue-700 tracking-wider">
                          TARIFA OPTIMIZADA
                        </h4>
                        <p className="text-[10px] text-brand-blue-600 font-subheading tracking-wider uppercase mt-0.5">SISTEMA LOWCOST FLEX</p>
                      </div>
                      <Calculator className="h-6 w-6 text-brand-blue-700 shrink-0 animate-pulse" />
                    </div>

                    {/* Calculator Simulation items */}
                    <div className="space-y-3 text-xs text-slate-700">
                      <div className="flex justify-between items-center py-1 border-b border-slate-100">
                        <span className="font-sans font-bold uppercase tracking-wider text-[10px] text-slate-500">ORIGEN</span>
                        <span className="text-brand-blue-700 font-semibold font-sans truncate max-w-[150px] inline-block align-middle">{trip.origen}</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-slate-100">
                        <span className="font-sans font-bold uppercase tracking-wider text-[10px] text-slate-500">DESTINO</span>
                        <span className="text-brand-blue-700 font-semibold font-sans truncate max-w-[150px] inline-block align-middle">{trip.destino}</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-slate-100">
                        <span className="font-sans font-bold uppercase tracking-wider text-[10px] text-slate-500">DISTANCIA</span>
                        <span className="text-brand-blue-700 font-bold font-mono">{trip.distancia} km</span>
                      </div>
                      <div className="flex justify-between items-center py-1 text-sm pt-2 border-t border-slate-100">
                        <span className="font-sans font-bold text-brand-blue-700">COSTO UNITARIO</span>
                        <span className="text-brand-blue-700 font-bold text-lg font-mono">${price.toLocaleString('es-AR')} ARS</span>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-center">
                      <span className="px-3 py-1 bg-brand-yellow-50 border border-brand-yellow text-brand-blue-700 rounded-xl text-[10px] font-subheading tracking-wider uppercase">
                        ENTREGA INCLUIDA EN EL DÍA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
