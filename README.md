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

Recommended settings:

- Node.js: `20.x` or newer
- Application mode: `Production`
- Build command: `npm run build`
- Start command: `npm run start`
- Application port: the port provided by Hostinger through `PORT`

hPanel (Deployments → Deployment settings) values for the git deploy:

- Framework preset: `Other`
- Node.js version: `20`
- Build command: `npm run build`
- Package manager: `npm`
- Output directory: leave **empty** — setting it classifies the app as static and Hostinger won't run the Node process
- Entry file: `server.js` (starts the app and binds `process.env.PORT`)

Upload the source project without `node_modules`, `.next`, or local environment files. Run `npm install` and `npm run build` on the server, then start the application through Hostinger's Node.js app manager.

The current API placeholders are:

- `POST /api/contact`
- `POST /api/subscribe`

They can later be connected to MySQL and GetResponse without changing the page structure.
