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
  visible: z.boolean().optional(),
});

export function indexedDescriptions(count: number = 4, strings: string[]=["desc", "char"]) {
  const fields: Record<string, z.ZodOptional<z.ZodString>> = {};
  for (let i = 1; i <= count; i++) {
    for (let s of strings) {
      fields[`${s}${i}`] = languageSchema.optional()
    }
  }
  return z.object(fields);
}
