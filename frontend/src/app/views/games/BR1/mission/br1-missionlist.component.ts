
import { ViewportScroller } from '@angular/common';
import { first } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { Mission } from '@app/interfaces/br1';
import { BR1Service } from '@app/services/br1.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'br1-missionlist.component.html',
  selector: 'br1-missionlist',
})
export class BR1MissionlistComponent implements OnInit {
  slugname: string;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  missions: Mission[];
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
    private br1service: BR1Service,
    public historyService: HistoryService,
    private errorService: ErrorCodeService,
    private seoService: SeoService,
    private viewportScroller: ViewportScroller) {
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    this.gameTitle = this.br1service.gameTitle;
    this.gameURL = this.br1service.gameURL;
    this.imgURL = this.br1service.imgURL;

    this.seoURL = `${this.gameURL}/mission/${this.language}`;
    this.seoTitle = `Missions - ${this.gameTitle}`;
    this.seoDesc = `The full shop mission list.`
    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);

    this.br1service.getMissionList(this.language)
    .subscribe(mission => {
        this.error = false;
        this.missions = mission;
    },
    error => {
      this.error = true;
      this.errorCode = `${error.status}`;
      this.errorVars = this.errorService.getCodes(this.errorCode);
    });
  }
  ngAfterViewInit(): void {
    this.route.fragment.pipe(
      first()
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }
} 