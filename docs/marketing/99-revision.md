# 99 — Prompt de revisión (usar después de cada pull request del sprint)

```
Vas a revisar un pull request recién terminado del Sprint 1 de Envíos DosRuedas contra su especificación original en docs/marketing/F4-1-specs/. No lo vas a corregir vos mismo en este paso — solo comparar y reportar desvíos.

PASOS
1. Identificá qué ítem del backlog resuelve el PR (BL-01 a BL-19 del Sprint 1) y abrí su spec correspondiente en docs/marketing/F4-1-specs/ y su prompt original en docs/marketing/F4-2-prompts/.
2. Compará el diff real contra cada sección de la spec: Alcance (¿tocó solo lo que decía? ¿se metió en archivos prohibidos?), Contenido (¿el copy final coincide con el definido, o inventó algo no autorizado?), Accesibilidad, SEO, Casos borde, Criterios de aceptación.
3. Verificá los criterios de aceptación uno por uno, no en general — cada uno con su propia evidencia (comando corrido, captura, resultado de test).
4. Confirmá que corrió pnpm build, pnpm run lint, pnpm tsc --noEmit y pnpm test, y que los cuatro están en verde (no asumas que lo hizo porque lo dice el PR — volvé a correrlos si es posible).
5. Si algún ítem tenía un bloqueo por pregunta sin responder del dueño (ver docs/marketing/F4-0-backlog.md §4), confirmá que el PR NO inventó el dato bloqueado y que dejó el TODO/placeholder explícito en su lugar.

SALIDA
Una lista de desvíos, cada uno con: qué dice la spec, qué hizo el PR, si es un desvío aceptable (justificado) o hay que corregirlo antes de mergear. Si no hay desvíos, decilo explícitamente — no generes hallazgos para llenar la lista.
```

---

## Orden de ejecución del Sprint 1 (según dependencias)

1. **BL-01** (redirecciones y Vercel) — sin dependencias, puede ir primero.
2. **BL-02** (metadata global) — sin dependencias técnicas; su parte de horario depende de una respuesta del dueño, pero el resto (titles, keywords, sameAs) no espera a nadie.
3. **BL-03** (promesas y fórmula de precio) — sin dependencias técnicas de BL-01/02, pero conviene hacerlo después de BL-02 porque ambos tocan `layout.tsx` (menos conflictos de merge si van en orden).
4. **BL-04** (contadores SSR y texto sin espacios) — sin dependencias duras, pero coordinar con BL-14 (fuera de este sprint) si ese PR ya tocó el copy de "0 paquetes extraviados" antes que este.
5. **BL-19** (email de contacto) — independiente del resto, puede ir en cualquier momento del sprint; se deja al final porque es el de menor impacto del grupo.

No hay bloqueos duros entre los cinco ítems del Sprint 1 entre sí — los bloqueos reales son externos (respuestas del dueño), no de secuencia de código. Se puede paralelizar si hay más de un agente/desarrollador disponible.
