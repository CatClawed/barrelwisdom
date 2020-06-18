import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
//import { BlogComponent } from './views/blog/blog.component';


const routes: Routes = [
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
  {
    path: 'ryza',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '', 
        loadChildren: ()=> import('./views/error/error.module').then(m=>m.ErrorModule),
      },
      {
        path: '', 
        component: P500Component,
        outlet: 'aside'
      },
    ]
  },
  {
    path: 'ryzer/item',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '', 
        loadChildren: ()=> import('./views/error/error.module').then(m=>m.ErrorModule),
        //component: P404Component,
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
