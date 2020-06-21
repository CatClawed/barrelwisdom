import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { BlogComponent } from './views/blog/blog.component';


const routes: Routes = [
  {
    path: 'blog',
    component: DefaultLayoutComponent,
    data: {
      title: 'Blog'
    },
    children: [
      {
        path: '', 
        loadChildren: ()=> import('./views/blog/blog.module').then(m=>m.HomeModule),
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
