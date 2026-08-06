# Hostinger Deployment

Use these settings for Hostinger Node.js deployment through GitHub. The contact and newsletter endpoints require a Node.js runtime because they are Next.js API routes.

The build uses the **webpack** pipeline (`next build --webpack`) because Hostinger's runtime returns 503 on Next.js 16's default Turbopack production output. Do not revert to a plain `next build`.

Hostinger assigns a random port at runtime via `process.env.PORT`, and the app must bind to it — otherwise Hostinger's proxy can't reach the process and returns 503 ("server temporarily busy"), restarting it in a loop.

The `start` script runs `next start -H 0.0.0.0 -p ${PORT:-3000}`, so the process listens on Hostinger's assigned port (falling back to `3000` if `PORT` is unset for local runs).

hPanel (Deployments → Deployment settings) values for the git deploy:

- Framework preset: `Other`
- Branch: `main`
- Node.js version: `22.x` (must be `20.9` or newer — the `engines` field requires it)
- Root directory: `./`
- Build command: `npm run build` (runs `next build --webpack`)
- Package manager: `npm`
- Output directory: leave **empty** — setting it classifies the app as static and Hostinger won't run the Node process
- Entry file: must launch the `start` script (run `npm start`, or leave it at the default so Hostinger uses `package.json` `start`). **Do not** point it at `server.js` — that custom server is no longer used.
- Environment variables: none required

Settings only apply to **new** deployments — click **Save and redeploy** after changing them, then check the Build and Runtime logs. A healthy Runtime log shows the Next.js banner bound to `http://0.0.0.0:<port>` (the assigned port, **not** `3000`) with no repeated restarts.

## API placeholders

- `POST /api/contact`
- `POST /api/subscribe`

They can later be connected to MySQL and GetResponse without changing the page structure.
