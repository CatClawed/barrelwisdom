import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Popover } from '@app/views/_components/popover/popover.component';
import { Item } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { forkJoin, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A25ItemComponent } from './a25-item.component';

@Component({
    templateUrl: 'a25-materiallist.component.html',
    styleUrls: ['../resleri.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [...CommonImports, ...MaterialFormImports, FilterListComponent,
        MatButtonModule, Popover]
})

export class A25MaterialListComponent extends DialogUseComponent {
  protected a25service = inject(A25Service);
  filteredItems: Observable<Item[]>;
  combat = {
    "en":"Combat",
    "ja":"戦闘",
    "sc":"战斗道具",
    "tc":"戰鬥道具"
  }

  constructor() {
    super();
    this.component = A25ItemComponent
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      filtertrait: '',
      color: '',
      rarity: '0',
      traittype: ''
    })
  }

  changeData() {
    this.gameService(this.a25service, 'items/materials');
    this.genericSettings(this.a25service.material_translation[this.language], `The list of materials in ${this.gameTitle}.`);
    this.pageForm.reset()
    return forkJoin({
      items: this.a25service.getMaterialList(this.language),
      colors: this.a25service.getFilter('color', this.language)
    })
  }

  override afterAssignment(): void {
    this.filteredItems = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Item[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.color, search.rarity, search.filtertrait, search.traittype) : this.data.items.slice())
    );
  }

  override extraSettings(): void {
    this.dialogref.componentInstance.itemkind = 'materials'
  }

  private filterT(value: string, color: string, rarity: number, filter: string, traittype: string): Item[] {
    this.hide = false;
    let list: Item[] = this.data.items;

    if (color != 'Any' && color) {
      list = list.filter(item => item.material[0].color == color);
    }
    if (rarity > 0) {
      list = list.filter(item => item.rarity == rarity)
    }
    if (traittype !== 'Any' && traittype) {
      list = list.filter(item => item.material[0].traits ? item.material[0].traits[0].kind === traittype : false)
    }
    if (filter) {
      filter = filter.toLocaleLowerCase()
      list = list.filter(item => item.material[0].traits ?
        (item.material[0].traits.some(t =>
          t.name.toLowerCase().includes(filter) )
        ) : false)
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

  insertStyle(item: Item): string {
    if (!item.material[0].color) return '';
    return `box-shadow: 1px 2px 4px 1px grey, inset 0 0px 30px 4px ${this.a25service.colorList[item.material[0].color]}`
  }
}