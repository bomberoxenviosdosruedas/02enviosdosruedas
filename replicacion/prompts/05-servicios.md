# Bloque 05: Catálogo y Páginas de Servicios Especializados

> **Ubicación:** `replicacion/prompts/05-servicios.md`  
> **Rutas:** `/servicios`, `/servicios/envios-express`, `/servicios/envios-lowcost`, `/servicios/enviosflex`, `/servicios/deposito-fulfillment`, `/servicios/empresas-cuenta-corriente`, `/servicios/envios-contrareembolso`, `/servicios/plan-emprendedores`  
> **Objetivo:** Implementar el Hub de Servicios y las 7 páginas individuales de productos logísticos, con sus condiciones comerciales exactas, horarios de corte, límites físicos y llamadas a la acción.  

---

## 🎯 MODALIDAD 1: PROMPT DECLARATIVO / FUNCIONAL

```text
Actúa como Redactor UX Senior y Especialista Frontend en Next.js App Router y Tailwind CSS v4.

Tu misión es crear el catálogo de servicios de "Envíos DosRuedas" en `src/app/servicios/` y sus 7 subpáginas dedicadas, aplicando la Ley de Tres Colores (#0950F6, #FFEC01, #FFFFFF) y voseo Rioplatense profesional.

Contenido y especificaciones por página:
1. Hub Central (`/servicios`):
   - Título Display: "SERVICIOS DE MENSAJERÍA Y LOGÍSTICA URBANA EN MAR DEL PLATA".
   - Grilla con tarjetas Double Bezel que introducen cada servicio y enlazan a su página dedicada.
2. Envíos Express (`/servicios/envios-express`):
   - Promesa: "Tu encomienda entregada en una franja horaria acotada de 3 hs, coordinada con al menos 2 hs de anticipación."
   - Horario de corte: 15:00 hs para entregas dentro del mismo día.
   - Tarifas: 0 a 3 km ($3.700), 3 a 5 km ($4.600), 5 a 7 km ($6.100), 7 a 10 km ($8.200), +10 km ($1.000/km lineal total).
3. Envíos LowCost (`/servicios/envios-lowcost`):
   - Promesa: "La tarifa más conveniente de la ciudad para envíos programados. Retiramos y entregamos en la misma jornada hasta las 19:00 hs."
   - Horario de corte: 13:00 hs.
   - Tarifas: 0 a 3 km ($3.000), 3 a 5 km ($4.000), 5 a 7 km ($5.300), 7 a 10 km ($7.000), +10 km ($700/km lineal total).
4. Mercado Envíos Flex (`/servicios/enviosflex`):
   - Promesa: "Entregá en el día a tus compradores de Mercado Libre y mantené tu reputación verde."
   - Horario de corte de retiro: 15:00 hs. Entrega máxima: 20:00 hs.
   - Tarifas: Nivel 1 (tarifa LowCost), Nivel 2 ($6.500 en Zonas 4 y 5), Nivel 3 ($4.500 tarifa plana a todo Mar del Plata).
5. Depósito & Fulfillment (`/servicios/deposito-fulfillment`):
   - Almacenamiento de stock en la base de Friuli 1972, empaque de pedidos y despacho en primera ronda.
   - Beneficio comercial: DropOFF bonificado al 20% en costos de retiro.
6. Empresas y Cuenta Corriente (`/servicios/empresas-cuenta-corriente`):
   - Facturación mensual o quincenal unificada, cadetería fija, remitos conformados y atención prioritaria para firmas comerciales.
7. Envíos Contra Reembolso (`/servicios/envios-contrareembolso`):
   - Cobro de la mercadería en efectivo al comprador al momento de entregar y transferencia bancaria o liquidación al comerciante en 24 hs hábiles.
8. Plan Emprendedores (`/servicios/plan-emprendedores`):
   - Planes para tiendas online de redes sociales con tarifas preferenciales por volumen mensual.

Salvaguardas de copy obligatorias en todas las páginas:
- Capacidad estándar por paquete: hasta 5 kg y 40 × 40 × 30 cm. Bulto extra desde $1.800.
- Prohibido prometer "en 2 horas" o "60 a 90 min".
- Recordatorio legal: "No emitimos Factura A."
```

