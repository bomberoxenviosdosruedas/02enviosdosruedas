import { useState } from 'react';
import { AddressAutocomplete } from '@enviosdosruedas/ui';
import { MapPinIcon as MapPin } from '@enviosdosruedas/ui';

const darkInput =
  'w-full h-11 bg-white/5 border-2 border-brand-blue-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 rounded-xl px-4 text-sm transition-all text-white placeholder:text-white/40 font-sans';

const lightInput =
  'w-full h-11 bg-white border-2 border-brand-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 rounded-xl px-4 text-sm transition-all text-brand-blue-900 placeholder:text-brand-blue-300/70 font-sans';

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  initial: string;
  dark?: boolean;
}

const Field = ({ id, label, placeholder, initial, dark }: FieldProps) => {
  const [value, setValue] = useState(initial);
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className={
          dark
            ? 'text-xs font-subheading uppercase tracking-wider font-bold flex items-center gap-1.5 text-white/90'
            : 'text-xs font-subheading uppercase tracking-wider font-bold flex items-center gap-1.5 text-brand-blue-700'
        }
      >
        <MapPin className={dark ? 'h-3.5 w-3.5 text-brand-yellow-500' : 'h-3.5 w-3.5 text-brand-blue-500'} />
        {label}
      </label>
      <AddressAutocomplete
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        onSelectCoordinate={() => {}}
        required
        className={dark ? darkInput : lightInput}
      />
    </div>
  );
};

export const ExpressQuoteForm = () => (
  <div className="bg-brand-blue-900 text-white" style={{ padding: 28, borderRadius: 20, maxWidth: 460 }}>
    <h3 className="font-display uppercase text-2xl tracking-tight text-white">Calculá tu Envío Express</h3>
    <p className="font-sans text-sm text-white/80 mt-1 leading-relaxed">
      Ingresá las direcciones de origen y destino en Mar del Plata.
    </p>
    <div className="space-y-4" style={{ marginTop: 20 }}>
      <Field
        id="pv-origen"
        dark
        label="Dirección de Origen (Retiro)"
        placeholder="Ej: Av. Colón 1234, Mar del Plata"
        initial="Friuli 1972, Mar del Plata"
      />
      <Field
        id="pv-destino"
        dark
        label="Dirección de Destino (Entrega)"
        placeholder="Ej: Juan B. Justo 5678, Mar del Plata"
        initial=""
      />
    </div>
  </div>
);

export const EmptyPlaceholder = () => (
  <div style={{ maxWidth: 420 }}>
    <Field id="pv-empty" label="Dirección de retiro" placeholder="Ej: Av. Colón 1234, Mar del Plata" initial="" />
  </div>
);

export const Filled = () => (
  <div style={{ maxWidth: 420 }}>
    <Field
      id="pv-filled"
      label="Dirección de entrega"
      placeholder="Ej: Juan B. Justo 5678, Mar del Plata"
      initial="Av. Martínez de Hoz 3500, Punta Mogotes"
    />
  </div>
);
