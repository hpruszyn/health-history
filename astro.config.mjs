import { defineConfig } from "astro/config";

const requestedBase = process.env.BASE_PATH || "/";
const base = `/${requestedBase.replace(/^\/+|\/+$/g, "")}/`.replace("//", "/");
const site = process.env.SITE_URL || "https://example.com";

export default defineConfig({
  site,
  base,
  output: "static",
  build: { format: "directory" },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
