import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'traits',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A23/trait/a23-trait.module').then(m=>m.A23TraitModule),
      },
    ]
  },
  {
    path: 'effects',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A23/effect/a23-effect.module').then(m=>m.A23EffectModule),
      },
    ]
  },
  {
    path: 'locations',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A23/location/a23-location.module').then(m=>m.A23LocationModule),
      },
    ]
  },
  {
    path: '',
    redirectTo: '/sophie2/faq',
    pathMatch: 'full'
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class A23RoutingModule {}