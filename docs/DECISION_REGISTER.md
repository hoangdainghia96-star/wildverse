# WILDVERSE Decision Register

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
