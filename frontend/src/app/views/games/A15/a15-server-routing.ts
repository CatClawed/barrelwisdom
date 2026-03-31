import { ServerRoute, RenderMode, PrerenderFallback } from '@angular/ssr';
import { LanguageData } from '@environments/language-data';

export const a15ServerRoutes: ServerRoute[] = [
  {
    path: 'escha/items/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['escha'].map(language => ({language}))
    }
  },
  {
    path: 'escha/recipe-books/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['escha'].map(language => ({language}))
    }
  },
  {
    path: 'escha/properties/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['escha'].map(language => ({language}))
    }
  },
  {
    path: 'escha/effects/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['escha'].map(language => ({language}))
    }
  },
  {
    path: 'escha/monsters/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['escha'].map(language => ({language}))
    }
  },
  { path: 'escha/items/:subject/:language', renderMode: RenderMode.Server },
  { path: 'escha/properties/:subject/:language', renderMode: RenderMode.Server },
  { path: 'escha/effects/:subject/:language', renderMode: RenderMode.Server },
  { path: 'escha/monsters/:subject/:language', renderMode: RenderMode.Server },
  { path: 'escha/categories', renderMode: RenderMode.Client },
  { path: 'escha/categories/:subject/:language', renderMode: RenderMode.Server },
  { path: 'escha/locations/:subject/:language', renderMode: RenderMode.Server },
];