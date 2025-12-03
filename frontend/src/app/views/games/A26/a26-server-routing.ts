import { ServerRoute, RenderMode, PrerenderFallback } from '@angular/ssr';
import { LanguageData } from '@environments/language-data';

export const a26ServerRoutes: ServerRoute[] = [
  {
    path: 'yumia/items/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['yumia'].map(language => ({language}))
    }
  },
  {
    path: 'yumia/traits/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['yumia'].map(language => ({language}))
    }
  },
  {
    path: 'yumia/effects/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['yumia'].map(language => ({language}))
    }
  },
  {
    path: 'yumia/monsters/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['yumia'].map(language => ({language}))
    }
  },
  { path: 'yumia/items', renderMode: RenderMode.Client },
  { path: 'yumia/items/:subject/:language', renderMode: RenderMode.Server },
  { path: 'yumia/traits', renderMode: RenderMode.Client },
  { path: 'yumia/traits/:subject/:language', renderMode: RenderMode.Server },
  { path: 'yumia/effects', renderMode: RenderMode.Client },
  { path: 'yumia/effects/:subject/:language', renderMode: RenderMode.Server },
  { path: 'yumia/monsters', renderMode: RenderMode.Client },
  { path: 'yumia/monsters/:subject/:language', renderMode: RenderMode.Server },
  { path: 'yumia/categories', renderMode: RenderMode.Client },
  { path: 'yumia/categories/:subject', renderMode: RenderMode.Client },
  { path: 'yumia/categories/:subject/:language', renderMode: RenderMode.Server },
  { path: 'yumia/treasure-trove-key-locations', renderMode: RenderMode.Client },
  { path: 'yumia/treasure-trove-key-locations/:language', renderMode: RenderMode.Server },
  { path: 'yumia/memory-vial-locations', renderMode: RenderMode.Client },
  { path: 'yumia/memory-vial-locations/:language', renderMode: RenderMode.Server },
];