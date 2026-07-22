import { gameNames } from '@app/localization/game-names';
import { crumbDictionary } from '@app/localization/breadcrumbs';

// the boolean just asks whether to tack on the language code
const defaultLinks: Record<string, [string, boolean]> = {
  totori: ["items", true],
  escha: ["items", true],
  shallie: ["items", true],
  firis: ["items", true],
  sophie2: ["items", true],
  lulua: ["easy-final-boss-guide", false],
  resleri: ["items", true],
  "resleriana-red-white": ["items", true],
  ryza: ["faq", false],
  ryza2: ["items", true],
  ryza3: ["how-to-get-infinite-gems", false],
  yumia: ["items", true],
  bluereflection: ["items", true],
  "second-light": ["items", true],
  noa2: ["maps", false],
}

export function getBreadcrumbs(pathname: string, lang: string) {
  const parts = pathname.split('/').filter(Boolean);

  if (parts.length === 0) return [];

  const crumbs = [];
  let currentPath = '';

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part.length <= 2) continue;
    currentPath += `/${part}`;
    if (part === 'tags') return [];
    if (part === 'blog') continue;

    let url = currentPath;
    if (defaultLinks[part]) {
      url = defaultLinks[part][0];
      if (defaultLinks[part][1]) url += `/${lang}`
    }

    let label = part.charAt(0).toUpperCase() + part.slice(1);
    if ((gameNames as any)[part]?.[lang]) {
          label = (gameNames as any)[part][lang];
        } else if (crumbDictionary[part]?.[lang]) {
          label = crumbDictionary[part][lang];
        }

        crumbs.push({ label, url });
  }

  return crumbs;
}
