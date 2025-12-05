import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { Monster } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A18MonsterComponent } from './a18-monster.component';

@Component({
    templateUrl: 'a18-monsterlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports, FilterListComponent,
        ItemComponent, MatButtonModule]
})

export class A18MonsterlistComponent extends DialogUseComponent {
  protected a18service = inject(A18Service);
  filteredMonsters: Observable<Monster[]>;

  constructor() {
    super();
    this.component = A18MonsterComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      type: 'Any'
    })
  }

  changeData() {
    this.gameService(this.a18service, 'monsters');
    this.genericSettings(`Monsters`, `The list of monsters in ${this.gameTitle}.`);
    this.pageForm.reset();
    return forkJoin({
      monsters: this.a18service.getMonsterList(this.language),
      races: this.a18service.getRaceList(this.language)
    });
  }

  override afterAssignment(): void {
    this.filteredMonsters = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Monster[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.type) : this.data.monsters.slice())
    );
  }

  private filterT(value: string, type: string): Monster[] {
    this.hide = false;
    let list: Monster[] = this.data.monsters;
    if (type != 'Any') {
      list = list.filter(mon => type == mon.race)
    }
    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(mon => {
      return mon.name.toLowerCase().includes(filterValue)
    });
  }
}