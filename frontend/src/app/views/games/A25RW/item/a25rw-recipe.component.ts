import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { A25RWService } from '@app/views/games/A25RW/_services/a25rw.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';
import { A25RWTreeComponent } from './a25rw-tree.component';

@Component({
    templateUrl: 'a25rw-recipe.component.html',
    providers: [DestroyService],
    imports: [...CommonImports, A25RWTreeComponent]
})
export class A25RWRecipeComponent extends FragmentedComponent {

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected a25rwservice: A25RWService,
    protected readonly destroy$: DestroyService,
    private location: Location,
    public historyService: HistoryService,
    protected viewportScroller: ViewportScroller
  ) {
    super(destroy$, route, seoService, breadcrumbService, viewportScroller, location);
  }

  changeData() {
    this.gameService(this.a25rwservice, 'recipe-ideas');
    this.genericSettings(this.a25rwservice.recipe_tree[this.language], `All recipe trees in ${this.gameTitle}.`);
    return this.a25rwservice.getTreeList(this.language);
  }
}