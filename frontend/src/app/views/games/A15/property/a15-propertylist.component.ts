import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a15-propertylist.component.html',
  providers: [DestroyService]
})
export class A15PropertylistComponent extends ListComponent implements OnInit {
  propertyControl: UntypedFormControl;
  properties: Property[];
  filteredProperties: Observable<Property[]>;
  currentTransfer: string = "1";

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a15service: A15Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.gameService(this.a15service, 'properties');
    this.propertyControl = new UntypedFormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.propertyControl,
      transfers: ['']
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.genericSEO(`Properties`, `The list of properties in ${this.gameTitle}.`);
    this.getProperties();
  }

  getProperties() {
    this.a15service.getPropertyList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: properties => {
          this.properties = properties;
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
        propertylist = this.properties.filter(property => property.bomb == true);
        break;
      case "3":
        propertylist = this.properties.filter(property => property.heal == true);
        break;
      case "4":
        propertylist = this.properties.filter(property => property.buff == true);
        break;
      case "5":
        propertylist = this.properties.filter(property => property.weapon == true);
        break;
      case "6":
        propertylist = this.properties.filter(property => property.armor == true);
        break;
      case "7":
        propertylist = this.properties.filter(property => property.accessory == true);
        break;
    }
    if (!value) {
      return propertylist;
    }
    const filterValue = value.toLowerCase();
    return propertylist.filter(property => {
      return property.name.toLowerCase().includes(filterValue) || property.desc.toLowerCase().includes(filterValue)
    });
  }

  identify2(index, item) {
    return item.slugname;
  }
}