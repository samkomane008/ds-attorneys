# DS Attorneys — safe client-site CI/CD handover

**Draft. No production deployment and no GitHub secrets changed by this PR.**

Previously the Cloudflare workflow ran for PRs and made `CLOUDFLARE_API_TOKEN` available as a job-level environment variable even when its final deploy step was skipped. This is not safe for code review.

This PR adds two **secret-free** CI checks: actual Jekyll build (`website-build`) and full-history Gitleaks scan (`secret-scan`). It includes offline regression tests for the exact-SHA release policy. Cloudflare CD runs only after a successful **main-push CI**, then independently checks current main SHA, merged PR provenance, both named checks and that main has not advanced before the publish step. Production token is available only in that final step.

**Deployment remains OFF by default.** To cut over, verify deployed Cloudflare revision and client site health; obtain full exact-head CI success; provision a dedicated trusted `ds-deploy` runner, set `DS_DEPLOY_RUNNERS` to explicit JSON labels containing `self-hosted` and `ds-deploy`, verify Cloudflare credentials and artifact rollback and only then set `DS_DEPLOY_ENABLED=true`. Never use a PR-capable shared VM for a production credential. Keep only one auto-deploy controller at a time.

The existing hosted CI runner can be replaced via `DS_CI_RUNNERS` when an isolated CI-only worker exists; GitHub hosted billing may prevent scheduling today. Do **not** claim full production release readiness until successful final smoke, rollback and live release ID have been recorded. Current CD rebuilds the reviewed source at the exact SHA; immutable CI artifact promotion is a future stage.

Central delivery standard: https://github.com/samkomane008/samloryx-infrastructure/blob/main/docs/FAST_SAFE_DELIVERY.md
