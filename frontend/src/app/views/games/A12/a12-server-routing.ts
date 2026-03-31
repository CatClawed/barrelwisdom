import { ServerRoute, RenderMode, PrerenderFallback } from '@angular/ssr';
import { LanguageData } from '@environments/language-data';

export const a12ServerRoutes: ServerRoute[] = [
  {
    path: 'totori/items/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['totori'].map(language => ({language}))
    }
  },
  {
    path: 'totori/recipe-books/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['totori'].map(language => ({language}))
    }
  },
  {
    path: 'totori/traits/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['totori'].map(language => ({language}))
    }
  },
  {
    path: 'totori/effects/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['totori'].map(language => ({language}))
    }
  },
  {
    path: 'totori/monsters/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['totori'].map(language => ({language}))
    }
  },
  { path: 'totori/items/:subject/:language', renderMode: RenderMode.Server },
  { path: 'totori/traits/:subject/:language', renderMode: RenderMode.Server },
  { path: 'totori/effects/:subject/:language', renderMode: RenderMode.Server },
  { path: 'totori/monsters/:subject/:language', renderMode: RenderMode.Server },
  { path: 'totori/categories', renderMode: RenderMode.Client },
  { path: 'totori/categories/:subject/:language', renderMode: RenderMode.Server },
  { path: 'totori/locations/:subject/:language', renderMode: RenderMode.Server },
];