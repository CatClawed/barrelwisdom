import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LayoutComponent } from '@app/containers';

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
        loadChildren: ()=> import('@app/views/login/login.module').then(m=>m.LoginModule),
      },
    ]
  },
  {
    path: 'settings',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: ()=> import('@app/views/settings/settings.module').then(m=>m.SettingsModule),
      },
    ]
  },
  {
    path: 'register',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: ()=> import('@app/views/register/register.module').then(m=>m.RegisterModule),
      },
    ]
  },
  {
    path: 'create',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: ()=> import('@app/views/create/create.module').then(m=>m.CreateModule),
      },
    ]
  },
  {
    path: 'moderate',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: ()=> import('@app/views/moderate/moderate.module').then(m=>m.ModerateModule),
      },
    ]
  },
  {
    path: 'user/:username',
    component: LayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/user/user.module').then(m=>m.UserModule),
      },
    ]
  },
  {
    path: 'tag/:tagname',
    component: LayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/home/home.module').then(m=>m.HomeModule),
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
        loadChildren: ()=> import('@app/views/blog/blog.module').then(m=>m.BlogModule),
      },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/home/home.module').then(m=>m.HomeModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
