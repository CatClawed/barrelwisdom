import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { FacilitySet, NameOnly } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'brsl-facilityset.component.html',
  providers: [DestroyService]
})

export class BRSLFacilitySetComponent extends SingleComponent2 {
  pageForm: UntypedFormGroup;
  facilityControl: UntypedFormControl;
  facilities: FacilitySet[];
  categories: NameOnly[];
  filteredSets: Observable<FacilitySet[]>;
  searchstring = "";

  constructor(
    protected readonly destroy$: DestroyService,
    private formBuilder: UntypedFormBuilder,
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private brslservice: BRSLService,
  ) {
    super(destroy$, route, seoService);
    this.facilityControl = new UntypedFormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.facilityControl
    })
  }

  changeData() {
    this.brslservice.getFacilitySetList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: facilities => {
          this.error = ``;
          this.facilities = facilities;
          this.gameService(this.brslservice, 'facilities/sets');
          this.genericSEO(`Facility Sets`, `All facility sets in ${this.gameTitle}.`);      
          this.filteredSets = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<FacilitySet[]>),
            map((search: any) => search ? this.filterT(search.filtertext) : this.facilities.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string): FacilitySet[] {
    let list: FacilitySet[] = this.facilities;
    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(set => {
      return set.effect.name.toLowerCase().includes(filterValue) || set.effect.desc.toLowerCase().includes(filterValue)
        || set.facilities.some(f => f.name.toLowerCase().includes(filterValue));
    });
  }

  get f() { return this.pageForm.controls; }

  identify(index, item) {
    return item.slug;
  }
}