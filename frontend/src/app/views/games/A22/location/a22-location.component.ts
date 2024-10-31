import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
  templateUrl: 'a22-location.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})

export class A22LocationComponent extends FragmentedComponent {
  dig = true;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected loc: Location,
    private a22service: A22Service,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected viewportScroller: ViewportScroller) {
    super(destroy$, route, seoService, breadcrumbService, viewportScroller, loc);
  }

  changeData() {
    this.gameService(this.a22service, 'locations');
    return this.a22service.getLocation(this.slug, this.language);
  }

  afterAssignment(): void {
    this.genericSettings(this.data.name, `All items in ${this.data.name}`, '', true);
    for (let g of this.data.areas[0].gatherdata) {
      if (g.tool == 'Dig') {
        this.dig = true;
        break;
      }
      this.dig = false;
    }
  }
}