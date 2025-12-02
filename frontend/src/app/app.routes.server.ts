import { RenderMode, ServerRoute } from '@angular/ssr';
import { a25rwServerRoutes } from './views/games/A25RW/a25rw-server-routing';

export const serverRoutes: ServerRoute[] = [
  ...a25rwServerRoutes,
  {
    path: 'login',
    renderMode: RenderMode.Client
  },
  {
    path: 'settings',
    renderMode: RenderMode.Client
  },
  {
    path: 'register',
    renderMode: RenderMode.Client
  },
  {
    path: 'create',
    renderMode: RenderMode.Client
  },
  {
    path: 'moderate/*',
    renderMode: RenderMode.Client
  },
  {
    path: 'user/:username',
    renderMode: RenderMode.Server
  },
  {
    path: 'tag/*',
    renderMode: RenderMode.Server
  },
  {
    path: ':section/:title',
    renderMode: RenderMode.Server
  },
  {
    path: '.well_known',
    renderMode: RenderMode.Client
  },
  {
    path: '',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
