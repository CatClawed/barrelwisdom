import { Dialog } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { Book } from '@app/views/games/A16/_services/a16.interface';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A16BookComponent } from './a16-book.component';

@Component({
  templateUrl: 'a16-booklist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports, A16BookComponent]
})

export class A16BooklistComponent extends DialogUseComponent {
  filteredBooks: Observable<Book[]>;

  constructor(
    protected cdkDialog: Dialog,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private formBuilder: UntypedFormBuilder,
    private a16service: A16Service) {
    super(destroy$, router, route, location, seoService, breadcrumbService, cdkDialog);
    this.component = A16BookComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: ''
    })
  }

  changeData() {
    this.gameService(this.a16service, 'recipe-books');
    this.genericSettings(`Recipe Books`, `The list of recipe books in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a16service.getBookList(this.language);
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