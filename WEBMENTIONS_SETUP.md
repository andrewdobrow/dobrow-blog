# Webmentions setup — dobrow.blog

The code is installed in the Astro project, but **webmention.io must be activated by the domain owner** before it can actually receive mentions.

## 1. Publish this redesign

Upload the overlay contents to the **root of the existing GitHub repo**, preserving the paths. The overlay does not remove existing blog posts and does not contain your avatar picture. Build and deploy as you normally would. The new `.github/workflows/astro-check.yml` runs the Astro build on GitHub pushes and pull requests; **it does not publish the site**.

`astro.config.mjs` is now correctly set to `https://dobrow.blog`, so canonical links, RSS, sitemap and incoming-webmention targets point to your actual domain.

## 2. Activate receiving on webmention.io

1. Make sure your site at `https://dobrow.blog` is live. Its page headers will advertise:
   - `<link rel="webmention" href="https://webmention.io/dobrow.blog/webmention">`
   - `<link rel="pingback" href="https://webmention.io/dobrow.blog/xmlrpc">`
2. Visit **https://webmention.io/**, sign in with `https://dobrow.blog/`, and authorize/claim the domain with the options the service shows.
3. The template includes `rel="me"` for your GitHub profile `https://github.com/andrewdobrow` and X profile. For GitHub-based sign-in to work, your GitHub profile may need a reciprocal website link to `https://dobrow.blog/`. The service may present other sign-in options.
4. Confirm the endpoint assigned in webmention.io's settings. It is expected to be `https://webmention.io/dobrow.blog/webmention`; if it is different, change the `WEBMENTION_ENDPOINT` constant in `src/consts.ts` and the pingback endpoint in `src/components/BaseHead.astro`.
5. Leave moderation enabled in webmention.io if you want to approve incoming mentions before they are public.

## 3. Display incoming mentions

The `src/components/Webmentions.astro` component is already included on every individual blog post. It reads the **public per-page feed** from `https://webmention.io/api/mentions.jf2?target=...`. It displays public incoming mentions, replies, likes, bookmarks, and reposts with safe text-only content. It needs no API token and works on static Astro hosting. When empty, the page displays “No webmentions yet.”

**Only valid, accepted/approved webmentions appear.** The receiver verifies that an external page links to your article. This does not automatically import ordinary social-media replies; that usually needs a bridge such as [Bridgy](https://brid.gy/), if supported for the social service.

## 4. Send outgoing mentions from your blog

A separate command is available when your article links to another webmention-enabled website:

```bash
npm run webmentions:send
```

This asks [webmention.app](https://webmention.app/docs) to inspect the **latest live RSS item** and send webmentions to supporting websites linked from it. Run **after** the new article is deployed, not during the build. To re-send a particular published post:

```bash
npm run webmentions:send -- https://dobrow.blog/blog/making-news/
```

The service works without a token but may rate-limit unauthenticated requests. For higher usage, obtain a token from webmention.app and set `WEBMENTION_APP_TOKEN` in your environment. Do **not** commit the token to GitHub. Automatic sending can be added later as a post-deployment action once we know your hosting/deployment workflow; nothing auto-sends merely from this overlay.

## 5. Add your avatar image

Upload your photo at this exact repository path:

`public/images/andrew-dobrow.jpg`

It will then appear at **https://dobrow.blog/images/andrew-dobrow.jpg** after deployment. Until then the homepage shows an “AD” initials fallback. Do not rename the file or change capitalization. The same image URL is the social preview fallback unless an article has a hero image.

## 6. What changed, and what did not

- New modern home design with intro, avatar, Now preview, recent writing, and links.
- Blog listing changed to a single clean chronological archive.
- New `/now/` page, content dated October 16, 2026; edit it as your priorities change.
- About page refreshed, header and footer unified, all existing Markdown posts and article permalinks preserved.
- Fixed malformed homepage frontmatter and the old `example.com` site setting; added tags to content schema.
- Fixed RSS item ordering to newest first.
- No database, service credentials, hosting changes, domain/DNS changes, or email service setup needed.
