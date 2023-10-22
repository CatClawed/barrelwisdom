import { Location, ViewportScroller } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { RegionData } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a15-location.component.html',
  providers: [DestroyService]
})
export class A15LocationComponent extends SingleComponent2 implements AfterViewInit {
  location: RegionData;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private loc: Location,
    private a15service: A15Service,
    public historyService: HistoryService,
    protected seoService: SeoService,
    private viewportScroller: ViewportScroller
  ) {
    super(destroy$, route, seoService);
    this.gameService(this.a15service, 'locations');
    this.location = this.route.snapshot.data.loc;
    if (!this.location) {
      this.error = `404`;
    }
    else {
      this.genericSEO(this.location.name, `All items in ${this.location.name}`);
    }
  }

  changeData(): void {
    this.a15service.getRegion(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: location => {
          this.error = ``;
          this.location = location;
          this.gameService(this.a15service, 'locations');
          this.genericSEO(this.location.name, `All items in ${this.location.name}`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  ngAfterViewInit(): void {
    this.route.fragment.pipe(
      first(),
      takeUntil(this.destroy$)
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }

  scroll(id: string) {
    this.loc.replaceState(`${this.gameURL}/${this.section}/${this.location.slugname}/${this.language}#${id}`);
    this.viewportScroller.scrollToAnchor(id);
  }
} 