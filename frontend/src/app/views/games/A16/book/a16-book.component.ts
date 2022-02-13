import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '@app/interfaces/a16';
import { A16Service } from '@app/services/a16.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a16-book.component.html',
  selector: 'a16-book',
})
export class A16BookComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = '';
  book: Book;
  colset: string;

  @Input()
  slugname: string = "";

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
    private a16service: A16Service,
    private seoService: SeoService) {
      if(this.route.snapshot.params.book != null) {
      this.slugname = this.route.snapshot.params.book;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-9 mx-auto "
    }
    this.a16service.getBook(this.slugname, this.language)
    .subscribe({next: book => {
        this.error =``;
        this.book = book;

        this.gameTitle = this.a16service.gameTitle[this.language];
        this.gameURL = this.a16service.gameURL;
        this.imgURL = this.a16service.imgURL;

        this.seoURL = `${this.gameURL}/recipe-books/${this.book.slugname}/${this.language}`;
        this.seoTitle = `${this.book.name} - ${this.gameTitle}`;
        this.seoDesc = `${this.book.desc}`
        this.seoImage = `${this.imgURL}items/${this.book.slugname}.webp`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }
} 