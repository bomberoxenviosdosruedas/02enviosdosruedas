# Test Infrastructure & Strategy (TEST_INFRA.md)

This document details the E2E and integration testing infrastructure, featuring the 4-tier test case design methodology and inventory for the 6 optimized routes of **Envíos DosRuedas** (2026).

---

## 1. Testing Infrastructure Stack
- **Framework**: Vitest (v4.1.10)
- **Environment**: JSDOM (v29.1.1)
- **Render Library**: React Testing Library (v16.3.2)
- **DOM Matchers**: Jest-DOM (v6.9.1)
- **Coverage Goal**: Tiers 1 to 4 with a minimum threshold of 71 tests.

---

## 2. Mocking Configurations & Strategy
To ensure speed, reliability, and hermetic execution in jsdom:
- **Leaflet & Maps**: `leaflet` components are mocked globally to avoid canvas layout and window crashes under headless jsdom.
- **Address Auto-complete**: Intercepts input actions and simulates coordinate resolution.
- **Routing API Hooks**: Both `useGoogleRoute` and `useOSRMRoute` hooks are stubbed to return realistic pathing profiles (e.g. 5.2 km distance, 12 minutes duration) without hitting endpoints.
- **Database Access**: Prisma query calls `prisma.priceRange.findMany()` are stubbed inside Server Component tests to return the standard 2026 tariff ranges.

---

## 3. Feature Inventory
The 6 optimized routes and their core feature targets:

1. **Sobre Nosotros** (`/nosotros/sobre-nosotros`)
   - Highlights historical timeline, corporate advantages, mission-vision, and organizational team blocks.
   
2. **Preguntas Frecuentes** (`/nosotros/preguntas-frecuentes`)
   - Direct accordion controls with smooth expand/collapse states.
   
3. **Nuestras Redes** (`/nosotros/nuestras-redes`)
   - Showcases channels connection grid, newsletter subscription form, and social posts.
   
4. **Cotizar Express** (`/cotizar/express`)
   - High priority instant delivery routing interface, distance-based pricing calculations, and interactive order submission form.
   
5. **Cotizar LowCost** (`/cotizar/lowcost`)
   - Planned logistics routing panel, cutoff validations, and price breakdown details.
   
6. **Contacto Comercial** (`/contacto`)
   - Contact form fields, input validation, success simulation, and local coverage details.

---

## 4. 4-Tier Test Design Matrix
We target a total of at least 71 tests:

### Tier 1: Happy Paths (>=30 tests total, >=5 per feature)
- Assert successful rendering of the pages.
- Confirm presence of required copy, titles, and layout containers.
- Validate that standard user actions (e.g. submitting valid contact form, clicking networks links, opening FAQ items) succeed.

### Tier 2: Boundary & Corner Cases (>=30 tests total, >=5 per feature)
- Validate form submission with empty fields.
- Test invalid email inputs.
- Test distance pricing thresholds (0km, 3km, 5.01km, 10.3km) applying the strict `Math.ceil()` excedente rounding rule.
- Test FAQ search or selection of edge queries.
- Validate component states when prisma database yields empty arrays.

### Tier 3: Cross-Feature Combinations (>=6 tests total)
- Verify OSRM route coordinate resolution trigger updates on price calculations.
- Test user flowing from Cotizar page back to Nosotros.
- Test how a user changes shipping service type (Express vs LowCost) and pricing rules pivot correctly.
- Test dark mode/background transitions when moving through various routes.

### Tier 4: Real-World Scenarios (>=5 tests total)
- Simulated customer journey: calculating Express price, seeing total > $10.000, deciding to check FAQ for payment options.
- E-commerce owner journey: filling corporate contact form, verifying email validation, seeing success modal.
- Cutoff scenario: user attempts LowCost shipment near cutoff hour, checks rules for scheduled deliveries.
