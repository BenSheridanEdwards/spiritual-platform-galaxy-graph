import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || "/spiritual-platform-galaxy-graph/",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  server: { port: 5173, host: true },
});
