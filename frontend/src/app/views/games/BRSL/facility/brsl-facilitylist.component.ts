import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { FacilityList } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'brsl-facilitylist.component.html',
  providers: [DestroyService]
})

export class BRSLFacilitylistComponent extends ListComponent implements OnInit {
  facilities: FacilityList[];
  filteredFacilities: Observable<FacilityList[]>;
  facilityControl: UntypedFormControl;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private brslservice: BRSLService,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.gameService(this.brslservice, 'facilities');
    this.facilityControl = new UntypedFormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.facilityControl,
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.getFacilities();
    this.genericSEO(`Facilities`, `The list of facilities in ${this.gameTitle}.`);
  }

  getFacilities() {
    this.brslservice.getFacilityList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: facilities => {
          this.facilities = facilities.slice(0, 44);
          this.filteredFacilities = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<FacilityList[]>),
            map((search: any) => search ? this.filterT(search.filtertext) : this.facilities.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
  private filterT(value: string): FacilityList[] {
    let list: FacilityList[] = this.facilities;
    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(mon => {
      return mon.name.toLowerCase().includes(filterValue);
    });
  }
}