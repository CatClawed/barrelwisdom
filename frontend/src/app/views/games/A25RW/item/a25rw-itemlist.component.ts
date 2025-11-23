import { Dialog } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { Item } from '@app/views/games/A25RW/_services/a25rw.interface';
import { A25RWService } from '@app/views/games/A25RW/_services/a25rw.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A25RWItemComponent } from './a25rw-item.component';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    templateUrl: 'a25rw-itemlist.component.html',
    providers: [DestroyService],
    imports: [...CommonImports, ...MaterialFormImports, ItemComponent,
        FilterListComponent, MatButtonModule, MatMenuModule]
})

export class A25RWItemlistComponent extends DialogUseComponent {
  filteredItems: Observable<Item[]>;
  things;

  constructor(
    protected cdkDialog: Dialog,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private formBuilder: UntypedFormBuilder,
    protected a25rwservice: A25RWService) {
    super(destroy$, router, route, location, seoService, breadcrumbService, cdkDialog);
    this.component = A25RWItemComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      cat: '',
      ingredients: false,
      catalyst: false,
      consumable: false,
      equip: false,
      synthesis: false,
      important: false,
      search: false,
      colorL: '--',
      colorR: '--',
    })

    this.things = [
      this.pageForm.controls.ingredients,
      this.pageForm.controls.catalyst,
      this.pageForm.controls.consumable,
      this.pageForm.controls.equip,
      this.pageForm.controls.synthesis,
      this.pageForm.controls.important,
      this.pageForm.controls.search,
    ]
  }

  changeData() {
    this.gameService(this.a25rwservice, 'items');
    this.genericSettings(this.a25rwservice.item_translation[this.language], `The list of items in ${this.gameTitle}.`);
    this.pageForm.reset();
    return forkJoin({
      items: this.a25rwservice.getItemList(this.language),
      categories: this.a25rwservice.getCategoryList(this.language),
    })
  }

  afterAssignment(): void {
    this.filteredItems = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Item[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.cat, search.ingredients, search.catalyst, search.consumable, search.equip, search.synthesis, search.important, search.search, search.colorL, search.colorR) : this.data.items.slice())
    );
  }

  private filterT(value: string, cat: string, ingredients, catalyst, consumable, equip, synthesis, important, search, colorL, colorR): Item[] {
    this.hide = false;
    let list: Item[] = this.data.items;
    if (cat != '--' && cat !== '') {
      list = list.filter(item => item.categories.some(c => c.name == cat) || (item.add ? item.add.some(c => c.name == cat) : false));
    }

    list = ingredients ? list.filter(item => item.icon == 'guide-ingredients') : list;
    list = catalyst    ? list.filter(item => item.icon == 'category-41') : list;
    list = consumable  ? list.filter(item => item.icon == 'guide-consumable-color') : list;
    list = equip       ? list.filter(item => item.icon == 'guide-equip') : list;
    list = synthesis   ? list.filter(item => item.icon == 'guide-synthesis-color') : list;
    list = important   ? list.filter(item => item.icon == 'guide-important-color') : list;
    list = search      ? list.filter(item => item.icon == 'guide-search-color') : list;

    if (colorL !== '--' && colorR !== '--') {
      list = list.filter(item => item.colors ? item.colors.some(c => c.l == colorL && c.r == colorR) : false)
    }
    else {
      list = colorL !== '--' ? list.filter(item => item.colors ? item.colors.some(c => c.l == colorL) : false) : list;
      list = colorR !== '--' ? list.filter(item => item.colors ? item.colors.some(c => c.r == colorR) : false) : list;
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