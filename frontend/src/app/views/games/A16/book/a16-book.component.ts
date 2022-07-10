import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { Book } from '@app/views/games/A16/_services/a16.interface';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a16-book.component.html',
  selector: 'a16-book',
})
export class A16BookComponent extends SingleComponent implements OnInit {
  book: Book;

  constructor(
    protected route: ActivatedRoute,
    private a16service: A16Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a16service);
    this.section = 'recipe-books'
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.a16service.getBook(this.slug, this.language)
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