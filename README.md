# Core Support

Independent shopping assistance website. A client-side single-page app built with
React, Vite, Tailwind CSS and TanStack Router.

```sh
npm install
npm run dev        # local dev server
npm run build      # production build in dist/
npm run typecheck
npm test
```

Routes: `/` (marketing page with anchored sections), `/privacy`, `/terms`, `/disclaimer`.
Host `dist/` on any static host with a fallback to `index.html` (see `public/_redirects`).
