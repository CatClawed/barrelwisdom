import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { FacilityList } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { CommonImports, MaterialFormImports, ModalBandaidModule } from '@app/views/games/_prototype/SharedModules/common-imports';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BRSLFacilityComponent } from './brsl-facility.component';

@Component({
  templateUrl: 'brsl-facilitylist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports, ModalBandaidModule,
    BRSLFacilityComponent, MatButtonModule]
})

export class BRSLFacilitylistComponent extends ModalUseComponent {
  filteredFacilities: Observable<FacilityList[]>;

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
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData() {
    this.gameService(this.brslservice, 'facilities');
    this.genericSEO(`Facilities`, `The list of facilities in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.brslservice.getFacilityList(this.language);
  }
  afterAssignment(): void {
    this.data = this.data.slice(0, 44)
    this.filteredFacilities = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<FacilityList[]>),
      map((search: any) => search ? this.filterT(search.filtertext) : this.data.slice())
    );
  }
  private filterT(value: string): FacilityList[] {
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