import { CanMatchFn, Route, Routes, UrlSegment } from '@angular/router';
import { AuthGuard } from '@app/_helpers/guards/auth.guard';

const canMatchNumber: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  return !isNaN(Number(segments[segments.length - 1].path));
}

export const routes: Routes = [
  {
    path: 'login',
    children: [
      {
        path: '',
        loadComponent: () => import('@app/views/main/user-facing/login/login.component').then(m => m.LoginComponent),
      },
    ]
  },
  {
    path: 'settings',
    children: [
      {
        path: '',
        loadComponent: () => import('@app/views/main/user-facing/settings/settings.component').then(m => m.SettingsComponent),
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: 'register',
    children: [
      {
        path: '',
        loadComponent: () => import('@app/views/main/user-facing/register/register.component').then(m => m.RegisterComponent),
      },
    ]
  },
  {
    path: 'create',
    children: [
      {
        path: '',
        loadComponent: () => import('@app/views/main/user-facing/create/create.component').then(m => m.CreateComponent),
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: 'moderate',
    children: [
      {
        path: 'comment',
        loadComponent: () => import('@app/views/main/user-facing/moderate/moderate.component').then(m => m.ModerateComponent),
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: 'user/:username',
    children: [
      {
        path: '',
        loadComponent: () => import('@app/views/main/user/user.component').then(m => m.UserComponent),
      },
    ]
  },
  {
    path: '.well_known',
    children: [
      {
        path: '',
        loadComponent: () => import('@app/views/_components/error/error.component').then(m => m.ErrorComponent)
      },
    ]
  },
  {
    path: '',
    children: [
      /*
      {
        path: 'bluefeflection',
        loadChildren: ()=> import('@app/views/games/BR1/br1-routing.module').then(m=>m.BR1RoutingModule),
      },
      {
        path: 'second-light',
        loadChildren: ()=> import('@app/views/games/BRSL/brsl-routing.module').then(m=>m.BRSLRoutingModule),
      },
      */
      {
        path: 'totori',
        loadChildren: ()=> import('@app/views/games/A12/a12-routing.module').then(m=>m.A12RoutingModule),
      },
      {
        path: 'escha',
        loadChildren: ()=> import('@app/views/games/A15/a15-routing.module').then(m=>m.A15RoutingModule),
      },
      {
        path: 'shallie',
        loadChildren: ()=> import('@app/views/games/A16/a16-routing.module').then(m=>m.A16RoutingModule),
      },
      {
        path: 'firis',
        loadChildren: ()=> import('@app/views/games/A18/a18-routing.module').then(m=>m.A18RoutingModule),
      },
      {
        path: 'lulua',
        redirectTo: '/lulua/easy-final-boss-guide',
        pathMatch: 'full'
      },
      {
        path: 'ryza',
        redirectTo: '/ryza/faq',
        pathMatch: 'full'
      },
      {
        path: 'ryza2',
        loadChildren: () => import('@app/views/games/A22/a22-routing.module').then(m => m.A22RoutingModule),
      },
      {
        path: 'ryza3',
        redirectTo: '/ryza3/how-to-get-infinite-gems',
        pathMatch: 'full'
      },
      {
        path: 'sophie2',
        loadChildren: () => import('@app/views/games/A23/a23-routing.module').then(m => m.A23RoutingModule),
      },
      {
        path: 'resleri',
        loadChildren: () => import('@app/views/games/A25/a25-routing.module').then(m => m.A25RoutingModule),
      },
      {
        path: 'resleriana-red-white',
        loadChildren: () => import('@app/views/games/A25RW/a25rw-routing.module').then(m => m.A25RWRoutingModule),
      },
      {
        path: 'yumia',
        loadChildren: () => import('@app/views/games/A26/a26-routing.module').then(m => m.A26RoutingModule),
      },
      {
        path: 'noa2',
        redirectTo: '/noa2/maps',
        pathMatch: 'full'
      },
      {
        path: 'info/atelier-series-guide',
        redirectTo: '/blog/atelier-series-guide',
        pathMatch: 'full'
      },
      {
        path: 'tag/:tagname',
        loadComponent: () => import('@app/views/main/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'tag/:tagname/:number',
        loadComponent: () => import('@app/views/main/home/home.component').then(m => m.HomeComponent),
        canMatch: [canMatchNumber]
      },
      {
        path: '',
        loadComponent: () => import('@app/views/main/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: ':number',
        loadComponent: () => import('@app/views/main/home/home.component').then(m => m.HomeComponent),
        canMatch: [canMatchNumber]
      }
    ]
  },
  {
    path: ':section/:title',
    children: [
      {
        path: '',
        loadComponent: () => import('@app/views/main/blog/blog.component').then(m => m.BlogComponent),
      },
    ]
  },
  {
    path: '**',
    children: [
      {
        path: '',
        loadComponent: () => import('@app/views/_components/error/error.component').then(m => m.ErrorComponent)
      },
    ]
  }
];
