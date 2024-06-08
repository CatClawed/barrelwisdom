import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Tooltip } from '@app/views/_components/tooltip/tooltip.component';
import { Property } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { CommonImports, MaterialFormImports, ModalBandaidModule } from '@app/views/games/_prototype/SharedModules/common-imports';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A15PropertyComponent } from './a15-property.component';

@Component({
  templateUrl: 'a15-propertylist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports, ModalBandaidModule,
    A15PropertyComponent, Tooltip]
})
export class A15PropertylistComponent extends ModalUseComponent {
  filteredProperties: Observable<Property[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a15service: A15Service,) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      transfers: ''
    })
  }

  changeData() {
    this.gameService(this.a15service, 'properties');
    this.genericSEO(`Properties`, `The list of properties in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a15service.getPropertyList(this.language);
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
      case "4":
        propertylist = propertylist.filter(property => property.buff);
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
    if (!value) {
      return propertylist;
    }
    const filterValue = value.toLowerCase();
    return propertylist.filter(property => {
      return property.name.toLowerCase().includes(filterValue) || property.desc.toLowerCase().includes(filterValue)
    });
  }
}