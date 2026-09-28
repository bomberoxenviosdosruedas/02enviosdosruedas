# GEO / AI Search Analysis — enviosdosruedas.com

**Audit date:** 2026-09-28
**Target:** https://www.enviosdosruedas.com
**Method:** raw HTML fetch of 5 live pages (home, FAQ, Express, cobertura, robots.txt, llms.txt, sitemap.xml) + source review of the local repo
**Primary source:** [Google AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) (announced 2026-05-15, doc updated 2026-07-10)

> **Scoring honesty.** Google published ["Using third-party SEO tools, services, and advice"](https://developers.google.com/search/docs/fundamentals/third-party-seo) on 2026-06-05, stating third-party tools have **no access to Google's internal ranking data**. The 51/100 below is a **heuristic**, not a Google signal. Search Console is the only authoritative first-party source.

---

## 1. GEO Readiness Score: 51/100

| Criterion | Weight | Score | Notes |
|---|---|---|---|
| Citability | 25 | **11** | ~60% of homepage body text is duplicated review quotes; no self-contained answer block |
| Structural Readability | 20 | **12** | Clean hierarchy, real question headings on service pages; homepage H2s are slogans |
| Multi-Modal | 15 | **6** | Strong interactive tools; **zero video anywhere on the site** |
| Authority & Brand Signals | 20 | **7** | 5.0/5.0 +120 reviews unclaimed in schema; no byline, no Person entity |
| Technical Accessibility | 20 | **15** | Full SSR confirmed — the strongest category |

**Where the points are.** The site is technically excellent and editorially weak for AI retrieval. Everything that makes it a good website (motion, marquees, accordions, review carousels) actively removes citable text from the HTML. The single highest-leverage realization: **this is an SEO fundamentals problem, not an "AI SEO" problem.**

---

## 2. Platform breakdown

**Not measured with a tool.** DataForSEO and SE Ranking MCP tools were not available in this session, and web search was unavailable, so no live AI-answer visibility was sampled. These are **qualitative readiness assessments only** — do not read them as measured scores.

| Platform | Citation engine | Qualitative readiness | Why |
|---|---|---|---|
| **Google AI Overviews** | Googlebot index | **Strong** | Page must already rank well. 20 clean URLs, full SSR, canonicals on 19/20, real price data. Weakness: no `OfferCatalog`, no tables on homepage. |
| **Google AI Mode** | Googlebot, broader pool | **Moderate** | Rewards freshness + entity authority beyond position 5. Sitemap `lastmod` is one flat date for all 20 URLs; no `WebSite`/`Person` entity; no video. |
| **ChatGPT Search** | `OAI-SearchBot` | **Moderate** | Bot is allowed (via wildcard) but never declared. ChatGPT leans on Wikipedia (47.9%) and Reddit (11.3%) — brand footprint not measurable this session. |
| **Claude search** | `Claude-SearchBot` | **Moderate** | Allowed via wildcard, not declared. Same entity-presence dependency. |
| **Perplexity** | `PerplexityBot` | **Strong** | `PerplexityBot` is **explicitly declared and allowed** — the best-declared AI bot on the site. Perplexity favors Reddit/community validation, which is weak. |

**Note on Google's position:** AI Overviews and AI Mode reach the same conclusion ~86% of the time but cite the **same URLs only 13.7%** of the time (Ahrefs, 540K query pairs). They are distinct surfaces and need distinct work. Per the skill: rank well → feeds AI Overviews; freshness and entity authority → feeds AI Mode. This site has the former and not the latter.

---

## 3. AI Crawler Access Status

**Bottom line: nothing is blocked.** The wildcard `User-Agent: *` → `Allow: /` means every AI crawler can fetch the site. The issue is that the two bots which actually govern *search citability* are never named.

### Explicitly declared in robots.txt

| User-agent | Capability it governs | Status |
|---|---|---|
| `Googlebot`, `Googlebot-Smartphone` | **Google Search / AI Overviews / AI Mode** eligibility | ✅ Allowed (declared) |
| `AdsBot-Google` | Google Ads preview | ✅ Allowed (declared) |
| `GPTBot` | **OpenAI model training** (not ChatGPT Search) | ✅ Allowed (declared) |
| `ClaudeBot` | **Anthropic model training** (not Claude search) | ✅ Allowed (declared) |
| `PerplexityBot` | **Perplexity AI search** | ✅ Allowed (declared) |
| `Google-Extended` | **Gemini/Vertex AI training & grounding only** — *not* Google Search | ✅ Allowed (declared) |

### Not declared — falls through to `User-Agent: *` → `Allow: /`

| User-agent | Capability it governs | Status |
|---|---|---|
| `OAI-SearchBot` | **ChatGPT Search citability** — the crawler that actually decides it | ⚠️ Allowed by wildcard, **never named** |
| `Claude-SearchBot` | **Claude search citability** | ⚠️ Allowed by wildcard, **never named** |
| `ChatGPT-User` | ChatGPT user-triggered browsing | ⚠️ Allowed by wildcard |
| `Claude-User` | Claude user-triggered browsing | ⚠️ Allowed by wildcard |
| `Perplexity-User` | Perplexity user-triggered fetch | ⚠️ Allowed by wildcard |
| `Applebot` | **Siri / Spotlight / Safari search** | ⚠️ Allowed by wildcard |
| `Applebot-Extended` | **Apple Intelligence / generative training** (opt-out signal) | ⚠️ Allowed by wildcard → **currently opts IN to Apple training** |
| `CCBot` | Common Crawl training corpus | ⚠️ Allowed by wildcard |
| `Bytespider`, `cohere-ai` | ByteDance / Cohere training | ⚠️ Allowed by wildcard |

**Two corrections worth internalizing:**
- Checking `GPTBot` says **nothing** about ChatGPT Search citability. `OAI-SearchBot` is the bot that matters, and it isn't declared. A future edit tightening the wildcard could silently block it with no signal that search citability was lost.
- `Google-Extended` governs Gemini/Vertex training and grounding **only**. It does not affect Google Search or AI Overviews, which run on the `Googlebot` index. Do not cite a blocked `Google-Extended` as evidence of missing from Google Search — and here it's allowed anyway, which is irrelevant to Search.

**Recommended robots.txt addition** — name the two search-citability bots so their status is explicit and can't be lost:

```txt
# AI search citability (distinct from training crawlers below)
User-Agent: OAI-SearchBot
User-Agent: Claude-SearchBot
User-Agent: Applebot
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /revisar
```

`Applebot-Extended` stays as-is (opt-in to Apple training is a licensing choice, not a visibility one) — but decide it deliberately rather than by accident of the wildcard.

---

## 4. llms.txt Status: ✅ **Present and well above average**

`https://www.enviosdosruedas.com/llms.txt` returns 200 with valid Mintlify-style markdown. It contains:

- Full NAP block (address, phone, email, hours, coverage radius, 5 kg / 40×30 cm capacity)
- A **decision tree** ("¿Tenés una urgencia?" → Express; "¿Vendés por Mercado Libre?" → Flex; …)
- **Per-service 2026 prices** with zone breakdowns for Express and LowCost
- Links to cotizadores, cobertura, guides, FAQ, legal

**This is genuinely better than the ~99% of sites that have one.** It reads as written by someone who understands the business.

**But it carries no citation weight, and you should not expect it to.** Google's AI optimization guide states Google Search "doesn't use" AI text files, and that creating them "will neither harm nor help your site's visibility or rankings." John Mueller called the use case "a dead end." In SE Ranking's 300k-domain study, only **1 of the 50** most AI-cited domains had one; OtterlyAI's server-log audit found **0.1%** of AI-bot requests target `/llms.txt`.

**Keep it. Spend no further time on it.** For a non-developer business site its value is purely defensive optionality. The real return is that its contents are excellent raw material for the *visible* answer blocks recommended in §6 — the same NAP, decision tree, and prices should appear in the HTML, where they are actually retrievable.

---

## 5. Brand Mention Analysis — **not measured**

**Web search was unavailable this session, so I could not verify presence on Wikipedia, Reddit, YouTube, or LinkedIn.** I am not going to guess. What *is* verifiable from the code:

- `Organization.sameAs` declares **only** Instagram and Facebook (`src/app/layout.tsx:111-114`)
- **No YouTube channel, no LinkedIn, no Google Business Profile URL** anywhere in the schema
- `WhatsApp` (`wa.me/542236602699`) is present in the **dead** `SchemaMarkup.tsx` `sameAs` but absent from the live graph
- The contact email `matiascejas@enviosdosruedas.com` names a real person, but **no `Person` entity exists** anywhere in the codebase

**Why this matters more than usual here.** Per the skill's cited Ahrefs study of 75,000 brands, **brand mentions correlate ~3x more strongly with AI visibility than backlinks** (YouTube mentions ~0.737; Domain Rating only ~0.266). A local courier with no entity footprint is competing against marketplaces and directories that own the entity. This is a structural gap, not a tweak.

**Recommended next step:** re-run just this section with web search available, and audit the Google Business Profile — the site's own "5.0 / 5.0 Verificado · +120 Valoraciones" and "Ver en Google Maps" link prove a GBP exists and is the strongest unclaimed asset on the site.

---

## 6. Passage-Level Citability

The ~130–170 word self-contained block heuristic is a third-party readability convention, **not a Google requirement** — Google's guide explicitly says you do *not* need to chunk content for AI.

### ✅ What already works

**`/servicios/envios-express` is the best page on the site for AI retrieval.** It has:
- A real extractable price table as prose: Zona 1 Microcentro 0–3 km **$3.700**; Zona 2 Interbarrial 3–5 km **$4.600**; Zona 3 5–7 km **$6.100**; Zona 4 7–10 km **$8.200**; >10 km **$1.000/km**, with a worked example (*"12 km = $12.000"*)
- A "Cómo calculamos tu envío" section with three distinct mechanisms
- A genuine query-matching heading: **"¿Cuándo te conviene Express?"**
- Concrete operational facts: weekdays 09:00–18:00, Saturdays 10:00–15:00, up to 15 kg

**`/cobertura`** has 56 headings with barrio-level granularity (Chauvín, La Perla, Los Troncos, Puerto, Playa Varese, Parque Luro…), 27 barrio mentions, and a `BreadcrumbList`.

**`/nosotros/preguntas-frecuentes`** ships all **21 Q&A pairs** in `FAQPage` JSON-LD with specific, verifiable answers (3-hour delivery windows, 13:00/15:00 cutoffs, minimums).

**The homepage hero** has a decent 30-word factual block: *"Somos tu partner de mensajería urbana y última milla en Mar del Plata. Cotizás por distancia, retiramos el paquete y lo entregamos en 60 a 90 min. Sin tercerizar: los repartidores son nuestros."*

### ❌ The critical failures

**1. The homepage is ~60% duplicated review quotes.**

The `SocialProofSection` marquee renders **12 unique testimonials 4× each = ~48 review blocks** in the server-rendered HTML. An AI chunker retrieving from the homepage gets 48 fragments of *"Excelente servicio muy responsables"* instead of answers about services, prices, or coverage.

Worse, these testimonials are marked up as **`<h3>`** — so the heading outline AI systems use for section extraction is 48 review quotes. Compare the actual informational headings on the same page: 7 H3s for testimonials versus 3 for services.

**2. No self-contained answer block exists anywhere on the homepage.**

There is no "¿Qué es...?" definition. Prices, cutoffs, and coverage live in disconnected stat chips (`$3.700`, `60-90 min`, `15 kg`, `Corte LowCost 13:00 hs`) that a chunker cannot assemble into an answer. Since ~44% of AI citations come from the first 30% of a page, and the homepage's first 30% is hero + segment cards, **the homepage's most citable region contains almost no citable facts.**

**3. Zero `<table>` elements on the homepage or `/cobertura`.**

The zona × tarifa matrix is the most citable format available for this business, and the data demonstrably exists (it's in `src/lib/pricing.ts`, the single source of truth per `AGENTS.md`, and it's rendered on the Express page). It's just never in table form on the surfaces where the query actually lands.

**4. The FAQ answers are invisible to text-based retrieval.**

`Faq-categories.tsx` initializes `expandedIndex` to `0` and renders answers inside `<AnimatePresence>` + `motion.div` with `height: 0`. The server-rendered HTML contains **1 of 21 answers**, and the other 20 questions aren't in the DOM at all (only one of four categories renders).

The `FAQPage` JSON-LD mitigates this substantially — all 21 answers ship. But most LLM retrieval pipelines chunk **raw page text**, not JSON-LD. So the content is technically present and practically unreachable. Fixing this is nearly free (see §8, item 4).

**5. The H1 lacks the geo entity.** `"Mensajería en moto / E-commerce que llega hoy"` — "Mar del Plata" appears in the eyebrow above it, not in the H1.

**6. Homepage H2s are slogans, not queries.** "Conectamos Mar del Plata de punta a punta", "SOLUCIONES LOGÍSTICAS A TU MEDIDA", "Potenciamos tu MDQ Marca en Mar del Plata". None of these match a query a person types into an AI assistant.

---

## 7. Server-Side Rendering Check: ✅ **PASS — full SSR**

**Every audited page returns complete content in raw HTML with no JavaScript execution.** Verified by fetching and parsing HTML directly:

| Page | H1 | H2s | Body copy | Prices in HTML | JSON-LD |
|---|---|---|---|---|---|
| `/` | ✅ | ✅ | ✅ | ✅ | 1 block |
| `/nosotros/preguntas-frecuentes` | ✅ | ✅ | ⚠️ 1/21 answers | ✅ | 4 blocks (FAQPage = 21 Q) |
| `/servicios/envios-express` | ✅ | ✅ | ✅ | ✅ | 1 + BreadcrumbList |
| `/cobertura` | ✅ | ✅ (56 headings) | ✅ | ✅ | 1 + BreadcrumbList |

This is the **most important technical factor** for AI visibility and the site passes it cleanly. The accordion and marquee are *rendering* problems (content collapses), not *rendering-engine* problems — the React tree is server-rendered, some branches just aren't expanded.

`lang="es"`, `metadataBase` set, `robots: index, follow` with `max-snippet:-1`, clean 20-URL sitemap. `hreflang` correctly not needed (single market).

### Technical defects found

**a) Homepage is missing `rel=canonical`.** All 19 other URLs emit one; the homepage emits none. The fix **already exists in the working tree** — `src/app/page.tsx:12` has `alternates: { canonical: '/' }` — but `git status` shows `M src/app/page.tsx` as an **uncommitted, undeployed change**. The homepage is the single most important URL on the site.

