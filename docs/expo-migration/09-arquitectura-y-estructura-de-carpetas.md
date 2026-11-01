# 09 - Arquitectura y Estructura de Carpetas

Este documento define la organización física del nuevo proyecto móvil `02enviosdosruedas-mobile`, optimizada para Expo Router.

## 1. Árbol Canónico de Directorios

La estructura sigue las mejores prácticas de Expo para facilitar la escalabilidad y mantener las rutas separadas de la lógica de negocio.

```text
├── assets/                  # Imágenes, fuentes y assets estáticos
├── scripts/                 # Scripts de automatización (Python/Node)
├── src/
│   ├── app/                 # Expo Router routes ONLY — rutas de la app
│   │   ├── (tabs)/          #   Navegación principal en pestañas
│   │   ├── _layout.tsx      #   Layout raíz con proveedores
│   │   ├── index.tsx        #   Ruta inicial
│   │   └── [...not-found].tsx
│   ├── components/          # UI reusable (button, card, input...)
│   ├── screens/             # Vistas completas (home, cotizar, contacto...)
│   ├── services/            # Clientes API, conectores (api.ts)
│   ├── hooks/               # Hooks custom (geolocalización, autenticación)
│   ├── constants/           # Constantes del sistema, colores, temas
│   └── theme/               # Sistema de diseño, tokens, tipografías
├── app.json                 # Configuración del proyecto Expo
├── eas.json                 # Configuración de builds y despliegues
└── package.json
```

## 2. Regla de Separación

- **`app/` (Strictly Routes):** Todo archivo dentro de esta carpeta se convierte en una ruta pública. **Nunca** colocar componentes, tipos o utilidades aquí. Los archivos `app/` solo deben renderizar pantallas que importan desde `screens/` o `components/`.
- **`src/` (Reusable Logic):**
  - **`components/`:** UI atómica y reutilizable.
  - **`screens/`:** Vistas complejas que agrupan componentes y lógica de pantalla.
  - **`services/`:** Capa de red y comunicación con la API.
  - **`hooks/`:** Lógica de estado reusable.
  - **`constants/`:** Configuración estática, keys y configuraciones.

## 3. Configuración del Proyecto (app.json)

Entradas clave para `app.json`:

```json
{
  "expo": {
    "name": "Envios Dos Ruedas",
    "slug": "02enviosdosruedas-mobile",
    "scheme": "enviosdosruedas",
    "ios": {
      "bundleIdentifier": "com.enviosdosruedas.mobile",
      "supportsTablet": true
    },
    "android": {
      "package": "com.enviosdosruedas.mobile"
    },
    "plugins": [
      "expo-router",
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Necesitamos tu ubicación para cotizar envíos precisos."
        }
      ],
      "expo-font"
    ]
  }
}
```

- **Esquema de URL:** `scheme` permite el deep linking.
- **Permisos:** Definidos explícitamente en `plugins`.
- **Fuentes:** Se cargan mediante el plugin `expo-font`.
