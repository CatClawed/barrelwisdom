import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { Monster } from '@app/views/games/A26/_services/a26.interface';
import { A26Service } from '@app/views/games/A26/_services/a26.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A26MonsterComponent } from './a26-monster.component';

@Component({
    templateUrl: 'a26-monsterlist.component.html',
    styleUrls: ['../yumia.scss'],
    imports: [...CommonImports, ...MaterialFormImports, FilterListComponent,
        ItemComponent, MatButtonModule]
})

export class A26MonsterlistComponent extends DialogUseComponent {
  protected a26service = inject(A26Service);
  filteredMonsters: Observable<Monster[]>;

  constructor() {
    super();
    this.component = A26MonsterComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      type: ''
    })
  }

  changeData() {
    this.gameService(this.a26service, 'monsters');
    this.genericSettings(this.a26service.monster_translation[this.language], `The list of monsters in ${this.gameTitle}.`);
    this.pageForm.reset();
    return forkJoin({
      monsters: this.a26service.getMonsterList(this.language),
      races: this.a26service.getRaceList(this.language)
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
    if (type != '' && type !== '') {
      list = list.filter(mon => type == mon.race.name)
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