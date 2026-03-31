import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { Monster } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A22MonsterComponent } from './a22-monster.component';

@Component({
    templateUrl: 'a22-monsterlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports, FilterListComponent,
        ItemComponent, MatButtonModule]
})

export class A22MonsterlistComponent extends DialogUseComponent {
  protected a22service = inject(A22Service);
  filteredMonsters: Observable<Monster[]>;

  constructor() {
    super();
    this.component = A22MonsterComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      type: ''
    })
  }

  changeData() {
    this.gameService(this.a22service, 'monsters');
    this.genericSettings(this.a22service.monster_translation[this.language], `The list of monsters in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a22service.getMonsterList(this.language);
  }

  override afterAssignment(): void {
    this.filteredMonsters = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Monster[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.type) : this.data.slice())
    );
  }

  private filterT(value: string, type: string): Monster[] {
    this.hide = false;
    let list: Monster[];

    switch (type) {
      case "1":
        list = this.data;
        break;
      case undefined:
        list = this.data;
        break;
      case "Small":
      case "Medium":
      case "Large":
        list = this.data.filter(mon => mon.size == type);
        break;
      default:
        list = this.data.filter(mon => mon.montype == type);
        break;
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