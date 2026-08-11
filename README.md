# Momento Official Dev Docs

https://docs.momentohq.com/

We ❤️ contributions! Please open a pr if something seems incorrect or could be explained better.

---

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Footer

The site footer (`src/theme/Footer`) mirrors the footer of the marketing site, [gomomento.com](https://www.gomomento.com/), so the two sites present a consistent brand footer. It is **not** driven by the `footer` block in `docusaurus.config.ts` (that block was removed); instead the link content lives in a dedicated data file that is the single sync point with the marketing site:

- `src/data/marketingFooter.ts` — group titles, link labels, and hrefs for each locale (`en`, `ja`).
- `src/theme/Footer/index.tsx` — the React layout (logo row, four link groups, copyright bar).
- `src/theme/Footer/styles.module.css` — the footer styles, ported from the marketing site's CSS.

The marketing footer's language/region switcher and legal links (privacy/cookie policy, terms, consent preferences) are intentionally **not** mirrored — the docs site has its own locale switcher in the left sidebar, and the legal links belong on the marketing site.

#### Keeping the footer in sync with the marketing site

When the [gomomento.com](https://www.gomomento.com/) footer changes, mirror the change in `src/data/marketingFooter.ts`:

1. View the source of the `<footer class="site-footer">` element on [gomomento.com](https://www.gomomento.com/) (English) and [gomomento.com/jp](https://www.gomomento.com/jp/) (Japanese).
2. Update the `groups` array so the titles, link labels, and hrefs match. The marketing site's hrefs are site-relative paths (e.g. `/products/valkey-router/`); keep them site-relative — `resolveFooterHref` in the same file maps them to the correct marketing-site origin per locale.
3. Keep the `en` and `ja` entries in lockstep (add/remove a group or link in both).
4. Skip the legal links and locale switcher (see above).
5. The "Documentation" link points back at this docs site, so keep `internal: true` on it (see `src/data/marketingFooter.ts`).

