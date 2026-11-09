# WILDVERSE — Project Foundation 1.0

**Tagline:** Explore Every Life. Discover Our Wild World.

WILDVERSE is a global, science-grounded digital encyclopedia and discovery platform for animal life. It combines a carefully governed animal knowledge catalogue with immersive visual exploration, maps, media, and—when evidence and resources permit—an AI research assistant.

This package is the shared source of truth for the owner, developers, and any AI coding agents working on the project.

## Product principles

1. **Scientific integrity:** no fabricated species, taxonomy, locations, citations, licenses, or statistics.
2. **Discovery for everyone:** approachable summaries first; deeper scientific detail when requested.
3. **Provenance first:** every imported or edited claim should retain its source, date/version, license, and review status.
4. **Progressive completeness:** a verified core taxon record can exist before every field is known. Missing information stays missing, not invented.
5. **Open access:** public browsing and core search do not require an account.
6. **Zero-cost first:** prefer open-source software and free tiers, but never pretend free tiers are unlimited or suitable for commercial use.
7. **Performance and accessibility:** 2D fallback, responsive layouts, keyboard support, reduced motion, and mobile-first performance budgets.
8. **Modular monolith:** one deployable application with explicit module boundaries; no premature microservices.
9. **Provider portability:** isolate external AI, storage, queue, scheduler, email, search, and geospatial providers behind adapters.
10. **Honest uncertainty:** clearly distinguish accepted taxonomy, disputed taxa, direct observations, modeled ranges, facts, and hypotheses.

## Initial technology direction

- Next.js App Router + React + TypeScript
- Tailwind CSS + shadcn/ui, with a bespoke WILDVERSE design system
- PostgreSQL on Neon (initial provider)
- Prisma ORM 7 initially; validate compatibility before upgrading
- Better Auth for optional accounts
- Zod 4 for runtime validation
- Vitest + React Testing Library + Playwright
- GitHub private repository and GitHub Actions
- Vercel for initial Next.js hosting, while Hobby eligibility remains personal/non-commercial
- Cloudflare R2 for licensed media and generated assets
- Sharp for image preprocessing
- Motion for React + CSS for ordinary UI motion; GSAP only for selected cinematic sequences
- React Three Fiber for selective 3D
- MapLibre GL JS for 2D maps
- PostGIS and pgvector where verified on the chosen Neon plan
- Tippecanoe + PMTiles for prebuilt vector tiles
- Vercel AI SDK + AI Gateway as the initial AI integration layer
- Better Stack for initial observability
- Resend for opt-in transactional/update email
- Vercel Queues and Schedules are provisional because their current availability/terms may change; keep adapters and a fallback design

**Important:** This is a technology direction, not a claim that all free plans are unlimited or that all beta products are production-ready. Verify current official documentation, pricing, terms, compatibility, quotas, region availability, and commercial eligibility at implementation and before launch.

## Product scope

The long-term catalogue covers scientifically documented animals, living and extinct. The catalogue represents taxa at all relevant ranks; species pages are the main public experience. Individual real-world animals, when included, are separate records linked to a species/taxon.

The initial public experience is English-first. The architecture must support localization, with translations reviewed before publication.

## Read next

- `docs/PRODUCT_SPEC.md` — product concept and public information architecture
- `docs/ARCHITECTURE.md` — application modules and technology boundaries
- `docs/DATA_GOVERNANCE.md` — taxonomy, ingestion, evidence, licenses, media, geospatial data
- `docs/SECURITY_PRIVACY.md` — security, roles, privacy and operational safeguards
- `docs/DESIGN_SYSTEM.md` — visual direction and accessibility
- `docs/AI_RELAY.md` — how multiple AI coding tools collaborate safely
- `docs/MVP_ROADMAP.md` — prototype and MVP scope
- `docs/DECISION_REGISTER.md` — consolidated decisions and caveats
- `TASKS.md` — immediate implementation sequence
- `prompts/AI_PROJECT_CONTEXT.md` — reusable context prompt for coding agents

## Change control

Any change to a foundational decision must be proposed in a pull request and recorded in `docs/DECISION_REGISTER.md`. Do not silently replace a selected provider or framework. If a provider becomes unsuitable, propose an adapter-compatible alternative and document trade-offs.

## Foundation application

The first homepage slice is a Next.js App Router application. It requires Node.js 20.9 or newer (Node 22 is used in CI) and no service credentials.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run lint`, `npm run typecheck`, and `npm run build` for the current quality checks. The homepage uses conceptual AI-generated artwork, labeled as such, rather than verified wildlife media. The species explorer searches a small, static, manually curated demonstration dataset; each profile links to the source used. It is not a complete or authoritative catalogue, and source accounts may become outdated. Learning guides are not yet implemented. Run `npm test` for the demo dataset and search checks. The full Phase 0 acceptance criteria remain open. No database, external API, or paid service is required.
