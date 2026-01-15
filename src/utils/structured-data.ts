/**
 * 生成结构化数据 (Schema.org JSON-LD)
 */

export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description?: string;
  sameAs?: string[];
}

export interface SoftwareApplicationSchema {
  "@context": "https://schema.org";
  "@type": "SoftwareApplication";
  name: string;
  operatingSystem: string;
  applicationCategory: "UtilitiesApplication";
  offers?: {
    "@type": "Offer";
    price: string;
    priceCurrency?: string;
  };
  description?: string;
  downloadUrl?: string;
  softwareVersion?: string;
  datePublished?: string;
  aggregateRating?: {
    "@type": "AggregateRating";
    ratingValue: string;
    ratingCount: string;
  };
}

export interface WebPageSchema {
  "@context": "https://schema.org";
  "@type": "WebPage";
  name: string;
  description: string;
  url: string;
  inLanguage: string;
  isPartOf?: {
    "@type": "WebSite";
    name: string;
    url: string;
  };
}

export interface BreadcrumbListSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item?: string;
  }>;
}

/**
 * 生成组织结构化数据
 */
export function generateOrganizationSchema(locale: string): OrganizationSchema {
  const descriptions: Record<string, string> = {
    en: "AARGB is a company focused on ambient lighting control systems for PC peripherals, covering R&D, manufacturing, and sales.",
    zh: "AARGB 是一家专注于电脑周边氛围灯光控制系统的企业,集研发、生产与销售于一体。",
    ru: "AARGB — компания, специализирующаяся на системах управления атмосферной подсветкой для ПК‑периферии.",
    tr: "AARGB, PC çevre birimleri için ambiyans aydınlatma kontrol sistemlerine odaklanan bir şirkettir.",
  };

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AARGB",
    url: "https://AARGB.com",
    logo: "https://AARGB.com/images/LOGO.png",
    description: descriptions[locale] || descriptions.en,
    sameAs: [
      // 如果有社交媒体账号,在这里添加
      // "https://twitter.com/AARGB",
      // "https://facebook.com/AARGB",
    ],
  };
}

/**
 * 生成软件应用结构化数据
 */
export function generateSoftwareSchema(
  locale: string,
  softwareName: string,
  version: string,
  os: string,
  downloadUrl: string
): SoftwareApplicationSchema {
  const descriptions: Record<string, string> = {
    en: "AARGB Desktop Ambient Lighting Control System - Official control software for managing ARGB lighting devices with screen sync, music reactive, and dynamic effects.",
    zh: "AARGB 桌面氛围灯光控制系统 - 官方控制软件,支持同屏模式、音乐模式、动态灯效等。",
    ru: "Система управления атмосферной подсветкой AARGB - Официальное ПО для управления ARGB-подсветкой.",
    tr: "AARGB Masaüstü Ambiyans Aydınlatma Kontrol Sistemi - ARGB cihazları için resmi kontrol yazılımı.",
  };

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: softwareName,
    operatingSystem: os,
    applicationCategory: "UtilitiesApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: descriptions[locale] || descriptions.en,
    downloadUrl,
    softwareVersion: version,
  };
}

/**
 * 生成网页结构化数据
 */
export function generateWebPageSchema(
  name: string,
  description: string,
  url: string,
  locale: string
): WebPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    inLanguage: locale,
    isPartOf: {
      "@type": "WebSite",
      name: "AARGB",
      url: "https://AARGB.com",
    },
  };
}

/**
 * 生成面包屑导航结构化数据
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>
): BreadcrumbListSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}
