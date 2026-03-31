import { ServerRoute, RenderMode, PrerenderFallback } from '@angular/ssr';
import { LanguageData } from '@environments/language-data';

export const a16ServerRoutes: ServerRoute[] = [
  {
    path: 'shallie/items/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['shallie'].map(language => ({language}))
    }
  },
  {
    path: 'shallie/recipe-books/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['shallie'].map(language => ({language}))
    }
  },
  {
    path: 'shallie/properties/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['shallie'].map(language => ({language}))
    }
  },
  {
    path: 'shallie/effects/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['shallie'].map(language => ({language}))
    }
  },
  {
    path: 'shallie/monsters/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['shallie'].map(language => ({language}))
    }
  },
  { path: 'shallie/items/:subject/:language', renderMode: RenderMode.Server },
  { path: 'shallie/properties/:subject/:language', renderMode: RenderMode.Server },
  { path: 'shallie/effects/:subject/:language', renderMode: RenderMode.Server },
  { path: 'shallie/monsters/:subject/:language', renderMode: RenderMode.Server },
  { path: 'shallie/categories', renderMode: RenderMode.Client },
  { path: 'shallie/categories/:subject/:language', renderMode: RenderMode.Server },
  { path: 'shallie/locations/:subject/:language', renderMode: RenderMode.Server },
];