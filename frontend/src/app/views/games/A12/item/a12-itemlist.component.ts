import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { ItemList } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A12ItemComponent } from './a12-item.component';

@Component({
    templateUrl: 'a12-itemlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports, ItemComponent,
        MatButtonModule, FilterListComponent]
})

export class A12ItemlistComponent extends DialogUseComponent {
  protected a12service = inject(A12Service);
  filteredItems: Observable<ItemList[]>;

  constructor() {
    super();
    this.component = A12ItemComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      filtering: '',
      type: '--',
      level: 0,
    })
  }

  changeData() {
    this.gameService(this.a12service, 'items');
    this.genericSettings(this.a12service.item_translation[this.language],
      `The list of items in ${this.gameTitle}.`);
    this.pageForm.reset();
    return forkJoin({
      items: this.a12service.getItemList(this.language),
      categories: this.a12service.getCategories(this.language)
    })
  }

  override afterAssignment(): void {
    this.filteredItems = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<ItemList[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.type, search.level, search.filtering) : this.data.items.slice())
    );
  }

  private filterT(value: string, type: string, level: number, ing: string): ItemList[] {
    this.hide = false;
    let list: ItemList[] = this.data.items;

    if (type != '--') {
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
}