export interface NavItem {
  name: string;
  url?: string;
  svg?: string;
  children?: NavItem[];
  expand?: boolean;
  external?: boolean;
}

export const LanguageData: Record<string, Record<string,string[]|string>> = {
    languages: {
      "totori":         ["en", "ja"],
      "escha":          ["en", "ja"],
      "shallie":        ["en", "ja"],
      "firis":          ["en", "ja", "sc", "tc"],
      "ryza2":          ["en", "fr", "ja", "ko", "sc", "tc"],
      "sophie2":        ["en", "ja", "ko", "sc", "tc"],
      "resleri":        ["en", "ja", "sc", "tc"],
      "resleriana-red-white": ["en", "ja", "ko", "sc", "tc"],
      "yumia":          ["en", "de", "es", "fr", "ja", "ko", "ru", "sc", "tc"],
      "bluereflection": ["en"],
      "second-light":   ["en", "ja", "sc", "tc"],
      "default":        ["en"],
    },
    language_codes: {
      "en":"English",
      "de":"Deutsch",
      "es":"Español",
      "fr":"Français",
      "ja":"日本語",
      "ko":"한국어",
      "ru":"Русский",
      "sc":"简体中文",
      "tc":"繁體中文"
    },
};
