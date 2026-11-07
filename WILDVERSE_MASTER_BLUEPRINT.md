# WILDVERSE MASTER BLUEPRINT 1.0

**Explore Every Life. Discover Our Wild World.**

> Canonical project handoff document. The individual files in `docs/` remain the editable source documents; this file combines them for convenient context transfer to AI coding assistants and collaborators.

---

# PRODUCT SPECIFICATION


## 1. Vision

WILDVERSE is a digital natural-history museum and scientific animal encyclopedia. It should feel immersive and beautiful without sacrificing accuracy, accessibility, or usability.

**Core promise:** discover animal life visually, understand it clearly, and inspect the scientific evidence behind important claims.

## 2. Audience

The platform serves a broad audience:
- Curious general readers and families
- Students and educators
- Wildlife enthusiasts
- Advanced learners and researchers

Use progressive disclosure: concise explanations for beginners, expandable scientific detail for advanced users.

## 3. Scope of the knowledge catalogue

- All major animal groups, including vertebrates and invertebrates.
- Living and extinct taxa.
- All relevant taxonomic ranks in the underlying catalogue.
- Species are the primary browseable unit; individual animals are separate entities and are only added when credible individual-level data exists.
- Accepted, under-review, disputed, and synonym relationships must be distinguishable.

Do not claim that the catalogue contains every animal species until coverage, duplicates, taxonomy, and source licensing have been measured and validated.

## 4. Public site information architecture

1. **Home:** cinematic hero, global search, major animal groups, featured discoveries, ecosystem pathways, extinct-world feature, learning content, source/about section.
2. **Species Explorer:** browsable catalogue, taxonomy navigation, filters, sorting, and search.
3. **Species Profile:** scientific identity, common names, classification, biology, ecology, distribution, conservation where applicable, media, evidence and sources.
4. **Earth Explorer:** interactive 2D geographic map with optional future 3D globe entry point.
5. **Ecosystems:** forests, oceans, deserts, mountains, polar regions, freshwater and other habitats.
6. **Extinct World:** extinct animal taxa, geological period, fossil evidence, discovery locations, reconstruction uncertainty.
7. **Learn:** accessible educational explainers and curated journeys.
8. **Scientific Sources:** methods, source registry, licensing approach, editorial standards and project information.
9. **Account area (optional):** favorites, collections, history, watchlist, notification preferences and sync.
10. **Admin area (private):** catalogue operations, taxonomy, editorial review, media, imports, monitoring and access management.

## 5. Homepage experience

Selected direction: **Hybrid Experience**.

- Cinematic visual hero creates emotional entry.
- Prominent search makes the encyclopedia immediately useful.
- Animal group cards and curated discoveries help browsing.
- Earth Explorer and ecosystem sections provide interactive exploration.
- Extinct World and learning sections deepen engagement.
- Avoid putting every feature above the fold; use an intentional page journey.

## 6. Adaptive visual identity

Use a consistent brand across dark and light sections:
- Dark nature sections for cinematic storytelling, Earth Explorer, featured experiences and Extinct World.
- Warm light sections for data-heavy pages, search results, species facts and scientific reading.
- The same typography, spacing, color semantics, component language and navigation must unify both modes.

## 7. Species profile content layers

### Layer 1 — Core Record
- Stable Wildverse ID
- Accepted scientific name where an authority supports it
- Common names and synonyms with language/region metadata
- Taxonomic placement and authority/version
- Taxonomic status and source provenance

### Layer 2 — Enriched Profile
- Description and morphology
- Habitat, diet, behavior and reproduction
- Ecology and distribution
- Conservation information when applicable
- Claims linked to sources and review state

### Layer 3 — Comprehensive Profile
- Licensed photos and videos
- 2D maps and distribution layers
- Selected 3D model/anatomy/fossil reconstruction
- Deeper research references and interactive learning

A completeness indicator measures how much information is present; it must not be confused with taxonomic confidence or evidence quality.

## 8. Discovery and search

Initial search should use PostgreSQL-native capabilities:
- Exact and full-text search across scientific/common names and aliases
- Fuzzy matching for misspellings
- Structured taxonomy and biological filters
- Filters for habitat, diet, conservation status and temporal/geological fields where data supports them

Natural-language discovery can later translate user requests into structured filters. Returned taxa must come from actual catalogue records, not model invention.

## 9. Accounts and notifications

Public reading and basic search remain open without registration. Optional free accounts may save favorites, collections, history and watchlists, and sync between devices.

Personalized updates are opt-in. Start with in-app notifications and optional email for meaningful verified updates. Users control topics and frequency and can unsubscribe easily. Do not send every minor database change.

