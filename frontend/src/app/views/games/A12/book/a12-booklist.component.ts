import { Dialog } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Book } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A12BookComponent } from './a12-book.component';

@Component({
  templateUrl: 'a12-booklist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports,
    A12BookComponent]
})

export class A12BooklistComponent extends DialogUseComponent {
  filteredBooks: Observable<Book[]>;

  constructor(
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    protected cdkDialog: Dialog,
    private formBuilder: UntypedFormBuilder,
    private a12service: A12Service) {
    super(destroy$, router, route, location, seoService, cdkDialog);
    this.component = A12BookComponent
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData() {
    this.gameService(this.a12service, 'recipe-books');
    this.genericSEO(`Recipe Books`, `The list of recipe books in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a12service.getBookList(this.language);
  }

  afterAssignment(): void {
    this.filteredBooks = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Book[]>),
      map((search: any) => search ? this.filterT(search.filtertext) : this.data.slice())
    );
  }

  private filterT(value: string): Book[] {
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