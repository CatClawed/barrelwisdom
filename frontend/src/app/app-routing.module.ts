import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { DefaultLayoutComponent } from '@app/containers';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  onSameUrlNavigation: 'ignore'
};

const routes: Routes = [
  {
    path: 'login',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: ()=> import('@app/views/login/login.module').then(m=>m.LoginModule),
      },
    ]
  },
  {
    path: 'settings',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: ()=> import('@app/views/settings/settings.module').then(m=>m.SettingsModule),
      },
    ]
  },
  {
    path: 'register',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: ()=> import('@app/views/register/register.module').then(m=>m.RegisterModule),
      },
    ]
  },
  {
    path: 'create',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: ()=> import('@app/views/create/create.module').then(m=>m.CreateModule),
      },
    ]
  },
  {
    path: 'user/:username',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/user/user.module').then(m=>m.UserModule),
      },
    ]
  },
  {
    path: 'tag/:tagname',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/home/home.module').then(m=>m.HomeModule),
      },
    ]
  },
  {
    path: 'escha',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A15/a15-routing.module').then(m=>m.A15RoutingModule),
      },
    ]
  },
  {
    path: 'shallie',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A16/a16-routing.module').then(m=>m.A16RoutingModule),
      },
    ]
  },
  {
    path: 'ryza2',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A22/a22-routing.module').then(m=>m.A22RoutingModule),
      },
      
    ]
  },
  {
    path: 'totori',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A12/a12-routing.module').then(m=>m.A12RoutingModule),
      },
    ]
  },
  {
    path: 'bluereflection',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/BR1/br1-routing.module').then(m=>m.BR1RoutingModule),
      },
    ]
  },
  {
    path: 'ryza',
    redirectTo: '/ryza/faq',
    pathMatch: 'full'
  },
  {
    path: 'firis',
    redirectTo: '/firis/ultimate-setups',
    pathMatch: 'full'
  },
  {
    path: 'noa2',
    redirectTo: '/noa2/maps',
    pathMatch: 'full'
  },
  {
    path: ':section/:title',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/blog/blog.module').then(m=>m.BlogModule),
      },
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
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
