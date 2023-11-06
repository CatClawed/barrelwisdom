import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { MajorGather } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a23-majorgather.component.html',
  providers: [DestroyService]
})

export class A23MajorGatherComponent extends FragmentedComponent {
  major: MajorGather;

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a23service: A23Service,
    protected readonly destroy$: DestroyService,
    protected loc: Location,
    protected viewportScroller: ViewportScroller,
  ) {
    super(destroy$, route, seoService, viewportScroller, loc);
  }

  changeData(): void {
    this.a23service.getMajorGather(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: major => {
          this.error = ``;
          this.major = major;
          this.hasData = true;
          this.gameService(this.a23service, 'major-gathering');
          this.genericSEO(`Major Gathering Spots`, `All major gathering items in ${this.gameTitle}.`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
}