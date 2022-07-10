import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MajorGather } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a23-majorgather.component.html',
  providers: [DestroyService]
})

export class A23MajorGatherComponent extends SingleComponent implements OnInit {
  major: MajorGather;

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a23service: A23Service,
    private readonly destroy$: DestroyService,
    private loc: Location,
    private router: Router,
    private viewportScroller: ViewportScroller,
  ) {
    super(route, seoService);
    this.gameService(this.a23service);
  }

  ngOnInit(): void {
    this.major = this.route.snapshot.data.gather;
    this.seoURL = `${this.gameURL}/major-gathering/${this.language}`;
    this.seoTitle = `Major Gathering Spots - ${this.gameTitle}`;
    this.seoDesc = `All major gathering items in ${this.gameTitle}`
    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, '', true);
  }

  ngAfterViewInit(): void {
    this.route.fragment.pipe(
      first(), takeUntil(this.destroy$)
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }
  scroll(id: string) {
    this.loc.replaceState(`${this.gameURL}/major-gathering/${this.language}#${id}`);
    this.viewportScroller.scrollToAnchor(id);
  }

  scrollTo(fragment): void {
    this.router.navigate([], { fragment: fragment }).then(() => {
      const element = document.getElementById(fragment);
      if (element != undefined) element.scrollIntoView();
    });
  }
}