import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { Book } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a12-book.component.html',
  selector: 'a12-book',
})
export class A12BookComponent extends SingleComponent implements OnInit {
  book: Book;

  constructor(
    protected route: ActivatedRoute,
    private a12service: A12Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a12service, 'recipe-books');
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.a12service.getBook(this.slug, this.language)
      .subscribe({
        next: book => {
          this.error = ``;
          this.book = book;
          this.seoImage = `${this.imgURL}items/${this.book.slugname}.webp`
          this.genericSEO(this.book.name, this.book.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 