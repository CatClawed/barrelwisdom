import { ServerRoute, RenderMode, PrerenderFallback } from '@angular/ssr';
import { LanguageData } from '@environments/language-data';

export const a18ServerRoutes: ServerRoute[] = [
  {
    path: 'firis/items/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['firis'].map(language => ({language}))
    }
  },
  {
    path: 'firis/traits/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['firis'].map(language => ({language}))
    }
  },
  {
    path: 'firis/effects/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['firis'].map(language => ({language}))
    }
  },
  {
    path: 'firis/monsters/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['firis'].map(language => ({language}))
    }
  },
  {
    path: 'firis/catalysts/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['firis'].map(language => ({language}))
    }
  },
  {
    path: 'firis/recipe-ideas/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['firis'].map(language => ({language}))
    }
  },
  { path: 'firis/items/:subject/:language', renderMode: RenderMode.Server },
  { path: 'firis/traits/:subject/:language', renderMode: RenderMode.Server },
  { path: 'firis/effects/:subject/:language', renderMode: RenderMode.Server },
  { path: 'firis/monsters/:subject/:language', renderMode: RenderMode.Server },
  { path: 'firis/categories', renderMode: RenderMode.Client },
  { path: 'firis/categories/:subject/:language', renderMode: RenderMode.Server },
  { path: 'firis/shops/:language', renderMode: RenderMode.Server },
];