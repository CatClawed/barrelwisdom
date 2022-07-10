import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a15-book.component.html',
  selector: 'a15-book',
})
export class A15BookComponent extends SingleComponent implements OnInit {
  book: Book;

  constructor(
    protected route: ActivatedRoute,
    private a15service: A15Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a15service, 'recipe-books');
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.a15service.getBook(this.slug, this.language)
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