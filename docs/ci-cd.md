# DS Attorneys CI/CD

The repository runs `.github/workflows/ci.yml` for PRs and pushes to
`main`. Its Jekyll `website-build` job validates the generated site
before any release is considered. The `cloudflare-production` job
requires successful build with `needs: build` and runs **only on main
pushes**, never on pull requests or failed builds. It builds the actual
static assets, refuses to deploy a superseded main revision, publishes
with the existing `wrangler.jsonc` Cloudflare Workers configuration,
and checks the public HTTPS origin.

The previous separate `workflow_run` deployment has been removed, so
an untrusted cross-workflow event cannot initiate a privileged release.

Existing repository configuration:
- Secret `CLOUDFLARE_API_TOKEN`: client-scoped Cloudflare deploy credential
- Variable `CLOUDFLARE_ACCOUNT_ID`: configured Cloudflare account

Missing credentials produce a visible deployment failure, not a
misleading skipped deploy. Do not modify the client's approved legal
content, domain routing or email DNS as a part of CI/CD. Review the
`cloudflare-production` job in the `ci` Actions run to check a release.
