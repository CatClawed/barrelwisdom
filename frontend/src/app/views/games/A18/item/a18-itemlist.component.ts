import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { Item } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A18ItemComponent } from './a18-item.component';


@Component({
    templateUrl: 'a18-itemlist.component.html',
    styleUrl: '../a18.scss',
    imports: [...CommonImports, ...MaterialFormImports, ItemComponent,
        FilterListComponent, MatButtonModule]
})

export class A18ItemlistComponent extends DialogUseComponent {
  protected a18service = inject(A18Service);
  filteredItems: Observable<Item[]>;

  constructor() {
    super();
    this.component = A18ItemComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      filtering: '',
      cat: '--',
    })
  }

  changeData() {
    this.gameService(this.a18service, 'items');
    this.genericSettings(this.a18service.item_translation[this.language]
      , `The list of items in ${this.gameTitle}.`);
    this.pageForm.reset();
    return forkJoin({
      items: this.a18service.getItemList(this.language),
      categories: this.a18service.getCategoryList(this.language)
    })
  }

  override afterAssignment(): void {
    this.filteredItems = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Item[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.cat, search.filtering) : this.data.items.slice())
    );
  }

  private filterT(value: string, cat: string, ingt: string): Item[] {
    this.hide = false;
    let list: Item[] = this.data.items;
    if (cat != '--') {
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