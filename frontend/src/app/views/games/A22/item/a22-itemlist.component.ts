import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Item, NameLink } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { ListComponent2 } from '@app/views/games/_prototype/list2.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a22-itemlist.component.html',
  providers: [DestroyService]
})

export class A22ItemlistComponent extends ListComponent2 {
  itemControl: UntypedFormControl;
  ingControl: UntypedFormControl;
  items: Item[];
  filteredItems: Observable<Item[]>;
  categories: NameLink[];
  selectedCat = "Any";
  selectedElem = "Any";
  selectedElemV = 0;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a22service: A22Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.itemControl = new UntypedFormControl();
    this.ingControl = new UntypedFormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.itemControl,
      filtering: this.ingControl,
      type: ['Any'],
      elementval: [1],
      element: ["Any"]
    })
  }

  changeData(): void {
    this.getItems();
    this.getCategories();
  }

  getItems() {
    this.a22service.getItemList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: items => {
          this.items = items;
          this.gameService(this.a22service, 'items');
          this.genericSEO(`Items`, `The list of items in ${this.gameTitle}.`);
          this.filteredItems = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<Item[]>),
            map((search: any) => search ? this.filterT(search.filtertext, search.type, search.elementval, search.element, search.filtering) : this.items.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  getCategories() {
    this.a22service.getCategoryList(this.language)
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

  private filterT(value: string, type: string, elementV: number, element: string, ingt: string): Item[] {
    let list: Item[] = this.items;

    if (type != 'Any') {
      list = list.filter(item => item.category.some(c => c.name == type));
    }

    if (elementV > 1) {
      list = list.filter(item => item.elementvalue >= elementV);
    }
    switch (element) {
      case "Fire":
        list = list.filter(item => item.fire)
        break;
      case "Ice":
        list = list.filter(item => item.ice)
        break;
      case "Lightning":
        list = list.filter(item => item.lightning)
        break;
      case "Wind":
        list = list.filter(item => item.wind)
        break;
    }

    if (ingt) {
      const filterValue = ingt.toLowerCase();
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