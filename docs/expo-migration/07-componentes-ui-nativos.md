# 07 - Componentes UI Nativos

Este documento detalla la migración de los componentes UI del proyecto web a sus equivalentes nativos en Expo, asegurando una experiencia de usuario consistente y accesible.

## 1. Matriz de Reemplazo UI

| Componente Web (Radix UI / Lucide React) | Componente Nativo (Expo / React Native) | Notas de Implementación |
|------------------------------------------|-----------------------------------------|-------------------------|
| Accordion (Radix UI)                     | `@expo/ui` (List/ListItem/Section) o Custom Reanimated | Usar `List` para listas agrupadas; crear componentes custom con `Reanimated` si es necesario. |
| Dialog / Modal (Radix UI)                | `expo-ui` Modal / BottomSheet           | Preferir `BottomSheet` para formularios y contenido contextual. |
| Menu (Radix UI)                          | `@expo/ui` Menu                         | Integrar con `expo-router` Link.Menu si aplica. |
| Íconos (Lucide React)                    | `lucide-react-native`                   | Asegurar que los íconos sean escalables y tengan estilos consistentes. |
| Íconos (Lucide React - iOS)              | `expo-symbols` (SymbolView)             | Para íconos nativos de iOS, usar `SymbolView` con nombres de SF Symbols. |
| Slider / Toggle / Picker                 | `@expo/ui` (Slider, Switch, Picker)     | Utilizar los componentes nativos de `@expo/ui` para mejor rendimiento y look & feel. |

## 2. Migración de Mapas

- **Sustitución de `LeafletRouteMap.tsx`:**
  - Instalar `react-native-maps`.
  - Crear un nuevo componente `NativeRouteMap.tsx`.
  - Consumir el `polyline` y la información de ruta desde el endpoint `/api/v1/quote`.
  - Renderizar el mapa y la ruta utilizando las funcionalidades de `react-native-maps`.
  - Añadir marcadores personalizados para origen y destino.

## 3. Feedback y Formularios

- **Controles de Entrada Nativos:**
  - **`TextInput`:** Utilizar el componente `<TextInput>` de React Native, asegurando la correcta integración con `zod` para validación.
  - **Selectores:**
    - Para franjas horarias o selecciones complejas, considerar el uso de `expo-ui` Picker o implementar un modal custom con `BottomSheet`.
    - Para fechas, usar `@react-native-community/datetimepicker`.

- **Accesibilidad Móvil:**
  - Asegurar que todos los controles de entrada tengan `accessibilityLabel` descriptivos.
  - Implementar `keyboardShouldPersistTaps='handled'` en contenedores scrollables para una correcta interacción con el teclado.
  - Validar el comportamiento con `Text` `selectable` para datos importantes y mensajes de error.
  - Considerar el tamaño de los targets táctiles (mínimo 44x44pt) y el uso de `hitSlop` si es necesario.
