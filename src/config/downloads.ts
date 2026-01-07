export type DownloadOption = {
  /** i18n key for option label */
  labelKey: string;
  /**
   * Use "#" to mark as unavailable.
   * Use "internal:/path/" to link to an internal route (will be localized).
   */
  url: string;
};

export type DownloadTarget = {
  id: "win-classic" | "win-recommended" | "macos";
  /** i18n key */
  titleKey: string;
  /** i18n key */
  badgeKey?: string;
  version: string;
  /** i18n key */
  osNoteKey: string;
  /** i18n keys */
  bulletsKeys: string[];
  options: DownloadOption[];
  featured?: boolean;
};

/**
 * Central download metadata used by both HomePage and Download page.
 *
 * NOTE: Replace "#" with real links when they are ready.
 */
export const DOWNLOAD_TARGETS: DownloadTarget[] = [
  {
    id: "win-classic",
    titleKey: "home.download.cards.winClassic.title",
    version: "v1.2.1.526",
    osNoteKey: "home.download.cards.winClassic.os",
    bulletsKeys: [
      "home.download.cards.winClassic.b1",
      "home.download.cards.winClassic.b2",
      "home.download.cards.winClassic.b3",
      "home.download.cards.winClassic.b4",
    ],
    options: [
      { labelKey: "home.download.menu.primary", url: "https://aargb.com/AARGBSetup.exe" },
      { labelKey: "home.download.menu.more", url: "internal:/download/" },
    ],
  },
  {
    id: "win-recommended",
    titleKey: "home.download.cards.winRecommended.title",
    badgeKey: "home.download.cards.winRecommended.badge",
    version: "v2.0.4.A5BCE593",
    osNoteKey: "home.download.cards.winRecommended.os",
    bulletsKeys: [
      "home.download.cards.winRecommended.b1",
      "home.download.cards.winRecommended.b2",
      "home.download.cards.winRecommended.b3",
      "home.download.cards.winRecommended.b4",
      "home.download.cards.winRecommended.b5",
      "home.download.cards.winRecommended.b6",
    ],
    options: [
      { labelKey: "home.download.menu.primary", url: "#" },
      { labelKey: "home.download.menu.more", url: "internal:/download/" },
    ],
    featured: true,
  },
  {
    id: "macos",
    titleKey: "home.download.cards.macos.title",
    version: "v1.2.1.547",
    osNoteKey: "home.download.cards.macos.os",
    bulletsKeys: [
      "home.download.cards.macos.b1",
      "home.download.cards.macos.b2",
      "home.download.cards.macos.b3",
    ],
    options: [
      { labelKey: "home.download.menu.primary", url: "#" },
      { labelKey: "home.download.menu.more", url: "internal:/download/" },
    ],
  },
];


