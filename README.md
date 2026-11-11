# DS Attorneys Website

<a id="readme-top"></a>

[Project repository](https://github.com/samkomane008/ds-attorneys)

<details>
<summary>Table of contents</summary>

- [About the project](#about-the-project)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

</details>

## About the project

Marketing website and insights pages for DS Attorneys. Source content is HTML,
CSS and JavaScript, with Jekyll configuration for article pages.

### Built with

Static HTML, CSS, JavaScript and Jekyll. [wrangler.jsonc](wrangler.jsonc)
configures Cloudflare Workers to serve `_site/` on `attds.co.za`.

### Repository layout

| Path | Purpose |
| --- | --- |
| `index.html` | Main website |
| `assets/` | Site images and other assets |
| `insights.html`, `insights-post.html` | Insights page sources |
| `_layouts/` | Jekyll templates |
| `_config.yml` | Site URLs, article permalink and Jekyll settings |
| `sanity/` | Article schema source |

## Getting started

### Prerequisites

Git and a Ruby environment with Jekyll 4.3 compatible tooling for the generated
site. The root has no npm application build.

### Installation

```bash
git clone https://github.com/samkomane008/ds-attorneys.git
cd ds-attorneys
```

### Local preview

With Jekyll installed in your local Ruby environment:

```bash
jekyll serve
```

Build the static output with `jekyll build --destination _site`.
Publishing the generated site is a separate authorised operation.
GitHub Actions does not run on this account.

## Usage

Edit the HTML sources for website content and `_layouts/` for article rendering.
The article permalink is `/insights/:title/`; `_config.yml` documents the
site settings. Preserve client-approved legal copy, contact details and branding.

## Roadmap

Track client-requested maintenance in the
[issue tracker](https://github.com/samkomane008/ds-attorneys/issues).
No new service claims or publishing commitments are introduced by this README.

## Contributing

Use an isolated worktree and feature branch. Check documentation links locally;
for site changes, build with Jekyll and inspect the affected pages. Record
validation in a PR and complete review before merge. Keep deployment separate
from documentation maintenance and never send email on the client's behalf.

## License

No repository license file is currently provided. This README does not grant
permission to use or redistribute the project.

## Contact

Samuel Komane · [GitHub](https://github.com/samkomane008)

Project: [samkomane008/ds-attorneys](https://github.com/samkomane008/ds-attorneys)

## Acknowledgments

README structure adapted from
[Best-README-Template](https://github.com/othneildrew/Best-README-Template).

[Back to top](#readme-top)
