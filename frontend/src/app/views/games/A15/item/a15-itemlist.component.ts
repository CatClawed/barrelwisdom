import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { ItemList } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A15ItemComponent } from './a15-item.component';

@Component({
  templateUrl: 'a15-itemlist.component.html',
  styleUrl: '../a15.scss',
  imports: [...CommonImports, ...MaterialFormImports, FilterListComponent,
    ItemComponent, MatButtonModule]
})

export class A15ItemlistComponent extends DialogUseComponent {
  protected a15service = inject(A15Service);
  filteredItems: Observable<ItemList[]>;

  constructor() {
    super();
    this.component = A15ItemComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      filtering: '',
      type: '--',
      elementval: 0,
      fire: false,
      water: false,
      wind: false,
      earth: false,
    })
  }

  changeData() {
    this.gameService(this.a15service, 'items');
    this.genericSettings(this.a15service.item_translation[this.language],
      `The list of items in ${this.gameTitle}.`);
    this.pageForm.reset();
    return forkJoin({
      items: this.a15service.getItemList(this.language),
      categories: this.a15service.getCategories(this.language)
    })
  }
  override afterAssignment(): void {
    this.filteredItems = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<ItemList[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.type, search.elementval, search.fire, search.water, search.wind, search.earth, search.filtering) : this.data.items.slice())
    );
  }

  private filterT(value: string, type: string, elementV: number, fire: boolean, water: boolean, wind: boolean, earth: boolean, ing: string): ItemList[] {
    this.hide = false;
    let list: ItemList[] = this.data.items;

    if (type != '--') {
      list = list.filter(item => item.categories.some(c => c.name == type));
    }

    if (elementV > 1) {
      list = list.filter(item => item.evalue >= elementV);
    }
    if (fire) {
      list = list.filter(item => item.fire)
    }
    if (water) {
      list = list.filter(item => item.water)
    }
    if (wind) {
      list = list.filter(item => item.wind)
    }
    if (earth) {
      list = list.filter(item => item.earth)
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