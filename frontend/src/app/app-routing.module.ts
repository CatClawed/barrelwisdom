import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';


const routes: Routes = [
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    },
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Homo'
    },
    children: [
      {
        path: '**', 
        loadChildren: ()=> import('./views/error/404.module').then(m=>m.P404Module)
      }
    ]
  },
  //{ path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
