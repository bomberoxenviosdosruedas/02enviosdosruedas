# Iconografía e Imagen — Envíos DosRuedas

> **Fuente:** `DESIGN.md` §9, `src/components/ui/`, `public/elementos/`.

---

## 1. Íconos

### 1.1 Librerías Permitidas (Orden de Prioridad)

| Librería | Paquete | Uso |
|---|---|---|
| **Lucide React** (Primaria) | `lucide-react` | 95% de íconos UI |
| **React Icons / Font Awesome** | `react-icons/fa` | **Solo** glifo WhatsApp (`FaWhatsapp`) |

### 1.2 Reglas de Uso

| Regla | Descripción |
|---|---|
| **Una familia por proyecto** | No mezclar Lucide con Phosphor/Tabler/HugeIcons en el mismo árbol. |
| **Nunca hand-rolled SVG** | Si falta glifo, instalar segunda librería o componer desde primitivas. |
| **Stroke width global** | Estandarizar `strokeWidth={1.5}` o `{2.0}` en todo el proyecto. |
| **Tamaño consistente** | `h-4 w-4` (16px) inline, `h-5 w-5` (20px) en botones, `h-6 w-6` (24px) en cards. |
| **Color por token** | `text-brand-blue-700` sobre blanco, `text-white`/`text-brand-yellow-500` sobre azul. |
| **Íconos decorativos** | `aria-hidden="true"` siempre. |

### 1.3 Íconos de Marca (Semánticos Fijos)

| Concepto | Ícono Lucide | Clase Base | Contexto |
|---|---|---|---|
| **Velocidad / Express** | `Zap` | `text-brand-yellow-500` | Badges Express, hero |
| **Ubicación / Origen-Destino** | `MapPin` | `text-brand-blue-700` / `text-brand-yellow-500` | Inputs, chips, mapa |
| **Tiempo / Corte** | `Clock` | `text-brand-yellow-500` | Horarios, chips |
| **Ruta / Navegación** | `Navigation` / `Route` | `text-brand-yellow-500` | Features, hero |
| **Seguridad / Garantía** | `ShieldCheck` | `text-brand-yellow-500` | Badges, promesas |
| **Usuario / Cliente** | `User` | `text-brand-blue-700` | Inputs nombre |
| **Teléfono / WhatsApp** | `Phone` / `MessageCircle` | `text-brand-blue-700` / `text-brand-yellow-500` | Inputs, CTAs |
| **Paquete / Producto** | `Package` / `PackageCheck` | `text-brand-blue-700` | Inputs, features |
| **Flota / Camión** | `Truck` | `text-brand-yellow-500` / `text-brand-blue-700` | LowCost, features |
| **Ahorro / Porcentaje** | `Percent` | `text-brand-yellow-500` | LowCost badge |
| **Mail / Contacto** | `Mail` | `text-brand-blue-700` | Contacto, footer |
| **Edificio / Base** | `Building2` | `text-brand-yellow-500` | Friuli 1972, hub |
| **Ayuda / FAQ** | `HelpCircle` | `text-brand-blue-700` / `text-white` | FAQ, accordion |
| **Chevron / Expandir** | `ChevronDown` | `text-brand-blue-700` / `text-white` | Accordion, selects |
| **Búsqueda** | `Search` | `text-brand-blue-700/60` | Search inputs |
| **Cerrar / Limpiar** | `X` | `text-brand-blue-700` | Clear search, modals |
| **Flecha Derecha / Acción** | `ArrowRight` / `ArrowUpRight` | `text-brand-blue-900` / `text-white` | CTAs, chips, links |
| **Check / Completado** | `Check` / `CheckCircle2` | `text-brand-yellow-500` / `text-brand-blue-500` | Lists, steps |
| **Sparkles / Mágico** | `Sparkles` | `text-brand-yellow-500` | Badges, animaciones |
| **Nube / Lluvia** | `CloudRain` | `text-white` | Flex pricing lluvia |
| **Compartir / Social** | `Share2` | `text-brand-yellow-500` | Redes, hero |
| **Enlace Externo** | `ExternalLink` | `text-brand-blue-900` | CTA chips |
| **Documento / Rastreo** | `MessageSquare` | `text-brand-blue-700` | Tracking, WhatsApp |
| **Capas / Lotes** | `Layers` | `text-brand-blue-700` | Batch grid header |

### 1.4 WhatsApp (Excepción)

```tsx
import { FaWhatsapp } from 'react-icons/fa';

// En CTA primario (fondo amarillo)
<CTANestedPill href="https://wa.me/..." variant="primary">
  <FaWhatsapp className="h-5 w-5" aria-hidden="true" /> WhatsApp Comercial
</CTANestedPill>

// El glifo PUEDE ser verde DENTRO del ícono (brand guidelines de Meta)
// El fondo del botón SIEMPRE amarillo brand-yellow-500
```

---

## 2. Logo de Marca

### 2.1 Archivo Único

| Archivo | Ruta | Formato | Uso |
|---|---|---|---|
| **Logo simplificado** | `/logo-envios-simplified.webp` | WebP | Header, Footer, Hero, Schema.org |

### 2.2 Reglas de Uso

