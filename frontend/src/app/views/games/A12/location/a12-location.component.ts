import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { AreaData } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a12-location.component.html',
  providers: [DestroyService]
})
export class A12LocationComponent extends FragmentedComponent {
  constructor(
    protected route: ActivatedRoute,
    protected loc: Location,
    protected readonly destroy$: DestroyService,
    private a12service: A12Service,
    protected seoService: SeoService,
    protected viewportScroller: ViewportScroller) {
    super(destroy$, route, seoService, viewportScroller, loc);
  }

  changeData() {
    this.gameService(this.a12service, 'locations');
    return this.a12service.getRegion(this.slug, this.language)
  }

  afterAssignment(): void {
    this.genericSEO(this.data.name, `All items in ${this.data.name}`);
  }
} 