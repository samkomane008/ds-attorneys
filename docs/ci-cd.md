# DS Attorneys website CI/CD

On every PR and `main` push, `.github/workflows/ci.yml` builds the
actual Jekyll static website with Ruby 3.3 and Jekyll 4.3 and verifies
key output exists. `deploy-cloudflare.yml` only starts after the separate
`ci` run **succeeds on a push to main**. It uses the precise validated
commit, verifies it remains current main and runs
`npx --yes wrangler@4 deploy` with the existing `wrangler.jsonc`
Cloudflare Workers static-asset configuration.

Set these in the GitHub repository:
- Secret `CLOUDFLARE_API_TOKEN`: scoped to this website's deployment.
- Variable `CLOUDFLARE_ACCOUNT_ID`: the actual Cloudflare account.

Missing credentials cause a visible failed deploy (no false success).
A failed or pending CI job cannot publish a new version. Do not run
deploys from PR branches. Successful Cloudflare API submission is checked
with a public HTTPS GET to `https://attds.co.za/`; external CDN caches
can still take time to refresh.

The old Workers deployment remains live if a new build or deploy fails.
Keep legal content, branding and client-approved publication boundaries
in place; this pipeline must not change the client's business facts or
email delivery settings.
