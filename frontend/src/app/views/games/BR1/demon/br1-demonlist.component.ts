import { Component, inject } from '@angular/core';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Demon } from '@app/views/games/BR1/_services/br1.interface';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BR1DemonComponent } from './br1-demon.component';

@Component({
    templateUrl: 'br1-demonlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports, BR1DemonComponent, FilterListComponent]
})

export class BR1DemonlistComponent extends DialogUseComponent {
  protected br1service = inject(BR1Service);
  filteredDemons: Observable<Demon[]>;

  constructor() {
    super();
    this.component = BR1DemonComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: ''
    })
  }

  changeData() {
    this.gameService(this.br1service, 'demons');
    this.genericSettings(`Demons`, `The list of demons in ${this.gameTitle}.`);
    return this.br1service.getDemonList(this.language);
  }

  override afterAssignment(): void {
    this.filteredDemons = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Demon[]>),
      map((search: any) => search ? this.filterT(search.filtertext) : this.data.slice())
    );
  }

  private filterT(value: string): Demon[] {
    this.hide = false;
    let list: Demon[] = this.data;
    if (value) {
      const filterValue = value.toLowerCase();
      return list.filter(demon => {
        return demon.name.toLowerCase().includes(filterValue);
      });
    }
    return list;
  }
}