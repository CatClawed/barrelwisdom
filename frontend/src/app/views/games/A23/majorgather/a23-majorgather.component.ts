import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
  templateUrl: 'a23-majorgather.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})

export class A23MajorGatherComponent extends FragmentedComponent {
  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private a23service: A23Service,
    protected readonly destroy$: DestroyService,
    protected loc: Location,
    protected viewportScroller: ViewportScroller) {
    super(destroy$, route, seoService, breadcrumbService, viewportScroller, loc);
  }

  changeData() {
    this.gameService(this.a23service, 'major-gathering');
    this.genericSettings(`Major Gathering Spots`, `All major gathering items in ${this.gameTitle}.`);
    return this.a23service.getMajorGather(this.language)
  }
}