Community contributions are not in the initial MVP. If introduced later, they require moderation, identity/privacy controls, provenance, and review workflow.

## 10. AI assistant — later phase

WILDVERSE INTELLIGENCE is a research and discovery assistant, not an ungrounded general chatbot. Planned abilities include Q&A, comparisons, biology explanations, discovery journeys and source retrieval.

Answers should use a verified knowledge network and show inline citations plus an evidence panel. Distinguish direct evidence, synthesis/inference, hypotheses, disputes and insufficient evidence. Core catalogue/search must work when AI quota or services are unavailable.

---

# ARCHITECTURE AND ENGINEERING BASELINE


## 1. Architectural style

Use a **Modular Monolith**. One Next.js application is initially deployed as one product, but domain modules have explicit interfaces and do not import each other's database internals indiscriminately.

Do not introduce microservices until measurable scaling, deployment, or ownership needs justify extraction.

## 2. Technology direction

| Layer | Initial choice | Notes |
|---|---|---|
| Web framework | Next.js App Router | Server and client rendering |
| UI | React | Components and interactions |
| Language | TypeScript | Strict mode preferred |
| Styling | Tailwind CSS | Custom WILDVERSE design tokens |
| UI primitives | shadcn/ui | Accessible foundation, not finished brand UI |
| Database | PostgreSQL | Primary source of application records |
| Initial DB host | Neon | Verify plan, extensions, backups and limits |
| ORM | Prisma 7 | Pin compatible stable version; custom SQL where required |
| Auth | Better Auth | Verify Prisma 7 adapter and current compatibility |
| Validation | Zod 4 | Runtime boundaries |
| Tests | Vitest, RTL, Playwright | Unit, component and end-to-end |
| Media storage | Cloudflare R2 | Behind a storage adapter |
| Image processing | Sharp | Worker/job execution, not request hot path for bulk work |
| 3D | React Three Fiber | Lazy loaded; 2D fallbacks |
| 2D map | MapLibre GL JS | Basemap/tile licensing is separate |
| Spatial | PostGIS | Verify extension availability and plan limits |
| Semantic retrieval | pgvector | Verify extension and index strategy |
| Tiles | Tippecanoe + PMTiles | Prebuilt distribution tiles |
| AI integration | Vercel AI SDK + Gateway | Behind provider-neutral AI Router |
| Jobs | Vercel Queues (provisional) | Beta/plan terms require verification and fallback |
| Scheduling | Vercel Schedules (provisional) | Beta/plan terms require verification and fallback |
| Email | Resend | Opt-in only; authenticate sending domain |
| Monitoring | Better Stack | Check free plan restrictions and quotas |
| Hosting | Vercel | Hobby only while project remains eligible |
| Source control | GitHub | Private repo initially, protected main |

## 3. Module boundaries

Suggested modules under `src/modules/`:

- `taxonomy`: taxon identity, names, placements, authority assertions, synonymy, split/lump relationships.
- `species`: public species pages and biological profile claims.
- `sources`: authority registry, datasets, citations, license metadata and provenance.
- `ingestion`: connectors, raw staging, normalization, deduplication, review queues and publication.
- `geospatial`: occurrence points, range polygons, migration and historical range layers, location sensitivity.
- `media`: assets, derivatives, attribution, licenses, R2 adapter and signed access.
- `search`: PostgreSQL text/trigram search, filters and provider-neutral search interface.
- `accounts`: Better Auth integration and account preferences.
- `notifications`: in-app and opt-in email notifications.
- `ai`: AI Router, retrieval, evidence assembly, embeddings, reranking and quotas (later phase).
- `editorial`: review cases, publication decisions and audit trail.
- `admin`: private operations UI; authorization remains in domain/server code.
- `jobs`: queue/scheduler abstractions, handlers, idempotency and job state.
- `observability`: error, performance, uptime and pipeline instrumentation.

## 4. Suggested repository structure

```text
wildverse/
├── docs/
├── prompts/
├── public/
│   ├── images/
│   └── icons/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── scripts/
│   ├── data-import/
│   ├── media/
│   └── maps/
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   ├── (auth)/
│   │   ├── admin/
│   │   └── api/
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── shared/
│   ├── modules/
│   ├── lib/
│   │   ├── db/
│   │   ├── env/
│   │   ├── security/
│   │   └── observability/
│   ├── styles/
│   └── types/
├── tests/
│   ├── unit/
│   ├── component/
│   └── e2e/
├── .github/workflows/
├── .env.example
├── README.md
└── package.json
```

## 5. Backend conventions

