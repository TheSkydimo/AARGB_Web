import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://skydimo.com/config
export default defineConfig({
  site: "https://AARGB.com",
  i18n: {
    defaultLocale: "en",
    locales: ["zh", "en", "ru", "tr"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
      fallbackType: "redirect",
    },
  },
  integrations: [
    tailwind(),
    icon(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          zh: "zh",
          ru: "ru",
          tr: "tr",
        },
      },
      filter: (page) =>
        !page.includes("/404") &&
        !page.includes("/500"),
    }),
  ],
});
