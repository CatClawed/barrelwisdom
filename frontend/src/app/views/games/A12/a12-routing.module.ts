import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  /*{
    path: 'traits',
    children: [ 
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A12/trait/a12-trait.module').then(m=>m.A12TraitModule),
      },
    ]
  },
  {
    path: 'effects',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A12/effect/a12-effect.module').then(m=>m.A12EffectModule),
      },
    ]
  },
  {
    path: 'monsters',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A12/monster/a12-monster.module').then(m=>m.A12MonsterModule),
      },
    ]
  },
  {
    path: 'recipe-books',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A12/book/a12-book.module').then(m=>m.A12BookModule),
      },
    ]
  },
  {
    path: 'items',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A12/item/a12-item.module').then(m=>m.A12ItemModule),
      },
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A12/category/a12-category.module').then(m=>m.A12CategoryModule),
      },
    ]
  },
  {
    path: 'locations',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A12/location/a12-location.module').then(m=>m.A12LocationModule),
      },
    ]
  },*/
  {
    path: '',
    redirectTo: '/totori/faq',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class A12RoutingModule {}