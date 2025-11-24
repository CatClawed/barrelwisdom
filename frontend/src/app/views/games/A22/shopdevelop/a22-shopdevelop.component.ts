import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a22-shopdevelop.component.html',
    providers: [DestroyService],
    imports: [...CommonImports]
})
export class A22ShopDevelopComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected a22service: A22Service) {
    super(destroy$, route, breadcrumbService, seoService);
  }

  changeData() {
    this.gameService(this.a22service, 'shopdevelop');
    this.genericSettings(this.a22service.develop_translation[this.language], `The full shop develop list.`);
    return this.a22service.getShopDevList(this.language);
  }
}