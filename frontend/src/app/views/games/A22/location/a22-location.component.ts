import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Region } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a22-location.component.html',
  providers: [DestroyService]
})

export class A22LocationComponent extends FragmentedComponent {
  region: Region;
  dig = true;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected loc: Location,
    private router: Router,
    private a22service: A22Service,
    protected seoService: SeoService,
    protected viewportScroller: ViewportScroller
  ) {
    super(destroy$, route, seoService, viewportScroller, loc);
  }

  changeData(): void {
    this.a22service.getLocation(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: region => {
          this.error = ``;
          this.region = region;
          this.hasData = true;
          this.gameService(this.a22service, 'locations');
          this.genericSEO(this.region.name, `All items in ${this.region.name}`);
          for (let g of this.region.areas[0].gatherdata) {
            if (g.tool == 'Dig') {
              this.dig = true;
              break;
            }
            this.dig = false;
          }
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
}