- Server Components may call domain services directly for server-side reads.
- Server Actions are used for suitable internal mutations.
- Route Handlers expose intentional HTTP endpoints, webhooks and integrations.
- Put business logic in module services/use cases, not React components or route files.
- Treat every Server Action and Route Handler as an externally reachable attack surface: validate input, authenticate, authorize, rate-limit where appropriate, and return safe errors.
- Do not expose database credentials or privileged operations to the browser.

## 6. Database conventions

- PostgreSQL is canonical for structured application data.
- Prisma 7 manages ordinary relational schema and migrations.
- Use custom SQL migrations for PostGIS, pgvector, advanced indexes or database-specific functionality not fully represented in Prisma.
- Use JSONB for retained raw source payloads or genuinely variable source metadata, not as a replacement for relational modeling.
- Use connection pooling for application traffic and an appropriate direct connection for migration operations, following current Neon/Prisma guidance.
- Use explicit transactions and bounded batch sizes for imports.
- Keep source identifiers, source versions and provenance.

## 7. Caching

Use Next.js caching/revalidation for stable public content, Vercel CDN for application delivery, and Cloudflare caching for media on an appropriate custom domain.

Use time-based freshness defaults by data type plus event-driven invalidation after publication/taxonomy changes. Revalidate only affected records and dependent pages. Version media URLs when assets change. Never put private account data or personalized responses into public cache.

## 8. Background jobs

Use provider-neutral `QueueProvider` and `SchedulerProvider` interfaces. Vercel Queues/Schedules are provisional initial adapters only after current beta APIs, quotas, terms and deployment compatibility are verified.

Every important job should have:
- stable job ID and idempotency key
- typed payload schema
- bounded retries with backoff
- timeout/resource limits
- persisted state in PostgreSQL
- dead-letter/failure review path
- correlation ID and audit record

Push consumers fit short event-driven jobs. Separately controlled workers fit bulk media processing, large source sync and PMTiles generation. Verify supported consumption modes with the actual queue product before implementation.

## 9. Deployment and portability

Initial deployment direction: private GitHub repository connected to Vercel. Use preview deployments and CI checks. Keep environment-specific configuration outside source control. Maintain a migration path away from Vercel if commercial terms or workload require it.

## 10. Free-tier reality check

Before implementation and before every release, check current official provider documentation for:
- eligibility (personal/non-commercial restrictions)
- compute, storage, transfer and operation quotas
- sleeping/pausing behavior and retention
- database extensions and connection limits
- queue/scheduler beta availability and API semantics
- logging/monitoring/email quotas
- regional availability and data-processing terms

Zero-cost-first is a goal, not a promise of unlimited free operation.

---

# SCIENTIFIC DATA GOVERNANCE


## 1. Taxonomic policy

Use a multi-source taxonomy model with a designated **Primary Authority per taxonomic scope** (for example, group, region, or living/extinct domain). Do not assume one authority is universally best for all animal groups.

Store the selected authority, source release/version, effective date and selection rationale. Retain meaningful alternative opinions rather than flattening disagreements into false certainty.

Public taxonomic states:
- `ACCEPTED`: accepted by the configured authority for the relevant scope/version.
- `UNDER_REVIEW`: under active review or not resolved.
- `DISPUTED`: meaningful taxonomic disagreement exists.
- `SYNONYM`: a name linked to the relevant taxon concept; do not make it a duplicate species record by default.

A single species is a taxon at rank Species. The catalogue should also represent higher/lower taxonomic ranks and extinct taxa. Individual animals are separate entities.

## 2. Identity and taxon history

Every Wildverse taxon gets an immutable internal ID (format is implementation-defined; do not rely on sequential public IDs). Store external identifiers separately with their source and version.

Never reuse a Wildverse ID. If a taxon is split, merged, renamed or synonymized, create explicit relationship/history records and retain prior assertions and source lineage.

Names are data records with language, region, name type, source, validity and status. Scientific names should be rendered with correct typographic conventions; common names may vary by region.

## 3. Progressive completeness

- Level 1 Core Record: stable identity, accepted/scientific name where available, rank/placement, taxonomic status and provenance.
- Level 2 Enriched Profile: sourced morphology, habitat, diet, behavior, reproduction, ecology, distribution and conservation claims.
- Level 3 Comprehensive Profile: licensed media, map layers, deeper references, 3D assets and interactive content.

Completeness is separate from taxonomic acceptance and evidence quality. Missing fields must remain explicitly unknown/unavailable.

## 4. Dual-track launch

Track 1: broad global catalogue sourced from approved datasets, with verified core records and progressive enrichment.

Track 2: curated Featured Collection with deeper, carefully reviewed profiles spanning multiple groups and including extinct animals.

