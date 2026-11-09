# WILDVERSE — Immediate Task Board

## Current milestone: Phase 0 Visual Prototype

### Task 0.1 — Repository bootstrap
- [ ] Create private GitHub repository `wildverse`.
- [ ] Initialize Next.js App Router + TypeScript with a stable compatible version.
- [ ] Enable strict TypeScript, ESLint and formatting conventions.
- [ ] Add Tailwind CSS and initialize shadcn/ui.
- [ ] Add `.env.example`, `.gitignore`, README and docs from this package.
- [ ] Add CI workflow for lint, typecheck and build.
- [ ] Protect `main`; use feature branches and pull requests.

### Task 0.2 — Design foundation
- [ ] Implement color/type/spacing/radius tokens.
- [ ] Implement responsive header, footer and page container.
- [ ] Implement dark/light section primitives.
- [ ] Check keyboard focus, contrast and reduced motion.

### Task 0.3 — Homepage vertical slice
- [ ] Cinematic hero with accessible fallback.
- [ ] Global search interaction over a small verified demo dataset.
- [ ] Animal group navigation.
- [ ] Featured discovery cards.
- [ ] Ecosystem and Extinct World sections.
- [ ] Responsive desktop/tablet/mobile layout.

### Task 0.4 — Demo data and species profiles
- [ ] Select 6–12 demonstrator taxa across animal groups.
- [ ] Include living and extinct taxa.
- [ ] Record accepted scientific name, common name, placement and sources.
- [ ] Verify image permissions and attribution.
- [ ] Build species profile page template.
- [ ] Build category/taxonomy explorer page.

### Task 0.5 — Prototype quality gate
- [ ] Run lint.
- [ ] Run typecheck.
- [ ] Run unit/component tests.
- [ ] Run Playwright on key journeys.
- [ ] Check responsive widths and reduced-motion mode.
- [ ] Check image loading and no-result/error states.
- [ ] Record screenshots and known issues.

## Later gates (do not start until Phase 0 is accepted)

- [ ] Database/auth compatibility spikes.
- [ ] Core Prisma schema + SQL migrations.
- [ ] Source registry and first approved ingestion connector.
- [ ] Public search and filters backed by PostgreSQL.
- [ ] Admin editorial workflow and RBAC.
- [ ] AI/RAG, geospatial and advanced 3D phases.

## Definition of done for any task

A task is done only when the implementation, tests, documentation, accessibility/security implications, and AI handoff report are complete. If something could not be tested, say so explicitly.

## Foundation handoff

The initial application and homepage slice are implemented; this does **not** complete Phase 0. A four-species static demo, basic search and source-linked profiles are now available. Broader source and taxonomy review, living and extinct demo coverage, shadcn/ui setup, automated component/E2E tests, and full accessibility and responsive verification remain open. Homepage artwork is AI-generated conceptual imagery, not source media. See README for local commands and CHANGELOG for the implementation summary.