---

## 🛠️ MODALIDAD 2: PROMPT TÉCNICO / CÓDIGO E IMPORTS EXACTOS

```text
Actúa como un Desarrollador Senior en Next.js. Creá los siguientes archivos de servicios respetando la arquitectura de componentes e imports:

### 1. Hub `src/app/servicios/page.tsx`
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, PiggyBank, Package, Warehouse, Building2, Banknote, Rocket } from 'lucide-react';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Servicios de Mensajería y Logística',
  description: 'Conocé la cartera integral de envíos en moto en Mar del Plata: Express en franja de 3 hs, LowCost en el día, Mercado Envíos Flex y servicios corporativos.',
  alternates: { canonical: `${baseUrl}/servicios` },
};

const SERVICES = [
  { href: '/servicios/envios-express', icon: Zap, title: 'Envíos Express', desc: 'Entrega en franja horaria de 3 hs a coordinar con 2 hs de anticipación. Corte: 15:00 hs.', badge: 'Desde $3.700' },
  { href: '/servicios/envios-lowcost', icon: PiggyBank, title: 'Envíos LowCost', desc: 'Reparto programado en el día hasta las 19:00 hs. Corte: 13:00 hs.', badge: 'Desde $3.000' },
  { href: '/servicios/enviosflex', icon: Package, title: 'Mercado Envíos Flex', desc: 'Entregas el mismo día para Mercado Libre hasta las 20:00 hs. Corte: 15:00 hs.', badge: 'Desde $4.500' },
  { href: '/servicios/deposito-fulfillment', icon: Warehouse, title: 'Depósito & Fulfillment', desc: 'Guardamos tu mercadería en Friuli 1972 y despachamos tus ventas. DropOFF -20%.', badge: 'Logística Integral' },
  { href: '/servicios/empresas-cuenta-corriente', icon: Building2, title: 'Cuenta Corriente', desc: 'Facturación mensual unificada y cadetería fija para empresas y distribuidoras.', badge: 'Solución B2B' },
  { href: '/servicios/envios-contrareembolso', icon: Banknote, title: 'Contra Reembolso', desc: 'Cobramos tu venta en efectivo al entregar y te rendimos el dinero en 24 hs hábiles.', badge: 'Cobranza Segura' },
  { href: '/servicios/plan-emprendedores', icon: Rocket, title: 'Plan Emprendedores', desc: 'Tarifas preferenciales por volumen para tiendas online locales.', badge: 'E-commerce MDQ' },
];

export default function ServiciosPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight mb-4">Servicios de Mensajería y Logística Urbana</h1>
        <p className="font-sans text-lg text-brand-blue-400">Soluciones a medida para cada tipo de entrega en Mar del Plata. Con flota propia, seguimiento y base fija en Friuli 1972.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <Link key={s.href} href={s.href} className="group p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 hover:border-brand-blue-300 transition-all">
              <div className="bg-white rounded-xl p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-3 rounded-xl bg-brand-blue-50 text-brand-blue-500 group-hover:bg-brand-blue-500 group-hover:text-brand-yellow-500 transition-colors"><Icon className="w-6 h-6" /></span>
                    <span className="font-mono text-xs font-bold px-3 py-1 bg-brand-yellow-100 text-brand-blue-500 rounded-full">{s.badge}</span>
                  </div>
                  <h2 className="font-display text-2xl uppercase tracking-tight mb-2 group-hover:text-brand-blue-400">{s.title}</h2>
                  <p className="font-sans text-sm text-brand-blue-500/80 leading-relaxed mb-6">{s.desc}</p>
                </div>
                <div className="flex items-center gap-2 font-subheading text-sm font-bold uppercase tracking-wider text-brand-blue-500 group-hover:text-brand-blue-400">
                  Ver detalle completo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
```

### 2. Estructura de cada subpágina de servicio
Cada página en `src/app/servicios/[nombre]/page.tsx` debe importar `Metadata`, presentar un Hero con fondo azul de marca, un bloque de condiciones con tarjetas Double Bezel, tabla de tarifas oficiales según `src/lib/pricing.ts` y botón directo a `/cotizar` o WhatsApp.
```
