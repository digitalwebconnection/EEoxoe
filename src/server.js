// server.js
const express = require("express");
const path = require("path");
const compression = require("compression");

const app = express();

// Use compression for smaller responses (optional but recommended)
app.use(compression());

// Serve the Vite / CRA build folder (replace 'dist' with 'build' if you use CRA)
const staticDir = path.join(__dirname, "dist"); // Vite default output folder
app.use(express.static(staticDir, { maxAge: "1y", index: false }));

// SPA fallback: always serve index.html for routes not matching a static asset
app.get("*", (req, res) => {
  res.sendFile(path.join(staticDir, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App served at http://localhost:${PORT} (serving ${staticDir})`);
});