**b) `src/components/seo/SchemaMarkup.tsx` is dead code.** A grep for `SchemaMarkup` across all `.tsx` files matches **only inside that file** — it is never imported. It contains, unshipped:
- `hasOfferCatalog` with **5 `Service`/`Offer` entries**, each with name, description, and URL
- a `BreadcrumbList` builder
- `wa.me/542236602699` in `sameAs`
- a `geo` of `-38.0175, -57.5683` vs the live `-38.0055, -57.5426` — **the two disagree; one is wrong**

The live `@graph` is hand-inlined in `layout.tsx:100-165` and has **no OfferCatalog**. So the site publishes **zero `Service` or `Offer` structured data** despite having a fully-written catalog sitting unused in the repo.

**c) Sitemap `lastmod` is a single flat date (`2026-09-21T00:00:00.000Z`) for all 20 URLs.** Google's "creating helpful content" guidance lists *"faking publication-date freshness"* as an explicit self-audit warning sign. A uniform timestamp across every page reads as synthetic and undermines the freshness signal it's meant to carry.

**d) `datePublished`/`dateModified` exist on only 1 of 20 URLs** (`/guias/envios-flex-mar-del-plata`). Content under 3 months old is ~3x more likely to be AI-cited; pages stale 6+ months lose eligibility (SE Ranking, 1.3M citations). The five commercial service pages and `/cobertura` carry no dates at all.

