import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { RecipeTab } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a25-recipe.component.html',
  providers: [DestroyService]
})
export class A25RecipeComponent extends SingleComponent implements OnInit {
  recipes: RecipeTab[];

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

  getEmptySpace(page, index) {
    if (index == 0) {
      return page.recipes[index].y-1;
    }
    if (page.recipes[index].x > page.recipes[index-1].x) {
      return (5-page.recipes[index-1].y) + (page.recipes[index].y-1)
    }
    return page.recipes[index].y - page.recipes[index-1].y -1
  }

  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: 'smooth'});
  }
} 