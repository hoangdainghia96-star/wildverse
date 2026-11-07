# Prototype and MVP Roadmap

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
