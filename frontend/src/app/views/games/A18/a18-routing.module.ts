import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'traits',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A18/trait/a18-trait.module').then(m=>m.A18TraitModule),
      },
    ]
  },
  {
    path: 'effects',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A18/effect/a18-effect.module').then(m=>m.A18EffectModule),
      },
    ]
  },
  {
    path: 'monsters',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A18/monster/a18-monster.module').then(m=>m.A18MonsterModule),
      },
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A18/category/a18-category.module').then(m=>m.A18CategoryModule),
      },
    ]
  },
  {
    path: 'catalysts',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A18/catalyst/a18-catalyst.module').then(m=>m.A18CatalystModule),
      },
    ]
  },
  {
    path: 'recipe-ideas',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A18/recipe/a18-recipe.module').then(m=>m.A18RecipeModule),
      },
    ]
  },
  {
    path: 'items',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A18/item/a18-item.module').then(m=>m.A18ItemModule),
      },
    ]
  },
  {
    path: 'shops',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A18/shop/a18-shop.module').then(m=>m.A18ShopModule),
      },
    ]
  },
  {
    path: '',
    redirectTo: '/firis/ultimate-setups',
    pathMatch: 'full'
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class A18RoutingModule {}