Do not announce a global species count before normalization, deduplication, source-license checks and taxonomy review.

## 5. Intelligent ingestion pipeline

1. Connector retrieves an approved source release or API response.
2. Preserve original payload and source metadata in immutable raw staging.
3. Check license, redistribution rights, source terms and attribution requirements.
4. Validate schema and expected fields.
5. Normalize scientific names, ranks, identifiers and concepts.
6. Match external identifiers and detect duplicates.
7. Detect conflicts, taxonomic changes and high-impact differences.
8. Auto-accept only low-risk, structurally valid updates covered by an approved policy.
9. Route disputed, consequential, novel biological or rights-unclear records to review.
10. Publish approved normalized records transactionally and record a full audit trail.

Never directly overwrite published data from an upstream synchronization job.

## 6. Sources and evidence

Maintain a source registry including publisher/provider, dataset/document title, URL or persistent identifier, version, access date, publication date, license, attribution, terms, scope, and reliability notes.

Claims should be separately stored or linked to evidence records. Retain page/section/record identifiers where available. Distinguish source reliability from search relevance.

Useful source families include Catalogue of Life, GBIF, OBIS, IUCN, BirdLife and specialist or peer-reviewed sources. These are candidate sources, not blanket permission to reuse all their data. Check the license/terms for every dataset and field.

## 7. Licensing policy

Prefer public-domain/CC0 and compatible open licenses such as CC BY. CC BY-SA and other licenses require case-by-case compatibility review. Non-commercial or no-derivatives terms must not be treated as freely reusable for all purposes.

Track rights separately for dataset contents, database structure, prose, photographs, videos, maps, 3D models and AI-generated assets. Store creator, source, exact license/version, attribution text, acquisition date, permitted transformations, commercial permissions and redistribution conditions.

Unknown or incompatible rights block public publication. Do not infer permission from public availability or the ability to download a file.

## 8. Media governance

Prefer authentic wildlife photography/video with verified reuse rights. Clearly label AI illustrations and scientific reconstructions, especially extinct animals. Never present generated imagery as documentary photography.

Store original/source reference and optimized derivatives separately. Sharp may produce thumbnails/responsive variants in suitable formats. Record dimensions, checksum, MIME type, creator, attribution, license and processing history.

## 9. Geospatial evidence

Use separate layers for:
- occurrence observations
- accepted/known range polygons
- modeled range predictions
- migration routes
- historical range/fossil evidence

Every feature needs source, license, date/time coverage, coordinate uncertainty, evidence type, taxonomic match, methodology and review status.

Do not turn scattered occurrence points into a range polygon without a valid method/source. Apply generalization, delay or suppression for sensitive species locations and any locations that could facilitate poaching or disturbance.

## 10. Translation governance

English is the launch language. Store localized content separately by language/region and source revision. AI-assisted translations use a controlled biological glossary and must be reviewed before publication, especially scientific/conservation content. Scientific names, IDs, citations, units and numerical values must remain consistent.

## 11. AI/RAG knowledge governance

Only approved/reviewed content is eligible for the primary RAG index. Use hybrid retrieval (PostgreSQL full text/trigram plus pgvector) and keep evidence relevance separate from scientific reliability scoring.

Use versioned embedding model identifiers, dimensions, chunking/preprocessing config and index generation. Never mix incompatible embedding spaces. Re-embed using a controlled migration process.

RAG answers should include inline claim citations and an evidence panel. Distinguish established fact, observation, model output, inference, hypothesis and uncertainty. If evidence is insufficient, say so.

---

# SECURITY AND PRIVACY


## 1. Security posture

Adopt defense in depth and secure defaults. No feature is secure merely because its button is hidden in the UI.

## 2. Identity and authorization

- Better Auth is the initial authentication system.
- Public browsing/search must not require an account.
- Use Hybrid RBAC with default role permissions plus narrowly controlled custom permissions.
- Roles: Owner, Administrator, Scientific Editor, Data Curator, Media Manager, Viewer.
- Start with one Owner; create other roles only as needed.
- Enforce all authorization on the server and follow least privilege.
- Protect privileged accounts with strong authentication and MFA where supported.
- Log role, permission and sensitive administrative changes.

## 3. Input and application security

- Validate all external/client input with Zod at runtime.
- Use Prisma parameterized queries; avoid unsafe raw SQL. Where custom SQL is necessary, parameterize it.
- Apply CSRF/origin protections appropriate to the chosen Next.js/Auth setup.
- Rate-limit authentication, AI, search abuse, public endpoints and expensive operations.
- Apply secure headers and a carefully tested Content Security Policy.
- Escape/render untrusted content safely; prevent stored/reflected XSS.
- Keep dependencies patched and run dependency/security checks in CI.
- Avoid leaking stack traces, tokens or private source data in client-facing errors.

