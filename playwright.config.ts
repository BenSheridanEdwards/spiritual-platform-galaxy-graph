import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: "render.smoke.spec.ts",
  workers: 1,
  timeout: 180000,
  use: {
    viewport: { width: 800, height: 600 },
    browserName: "chromium",
    launchOptions: { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] },
  },
  webServer: {
    command: "npm run build && npm run preview -- --host 127.0.0.1 --port 4173 --strictPort",
    url: "http://127.0.0.1:4173/spiritual-platform-galaxy-graph/",
    reuseExistingServer: false,
  },
});
