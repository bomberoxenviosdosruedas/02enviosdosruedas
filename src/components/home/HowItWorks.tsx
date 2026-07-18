'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, Bike, MapPin, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'COTIZÁ',
    description: 'Ingresá origen, destino y dimensiones. Obtené precio exacto y tiempo estimado al instante.',
    icon: ClipboardList,
    status: 'completed' as const,
  },
  {
    number: '02',
    title: 'RETIRAMOS',
    description: 'Pasamos por tu domicilio o punto de encuentro en Mar del Plata sin cargo adicional.',
    icon: Bike,
    status: 'active' as const,
  },
  {
    number: '03',
    title: 'ENTREGAMOS',
    description: 'Tu paquete viaja con seguimiento satelital en tiempo real. Entrega contra firma o foto.',
    icon: MapPin,
    status: 'pending' as const,
  },
  {
    number: '04',
    title: 'CONFIRMÁ',
    description: 'Recibís confirmación instantánea con comprobante digital. Facturación automática mensual.',
    icon: CheckCircle2,
    status: 'pending' as const,
  },
];

const statusConfig = {
  completed: {
    dotBg: 'bg-green-500',
    dotGlow: 'shadow-[0_0_20px_rgba(22,163,74,0.6)]',
    numberColor: 'text-brand-blue-400',
    numberBg: 'bg-transparent',
  },
  active: {
    dotBg: 'bg-brand-yellow',
    dotGlow: 'shadow-[0_0_25px_rgba(255,236,1,0.5)] animate-pulse-subtle',
    numberColor: 'text-white',
    numberBg: 'bg-brand-yellow',
  },
  pending: {
    dotBg: 'bg-brand-blue-100',
    dotGlow: '',
    numberColor: 'text-brand-blue-300',
    numberBg: 'bg-transparent',
  },
};

type StepStatus = 'completed' | 'active' | 'pending';

function Step({ step, index }: { step: typeof steps[0]; index: number }) {
  const config = statusConfig[step.status];
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 150, damping: 18, delay: index * 0.12 }}
      className="relative flex flex-col gap-6"
    >
      {/* Vertical line */}
      {index < steps.length - 1 && (
        <div
          className="absolute left-[1.5rem] top-[calc(1.5rem+24px)] bottom-0 w-[2px] bg-brand-blue-100"
          aria-hidden="true"
        />
      )}

      {/* Step Content */}
      <div className="relative flex gap-6 pl-12">
        {/* Number + Dot */}
        <div className="relative flex-shrink-0 flex flex-col items-center">
          {/* Connecting line from number to dot */}
          <div className="absolute left-[calc(50%-1px)] top-0 h-3 w-[2px] bg-brand-blue-100" aria-hidden="true" />

          {/* Step Number */}
          <motion.div
            variants={{
              completed: { backgroundColor: '#16A34A', color: '#DCFCE7' },
              active: { backgroundColor: '#FFEC01', color: '#04236B' },
              pending: { backgroundColor: '#BACEFD', color: '#0636A5' },
            }}
            animate={step.status}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="relative flex items-center justify-center w-12 h-12 rounded-full font-mono font-bold text-xl z-10"
          >
            {step.number}
          </motion.div>

          {/* Dot */}
          <div
            className={`relative w-6 h-6 rounded-full border-3 border-white flex-shrink-0 z-10 ${config.dotBg} ${config.dotGlow}`}
            style={{ boxShadow: step.status === 'completed' ? '0 0 20px rgba(22,163,74,0.6)' : step.status === 'active' ? '0 0 25px rgba(255,236,1,0.5)' : 'none' }}
          />
        </div>

        {/* Step Info */}
        <div className="flex-1 min-w-0 pt-2">
          <h3 className="text-xl sm:text-2xl font-subheading uppercase tracking-wider text-white leading-none mb-2">
            {step.title}
          </h3>
          <p className="text-brand-blue-100 font-sans text-sm sm:text-base leading-relaxed max-w-xl">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-16 md:py-24 lg:py-32 bg-brand-blue-700 relative overflow-hidden z-10"
      aria-labelledby="howitworks-heading"
    >
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,236,1,0.04),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,rgba(0,32,104,0.15),transparent_50%)]" />

      <motion.div
        className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0, y: 45 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Lead Copy */}
          <div className="lg:col-span-5 space-y-8">
            <span className="inline-flex items-center px-4 py-1.5 bg-white/10 text-brand-yellow border border-white/20 rounded-full text-xs font-subheading tracking-widest uppercase">
              PROCESO SIMPLE
            </span>

            <h2 id="howitworks-heading" className="text-white text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.9]">
              EN 4 PASOS TU ENVÍO LLEGA
            </h2>

            <p className="text-brand-blue-100 font-sans text-base sm:text-lg leading-relaxed max-w-prose font-medium">
              Diseñamos el flujo más directo para que vos te ocupes de vender y nosotros de que llegue. Sin fricción, sin sorpresas.
            </p>

            {/* Divider */}
            <div className="h-[3px] w-[60px] bg-brand-yellow rounded-full my-8" role="separator" aria-label="Separador decorativo" />
          </div>

          {/* Right: Vertical Stepper */}
          <div className="lg:col-span-7 relative">
            <div className="relative" style={{ paddingLeft: '1.5rem' }}>
              {steps.map((step, index) => (
                <Step key={step.number} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}