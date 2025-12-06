import { ServerRoute, RenderMode, PrerenderFallback } from '@angular/ssr';
import { LanguageData } from '@environments/language-data';

export const brslServerRoutes: ServerRoute[] = [
  {
    path: 'second-light/items/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['second-light'].map(language => ({language}))
    }
  },
  {
    path: 'second-light/demons/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['second-light'].map(language => ({language}))
    }
  },
  {
    path: 'second-light/facilities/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['second-light'].map(language => ({language}))
    }
  },
  {
    path: 'second-light/fragments-and-dates/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['second-light'].map(language => ({language}))
    }
  },
  { path: 'second-light/items/:subject/:language', renderMode: RenderMode.Server },
  { path: 'second-light/demons/:subject/:language', renderMode: RenderMode.Server },
  { path: 'second-light/facilities/:subject/:language', renderMode: RenderMode.Server },
  { path: 'second-light/facilities/sets/:language', renderMode: RenderMode.Server },
  { path: 'second-light/skills/:language', renderMode: RenderMode.Server },
  { path: 'second-light/units/:language', renderMode: RenderMode.Server },
  { path: 'second-light/locations/:subject/:language', renderMode: RenderMode.Server },
];