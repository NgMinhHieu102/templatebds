# LUMIÈRE Prime Hills source page mirror

- Local route: `/`
- Source snapshot: `public/lumiereprimehills.html`
- Handler: `src/app/route.ts` returns the source HTML as the root document, so source scroll, lazy loading, and reveal interactions attach to the main browser viewport.
- Assets: `public/lumiereprimehills/`, `public/images/lumiere/`, `public/fonts/lumiere/`, and `public/css/lumiere/`
- Original Next.js client bundles and stylesheet chunks provide responsive layout and interactions. The image route redirects source optimizer URLs to local asset copies.
- Desktop rendering was visually compared with the source page.
