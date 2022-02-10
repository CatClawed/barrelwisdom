import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { Region } from '@app/interfaces/brsl';
import { BRSLService } from '@app/services/brsl.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';
import { ViewportScroller } from '@angular/common';
import { first } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  templateUrl: 'brsl-location.component.html',
  selector: 'brsl-location',
})
export class BRSLLocationComponent implements OnInit {
  slugname: string;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  location: Region;
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
    private brslservice: BRSLService,
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
      this.error = true;
      this.errorCode = '404';
    }
    else {
        this.gameTitle = this.brslservice.gameTitle[this.language];
        this.gameURL = this.brslservice.gameURL;
        this.imgURL = this.brslservice.imgURL;

        this.seoURL = `${this.gameURL}/locations/${this.location.slug}/${this.language}`;
        this.seoTitle = `${this.location.name} - ${this.gameTitle}`;
        this.seoDesc = `All items and demons at ${this.location.name}`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, '');
    }
  }
  ngAfterViewInit(): void {
    this.route.fragment.pipe(
      first()
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }

  scroll(id: string) {
    this.loc.replaceState(`${this.gameURL}/locations/${this.location.slug}/${this.language}#${id}`);
    this.viewportScroller.scrollToAnchor(id);
  }
} 