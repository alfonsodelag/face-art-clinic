import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://demo-facial-art-clinic-alfonsodelag.vercel.app",
  integrations: [
    sanity({
      projectId: "jdls3x4j",
      dataset: "production",
      apiVersion: "2025-06-22",
      useCdn: false,
      studioBasePath: "/studio",
      studioRouterHistory: "hash"
    }),
    react(),
    sitemap()
  ]
});
