import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
  templateUrl: 'a15-location.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class A15LocationComponent extends FragmentedComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected loc: Location,
    private a15service: A15Service,
    public historyService: HistoryService,
    protected seoService: SeoService,
    protected viewportScroller: ViewportScroller) {
    super(destroy$, route, seoService, viewportScroller, loc);
  }

  changeData() {
    this.gameService(this.a15service, 'locations');
    return this.a15service.getRegion(this.slug, this.language);
  }
  afterAssignment(): void {
    this.genericSEO(this.data.name, `All items in ${this.data.name}`);
  }
} 