## 4. Secrets and credentials

- Keep secrets only in deployment environment/secret stores.
- Commit `.env.example` with variable names and placeholders only; never commit `.env`.
- Use different credentials for local, preview and production environments.
- Use least-privilege service credentials and rotate exposed credentials immediately.
- Never put privileged API keys in browser bundles.

## 5. Media security

- Validate upload size, MIME type and actual file signature.
- Process untrusted media in constrained workers.
- Use short-lived signed upload/download URLs when access must be restricted.
- Do not allow arbitrary public uploads in the MVP.
- Preserve license restrictions even when media is stored in R2.

## 6. Privacy

- Collect only data needed for account and service functionality.
- Separate account data from aggregate analytics.
- Avoid cross-site tracking, advertising profiles and unnecessary precise location.
- Analytics should be aggregate/privacy-preserving and subject to applicable consent requirements.
- Define retention, export and deletion procedures.
- Notifications/email updates are opt-in and preference-controlled.
- Apply age-appropriate privacy defaults because the audience may include children and teens.
- Do not expose sensitive wildlife coordinates; generalize or suppress them where necessary.

## 7. Monitoring and audit

Initial observability provider: Better Stack, subject to current free-plan terms/limits. Monitor application errors, performance, database health, uptime, AI quotas/errors and ingestion pipeline failures.

Keep audit logs for administrative actions, taxonomy changes, publication, imports, source/license changes, permissions and restore operations. Protect logs from public access and avoid logging unnecessary personal data or secrets.

## 8. Backup and recovery

Use provider-native recovery features plus independent encrypted PostgreSQL exports stored separately, subject to available plan limits. Create snapshots before bulk imports/migrations. Monitor backup failures and perform restore drills. Define explicit RPO/RTO before production. A backup is not considered verified until a restore has succeeded.

## 9. Operational caveats

Vercel Hobby is restricted to personal/non-commercial use. Beta queue/scheduler features, all free-tier quotas and provider terms must be rechecked before launch and before commercial activity. Do not store sensitive data or promise service-level guarantees on a free tier.

---

# DESIGN SYSTEM


## 1. Design identity

**Adaptive Hybrid Nature Luxury**: cinematic nature storytelling plus editorial scientific clarity. Use dark and light sections intentionally while retaining one brand system.

## 2. Core palette

| Token | Hex | Intended use |
|---|---|---|
| Deep Forest | `#122B20` | Primary dark surfaces, hero/footer |
| Forest | `#244A35` | Secondary dark surfaces, accents |
| Natural Gold | `#D4B77B` | Restrained highlight/accent |
| Warm Ivory | `#F3F0E7` | Scientific reading surfaces |
| Charcoal | `#202923` | Primary text/dark neutral |

Create separate semantic tokens for success, warning, danger, info, borders, muted text and focus rings. Do not use gold as the only status indicator. Verify all text/background pairs for WCAG contrast.

## 3. Typography

Direction:
- Editorial serif for selected display titles (DM Serif Display or an equivalent with compatible license/readability).
- Clean sans-serif for body, UI, forms and dense scientific content (Inter or Geist or equivalent).
- Scientific names use italic styling where appropriate and must remain legible.
- Use self-hosted or properly licensed font files where practical; do not commit fonts without checking licenses.

## 4. Layout and components

- Responsive grid designed separately for mobile, tablet and desktop.
- Consistent spacing/type/radius/shadow tokens.
- Generous image-led storytelling where it helps discovery.
- Dense scientific tables should remain readable and accessible.
- shadcn/ui is an accessible component foundation, not the final visual style.
- Use clear states for accepted/disputed/under-review and verified/supported/modeled evidence. Never rely on color alone.

## 5. Motion

- CSS for simple hover, transition and color changes.
- Motion for React for normal component/page transitions and selected scroll reveals.
- GSAP only for a small number of complex cinematic sequences.
- React Three Fiber for animation inside 3D scenes.
- Avoid overlapping libraries for the same effect.
- Respect `prefers-reduced-motion`; provide static alternatives.
- Do not animate essential data in ways that make it hard to read.

## 6. 3D and maps

- Selective 3D only: globe, selected animal models, anatomy, fossils and special ecosystem scenes.
- Lazy-load scenes, optimize assets and provide 2D/image fallback.
- MapLibre is the 2D geographic map layer; React Three Fiber is not a replacement for GIS.
- Basemap/data tile licenses and attribution must be visible as required.

## 7. Accessibility and performance

