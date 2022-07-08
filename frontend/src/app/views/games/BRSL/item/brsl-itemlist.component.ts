import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ItemList, NameOnly } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'brsl-itemlist.component.html',
  providers: [DestroyService]
})

export class BRSLItemlistComponent extends ListComponent implements OnInit {
  itemControl: FormControl;
  items: ItemList[];
  categories: NameOnly[];
  filteredItems: Observable<ItemList[]>;
  currentType: string = "Any";
  currentCategory: string = "Any";

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: FormBuilder,
    private brslservice: BRSLService,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.section = 'items';
    this.itemControl = new FormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.itemControl,
      category: ['Any'],
      type: ['Any']
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.gameService(this.brslservice);
    this.getItems();
    this.getCategories();
    this.seoURL = `${this.gameURL}/items/${this.language}`;
    this.seoTitle = `Items - ${this.gameTitle}`;
    this.seoDesc = `The list of items in ${this.gameTitle}.`
    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
  }

  getItems() {
    this.brslservice.getItemList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: items => {
          this.items = items;
          this.filteredItems = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<ItemList[]>),
            map((search: any) => search ? this.filterT(search.filtertext, search.type, search.category) : this.items.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  getCategories() {
    this.brslservice.getCategoryList(this.language)
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

  private filterT(value: string, type: string, category: string): ItemList[] {
    let list: ItemList[] = this.items;
    if (type != 'Any') {
      list = list.filter(item => item.itemtype == type);
    }
    if (category != 'Any') {
      list = list.filter(item => item.category.some(c => c.name == category));
    }
    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(mon => {
      return mon.name.toLowerCase().includes(filterValue);
    });
  }
}