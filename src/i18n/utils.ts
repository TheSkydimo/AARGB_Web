import { defaultLang, languages, ui, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split("/");
  if (maybeLang && maybeLang in languages) return maybeLang as Lang;
  return defaultLang;
}

export function getRouteFromUrl(url: URL): string {
  const segments = url.pathname.split("/").filter(Boolean);
  const endsWithSlash = url.pathname.endsWith("/");

  if (segments.length === 0) return "/";

  const first = segments[0];
  const rest = first in languages ? segments.slice(1) : segments;

  const base = `/${rest.join("/")}`;
  if (base === "/") return "/";
  return endsWithSlash ? `${base}/` : base;
}

export function useTranslations(lang: Lang) {
  const dict = ui[lang] ?? ui[defaultLang];
  const fallback = ui[defaultLang];

  return (key: keyof (typeof ui)[typeof defaultLang]) => {
    return (dict as any)[key] ?? (fallback as any)[key] ?? String(key);
  };
}

export function useTranslatedPath(lang: Lang) {
  return (path: string, targetLang: Lang = lang) => {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    if (targetLang === defaultLang) return normalized;
    return `/${targetLang}${normalized}`;
  };
}


