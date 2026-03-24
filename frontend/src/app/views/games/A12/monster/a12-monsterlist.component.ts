import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { MonsterList } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A12MonsterComponent } from './a12-monster.component';

@Component({
    templateUrl: 'a12-monsterlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports,
        MatButtonModule, FilterListComponent, ItemComponent]
})

export class A12MonsterlistComponent extends DialogUseComponent {
  protected a12service = inject(A12Service);
  filteredMonsters: Observable<MonsterList[]>;

  constructor() {
    super();
    this.component = A12MonsterComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData() {
    this.gameService(this.a12service, 'monsters');
    this.genericSettings(this.a12service.monster_translation[this.language],
      `The list of monsters in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a12service.getMonsterList(this.language);
  }

  override afterAssignment(): void {
    this.filteredMonsters = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<MonsterList[]>),
      map((search: any) => search ? this.filterT(search.filtertext) : this.data.slice())
    );
  }

  private filterT(value: string): MonsterList[] {
    this.hide = false;
    let list: MonsterList[] = this.data;
    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(mon => {
      return mon.name.toLowerCase().includes(filterValue);
    });
  }
}