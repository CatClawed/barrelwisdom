import { ServerRoute, RenderMode, PrerenderFallback } from '@angular/ssr';
import { LanguageData } from '@environments/language-data';

export const a23ServerRoutes: ServerRoute[] = [
  {
    path: 'sophie2/items/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['sophie2'].map(language => ({language}))
    }
  },
  {
    path: 'sophie2/traits/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['sophie2'].map(language => ({language}))
    }
  },
  {
    path: 'sophie2/effects/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['sophie2'].map(language => ({language}))
    }
  },
  {
    path: 'sophie2/monsters/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['sophie2'].map(language => ({language}))
    }
  },
  {
    path: 'sophie2/recipe-ideas/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['sophie2'].map(language => ({language}))
    }
  },
  {
    path: 'sophie2/major-gathering/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['sophie2'].map(language => ({language}))
    }
  },
  { path: 'sophie2/items/:subject/:language', renderMode: RenderMode.Server },
  { path: 'sophie2/traits/:subject/:language', renderMode: RenderMode.Server },
  { path: 'sophie2/effects/:subject/:language', renderMode: RenderMode.Server },
  { path: 'sophie2/monsters/:subject/:language', renderMode: RenderMode.Server },
  { path: 'sophie2/categories', renderMode: RenderMode.Client },
  { path: 'sophie2/categories/:subject/:language', renderMode: RenderMode.Server },
  { path: 'sophie2/locations/:subject/:language', renderMode: RenderMode.Server },
  { path: 'sophie2/seeds/:language', renderMode: RenderMode.Server },
];