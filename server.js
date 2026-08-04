const { createServer } = require("http");
const { existsSync } = require("fs");
const next = require("next");

const dev = process.env.NODE_ENV === "development";
const hostname = "0.0.0.0";
const port = parseInt(process.env.PORT || "3000", 10);

console.log(`[boot] server.js starting (dev=${dev}, port=${port})`);
console.log(`[boot] PORT env=${JSON.stringify(process.env.PORT)}`);
console.log(
  `[boot] port-related env: ${Object.keys(process.env)
    .filter((k) => /port/i.test(k))
    .map((k) => `${k}=${JSON.stringify(process.env[k])}`)
    .join(" | ")}`
);
console.log(`[boot] NODE_ENV=${JSON.stringify(process.env.NODE_ENV)}`);
console.log(`[boot] cwd=${process.cwd()}`);
console.log(
  `[boot] .next/BUILD_ID exists=${existsSync(".next/BUILD_ID")}, .next/standalone/server.js exists=${existsSync(
    ".next/standalone/server.js"
  )}`
);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = createServer((req, res) => handle(req, res));
    server.on("error", (err) => {
      console.error("[boot] listen error:", err);
      process.exit(1);
    });
    server.listen(port, hostname, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
  })
  .catch((err) => {
    console.error("[boot] failed to start:", err);
    process.exit(1);
  });
