import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: 'traits',
    children: [
      {
        path: ':subject/:language',
        loadComponent: ()=> import('@app/views/games/A25/trait/a25-trait.component').then(m=>m.A25TraitComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A25/trait/a25-traitlist.component').then(m=>m.A25TraitlistComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A25/trait/a25-traitlist.component').then(m=>m.A25TraitlistComponent),
        canActivate: [LanguageGuard]
      },
    ]
  },
  {
    path: 'items',
    children: [
      {
        path: '',
        loadComponent: () => import('@app/views/_components/error/error.component').then(m=>m.ErrorComponent)
      },
      {
        path: 'materials',
        loadComponent: ()=> import('@app/views/games/A25/item/a25-materiallist.component').then(m=>m.A25MaterialListComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: 'materials/:language',
        loadComponent: ()=> import('@app/views/games/A25/item/a25-materiallist.component').then(m=>m.A25MaterialListComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: 'synthesis',
        loadComponent: ()=> import('@app/views/games/A25/item/a25-synthlist.component').then(m=>m.A25SynthesisListComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: 'synthesis/:language',
        loadComponent: ()=> import('@app/views/games/A25/item/a25-synthlist.component').then(m=>m.A25SynthesisListComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: 'recipes',
        loadComponent: ()=> import('@app/views/games/A25/item/a25-recipe.component').then(m=>m.A25RecipeComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: 'recipes/:language',
        loadComponent: ()=> import('@app/views/games/A25/item/a25-recipe.component').then(m=>m.A25RecipeComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':itemkind/:subject',
        loadComponent: ()=> import('@app/views/games/A25/item/a25-item.component').then(m=>m.A25ItemComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':itemkind/:subject/:language',
        loadComponent: ()=> import('@app/views/games/A25/item/a25-item.component').then(m=>m.A25ItemComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'characters',
    children: [
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A25/character/a25-charalist.component').then(m=>m.A25CharalistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A25/character/a25-charalist.component').then(m=>m.A25CharalistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language',
        loadComponent: ()=> import('@app/views/games/A25/character/a25-chara.component').then(m=>m.A25CharaComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'memoria',
    children: [
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A25/memoria/a25-memorialist.component').then(m=>m.A25MemorialistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A25/memoria/a25-memorialist.component').then(m=>m.A25MemorialistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language',
        loadComponent: ()=> import('@app/views/games/A25/memoria/a25-memoria.component').then(m=>m.A25MemoriaComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'research',
    children: [
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A25/research/a25-research.component').then(m=>m.A25ResearchComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A25/research/a25-research.component').then(m=>m.A25ResearchComponent),
        canActivate: [LanguageGuard],
      }
    ]
  },
  {
    path: 'quests',
    children: [
      {
        path: 'dungeons',
        loadComponent: ()=> import('@app/views/games/A25/quest/a25-dungeon.component').then(m=>m.A25DungeonComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: 'dungeons/:language',
        loadComponent: ()=> import('@app/views/games/A25/quest/a25-dungeon.component').then(m=>m.A25DungeonComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: 'scorebattles',
        loadComponent: ()=> import('@app/views/games/A25/quest/a25-scorebattle.component').then(m=>m.A25ScoreBattleComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: 'scorebattles/:language',
        loadComponent: ()=> import('@app/views/games/A25/quest/a25-scorebattle.component').then(m=>m.A25ScoreBattleComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: 'tower',
        loadComponent: ()=> import('@app/views/games/A25/quest/a25-tower.component').then(m=>m.A25TowerComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: 'tower/:language',
        loadComponent: ()=> import('@app/views/games/A25/quest/a25-tower.component').then(m=>m.A25TowerComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: 'tower/:subject/:language',
        loadComponent: ()=> import('@app/views/games/A25/quest/a25-tower.component').then(m=>m.A25TowerComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: '',
        loadComponent: () => import('@app/views/_components/error/error.component').then(m=>m.ErrorComponent)
      }
    ]
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A25/update/a25-update.component').then(m=>m.A25UpdateComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A25/update/a25-update.component').then(m=>m.A25UpdateComponent),
        canActivate: [LanguageGuard]
      },
    ]
  },
  {
    path: 'collect',
    children: [
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A25/collection/a25-collection.component').then(m=>m.A25CollectionComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A25/collection/a25-collection.component').then(m=>m.A25CollectionComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: ':code/:language',
        loadComponent: ()=> import('@app/views/games/A25/collection/a25-collection.component').then(m=>m.A25CollectionComponent),
        canActivate: [LanguageGuard]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/resleri/home',
    pathMatch: 'full'
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class A25RoutingModule {}
