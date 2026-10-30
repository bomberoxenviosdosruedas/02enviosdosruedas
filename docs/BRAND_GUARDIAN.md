# Envíos DosRuedas — Manual de Identidad y Gobierno de Marca (Brand Guardian)

> **Documento Oficial de Marca, Directrices de Identidad y Sistema de Protección**  
> *Versión 2.0 · Octubre 2026 · Mar del Plata, Argentina*  
> *Responsable:* Brand Guardian Specialist & Matías Nicolás Cejas (CEO & Fundador)

---

## 1. 🎯 Estrategia y Fundamentos de Marca (Brand Foundation)

### 1.1 Propósito de Marca (Brand Purpose)
Existimos para conectar el pulso comercial de Mar del Plata con una logística urbana en moto predecible, transparente y cercana, eliminando la incertidumbre en la última milla para que los comercios locales y emprendedores crezcan cuidando su reputación.

### 1.2 Visión (Brand Vision)
Consolidarnos como el estándar indiscutido de logística urbana y entrega en el día en General Pueyrredón, reconocidos por operar con flota propia, integridad operativa absoluta y tecnología que potencia el vínculo humano entre el negocio y su comprador.

### 1.3 Misión (Brand Mission)
Brindar a comerciantes, tiendas e-commerce y empresas marplatenses soluciones de mensajería Express, envíos Flex y distribución programada LowCost con tarifas transparentes, franjas horarias estrictas y soporte directo de persona a persona.

### 1.4 Valores Esenciales (Core Values)
1. **Transparencia Radical:** Sin letras chicas. Cada tarifa, recargo por lluvia o espera tiene un valor público publicado antes de confirmar el servicio.
2. **Respeto Operativo Mutuo:** Cuidamos la integridad física y laboral de nuestros repartidores tanto como los paquetes y el prestigio de nuestros clientes.
3. **Puntualidad Marplatense:** Conocemos cada calle, avenida y corte de tránsito de Mar del Plata; nuestros compromisos horarios son realistas y ejecutables.
4. **Pragmatismo Honesto:** *"Preferimos decir que no podemos, a fallar"*. No tomamos volumen que degrade la calidad del servicio.

### 1.5 Personalidad de Marca (Brand Personality)
Si Envíos DosRuedas fuera una persona, sería un trabajador marplatense confiable, enérgico, puntual y directo:
- **Cercano y Respetuoso:** Trata de vos con calidez pero sin informalidad descuidada ni modismos exagerados.
- **Técnicamente Preciso:** Habla con números claros (kilómetros viales, franjas horarias, kilogramos y pesos argentinos).
- **Resolutivo y Tranquilizador:** Resuelve urgencias de logística sin dramatismo y con alternativas claras.

### 1.6 Promesa Central (Brand Promise)
> **"El Motor de su Última Milla"**  
> Entregas urbanas en el día con franjas horarias a elección, soporte por WhatsApp los 365 días del año y custodia garantizada de tu reputación comercial (Termómetro Verde).

---

## 2. 🎨 Sistema de Identidad Visual (Visual Identity System)

