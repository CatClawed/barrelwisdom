import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Property } from '@app/views/games/A16/_services/a16.interface';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { CommonImports, MaterialFormImports, ModalBandaidModule, TooltipBandaidModule } from '@app/views/games/_prototype/SharedModules/common-imports';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A16PropertyComponent } from './a16-property.component';

@Component({
  templateUrl: 'a16-propertylist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports, ModalBandaidModule,
    TooltipBandaidModule, A16PropertyComponent]
})
export class A16PropertylistComponent extends ModalUseComponent {
  filteredProperties: Observable<Property[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a16service: A16Service) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      transfers: ''
    })
  }

  changeData() {
    this.gameService(this.a16service, 'properties');
    this.genericSEO(`Properties`, `The list of properties in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a16service.getPropertyList(this.language);
  }
  afterAssignment(): void {
    this.filteredProperties = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Property[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.transfers) : this.data.slice())
    );
  }

  private filterT(value: string, transfer: string): Property[] {
    let propertylist: Property[] = this.data;
    switch (transfer) {
      case "2":
        propertylist = propertylist.filter(property => property.bomb);
        break;
      case "3":
        propertylist = propertylist.filter(property => property.heal);
        break;
      case "5":
        propertylist = propertylist.filter(property => property.weapon);
        break;
      case "6":
        propertylist = propertylist.filter(property => property.armor);
        break;
      case "7":
        propertylist = propertylist.filter(property => property.accessory);
        break;
    }
    if (value) {
      const filterValue = value.toLowerCase();
      return propertylist.filter(property => {
        return property.name.toLowerCase().includes(filterValue) || property.desc.toLowerCase().includes(filterValue)
      });
    }
    return propertylist;
  }
}