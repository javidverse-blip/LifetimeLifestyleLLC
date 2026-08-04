# Hostinger Deployment

Use these settings for Hostinger Node.js deployment through GitHub. The contact and newsletter endpoints require a Node.js runtime because they are Next.js API routes.

Hostinger assigns a random port at runtime via `process.env.PORT`, and the app must bind to it — otherwise Hostinger's proxy can't reach the process and returns 503 ("server temporarily busy"), restarting it in a loop. For this reason the app runs through `server.js`, which binds `0.0.0.0` + `process.env.PORT`, instead of relying on `next start`'s default port 3000.

- Framework: `Next.js`
- Branch: `main`
- Node.js: `22.x` (must be `20.9` or newer — the `engines` field requires it)
- Root directory: `/`
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: leave **empty**
- Entry file: `server.js` (binds `0.0.0.0` + `process.env.PORT`)

## API placeholders

- `POST /api/contact`
- `POST /api/subscribe`

They can later be connected to MySQL and GetResponse without changing the page structure.
