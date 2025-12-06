import { Component, inject } from '@angular/core';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Book } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A12BookComponent } from './a12-book.component';

@Component({
    templateUrl: 'a12-booklist.component.html',
    imports: [...CommonImports, ...MaterialFormImports,
        A12BookComponent, FilterListComponent]
})

export class A12BooklistComponent extends DialogUseComponent {
  protected a12service = inject(A12Service);
  filteredBooks: Observable<Book[]>;

  constructor() {
    super();
    this.component = A12BookComponent
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData() {
    this.gameService(this.a12service, 'recipe-books');
    this.genericSettings(`Recipe Books`, `The list of recipe books in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a12service.getBookList(this.language);
  }

  override afterAssignment(): void {
    this.filteredBooks = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Book[]>),
      map((search: any) => search ? this.filterT(search.filtertext) : this.data.slice())
    );
  }

  private filterT(value: string): Book[] {
    this.hide = false;
    let list: Book[] = this.data;
    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(book => {
      return book.name.toLowerCase().includes(filterValue);
    });
  }
}