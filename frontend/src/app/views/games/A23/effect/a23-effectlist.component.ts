import { Component, inject } from '@angular/core';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Effect } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A23EffectComponent } from './a23-effect.component';

@Component({
    templateUrl: 'a23-effectlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports,
        A23EffectComponent, FilterListComponent]
})

export class A23EffectlistComponent extends DialogUseComponent {
  protected a23service = inject(A23Service);
  filteredEffects: Observable<Effect[]>;

  constructor() {
    super();
    this.component = A23EffectComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData() {
    this.gameService(this.a23service, 'effects');
    this.genericSettings(this.a23service.effect_translation[this.language], `The list of effects in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a23service.getEffectList(this.language);
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