**e) Reviews use relative dates** ("Hace 26 semanas", "Hace 48 semanas") that decay and can't be resolved to a timestamp.

---

## 8. Top 5 Highest-Impact Changes

Ranked by expected AI-citation impact per unit of effort.

### 1. De-duplicate the testimonial marquee and add one consolidated answer block
**Impact: highest. Effort: low-medium. Files: `src/components/home/SocialProofSection.tsx`, `HeroAnimado.tsx`**

Render the 12 testimonials **once** (the marquee should visually loop via CSS transform on a single set of nodes, not by duplicating the array), demote them from `<h3>` to `<p>`/`<blockquote>`, and add a single self-contained answer block in the first 30% of the page containing: what the company does, the three delivery SLAs with cutoffs, the starting price per service, the coverage radius, and hours — 130–170 words, one paragraph, no marketing adjectives.

This one change fixes the largest text-quality defect on the site, restores the heading outline, and directly targets the "44% of citations from the first 30%" mechanic.

### 2. Deploy the pending canonical and ship the `OfferCatalog`
**Impact: high. Effort: very low. Files: `src/app/page.tsx` (commit), `src/app/layout.tsx`**

Two near-zero-cost wins sitting in the repo right now:
- Commit and deploy `alternates: { canonical: '/' }` for the homepage
- Move the `hasOfferCatalog` (5 `Service`/`Offer` entries) from dead `SchemaMarkup.tsx` into the live `@graph` in `layout.tsx`, and reconcile the `geo` coordinates

