'use client';

import React from 'react';
import { MapPin, User, Phone, Package } from 'lucide-react';
import AddressAutocomplete from '@/components/ui/AddressAutocomplete';
import CTANestedPill from '@/components/ui/CTANestedPill';
import InputField from '@/components/ui/InputField';
import type { UseCotizadorUnificadoReturn } from '@/hooks/cotizador/useCotizadorUnified';

interface CotizadorFormProps {
  form: UseCotizadorUnificadoReturn;
}

/**
 * Un solo formulario para los dos servicios. Los campos de servicio que antes
 * vivían en cada cotizador (franja horaria, tipo de producto por servicio) no
 * aparecen acá: la elección del servicio es el último paso, con el número a la vista.
 */
export default function CotizadorForm({ form }: CotizadorFormProps) {
  return (
    <form
      noValidate
      onSubmit={form.handleCalculate}
      onFocus={form.handleInputFocus}
      className="space-y-5 relative z-10"
    >
      <div className="space-y-1.5">
        <label
          htmlFor="guia-origen-input"
          className="text-xs font-subheading uppercase tracking-wider font-bold text-white flex items-center gap-1.5"
        >
          <MapPin className="h-3.5 w-3.5" />
          Dirección de Origen (Retiro)
        </label>
        <AddressAutocomplete
          id="guia-origen-input"
          placeholder="Ej: Av. Colón 1234, Mar del Plata"
          value={form.origen}
          onChange={form.setOrigen}
          onSelectCoordinate={form.setOrigenCoords}
          required
          className="w-full h-11 bg-white border-2 border-brand-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-700 focus-visible:border-brand-blue-700 rounded-xl px-4 text-sm transition-all text-brand-blue-900 placeholder:text-brand-blue-500 font-sans shadow-sm"
        />
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="guia-destino-input"
          className="text-xs font-subheading uppercase tracking-wider font-bold text-white flex items-center gap-1.5"
        >
          <MapPin className="h-3.5 w-3.5" />
          Dirección de Destino (Entrega)
        </label>
        <AddressAutocomplete
          id="guia-destino-input"
          placeholder="Ej: Juan B. Justo 5678, Mar del Plata"
          value={form.destino}
          onChange={form.setDestino}
          onSelectCoordinate={form.setDestinoCoords}
          required
          className="w-full h-11 bg-white border-2 border-brand-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-700 focus-visible:border-brand-blue-700 rounded-xl px-4 text-sm transition-all text-brand-blue-900 placeholder:text-brand-blue-500 font-sans shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          id="guia-nombre-input"
          label="Nombre"
          placeholder="Tu nombre completo"
          value={form.nombre}
          onChange={(e) => form.setNombre(e.target.value)}
          required
          icon={<User className="h-3.5 w-3.5" />}
          labelClassName="text-white"
          containerClassName="space-y-1.5"
        />

        <InputField
          id="guia-telefono-input"
          label="Teléfono"
          placeholder="Tu teléfono de contacto"
          value={form.telefono}
          onChange={(e) => form.setTelefono(e.target.value)}
          required
          type="tel"
          icon={<Phone className="h-3.5 w-3.5" />}
          className="font-mono tabular-nums"
          labelClassName="text-white"
          containerClassName="space-y-1.5"
        />
      </div>

      <InputField
        id="guia-producto-input"
        label="Qué hay adentro"
        placeholder="Ej: Documentos, indumentaria, repuesto..."
        value={form.producto}
        onChange={(e) => form.setProducto(e.target.value)}
        required
        icon={<Package className="h-3.5 w-3.5" />}
        labelClassName="text-white"
        containerClassName="space-y-1.5"
      />

      <div className="pt-1">
        <CTANestedPill
          type="submit"
          variant="primary"
          size="large"
          disabled={form.isCalculating}
          className="w-full"
        >
          {form.isCalculating ? 'Midiendo la ruta...' : 'Ver las dos tarifas'}
        </CTANestedPill>
      </div>

      <p className="font-sans text-2xs text-white/60 text-center leading-snug">
        Las tarifas salen de nuestra tabla vigente. El pedido se confirma por WhatsApp.
      </p>
    </form>
  );
}
