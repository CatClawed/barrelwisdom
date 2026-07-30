import { LanguageData } from "@app/localization/localization";

export function parseUrl(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  const gameId = parts[0]
    ? parts[0] === 'tags' || parts[0] === 'blog' || !isNaN(parts[0])
      ? 'default' : parts[0]
    : 'default';
  const lastPart = parts[parts.length - 1];
  const supported = LanguageData.languages[gameId] ||
    LanguageData.languages.default;

  let lang = "en"
  if (lastPart && lastPart.length == 2 && supported.includes(lastPart)) {
    lang = lastPart;
  }
  return {lang, gameId};
}

export async function getNavForGame(pathname: string) {
  const { lang, gameId } = parseUrl(pathname)

  try {
    const navModule = await import(`@app/localization/navigation/${gameId}.ts`);
    return navModule[lang] || navModule.en;
  } catch (e) {
    const navModule = await import(`@app/localization/navigation/default.ts`);
    return navModule.en;
  }
}

export const HTML_LANG_MAP: Record<string, string> = {
  en: 'en',
  ja: 'ja',
  ko: 'ko',
  de: 'de',
  es: 'es',
  fr: 'fr',
  ru: 'ru',
  sc: 'zh-Hans',
  tc: 'zh-Hant',
};

export function getHtmlLang(pathname: string): string {
  const { lang, gameId } = parseUrl(pathname)
  return HTML_LANG_MAP[lang] || 'en';
}
