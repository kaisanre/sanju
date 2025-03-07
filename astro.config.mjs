import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
	site: "https://www.sanju.sh",
	integrations: [
		mdx(),
		sitemap({
			changefreq: "daily",
			priority: 1,
			lastmod: new Date().toISOString().split("T")[0],
		}),
		tailwind(),
	],
	output: "server",
	adapter: vercel(),
});
