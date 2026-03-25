import { Component, inject } from '@angular/core';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { FacilitySet } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FilterableComponent } from '@app/views/games/_prototype/filterable.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    templateUrl: 'brsl-facilityset.component.html',
    imports: [...CommonImports, ...MaterialFormImports, FilterListComponent]
})

export class BRSLFacilitySetComponent extends FilterableComponent {
  protected brslservice = inject(BRSLService);
  filteredSets: Observable<FacilitySet[]>;

  constructor() {
    super();
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: ''
    })
  }

  changeData() {
    this.gameService(this.brslservice, 'facilities/sets');
    this.genericSettings(this.brslservice.facility_sets_translation[this.language],
      `All facility sets in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.brslservice.getFacilitySetList(this.language);
  }

  override afterAssignment(): void {
    this.filteredSets = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<FacilitySet[]>),
      map((search: any) => search ? this.filterT(search.filtertext) : this.data.slice())
    );
  }

  private filterT(value: string): FacilitySet[] {
    let list: FacilitySet[] = this.data;
    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(set => {
      return set.effect.name.toLowerCase().includes(filterValue) || set.effect.desc.toLowerCase().includes(filterValue)
        || set.facilities.some(f => f.name.toLowerCase().includes(filterValue));
    });
  }
}