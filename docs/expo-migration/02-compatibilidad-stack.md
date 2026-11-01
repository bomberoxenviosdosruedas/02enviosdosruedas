# 02 - Compatibilidad del Stack Tecnológico

Este documento diagnostica las dependencias actuales del proyecto web Envíos DosRuedas y establece el mapeo hacia sus equivalentes en el ecosistema Expo / React Native.

## 1. Diagnóstico de dependencias (package.json)

### Librerías Compatibles (o con poco cambio)
| Paquete | Estado | Acción en Expo |
|---------|--------|----------------|
| `zod` | ✅ Compatible | Se usa igual para validación de esquemas. |
| `lucide-react` | ⚠️ Reemplazar | Usar `lucide-react-native`. |
| `clsx` / `tailwind-merge` | ✅ Compatible | Útiles si se usa NativeWind. |
| `react-hook-form` | ✅ Compatible | Funciona perfectamente en React Native. |

### Librerías puramente Web (A reemplazar)
| Paquete | Motivo | Equivalente Expo / Native |
|---------|--------|---------------------------|
| `next` | Framework Web | `expo-router` |
| `leaflet` | Manipulación de DOM | `react-native-maps` |
| `radix-ui/*` | Basado en accesibilidad Web | `@expo/ui` o `Gorhom Bottom Sheet` |
| `framer-motion` | Animaciones Web | `react-native-reanimated` |
| `react-icons` | SVGs para Web | `@expo/vector-icons` |
| `@number-flow/react` | Animaciones de números Web | `react-native-reanimated` (custom) |

### Infraestructura Crítica (Desacoplar)
| Paquete | Estado | Estrategia |
|---------|--------|------------|
| `prisma` | ❌ Incompatible | Mover a la capa de API (Server). El cliente usa `fetch`. |
| `@google/genai` | ⚠️ Riesgo | No exponer API Keys en el cliente. Mover a la API. |
| `pg` | ❌ Incompatible | Acceso directo a DB prohibido desde el móvil. |

## 2. Mapeo de Estilos: de Tailwind v4 a Nativo

El proyecto utiliza un sistema de diseño estricto basado en la "Ley de Tres Colores" definido en `@theme` de Tailwind v4.

### Opción Recomendada: NativeWind v4
Dado que el proyecto ya usa Tailwind v4 con variables CSS personalizadas, la transición natural es **NativeWind**.

**Mapeo de Tokens:**
- **Colores:** Los colores definidos en `globals.css` (como `--color-brand-blue-500`) deben mapearse en el archivo de configuración de NativeWind para ser usados como `bg-brand-blue-500`.
- **Tipografías:**
  - `Anton` (Display) → Cargar vía `expo-font` y mapear a una clase de fuente.
  - `Outfit` (Sans) → Fuente por defecto del sistema o cargar vía Google Fonts.
- **Layout:** Reemplazar `display: grid` (no soportado nativamente) por `flexbox` (comportamiento por defecto en React Native).

### Alternativa: StyleSheet + Design Tokens
Si se prefiere evitar dependencias de compilación adicionales, se debe crear un archivo `src/theme/tokens.ts` que exporte los valores de `globals.css` como constantes de JavaScript para ser usadas en `StyleSheet.create()`.

## 3. Reemplazo de Componentes UI

| Componente Web | Componente Native (@expo/ui primero) |
|----------------|--------------------------------------|
| Accordion (Radix) | `expo-ui` (List/Group) o Custom Reanimated |
| Dialog / Modal | `expo-ui` (Modal/BottomSheet) |
| Navigation Menu | `expo-router` (Tabs / Stack) |
| Bento Grid | `FlatList` con `numColumns` o `FlashList` |
| Hero Background | `Canvas` (react-native-skia) |

## 4. Mapas y Geolocalización

El núcleo de negocio depende de `Leaflet` y `Google Directions`.
- **Visualización:** Migrar de `Leaflet` a `react-native-maps`.
- **Cálculo:** Mantener `calculateQuoteAction` como un endpoint de API en Next.js. El cliente móvil envía las coordenadas y recibe el precio y el polyline decodificado.
- **Autocompletado:** Usar `react-native-google-places-autocomplete`.
