import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { FacilitySet } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { FilterableComponent } from '@app/views/games/_prototype/filterable.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  templateUrl: 'brsl-facilityset.component.html',
  providers: [DestroyService]
})

export class BRSLFacilitySetComponent extends FilterableComponent {
  filteredSets: Observable<FacilitySet[]>;

  constructor(
    protected readonly destroy$: DestroyService,
    private formBuilder: UntypedFormBuilder,
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private brslservice: BRSLService,
  ) {
    super(destroy$, route, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: ''
    })
  }

  changeData() {
    this.gameService(this.brslservice, 'facilities/sets');
    this.genericSEO(`Facility Sets`, `All facility sets in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.brslservice.getFacilitySetList(this.language);
  }

  afterAssignment(): void {
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