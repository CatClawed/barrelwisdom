import { RenderMode, ServerRoute } from '@angular/ssr';
import { a23ServerRoutes } from '@app/views/games/A23/a23-server-routing';
import { a25ServerRoutes } from '@app/views/games/A25/a25-server-routing';
import { a25rwServerRoutes } from '@app/views/games/A25RW/a25rw-server-routing';
import { a26ServerRoutes } from '@app/views/games/A26/a26-server-routing';

export const serverRoutes: ServerRoute[] = [
  ...a23ServerRoutes,
  ...a25ServerRoutes,
  ...a25rwServerRoutes,
  ...a26ServerRoutes,
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
