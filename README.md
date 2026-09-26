# CLAUDE.md — Guía de Estilo y Reflejos Operativos

## 🔗 Vinculación de Contexto

- Consulta las dependencias del stack, librerías base y comandos de ejecución definidos en [AGENTS.md](./AGENTS.md).

## 🎨 Identidad Semántica y Copy (Región: Mar del Plata)

- **Voz de Marca:** Emplea estrictamente el voseo rioplatense en los textos de interfaz de usuario e inputs ("Cotizá", "Calculá", "Escribinos").
- **Datos Geográficos de Prueba:** Al construir mocks de mapas, ruteos u autocompletados, utiliza locaciones reales del Partido de General Pueyrredón (ej. Güemes, Chauvín, Puerto, Friuli 1972).

## 🚫 Restricciones Críticas (Líneas Rojas)

- **Fórmula de Precios:** Queda terminantemente prohibido inventar o aproximar el cálculo de tarifas logísticas comerciales. El excedente kilométrico superior a 10 km debe redondearse al entero superior utilizando `Math.ceil` obligatoriamente.
- **Aislamiento de Colores:** No inyectes clases arbitrarias de color en formato Hexadecimal ni utilices las escalas por defecto de Tailwind (`slate`, `zinc`, `neutral`). Utiliza los tokens inmutables del proyecto: `brand-blue-700`, `brand-yellow-500` y `brand-white-50`.
- **Exportaciones Limpias:** No uses exportaciones por defecto (`export default`) dentro de los componentes funcionales de la UI en `src/components/ui/`. Las exportaciones por defecto quedan reservadas únicamente para los puntos de entrada obligatorios del App Router (`page.tsx`, `layout.tsx`, `error.tsx`).

## 🏁 Criterios de Aceptación (Checklist DoD)

Antes de proponer un cambio como completado, realiza de manera autónoma en la terminal:

1. Validar que no existan regresiones de tipado ejecutando `pnpm typecheck`.
2. Correr el linter global para asegurar limpieza sintáctica.
3. Producir una compilación limpia del proyecto mediante `pnpm build` para asegurar que ningún componente dinámico rompa el renderizado estático del servidor.
