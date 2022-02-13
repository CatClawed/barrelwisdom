import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryData } from '@app/interfaces/a16';
import { A16Service } from '@app/services/a16.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a16-category.component.html',
})
export class A16CategoryComponent implements OnInit {
  slugname: string;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = '';
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
    private a16service: A16Service,
    private seoService: SeoService) { }
  ngOnInit(): void {
    this.slugname = this.route.snapshot.params.category;
    this.language = this.route.snapshot.params.language;

    this.a16service.getCategory(this.slugname, this.language)
    .subscribe({next: category => {
        this.error =``;
        this.category = category;

        this.gameTitle = this.a16service.gameTitle[this.language];
        this.gameURL = this.a16service.gameURL;
        this.imgURL = this.a16service.imgURL;

        this.seoURL = `${this.gameURL}/categories/${this.category.slugname}/${this.language}`;
        this.seoTitle = `${this.category.name} - ${this.gameTitle}`;
        this.seoDesc = `All items in ${this.category.name}`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }
} 