Target WCAG 2.2 AA. Include keyboard navigation, visible focus, semantic landmarks, appropriate alt text, accessible form labels, reduced motion and meaningful contrast.

Prioritize fast initial rendering, responsive images, lazy loading below the fold, limited third-party scripts and a low-end mobile fallback. Establish actual performance budgets during prototype testing.

## 8. Logo direction

Use a refined WILDVERSE wordmark with a restrained earth/leaf/ecosystem motif. Avoid generic paw-print clipart as the primary identity. Final logo requires original design and trademark/domain checks before public launch.

---

# MULTI-AI DEVELOPMENT RELAY


## 1. Purpose

Multiple AI coding tools may be used sequentially under limited free quotas. The Git repository and this documentation—not chat memory—are the shared source of truth.

## 2. Roles

- **Project Architect:** translates product requirements into bounded tasks and architecture decisions.
- **Frontend Builder:** implements UI and responsive interactions.
- **Backend Builder:** implements domain services, persistence and endpoints.
- **Data Engineer:** implements source connectors, normalization and ingestion.
- **Reviewer:** inspects correctness, security, accessibility, performance and maintainability.
- **Integrator:** resolves conflicts, runs checks and merges reviewed work.

One model may perform multiple roles, but each task must have one explicit owner.

## 3. Golden rules

1. Read `README.md`, relevant docs, `TASKS.md`, and recent Git history before changing code.
2. Never rewrite the entire project to complete a narrow task.
3. Work on a task-specific branch; do not edit `main` directly.
4. Do not change dependencies, database schema, design tokens or public APIs outside the assigned scope without documenting the reason.
5. Do not invent data, citations, image rights, provider quotas or successful test results.
6. Never commit secrets, private keys, `.env` files, user data or licensed assets without rights.
7. Add/update tests for behavior changes.
8. Run the checks available in the environment and report any checks not run.
9. A reviewer other than the implementing agent should inspect high-risk changes where feasible.
10. Merge only after tests and review pass; preserve a stable `main` branch.

## 4. Standard task handoff

Every AI handoff must include:

- Task ID and objective
- Context read
- Files changed
- Design/implementation decisions
- Commands/tests run and exact results
- Known limitations and unverified assumptions
- Follow-up tasks
- Commit hash or patch/PR reference

## 5. Branch/PR pattern

Suggested branch naming:
- `feat/<task-id>-short-name`
- `fix/<task-id>-short-name`
- `docs/<task-id>-short-name`
- `data/<task-id>-short-name`

Prefer small pull requests with one coherent purpose. Require CI checks for lint, typecheck, unit/component tests and relevant E2E checks. Protect `main` and do not bypass failed checks without an explicit documented reason.

## 6. Prompt template

Use `prompts/AI_PROJECT_CONTEXT.md` as the common context, then append one bounded task. Avoid sending the entire project to an AI when only a small module is relevant; include the contracts and files that task depends on.

## 7. Context preservation

After each meaningful work session, update:
- `TASKS.md`
- relevant architecture/spec document
- `CHANGELOG.md` (create during implementation)
- PR description or handoff report

The next AI should be able to resume from repository state without relying on the previous chat transcript.

---

# PROTOTYPE AND MVP ROADMAP


## Guiding rule

Build one complete vertical slice at a time. Do not build every planned subsystem before users can see or use anything.

## Phase 0 — Visual Prototype

Goal: a polished, responsive website that runs in a browser and communicates the WILDVERSE experience.

Deliverables:
- Global header/navigation and responsive layout
- Cinematic homepage hero
- Search interface (prototype behavior can use a small verified local dataset)
- Animal group/category cards
- Featured discovery and ecosystem sections
- Extinct World feature section
- 6–12 curated demo taxon/species profiles across different animal groups, including at least one extinct taxon
- Detail page template with scientific name first, English common name second, classification, concise sourced facts and visible sources
- Adaptive dark/light design system
- Basic hover/scroll transitions with reduced-motion support
- Mobile, tablet and desktop layouts

Prototype data must be explicitly labeled as curated demo/seed data; do not use fabricated counts or unsourced facts.

## Phase 1 — MVP

Public:
- PostgreSQL/Prisma-backed catalogue
- Basic taxonomy hierarchy and source provenance
- Species Explorer with exact/name search, fuzzy search and filters
- Species profiles with claim-level citations and media rights metadata
- Featured Collection
- Segmented sitemap/metadata/canonical handling for eligible content
- Accessible responsive design

Admin:
- Owner-only private admin initially
- Species/taxon editing with review state
- Source/dataset/license registry
- Raw ingestion staging and import status
- Editorial review and publish workflow
- Media metadata and rights controls
- Audit trail and basic system health

