import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopDevelop } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a22-shopdevelop.component.html',
})
export class A22ShopDevelopComponent implements OnInit {
  slug: string;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
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
    private a22service: A22Service,
    private seoService: SeoService) {
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    this.gameTitle = this.a22service.gameTitle[this.language];
    this.gameURL = this.a22service.gameURL;
    this.imgURL = this.a22service.imgURL;

    this.seoURL = `${this.gameURL}/shopdevelop/${this.language}`;
    this.seoTitle = `Shop Development - ${this.gameTitle}`;
    this.seoDesc = `The full shop develop list.`
    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);

    this.a22service.getShopDevList(this.language)
    .subscribe({next: shopdevelop => {
        this.error = false;
        this.shopdevelop = shopdevelop;
    },
    error: error => {
      this.error = true;
      this.errorCode = `${error.status}`;
    }});
  }
} 