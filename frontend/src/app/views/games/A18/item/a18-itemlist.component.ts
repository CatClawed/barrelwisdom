import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Item, NameLink } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a18-itemlist.component.html',
  providers: [DestroyService]
})

export class A18ItemlistComponent extends ModalUseComponent {
  items: Item[];
  filteredItems: Observable<Item[]>;
  categories: NameLink[];

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a18service: A18Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      filtering: '',
      cat: 'Any',
    })
  }

  changeData(): void {
    this.modalEvent();
    this.pageForm.reset();
    this.getItems();
    this.getCategories();
  }

  getItems() {
    this.a18service.getItemList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: items => {
          this.error = ``;
          this.items = items;
          this.gameService(this.a18service, 'items');
          this.genericSEO(`Items`, `The list of items in ${this.gameTitle}.`);
          this.filteredItems = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<Item[]>),
            map((search: any) => search ? this.filterT(search.filtertext, search.cat, search.filtering) : this.items.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  getCategories() {
    this.a18service.getCategoryList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: categories => {
          this.categories = categories;
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string, cat: string, ingt: string): Item[] {
    let list: Item[] = this.items;

    if (cat != 'Any') {
      list = list.filter(item => item.categories.some(c => c.name == cat) || (item.add ? item.add.some(c => c.name == cat) : false));
    }

    if (ingt) {
      const filterValue = ingt.toLowerCase();
      list = list.filter(item => ((item.ing) ? item.ing.some(i =>
        i.name.toLowerCase().includes(filterValue))
        : false))
    }

    if (!value) {
      return list
    }
    const filterValue = value.toLowerCase();
    return list.filter(item => {
      return item.name.toLowerCase().includes(filterValue);
    });
  }
}