Engineering:
- GitHub CI (lint, typecheck, tests, build)
- Vitest/RTL for unit and component tests
- Playwright for important end-to-end paths
- Error/uptime monitoring
- Backup/restore procedure and documented recovery test
- Rate limiting, security headers, environment secrets and RBAC checks

## Phase 1.1 — Evidence and AI foundations

- Approved document/source registry
- Hybrid RAG with PostgreSQL full text/trigram + pgvector
- Versioned embeddings and chunking
- Evidence-aware AI responses with inline citations and evidence panel
- Fair-use quotas and provider-neutral AI routing
- AI fallback: catalogue/search remains functional without AI

Do not expose a general AI answer box until sources, citation mapping, abuse limits and failure behavior are tested.

## Phase 1.2 — Geographic and immersive exploration

- PostGIS validation on Neon
- Initial sourced distribution datasets with license controls
- MapLibre distribution layers (observations vs range vs modelled vs historical)
- Tippecanoe/PMTiles build pipeline
- Sensitive-location generalization
- Selected React Three Fiber experience, lazy loaded with 2D fallback

## Later phases

- Better Auth optional accounts and free saved collections
- Personalized in-app/email notifications (opt-in)
- Data-driven localization beyond English; Vietnamese is an early candidate
- More comprehensive catalogue ingestion and Featured Collection enrichment
- Community contribution only after moderation and provenance workflows are ready
- Additional 3D anatomy, models and immersive experiences where evidence and assets permit

## Explicit non-goals for the first prototype

- Millions of production records
- Full global RAG corpus
- Full global range map
- Always-on 3D across the site
- Multi-language content at launch
- Public user contributions
- Paid subscriptions or monetization
- Unbounded AI chat

## Acceptance criteria for Phase 0

1. Website starts locally using documented commands.
2. Homepage and species detail pages render without runtime errors.
3. Responsive behavior checked at representative mobile/tablet/desktop widths.
4. Search returns only records in the demo dataset and handles no-result state.
5. Every demo factual claim has a source record or is clearly labeled as placeholder content.
6. Images have alt text and rights/source metadata in the content model; use only assets with permission.
7. Keyboard navigation and reduced-motion behavior are checked.
8. `npm run lint`, `npm run typecheck`, `npm run test` and `npm run build` pass, or any unavailable check is reported explicitly.

---

# DECISION REGISTER


Status meanings: **Selected** = agreed project direction; **Provisional** = selected but must be verified in a real prototype/current provider terms; **Deferred** = intentionally later than the initial prototype/MVP.

## Product decisions

