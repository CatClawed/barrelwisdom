import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: 'traits',
    children: [
      {
        path: ':subject/:language',
        loadComponent: ()=> import('@app/views/games/A25RW/trait/a25rw-trait.component').then(m=>m.A25RWTraitComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A25RW/trait/a25rw-traitlist.component').then(m=>m.A25RWTraitlistComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A25RW/trait/a25rw-traitlist.component').then(m=>m.A25RWTraitlistComponent),
        canActivate: [LanguageGuard]
      },
    ]
  },
  {
    path: 'effects',
    children: [
      {
        path: ':subject/:language',
        loadComponent: ()=> import('@app/views/games/A25RW/effect/a25rw-effect.component').then(m=>m.A25RWEffectComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A25RW/effect/a25rw-effectlist.component').then(m=>m.A25RWEffectlistComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A25RW/effect/a25rw-effectlist.component').then(m=>m.A25RWEffectlistComponent),
        canActivate: [LanguageGuard]
      },
    ]
  },
  {
    path: 'monsters',
    children: [
      {
        path: ':subject/:language',
        loadComponent: ()=> import('@app/views/games/A25RW/monster/a25rw-monster.component').then(m=>m.A25RWMonsterComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A25RW/monster/a25rw-monsterlist.component').then(m=>m.A25RWMonsterlistComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A25RW/monster/a25rw-monsterlist.component').then(m=>m.A25RWMonsterlistComponent),
        canActivate: [LanguageGuard]
      }
    ]
  },
  {
    path: 'items',
    children: [
      {
        path: ':subject/:language',
        loadComponent: ()=> import('@app/views/games/A25RW/item/a25rw-item.component').then(m=>m.A25RWItemComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A25RW/item/a25rw-itemlist.component').then(m=>m.A25RWItemlistComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A25RW/item/a25rw-itemlist.component').then(m=>m.A25RWItemlistComponent),
        canActivate: [LanguageGuard]
      }
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: ':subject',
        loadComponent: ()=> import('@app/views/games/A25RW/category/a25rw-category.component').then(m=>m.A25RWCategoryComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: ':subject/:language',
        loadComponent: ()=> import('@app/views/games/A25RW/category/a25rw-category.component').then(m=>m.A25RWCategoryComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: '',
        loadComponent: () => import('@app/views/_components/error/error.component').then(m=>m.ErrorComponent)
      }
    ]
  },
  {
    path: 'recipe-trees',
    children: [
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A25RW/item/a25rw-recipe.component').then(m=>m.A25RWRecipeComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A25RW/item/a25rw-recipe.component').then(m=>m.A25RWRecipeComponent),
        canActivate: [LanguageGuard]
      },
    ]
  },
  {
    path: 'shops',
    children: [
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A25RW/shop/a25rw-shop.component').then(m=>m.A25RWShopComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A25RW/shop/a25rw-shop.component').then(m=>m.A25RWShopComponent),
        canActivate: [LanguageGuard]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/resleriana-red-white/items',
    pathMatch: 'full'
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class A25RWRoutingModule {}
