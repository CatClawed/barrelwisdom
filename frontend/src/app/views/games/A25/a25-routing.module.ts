import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'traits',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A25/trait/a25-trait.module').then(m=>m.A25TraitModule),
      },
    ]
  },
  {
    path: '',
    redirectTo: '/resleri/faq',
    pathMatch: 'full'
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class A25RoutingModule {}