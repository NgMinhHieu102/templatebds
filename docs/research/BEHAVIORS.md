# LUMIÈRE Prime Hills behavior reference

The local page serves the target's rendered HTML, original Next.js 16 client bundles, original CSS chunks, original image/font assets, and its bundled interactions. This preserves the behavior supplied by the target rather than substituting approximations.

## Observed desktop initial viewport
- Full viewport hero with overlay navigation and centered project wordmark.
- “MENU” opens the target's full-screen navigation.
- Header includes hotline, consultation CTA, and language selector.
- Hero copy is a timed headline presentation over the architectural render.
- Three floating right-side controls provide page-top, navigation/compass, and call affordances.
- Hero artwork has a desktop and mobile source image.

## Source style findings
- Root typography: SVN-Cera serif fallback at 15px.
- Body typography: locally hosted SVN Optima; 15px default, 14px at widths <=1600px, 12px at widths <=1280px.
- Main source palette includes ink #1B2018, gold #BEA676, stone #C2B1A0, and plum #1B0218.
- Shared transition token: `all .5s ease`.
- Layout container token: `calc(100vw - 150px)` with centered side padding.

The source's own client bundles handle the menu, hero, gallery, amenity, scroll and form interactions. The page was visually checked against a Chrome screenshot of the source at 1440px.
