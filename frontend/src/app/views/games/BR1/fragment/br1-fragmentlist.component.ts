import { Component, inject } from '@angular/core';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { FragmentEffect } from '@app/views/games/BR1/_services/br1.interface';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    templateUrl: 'br1-fragmentlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports, FilterListComponent]
})

export class BR1FragmentEffectlistComponent extends FragmentedComponent {
  protected br1service = inject(BR1Service);
  filteredFragmentEffects: Observable<FragmentEffect[]>;

  constructor() {
    super();
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: ''
    })
  }

  changeData() {
    this.gameService(this.br1service, 'fragment-effects');
    this.genericSettings(`Fragment Effects`, `The list of fragment effects in ${this.gameTitle}.`);
    return this.br1service.getFragmentEffectList(this.language)
  }

  override afterAssignment(): void {
    this.filteredFragmentEffects = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<FragmentEffect[]>),
      map((search: any) => search ? this.filterT(search.filtertext) : this.data.slice())
    );
  }

  private filterT(value: string): FragmentEffect[] {
    this.hide = false;
    let list: FragmentEffect[] = this.data;
    if (value) {
      const filterValue = value.toLowerCase();
      return list.filter(fragmenteffect => {
        return fragmenteffect.name.toLowerCase().includes(filterValue);
      });
    }
    return list;
  }
}