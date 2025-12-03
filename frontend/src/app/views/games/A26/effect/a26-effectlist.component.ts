import { Component, inject } from '@angular/core';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Effect } from '@app/views/games/A26/_services/a26.interface';
import { A26Service } from '@app/views/games/A26/_services/a26.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A26EffectComponent } from './a26-effect.component';

@Component({
    templateUrl: 'a26-effectlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports,
        A26EffectComponent, FilterListComponent]
})

export class A26EffectlistComponent extends DialogUseComponent {
  protected a26service = inject(A26Service);
  filteredEffects: Observable<Effect[]>;

  constructor() {
    super()
    this.component = A26EffectComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData() {
    this.gameService(this.a26service, 'effects');
    this.genericSettings(this.a26service.effect_translation[this.language], `The list of effects in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a26service.getEffectList(this.language);
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
      return (effect.desc2) ? effect.name.toLowerCase().includes(filterValue) || effect.desc1.toLowerCase().includes(filterValue) || effect.desc2.toLowerCase().includes(filterValue) : effect.name.toLowerCase().includes(filterValue) || effect.desc1.toLowerCase().includes(filterValue)
    });
  }
}