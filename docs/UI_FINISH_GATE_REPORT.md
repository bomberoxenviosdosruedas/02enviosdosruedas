# Reporte Oficial UI Finish-Gate: Control de Calidad y No-Genericidad

> **Auditoría Pre-Ship de Calidad de Interfaz, Identidad Visual y Diferenciación de Producto**  
> *Versión 1.0 · Next.js 16 (App Router) · React 19 · Tailwind CSS v4*  
> *Auditor:* UI Finish-Gate Reviewer Specialist  
> *Fecha:* 30 de Octubre de 2026 · Mar del Plata, Argentina

---

## 1. 🔍 Product Lens (Lente de Producto)

**¿Quién usa esta interfaz y qué necesita resolver?**  
Comerciantes físicos, vendedores de Mercado Libre (Flex) y particulares en Mar del Plata que necesitan cotizar un envío urbano en moto, comparar tarifas (Express vs. LowCost) y despachar inmediatamente por WhatsApp con un socio logístico local de confianza que cuide su reputación comercial.

**Objeto de primera lectura:**  
El selector comparativo de tarifas y franjas horarias viales (Express: franja 3 hs vs. LowCost: corte 13:00 / entrega < 19:00 hs vs. Flex same-day).

**Acción primaria observable:**  
Cotización vial de 2 direcciones y confirmación por WhatsApp en un clic mediante `CTANestedPill`.

**Riesgo crítico a evitar:**  
Que la web parezca una plantilla genérica SaaS de Silicon Valley (con degradados violetas, tarjetas de métricas idénticas o ilustraciones abstractas) en lugar de una empresa marplatense real con base física en Friuli 1972 y motos en la calle.

---

## 2. 📋 Design Contract (Contrato de Diseño)

```markdown
# Envíos DosRuedas — Design Contract

- **User + Job:** Vendedor marplatense cotiza y despacha un paquete urbano en el día.
- **First-read Object:** Cotizador unificado con cálculo vial real y franjas horarias explícitas.
- **Primary Action:** `CTANestedPill` en Amarillo Señal (#FFEC01) con texto en Azul Canónico (#0950F6).
- **Density Decision:** Balanceada/Técnica. Espacio suficiente para legibilidad vial sin obligar a scroll innecesario en el cotizador.
- **Hierarchy:** H1 Display impactante -> Selector de modo (Express/LowCost) -> Inputs viales -> Resultado monetario tabular -> CTA WhatsApp.
- **Interaction Model:** Tarjetas táctiles de doble bisel concéntrico (`DoubleBezelCard`), microchips con traslación de 4px al hover y feedback instantáneo.
- **Responsive Priority:** En móvil (<640px) el cotizador se apila en 1 columna compacta con inputs de 48px y CTA sticky/visible en el primer viewport.
- **Forbidden Defaults:**
  ❌ Sombras grises o negras (`rgba(0,0,0,...)`).
  ❌ Degradados multicolores o estética "glassmorphism" genérica.
  ❌ Tarjetas con bordes rectos aburridos o estilos Bootstrap.
  ❌ Botones verdes estándar de WhatsApp desentonados con la paleta.
  ❌ Textos centrados flotantes sin anclaje local.
```

---

## 3. 🎯 Evaluación por Capas de Calidad

### Capa 1: Legibilidad de Producto y Anclaje Local (Product Legibility)
- **Evaluación:** **EXCELENTE**.
- **Evidencia en Código:**
  - El héroe [src/components/home/HeroAnimado.tsx](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/home/HeroAnimado.tsx) declara inmediatamente el anclaje físico: *"Base Friuli 1972 · Mar del Plata"* y *"Todo MDQ"*.
  - No usa frases vagas como "hacemos tu logística más fácil"; dice explícitamente *"Envíos en el día con motos propias. Llegamos a toda la ciudad y los repartidores son nuestros, sin tercerizar"*.
  - Las referencias geográficas (Batán, Sierra de los Padres, radio urbano de 20 km) sitúan la herramienta de inmediato en General Pueyrredón.

### Capa 2: Jerarquía Visual y No-Genericidad (Visual Uniqueness)
- **Evaluación:** **SOBRESALIENTE**.
- **Evidencia en Código:**
  - **Firma Geométrica:** El uso de `DoubleBezelCard` con bisel exterior concéntrico teñido en azul (`#E6EEFE` con 80% opacidad y borde `#BACEFD`) separa radicalmente la web de cualquier template genérico de Tailwind o Shadcn.
  - **Botón `CTANestedPill`:** En lugar de un botón rectangular estándar, implementa una píldora con microchip embebido translúcido cuya flecha se traslada 4px al hacer hover.
  - **Elevación Teñida:** Se cumple la prohibición de sombras grises; todas las elevaciones usan tintes de azul institucional (`rgba(9, 80, 246, 0.14)`) o el halo vial amarillo (`rgba(255, 236, 1, 0.45)`).

### Capa 3: Estados Interactivos y Accesibilidad (States & WCAG)
- **Evaluación:** **APROBADO**.
- **Evidencia en Código:**
  - Contraste WCAG 2.2 AA verificado: El texto Azul `#0950F6` sobre fondo Amarillo `#FFEC01` alcanza una relación de 4.9:1 (supera el 4.5:1 exigido).
  - Respeto a accesibilidad de movimiento: Todos los componentes interactivos respetan el hook `useReducedMotion()` de `motion/react`, desactivando traslaciones para usuarios sensibles.
  - Inputs de formulario: Altura táctil mínima de 48px con anillos de foco visibles de 2px (`ring-2 ring-brand-blue-500/20`).

---

## 4. 🚦 Veredicto del Finish Gate

```
┌────────────────────────────────────────────────────────────────────────┐
│                        VEREDICTO FINISH-GATE                           │
│                                                                        │
│                              >>> PASS <<<                              │
│                                                                        │
│   El diseño cumple con los criterios de autenticidad, coherencia de   │
│   marca y diferenciación de producto. No se siente genérico.           │
└────────────────────────────────────────────────────────────────────────┘
```

### ✅ Decisiones que se deben MANTENER (Keep)
1. **La Ley de Tres Colores (#0950F6, #FFEC01, #FFFFFF):** Proporciona una identidad vibrante e inconfundible inspirada en la señalética vial y el asfalto.
2. **DoubleBezelCard:** Es el elemento gráfico identitario más fuerte del sitio; evita que los módulos se vean como tarjetas web genéricas.
3. **Métricas en Geist Mono / Tabular Nums:** Precios y kilómetros alineados numéricamente aportan precisión de ingeniería logística.
4. **Voseo Rioplatense Natural:** La redacción marplatense en primera persona crea empatía inmediata con el comerciante local.

### 📌 Recomendaciones de Refinamiento Menor (No bloqueantes)
- Mantener siempre visible el resumen del precio calculado en el cotizador móvil mientras el usuario completa la segunda dirección.
- Asegurar que el fondo procedural de partículas en el Hero se mantenga liviano en dispositivos móviles de gama baja.
