import { HTML_LANG_MAP } from "./navigation";

const sortCollators = new Map<string, Intl.Collator>();

export function getSortCollator(lang: string): Intl.Collator {
  const locale = HTML_LANG_MAP[lang];
  if (!sortCollators.has(locale)) {
    sortCollators.set(locale, new Intl.Collator(locale, { sensitivity: 'variant', numeric: true }));
  }
  return sortCollators.get(locale)!;
}

export function sortByLocale<T>(items: T[], lang: string, getText: (item: T) => string): T[] {
  const collator = getSortCollator(lang);
  return [...items].sort((a, b) => collator.compare(getText(a), getText(b)));
}

// case and accent insensitive search
function fold(text: string, locale: string): string {
  return text
    .toLocaleLowerCase(locale)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export function localeIncludes(text: string, term: string, lang: string): boolean {
  if (!term) return true;
  const locale = HTML_LANG_MAP[lang];
  return fold(text, locale).includes(fold(term, locale));
}
