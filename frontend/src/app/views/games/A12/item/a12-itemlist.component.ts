import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Category, ItemList } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a12-itemlist.component.html',
  providers: [DestroyService]
})

export class A12ItemlistComponent extends ListComponent implements OnInit {
  itemControl: UntypedFormControl;
  ingControl: UntypedFormControl;
  items: ItemList[];
  filteredItems: Observable<ItemList[]>;
  categories: Category[];
  selectedCat = "Any";

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a12service: A12Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.gameService(this.a12service, 'items');
    this.itemControl = new UntypedFormControl();
    this.ingControl = new UntypedFormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.itemControl,
      filtering: this.ingControl,
      type: ['Any'],
      level: [0],
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.getItems();
    this.getCategories();
    this.genericSEO(`Items`, `The list of items in ${this.gameTitle}.`);
  }

  getItems() {
    this.a12service.getItemList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: items => {
          this.items = items;
          this.filteredItems = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<ItemList[]>),
            map((search: any) => search ? this.filterT(search.filtertext, search.type, search.level, search.filtering) : this.items.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  getCategories() {
    this.a12service.getCategories(this.language)
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

  private filterT(value: string, type: string, level: number, ing: string): ItemList[] {
    let list: ItemList[] = this.items;

    if (type != 'Any') {
      list = list.filter(item => item.item_type != 'Equipment');
      list = list.filter(item => item.categories.some(c => c.name == type));
    }
    if (level > 0) {
      list = list.filter(item => item.level >= level);
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