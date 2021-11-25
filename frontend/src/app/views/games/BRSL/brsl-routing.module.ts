import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'fragments-and-dates',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/BRSL/fragment/brsl-fragment.module').then(m=>m.BRSLFragmentModule),
      },
    ]
  },
  {
    path: '',
    redirectTo: '/second-light/faq',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BRSLRoutingModule {}