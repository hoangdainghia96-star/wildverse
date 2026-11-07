# Security, Privacy and Operations Baseline

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
