import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';

@Component({
  templateUrl: 'brsl-location.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})

export class BRSLLocationComponent extends FragmentedComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected loc: Location,
    private brslservice: BRSLService,
    protected seoService: SeoService,
    protected viewportScroller: ViewportScroller
  ) {
    super(destroy$, route, seoService, viewportScroller, loc);
  }
  changeData() {
    this.gameService(this.brslservice, `locations`);
    return this.brslservice.getRegion(this.slug, this.language);
  }

  afterAssignment(): void {
    this.genericSEO(this.data.name, `All items and demons in ${this.data.name}`);
  }
} 