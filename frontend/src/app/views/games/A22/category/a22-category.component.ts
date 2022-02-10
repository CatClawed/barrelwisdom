import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryItem } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { HistoryService } from '@app/services/history.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a22-category.component.html',
  selector: 'a22-category',
})
export class A22CategoryComponent implements OnInit {
  slugname: string;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  category: CategoryItem;
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

    private seoService: SeoService) {
  }
  ngOnInit(): void {
    this.slugname = this.route.snapshot.params.category;
    this.language = this.route.snapshot.params.language;

    this.a22service.getCategoryItem(this.slugname, this.language)
    .subscribe(category => {
        this.error = false;
        this.category = category;

        this.gameTitle = this.a22service.gameTitle[this.language];
        this.gameURL = this.a22service.gameURL;
        this.imgURL = this.a22service.imgURL;

        this.seoURL = `${this.gameURL}/categories/${this.category.slug}/${this.language}`;
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