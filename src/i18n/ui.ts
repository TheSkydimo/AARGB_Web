export const defaultLang = "zh" as const;

export const languages = {
  zh: "中文",
  en: "English",
  ru: "Русский",
  tr: "Türkçe",
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  zh: {
    "site.name": "AARGB",
    "nav.home": "首页",
    "nav.products": "产品",
    "nav.features": "特性",
    "nav.about": "关于",
    "nav.language": "语言",

    "home.title": "AARGB | 电脑氛围灯光系统",
    "home.heading": "AARGB 电脑氛围灯光系统",
    "home.subheading": "多语言站点骨架已就绪，后续内容将逐步补充。",
    "home.cta.products": "查看产品",

    "products.title": "产品 | AARGB",
    "products.heading": "产品",

    "features.title": "特性 | AARGB",
    "features.heading": "特性",

    "about.title": "关于 | AARGB",
    "about.heading": "关于",

    "placeholder.title": "占位页 | AARGB",
  },
  en: {
    "site.name": "AARGB",
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.features": "Features",
    "nav.about": "About",
    "nav.language": "Language",

    "home.title": "AARGB | PC Ambient Lighting",
    "home.heading": "AARGB PC Ambient Lighting",
    "home.subheading": "Multilingual site scaffold is ready. Content will be added later.",
    "home.cta.products": "View products",

    "products.title": "Products | AARGB",
    "products.heading": "Products",

    "features.title": "Features | AARGB",
    "features.heading": "Features",

    "about.title": "About | AARGB",
    "about.heading": "About",

    "placeholder.title": "Placeholder | AARGB",
  },
  ru: {
    "site.name": "AARGB",
    "nav.home": "Главная",
    "nav.products": "Продукты",
    "nav.features": "Особенности",
    "nav.about": "О нас",
    "nav.language": "Язык",

    "home.title": "AARGB | Атмосферная подсветка ПК",
    "home.heading": "AARGB — атмосферная подсветка ПК",
    "home.subheading": "Каркас многоязычного сайта готов. Контент будет добавлен позже.",
    "home.cta.products": "К продуктам",

    "products.title": "Продукты | AARGB",
    "products.heading": "Продукты",

    "features.title": "Особенности | AARGB",
    "features.heading": "Особенности",

    "about.title": "О нас | AARGB",
    "about.heading": "О нас",

    "placeholder.title": "Страница-заглушка | AARGB",
  },
  tr: {
    "site.name": "AARGB",
    "nav.home": "Ana Sayfa",
    "nav.products": "Ürünler",
    "nav.features": "Özellikler",
    "nav.about": "Hakkında",
    "nav.language": "Dil",

    "home.title": "AARGB | PC Ambiyans Aydınlatma",
    "home.heading": "AARGB PC Ambiyans Aydınlatma",
    "home.subheading": "Çok dilli site iskeleti hazır. İçerik daha sonra eklenecek.",
    "home.cta.products": "Ürünleri görüntüle",

    "products.title": "Ürünler | AARGB",
    "products.heading": "Ürünler",

    "features.title": "Özellikler | AARGB",
    "features.heading": "Özellikler",

    "about.title": "Hakkında | AARGB",
    "about.heading": "Hakkında",

    "placeholder.title": "Yer tutucu | AARGB",
  },
} as const;


