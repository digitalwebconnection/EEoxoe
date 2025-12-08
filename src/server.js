const express = require("express");
const path = require("path");

const app = express();

// Serve the Vite build output (dist folder)
const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));

// Always return index.html for SPA routing
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Vite React app is running → http://localhost:${PORT}`);
});
