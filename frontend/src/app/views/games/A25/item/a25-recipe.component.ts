import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a25-recipe.component.html',
  styleUrls: ['../resleri.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DestroyService]
})
export class A25RecipeComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected a25service: A25Service,
    public historyService: HistoryService,) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.gameService(this.a25service, 'items/recipes');
    this.genericSEO(`Recipes`, `All recipes in ${this.gameTitle}.`);
    return this.a25service.getRecipeList(this.language)
  }

  afterAssignment(): void {
    if (this.language !== 'ja') {
      for (let i = 0; i < this.data.length; i++) {
        this.data[i].pages = this.data[i].pages.filter(x => { return x.gbl == true })
      }
    }
  }

  getEmptySpace(page, index) {
    if (index == 0) {
      return page.recipes[index].y - 1;
    } 
    if (page.recipes[index].x > page.recipes[index - 1].x) {
      return (5 - page.recipes[index - 1].y) + (page.recipes[index].y - 1)
    }
    return page.recipes[index].y - page.recipes[index - 1].y - 1
  }

  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView();
  }
} 