import { Component, inject } from '@angular/core';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Effect } from '@app/views/games/A25RW/_services/a25rw.interface';
import { A25RWService } from '@app/views/games/A25RW/_services/a25rw.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A25RWEffectComponent } from './a25rw-effect.component';

@Component({
    templateUrl: 'a25rw-effectlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports,
        A25RWEffectComponent, FilterListComponent]
})

export class A25RWEffectlistComponent extends DialogUseComponent {
  protected a25rwservice: A25RWService = inject(A25RWService)
  filteredEffects: Observable<Effect[]>;

  constructor() {
    super();
    this.component = A25RWEffectComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData() {
    this.gameService(this.a25rwservice, 'effects');
    this.genericSettings(this.a25rwservice.effect_translation[this.language], `The list of effects in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a25rwservice.getEffectList(this.language);
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
      return effect.name.toLowerCase().includes(filterValue) || effect.desc.toLowerCase().includes(filterValue)
    });
  }
}