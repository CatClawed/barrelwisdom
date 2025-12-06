import { Component, inject } from '@angular/core';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Effect } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A15EffectComponent } from './a15-effect.component';

@Component({
    templateUrl: 'a15-effectlist.component.html',
    selector: 'a15-effectlist',
    imports: [...CommonImports, ...MaterialFormImports, A15EffectComponent, FilterListComponent]
})

export class A15EffectlistComponent extends DialogUseComponent {
  protected a15service = inject(A15Service);
  filteredEffects: Observable<Effect[]>;

  constructor() {
    super();
    this.component = A15EffectComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData() {
    this.gameService(this.a15service, 'effects');
    this.genericSettings(`Effects`, `The list of effects in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a15service.getEffectList(this.language);
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