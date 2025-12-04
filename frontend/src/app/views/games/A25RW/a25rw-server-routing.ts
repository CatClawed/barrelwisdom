import { ServerRoute, RenderMode, PrerenderFallback } from '@angular/ssr';
import { LanguageData } from '@environments/language-data';

export const a25rwServerRoutes: ServerRoute[] = [
  {
    path: 'resleriana-red-white/items/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['resleriana-red-white'].map(language => ({language}))
    }
  },
  {
    path: 'resleriana-red-white/traits/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['resleriana-red-white'].map(language => ({language}))
    }
  },
  {
    path: 'resleriana-red-white/effects/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['resleriana-red-white'].map(language => ({language}))
    }
  },
  {
    path: 'resleriana-red-white/monsters/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['resleriana-red-white'].map(language => ({language}))
    }
  },
  {
    path: 'resleriana-red-white/recipe-trees/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['resleriana-red-white'].map(language => ({language}))
    }
  },
  { path: 'resleriana-red-white/items/:subject/:language', renderMode: RenderMode.Server },
  { path: 'resleriana-red-white/traits/:subject/:language', renderMode: RenderMode.Server },
  { path: 'resleriana-red-white/effects/:subject/:language', renderMode: RenderMode.Server },
  { path: 'resleriana-red-white/monsters/:subject/:language', renderMode: RenderMode.Server },
  { path: 'resleriana-red-white/categories', renderMode: RenderMode.Client },
  { path: 'resleriana-red-white/categories/:subject/:language', renderMode: RenderMode.Server },
  { path: 'resleriana-red-white/shops/:language', renderMode: RenderMode.Server },
];