import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { CategoryData } from '@app/interfaces/a15';
import { A15Service } from '@app/services/a15.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a15-category.component.html',
  selector: 'a15-category',
})
export class A15CategoryComponent implements OnInit {
  slugname: string;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  category: CategoryData;
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
    private a15service: A15Service,
    public historyService: HistoryService,

    private seoService: SeoService) {
  }
  ngOnInit(): void {
    this.slugname = this.route.snapshot.params.category;
    this.language = this.route.snapshot.params.language;

    this.a15service.getCategory(this.slugname, this.language)
    .subscribe(category => {
        this.error = false;
        this.category = category;

        this.gameTitle = this.a15service.gameTitle[this.language];
        this.gameURL = this.a15service.gameURL;
        this.imgURL = this.a15service.imgURL;

        this.seoURL = `${this.gameURL}/categories/${this.category.slugname}/${this.language}`;
        this.seoTitle = `${this.category.name} - ${this.gameTitle}`;
        this.seoDesc = `All items in ${this.category.name}`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error => {
      this.error = true;
      this.errorCode = `${error.status}`;
      
    });
  }
} 