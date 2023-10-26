import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Book } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a15-booklist.component.html',
  providers: [DestroyService]
})

export class A15BooklistComponent extends ModalUseComponent {
  books: Book[];
  filteredBooks: Observable<Book[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a15service: A15Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData(): void {
    this.modalEvent();
    this.pageForm.reset();
    this.a15service.getBookList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: books => {
          this.books = books;
          this.gameService(this.a15service, 'recipe-books');
          this.genericSEO(`Recipe Books`, `The list of recipe books in ${this.gameTitle}.`);
          this.filteredBooks = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<Book[]>),
            map((search: any) => search ? this.filterT(search.filtertext) : this.books.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string): Book[] {
    let list: Book[] = this.books;
    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(book => {
      return book.name.toLowerCase().includes(filterValue);
    });
  }
}