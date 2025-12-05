import { Component, inject } from '@angular/core';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Effect } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A18EffectComponent } from './a18-effect.component';

@Component({
    templateUrl: 'a18-effectlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports,
        A18EffectComponent, FilterListComponent]
})

export class A18EffectlistComponent extends DialogUseComponent {
  protected a18service = inject(A18Service);
  filteredEffects: Observable<Effect[]>;

  constructor() {
    super();
    this.component = A18EffectComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData() {
    this.gameService(this.a18service, 'effects');
    this.genericSettings(`Effects`, `The list of effects in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a18service.getEffectList(this.language);
  }

  override afterAssignment(): void {
    this.filteredEffects = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Effect[]>),
      map((search: any) => search ? this.filterT(search.filtertext) : this.data.slice())
    );
  }

  private filterT(value: string): Effect[] {
    this.hide = false;
    let effectlist: Effect[] = this.data;
    if (!value) {
      return effectlist;
    }
    const filterValue = value.toLowerCase();
    return effectlist.filter(effect => {
      return (effect.desc) ? effect.name.toLowerCase().includes(filterValue) || effect.desc.toLowerCase().includes(filterValue) : effect.name.toLowerCase().includes(filterValue)
    });
  }
}