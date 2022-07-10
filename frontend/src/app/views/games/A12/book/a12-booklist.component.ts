import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Book } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a12-booklist.component.html',
  providers: [DestroyService]
})

export class A12BooklistComponent extends ListComponent implements OnInit {
  bookControl: FormControl;
  books: Book[];
  filteredBooks: Observable<Book[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: FormBuilder,
    private a12service: A12Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.gameService(this.a12service, 'recipe-books');
    this.bookControl = new FormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.bookControl,
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.getBooks();
    this.genericSEO(`Recipe Books`, `The list of recipe books in ${this.gameTitle}.`);
  }

  getBooks() {
    this.a12service.getBookList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: books => {
          this.books = books;
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

  identify2(index, item) {
    return item.slugname;
  }
}