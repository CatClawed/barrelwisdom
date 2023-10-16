import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { RecipeList } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a25-recipe.component.html',
  providers: [DestroyService]
})
export class A25RecipeComponent extends SingleComponent implements OnInit {
  recipes: RecipeList[];

  // Main Story
  main = [
    [0,  20],
    [21, 52],
    [53, 88],
    [89, 106]
  ]

  ex = [
    [0,48],
    [49,60]
  ]

  pages = {
    'main': [1, 2, 3, 5],
    'ex': [4, 6]
  }

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a25service: A25Service,
    private readonly destroy$: DestroyService,
    public historyService: HistoryService,
  ) {
    super(route, seoService);
    this.gameService(this.a25service, 'recipe-ideas');
  }

  ngOnInit(): void {
    this.a25service.getRecipeList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: recipe => {
          this.error = ``;
          this.recipes = recipe;
          this.genericSEO(`Recipes`, `All recipes in ${this.gameTitle}.`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
  recipeLookup(x, y, kind) {
    return this.recipes.filter(item => item.x == x && item.y == y && this.pages[kind].includes(item.book))[0]
  }
  liveRow(x, kind) {
    return this.recipes.filter(item => item.x == x && this.pages[kind].includes(item.book))[0]
  }
  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: 'smooth'});
  }
} 