El lenguaje visual de Envíos DosRuedas se rige por la **Ley de los Tres Colores**: Azul Eléctrico Institucional, Amarillo Vial y Blanco Puro.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        LEY DE LOS TRES COLORES                         │
│                                                                        │
│   ┌────────────────────┐   ┌────────────────────┐   ┌──────────────┐   │
│   │   AZUL CANÓNICO    │   │   AMARILLO VIAL    │   │ BLANCO PURO  │   │
│   │      #0950F6       │   │      #FFEC01       │   │   #FFFFFF    │   │
│   │  (Techo oscuridad) │   │  (Acción y Foco)   │   │   (Lienzo)   │   │
│   │    Jerarquía / UI  │   │   Cobertura ≤15%   │   │ Contraste AA │   │
│   └────────────────────┘   └────────────────────┘   └──────────────┘   │
│                                                                        │
│   PROHIBICIONES CRÍTICAS:                                              │
│   ❌ Negro puro (#000000)                                              │
│   ❌ Escalas de grises neutras/apagadas                                │
│   ❌ Botones o acentos en verde genérico                               │
│   ❌ Tonos de azul más oscuros que #0950F6                             │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Especificaciones de Color y Roles

```css
:root {
  /* =====================================================================
     Azul Institucional (Lienzo primario, texto principal y bordes)
     ===================================================================== */
  --brand-blue-500: #0950F6; /* Azul canónico: techo absoluto de oscuridad */
  --brand-blue-600: #0950F6; /* Idem 500 para evitar oscurecimiento */
  --brand-blue-400: #3570F8; /* Hover sobre fondos oscuros / acentos */
  --brand-blue-300: #628FF9; /* Bordes de foco activo e inputs interactivos */
  --brand-blue-200: #8EAFFB; /* Delineados y anillos secundarios */
  --brand-blue-100: #BACEFD; /* Divisores estructurales y trazos sutiles */
  --brand-blue-50:  #E6EEFE; /* Bisel exterior (DoubleBezelCard) y fondos suaves */

  /* =====================================================================
     Amarillo Vial (Llamada a la acción y badges. Cobertura <= 15%)
     ===================================================================== */
  --brand-yellow-500: #FFEC01; /* Tono primario vial de alta visibilidad */
  --brand-yellow-400: #FFF12E; /* Hover de botones primarios / CTAs */
  --brand-yellow-600: #E6D400; /* Estado activo / presionado */
  --brand-yellow-50:  #FFFDE6; /* Fondos tenues de selección (Flex / Destacados) */

  /* =====================================================================
     Superficies y Estados Operativos
     ===================================================================== */
  --brand-surface-canvas: #FFFFFF; /* Blanco puro de fondo */
  --brand-surface-card:   #FFFFFF; /* Superficie interior de tarjeta */
  --brand-error:          #EF4444; /* Validación de error y cancelaciones */
}
```

### 2.2 Jerarquía Tipográfica

| Nivel | Tipografía | Peso | Transformación | Tracking / Leading | Aplicación en la Marca |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display (H1 / Héroe)** | `Anton` (`font-display`) | 400 | UPPERCASE | `-0.05em` / `0.85 - 0.9` | Titulares de impacto, cifras destacadas |
| **Subtítulos y Eyebrows**| `Bebas Neue` (`font-subheading`) | 400 | UPPERCASE | `+0.05em` / `1.0` | Eyebrows de sección, etiquetas, CTAs |
| **Cuerpo y Lectura**     | `Outfit` (`font-sans`) | 400, 500, 600 | Normal | Normal / `1.5 - 1.625` | Párrafos, tablas de servicio, legal |
| **Métricas y Números**   | `Geist Mono` (`font-mono`) | 500, 600 | Normal | `tabular-nums` | Precios en ARS, distancias km, horarios |

### 2.3 Firmas de Componentes (Signature Design Patterns)

1. **`DoubleBezelCard` (Tarjeta de Doble Bisel):**
   - Bisel exterior: `bg-brand-blue-50/80` (`#E6EEFE`), borde fino `brand-blue-100` (`#BACEFD`), radio `rounded-2xl` (16px), padding perimetral de 8px (`p-2`).
   - Contenedor interior: `bg-white` (`#FFFFFF`), radio `rounded-xl` (12px), padding `p-6`, sombra sutil teñida.
   - Hover: Borde transiciona a `brand-blue-300` y eleva la elevación azul.
2. **`CTANestedPill` (Botón Píldora de Alto Impacto):**
   - Morfología: Redondeo total (`rounded-full`), altura táctil 48px a 56px.
   - Fondo: Amarillo `#FFEC01`, texto en Azul `#0950F6`, tipografía `Bebas Neue` en mayúsculas.
   - Microchip interior: Círculo translúcido (`bg-brand-blue-500/10`) con ícono de flecha que se desplaza exactamente 4px a la derecha en hover.
3. **Elevación Teñida (No Gray Shadows):**
   - Prohibido `rgba(0, 0, 0, ...)`.
   - Sombras con tinte azul: `0 25px 50px -12px rgba(9, 80, 246, 0.15)`.
   - Brillo de botón amarillo: `0 0 28px rgba(255, 236, 1, 0.45)`.

---

## 3. 📝 Voz de Marca, Tono y Salvaguardas de Copy (Voice & Copy-Guards)

### 3.1 Voseo Rioplatense Obligatorio
Todas las comunicaciones para clientes, soporte, UI, mensajes de error y documentación pública deben redactarse en **voseo rioplatense natural y profesional**:
- ✅ *"Cotizá tu envío en segundos"*, *"Escribinos por WhatsApp"*, *"Mirá nuestras tarifas vigentes"*.
- ❌ *"Cotiza tu envío"*, *"Escríbenos"*, *"Usted puede calcular su tarifa"*.

### 3.2 Glosario Operativo Canónico

| Término Permitido | Significado Real de Marca | Lo que NUNCA significa / Prohibido |
| :--- | :--- | :--- |
| **"Franja horaria de 3 hs"** | Ventana acordada de entrega para servicio Express (con 2 hs de anticipación) | ❌ "Entrega en 3 horas" o "en menos de 2 horas" |
| **"Bulto estándar"** | Bulto hasta **5 kg** o **40 × 40 × 30 cm** | ❌ "Límite de 15 kg" o "40 × 40 × 40 cm" |
| **"Recargos informados"** | Recargos fijos (lluvia, espera tras 10 min, parada extra) con monto público | ❌ "Envío sin sorpresas" (genera desconfianza si se aplica recargo) |
| **"Rendición acordada"** | Liquidación en el día, al día siguiente o semanal según cliente | ❌ "Garantía de rendición inmediata" |
| **"Periferia ($1.000/km ruta)"** | Destinos fuera de MDQ urbana (Batán, Sierra, Chapadmalal) | ❌ Barrios urbanos de MDQ (hasta 20 km entran en tarifario estándar) |
| **"Base Logística Friuli 1972"** | Centro de acopio, distribución y depósito fulfillment | ❌ "Punto de retiro o despacho para clientes" |
| **"Factura C"** | Comprobante estándar emitido a monotributistas y consumidores finales | ❌ "Factura A" (no se emite; solo acuerdos corporativos grandes) |

### 3.3 Las 9 Líneas Rojas Inviolables del Dueño

1. **Capacidad física honesta:** Nunca publicar "hasta 15 kg". El estándar publicado es 5 kg / 40x40x30 cm. El excedente se coordina como bulto extra.
2. **Tiempos Express reales:** Prohibido prometer "en 60 a 90 min" o "en 2 horas". Express entrega dentro de una franja de 3 horas elegida con 2 hs de anticipación.
3. **Cortes de servicio irrenunciables:**
   - *LowCost:* Corte 13:00 hs → Entrega antes de las 19:00 hs.
   - *Express:* Corte 15:00 hs → Último rango de entrega 17:00 a 19:00 hs.
   - *Flex:* Corte 15:00 hs → Entrega antes de las 20:00 hs.
4. **Respeto irrestricto al cadete:** Cero tolerancia a faltas de respeto hacia los repartidores. Se interrumpe la prestación a cualquier cliente infractor.
5. **No transporte de mercadería ilícita:** Verificación estricta de términos de carga legal.
6. **Sin seguros inventados:** No publicar coberturas porcentuales de seguro de paquete no vigentes.
7. **Rendición de contrareembolsos sin engaños:** No prometer inmediatez bancaria cuando la rendición física depende de la liquidación de caja en base.
8. **Friuli 1972 no atiende retiros al público:** La mercadería se entrega a domicilio; no es sucursal comercial de retiro.
9. **Capacidad antes que venta:** *"Preferimos decir que no podemos, a fallar"*. Si la flota está saturada por lluvia o demanda pico, se notifica el corte antes de tomar un pedido irrealizable.

---

## 4. 🛡️ Gobierno de Marca y Protección Automatizada (Brand Governance)

Para garantizar que ningún desarrollador o agente de inteligencia artificial degrade la identidad de marca, el repositorio cuenta con salvaguardas ejecutables:

### 4.1 Batería de Tests de Protección
- **`src/lib/copy-guard.test.ts`:** Escaneo estático en pre-commit y CI que bloquea cualquier afirmación prohibida por el dueño (falsas promesas horarias, pesos apócrifos, etc.).
- **`src/lib/promises.test.ts` & `src/lib/pricing.test.ts`:** Validación matemática de distancias viales, cortes y recargos.
- **`src/lib/llm-eval.ts`:** Evaluación semántica automatizada (`pnpm eval:llm`) contra un Golden Dataset para auditar las respuestas del asistente conversacional.

### 4.2 Matriz de Cumplimiento de Marca

```
┌──────────────────────────────────────┬────────────────────────┬───────────────────────┐
│ Control de Marca                     │ Mecanismo de Auditoría │ Umbral de Aprobación  │
├──────────────────────────────────────┼────────────────────────┼───────────────────────┤
│ Ley de Tres Colores (Sin #000000)    │ ESLint + Tailwind lint │ 100% libre de violac. │
│ Contraste Accesible (WCAG 2.2 AA)    │ Lighthouse CI          │ ≥ 4.5:1 en texto      │
│ Copy Guards (Sin promesas falsas)    │ Vitest (copy-guard)    │ 0 fallas permitidas   │
│ Voseo Rioplatense                    │ Brand Review & Eval    │ 100% consistente      │
│ Integridad Tarifaria Unificada       │ Unit & Route Tests     │ Precios centralizados │
└──────────────────────────────────────┴────────────────────────┴───────────────────────┘
```

---

## 5. 📞 Canales Oficiales y Datos Institucionales

- **Nombre Comercial:** Envíos DosRuedas
- **Base Operativa:** Friuli 1972, B7608 Mar del Plata, Provincia de Buenos Aires, Argentina
- **WhatsApp Oficial:** `+54 223 660-2699` (Atención 365 días, 08:00 a 22:00 hs)
- **Email Comercial / CEO:** `MatiasCejas@enviosdosruedas.com`
- **Instagram:** `@enviosdosruedas` (https://www.instagram.com/enviosdosruedas/)
- **Facebook:** `enviosdosruedas` (https://www.facebook.com/enviosdosruedas/)
- **Sitio Web Oficial:** `https://www.enviosdosruedas.com`
