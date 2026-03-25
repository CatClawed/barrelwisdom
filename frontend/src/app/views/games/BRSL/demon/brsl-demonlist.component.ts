import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { DemonList } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BRSLDemonComponent } from './brsl-demon.component';

@Component({
    templateUrl: 'brsl-demonlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports, FilterListComponent,
        ItemComponent, MatButtonModule]
})

export class BRSLDemonlistComponent extends DialogUseComponent {
  protected brslservice = inject(BRSLService);
  filteredDemons: Observable<DemonList[]>;

  constructor() {
    super();
    this.component = BRSLDemonComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: ''
    })
  }

  changeData() {
    this.gameService(this.brslservice, 'demons');
    this.genericSettings(this.brslservice.demons_translation[this.language],
      `The list of demons in ${this.gameTitle}.`);
    this.pageForm.reset()
    return this.brslservice.getDemonList(this.language)
  }

  override afterAssignment(): void {
    this.data = this.data.slice(0, 103)
    this.filteredDemons = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<DemonList[]>),
      map((search: any) => search ? this.filterT(search.filtertext) : this.data.slice())
    );
  }

  private filterT(value: string): DemonList[] {
    this.hide = false;
    let list: DemonList[] = this.data;
    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(mon => {
      return mon.name.toLowerCase().includes(filterValue);
    });
  }
}