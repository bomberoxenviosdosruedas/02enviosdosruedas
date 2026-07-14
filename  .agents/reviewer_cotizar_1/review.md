## Review Summary

**Verdict**: REQUEST_CHANGES

This review evaluates the styling, layout, correctness, and design system alignment of the Cotizar Express and LowCost components and routes. While the code is structurally sound, compiles cleanly (`pnpm build` passes with zero errors), and passes the entire Vitest suite (99/99 tests passing), there is a key misalignment with the design system specifications regarding the action button color, and an optimization opportunity for API robustness.

---

## Findings

### [Major] Finding 1: Submit Button Color Discrepancy in CotizadorExpressForm
- **What**: The main submit button of the Express cotizador does not match the designated brand color.
- **Where**: `src/components/cotizar/express/CotizadorExpressForm.tsx` (Line 184)
- **Why**: According to `DESIGN.md` (Section 6, Line 83), the `/cotizar/express` route requires: 
  > "...el botón de acción destacado en color Amarillo 500 (#FFEC01)."
  However, the button is currently styled with `bg-[#0636A5]` (Azul Corporativo Primario) and `hover:bg-[#0742CA]`.
- **Suggestion**: Update the classes on the submit button in `CotizadorExpressForm.tsx` to:
  ```tsx
  className="w-full bg-[#FFEC01] hover:bg-[#FFF12E] text-[#0636A5] font-subheading tracking-wider uppercase text-base py-4 rounded-full shadow-md transition-all flex items-center justify-between cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed px-6"
  ```
  And change the trailing loader/icon background to keep visual consistency:
  ```tsx
  <span className="cta-nested-icon bg-[#0636A5]/10 text-[#0636A5] h-7 w-7 rounded-full flex items-center justify-center shrink-0">
  ```

### [Medium] Finding 2: Unused OSRM Routing Hook & Lack of Fallback
- **What**: The codebase implements `useOSRMRoute.ts` (OSRM public routing), but the forms solely use `useGoogleRoute` (Google Maps Directions).
- **Where**: `src/components/cotizar/express/CotizadorExpressForm.tsx`, `src/components/cotizar/lowcost/CotizadorLowCostForm.tsx`
- **Why**: `AGENTS.md` explicitly lists `hooks/useOSRMRoute.ts` under "Estructura del Código" as the hook for calculating real routes via OSRM. Currently, if the Google Maps API key is missing or quota is exhausted, both forms will completely fail to calculate routes, showing a generic error.
- **Suggestion**: Incorporate `useOSRMRoute` as an automatic client-side fallback if `useGoogleRoute` fails or if the API key is not configured, increasing the resilience and offline/free-tier reliability of the logistics platform.

---

## Verified Claims

- **Pricing Formula Accuracy** → Verified via unit tests (`pnpm test`) and code inspections. Express uses `8200 + Math.ceil(km - 10) * 1000` and LowCost uses `7000 + Math.ceil(km - 10) * 700` with standard pricing ranges. → **PASS**
- **Next.js App Build & Type Check** → Verified via running `powershell -ExecutionPolicy Bypass -Command "pnpm build"`. Compiled successfully with zero errors. → **PASS**
- **Test Suite Execution** → Verified via running `pnpm test --run`. 99 tests passed across 10 files successfully. → **PASS**
- **Double-Bezel Card Conformance** → Verified that all card panels implement outer shells (`bg-[#E6EEFE]/80 border border-[#BACEFD] p-2 rounded-2xl`) and inner cores (`bg-white border border-brand-blue-50/50`) correctly. → **PASS**
- **Local Argentinian Language Modisms** → Verified usage of local voseo verbs ("calculá", "necesitás", "llamanos", "tenés", "coordiná", "ingresá") and year "2026" references across all copy texts. → **PASS**
- **MDQ Autocomplete Restriction** → Verified that `src/app/api/places/autocomplete/route.ts` implements strict location coordinates `-38.0055,-57.5426` with a `15000` radius and `strictbounds=true` to prevent out-of-city requests. → **PASS**

---

## Coverage Gaps

- **OSRM Integration in Forms** — Risk level: **Medium** — The project structure defines OSRM as the ruting tool but Google Maps is used exclusively in the form. It should be investigated if this was a deliberate change or an oversight. Recommendation: Ask implementer to align hook imports or provide fallback behavior.

---

## Unverified Items

- **Actual Google API Key Performance** — Google Maps API endpoints were verified via integration mocks but not with live external network calls due to sandbox restrictions.
