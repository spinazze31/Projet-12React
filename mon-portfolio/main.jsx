import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Url from "./src/assets/Router/url";
import "../mon-portfolio/src/assets/main/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Url />
    </Router>
  </StrictMode>
);
