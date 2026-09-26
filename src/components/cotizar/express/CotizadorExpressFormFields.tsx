'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, User, Phone, Package } from 'lucide-react';
import AddressAutocomplete from '@/src/components/ui/AddressAutocomplete';
import CTANestedPill from '@/src/components/ui/CTANestedPill';
import type { UseCotizadorExpressReturn } from './hooks/useCotizadorExpress';
import InputField from '@/src/components/ui/InputField';

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
        <label htmlFor="origen-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-brand-blue-700 flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" />
          Dirección de Origen (Retiro)
        </label>
        <AddressAutocomplete
          id="origen-input"
          placeholder="Ej: Av. Colón 1234, Mar del Plata"
          value={form.origen}
          onChange={form.setOrigen}
          onSelectCoordinate={form.setOrigenCoords}
          required
          className="w-full h-11 bg-white border-2 border-brand-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-700 focus-visible:border-brand-blue-700 rounded-xl px-4 text-sm transition-all text-brand-blue-900 placeholder:text-brand-blue-500 font-sans shadow-sm"
        />
      </div>

      {/* Destino */}
      <div className="space-y-1.5">
        <label htmlFor="destino-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-brand-blue-700 flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" />
          Dirección de Destino (Entrega)
        </label>
        <AddressAutocomplete
          id="destino-input"
          placeholder="Ej: Juan B. Justo 5678, Mar del Plata"
          value={form.destino}
          onChange={form.setDestino}
          onSelectCoordinate={form.setDestinoCoords}
          required
          className="w-full h-11 bg-white border-2 border-brand-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-700 focus-visible:border-brand-blue-700 rounded-xl px-4 text-sm transition-all text-brand-blue-900 placeholder:text-brand-blue-500 font-sans shadow-sm"
        />
      </div>

      {/* Nombre y Teléfono en Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          id="nombre-input"
          label="Nombre"
          placeholder="Tu nombre completo"
          value={form.nombre}
          onChange={(e) => form.setNombre(e.target.value)}
          required
          icon={<User className="h-3.5 w-3.5" />}
          error={error}
          containerClassName="space-y-1.5"
        />

        <InputField
          id="telefono-input"
          label="Teléfono"
          placeholder="Tu teléfono de contacto"
          value={form.telefono}
          onChange={(e) => form.setTelefono(e.target.value)}
          required
          type="tel"
          icon={<Phone className="h-3.5 w-3.5" />}
          error={error}
          className="font-mono tabular-nums"
          containerClassName="space-y-1.5"
        />
      </div>

      {/* Producto */}
      <InputField
        id="producto-input"
        label="Tipo de producto a trasladar"
        placeholder="Ej: Documentos, Paquete pequeño..."
        value={form.producto}
        onChange={(e) => form.setProducto(e.target.value)}
        required
        icon={<Package className="h-3.5 w-3.5" />}
        error={error}
        containerClassName="space-y-1.5"
      />

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