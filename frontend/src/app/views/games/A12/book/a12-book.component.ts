import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Book } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a12-book.component.html',
  selector: 'a12-book',
  providers: [DestroyService]
})
export class A12BookComponent extends SingleComponent2 {
  book: Book;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a12service: A12Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.a12service.getBook(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: book => {
          this.error = ``;
          this.gameService(this.a12service, 'recipe-books');
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