import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { CreateComponent } from './views/create/create.component';

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
        component: LoginComponent,
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
        loadChildren: ()=> import('./views/create/create.module').then(m=>m.CreateModule),
      },
      {
        path: '', 
        component: P500Component,
        outlet: 'aside'
      },
    ]
  },
  {
    path: 'blog',
    component: DefaultLayoutComponent,
    data: {
      title: 'Blog'
    },
    children: [
      {
        path: '', 
        loadChildren: ()=> import('./views/blog/blog.module').then(m=>m.BlogModule),
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
        loadChildren: ()=> import('./views/home/home.module').then(m=>m.HomeModule),
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
