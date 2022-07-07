import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item, NameLink } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a23-itemlist.component.html',
  providers: [DestroyService]
})

export class A23ItemlistComponent extends ListComponent implements OnInit {
  itemControl: FormControl;
  ingControl: FormControl;
  items: Item[];
  filteredItems: Observable<Item[]>;
  categories: NameLink[];
  selectedCat = "Any";
  selectedKind = "Any";

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: FormBuilder,
    private a23service: A23Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.section = 'items';
    this.itemControl = new FormControl();
    this.ingControl = new FormControl();

    this.pageForm = this.formBuilder.group({
      filtertext: this.itemControl,
      filtering: this.ingControl,
      cat: ['Any'],
      kind: ['Any'],
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.gameService(this.a23service);
    this.getItems();
    this.getCategories();

    this.seoURL = `${this.gameURL}/items/${this.language}`;
    this.seoTitle = `Items - ${this.gameTitle}`;
    this.seoDesc = `The list of items in ${this.gameTitle}.`
    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
  }

  getItems() {
    this.a23service.getItemList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: items => {
          this.error =``;
          this.items = items;
          this.filteredItems = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<Item[]>),
            map((search: any) => search ? this.filterT(search.filtertext, search.cat, search.filtering, search.kind) : this.items.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  getCategories() {
    this.a23service.getCategoryList(this.language)
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

  private filterT(value: string, cat: string, ingt: string, kind: string): Item[] {
    let list: Item[] = this.items;

    if (cat != 'Any') {
      list = list.filter(item => item.categories.some(c => c.name == cat) || (item.add ? item.add.some(c => c.name == cat) : false));
    }

    if (kind != 'Any') {
      list = list.filter(item => item.kind == kind)
    }

    if (ingt) {
      const filterValue = (this.language == 'en') ? ingt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") : ingt;
      list = list.filter(item => ((item.ing) ? item.ing.some(i =>
      ((this.language == 'en') ?
        i.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(filterValue) :
        i.name.includes(filterValue)))
        : false))
    }

    if (value) {
      const filterValue = (this.language == 'en') ? value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") : value;
      list = list.filter(item => {
        return ((this.language == 'en') ?
          (item.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(filterValue))
          : item.name.includes(filterValue));
      });
    }
    return list;
  }
}