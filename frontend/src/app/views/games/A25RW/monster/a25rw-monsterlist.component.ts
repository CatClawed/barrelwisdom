import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { Monster } from '@app/views/games/A25RW/_services/a25rw.interface';
import { A25RWService } from '@app/views/games/A25RW/_services/a25rw.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A25RWMonsterComponent } from './a25rw-monster.component';

@Component({
    templateUrl: 'a25rw-monsterlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports, FilterListComponent,
        ItemComponent, MatButtonModule]
})

export class A25RWMonsterlistComponent extends DialogUseComponent {
  protected a25rwservice: A25RWService = inject(A25RWService)
  filteredMonsters: Observable<Monster[]>;
  things;

  constructor() {
    super();
    this.component = A25RWMonsterComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      small: false,
      large: false,
      boss: false,
    })
    this.things = [
      this.pageForm.controls.small,
      this.pageForm.controls.large,
      this.pageForm.controls.boss,
    ]
  }

  changeData() {
    this.gameService(this.a25rwservice, 'monsters');
    this.genericSettings(this.a25rwservice.monster_translation[this.language], `The list of monsters in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a25rwservice.getMonsterList(this.language);
  }

  override afterAssignment(): void {
    this.filteredMonsters = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Monster[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.small, search.large, search.boss) : this.data.slice())
    );
  }

  private filterT(value: string, small: boolean, large: boolean, boss: boolean): Monster[] {
    this.hide = false;
    let list: Monster[] = this.data;
    list = small ? list.filter(trait => trait.index < 500) : list;
    list = large ? list.filter(trait => trait.index >= 500 && trait.index < 1000)  : list;
    list = boss  ? list.filter(trait => trait.index >= 1000) : list;

    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(mon => {
      return mon.name.toLowerCase().includes(filterValue)
    });
  }
}