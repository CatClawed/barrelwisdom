import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { ShopDevelop } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { HistoryService } from '@app/services/history.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a22-shopdevelop.component.html',
  selector: 'a22-shopdevelop',
})
export class A22ShopDevelopComponent implements OnInit {
  slug: string;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  shopdevelop: ShopDevelop[];
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
    public historyService: HistoryService,
    private a22service: A22Service,
    private errorService: ErrorCodeService,
    private seoService: SeoService) {
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    this.gameTitle = this.a22service.gameTitle;
    this.gameURL = this.a22service.gameURL;
    this.imgURL = this.a22service.imgURL;

    this.seoURL = `${this.gameURL}/shopdevelop/${this.language}`;
    this.seoTitle = `Shop Development - ${this.gameTitle}`;
    this.seoDesc = `The full shop develop list.`
    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);

    this.a22service.getShopDevList(this.language)
    .subscribe(shopdevelop => {
        this.error = false;
        this.shopdevelop = shopdevelop;
    },
    error => {
      this.error = true;
      this.errorCode = `${error.status}`;
      this.errorVars = this.errorService.getCodes(this.errorCode);
    });
  }
} 