| Regla | Descripción |
|---|---|
| **Mínimo 120px ancho** | Nunca más pequeño en desktop |
| **Sin recolorear** | El logo tiene sus colores propios; no aplicar `filter`, `tint`, `opacity` |
| **Alt text descriptivo** | `alt="Envíos DosRuedas - Logística última milla Mar del Plata"` |
| **Enlace a home** | `<Link href="/">` en header/footer |
| **Schema.org** | `"logo": { "@type": "ImageObject", "url": "https://enviosdosruedas.com/logo-envios-simplified.webp" }` |

### 2.3 Prohibido

- ❌ `/logo.svg`, `/logo.png`, `/logo-alt.webp` — solo el `.webp` simplificado.
- ❌ Logo dentro de `CTANestedPill` o botones.
- ❌ Versiones monocromo/invertidas generadas por CSS.

---

## 3. Imágenes y Fotografía

### 3.1 Fuentes Permitidas (Prioridad)

| Prioridad | Fuente | Ejemplo |
|---|---|---|
| **1. Generadas por IA** | Herramienta de generación (Midjourney, DALL-E, Stable Diffusion, Nano Banana) | Hero Card Media, dioramas 3D isométricos |
| **2. Picsum (Placeholder real)** | `https://picsum.photos/seed/{descriptivo}/{w}/{h}` | `https://picsum.photos/seed/moto-courier-mdq/800/600` |
| **3. Stock real (si hay licencia)** | Unsplash, Pexels vía URL directa | Solo si se provee licencia |
| **4. Placeholder explícito** | Comentario `<!-- TODO: hero product photo, 1600x1200 -->` | Si no hay herramienta de generación |

### 3.2 Reglas Críticas

| Regla | Descripción |
|---|---|
| **Hero necesita imagen real** | Texto + gradiente blob = placeholder (prohibido). Mínimo 2-3 fotos reales por landing. |
| **Next.js Image obligatorio** | `next/image` con `fill` + `sizes` + `priority` (above fold). |
| **Aspect ratios estándar** | Hero visual: `aspect-[4/3]` o `aspect-[16/9]`; Cards: `aspect-square` o `aspect-[4/3]`. |
| **Div-based fake screenshots PROHIBIDOS** | No construir fake UI con `<div>` rectángulos. Usar: screenshot real, imagen generada, componente real mini, o fotografía editorial. |
| **Logos partners reales** | `https://cdn.simpleicons.org/{slug}/ffffff` o `simple-icons` npm. **No** texto plano (`<span>Acme Co</span>`). |
| **Marcas inventadas → SVG propio** | Monograma (1 letra en círculo, ligadura 2 letras, glifo abstracto) inline `<svg>`. |

### 3.3 Hero Card Media (Diorama 3D)

- **Estilo:** Isométrico, clay mate + satin plastic, luz suave, paleta marca.
- **Elementos:** Moto courier, caja/paquete, mapa MDQ, edificio Friuli 1972, amarillo vial en detalles.
- **Generación:** Prompt estructurado (ver `docs/imagenes/hero-derecha/PROMPTS.md`).
- **Archivos en `public/elementos/`:**
  - `hero_home.webp` — Home
  - `icono_express.webp` — Express
  - `hero_faq.webp` — FAQ / Redes
  - `hero_contacto.webp` — Contacto
  - `hero_envios_express.webp` — Servicios Express
  - `hero_envios_lowcost.webp` — Servicios LowCost
  - `hero_envios_flex.webp` — Servicios Flex
  - `hero_emprendedores.webp` — Emprendedores
  - `hero_sobre_nosotros.webp` — Sobre Nosotros

### 3.4 Grilla Vectorial Procedural (Hero Background)

- SVG inline en `HeroProceduralBackground`: trama punteada 48px blanca (`opacity-[0.07]`) + nodos amarillos en cruces.
- **Sin raster**, **sin imagen externa**, 0 KB.

---

## 4. Ilustraciones Decorativas (Hand-rolled SVG)

| Estado | Regla |
|---|---|
| **Por defecto** | **Fuertemente desaconsejadas**. |
| **Aceptable SI** | 1. Brief lo pide explícitamente ("dibujame un logo SVG"). 2. Marca geométrica simple (cuadrado, círculo, wordmark en display type). 3. Confianza en calidad de salida. |

---

## 5. Checklist de Auditoría Imagen/Iconos

| ✅ | Verificación |
|---|---|
| [ ] Solo `lucide-react` + `react-icons/fa` (WhatsApp) en todo el proyecto |
| [ ] `strokeWidth` consistente (1.5 o 2.0) |
| [ ] Tamaños: 16px inline, 20px botones, 24px cards |
| [ ] Colores por token (`brand-blue-700`, `brand-yellow-500`, `white`) |
| [ ] `aria-hidden="true"` en todos los íconos decorativos |
| [ ] Logo único: `/logo-envios-simplified.webp` ≥ 120px, sin recolorear |
| [ ] Hero con imagen real (generada / Picsum / stock) — no gradiente solo |
| [ ] `next/image` con `fill`, `sizes`, `priority` (above fold) |
| [ ] Logos partners: `simple-icons` CDN o npm — no texto plano |
| [ ] Sin div-based fake screenshots |
| [ ] Sin ilustraciones decorativas hand-rolled sin justificación |