import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
  templateUrl: 'a12-location.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class A12LocationComponent extends FragmentedComponent {
  constructor(
    protected route: ActivatedRoute,
    protected loc: Location,
    protected readonly destroy$: DestroyService,
    private a12service: A12Service,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected viewportScroller: ViewportScroller) {
    super(destroy$, route, seoService, breadcrumbService, viewportScroller, loc);
  }

  changeData() {
    this.gameService(this.a12service, 'locations');
    return this.a12service.getRegion(this.slug, this.language)
  }

  afterAssignment(): void {
    this.genericSettings(this.data.name, `All items in ${this.data.name}`,
      '',
      true
    );
  }
} 