| Area | Decision | Status |
|---|---|---|
| Scope | Animal taxa, living and extinct; individual animals are separate entities | Selected |
| Audience | Everyone, with progressive disclosure | Selected |
| Product experience | Hybrid science + immersive discovery | Selected |
| Homepage | Hybrid cinematic + search + interactive exploration | Selected |
| Visual identity | Adaptive Hybrid Nature Luxury | Selected |
| Launch language | English first; multilingual-ready architecture | Selected |
| Scientific content | Dual Intelligence: accessible layer + scientific layer | Selected |
| Taxon inclusion | Open Scientific Catalogue with explicit disputed states | Selected |
| Taxonomy sources | Multi-source, primary authority per taxonomic scope | Selected |
| Taxonomy conflict | Primary Authority with visible alternative views when meaningful | Selected |
| Identity | Immutable internal Wildverse IDs + external source IDs | Selected |
| Completeness | Progressive Knowledge System, three levels | Selected |
| Media | Hybrid Visual Library, real media preferred and generated art labeled | Selected |
| 3D | Selective 3D with 2D fallback | Selected |
| Devices | Universal responsive | Selected |
| Accounts | Optional accounts; public browsing remains open | Selected |
| Search | Intelligent Discovery; initial engine PostgreSQL native | Selected |
| AI assistant | Research & Discovery Assistant, later phase | Selected |
| AI sources | Verified Knowledge Network | Selected |
| AI limits | Fair-use quotas; no promise of unlimited AI | Selected |
| Launch dataset | Dual-Track: broad core catalogue + curated featured profiles | Selected |
| Storage architecture | Hybrid internal DB + approved external sources | Selected |
| Sync | Intelligent hybrid sync; no blind overwrite | Selected |
| Editorial control | Risk-based review | Selected |
| Budget | Zero-Cost First, not unlimited free | Selected |
| Source management | Git-based, GitHub private repository initially | Selected |
| Application architecture | Modular monolith | Selected |
| Frontend | Next.js + React + TypeScript | Selected |
| Database | PostgreSQL | Selected |
| ORM | Prisma 7 | Provisional; compatibility pin |
| DB hosting | Neon | Provisional; verify extensions/limits |
| UI | Tailwind CSS + shadcn/ui, custom design system | Selected |
| 3D framework | React Three Fiber | Selected; stable compatible version only |
| Animation | CSS + Motion + selective GSAP + R3F | Selected |
| Search backend | PostgreSQL full text + trigram initially | Selected |
| Auth | Better Auth | Provisional; verify Prisma 7 adapter compatibility |
| Media object storage | Cloudflare R2 | Provisional; verify terms/quotas |
| Image processing | Sharp | Selected |
| Backend | Next.js Server Components, Server Actions, Route Handlers; domain services separate | Selected |
| Validation | Zod 4 | Selected |
| Tests | Vitest + React Testing Library + Playwright | Selected |
| Deployment | Vercel | Provisional; Hobby personal/non-commercial only |
| Maps | MapLibre GL JS | Selected |
| Geospatial storage | PostGIS + GeoJSON/vector tiles | Provisional; verify Neon extension support |
| Tiles | Tippecanoe + PMTiles | Selected direction |
| Basemap | Natural Earth + licensed regional OSM-derived detail | Selected direction; comply with attribution/ODbL |
| Distribution | Hybrid observations/ranges/migrations/historical layers | Selected |
| Geographic evidence | Evidence-based multi-source | Selected |
| Licensing | Open License First | Selected |
| IP strategy | Hybrid IP; code private initially, some modules/content may open later | Selected |
| Privacy | Privacy-friendly aggregate analytics, minimal PII | Selected |
| Naming | Scientific name first, English common name secondary | Selected |
| Translation | AI-assisted with human review | Selected |
| Localization rollout | Data-driven; Vietnamese early candidate | Selected |
| SEO | Advanced SEO; progressive indexing | Selected |
| User updates | Personalized, opt-in | Selected |
| Delivery | In-app + optional email | Selected |
| Email | Resend | Provisional; verify quotas and domain requirements |
| Admin | Custom dashboard | Selected |
| Authorization | Hybrid RBAC with granular server-enforced permissions | Selected |
| Backup | Hybrid provider + independent encrypted backup | Selected |
| Backup cadence | Daily critical backup, weekly full, event-driven snapshots, restore drills | Selected |
| Observability | Professional observability; Better Stack initial provider | Provisional; verify plan/terms |
| Caching | Hybrid CDN caching | Selected |
| Cache invalidation | Time + event-based targeted invalidation | Selected |
| Queue | Vercel Queues | Provisional/Beta; adapter + fallback required |
| Queue execution | Push for short jobs, controlled workers for batch jobs | Provisional; verify product semantics |
| Scheduler | Vercel Schedules | Provisional/Beta; adapter + fallback required |
| AI interface | Vercel AI SDK + AI Gateway | Provisional; verify current API and free quotas |
| RAG | Hybrid RAG with PostgreSQL + pgvector | Provisional; verify extension/index constraints |
| Embeddings | Provider-agnostic abstraction | Selected |
| Embedding execution | Adaptive hybrid: open model when compute exists, hosted API when justified | Selected |
| Chunking | Hybrid scientific/semantic chunking | Selected |
| RAG ranking | Retrieval + optional reranking + separate evidence scoring | Selected |
| AI answer policy | Evidence-aware answers | Selected |
| Citations | Inline citations + structured evidence panel | Selected |
| Ingestion | Intelligent ingestion pipeline | Selected |
| Schema | Normalized relational + provenance-first | Selected |
| Security | Defense in depth | Selected |
| Design | Nature Luxury, forest/ivory, serif display + sans body | Selected direction |
| MVP | Staged vertical slice; Phase 0 prototype first | Selected |

## Important compatibility and cost gates

Before coding production integrations, verify the current official documentation and run a minimal spike for:

1. Next.js + Prisma 7 + Better Auth adapter.
2. Neon PostgreSQL with PostGIS and pgvector enabled on the selected plan.
3. Prisma migration workflow with custom PostGIS/pgvector SQL.
4. Vercel Hobby eligibility and current function/runtime limits.
5. Vercel Queues/Schedules API availability, beta status, quotas and supported consumer modes.
6. Cloudflare R2 storage, cache, custom-domain and egress terms.
7. Resend sender-domain verification and free sending limits.
8. Better Stack eligibility, quotas and retention.
9. AI Gateway available model providers, pricing, free allowance and rate limits.
10. All source/media licenses, including database rights and attribution requirements.

If a selected beta/hosted service fails a gate, keep the application behind its provider interface and choose a viable adapter. Update this register in a pull request.

---
