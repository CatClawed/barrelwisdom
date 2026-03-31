import { ServerRoute, RenderMode, PrerenderFallback } from '@angular/ssr';
import { LanguageData } from '@environments/language-data';

export const a22ServerRoutes: ServerRoute[] = [
  {
    path: 'ryza2/items/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['ryza2'].map(language => ({language}))
    }
  },
  {
    path: 'ryza2/traits/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['ryza2'].map(language => ({language}))
    }
  },
  {
    path: 'ryza2/effects/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['ryza2'].map(language => ({language}))
    }
  },
  {
    path: 'ryza2/forge-effects/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['ryza2'].map(language => ({language}))
    }
  },
  {
    path: 'ryza2/ev-effects/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['ryza2'].map(language => ({language}))
    }
  },
  {
    path: 'ryza2/monsters/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['ryza2'].map(language => ({language}))
    }
  },
  { path: 'ryza2/items/:subject/:language', renderMode: RenderMode.Server },
  { path: 'ryza2/traits/:subject/:language', renderMode: RenderMode.Server },
  { path: 'ryza2/effects/:subject/:language', renderMode: RenderMode.Server },
  { path: 'ryza2/monsters/:subject/:language', renderMode: RenderMode.Server },
  { path: 'ryza2/categories', renderMode: RenderMode.Client },
  { path: 'ryza2/categories/:subject/:language', renderMode: RenderMode.Server },
  { path: 'ryza2/locations/:subject/:language', renderMode: RenderMode.Server },
  { path: 'ryza2/shopdevelop/:language', renderMode: RenderMode.Server },
];