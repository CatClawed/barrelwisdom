import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from '@app/containers';

const routes: Routes = [
  {
    path: 'login',
    component: DefaultLayoutComponent,
    data: {
      title: 'Login'
    },
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
    data: {
      title: 'Settings'
    },
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
    data: {
      title: 'Register'
    },
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
    data: {
      title: 'Create Page'
    },
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
    data: {
      title: 'Main'
    },
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
    data: {
      title: 'Main'
    },
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/home/home.module').then(m=>m.HomeModule),
      },
    ]
  },
  {
    path: 'ryza2/traits',
    component: DefaultLayoutComponent,
    data: {
      title: 'Traits'
    },
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A22/trait/a22-trait.module').then(m=>m.A22TraitModule),
      },
    ]
  },
  {
    path: ':section/:title',
    component: DefaultLayoutComponent,
    data: {
      title: 'Blog'
    },
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
    data: {
      title: 'Main'
    },
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/home/home.module').then(m=>m.HomeModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
