import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Project-site base for GitHub Pages at /spiritual-platform-galaxy-graph/
// Overridden to "/" for Vercel / custom domain via VITE_BASE if set.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || "/",
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  server: { port: 5173, host: true },
});
