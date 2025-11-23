import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A25RWService } from '@app/views/games/A25RW/_services/a25rw.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
    templateUrl: 'a25rw-shop.component.html',
    providers: [DestroyService],
    imports: [...CommonImports]
})

export class A25RWShopComponent extends FragmentedComponent {
  constructor(
    protected readonly destroy$: DestroyService,
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected a25rwservice: A25RWService,
    protected viewportScroller: ViewportScroller,
    protected loc: Location) {
    super(destroy$, route, seoService, breadcrumbService, viewportScroller, loc);
  }

  changeData() {
    this.gameService(this.a25rwservice, 'shops');
    this.genericSettings(this.a25rwservice.shop_translation[this.language], `The list of shops in ${this.gameTitle}.`);
    return this.a25rwservice.getShopList(this.language);
  }
}