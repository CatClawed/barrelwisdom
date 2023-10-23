import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  location: AreaData;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected loc: Location,
    private a12service: A12Service,
    protected seoService: SeoService,
    protected viewportScroller: ViewportScroller) {
    super(destroy$, route, seoService, viewportScroller, loc);
    this.gameService(this.a12service, 'locations');
    this.location = this.route.snapshot.data.loc;
    if (!this.location) {
      this.error = `404`;
    }
    else {
      this.genericSEO(this.location.name, `All items in ${this.location.name}`);
    }
  }

  changeData(): void {
    this.a12service.getRegion(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: location => {
          this.error = ``;
          this.gameService(this.a12service, 'locations');
          this.location = location;
          this.genericSEO(this.location.name, `All items in ${this.location.name}`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 