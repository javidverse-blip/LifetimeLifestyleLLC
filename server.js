const { createServer } = require("http");
const { existsSync } = require("fs");
const next = require("next");

const dev = process.env.NODE_ENV === "development";
const hostname = "0.0.0.0";
const port = parseInt(process.env.PORT || "3000", 10);

console.log(`[boot] server.js starting (dev=${dev}, port=${port})`);
console.log(`[boot] PhusionPassenger type=${typeof PhusionPassenger}`);
console.log(`[boot] PORT env=${JSON.stringify(process.env.PORT)}`);
console.log(`[boot] NODE_ENV=${JSON.stringify(process.env.NODE_ENV)}`);
console.log(`[boot] cwd=${process.cwd()}`);
console.log(`[boot] .next/BUILD_ID exists=${existsSync(".next/BUILD_ID")}`);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

console.log("[boot] preparing next app...");
const t0 = Date.now();
const timer = setTimeout(() => {
  console.log("[boot] STILL preparing after 20s");
}, 20000);

app
  .prepare()
  .then(() => {
    clearTimeout(timer);
    console.log(`[boot] prepare OK (${Date.now() - t0}ms)`);
    const server = createServer((req, res) => handle(req, res));
    server.on("error", (err) => {
      console.error("[boot] listen error:", err);
      process.exit(1);
    });
    console.log("[boot] calling listen()...");
    server.listen(port, hostname, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
  })
  .catch((err) => {
    clearTimeout(timer);
    console.error("[boot] failed to start:", err);
    process.exit(1);
  });
