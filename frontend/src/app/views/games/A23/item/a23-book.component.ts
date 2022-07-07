import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a23-book.component.html'
})
export class A23BookComponent extends SingleComponent implements OnInit {
  item: Book;

  constructor(
    protected route: ActivatedRoute,
    private seoService: SeoService,
    private a23service: A23Service,
  ) {
    super(route);
    this.gameService(this.a23service);
  }
  
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.a23service.getBook(this.slug, this.language)
      .subscribe({
        next: item => {
          this.error = ``;
          this.item = item;
          this.seoURL = `${this.gameURL}/items/books/${this.item.slug}/${this.language}`;
          this.seoTitle = `${this.item.name} - ${this.gameTitle}`;
          this.seoDesc = `Recipe book in ${this.gameTitle}`
          this.seoImage = `${this.imgURL}items/${this.item.slug}.webp`
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 