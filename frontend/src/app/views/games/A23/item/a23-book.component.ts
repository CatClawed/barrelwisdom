import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Book } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a23-book.component.html',
  providers: [DestroyService]
})
export class A23BookComponent extends SingleComponent {
  item: Book;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a23service: A23Service) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    this.a23service.getBook(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: item => {
          this.error = ``;
          this.item = item;
          this.gameService(this.a23service, 'items/books');
          this.seoImage = `${this.imgURL}items/${this.item.slug}.webp`
          this.genericSEO(this.item.name, `Recipe book in ${this.gameTitle}`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 