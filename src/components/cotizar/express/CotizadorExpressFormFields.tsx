'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, User, Phone, Package } from 'lucide-react';
import AddressAutocomplete from '@/src/components/ui/AddressAutocomplete';
import type { UseCotizadorExpressReturn } from './hooks/useCotizadorExpress';

interface CotizadorExpressFormFieldsProps {
  form: Pick<UseCotizadorExpressReturn, 
    'origen' | 'setOrigen' | 'destino' | 'setDestino' | 
    'nombre' | 'setNombre' | 'telefono' | 'setTelefono' | 
    'producto' | 'setProducto' | 
    'origenCoords' | 'setOrigenCoords' | 'destinoCoords' | 'setDestinoCoords' |
    'handleInputFocus' | 'handleCalculate'
  >;
  error: string | null;
  isCalculating: boolean;
  shouldReduceMotion: boolean;
}

export default function CotizadorExpressFormFields({
  form,
  error,
  isCalculating,
  shouldReduceMotion,
}: CotizadorExpressFormFieldsProps) {
  const snappySpring = { type: 'spring' as const, stiffness: 300, damping: 25 };

  return (
    <form onSubmit={form.handleCalculate} onFocus={form.handleInputFocus} className="space-y-6 relative z-10">
      {/* Origen */}
      <div className="space-y-1.5">
        <label htmlFor="origen-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-white/90 flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-brand-yellow-500" />
          Dirección de Origen (Retiro)
        </label>
        <AddressAutocomplete
          id="origen-input"
          placeholder="Ej: Av. Colón 1234, Mar del Plata"
          value={form.origen}
          onChange={form.setOrigen}
          onSelectCoordinate={form.setOrigenCoords}
          required
          className="w-full h-11 bg-white/5 border-2 border-brand-blue-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 rounded-xl px-4 text-sm transition-all text-white placeholder:text-white/40 font-sans"
        />
      </div>

      {/* Destino */}
      <div className="space-y-1.5">
        <label htmlFor="destino-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-white/90 flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-brand-yellow-500" />
          Dirección de Destino (Entrega)
        </label>
        <AddressAutocomplete
          id="destino-input"
          placeholder="Ej: Juan B. Justo 5678, Mar del Plata"
          value={form.destino}
          onChange={form.setDestino}
          onSelectCoordinate={form.setDestinoCoords}
          required
          className="w-full h-11 bg-white/5 border-2 border-brand-blue-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 rounded-xl px-4 text-sm transition-all text-white placeholder:text-white/40 font-sans"
        />
      </div>

      {/* Nombre y Teléfono en Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="nombre-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-white/90 flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-brand-yellow-500" />
            Nombre
          </label>
          <input
            id="nombre-input"
            type="text"
            aria-label="Nombre"
            placeholder="Tu nombre completo"
            value={form.nombre}
            onChange={(e) => form.setNombre(e.target.value)}
            required
            className="w-full h-11 bg-white/5 border-2 border-brand-blue-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 rounded-xl px-4 text-sm transition-all text-white placeholder:text-white/40 font-sans"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="telefono-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-white/90 flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5 text-brand-yellow-500" />
            Teléfono
          </label>
          <input
            id="telefono-input"
            type="tel"
            aria-label="Teléfono"
            placeholder="Tu teléfono de contacto"
            value={form.telefono}
            onChange={(e) => form.setTelefono(e.target.value)}
            required
            className="w-full h-11 bg-white/5 border-2 border-brand-blue-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 rounded-xl px-4 text-sm transition-all text-white placeholder:text-white/40 font-mono tabular-nums"
          />
        </div>
      </div>

      {/* Producto */}
      <div className="space-y-1.5">
        <label htmlFor="producto-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-white/90 flex items-center gap-1.5">
          <Package className="h-3.5 w-3.5 text-brand-yellow-500" />
          Tipo de producto a trasladar
        </label>
        <input
          id="producto-input"
          type="text"
          aria-label="Tipo de producto a trasladar"
          placeholder="Ej: Documentos, Paquete pequeño..."
          value={form.producto}
          onChange={(e) => form.setProducto(e.target.value)}
          required
          className="w-full h-11 bg-white/5 border-2 border-brand-blue-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 rounded-xl px-4 text-sm transition-all text-white placeholder:text-white/40 font-sans"
        />
      </div>



      <motion.button
        type="submit"
        disabled={isCalculating || !form.origen.trim() || !form.destino.trim() || !form.nombre.trim() || !form.telefono.trim() || !form.producto.trim()}
        className="group w-full min-h-[52px] rounded-full bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 font-subheading font-bold tracking-wider uppercase text-base py-3.5 px-6 shadow-glow-yellow transition-all flex items-center justify-between cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border-none active:scale-[0.99]"
        whileHover={shouldReduceMotion ? undefined : { scale: 1.01, transition: snappySpring }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98, transition: snappySpring }}
      >
        {isCalculating ? (
          <>
            <div className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-brand-blue-900" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Calculando Ruta OSRM...</span>
            </div>
            <span className="w-8 h-8 rounded-full bg-brand-blue-900/10 text-brand-blue-900 flex items-center justify-center shrink-0">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </span>
          </>
        ) : (
          <>
            <span>Calcular Ruta y Tarifa Express</span>
            <span className="w-8 h-8 rounded-full bg-brand-blue-900/10 text-brand-blue-900 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </>
        )}
      </motion.button>
    </form>
  );
}