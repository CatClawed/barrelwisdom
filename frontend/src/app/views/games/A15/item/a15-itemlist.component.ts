import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Category, ItemList } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a15-itemlist.component.html',
  providers: [DestroyService]
})

export class A15ItemlistComponent extends ModalUseComponent {
  items: ItemList[];
  filteredItems: Observable<ItemList[]>;
  categories: Category[];

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
      filtering: '',
      type: 'Any',
      elementval: 0,
      element: "Any"
    })
  }

  changeData(): void {
    this.modalEvent();
    this.pageForm.reset();
    this.getItems();
    this.getCategories();
  }

  getItems() {
    this.a15service.getItemList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: items => {
          this.items = items;
          this.gameService(this.a15service, 'items');
          this.genericSEO(`Items`, `The list of items in ${this.gameTitle}.`);
          this.filteredItems = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<ItemList[]>),
            map((search: any) => search ? this.filterT(search.filtertext, search.type, search.elementval, search.element, search.filtering) : this.items.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  getCategories() {
    this.a15service.getCategories(this.language)
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

  private filterT(value: string, type: string, elementV: number, element: string, ing: string): ItemList[] {
    let list: ItemList[] = this.items;

    if (type != 'Any') {
      list = list.filter(item => item.categories.some(c => c.name == type));
    }

    if (elementV > 1) {
      list = list.filter(item => item.evalue >= elementV);
    }
    switch (element) {
      case "Fire":
        list = list.filter(item => item.fire)
        break;
      case "Water":
        list = list.filter(item => item.water)
        break;
      case "Wind":
        list = list.filter(item => item.wind)
        break;
      case "Earth":
        list = list.filter(item => item.earth)
        break;
    }

    if (ing) {
      const filterValue = ing.toLowerCase();
      list = list.filter(item => (item.ingredient_set) ? item.ingredient_set.some(i => i.ing.toLowerCase().includes(filterValue)) : false)
    }
    if (value) {
      const filterValue = value.toLowerCase();
      list = list.filter(item => {
        return item.name.toLowerCase().includes(filterValue);
      });
    }

    return list;
  }

}