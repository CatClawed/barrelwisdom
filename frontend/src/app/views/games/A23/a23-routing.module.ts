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
    path: 'monsters',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A23/monster/a23-monster.module').then(m=>m.A23MonsterModule),
      },
    ]
  },
  {
    path: 'items',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A23/item/a23-item.module').then(m=>m.A23ItemModule),
      },
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A23/category/a23-category.module').then(m=>m.A23CategoryModule),
      },
    ]
  },
  {
    path: 'recipe-ideas',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A23/recipe/a23-recipe.module').then(m=>m.A23RecipeModule),
      },
    ]
  },
  {
    path: 'major-gathering',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A23/majorgather/a23-majorgather.module').then(m=>m.A23MajorGatherModule),
      },
    ]
  },
  {
    path: 'seeds',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A23/seed/a23-seed.module').then(m=>m.A23SeedModule),
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