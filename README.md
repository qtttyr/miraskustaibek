# miraskustaibek.com

Personal site and digital business card of **Miras Kustaibek** — developer, startup manager, entrepreneur. Astana, Kazakhstan.

Built with Next.js (App Router), TypeScript and Tailwind CSS. Fully static, SEO-ready: JSON-LD `Person`, sitemap, robots, Open Graph image.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint        # eslint
npx tsc --noEmit    # type check
npm run build       # production build
npm start           # serve the production build
```

## Editing content

All personal data lives in `data/profile.ts` — name, roles, contacts, `siteUrl`, `sameAs` links, and the `bio` block used by the About section and the structured data. Update it there, not inside components.

## SEO

- `app/layout.tsx` — metadata, canonical URL, `Person` JSON-LD
- `app/sitemap.ts`, `app/robots.ts` — generated at build time
- `app/opengraph-image.tsx` — OG/Twitter image rendered with `next/og`
- `app/icon.svg` — favicon

After changing the domain, update `siteUrl` in `data/profile.ts`.

## Deploy

Vercel: import the repository, no build configuration needed. Then in [Google Search Console](https://search.google.com/search-console) add the property, verify via DNS record and submit `https://miraskustaibek.com/sitemap.xml`.

## Contact

[Miras Kustaibek](https://miraskustaibek.com) · [GitHub](https://github.com/qtttyr) · [Telegram](https://t.me/mmespiderman)
