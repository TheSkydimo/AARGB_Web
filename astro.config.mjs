import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
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
  integrations: [tailwind(), icon()],
});