Result: the site gains an `OfferCatalog` — a machine-readable answer to *"what services does this company offer and where."* Delete or wire up `SchemaMarkup.tsx` so the drift can't recur.

### 3. Claim `AggregateRating`, add a `Person` entity, date the commercial pages
**Impact: high. Effort: low. Files: `src/app/layout.tsx`, service page schemas**

The homepage already displays **"5.0 / 5.0 Verificado · +120 Valoraciones"** with a Google Maps link. That is the most authoritative third-party trust signal available to this business and **it is entirely unclaimed in schema.**

- Add `AggregateRating` (`ratingValue: 5.0`, `reviewCount: 120`, or the true current figures) — **sourced from the real Google Business Profile, never self-declared**
- Add a `Person` entity for the operator, linked via the existing `matiascejas@` email, with `sameAs` to LinkedIn/Instagram
- Add `datePublished` + `dateModified` to the 5 commercial service pages and `/cobertura`
- Expand `sameAs` to include the Google Business Profile URL
- Replace the flat sitemap `lastmod` with real per-page modification dates

### 4. Render FAQ answers into the DOM by default
**Impact: high. Effort: low. Files: `src/components/nosotros/preguntas-freuentes/Faq-categories.tsx`**

Replace the `AnimatePresence` + `useState` accordion with native **`<details>`/`<summary>`**. Answers then ship in the raw HTML, work with zero JavaScript, stay accessible for free, and require no `isExpanded` state. Also render **all four categories** server-side rather than one, so all 21 questions are present in the source.

