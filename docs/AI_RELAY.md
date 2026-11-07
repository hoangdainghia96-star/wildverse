# Multi-AI Development Relay Protocol

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
