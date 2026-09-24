'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, User, Phone, Package } from 'lucide-react';
import AddressAutocomplete from '@/src/components/ui/AddressAutocomplete';
import CTANestedPill from '@/src/components/ui/CTANestedPill';
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
  return (
    <form onSubmit={form.handleCalculate} onFocus={form.handleInputFocus} className="space-y-6 relative z-10">
      {/* Origen */}
      <div className="space-y-1.5">
        <label htmlFor="origen-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-[#0950F6] flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-[#0950F6]" />
          Dirección de Origen (Retiro)
        </label>
        <AddressAutocomplete
          id="origen-input"
          placeholder="Ej: Av. Colón 1234, Mar del Plata"
          value={form.origen}
          onChange={form.setOrigen}
          onSelectCoordinate={form.setOrigenCoords}
          required
          className="w-full h-11 bg-[#FFFFFF] border-[1.5px] border-[#D6E4FE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0950F6] focus-visible:border-[#0950F6] rounded-xl px-4 text-sm transition-all text-[#0950F6] placeholder:text-gray-400 font-sans shadow-sm"
        />
      </div>

      {/* Destino */}
      <div className="space-y-1.5">
        <label htmlFor="destino-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-[#0950F6] flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-[#0950F6]" />
          Dirección de Destino (Entrega)
        </label>
        <AddressAutocomplete
          id="destino-input"
          placeholder="Ej: Juan B. Justo 5678, Mar del Plata"
          value={form.destino}
          onChange={form.setDestino}
          onSelectCoordinate={form.setDestinoCoords}
          required
          className="w-full h-11 bg-[#FFFFFF] border-[1.5px] border-[#D6E4FE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0950F6] focus-visible:border-[#0950F6] rounded-xl px-4 text-sm transition-all text-[#0950F6] placeholder:text-gray-400 font-sans shadow-sm"
        />
      </div>

      {/* Nombre y Teléfono en Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="nombre-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-[#0950F6] flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-[#0950F6]" />
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
            className="w-full h-11 bg-[#FFFFFF] border-[1.5px] border-[#D6E4FE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0950F6] focus-visible:border-[#0950F6] rounded-xl px-4 text-sm transition-all text-[#0950F6] placeholder:text-gray-400 font-sans shadow-sm"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="telefono-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-[#0950F6] flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5 text-[#0950F6]" />
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
            className="w-full h-11 bg-[#FFFFFF] border-[1.5px] border-[#D6E4FE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0950F6] focus-visible:border-[#0950F6] rounded-xl px-4 text-sm transition-all text-[#0950F6] placeholder:text-gray-400 font-mono tabular-nums shadow-sm"
          />
        </div>
      </div>

      {/* Producto */}
      <div className="space-y-1.5">
        <label htmlFor="producto-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-[#0950F6] flex items-center gap-1.5">
          <Package className="h-3.5 w-3.5 text-[#0950F6]" />
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
          className="w-full h-11 bg-[#FFFFFF] border-[1.5px] border-[#D6E4FE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0950F6] focus-visible:border-[#0950F6] rounded-xl px-4 text-sm transition-all text-[#0950F6] placeholder:text-gray-400 font-sans shadow-sm"
        />
      </div>

      {/* Botón de acción adaptado */}
      <div className="pt-2">
        <CTANestedPill
          type="submit"
          variant="primary"
          className="w-full"
        >
          {isCalculating ? 'Calculando Ruta Express...' : 'Calcular Ruta y Tarifa Express'}
        </CTANestedPill>
      </div>
    </form>
  );
}