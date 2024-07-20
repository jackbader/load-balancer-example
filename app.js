const express = require("express");
const os = require("os");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const serverInfo = {
    hostname: os.hostname(),
    platform: os.platform(),
    arch: os.arch(),
    release: os.release(),
    uptime: os.uptime(),
  };
  res.send(`Hello, World! Served by ${JSON.stringify(serverInfo)}`);
});

app.get("/health-check", (req, res) => {
  res.status(200).send("OK");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
