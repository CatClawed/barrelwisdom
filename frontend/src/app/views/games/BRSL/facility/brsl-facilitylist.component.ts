import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { FacilityList } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BRSLFacilityComponent } from './brsl-facility.component';

@Component({
    templateUrl: 'brsl-facilitylist.component.html',
    imports: [...CommonImports, ...MaterialFormImports, FilterListComponent,
        ItemComponent, MatButtonModule]
})

export class BRSLFacilitylistComponent extends DialogUseComponent {
  protected brslservice = inject(BRSLService);
  filteredFacilities: Observable<FacilityList[]>;

  constructor() {
    super();
    this.component = BRSLFacilityComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData() {
    this.gameService(this.brslservice, 'facilities');
    this.genericSettings(`Facilities`, `The list of facilities in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.brslservice.getFacilityList(this.language);
  }
  override afterAssignment(): void {
    this.data = this.data.slice(0, 44)
    this.filteredFacilities = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<FacilityList[]>),
      map((search: any) => search ? this.filterT(search.filtertext) : this.data.slice())
    );
  }
  private filterT(value: string): FacilityList[] {
    this.hide = false;
    let list: FacilityList[] = this.data;
    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(mon => {
      return mon.name.toLowerCase().includes(filterValue);
    });
  }
}