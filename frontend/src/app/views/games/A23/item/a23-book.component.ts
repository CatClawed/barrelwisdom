import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '@app/interfaces/a23';
import { A23Service } from '@app/services/a23.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a23-book.component.html'
})
export class A23BookComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = '';
  item: Book;
  colset: string;

  @Input()
  slug: string = "";

  @Input()
  showNav: boolean = true;

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
    private a23service: A23Service,
    private seoService: SeoService) {
      if(this.route.snapshot.params.item != null) {
      this.slug = this.route.snapshot.params.item;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-9 mx-auto "
    }
    this.a23service.getBook(this.slug, this.language)
    .subscribe({next: item => {
        this.error =``;
        this.item = item;

        this.gameTitle = this.a23service.gameTitle[this.language];
        this.gameURL = this.a23service.gameURL;
        this.imgURL = this.a23service.imgURL;

        this.seoURL = `${this.gameURL}/items/books/${this.item.slug}/${this.language}`;
        this.seoTitle = `${this.item.name} - ${this.gameTitle}`;
        this.seoDesc = `Recipe book in ${this.gameTitle}`
        this.seoImage = `${this.imgURL}items/${this.item.slug}.webp`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }
} 