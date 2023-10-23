import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { AreaData } from '@app/views/games/A16/_services/a16.interface';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a16-location.component.html',
  providers: [DestroyService]
})
export class A16LocationComponent extends FragmentedComponent {
  location: AreaData;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected loc: Location,
    private a16service: A16Service,
    public historyService: HistoryService,
    protected seoService: SeoService,
    protected viewportScroller: ViewportScroller
  ) {
    super(destroy$, route, seoService, viewportScroller, loc);
    this.gameService(this.a16service, 'locations');
    this.location = this.route.snapshot.data.loc;
    if (!this.location) {
      this.error = `404`;
    }
    else {
      this.genericSEO(this.location.name, `All items in ${this.location.name}`);
    }
  }

  changeData(): void {
    this.a16service.getRegion(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: location => {
          this.error = ``;
          this.location = location;
          this.gameService(this.a16service, 'locations');
          this.genericSEO(this.location.name, `All items in ${this.location.name}`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 