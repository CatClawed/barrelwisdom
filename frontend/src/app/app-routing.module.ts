import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from '@app/containers';
import { P500Component } from '@app/views/error/500.component';

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
      {
        path: '', 
        component: P500Component,
        outlet: 'aside'
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
      {
        path: '', 
        component: P500Component,
        outlet: 'aside'
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
      {
        path: '', 
        component: P500Component,
        outlet: 'aside'
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
      {
        path: '', 
        component: P500Component,
        outlet: 'aside'
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
      {
        path: '', 
        component: P500Component,
        outlet: 'aside'
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
      {
        path: '', 
        component: P500Component,
        outlet: 'aside'
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
      {
        path: '', 
        component: P500Component,
        outlet: 'aside'
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
      {
        path: '', 
        component: P500Component,
        outlet: 'aside'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
