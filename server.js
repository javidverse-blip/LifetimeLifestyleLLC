const { createServer } = require("http");
const next = require("next");

if (!process.env.NODE_ENV) process.env.NODE_ENV = "production";
const dev = process.env.NODE_ENV === "development";
const hostname = "0.0.0.0";
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const server = createServer((req, res) => handle(req, res));

server.on("error", (err) => {
  console.error("[server.js] server error:", err);
  process.exit(1);
});

app
  .prepare()
  .then(() => {
    server.listen(port, hostname, () => {
      console.log(`> Lifetime Lifestyle ready on http://${hostname}:${port} (PORT=${process.env.PORT || "unset"})`);
    });
  })
  .catch((err) => {
    console.error("[server.js] failed to start:", err);
    process.exit(1);
  });
