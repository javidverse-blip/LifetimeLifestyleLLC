# Hostinger Deployment

Use these settings for Hostinger Node.js deployment through GitHub. The contact and newsletter endpoints require a Node.js runtime because they are Next.js API routes.

The build uses the **webpack** pipeline (`next build --webpack`) because Hostinger's runtime returns 503 on Next.js 16's default Turbopack production output. Do not revert to a plain `next build`.

Hostinger assigns a random port at runtime via `process.env.PORT`, and the app must bind to it — otherwise Hostinger's proxy can't reach the process and returns 503 ("server temporarily busy"), restarting it in a loop. The app runs through `server.js`, which binds `0.0.0.0` + `process.env.PORT` and defaults `NODE_ENV=production` when Hostinger does not set it.

hPanel (Deployments → Deployment settings) values for the git deploy:

- Framework preset: `Other`
- Branch: `main`
- Node.js version: `22.x` (must be `20.9` or newer — the `engines` field requires it)
- Root directory: `./`
- Build command: `npm run build` (runs `next build --webpack`)
- Package manager: `npm`
- Output directory: leave **empty** — setting it classifies the app as static and Hostinger won't run the Node process
- Entry file: `server.js` (binds `0.0.0.0` + `process.env.PORT`)
- Environment variables: none required

Settings only apply to **new** deployments — click **Save and redeploy** after changing them, then check the Build and Runtime logs. A healthy Runtime log shows `> Lifetime Lifestyle ready on http://0.0.0.0:<port>`.

## API placeholders

- `POST /api/contact`
- `POST /api/subscribe`

They can later be connected to MySQL and GetResponse without changing the page structure.
