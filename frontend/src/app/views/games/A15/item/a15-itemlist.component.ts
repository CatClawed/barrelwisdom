import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, ItemList } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a15-itemlist.component.html',
  providers: [DestroyService]
})

export class A15ItemlistComponent extends ListComponent implements OnInit {
  itemControl: FormControl;
  ingControl: FormControl;
  items: ItemList[];
  filteredItems: Observable<ItemList[]>;
  currentType: string = "Any";
  currentElem: string = "Any";
  currentElemVal: number = 1;
  categories: Category[];
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
    private formBuilder: FormBuilder,
    private a15service: A15Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.gameService(this.a15service, 'items');
    this.itemControl = new FormControl();
    this.ingControl = new FormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.itemControl,
      filtering: this.ingControl,
      type: ['Any'],
      elementval: [0],
      element: ["Any"]
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.getItems();
    this.getCategories();
    this.genericSEO(`Items`, `The list of items in ${this.gameTitle}.`);
  }

  getItems() {
    this.a15service.getItemList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: items => {
          this.items = items;
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

  identify2(index, item) {
    return item.slugname;
  }
}