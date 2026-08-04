# Lifetime Lifestyle

Next.js website for Lifetime Lifestyle, including the public marketing pages, program catalog, contact form, and newsletter placeholder endpoint.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run lint
npm run build
npm run start
```

## Hostinger Deployment

Deploy this project as a **Node.js application** in Hostinger. Static-only hosting is not sufficient because the project includes Next.js API routes.

Hostinger assigns a random port at runtime via `process.env.PORT`; the app must bind to it or Hostinger returns 503 and restarts the process in a loop. The app therefore runs through `server.js` (binds `0.0.0.0` + `process.env.PORT`).

hPanel (Deployments → Deployment settings) values for the git deploy:

- Framework: `Next.js`
- Node.js version: `22.x` (must be `20.9` or newer — the `engines` field requires it)
- Root directory: `/`
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: leave **empty**
- Entry file: `server.js` (binds `0.0.0.0` + `process.env.PORT`)

See `HOSTINGER_DEPLOYMENT.md` for the full reference.

The current API placeholders are:

- `POST /api/contact`
- `POST /api/subscribe`

They can later be connected to MySQL and GetResponse without changing the page structure.
