# Blog

Personal project posts built with Angular. Post text and media live in `src/assets/posts/<slug>/`. Each folder has an `index.json` with the title, description, date, tag, and thumbnail.

## Local preview

Use the Node version declared in `package.json`. Run `npm ci`, then `npm start`. The default preview is http://localhost:4200.

## Adding or editing a post

Add the Markdown, metadata, and media in a dated post folder. Register the slug in `src/assets/posts.json`, newest first, and add `/post/<slug>` to `routes.txt`. Keep code samples and embedded media separate from prose edits.

Run `npm run check:content` to check the post registry, required metadata, thumbnails, prerender routes, and prose punctuation. This is a style check, not an authorship detector. The AlphaPocket article also has an explicit media-file check.

## Build

Run `npm run build`. The build prerenders every registered route into `dist/blog/browser`. Server rendering reads public post text directly from the filesystem, so it does not require a localhost HTTP server during the build. The server entry supplies the packaged browser directory when running the SSR build.

Check the generated HTML as well as the command's exit code. Each post should have a title and its actual text, not an empty client-side shell. Articles are lazy-loaded and the initial bundle stays within the configured budget.

## Before publishing

Run `npm run check:content`, `npm test`, `npm run build`, and `npm audit`. Install Chromium with `npx playwright install chromium`, then run `npm run test:e2e`. Browser checks cover article images, responsive layout, navigation, and server-rendered bodies for every registered article.

The standalone SSR server uses Angular's host allowlist. Localhost and 127.0.0.1 are allowed for previews. Set `NG_ALLOWED_HOSTS` to your exact production hostname before deploying, and configure HTTPS at the reverse proxy. Do not use a wildcard host.
