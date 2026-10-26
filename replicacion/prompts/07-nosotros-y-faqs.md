# Bloque 07: Institucional (Nosotros, Cultura, FAQs y Redes)

> **Ubicación:** `replicacion/prompts/07-nosotros-y-faqs.md`  
> **Rutas:** `/nosotros`, `/nosotros/sobre-nosotros`, `/nosotros/preguntas-frecuentes`, `/nosotros/nuestras-redes`  
> **Objetivo:** Implementar el módulo institucional de Envíos DosRuedas: narrativa de flota propia marplatense, acordeón interactivo de preguntas frecuentes y enlaces a canales sociales.  

---

## 🎯 MODALIDAD 1: PROMPT DECLARATIVO / FUNCIONAL

```text
Actúa como Especialista en Copywriting Institucional y Desarrollador UI en Next.js App Router.

Tu misión es crear las páginas institucionales de "Envíos DosRuedas" en `src/app/nosotros/`.

Requisitos y copys por sección:
1. Hub `/nosotros`:
   - Presentación de la empresa, filosofía de compromiso, enlaces a la historia de la marca, las preguntas frecuentes y las redes sociales.
2. Sobre Nosotros (`/nosotros/sobre-nosotros`):
   - Titular H1: "SOBRE ENVÍOS DOSRUEDAS: MENSAJERÍA REAL EN MAR DEL PLATA".
   - Historia y valores: Empresa familiar marplatense nacida para resolver la última milla con compromiso de palabra, cadetes propios capacitados y base operativa física en Friuli 1972.
   - Diferencial clave: "No somos una app extranjera ni tercerizamos los envíos. Sabemos exactamente quién traslada cada paquete."
3. Preguntas Frecuentes (`/nosotros/preguntas-frecuentes`):
   - Acordeón interactivo accesible con `@radix-ui/react-accordion`.
   - Respuestas a las dudas clave:
     * ¿Qué peso y medidas puede tener el paquete?: "Hasta 5 kg y 40 × 40 × 30 cm en paquete estándar. Bulto extra se coordina desde $1.800 de recargo."
     * ¿Qué pasa si llueve?: "Rige recargo del 30% (o 50% en servicios inmediatos Express/LowCost) por seguridad en asfalto mojado."
     * ¿Cuánto tiempo espera el cadete en la puerta?: "10 minutos de tolerancia sin cargo; luego $2.200 por cada bloque de 10 minutos."
     * ¿Emiten Factura A?: "No emitimos Factura A. Emitimos comprobante Monotributo legal para consumidor final o gastos de comercio."
     * ¿Cuáles son los medios de pago?: "Efectivo contra entrega, transferencia bancaria (alias/CBU) y Mercado Pago."
4. Nuestras Redes (`/nosotros/nuestras-redes`):
   - Tarjetas interactivas con estética de canal oficial para WhatsApp (+54 9 223 660-2699), Instagram (@enviosdosruedas) y Facebook (/enviosdosruedas).
```

---

## 🛠️ MODALIDAD 2: PROMPT TÉCNICO / CÓDIGO E IMPORTS EXACTOS

```text
Actúa como un Desarrollador Senior en Next.js. Creá los siguientes archivos para el módulo institucional:

### 1. `src/app/nosotros/preguntas-frecuentes/page.tsx`
```tsx
import type { Metadata } from 'next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes',
  description: 'Respuestas a dudas sobre tarifas, peso máximo, recargos por lluvia, tiempos de entrega y formas de pago en Envíos DosRuedas Mar del Plata.',
  alternates: { canonical: `${baseUrl}/nosotros/preguntas-frecuentes` },
};

const FAQS = [
  { q: '¿Qué peso y tamaño máximo puede tener un envío?', a: 'El paquete estándar contempla hasta 5 kg y medidas de hasta 40 × 40 × 30 cm. Si tu bulto supera estas medidas, se coordina como bulto extra con recargo desde $1.800.' },
  { q: '¿Qué pasa si llueve el día pactado para la entrega?', a: 'Por seguridad vial en piso mojado, los días de lluvia rige un recargo del 30% (o 50% en Express y LowCost), y las ventanas de entrega pueden extenderse prudentemente.' },
  { q: '¿Cuánto tiempo espera el cadete en la puerta?', a: 'Los primeros 10 minutos de espera en puerta son sin cargo. A partir del minuto 11, se computan bloques de 10 minutos a $2.200 por bloque.' },
  { q: '¿Emiten Factura A?', a: 'No emitimos Factura A. Emitimos comprobantes fiscales válidos como Monotributista para consumidor final o justificación de gastos comerciales.' },
  { q: '¿Qué medios de pago aceptan?', a: 'Aceptamos transferencia bancaria inmediata por alias o CBU, Mercado Pago y efectivo al momento de la entrega.' },
];

export default function FaqsPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-tight mb-4">Preguntas Frecuentes</h1>
        <p className="font-sans text-base text-brand-blue-400">Todo lo que necesitás saber antes de coordinar tu envío en Mar del Plata.</p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {FAQS.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`} className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60">
            <div className="bg-white rounded-xl px-5 py-2">
              <AccordionTrigger className="font-subheading text-lg font-bold uppercase tracking-wider text-left text-brand-blue-500 hover:text-brand-blue-400">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-sm text-brand-blue-500/80 leading-relaxed pt-2">
                {faq.a}
              </AccordionContent>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}
```

### 2. `src/app/nosotros/sobre-nosotros/page.tsx`
- Layout con Hero azul: "SOBRE ENVÍOS DOSRUEDAS".
- Bloque narrativo destacando la base física en Friuli 1972 y la flota propia sin tercerización.
```
