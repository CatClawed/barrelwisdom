import { ServerRoute, RenderMode, PrerenderFallback } from '@angular/ssr';
import { LanguageData } from '@environments/language-data';

export const a25ServerRoutes: ServerRoute[] = [
  {
    path: 'resleri/characters/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['resleri'].map(language => ({language}))
    }
  },
  {
    path: 'resleri/traits/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['resleri'].map(language => ({language}))
    }
  },
  {
    path: 'resleri/items/materials/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['resleri'].map(language => ({language}))
    }
  },
  {
    path: 'resleri/items/synthesis/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['resleri'].map(language => ({language}))
    }
  },
  {
    path: 'resleri/items/recipes/:language',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
        return LanguageData.languages['resleri'].map(language => ({language}))
    }
  },
  { path: 'resleri/items/:itemkind/:subject/:language', renderMode: RenderMode.Server },
  { path: 'resleri/traits/:subject/:language', renderMode: RenderMode.Server },
  { path: 'resleri/characters/:subject/:language', renderMode: RenderMode.Server },
  { path: 'resleri/research/:language', renderMode: RenderMode.Server },
  { path: 'resleri/home/:language', renderMode: RenderMode.Server },
  { path: 'resleri/memoria/:language', renderMode: RenderMode.Server },
  { path: 'resleri/memoria/:subject/:language', renderMode: RenderMode.Server },
  { path: 'resleri/collect/*', renderMode: RenderMode.Client },
  { path: 'resleri/quests/dungeons/:language', renderMode: RenderMode.Server },
  { path: 'resleri/quests/scorebattles/:language', renderMode: RenderMode.Server },
  { path: 'resleri/quests/tower/:subject/:language', renderMode: RenderMode.Server },
];