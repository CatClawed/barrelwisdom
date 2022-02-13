import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaData } from '@app/interfaces/a12';
import { A12Service } from '@app/services/a12.service';
import { SeoService } from '@app/services/seo.service';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: 'a12-location.component.html',
})
export class A12LocationComponent implements OnInit {
  slugname: string;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = '';
  location: AreaData;
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
    private loc: Location,
    private a12service: A12Service,
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
        this.gameTitle = this.a12service.gameTitle[this.language];
        this.gameURL = this.a12service.gameURL;
        this.imgURL = this.a12service.imgURL;

        this.seoURL = `${this.gameURL}/locations/${this.location.slugname}/${this.language}`;
        this.seoTitle = `${this.location.name} - ${this.gameTitle}`;
        this.seoDesc = `All items in ${this.location.name}`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, '');
    }
  }
  ngAfterViewInit(): void {
    this.route.fragment.pipe(
      first()
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }

  scroll(id: string) {
    this.loc.replaceState(`${this.gameURL}/locations/${this.location.slugname}/${this.language}#${id}`);
    this.viewportScroller.scrollToAnchor(id);
  }
} 