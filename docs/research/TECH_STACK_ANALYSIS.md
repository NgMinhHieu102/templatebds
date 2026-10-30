# Source stack

- The page is built on Next.js App Router (visible from source markup and client chunks).
- Styling is Tailwind CSS plus authored CSS chunks.
- Typography includes local SVN Optima and a serif display fallback.
- Images are delivered via the source Next image optimizer and upload CDN; the local clone mirrors these files and redirects optimizer requests to local assets.
- Client interactions are hydrated by the original page bundles.
