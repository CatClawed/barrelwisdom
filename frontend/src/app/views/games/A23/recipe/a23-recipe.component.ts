import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { RecipeIdea } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a23-recipe.component.html',
  providers: [DestroyService]
})
export class A23RecipeComponent extends SingleComponent {
  recipes: RecipeIdea[];
  tab: string = "";
  sophie_num: number = 28;
  plachta_num: number = 53;
  shared_num: number = 75;
  book_num: number = 80;
  sophie = false;
  plachta = false;
  shared = false;
  book = false;
  ctx: RecipeIdea;
  fixit = []

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a23service: A23Service,
    protected readonly destroy$: DestroyService,
    private location: Location,
    public historyService: HistoryService,
  ) {
    super(destroy$, route, seoService);
    this.tab = this.route.snapshot.queryParamMap.get('tab');
    if (this.tab) {
      switch (this.tab) {
        case 'sophie':
          this.sophie = true;
          break;
        case 'plachta':
          this.plachta = true;
          break;
        case 'reference':
          this.book = true;
          break;
        case 'shared':
          this.shared = true;
          break;
        default:
          this.sophie = true;
      }
    }
    else {
      this.sophie = true;
    }
  }

  changeData(): void {
    this.a23service.getRecipeList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: recipe => {
          this.error = ``;
          this.recipes = recipe;
          this.sophie = true;
          this.plachta = false;
          this.book = false;
          this.shared = false;
          this.fixit = [];
          let col = 1
          for (let i = 0; i < this.recipes.length;) {
            for (col = 1; col <= 5; col++) {
              if (this.recipes.length <= i) {
                this.fixit.push(false)
              }
              else if (col != this.recipes[i].col) {
                this.fixit.push(false)
              }
              else {
                this.fixit.push(this.recipes[i])
                i++;
              }
            }
          }
          this.gameService(this.a23service, 'recipe-ideas');
          this.genericSEO(`Recipe Ideas`, `All recipe ideas in ${this.gameTitle}.`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  toggle(s: boolean, p: boolean, sh: boolean, b: boolean, char: string) {
    this.sophie = s;
    this.plachta = p;
    this.shared = sh;
    this.book = b;
    this.location.replaceState(`${this.gameURL}/${this.section}/${this.language}?tab=${char}`);
  }

  context(r: RecipeIdea) {
    this.ctx = r;
  }
} 