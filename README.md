# dobrow.blog

Personal site of Andrew Dobrow, built with **Astro 6** and plain CSS. Main routes:

- `/` — short introduction, profile photo, Now preview and recent writing
- `/blog/` — full blog archive
- `/blog/<slug>/` — existing Markdown posts, individual webmentions
- `/now/` — what I'm doing lately
- `/about/` — personal background and projects
- `/rss.xml` — RSS feed

## Development

Node.js 22.12+ is required.

```sh
npm ci
npm run dev
npm run build
```

The production URL is set in `astro.config.mjs` to `https://dobrow.blog`.

## Editing

- **New posts:** create `.md` files in `src/content/blog/` with `title`, `description`, `pubDate`, and optional `tags`. Published slugs are file names.
- **Now page:** edit `src/pages/now.astro`; update its visible date whenever you change the contents. The home page's Now teaser is in `src/pages/index.astro`.
- **Bio:** edit `src/pages/index.astro` and `src/pages/about.astro`.
- **Avatar:** add `public/images/andrew-dobrow.jpg`, which will be served at `/images/andrew-dobrow.jpg`; until then, the home page uses fallback initials.
- **Navigation and colors:** `src/components/Header.astro` and `src/styles/global.css`.

## Webmentions

Incoming webmention discovery is installed in `src/components/BaseHead.astro`, and the per-post browser viewer is `src/components/Webmentions.astro`. **You must claim/activate the domain at webmention.io** to receive mentions. Outgoing mentions can be manually sent *after deployment* with `npm run webmentions:send` (latest RSS entry), or `npm run webmentions:send -- https://dobrow.blog/blog/your-post/` (specific live article).

See **`WEBMENTIONS_SETUP.md`** for the exact setup, identity verification, privacy and moderation considerations, and outgoing mentions.

## Deploy verification

`.github/workflows/astro-check.yml` runs `npm ci` and `npm run build` on pushes and pull requests. This is a check only; it **does not deploy** the website. Continue using your existing hosting/deployment process.
