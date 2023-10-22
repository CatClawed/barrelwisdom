import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Property } from '@app/views/games/A16/_services/a16.interface';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { ListComponent2 } from '@app/views/games/_prototype/list2.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a16-propertylist.component.html',
  providers: [DestroyService]
})
export class A16PropertylistComponent extends ListComponent2 {
  propertyControl: UntypedFormControl;
  properties: Property[];
  filteredProperties: Observable<Property[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a16service: A16Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.propertyControl = new UntypedFormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.propertyControl,
      transfers: ['']
    })
  }

  changeData() {
    this.a16service.getPropertyList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: properties => {
          this.properties = properties;
          this.gameService(this.a16service, 'properties');
          this.genericSEO(`Properties`, `The list of properties in ${this.gameTitle}.`);
          this.filteredProperties = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<Property[]>),
            map((search: any) => search ? this.filterT(search.filtertext, search.transfers) : this.properties.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string, transfer: string): Property[] {
    let propertylist: Property[] = this.properties;
    switch (transfer) {
      case "2":
        propertylist = this.properties.filter(property => property.bomb);
        break;
      case "3":
        propertylist = this.properties.filter(property => property.heal);
        break;
      case "5":
        propertylist = this.properties.filter(property => property.weapon);
        break;
      case "6":
        propertylist = this.properties.filter(property => property.armor);
        break;
      case "7":
        propertylist = this.properties.filter(property => property.accessory);
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