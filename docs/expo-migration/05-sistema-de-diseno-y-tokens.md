# 05 - Sistema de Diseño y Tokens

Este documento detalla la migración de la identidad visual del proyecto web Envíos DosRuedas a un sistema de diseño nativo para Expo, basándose en la "Ley de Tres Colores" y las tipografías oficiales.

## 1. Ley de Tres Colores Nativa

La paleta de colores actual definida en `src/app/globals.css` se mapeará a constantes de TypeScript y a clases de NativeWind v4, priorizando los colores semánticos nativos cuando sea posible.

### Mapeo de Colores a Constantes TypeScript y NativeWind

```typescript
// src/theme/colors.ts (ejemplo)
import { Platform } from "react-native";
import { Color } from "expo-router";

export const brandColors = {
  // Azul Corporativo: #0950F6 — tope máximo de oscuridad
  blue50: "#E6EEFE",
  blue100: "#BACEFD",
  blue200: "#8EAFFB",
  blue300: "#628FF9",
  blue400: "#3570F8",
  blue500: "#0950F6", // Primario canónico

  // Amarillo Vial: #FFEC01 — para CTAs y alta jerarquía (<=15% del área)
  yellow50: "#FFFDE6",
  yellow100: "#FFFAB8",
  yellow200: "#FFF78A",
  yellow300: "#FFF45C",
  yellow400: "#FFF12E",
  yellow500: "#FFEC01", // CTA primario
  yellow600: "#E6D400",

  // Blanco: #FFFFFF
  white: "#FFFFFF",
};

export const semanticColors = {
  label: Platform.select({
    ios: Color.ios.label,
    android: Color.android.dynamic.onSurface,
    default: brandColors.blue500,
  })!,
  systemBackground: Platform.select({
    ios: Color.ios.systemBackground,
    android: Color.android.dynamic.surface,
    default: brandColors.white,
  })!,
  // ... otros colores semánticos
};

export const colors = { ...brandColors, ...semanticColors };

```

**Integración con NativeWind v4:**
Los tokens de color se configurarán en `tailwind.config.js` (o `tailwind.config.ts`) para ser usados directamente como clases de Tailwind en React Native (ej. `text-blue-500`, `bg-yellow-500`).

## 2. Tipografía Oficial

Las fuentes oficiales (`Anton`, `Bebas Neue`, `Outfit`, `Geist Mono`) se integrarán utilizando `@expo-google-fonts` para asegurar una carga eficiente y correcta en Expo.

### Integración de Fuentes con `@expo-google-fonts`

```typescript
// app/_layout.tsx (ejemplo de carga)
import { useFonts } from 'expo-font';
import { Anton_400Regular } from '@expo-google-fonts/anton';
import { Outfit_400Regular, Outfit_600SemiBold } from '@expo-google-fonts/outfit';
// ... otras fuentes

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Anton_400Regular,
    Outfit_400Regular,
    Outfit_600SemiBold,
    // ... otras fuentes
  });

  if (!fontsLoaded) {
    return null; // O un Splash Screen
  }

  return <Stack />; // O NativeTabs
}
```

**Mapeo de Tipografías a `theme/typography.ts`:**

```typescript
// src/theme/typography.ts (ejemplo)
import { TextStyle } from "react-native";
import { colors } from "./colors";

export const type = {
  display: { fontFamily: "Anton_400Regular", fontSize: 34, color: colors.label, fontWeight: "400" },
  headline: { fontFamily: "Outfit_600SemiBold", fontSize: 22, color: colors.label, fontWeight: "600" },
  body: { fontFamily: "Outfit_400Regular", fontSize: 17, color: colors.label, fontWeight: "400" },
  mono: { fontFamily: "GeistMono_400Regular", fontSize: 14, color: colors.label, fontVariant: ['tabular-nums'] },
  // ... otros estilos
} as const satisfies Record<string, TextStyle>;
```

## 3. Primitivas de Diseño

Las elevaciones, radios de borde y componentes de marca específicos se traducirán a reglas estilísticas de React Native `StyleSheet` o clases de NativeWind v4, priorizando las convenciones nativas.

### Radios de Borde (Border Radius)
Se centralizarán en `src/theme/radius.ts` y se aplicarán con `borderCurve: "continuous"` para un acabado nativo (iOS).

```typescript
// src/theme/radius.ts
export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  full: 9999,
} as const;
```

### Elevaciones (Sombras)
Se definirán como cadenas de `boxShadow` en `src/theme/shadows.ts` para ser usadas con Reanimated o estilos inline. Se evita el uso de `elevation` (Android) por sus implicaciones en rendimiento.

```typescript
// src/theme/shadows.ts
export const shadows = {
  card: "0 1px 2px rgba(0, 0, 0, 0.05)",
  raised: "0 4px 12px rgba(0, 0, 0, 0.10)",
  overlay: "0 8px 24px rgba(0, 0, 0, 0.18)",
} as const;
```

### Componentes de Marca (Ej. DoubleBezelCard, CTANestedPill)
Estos componentes personalizados se reconstruirán utilizando primitivas de React Native y el sistema de tokens definido.

- **`DoubleBezelCard`:** Se implementará como un componente `Card` genérico (ej. `src/components/Card.tsx`) que acepte `children` y aplique los `radius` y `shadows` definidos, con la posibilidad de variantes para el "doble bisel" mediante `Pressable` y estilos dinámicos.
- **`CTANestedPill`:** Se traducirá a un componente `Button` o `Pressable` (`src/components/Button.tsx`) que acepte iconos y etiquetas, con variantes para su estilo de "píldora anidada" y utilizando los `spacing` y `radius` para el layout y la forma.

Se promoverá la composición sobre la configuración, aceptando `children` para contenido complejo y manteniendo los props específicos para la intención visual (variante, tamaño, estado).