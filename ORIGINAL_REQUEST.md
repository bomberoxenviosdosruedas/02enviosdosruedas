# Original User Request

## Initial Request — 2026-08-13T03:52:44-03:00

This is a single self-contained fix/refactor; keep it small and focused.

Migrate page-specific JSON-LD schemas from the dynamic `SchemaScript` client component directly into their respective `page.tsx` files as inline `<script>` tags to improve SSR reliability and SEO auditing.

Working directory: C:\Users\prest\proyectos\02enviosdosruedas

## Requirements

### R1. Migrate schemas to page.tsx components
For each page route defined in `src/components/seo/SchemaScript.tsx` (including Express, LowCost, Flex, Plan Emprendedores services, cotizadores, FAQ, About, and Contact), extract its corresponding JSON-LD schema object and inject it directly inside its `page.tsx` component as a:
`<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(...) }} />`
tag.

### R2. Clean up dynamic SchemaScript configuration
Remove `SchemaScript` component rendering from `src/app/layout.tsx` and delete the `src/components/seo/SchemaScript.tsx` file to avoid duplicate schema injections.

### R3. Verify build and runtime compatibility
Ensure the project builds cleanly with `pnpm build` without any compilation, type-checking, or linting errors.

## Acceptance Criteria

### Schema Validation
- [ ] Each route renders its specific JSON-LD schema correctly in the HTML output on the server (SSR).
- [ ] The global `SchemaScript` component is removed from `layout.tsx` and deleted.
- [ ] No compilation or lint errors are present.
