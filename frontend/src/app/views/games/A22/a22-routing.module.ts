import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'traits',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A22/trait/a22-trait.module').then(m=>m.A22TraitModule),
      },
    ]
  },
  {
    path: 'monsters',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A22/monster/a22-monster.module').then(m=>m.A22MonsterModule),
      },
    ]
  },
  {
    path: 'effects',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A22/effect/a22-effect.module').then(m=>m.A22EffectModule),
      },
    ]
  },
  {
    path: 'locations',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A22/location/a22-location.module').then(m=>m.A22LocationModule),
      },
    ]
  },
  {
    path: 'items',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A22/item/a22-item.module').then(m=>m.A22ItemModule),
      },
    ]
  },
  {
    path: 'shopdevelop',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A22/shopdevelop/a22-shopdevelop.module').then(m=>m.A22ShopDevelopModule),
      },
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A22/category/a22-category.module').then(m=>m.A22CategoryModule),
      },
    ]
  },
  {
    path: '',
    redirectTo: '/ryza2/faq',
    pathMatch: 'full'
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class A22RoutingModule {}