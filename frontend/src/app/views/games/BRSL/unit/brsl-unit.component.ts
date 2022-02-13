import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { Unit } from '@app/interfaces/brsl';
import { BRSLService } from '@app/services/brsl.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'brsl-unit.component.html',
  selector: 'brsl-unit',
})
export class BRSLUnitComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = '';
  errorVars: any[];
  errorMsg: string;
  units: Unit[];
  colset: string;

  seoTitle: string;
  seoDesc: string;
  seoImage: string;
  seoURL: string;

  gameTitle: string;
  gameURL: string;
  imgURL: string;

  language = "";

  constructor(
    private route: ActivatedRoute,
    private brslservice: BRSLService,
    private seoService: SeoService) {
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    this.brslservice.getUnit(this.language)
    .subscribe({next: unit => {
        this.error =``;
        this.units = unit;

        this.gameTitle = this.brslservice.gameTitle[this.language];
        this.gameURL = this.brslservice.gameURL;
        this.imgURL = this.brslservice.imgURL;

        this.seoURL = `${this.gameURL}/units/${this.language}`;
        this.seoTitle = `Units - ${this.gameTitle}`;
        this.seoDesc = `All crafting units in ${this.gameTitle}.`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }
} 