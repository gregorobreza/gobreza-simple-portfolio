import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import remarkToc from 'remark-toc';

const isDev = import.meta.env.DEV;

// https://astro.build/config
export default defineConfig({
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeAccessibleEmojis],
  },
  integrations: [
    mdx(),
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
    }),
    // sitemap(),
    
  ],
  redirects: {
    "/projects-tags": "/projects",
  },
  site: "https://gregorobreza.github.io",
  base: isDev ? "/" : '/gobreza-simple-portfolio',
});
