import { z } from 'astro/zod';
import { LanguageData } from '@app/localization/localization';

const langKeys = Object.keys(LanguageData.language_codes);

export const languageSchema = z.object(
  langKeys.reduce((acc, lang) => {
    acc[lang] = z.string().optional();
    return acc;
  }, {} as Record<string, z.ZodString>)
);

export const nameLinkSchema = z.object({
  id: z.coerce.string(),
  name: languageSchema,
});

export const baseItemSchema = z.object({
  id: z.number(),
  name: languageSchema,
  desc: languageSchema,
});