The `FAQPage` JSON-LD already carries all 21 answers — this change makes the *prose* match it. Per the skill, do this as a genuine UX/SEO improvement, **not** as "chunking for AI"; Google explicitly says chunking is unnecessary.

### 5. Ship the zona × tarifa matrix as a real table
**Impact: medium-high. Effort: low (data already exists). Files: `src/app/page.tsx`, `src/app/cobertura/page.tsx`**

Render the existing `*_TIERS` data from `src/lib/pricing.ts` — the single source of truth per `AGENTS.md` — into a semantic `<table>` with `<caption>`, `<th scope="col">`, and `tabular-nums` per the typography rules. Add it to the homepage (or a dedicated `/tarifas` page) and to `/cobertura`.

Tables are the highest-fidelity comparative format for both AI extraction and featured snippets, and this is the data users most often ask an AI assistant about. Then produce an image version of the same matrix as an infographic — it can be cited in contexts a `<table>` cannot.

---

## 9. Schema Recommendations

**Currently emitted sitewide:** `Organization` + `LocalBusiness` (hand-inlined in `layout.tsx`). Plus `FAQPage` on the FAQ page and `BreadcrumbList` on service/cobertura pages. That part is correct and consistent.

**Missing, in priority order:**

| Schema | Where | Why it matters for AI |
|---|---|---|
| `AggregateRating` | `LocalBusiness` | Claims the 5.0/5.0 +120 already shown on-page. Highest-value single addition. **Must come from a real GBP.** |
| `hasOfferCatalog` → `Offer` → `Service` | `LocalBusiness` | Already written in dead `SchemaMarkup.tsx`. Gives a structured answer to service + price queries. |
| `Service` (per page) | Each of 5 service pages | Currently only `BreadcrumbList`. A page about Express should declare itself a `Service` with its provider. |
| `WebSite` | Root layout | Declares the site entity and its search action. Standard for a business site; currently absent. |
| `Person` | Root layout | Formalizes the operator behind `matiascejas@`. No author entity exists anywhere. |
| `datePublished` / `dateModified` | 5 service pages, `/cobertura` | Only 1 of 20 URLs has dates. Feeds the freshness signal. |
| `FAQPage` | Homepage | 21 verified answers exist — currently only on the FAQ page. A homepage FAQ block is the classic AI-citation surface. |

**Do not add:** `Product` with `offers` (these are services, not products), or review markup for the on-page testimonials (self-serving review schema on a commercial site is a manual-action risk, and the reviews are third-party Google ratings — use `AggregateRating` for those instead).

---

## 10. Content Reformatting Suggestions

**a) Homepage — new consolidated answer block, immediately after the hero subhead**

