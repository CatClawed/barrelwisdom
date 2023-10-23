import { Location, ViewportScroller } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Region } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'brsl-location.component.html',
  providers: [DestroyService]
})

export class BRSLLocationComponent extends SingleComponent2 implements AfterViewInit {
  location: Region;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private loc: Location,
    private brslservice: BRSLService,
    protected seoService: SeoService,
    private viewportScroller: ViewportScroller
  ) {
    super(destroy$, route, seoService);
    this.gameService(this.brslservice, `locations`);
    this.location = this.route.snapshot.data.loc;
    if (!this.location) {
      this.error = `404`;
    }
    else {
      this.genericSEO(this.location.name, `All items and demons in ${this.location.name}`);
    }
  }
  changeData(): void {
    this.brslservice.getRegion(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: location => {
          this.error = ``;
          this.location = location;
          this.gameService(this.brslservice, `locations`);
          this.genericSEO(this.location.name, `All items and demons in ${this.location.name}`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
  ngAfterViewInit(): void {
    this.route.fragment.pipe(
      first(), takeUntil(this.destroy$)
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }

  scroll(id: string) {
    this.loc.replaceState(`${this.gameURL}/locations/${this.location.slug}/${this.language}#${id}`);
    this.viewportScroller.scrollToAnchor(id);
  }
} 