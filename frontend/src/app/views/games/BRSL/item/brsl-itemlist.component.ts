import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { ItemList } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BRSLItemComponent } from './brsl-item.component';

@Component({
    templateUrl: 'brsl-itemlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports, FilterListComponent,
        ItemComponent, MatButtonModule]
})

export class BRSLItemlistComponent extends DialogUseComponent {
  protected brslservice = inject(BRSLService);
  filteredItems: Observable<ItemList[]>;

  constructor() {
    super();
    this.component = BRSLItemComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      category: '--',
      type: '--'
    })
  }

  changeData() {
    this.gameService(this.brslservice, 'items');
    this.genericSettings(this.brslservice.item_translation[this.language],
      `The list of items in ${this.gameTitle}.`);
    this.pageForm.reset();
    return forkJoin({
      items: this.brslservice.getItemList(this.language),
      categories: this.brslservice.getCategoryList(this.language)
    })
  }

  override afterAssignment(): void {
    this.filteredItems = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<ItemList[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.type, search.category) : this.data.items.slice())
    );
  }

  private filterT(value: string, type: string, category: string): ItemList[] {
    this.hide = false;
    let list: ItemList[] = this.data.items;
    if (type != '--') {
      list = list.filter(item => item.itemtype == type);
    }
    if (category != '--') {
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