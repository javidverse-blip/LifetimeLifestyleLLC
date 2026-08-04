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

This configuration matches the JavidVerse site, which runs the same Next.js 16.3.0 stack in production on Hostinger.

hPanel (Deployments → Deployment settings) values for the git deploy:

- Framework: `Next.js`
- Node.js version: `22.x` (must be `20.9` or newer — the `engines` field requires it)
- Root directory: `/`
- Install command: `npm ci`
- Build command: `npm run build:hostinger`
- Start command: `npm run start`
- Output directory: leave **empty** — setting it classifies the app as static and Hostinger won't run the Node process
- Entry file: leave **empty** — do NOT set it to `server.js` (that file does not exist). `next start` binds `process.env.PORT` automatically.

There is no custom server and no standalone output — the app runs with `next start`, exactly like the other working Hostinger sites. See `HOSTINGER_DEPLOYMENT.md` for the full reference.

The current API placeholders are:

- `POST /api/contact`
- `POST /api/subscribe`

They can later be connected to MySQL and GetResponse without changing the page structure.
