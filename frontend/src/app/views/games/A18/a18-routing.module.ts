import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: 'traits',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A18/trait/a18-traitlist.component').then(m=>m.A18TraitlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A18/trait/a18-traitlist.component').then(m=>m.A18TraitlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A18/trait/a18-trait.component').then(m=>m.A18TraitComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'effects',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A18/effect/a18-effectlist.component').then(m=>m.A18EffectlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A18/effect/a18-effectlist.component').then(m=>m.A18EffectlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A18/effect/a18-effect.component').then(m=>m.A18EffectComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'monsters',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A18/monster/a18-monsterlist.component').then(m=>m.A18MonsterlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A18/monster/a18-monsterlist.component').then(m=>m.A18MonsterlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A18/monster/a18-monster.component').then(m=>m.A18MonsterComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: ':subject', 
        loadComponent: ()=> import('@app/views/games/A18/category/a18-category.component').then(m=>m.A18CategoryComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A18/category/a18-category.component').then(m=>m.A18CategoryComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: '',
        loadComponent: () => import('@app/views/error/error.component').then(m=>m.ErrorComponent)
      }
    ]
  },
  {
    path: 'catalysts',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A18/catalyst/a18-catalystlist.component').then(m=>m.A18CatalystlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A18/catalyst/a18-catalystlist.component').then(m=>m.A18CatalystlistComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'recipe-ideas',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A18/recipe/a18-recipe.component').then(m=>m.A18RecipeComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A18/recipe/a18-recipe.component').then(m=>m.A18RecipeComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'items',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A18/item/a18-itemlist.component').then(m=>m.A18ItemlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A18/item/a18-itemlist.component').then(m=>m.A18ItemlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A18/item/a18-item.component').then(m=>m.A18ItemComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'shops',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A18/shop/a18-shop.component').then(m=>m.A18ShopComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A18/shop/a18-shop.component').then(m=>m.A18ShopComponent),
        canActivate: [LanguageGuard],
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