# Architecture and Engineering Baseline

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
