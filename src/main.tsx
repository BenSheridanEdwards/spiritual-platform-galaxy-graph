import React from "react";
import { createRoot } from "react-dom/client";
import GalaxyGraph from "./GalaxyGraph";
import "./style.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div style={{ width: "100vw", height: "100vh", margin: 0, background: "#05060a" }}>
      <GalaxyGraph />
    </div>
  </React.StrictMode>
);
