import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Region } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'brsl-location.component.html',
  providers: [DestroyService]
})

export class BRSLLocationComponent extends FragmentedComponent {
  location: Region;

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
  changeData(): void {
    this.brslservice.getRegion(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: location => {
          this.error = ``;
          this.location = location;
          this.hasData = true;
          this.gameService(this.brslservice, `locations`);
          this.genericSEO(this.location.name, `All items and demons in ${this.location.name}`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 