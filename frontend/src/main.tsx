
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./App.css";  // ← Use this if App.css is inside src/

import App from "./App";

hydrateRoot(
  document.getElementById("root")!,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
