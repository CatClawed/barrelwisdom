import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionData } from '@app/interfaces/a15';
import { A15Service } from '@app/services/a15.service';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a15-location.component.html',
  providers: [DestroyService]
})
export class A15LocationComponent implements OnInit {
  slugname: string;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = '';
  location: RegionData;
  colset: string;
  language = "";

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
    private a15service: A15Service,
    public historyService: HistoryService,
    private seoService: SeoService,
    private viewportScroller: ViewportScroller
    ) {
  }
  ngOnInit(): void {
    this.slugname = this.route.snapshot.params.location;
    this.language = this.route.snapshot.params.language;
    this.location = this.route.snapshot.data.loc;

    if(!this.location) {
      this.error =`404`;
    }
    else {
        this.gameTitle = this.a15service.gameTitle[this.language];
        this.gameURL = this.a15service.gameURL;
        this.imgURL = this.a15service.imgURL;

        this.seoURL = `${this.gameURL}/locations/${this.location.slugname}/${this.language}`;
        this.seoTitle = `${this.location.name} - ${this.gameTitle}`;
        this.seoDesc = `All items in ${this.location.name}`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, '');
    }
  }
  ngAfterViewInit(): void {
    this.route.fragment.pipe(
      first(),
      takeUntil(this.destroy$)
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }
  scroll(id: string) {
    this.loc.replaceState(`${this.gameURL}/locations/${this.location.slugname}/${this.language}#${id}`);
    this.viewportScroller.scrollToAnchor(id);
  }
} 