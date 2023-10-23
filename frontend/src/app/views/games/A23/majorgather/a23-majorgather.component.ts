import { Location, ViewportScroller } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { MajorGather } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a23-majorgather.component.html',
  providers: [DestroyService]
})

export class A23MajorGatherComponent extends SingleComponent2 implements AfterViewInit {
  major: MajorGather;

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a23service: A23Service,
    protected readonly destroy$: DestroyService,
    private loc: Location,
    private router: Router,
    private viewportScroller: ViewportScroller,
  ) {
    super(destroy$, route, seoService);
    this.gameService(this.a23service, 'major-gathering');
    this.major = this.route.snapshot.data.gather;
    this.genericSEO(`Major Gathering Spots`, `All major gathering items in ${this.gameTitle}.`);
  }

  changeData(): void {
    this.a23service.getMajorGather(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: major => {
          this.error = ``;
          this.major = major;
          this.gameService(this.a23service, 'major-gathering');
          this.genericSEO(`Major Gathering Spots`, `All major gathering items in ${this.gameTitle}.`);
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
    this.loc.replaceState(`${this.gameURL}/${this.section}/${this.language}#${id}`);
    this.viewportScroller.scrollToAnchor(id);
  }

  scrollTo(fragment): void {
    this.router.navigate([], { fragment: fragment }).then(() => {
      const element = document.getElementById(fragment);
      if (element != undefined) element.scrollIntoView();
    });
  }
}