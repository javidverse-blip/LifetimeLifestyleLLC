# Hostinger Deployment

Use these settings for Hostinger Node.js deployment through GitHub. The contact and newsletter endpoints require a Node.js runtime because they are Next.js API routes.

This exact configuration is proven in production on the JavidVerse site, which runs the same Next.js 16.3.0 stack.

- Framework: `Next.js`
- Branch: `main`
- Node.js: `22.x` (must be `20.9` or newer — the `engines` field requires it)
- Root directory: `/`
- Install command: `npm ci`
- Build command: `npm run build:hostinger`
- Start command: `npm run start`
- Output directory: leave **empty** — setting it classifies the app as static and Hostinger won't run the Node process
- Entry file: leave **empty** — do NOT set it to `server.js` (that file does not exist). `next start` binds `process.env.PORT` automatically.

There is no custom server and no standalone output. The app runs with `next start` exactly like the other working Hostinger sites.

## API placeholders

- `POST /api/contact`
- `POST /api/subscribe`

They can later be connected to MySQL and GetResponse without changing the page structure.
