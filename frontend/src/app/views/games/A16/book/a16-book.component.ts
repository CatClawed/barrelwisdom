import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Book } from '@app/views/games/A16/_services/a16.interface';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a16-book.component.html',
  selector: 'a16-book',
  providers: [DestroyService]
})
export class A16BookComponent extends SingleComponent2 {
  book: Book;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a16service: A16Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    this.a16service.getBook(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: book => {
          this.error = ``;
          this.book = book;
          this.gameService(this.a16service, 'recipe-books');
          this.seoImage = `${this.imgURL}items/${this.book.slugname}.webp`
          this.genericSEO(this.book.name, this.book.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 