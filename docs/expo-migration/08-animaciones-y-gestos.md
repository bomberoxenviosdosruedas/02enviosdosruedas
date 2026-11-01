# 08 - Animaciones, Gestos e Interacción

Este documento define la estrategia de animación, gestos y retroalimentación háptica para la migración de la aplicación web a nativo (Expo), aplicando la habilidad `expo-animation`.

---

## 1. Sustitución de Framer Motion

El proyecto web utiliza `motion` (`framer-motion`) para animaciones declarativas de entrada, salida y micro-interacciones. En el entorno nativo con Expo, se reemplaza por **`react-native-reanimated` (v4)** ejecutando worklets en el hilo de UI (UI thread) para garantizar 60/120 FPS sin bloqueos en el hilo de JavaScript.

| Patrón Web (`framer-motion`) | Equivalente Nativo (`react-native-reanimated` / Expo Router) | Notas de Implementación |
|-----------------------------|---------------------------------------------------------------|-------------------------|
| `motion.div` con `initial/animate` | Componentes animados de Reanimated (`Animated.view`) con propiedades `entering` / `exiting` o estilos animados (`useAnimatedStyle`). | Nunca animar `width`, `height` o `margin`. Usar `transform` (`scale`, `translateY`) y `opacity`. |
| Modales desplegables con `AnimatePresence` | `presentation: 'formSheet'` en `expo-router` o BottomSheet nativo de `@expo/ui`. | Aprovechar la hoja modal nativa del sistema operativo en lugar de recrearla en JS. |
| Transiciones entre páginas web | Stack nativo de `expo-router` (`animation: 'slide_from_right'`, etc.). | El sistema de navegación nativo maneja las transiciones de pantalla con aceleración de hardware. |

---

## 2. Contador de Precios Dinámico

En la web, el proyecto utiliza `@number-flow/react` para animar el cambio numérico en las cotizaciones. En React Native, esto se implementa mediante un componente personalizado con `react-native-reanimated` y `useSharedValue` / `useAnimatedReaction`.

### Diseño del Contador Animado (`AnimatedPriceCounter.tsx`)
```tsx
// Ejemplo conceptual de contador de precios con Reanimated
import React, { useEffect } from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';
import Animated, { useSharedValue, useAnimatedProps, withTiming } from 'react-native-reanimated';

const AnimatedText = Animated.createAnimatedComponent(Text);

interface Props {
  value: number;
  style?: StyleProp<TextStyle>;
}

export function AnimatedPriceCounter({ value, style }: Props) {
  const animatedValue = useSharedValue(value);

  useEffect(() => {
    animatedValue.set(withTiming(value, { duration: 300 }));
  }, [value]);

  // En una implementación completa, se usa useAnimatedProps para formatear la moneda pesos ($)
  return (
    <AnimatedText style={style}>
      {`$${value.toLocaleString('es-AR')}`}
    </AnimatedText>
  );
}
```

---

## 3. Gestos e Interacción Háptica

Los gestos táctiles y la retroalimentación háptica son pilares fundamentales para que la app se sienta verdaderamente nativa y "cara".

### A. Gestos (`react-native-gesture-handler`)
- **Deslizar para cerrar modales / bottom sheets:** Se utiliza `Gesture.Pan()` de `react-native-gesture-handler` combinado con `withSpring` para permitir arrastrar y soltar paneles con inercia y velocidad de salida.
- **Configuración de muelles (Spring Physics):**
  ```ts
  const springConfig = {
    duration: 300,
    dampingRatio: 0.8,
    overshootClamping: true,
  };
  ```

### B. Retroalimentación Háptica (`expo-haptics`)
Se integra condicionalmente en los momentos clave de interacción:
- **Presionar Botones CTA (Ej. Cotizar, Enviar):**
  ```ts
  import * as Haptics from 'expo-haptics';

  const handlePressCTA = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    // Lógica de acción...
  };
  ```
- **Selección en Pickers o Switches:** `Haptics.selectionAsync()` al cambiar de servicio (Express vs LowCost) o ajustar deslizadores.
- **Acciones de Éxito / Error:** `Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)` al concretar una cotización o enviar feedback correctamente.

---

## 4. Reglas de Oro de Animación en Dispositivos Móviles

1. **Cero `setState` en gestores de gestos o scroll:** Toda interpolación de posición o escala se calcula en el hilo de UI mediante worklets y `useSharedValue`.
2. **Curvas de Easing Optimizadas:** Uso de `Easing.bezier(0.23, 1, 0.32, 1)` (fuerte aceleración y desacoplamiento suave) para transiciones que no usan resortes.
3. **Respeto por Movimiento Reducido:** Uso de `useReducedMotion()` para simplificar automáticamente las animaciones de traslación/escala a simples fundidos (`opacity`) cuando el usuario lo tenga configurado en su sistema operativo.
