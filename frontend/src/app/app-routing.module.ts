import { NgModule } from '@angular/core';
import { CanMatchFn, ExtraOptions, Route, RouterModule, Routes, UrlSegment } from '@angular/router';
import { LayoutComponent } from '@app/containers';

const canMatchNumber: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  return !isNaN(Number(segments[segments.length - 1].path));
}

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  onSameUrlNavigation: 'ignore'
};

const routes: Routes = [
  {
    path: 'login',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: ()=> import('@app/views/main/login/login.component').then(m=>m.LoginComponent),
      },
    ]
  },
  {
    path: 'settings',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: ()=> import('@app/views/main/settings/settings.component').then(m=>m.SettingsComponent),
      },
    ]
  },
  {
    path: 'register',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: ()=> import('@app/views/main/register/register.component').then(m=>m.RegisterComponent),
      },
    ]
  },
  {
    path: 'create',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: ()=> import('@app/views/main/create/create.component').then(m=>m.CreateComponent),
      },
    ]
  },
  {
    path: 'moderate',
    component: LayoutComponent,
    children: [
      {
        path: 'comment',
        loadComponent: ()=> import('@app/views/main/moderate/moderate.component').then(m=>m.ModerateComponent),
      },
    ]
  },
  {
    path: 'user/:username',
    component: LayoutComponent,
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/main/user/user.component').then(m=>m.UserComponent),
      },
    ]
  },
  {
    path: 'totori',
    component: LayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A12/a12-routing.module').then(m=>m.A12RoutingModule),
      },
    ]
  },
  {
    path: 'escha',
    component: LayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A15/a15-routing.module').then(m=>m.A15RoutingModule),
      },
    ]
  },
  {
    path: 'shallie',
    component: LayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A16/a16-routing.module').then(m=>m.A16RoutingModule),
      },
    ]
  },
  {
    path: 'firis',  
    component: LayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A18/a18-routing.module').then(m=>m.A18RoutingModule),
      },
    ]
  },
  {
    path: 'ryza2',
    component: LayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A22/a22-routing.module').then(m=>m.A22RoutingModule),
      },
      
    ]
  },
  {
    path: 'sophie2',
    component: LayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A23/a23-routing.module').then(m=>m.A23RoutingModule),
      },
      
    ]
  },
  {
    path: 'resleri',
    component: LayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A25/a25-routing.module').then(m=>m.A25RoutingModule),
      },
      
    ]
  },
  {
    path: 'bluereflection',
    component: LayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/BR1/br1-routing.module').then(m=>m.BR1RoutingModule),
      },
    ]
  },
  {
    path: 'second-light',
    component: LayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/BRSL/brsl-routing.module').then(m=>m.BRSLRoutingModule),
      },
    ]
  },
  {
    path: 'ryza3',
    redirectTo: '/ryza3/how-to-get-infinite-gems',
    pathMatch: 'full'
  },
  {
    path: 'ryza',
    redirectTo: '/ryza/faq',
    pathMatch: 'full'
  },
  {
    path: 'lulua',
    redirectTo: '/lulua/easy-final-boss-guide',
    pathMatch: 'full'
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
    path: ':section/:title',
    component: LayoutComponent,
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/main/blog/blog.component').then(m=>m.BlogComponent),
      },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/main/home/home.component').then(m=>m.HomeComponent),
      },
      {
        path: 'tag/:tagname', 
        loadComponent: ()=> import('@app/views/main/home/home.component').then(m=>m.HomeComponent),
      },
      {
        path: 'tag/:tagname/:number',
        loadComponent: ()=> import('@app/views/main/home/home.component').then(m=>m.HomeComponent),
        canMatch: [canMatchNumber]
      },
      {
        path: ':number',
        loadComponent: ()=> import('@app/views/main/home/home.component').then(m=>m.HomeComponent),
        canMatch: [canMatchNumber]
      },
    ]
  },
  {
    path: '**',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('@app/views/_components/error/error.component').then(m=>m.ErrorComponent)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
