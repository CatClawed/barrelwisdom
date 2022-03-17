import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MajorGather } from '@app/interfaces/a23';
import { A23Service } from '@app/services/a23.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a23-majorgather.component.html',
  providers: [DestroyService]
})

export class A23MajorGatherComponent implements OnInit {
  error: string = '';
  errorVars: any[];
  errorMsg: string;
  major: MajorGather;
  language: string;

  seoTitle: string;
  seoDesc: string;
  seoImage: string;
  seoURL: string;

  gameTitle: string;
  gameURL: string;
  imgURL: string;

  constructor(
    private route: ActivatedRoute,
    private readonly destroy$: DestroyService,
    private loc: Location,
    private router: Router,
    private a23service: A23Service,
    private seoService: SeoService,
    private viewportScroller: ViewportScroller,
  ) {
  }

  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    this.major = this.route.snapshot.data.gather;

    this.gameTitle = this.a23service.gameTitle[this.language];
    this.gameURL = this.a23service.gameURL;
    this.imgURL = this.a23service.imgURL;

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