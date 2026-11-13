import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
const version = (name: string) => JSON.parse(readFileSync(new URL(`../node_modules/${name}/package.json`, import.meta.url), "utf8")).version;

test("renders WebGL pixels and opens a node InfoCard", async ({ page, browser }, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => {
    if (message.type() === "error") errors.push(message.text());
  });
  const versions = {
    browser: browser.version(),
    three: version("three"),
    forceGraph: version("3d-force-graph"),
  };
  console.log(versions);
  await testInfo.attach("versions", { body: JSON.stringify(versions), contentType: "application/json" });
  await page.goto("http://127.0.0.1:4173/spiritual-platform-galaxy-graph/");
  expect(await page.evaluate(() => !!document.createElement("canvas").getContext("webgl"))).toBe(true);
  await page.waitForTimeout(2000);
  console.log("runtime", errors, await page.locator("canvas").count());
  expect(errors).toEqual([]);
  await expect.poll(async () => {
    const shot = await page.locator("canvas").screenshot();
    return page.evaluate(async (base64) => {
      const image = new Image();
      image.src = "data:image/png;base64," + base64;
      await image.decode();
      const canvas = document.createElement("canvas");
      canvas.width = image.width; canvas.height = image.height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(image, 0, 0);
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let count = 0;
      for (let i = 0; i < pixels.length; i += 4) {
        if (Math.abs(pixels[i] - 5) > 8 || Math.abs(pixels[i + 1] - 6) > 8 ||
            Math.abs(pixels[i + 2] - 10) > 8) count++;
      }
      return count;
    }, shot.toString("base64"));
  }, { timeout: 30000 }).toBeGreaterThan(100);
  await expect(page.locator("#info")).toHaveCount(0);
  await page.evaluate(() => {
    const graph = (window as any).__galaxy;
    if (!graph) throw new Error("window.__galaxy node-click hook missing");
    const node = graph.graphData().nodes.find((n: any) => n.kind === "service");
    graph.onNodeClick()(node);
  });
  await expect(page.getByTestId("info-card-service")).toBeVisible();
  expect(errors).toEqual([]);
});
