import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: 'traits',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A23/trait/a23-traitlist.component').then(m=>m.A23TraitlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A23/trait/a23-traitlist.component').then(m=>m.A23TraitlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A23/trait/a23-trait.component').then(m=>m.A23TraitComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'effects',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A23/effect/a23-effectlist.component').then(m=>m.A23EffectlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A23/effect/a23-effectlist.component').then(m=>m.A23EffectlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A23/effect/a23-effect.component').then(m=>m.A23EffectComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'locations',
    children: [
      {
        path: ':subject', 
        loadComponent: ()=> import('@app/views/games/A23/location/a23-location.component').then(m=>m.A23LocationComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A23/location/a23-location.component').then(m=>m.A23LocationComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: '',
        loadComponent: () => import('@app/views/_components/error/error.component').then(m=>m.ErrorComponent)
      }
    ]
  },
  {
    path: 'monsters',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A23/monster/a23-monsterlist.component').then(m=>m.A23MonsterlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A23/monster/a23-monsterlist.component').then(m=>m.A23MonsterlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A23/monster/a23-monster.component').then(m=>m.A23MonsterComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'items',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A23/item/a23-itemlist.component').then(m=>m.A23ItemlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A23/item/a23-itemlist.component').then(m=>m.A23ItemlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A23/item/a23-item.component').then(m=>m.A23ItemComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: 'books/:subject', 
        loadComponent: ()=> import('@app/views/games/A23/item/a23-book.component').then(m=>m.A23BookComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: 'books/:subject/:language', 
        loadComponent: ()=> import('@app/views/games/A23/item/a23-book.component').then(m=>m.A23BookComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: ':subject', 
        loadComponent: ()=> import('@app/views/games/A23/category/a23-category.component').then(m=>m.A23CategoryComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A23/category/a23-category.component').then(m=>m.A23CategoryComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: '',
        loadComponent: () => import('@app/views/_components/error/error.component').then(m=>m.ErrorComponent)
      }
    ]
  },
  {
    path: 'recipe-ideas',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A23/recipe/a23-recipe.component').then(m=>m.A23RecipeComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A23/recipe/a23-recipe.component').then(m=>m.A23RecipeComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'major-gathering',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A23/majorgather/a23-majorgather.component').then(m=>m.A23MajorGatherComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A23/majorgather/a23-majorgather.component').then(m=>m.A23MajorGatherComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'seeds',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A23/seed/a23-seed.component').then(m=>m.A23SeedComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A23/seed/a23-seed.component').then(m=>m.A23SeedComponent),
        canActivate: [LanguageGuard],
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