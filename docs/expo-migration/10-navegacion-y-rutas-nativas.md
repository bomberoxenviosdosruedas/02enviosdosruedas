# 10 - Navegación y Rutas Nativas (Expo Router)

Este documento detalla la planificación de la navegación móvil utilizando **Expo Router**, aplicando la habilidad `expo-router`. Define la estructura de layouts, pestañas nativas, modales y esquema de deep linking.

---

## 1. Layout Raíz (`app/_layout.tsx`)

El layout raíz inicializa el proveedor de navegación global, maneja la carga asíncrona de fuentes oficiales (Anton, Bebas Neue, Outfit) y configura la barra de estado nativa.

```tsx
// app/_layout.tsx
import { useEffect } from 'react';
import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { ThemeProvider, DefaultTheme } from 'expo-router/react-navigation';

// Evitar que el splash screen se oculte automáticamente antes de cargar fuentes
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Outfit': require('../src/assets/fonts/Outfit-Regular.ttf'), // O equivalente
    'Anton': require('../src/assets/fonts/Anton-Regular.ttf'),
    'BebasNeue': require('../src/assets/fonts/BebasNeue-Regular.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <StatusBar style="light" backgroundColor="#0950F6" />
      <Stack
        screenOptions={{
          headerShown: false, // Ocultar header por defecto, manejado por las pestañas o stacks internos
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen 
          name="modal/shipping-detail" 
          options={{ presentation: 'formSheet', sheetGrabberVisible: true }} 
        />
        <Stack.Screen 
          name="modal/assistant-chat" 
          options={{ presentation: 'modal', title: 'Asistente DosRuedas' }} 
        />
      </Stack>
    </ThemeProvider>
  );
}
```

---

## 2. Tab Bar Nativo (`app/(tabs)/_layout.tsx`)

Diseña la barra de navegación inferior en pestañas utilizando las pestañas nativas o `Tabs` de Expo Router, estilizadas con el azul corporativo `#0950F6` y el amarillo vial `#FFEC01` para elementos activos.

```tsx
// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFEC01', // Amarillo Vial para selección activa
        tabBarInactiveTintColor: '#BACEFD', // Azul suave inactivo
        tabBarStyle: {
          backgroundColor: '#0950F6', // Azul Corporativo canónico
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerStyle: {
          backgroundColor: '#0950F6',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontFamily: 'BebasNeue',
          fontSize: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cotizar"
        options={{
          title: 'Cotizar',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calculator-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="servicios"
        options={{
          title: 'Servicios',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cube-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contacto"
        options={{
          title: 'Contacto',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
```

---

## 3. Modales y Deep Linking

### A. Presentación de Pantallas Flotantes
- **Detalles de Envío:** Configurado como `formSheet` en el Stack raíz para permitir gestos de arrastre nativos hacia abajo (swipe-to-dismiss).
- **Chat del Asistente (Gemini):** Configurado como `modal` clásico de pantalla completa para proporcionar una experiencia inmersiva de chat conversacional.

### B. Esquema de URLs Nativas (`app.json`)
Para permitir que la app móvil soporte enlaces profundos (Deep Linking) y apertura directa desde notificaciones o web, se configura el esquema en `app.json`:

```json
{
  "expo": {
    "name": "Envíos DosRuedas",
    "slug": "envios-dosruedas-mobile",
    "scheme": "enviosdosruedas",
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.enviosdosruedas.mobile"
    },
    "android": {
      "package": "com.enviosdosruedas.mobile"
    },
    "plugins": [
      "expo-router",
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Permitir acceso a la ubicación para calcular rutas y cotizaciones precisas."
        }
      ]
    ]
  }
}
```
