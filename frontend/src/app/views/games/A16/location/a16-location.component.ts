import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
  templateUrl: 'a16-location.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class A16LocationComponent extends FragmentedComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected loc: Location,
    private a16service: A16Service,
    public historyService: HistoryService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected viewportScroller: ViewportScroller) {
    super(destroy$, route, seoService, breadcrumbService, viewportScroller, loc);
  }

  changeData() {
    this.gameService(this.a16service, 'locations');
    return this.a16service.getRegion(this.slug, this.language);
  }
  afterAssignment(): void {
    this.genericSettings(this.data.name, `All items in ${this.data.name}`, '', true);
  }
} 