import { LanguageData } from "@app/localization/localization";

export async function getNavForGame(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  const gameId = parts[0] || 'default';

  const lastPart = parts[parts.length - 1];

  const supported = (LanguageData.languages as any)[gameId] ||
    LanguageData.languages.default;

  let lang = "en"
  if (lastPart && lastPart.length == 2 && supported.includes(lastPart)) {
    lang = lastPart;
  }

  try {
    const navModule = await import(`@app/localization/navigation/${gameId}.ts`);
    return navModule[lang] || navModule.en;
  } catch (e) {
    const navModule = await import(`@app/localization/navigation/default.ts`);
    return navModule.en;
  }
}
