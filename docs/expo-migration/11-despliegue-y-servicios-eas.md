# 11 - Despliegue y Servicios EAS (Hosting y OTA)

Este documento detalla la estrategia de despliegue del backend, la configuración de variables de entorno en EAS y la estrategia de actualizaciones Over-The-Air (OTA) para la aplicación móvil, aplicando la habilidad `eas-hosting`.

---

## 1. Exposición y Seguridad de la API

Para asegurar que las peticiones realizadas desde la aplicación móvil hacia los Route Handlers del backend (Next.js / EAS Hosting) sean seguras y legítimas, se implementan las siguientes capas de seguridad:

1. **Verificación de Cabeceras (`Sec-Fetch-Site` / Custom User-Agent):**
   - Los endpoints del backend validan la presencia de un encabezado de identificación de cliente (ej. `X-Client-Source: DosRuedas-Mobile`) o tokens de autorización para rechazar peticiones provenientes de scrapers o sitios web externos no autorizados.

2. **CORS (Cross-Origin Resource Sharing):**
   - Configuración restrictiva de cabeceras CORS en los Route Handlers para permitir únicamente conexiones desde la app móvil o el dominio oficial del sitio web.

3. **Rate Limiting:**
   - Implementación de límites de peticiones por IP/dispositivo en endpoints críticos como `/api/v1/quote` y `/api/assistant` para evitar ataques de denegación de servicio (DoS) o consumo excesivo de la API de Google Maps y Gemini.

---

## 2. Variables de Entorno para EAS (`eas.json`)

La URL base del backend debe configurarse de manera dinámica según el entorno de ejecución mediante la variable de entorno expuesta en el cliente (`EXPO_PUBLIC_API_BASE_URL`).

### Configuración en `eas.json` y perfiles:
- **Development (Desarrollo Local):**
  - `EXPO_PUBLIC_API_BASE_URL=http://localhost:3000`
- **Staging / Preview (Entorno de Pruebas):**
  - `EXPO_PUBLIC_API_BASE_URL=https://staging.enviosdosruedas.com`
- **Production (Producción):**
  - `EXPO_PUBLIC_API_BASE_URL=https://enviosdosruedas.com`

Se configuran en EAS mediante la CLI o el panel de control:
```bash
eas env:create --name EXPO_PUBLIC_API_BASE_URL --value https://enviosdosruedas.com --environment production
```

---

## 3. Estrategia OTA (Over-The-Air Updates con EAS Update)

Para desplegar parches rápidos en la interfaz de usuario, correcciones de estilo y lógica cliente sin necesidad de pasar por el proceso de revisión de las tiendas de aplicaciones (App Store / Google Play), se utiliza **EAS Update**.

1. **Configuración de `app.json` para OTA:**
   ```json
   {
     "expo": {
       "updates": {
         "url": "https://u.expo.dev/tu-project-id"
       },
       "runtimeVersion": {
         "policy": "appVersion"
       }
     }
   }
   ```

2. **Flujo de Publicación de Actualizaciones:**
   - Cuando se realiza un cambio menor en el código de la app Expo (pantallas, componentes UI, textos), se publica una actualización en vivo mediante EAS CLI:
     ```bash
     eas update --branch production --message "Hotfix: Corrección de formato en cotizador"
     ```
   - Los usuarios reciben la actualización de forma transparente la próxima vez que abren la aplicación.
   - Las actualizaciones que involucren cambios en librerías nativas (como `react-native-maps`) requerirán un nuevo build completo en las tiendas (`eas build`).
