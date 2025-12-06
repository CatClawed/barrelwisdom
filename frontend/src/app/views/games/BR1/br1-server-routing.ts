import { ServerRoute, RenderMode, PrerenderFallback } from '@angular/ssr';
import { LanguageData } from '@environments/language-data';

export const br1ServerRoutes: ServerRoute[] = [
  {
    path: 'bluereflection/items/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['bluereflection'].map(language => ({language}))
    }
  },
  {
    path: 'bluereflection/demons/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['bluereflection'].map(language => ({language}))
    }
  },
  {
    path: 'bluereflection/fragment-effects/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['bluereflection'].map(language => ({language}))
    }
  },
  { path: 'bluereflection/items/:subject/:language', renderMode: RenderMode.Server },
  { path: 'bluereflection/demons/:subject/:language', renderMode: RenderMode.Server },
  { path: 'bluereflection/missions/:language', renderMode: RenderMode.Server },
  { path: 'bluereflection/skills/:language', renderMode: RenderMode.Server },
];