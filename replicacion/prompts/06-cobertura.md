# Bloque 06: Mapa de Cobertura y Radios Zonales

> **Ubicación:** `replicacion/prompts/06-cobertura.md`  
> **Ruta:** `/cobertura` (`src/app/cobertura/page.tsx`)  
> **Objetivo:** Implementar la página interactiva de cobertura territorial de Envíos DosRuedas, con el mapa de los 5 radios urbanos de Mar del Plata y las condiciones de servicio para destinos de periferia.  

---

## 🎯 MODALIDAD 1: PROMPT DECLARATIVO / FUNCIONAL

```text
Actúa como Diseñador UI y Desarrollador Frontend experto en Next.js App Router, Leaflet y Tailwind CSS v4.

Tu misión es crear la página de Cobertura de "Envíos DosRuedas" en `src/app/cobertura/page.tsx`.

Requisitos y narrativa del contenido:
1. Hero de Cobertura:
   - Fondo azul institucional (#0950F6) con texto blanco.
   - Titular H1 en Anton SC: "COBERTURA DE ENVÍOS EN MAR DEL PLATA".
   - Subtítulo: "Llegamos a cada rincón de la ciudad. Conocé nuestros radios urbanos de entrega habitual y las condiciones para zonas periféricas."
2. Mapa Interactivo de Mar del Plata:
   - Componente de mapa con Leaflet centrado en Mar del Plata (-38.0055, -57.5426).
   - Marcador destacado en la base operativa fija: Friuli 1972.
   - Capas o polígonos que representen los 5 radios zonales.
3. Fichas de los 5 Radios Zonales (Tarjetas Double Bezel):
   - Zona 1 (Centro y Macrocentro): San Martín, Güemes, Plaza Mitre, La Perla, Terminal Vieja y Nueva.
   - Zona 2 (Puerto y Sur Urbano): Puerto, Playa Grande, Punta Mogotes hasta Faro.
   - Zona 3 (Norte y Constitución): Parque Luro, Av. Constitución, Estrada, Aeropuerto.
   - Zona 4 (Oeste Urbano): Los Galpones, Autódromo, Regional, Av. Colón al fondo, Libertad.
   - Zona 5 (Periferia y Destinos Especiales): Batán, Sierra de los Padres, Camet Norte, Chapadmalal. Se indica claramente que estos destinos se cotizan por kilómetro de ruta a $1.000/km (fuera del rango urbano automático de 10 km).
4. Llamada a la Acción (CTA):
   - Botón directo para cotizar un viaje entre dos puntos: "COTIZAR RECORRIDO AHORA".
```

---

## 🛠️ MODALIDAD 2: PROMPT TÉCNICO / CÓDIGO E IMPORTS EXACTOS

```text
Actúa como un Desarrollador Senior en Next.js. Creá el archivo `src/app/cobertura/page.tsx` con su mapa y cuadrícula de zonas:

### `src/app/cobertura/page.tsx`
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Navigation, Compass, AlertCircle } from 'lucide-react';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Cobertura de Envíos en Mar del Plata',
  description: 'Conocé los 5 radios zonales de entrega en moto en Mar del Plata: Centro, Puerto, Norte, Oeste y zonas periféricas como Batán y Sierra de los Padres.',
  alternates: { canonical: `${baseUrl}/cobertura` },
};

const ZONAS = [
  { id: 'z1', name: 'Zona 1: Centro y Macrocentro', barrios: 'San Martín, Güemes, Plaza Mitre, La Perla, Nueva Terminal, Microcentro', status: 'Alta Frecuencia' },
  { id: 'z2', name: 'Zona 2: Puerto y Sur Urbano', barrios: 'Puerto Comercial, Playa Grande, Bosque Peralta Ramos, Punta Mogotes hasta Faro', status: 'Diario' },
  { id: 'z3', name: 'Zona 3: Norte y Constitución', barrios: 'Parque Luro, Av. Constitución, Estrada, Aeropuerto, Estación Camet', status: 'Diario' },
  { id: 'z4', name: 'Zona 4: Oeste Urbano', barrios: 'Los Galpones, Regional, Libertad, Av. Colón al fondo, Autódromo', status: 'Diario' },
  { id: 'z5', name: 'Zona 5: Periferia y Alrededores', barrios: 'Batán, Sierra de los Padres, Camet Norte, Santa Clara, Chapadmalal', status: 'Tarifa por Km ($1.000/km)' },
];

export default function CoberturaPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight mb-4">Cobertura de Envíos en Mar del Plata</h1>
        <p className="font-sans text-lg text-brand-blue-400">Conectamos los 5 radios urbanos de la ciudad con cadetería propia y base fija en Friuli 1972.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {ZONAS.map((z) => (
          <div key={z.id} className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60">
            <div className="bg-white rounded-xl p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-lg uppercase tracking-tight text-brand-blue-500 flex items-center gap-2"><MapPin className="w-5 h-5 text-brand-yellow-500 fill-brand-yellow-500" /> {z.name}</span>
                </div>
                <p className="font-sans text-sm text-brand-blue-500/80 leading-relaxed mb-4">{z.barrios}</p>
              </div>
              <div className="pt-3 border-t border-brand-blue-50 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-brand-blue-400">{z.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-brand-blue-50 border border-brand-blue-100 text-center max-w-2xl mx-auto">
        <h3 className="font-display text-xl uppercase mb-2">¿Tu destino está fuera de estas zonas?</h3>
        <p className="font-sans text-sm text-brand-blue-500/80 mb-6">Cotizamos trayectos especiales y traslados de larga distancia por kilómetro lineal de ruta.</p>
        <Link href="/cotizar" className="bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading text-lg font-bold uppercase tracking-wider px-6 py-3 rounded-full inline-block shadow-accent-sm transition-transform hover:scale-105">
          Cotizá tu Envío Online
        </Link>
      </div>
    </main>
  );
}
```
```