> Envíos DosRuedas es una empresa de mensajería y logística de última milla con flota propia, con base en Friuli 1972, Mar del Plata. Ofrece seis servicios: Envíos Express con entrega garantizada en 60 a 90 minutos por tarifa fija según distancia (desde $3.700 en zona 1, 0–3 km); Envíos LowCost, la opción más económica, con pedidos antes de las 13:00 hs y entrega el mismo día antes de las 19:00 hs (desde $3.000); Mercado Envíos Flex para vendedores de MercadoLibre, con corte 15:00 hs y entregas antes de las 20:00 hs; servicio de depósito y fulfillment con picking, packing y despacho; envíos contrareembolso sin comisión extra; y cuenta corriente para empresas con liquidación quincenal y Factura A. Cubre todo el ejido urbano de General Pueyrredón hasta 20 km, incluidos Batán, Camet y Sierra de los Padres. Atiende de lunes a viernes de 09:00 a 18:00 hs y sábados de 10:00 a 15:00 hs.

*154 words. Every figure is already published on the site and in `pricing.ts` — this is a reformatting task, not a writing task. Verify prices against the live DB before publishing (per `AGENTS.md`, `PriceRange` is the source of truth, `pricing.ts` is the fallback).*

**b) Homepage H1** — append the geo entity: `"Mensajería en moto en Mar del Plata · E-commerce que llega hoy"`. The current H1 has no location.

**c) Homepage H2s** — convert slogans to queries:
- "Conectamos Mar del Plata de punta a punta" → **"¿Qué servicios de logística y mensajería ofrecemos en Mar del Plata?"**
- "SOLUCIONES LOGÍSTICAS A TU MEDIDA" → **"¿Cuánto cuesta un envío en Mar del Plata? Tarifas 2026"**
- "Potenciamos tu MDQ Marca en Mar del Plata" → **"¿Necesitás un socio logístico para tu e-commerce?"**

**d) `/cobertura`** — add a leading answer paragraph above the buscador, since the H1 ("COBERTURA TOTAL EN MAR DEL PLATA") is followed immediately by an interactive widget. State coverage in prose: *"Envíos DosRuedas cubre todo el ejido urbano de Mar del Plata y el Partido de General Pueyrredón hasta 20 km desde su base en Friuli 1972…"* — then let the buscador do its job below it.

**e) `/nosotros/preguntas-frecuentes`** — the 21 answers are good. Two upgrades: (1) add a one-sentence summary under each question heading so the answer's first 40–60 words stand alone even if truncated; (2) add a short intro block defining what the page covers, so it is citable as a whole.

**f) Add a `/tarifas` page** — a single canonical price reference (all services × all zones × excedents) backed by `pricing.ts`. Price queries are the highest-intent queries this business receives, and today the pricing is scattered across two service pages, four stat chips on the homepage, and `llms.txt` (which AI systems largely ignore). One authoritative, table-formatted, dated page is worth more than all of them combined.

**g) Publish one video.** The site has **no video anywhere** — no YouTube, no embed, no player. YouTube mentions carry the single strongest correlation with AI citation (~0.737 per the Ahrefs study in the skill). Even a 60-second rider-and-fleet clip captioned with the service names, cutoffs, and phone number would create the entity link the site currently has no path to. Treat this as the highest-ceiling item on the list, and the longest pole.

---

## Verification protocol

Per `AGENTS.md`, these changes split across verification levels:

| Change | Level | Required |
|---|---|---|
| #1 testimonial de-dup + answer block | **N1** | `pnpm exec eslint <files>` |
| #2 canonical + `layout.tsx` schema | **N3** | N2 + `pnpm build` + `pnpm run lint` (**`layout.tsx` is N3**) |
| #3 AggregateRating / Person / dates | **N3** | N2 + `pnpm build` + `pnpm run lint` |
| #4 FAQ `<details>` rewrite | **N2** | `pnpm typecheck` + eslint + `pnpm exec vitest related <files> --run` (`preguntas-frecuentes.test.tsx` exists) |
| #5 pricing table | **N2** | N2 set; **do not modify `src/lib/pricing.ts`** — import and render only |

**Do not** treat the 11 pre-existing test failures documented in `AGENTS.md` as regressions; they are baseline.

---

## Source notes

- Google AI optimization guide: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google on third-party SEO tools: https://developers.google.com/search/docs/fundamentals/third-party-seo
- Google, creating helpful content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- llms.txt evidence: `references/llmstxt-evidence.md` (SE Ranking 300k study, OtterlyAI log audit, Mueller, Illyes)
- `llms.txt` is **not** a Google ranking or citation lever. Per Google's guide it "will neither harm nor help your site's visibility or rankings in Google Search, as Google Search ignores them."
