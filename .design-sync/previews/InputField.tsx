import { InputField, CTANestedPill } from '@enviosdosruedas/ui';
import { MapPinIcon as MapPin, PhoneIcon as Phone, UserIcon as User, PackageIcon as Package } from '@enviosdosruedas/ui';

const col: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 380 };

export const AccountRequestForm = () => (
  <div className="bg-white" style={{ ...col, padding: 24, borderRadius: 16 }}>
    <InputField label="Nombre y Apellido" required placeholder="Ej: Marcelo Rossi" />
    <InputField label="Razón Social o Comercio" required placeholder="Ej: Distribuidora Costa Atlántica S.R.L." />
    <InputField label="WhatsApp / Teléfono" type="tel" required placeholder="Ej: 223 660-2699" />
    <CTANestedPill variant="primary" className="w-full">Pedir apertura de cuenta</CTANestedPill>
  </div>
);

export const WithIcons = () => (
  <div style={col}>
    <InputField label="Origen (retiro)" icon={<MapPin className="w-4 h-4" />} defaultValue="Friuli 1972, Zona Güemes" />
    <InputField label="Destino (entrega)" icon={<MapPin className="w-4 h-4" />} placeholder="Ej: Av. Colón 1234, Playa Grande" />
    <InputField label="Quién recibe" icon={<User className="w-4 h-4" />} defaultValue="Lucía Fernández" />
    <InputField label="Teléfono" type="tel" icon={<Phone className="w-4 h-4" />} placeholder="223 660-2699" />
  </div>
);

export const States = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 20, maxWidth: 720 }}>
    <InputField label="Por defecto" placeholder="Ingresá la dirección" icon={<MapPin className="w-4 h-4" />} />
    <InputField
      label="Con ayuda"
      icon={<Package className="w-4 h-4" />}
      defaultValue="Caja mediana, 4 kg"
      helpText="Hasta 20 kg por bulto en moto"
    />
    <InputField
      label="Con error"
      required
      icon={<MapPin className="w-4 h-4" />}
      defaultValue="Ruta 88 km 40"
      error="Fuera del Partido de General Pueyrredón"
    />
    <InputField
      label="Deshabilitado"
      disabled
      icon={<MapPin className="w-4 h-4" />}
      defaultValue="Centro de Distribución, Puerto"
      helpText="Punto de retiro fijo para tu cuenta"
    />
  </div>
);
