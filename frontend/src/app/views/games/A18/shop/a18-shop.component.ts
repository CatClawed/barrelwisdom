import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
  templateUrl: 'a18-shop.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})

export class A18ShopComponent extends FragmentedComponent {
  constructor(
    protected readonly destroy$: DestroyService,
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private a18service: A18Service,
    protected viewportScroller: ViewportScroller,
    protected loc: Location) {
    super(destroy$, route, seoService, breadcrumbService, viewportScroller, loc);
  }

  changeData() {
    this.gameService(this.a18service, 'shops');
    this.genericSettings(`Shops`, `The list of shops in ${this.gameTitle}.`);
    return this.a18service.getShopList(this.language);
  }
}